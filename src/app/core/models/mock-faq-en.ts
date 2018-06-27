import { Faq } from 'app/core/models/faq';

export const FAQ_EN: Faq[] = [
  {
    q: 'How to connect my devices to wifi?',
    answers: [
      'At your mobile phone, go to Settings',
      'Tap on Wi-Fi and make sure it is ON. look for and connect to a SSID starts with ESP.',
      'After it is connected, tap on the ESPxxxxxxx SSID again to bring up a window.',
      'At this stage, you have connected your mobile phone with the Iot device.',
      'Tap on a link below Manager router',
      'Now we are in WiFiManager window, tap on Configure Wifi button',
      'Select the SSID of your router and then type in the password to connect',
      'After connected, the Iot device is accessible on intenet.',
      'It is a one-off settings and will be auto connecting afterward.'
    ],
    aUrl: 'assets/Esp8266Wifi.mp4'
  },
  {
    q: 'Why my roachBot not moving as expected or not listening to my instructions?',
    answers: [
      'Please try replacing batteries if it has been running for more than an hour.'
    ]
  },
  {
    q: 'What can I do with the Iot button?',
    answers: [
      'The button can trigger the event(s) we have specified.',
      'e.g, it can turn on the light at home when you press it at the office.',
      'or something likes sending a sms message to your phone when the button is pressed, etc.'
    ]
  },
  {
    q: 'How many differnt colors can the LED emit?',
    answers: [
      `In theory, it can emit 16,777,216 colors. However, the human eye is unable to
      distinguish the tiny color changes.`
    ]
  },
  {
    q: 'what if alexa cannot find the device',
    answers: [
      `alexa, find all devices`
    ]
  },
];
