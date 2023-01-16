import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../../Networking/Api';
import {createSlice} from '@reduxjs/toolkit';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  // baseQuery: baseQuery,
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  tagTypes: ['Poki'],
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`,
      providesTags: ['Poki'],
    }),
  }),
});

export const LoginSlice = createSlice({
  name: 'loginSlice',
  initialState: {pokiData: null},
  reducers: {},
  extraReducers: builder => {
    console.log('builder', loginApi.endpoints.getPokemonByName.matchPending);
    builder.addMatcher(
      loginApi.endpoints.getPokemonByName.matchFulfilled,
      (state, {payload}) => {
        state.pokiData = payload;
      },
    );
  },
});

export default LoginSlice.reducer;
