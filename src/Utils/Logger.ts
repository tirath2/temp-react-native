export default class Logger {
  static log(...props: any[]) {
    console.log(...props);
  }
  static warn(...props: any[]) {
    console.warn(...props);
  }
  static error(...props: any[]) {
    console.error(...props);
  }
}
