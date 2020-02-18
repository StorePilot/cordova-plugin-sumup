// iOS
// SMPSumUpSDKErrorGeneral             = 0,        // General error
// SMPSumUpSDKErrorActivationNeeded    = 1,        // The merchant's account is not activated
// SMPSumUpSDKErrorAccountGeneral      = 20,
// SMPSumUpSDKErrorAccountNotLoggedIn  = 21,       // The merchant is not logged into their account.
// SMPSumUpSDKErrorAccountIsLoggedIn   = 22,       // A merchant is logged in already. Call logout before logging in again.
// SMPSumUpSDKErrorCheckoutGeneral     = 50,
// SMPSumUpSDKErrorCheckoutInProgress  = 51,       // Another checkout process is currently in progress.

module.exports = {
    login: function (apikey, accessToken) {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'login', accessToken ? [apikey, accessToken] : [apikey]));
    },
    auth: function (accessToken) {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'auth', accessToken ? [apikey, accessToken] : [apikey]));
    },
    logout: function () {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'logout', []));
    },
    settings: function () {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'settings', []));
    },
    prepare: function (force) {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'prepare', []));
    },
    close: function (force) {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'close', []));
    },
    pay: function (amount, currencycode, title) {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'pay', [amount, currencycode, title]));
    },
    isloggedin: function() {
        return new Promise((resolve, reject) => cordova.exec(resolve, reject, 'SumUp', 'isLoggedIn', []));
    }
}
