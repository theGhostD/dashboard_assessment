import Cookies from "js-cookie";

export const clearCacheHandler = () => {
  Cookies.remove("ABCD");
  localStorage.removeItem("userDetails");
};

export const logoutHandler = async () => {
  clearCacheHandler();
    window.location = "/";
};
