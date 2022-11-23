// Local module ======>>>>>>>>

const register = function (usename) {
  console.log(`user ${usename} has been registerd.`);
};

const login = function (username, password) {
  console.log(
    `user with username = ${username} and password = ${password} is logged in. `
  );
};

module.exports = {
  register: register, // key will be available in the module.js . and value is same as the function name defined here in this folder.
  login: login, // if key and value same then we can write just the value name that means fuction name defined here in this folder.
};
