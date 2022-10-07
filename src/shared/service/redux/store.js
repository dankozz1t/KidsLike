import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';
// import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/auth.slice';
// import { contactsReducer } from './contacts/contact-Slice';
// import { profileReducer } from './profile/profile.slice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
// };

// const persistedUserReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  // contacts: contactsReducer,
  auth: authReducer,
  // profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export default store;

// export const storPersistor = persistStore(store);

// import { createSlice } from '@reduxjs/toolkit';

// const nameSlice = createSlice({
//   name: 'name',
//   initialState: {
//     name: [],
//   },
//   reducers: {
//     addName(state, { payload }) {
//       state.name.push(payload);
//     },
//   },
// });

// export const { addName } = nameSlice.actions;
