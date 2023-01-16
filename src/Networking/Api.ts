// import Axios, {AxiosInstance} from 'axios';
// import {
//   HTTP_METHOD_TYPE,
//   HTTP_STATUS_CODE,
//   NETWORK_ABORT,
// } from '../Utils/Constants';
// import Logger from '../Utils/Logger';
// import {iURL} from './Networking.types';
// import {GetBaseURL} from './Urls';
// import Strings from '../Utils/Strings';
// let axiosInstance: AxiosInstance;
// const connectionTimeout = 20000; // 20 Secs

import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query';

// const TAG = 'API';
// async function getAxiosInstance(): Promise<AxiosInstance | undefined> {
//   try {
//     let baseUrl = GetBaseURL();
//     axiosInstance = Axios.create({
//       baseURL: baseUrl,
//       timeout: connectionTimeout,
//       headers: {},
//     });
//     return axiosInstance;
//   } catch (error) {
//     Logger.error(TAG, 'getAxiosInstance', error);
//   }
// }

// export const apiCall = async (request: iURL, payload: any) => {
//   let {URL, METHOD} = request;
//   const instance = await getAxiosInstance();
//   try {
//     let response: any;
//     Logger.log(TAG, '[apiCall]', URL, METHOD, payload);
//     if (METHOD === HTTP_METHOD_TYPE.POST) {
//       response = await instance?.post(URL.trim(), payload);
//     } else if (METHOD === HTTP_METHOD_TYPE.PUT) {
//       response = await instance?.put(URL.trim(), payload);
//     } else {
//       response = await instance?.get(URL, {params: payload});
//     }
//     if (response?.status === HTTP_STATUS_CODE.SUCCESS) {
//       if (
//         response?.data?.statusCode
//           ? response?.data?.statusCode === HTTP_STATUS_CODE.SUCCESS
//           : true
//       ) {
//         return {
//           apiSuccess: true,
//           data: response?.data?.payload
//             ? response?.data?.payload
//             : response.data,
//         };
//       } else {
//         return {apiSuccess: false, error: response?.data};
//       }
//     } else {
//       return {apiSuccess: false, error: response};
//     }
//   } catch (error: any) {
//     if (error.code === NETWORK_ABORT) {
//       return {
//         error: {message: Strings.NETWORK_ERROR, errorFrom: 'device'},
//         apiSuccess: false,
//       };
//     }
//     if (error?.response) {
//       return {
//         error: {
//           message: error?.response?.data?.payload?.errorMessage,
//         },
//         apiSuccess: false,
//       };
//     }
//     return {
//       error: {
//         message: error?.message,
//       },
//       apiSuccess: false,
//     };
//   }
// };

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://xr1.bernetco.ir/api/v1/',
  prepareHeaders: () => {
    //  if (user) {
    //    headers.set('Authorization', `Bearer ${user.token.access}`);
    //  }
  },
  credentials: 'include', // This allows server to set cookies
});
