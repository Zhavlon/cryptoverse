import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "e4785e2529msh0dca32bddf3cc13p1f4909jsnc417f253e639",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = url => ({
	url,
	headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getCryptos: builder.getQuery({
			query: () => createRequest("/exchanges"),
		}),
	}),
});
