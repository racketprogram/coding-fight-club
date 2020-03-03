const AppError = require('./appError.js');

const undefinedRouteError = new AppError(404, 'undefined route')

const usernameTakenError = new AppError(403, 'Username already taken. Please pick another username.');

const userEmailTakenError = new AppError(403, 'Looks like this email is signed up! Go ahead and sign in.');

const serverError = new AppError(500, 'Server error.')


module.exports = {
  undefinedRouteError,
  usernameTakenError, 
  userEmailTakenError,
  serverError
}
