// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f67ea5a3bce3eed7c28375.mockapi.io/contacts/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contacts'],
    }),
    removeContactById: builder.mutation({
      query(id) {
        return { url: `contacts/${id}`, method: 'DELETE' };
      },
      invalidatesTags: ['Contacts'],
    }),
    postContactById: builder.mutation({
      query(data) {
        return {
          url: `contacts/`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useRemoveContactByIdMutation,
  usePostContactByIdMutation,
} = mockApi;
