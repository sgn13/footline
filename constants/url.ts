export const api = {
  me: '/api/users/profile/',
  login: '/api/login/',
  permission: '',
  changepassword: '',
  example:'/example_api'
};

const appRoot = { example1: '/example1', example2: '/example2' };

export const app = {
  me: '/',
  changepassword: '/change-password',
  example1: { root: appRoot.example1 },
  example2: {
    root: appRoot.example2,
    create: () => `${appRoot.example2}/create`,
    update: (id) => `${appRoot.example2}/update/${id}`,
    view: (id) => `${appRoot.example2}/view/${id}`,
    manage: (id) => `${appRoot.example2}/manage/${id}`,
  },
};
