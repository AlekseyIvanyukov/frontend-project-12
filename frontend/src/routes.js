const apiPath = '/api/v1';

const routes = {
  mainPagePath: () => '/',
  loginPagePath: () => '/login',
  signupPagePath: () => '/signup',
  loginApiPath: () => [apiPath, 'login'].join('/'),
};

export default routes;