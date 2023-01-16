import {PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size: number): number => {
  return size / fontScale;
};

export function debounce<Params extends any[]>(
  func: any,
  timeout: number,
): (...args: Params) => void {
  let timer: any;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export function toPascalCase(string: String): String {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`,
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}
