/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#4A51D9';
const tintColorDark = '#1C0062';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#F1F3F4',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    headerDivider: '#F1F3F4',
  },
  dark: {
    text: '#11181C',
    background: '#F1F3F4',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    headerDivider: '#F1F3F4',
  },
  button: {
    primary: {
      background: tintColorLight,
      pressedBackgorund: tintColorDark,
      text: '#E9E6F4',
      pressedText: '#8985F2'
    }
  },
  colors: {
    lightGray: '#908B8B',
    myMessage: '#8985F2',
    botMessage: '#E9E6F4'
  }
};
