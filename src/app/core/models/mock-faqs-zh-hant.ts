import { Faq } from 'app/core/models/faq';

export const FAQS_ZH_HANT: Faq[] = [
  {
    q: '如何連 Iot 設備到 internet',
    answers: [
      '進入手機/平板的設定',
      '選 Wi-Fi 並確定 wifi 已開啓. 搜尋可用網路, 點選 ESP 開頭的 SSID 以連綫',
      '連上后，再點選該 ESPxxxxxxx 開頭的 SSID, 以開啓另一個視窗',
      '(此階段為連接 Iot 設備到你的手機/平板)',
      '點選管理路由器下方的連結, 以開啓 WiFiManager 的視窗',
      '點選 Wifi 設定按鈕',
      '這次點選你的 wifi 路由器的 SSID, 並輸入密碼',
      '連上之後，你的Iot 設備就已連上 internet',
      '上面的步驟只要做一次，之後它會自動連綫'
    ],
    aUrl: 'assets/Esp8266Wifi.mp4'
  },
  {
    q: '爲何智能小車不聼指示移動?',
    answers: [
      '請更換電池如果已連續操作一個鐘頭以上'
    ]
  },
  {
    q: 'Iot 按鈕能做什麽?',
    answers: [
      '你可以結合 IFTTT 應用于預設事件的觸發',
      '例如，獨居老人在家遇到緊急情況需要幫忙時, 按下按鈕, 其親人便會立即收到簡訊',
    ]
  },
  {
    q: 'Iot LED 可以有多少顔色?',
    answers: [
      `理論上， 它可以顯示 255^3 顔色. 但人眼無法分辨太細微的變化`
    ]
  }
];
