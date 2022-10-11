export const selectAuthUser = state => state.auth;
export const getLoggedIn = state => state.auth.status;

export const getUser = state => state.auth.user;
