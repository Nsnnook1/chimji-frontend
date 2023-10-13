const ACCESS_TOKEN = "ACCESS_TOKEN"; //reduce typoerror

export const addAccessToken = (token) =>
localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
