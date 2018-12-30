export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH_DOMAIN,
  roleUrl: "https://rbac-tutorial-app/role",
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  callbackUrl: "http://localhost:3000/callback"
};
