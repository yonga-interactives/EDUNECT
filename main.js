import { UserManager } from "oidc-client-ts";

export const cognitoAuthConfig = {
  authority: "https://us-west-1-sgdwu3esh.auth.us-west-1.amazoncognito.com", 
  client_id: "78jppi6qhfcjdqullafph6ph8a",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net/callback.html", 
  post_logout_redirect_uri: "https://d84l1y8p4kdic.cloudfront.net/choose-role.html", 
  response_type: "code",
  scope: "openid email phone profile"
};

export const userManager = new UserManager(cognitoAuthConfig);

// SIGN OUT
export async function signOutRedirect() {
  const logoutUrl = `${cognitoAuthConfig.authority}/logout?client_id=${cognitoAuthConfig.client_id}&logout_uri=${encodeURIComponent(cognitoAuthConfig.post_logout_redirect_uri)}`;
  window.location.href = logoutUrl;
}

// Handle login callback processing
export async function handleLoginRedirect() {
  const user = await userManager.signinCallback();
  return user;
}
