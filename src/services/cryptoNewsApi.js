import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_RAPID_API_NEWS_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  };

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers: newsHeaders });

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;