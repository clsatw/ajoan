import { Prod } from './prod';

export const PRODS: Prod[] = [
  {
    id: 1,
    name: 'IFTTT 雲端魚缸打水',
    desc: `支援 IFTTT (If This, Then That).
     本例中利用 IFTTT 雲端服務, 每天於 9: 30 PM 啓動馬達為給魚缸打氣.
     你可自行在 IFTTT 網站設定啓動及関閉時間.`,
    url1: '/assets/waterpump1.mp4',
    url2: '/assets/waterpump-m.mp4',
    col: 1,
    row: 3,
    pixUrl: '/assets/waterpump.png'
  },

  {
    id: 2,
    name: '雲端 遙控/自走避障車 (手控模式)',
    desc: `可經由 Android/iPhone app 在任何地方透過 wifi 遙控，並可及時調整車速
    , 離前方障礙物最近容許距離, 和多久讀取sensors一次。`,
    url1: '/assets/manual-mode1-s.mp4',
    url2: '/assets/manual-mode2-s.mp4',
    col: 1,
    row: 3,
    pixUrl: '/assets/autopilot.png'
  },
  {
    id: 3,
    // tslint:disable-next-line:quotemark
    name: "雲端 遙控/自走避障車 (自走模式)",
    desc: `可經由 Android/iPhone app 在任何地方透過 wifi 遙控，並可及時調整車速
    , 離前方障礙物最近容許距離, 和多久讀取sensors一次。`,
    url1: '/assets/auto-mode1-b.mp4',
    url2: '/assets/auto-mode2-m.mp4',
    col: 1,
    row:3,
    pixUrl: '/assets/roachbot.jpg'
  },
  {
    id: 4,
    name: '遙控/自走避障車 (追隨者)',
    desc: `車與車之間透過 wifi 交換訊息
       - 在任何地方透過 wifi 重復另一輛車的一舉一動.
       開發中...`,
    // url1: "/assets/auto-mode1-b.mp4",
    // url2: "/assets/auto-mode2-m.mp4"
    col: 1,
    row: 2,
    pixUrl: '/assets/dolls.png'
  },
  {
    id: 5,
    name: 'Amazon Echo 聲控開關',
    desc: 'echo, turn on tv. Videos will be uploaded soon.',
    col: 1,
    row: 2,
    pixUrl: '/assets/girl.png'
  },
  {
    id: 6,
    name: '雲端 情境自動變色LED',
    desc: `設定的事件發生時，turn on LED 燈，其顔色根據不同的事件變換。
      希望能對聼障同胞有幫助。`,
    url1: '/assets/led1.mp4',
    url2: '/assets/led-m.mp4',
    col: 1,
    row: 2,
    pixUrl: '/assets/led.png',
  },
  {
    id: 7,
    name: '雲端 門窗監控',
    desc: `門窗被打開時, 自動送出簡訊, mobile notification, 及email 通知.
          to be released soon...`,
    col: 1,
    row: 2,
    pixUrl: '/assets/ox.png'
  },
  {
    id: 8,
    name: '雲端 溫濕度感應器',
    desc: `dht`,
    col: 1,
    row: 2,
    pixUrl: '/assets/eye.png'
  },
  {
    id: 9, name: 'Iot 按紐',
    desc: '開發中...',
    col: 1,
    row: 2,
    pixUrl: '/assets/dht.png'
  },
  {
    id: 10, name: 'robot with camera',
    desc: '開發中...',
    col: 1,
    row: 2,
    pixUrl: '/assets/car.png'
  }
];
