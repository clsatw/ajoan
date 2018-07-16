import { Prod } from 'app/core/models/prod';

export const PRODS_EN: Prod[] = [
  {
    id: 1,
    name: `Water pump (sleep mode)`,
    desc: `very low power consumption.
      On power on or waking up from sleep mode, it checks if there is an event to handle.
      If so, turn on the pump for 10 minutes and then enter deep sleep mode for 3.5 hours, else go into sleep mode for 3.5 hours.
      Repeat the procedue to reduce power comsuption`,
    url1: 'assets/waterpump1.mp4',
    url2: 'assets/waterpump-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/waterpump.png'
  },
  {
    id: 2,
    name: 'Robot car (Manual mode)',
    desc: `This robot car can be controlled by a mobile app from anywhere as long as there is wifi connection.
          The app can also tun up its speed, distance to wall and period of sensor reading in real-time.`,
    url1: 'assets/manual-mode1-s.mp4',
    url2: 'assets/manual-mode2-s.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/app.png'
  },
  {
    id: 3,
    // tslint:disable-next-line:quotemark
    name: "Autonomous robot car",
    desc: `This robot car can be controlled by a mobile app from anywhere as long as there is wifi connection.
          The app can also tun up its speed, distance to wall and period of sensor reading in real-time.`,
    url1: 'assets/auto-mode1-b.mp4',
    url2: 'assets/auto-mode2-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/car1.png'
  },
  {
    id: 4,
    name: 'Robot car (follower)',
    desc: `machine to machine communication - The follwer duplicates each move the leading car makes.
          In developing...`,
    // url1: "/assets/auto-mode1-b.mp4",
    // url2: "/assets/auto-mode2-m.mp4"
    col: 1,
    row: 25,
    pixUrl: 'assets/dolls.png'
  },
  {
    id: 5,
    name: 'Alexa enabled IoT Led',
    desc: 'Alexa, turn light one on.',
    url1: 'assets/alexa.mp4',
    url2: 'assets/alexa robotCar.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/echoDot.png'
  },
  {
    id: 6,
    name: 'Alexa enabled IoT Robot car',
    desc: 'Alexa, trigger autopilot.',
    url1: 'assets/alexa robotCar.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/alexa robotCar.png'
  },
  {
    id: 7,
    name: 'Color changing LED',
    desc: `The LED changes its colors based on specified events, e.g., an incoming message from someone, door bell ring,
          Your local UV index rises above the value you specify, etc.
          Hope this help hearing challenge people.`,
    url1: 'assets/led1.mp4',
    url2: 'assets/led-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/led.png',
  },
  {
    id: 8,
    name: 'Home security',
    desc: `It will send a SMS message, mobile notification and email automatically when the window/door is opened.`,
    col: 1,
    row: 25,
    url1: 'assets/door_open.mp4',
    url2: 'assets/door2.mp4',
    pixUrl: 'assets/door.png'
  },
  {
    id: 9,
    name: 'Temp/Humidity sensor',
    desc: `read and store the data in the cloude. And you can trigger events, like turn on a/c, dehumidifier, etc.,
          when temperature or humidity reaches a certain number.`,
    url1: 'assets/dht.mp4',
    url2: 'assets/dht1.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/dht1.png'
  },
  {
    id: 10,
    name: 'IoT button',
    desc: 'pressing the buttun to control remote device(s) or send a notification to your mobile phone, etc.',
    url1: 'assets/iotBtn.mp4',
    col: 1,
    row: 12,
    pixUrl: 'assets/iotBtn.png'
  },
  {
    id: 11,
    name: '1.6 million color smart LED',
    desc: 'WIFI controllable and customizable LED offer 16 Million colors.',
    url1: 'assets/neoPixel.mp4',
    col: 1,
    row: 12,
    pixUrl: 'assets/neoPixel.png'
  },
  {
    id: 12, name: 'robot with camera',
    desc: 'In developing...',
    col: 1,
    row: 25,
    pixUrl: 'assets/camera.png'
  },

];
