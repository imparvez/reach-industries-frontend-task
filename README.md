# Reach Industries FrontEnd Task

Set-up
```sh
npm install && npm start
```

Approach:
- First calling getdevices API with static value userId=100 and orgId='Lumi'.
- With the help of response array, trying to map it and calling second API i.e getdevicedata
- Request will be array of promises which we can resolve with Promise.allSettled method.
- And again, to retrieve cvmdata from each response, we did one more API call which will bring the response and that we can return it as whole object with cvmdata and videofiles.
- This data on front-end will be iterate and display as a list, as per my understanding.

Improvement
- we can take userId and orgId from user in a form UI.
- The interaction when the video is played and update frame number, etc can be done with animation or canvas, which right now I have very little knowledge but I can explore if the approach is right.
