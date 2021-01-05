// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bddUrl: "http://127.0.0.1:3000/comptes/users",
  picUrl: "http://127.0.0.1:3000/comptes/images",
  picUrl1: "http://127.0.0.1:3000/comptes/imagePros",
  logUrl: "http://127.0.0.1:3000/comptes/login",
  emailUrl: "http://127.0.0.1:3000/comptes/sendmail",
  resetUrl: "http://127.0.0.1:3000/comptes/reset",
  emailPUrl: "http://127.0.0.1:3000/comptes/forgotPassword",
  searchUrl : "http://127.0.0.1:3000/comptes",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
