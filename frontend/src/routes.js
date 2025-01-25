const apiPath = '/api/v1';

const routes = {
  mainPagePath: () => '/',
  loginPagePath: () => '/login',
  signupPagePath: () => '/signup',
  loginApiPath: () => [apiPath, 'login'].join('/'),
  signupApiPath: () => [apiPath, 'signup'].join('/'),
};

export default routes;