import { Prod } from 'app/core/models/prod';

export const PRODS: Prod[] = [
  {
    id: 1,
    name: 'IFTTT Aquarium Water Pump',
    desc: `Support IFTTT (If This, Then That).
     In this example, I create an IFTTT applet to turn on the pump at 9:30 PM every day.
     The time and day of week are configurable.`,
    url1: 'assets/waterpump1.mp4',
    url2: 'assets/waterpump-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/waterpump.png'
  },
  {
    id: 2,
    name: '雲端 遙控/自走避障車 (手控模式)',
    desc: `I have developed an android app to control the robot car via wifi connection. 透過 wifi 遙控，並可及時調整車速
    , distant to wall 離前方障礙物最近容許距離, 和多久讀取sensors一次。`,
    url1: 'assets/manual-mode1-s.mp4',
    url2: 'assets/manual-mode2-s.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/app.png'
  },
  {
    id: 3,
    // tslint:disable-next-line:quotemark
    name: "雲端 遙控/自走避障車 (自走模式)",
    desc: `可經由 Android/iPhone app 在任何地方透過 wifi 遙控，並可及時調整車速
    , 離前方障礙物最近容許距離, 和多久讀取sensors一次。`,
    url1: 'assets/auto-mode1-b.mp4',
    url2: 'assets/auto-mode2-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/car1.png'
  },
  {
    id: 4,
    name: '遙控/自走避障車 (追隨者)',
    desc: `It is device to device communcation via wifi.
           - the follwer duplicates each move the leading car makes.
       開發中...`,
    // url1: "/assets/auto-mode1-b.mp4",
    // url2: "/assets/auto-mode2-m.mp4"
    col: 1,
    row: 25,
    pixUrl: 'assets/dolls.png'
  },
  {
    id: 5,
    name: 'Amazon Echo voice controlled power plug',
    desc: 'echo, turn on tv. Videos will be uploaded soon.',
    col: 1,
    row: 25,
    pixUrl: 'assets/cat.png'
  },
  {
    id: 6,
    name: '雲端 情境自動變色LED',
    desc: `設定的事件發生時，turn on LED 燈，其顔色根據不同的事件變換。
      希望能對聼障同胞有幫助。`,
    url1: 'assets/led1.mp4',
    url2: 'assets/led-m.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/led.png',
  },
  {
    id: 7,
    name: '雲端 門窗監控',
    desc: `門窗被打開時, 自動送出簡訊, mobile notification, 及 email 通知.`,
    col: 1,
    row: 25,
    url1: 'assets/door_open.mp4',
    url2: 'assets/door2.mp4',
    pixUrl: 'assets/door.png'
  },
  {
    id: 8,
    name: '雲端 溫濕度感應器',
    desc: `dht`,
    url1: 'assets/dht.mp4',
    url2: 'assets/dht1.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/dht1.png'
  },
  {
    id: 10, name: 'robot with camera',
    desc: '開發中...',
    col: 1,
    row: 25,
    pixUrl: 'assets/camera.png'
  },
  {
    id: 9,
    name: 'Iot 按紐',
    desc: '開發中...',
    col: 1,
    row: 25,
    pixUrl: 'assets/dht.png'
  },

];
