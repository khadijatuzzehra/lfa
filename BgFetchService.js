import BackgroundFetch from 'react-native-background-fetch';

BackgroundFetch.configure(
  {
    minimumFetchInterval: 15,
    forceAlarmManager: true,
    startOnBoot: true,
    stopOnTerminate: false,
    enableHeadless: true,
  },
  async taskId => {
    // <-- Event callback
    console.log('[BackgroundFetch] taskId: kuch kuch ', taskId, new Date());
    BackgroundFetch.finish(taskId);
  },
  async taskId => {
    // <-- Task timeout callback
    console.log('[BackgroundFetch] second taskId: ', taskId);
    BackgroundFetch.finish(taskId);
  },
)
  .then(res => {
    console.log(res);
  })
  .catch(e => console.log(e, 'error Tag'))
  .finally(f => console.log(f, 'finally Tag'));

BackgroundFetch.scheduleTask({
  taskId: 'com.clickservice.background-fetch',
  delay: 1000, // milliseconds
  forceAlarmManager: true,
  periodic: true,
  enableHeadless: true,
  stopOnTerminate: false,
  startOnBoot: true,
});

let MyHeadlessTask = async event => {
  // Get task id from event {}:
  let taskId = event.taskId;
  let isTimeout = event.timeout; // <-- true when your background-time has expired.
  if (isTimeout) {
    // This task has exceeded its allowed running-time.
    // You must stop what you're doing immediately finish(taskId)
    console.log('[BackgroundFetch] Headless TIMEOUT:', taskId);
    BackgroundFetch.finish(taskId);
    return;
  }
  console.log('[BackgroundFetch HeadlessTask] start: ', taskId);

  BackgroundFetch.finish(taskId);
};

BackgroundFetch.registerHeadlessTask(MyHeadlessTask);
