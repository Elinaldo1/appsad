import Reactotron from 'reactotron-react-native';


  const tron = Reactotron.configure({
      host: '192.168.1.7',
      port: 9090
    })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
