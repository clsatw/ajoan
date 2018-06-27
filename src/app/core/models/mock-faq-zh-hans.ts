
import { Faq } from 'app/core/models/faq';


export const FAQ_ZH_HANS: Faq[] = [
  {

    q: ' 如何连 Iot 设备到 internet',

    answers: [

      '进入手机 / 平板的设定',

      '选 Wi-Fi 并确定 wifi 已开启 .  搜寻可用网络 ,  点选 ESP 开头的 SSID 以连线',

      '连上后，再点选该 ESPxxxxxxx 开头的 SSID, 以开启另一个窗口',

      '(此阶段为连接 Iot 设备到你的手机 / 平板)',

      '点选管理路由器下方的链接 ,  以开启 WiFiManager 的窗口',

      '点选 Wifi 设定按钮',

      '这次点选你的 wifi 路由器的 SSID, 并输入密码',

      '连上之后，你的 Iot 设备就已连上 internet',

      '上面的步骤只要做一次，之后它会自动连线'

    ],

    aUrl: 'assets/Esp8266Wifi.mp4'

  },

  {

    q: ' 为何智能小车不听指示移动?',

    answers: [

      '请更换电池如果已连续操作一个钟头以上'

    ]

  },

  {

    q: 'Iot 按钮能做什么?',

    answers: [

      '你可以结合 IFTTT 应用于默认事件的触发',

      '例如，独居老人在家遇到紧急情况需要帮忙时 ,  按下按钮 ,  其亲人便会立即收到简讯',

    ]

  },

  {

    q: 'Iot LED 可以有多少颜色?',

    answers: [

      `理论上，  它可以显示 16,777,216 颜色.  但人眼无法分辨太细微的变化`

    ]

  }

];
