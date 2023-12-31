export const selectContacts = state => state.contacts.items;
export const selectFilteredName = state => state.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;