import useData from './hooks/useData';
import './App.css';
import Video from './components/Video';
import VideoFrameInfo from './components/VideoFrameInfo';
import VideoRGBInfo from './components/VideoRGBInfo';

// We can take this from user through form or something else
const userId = 100
const orgId = 'Lumi'

function App() {
  const labListApiUrl = `https://mockapi.lumi.systems/getdevices?userId=${userId}&orgId=${orgId}`
  const [data, error, loading] = useData(labListApiUrl)

  if(loading) {
    return (<div>Loading</div>)
  }

  if(error) {
    return (<div>{error}</div>)
  }
  return (
    <div className='wrapper'>
      {data.map(({ videofiles }, index) => {
        return (
          <div className='video-list'>
            <Video videofiles={videofiles} index={index} />
            <div className='video-list__detail'>
              <VideoRGBInfo />
              <VideoFrameInfo />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
