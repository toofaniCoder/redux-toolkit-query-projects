import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (page) => "comments?_start=0&_page=" + page,
      transformResponse: (data, meta) => {
        return {
          count: meta.response.headers.get("X-Total-Count"),
          comments: data,
        };
      },
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
