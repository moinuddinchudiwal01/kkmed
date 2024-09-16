export const ROUTES = {
  CUSTOMER: {
    TABS: "/tabs",
    HOME: "/tabs/home",
    CART: "/tabs/cart",
    PROFILE: "/tabs/profile",
    ORDERS: "/tabs/orders",
  },
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  HOME: {
    ROOT: "/home",
    FEATURED: "/home/featured",
    CATEGORY: "/home/category",
    DETAILS: "/home/details/:id",
  },
  ORDER: {
    ROOT: "/order",
    TRACK: "/order/track/:orderId", 
    DETAILS: "/order/details/:orderId", 
    CONFIRMATION: "/order/confirmation",
  },
  COMMON: {
    SETTINGS: "/settings",
    NOTIFICATIONS: "/notifications",
    SEARCH: "/search",
    HELP: "/help",
  },
};