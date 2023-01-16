export const NETWORK_ABORT = 'ECONNABORTED';
export const HTTP_METHOD_TYPE = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
};
export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
};

export const THEME_TYPE = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android',
};

interface iKeyboardBehavior {
  [key: string]: 'padding' | 'height' | 'position' | undefined;
}
export const KEYBOARD_BEHAVIOR: iKeyboardBehavior = {
  PADDING: 'padding',
};

export const TEXT_SIZE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
};

export const TEXT_WEIGHT = {
  LIGHT: 'light',
  DARK: 'dark',
  DEFAULT: 'default',
};
