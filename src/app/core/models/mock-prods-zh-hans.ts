
import { Prod } from 'app/core/models/prod';



export const PRODS_ZH_HANS: Prod[] = [

  {

    id: 1,

    name: ' 极省电鱼缸打水',

    desc: ` 芯片开机或从睡眠模式醒来时检查是否有打水事件需处理 ,  如有的话启动马达为鱼缸打气 10 分钟后进入深度睡眠模式 3.5 小时,

     如没有事件需处理 ,  直接进入深度模式 3.5 小时 .  重复上述动作已达省电效果.`,

    url1: 'assets/waterpump1.mp4',

    url2: 'assets/waterpump-m.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/waterpump.png'

  },

  {

    id: 2,

    name: ' 云端  遥控/自走避障车 (手控模式)',

    desc: ` 可经由 Android/iPhone app 在任何地方透过 wifi 遥控，并可及时调整车速

    , 离前方障碍物最近容许距离 ,  和多久读取 sensors 一次。 `,

    url1: 'assets/manual-mode1-s.mp4',

    url2: 'assets/manual-mode2-s.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/app.png'

  },

  {

    id: 3,

    name: ' 云端  遥控/自走避障车 (自走模式)',

    desc: ` 可经由 Android/iPhone app 在任何地方透过 wifi 遥控，并可及时调整车速

    , 离前方障碍物最近容许距离 ,  和多久读取 sensors 一次。 `,

    url1: 'assets/auto-mode1-b.mp4',

    url2: 'assets/auto-mode2-m.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/car1.png'

  },

  {

    id: 4,

    name: ' 遥控 / 自走避障车  (追随者)',

    desc: ` 车与车之间透过 wifi 交换讯息

       - 在任何地方透过 wifi 重复另一辆车的一举一动.

       开发中...`,

    url1: '/assets/auto-mode1-b.mp4',

    url2: '/assets/auto-mode2-m.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/dolls.png'

  },

  {

    id: 5,

    name: 'Amazon Echo 声控开关',

    desc: 'echo, turn on tv. Videos will be uploaded soon.',

    col: 1,

    row: 25,

    pixUrl: 'assets/cat.png'

  },

  {

    id: 6,

    name: ' 云端  情境自动变色LED',

    desc: ` 设定的事件发生时， turn on LED 灯，其颜色根据不同的事件变换。

      希望能对听障同胞有帮助。`,

    url1: 'assets/led1.mp4',

    url2: 'assets/led-m.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/led.png',

  },

  {

    id: 7,

    name: ' 云端  门窗监控',

    desc: ` 门窗被打开时 ,  自动送出简讯 , mobile notification, 及 email 通知.`,

    col: 1,

    row: 25,

    url1: 'assets/door_open.mp4',

    url2: 'assets/door2.mp4',

    pixUrl: 'assets/door.png'

  },

  {

    id: 8,

    name: ' 云端  温湿度传感器',

    desc: `dht`,

    url1: 'assets/dht.mp4',

    url2: 'assets/dht1.mp4',

    col: 1,

    row: 25,

    pixUrl: 'assets/dht1.png'

  },

  {

    id: 10, name: 'robot with camera',

    desc: ' 开发中...',

    col: 1,

    row: 25,

    pixUrl: 'assets/camera.png'

  },

  {

    id: 9,

    name: 'IoT 按纽',
    desc: ' 按下按纽來控制遠端設備或送出通知到你的手機, 等等...',
    url1: 'assets/iotBtn.mp4',
    col: 1,
    row: 25,
    pixUrl: 'assets/iotBtn.png'

  },

];
