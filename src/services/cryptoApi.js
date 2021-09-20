import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '559d745dd9msh7319a4b96702a9fp1f5443jsn4265ccffa6d5'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/markets',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '559d745dd9msh7319a4b96702a9fp1f5443jsn4265ccffa6d5'
//     }
//   };