import { request } from './helpers'

export default async function getData(url) {
    // Will fetch getDevice API with userId=100 and orgId=Lumi
    const getDeviceList = await request(url);

    // Will take the output of labs list
    // Create an API call on each output of lab list as deviceId
    // Will return promise of each request of each array item.
    const getDeviceDataList = getDeviceList.output.map((lab) => {
        return request(`https://mockapi.lumi.systems/getdevicedata?deviceId=${lab}`)
    })

    // Will try to resolve each promise using Promise.allSettled on an array
    // And fetch its response which we again try to map it
    const resolvedDeviceDataList = await Promise.allSettled(getDeviceDataList)
        .then((response) => {
            return response.map((res) => {
                if(res.status === 'fulfilled') {
                    return res.value
                }
                return null
            })
        })
    
    // Will filter out output with value not equal to null
    const getDataList = resolvedDeviceDataList
        .filter((labDetail) => labDetail.output !== null)
        .map(({ output }) => output)

    // Call to get CMV data list
    const getCMVData = getDataList.map(({ cvmdata }) => {
        return request(cvmdata)
    })
    const cmvDataFulfilledPromise = await Promise.allSettled(getCMVData)
        .then((response) => {
            return response.map((res) => ({...res.value}))
        })

    return getDataList.map((list) => {
        return ({
            ...list,
            ...cmvDataFulfilledPromise.find((cmvData) => cmvData)
        })
    })
}