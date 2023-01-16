export interface iURL {
  query: (...params: any) => string;
  METHOD: string | undefined;
}
