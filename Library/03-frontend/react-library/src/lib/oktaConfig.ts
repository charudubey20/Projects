export const oktaConfig = {
    clientId: '0oac8p3y6u99F2cAP5d7',
    issuer: 'https://dev-97982052.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpCheck: true,
}