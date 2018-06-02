export interface ILocale {
    code: string;
    text: string;
  }
  export const locales: ILocale[] = [
    {
      code: 'en-US',
      text: 'English',
    },
    {
      code: 'zh-hant',
      text: '繁體中文',
    },
    {
      code: 'zh-hans',
      text: '简体中文',
    },
  ];
