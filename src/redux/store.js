import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.slice';
import { taskReducer } from './task/task.slice';
import { giftReducer } from './gift/gift.slice';
import { persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'status'],
};
const persistedAuth = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuth,
  task: taskReducer,
  gift: giftReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
