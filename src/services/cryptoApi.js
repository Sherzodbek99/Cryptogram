import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Crypto API Headers
const cryptoApiHeaders = {
  "X-RapidAPI-Key": 'coinrankingec91989555a7aa56e209c8d7d806d27b2761782dcf34cba3',
  "X-RapidAPI-Host": "https://api.coinranking.com/v2",
  'x-access-token': 'coinrankingec91989555a7aa56e209c8d7d806d27b2761782dcf34cba3'
};

// Base URL
const baseUrl = "https://api.coinranking.com/v2";

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Crypto API Redux Logic
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`)
    }),
    getCryptoSearch: builder.query({
      query: (searchedTerm) => createRequest(`search-suggestions?query=${searchedTerm}`)
    })
  }),
});

// Export Crypto API
export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoSearchQuery
} = cryptoApi;