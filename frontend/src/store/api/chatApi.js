/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';
import { apiPath } from '../../routes';

const socket = io();

const addSocketListener = async (
  initSocket,
  event,
  cacheDataLoaded,
  updateCachedData,
  cacheEntryRemoved,
) => {
  try {
    await cacheDataLoaded;
    const handleEvent = (payload) => updateCachedData((draft) => {
      switch (event) {
        case 'newChannel':
        case 'newMessage':
          draft.push(payload);
          break;
        case 'renameChannel': {
          const channel = draft.find((ch) => ch.id === payload.id);
          if (channel) {
            channel.name = payload.name;
          }
          break;
        }
        case 'removeChannel':
          return draft.filter((ch) => ch.id !== payload.id);
        default:
          break;
      }
    });
    initSocket.on(event, handleEvent);
  } catch (e) {
    console.error(e);
  }
  await cacheEntryRemoved;
  initSocket.off(event);
};

export const chatApi = createApi({
  reducerPath: 'chatApi',
  tagTypes: ['Channel', 'Message'],
  baseQuery: fetchBaseQuery({
    baseUrl: apiPath,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (newUser) => ({
        url: 'signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    getChannels: builder.query({
      query: () => 'channels',
      onCacheEntryAdded: async (
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) => {
        addSocketListener(
          socket,
          'newChannel',
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved,
        );
        addSocketListener(
          socket,
          'renameChannel',
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved,
        );
        addSocketListener(
          socket,
          'removeChannel',
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved,
        );
      },
      providesTags: ['Channel'],
    }),
    addChannel: builder.mutation({
      query: (channelName) => ({
        url: 'channels',
        method: 'POST',
        body: channelName,
      }),
    }),
    renameChannel: builder.mutation({
      query: ({ id, name }) => ({
        url: `channels/${id}`,
        method: 'PATCH',
        body: { name },
      }),
      invalidatesTags: ['Channel', 'Message'],
    }),
    deleteChannel: builder.mutation({
      query: ({ id }) => ({
        url: `channels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Channel', 'Message'],
    }),
    getMessages: builder.query({
      query: () => 'messages',
      onCacheEntryAdded: async (
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) => {
        addSocketListener(
          socket,
          'newMessage',
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved,
        );
      },
      providesTags: ['Message', 'Channel'],
    }),
    addMessage: builder.mutation({
      query: (newMessage) => ({
        url: 'messages',
        method: 'POST',
        body: newMessage,
      }),
      invalidatesTags: ['Message'],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useGetChannelsQuery,
  useAddChannelMutation,
  useRenameChannelMutation,
  useDeleteChannelMutation,
  useGetMessagesQuery,
  useAddMessageMutation,
} = chatApi;
