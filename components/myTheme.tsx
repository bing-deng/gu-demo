import { createTheme } from '@nextui-org/react';

const myTheme = createTheme({
  type: 'light', // 选择主题类型，'light' 或 'dark'
  theme: {
    colors: { // 在这里定义你的颜色
      primary: '#0070f3', // 主题色
      // 你可以继续添加更多需要自定义的颜色
    },
    // 你还可以自定义其他主题相关的设置，如字体、间距等
  }
});
