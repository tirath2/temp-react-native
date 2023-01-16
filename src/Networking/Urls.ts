import {HTTP_METHOD_TYPE} from '../Utils/Constants';

export function GetBaseURL() {
  return 'https://pokeapi.co/api/v2/';
}

export const IP = '';

export const URLs = {
  login: {
    query: (_: string) => '/api/free/login/',
    METHOD: HTTP_METHOD_TYPE.POST,
  },
};
