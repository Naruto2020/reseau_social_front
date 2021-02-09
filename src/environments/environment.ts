// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const adressH = "http://swapengin.herokuapp.com/comptes/users";
const adressH1 = "http://swapengin.herokuapp.com/comptes/images";
const adressH2 = "http://swapengin.herokuapp.com/comptes/imagePros";
const adressH3 = "http://swapengin.herokuapp.com/comptes/login";
const adressH4 = "http://swapengin.herokuapp.com/comptes/sendmail";
const adressH5 = "http://swapengin.herokuapp.com/comptes/reset";
const adressH6 = "http://swapengin.herokuapp.com/comptes/forgotPassword";
const adressH7 = "http://swapengin.herokuapp.com/comptes";
const adressH8 = "http://swapengin.herokuapp.com";
const adressH9 = "http://swapengin.herokuapp.com/comptes/messagePublic";
const adressH10 = "http://swapengin.herokuapp.com/comptes/users/follow";
const adressH11 = "http://swapengin.herokuapp.com/comptes/users/unfollow";
const adressH12 = "http://swapengin.herokuapp.com/comptes/messagePublic/likePost";
const adressH13 = "http://swapengin.herokuapp.com/comptes/messagePublic/unlikePost";


export const environment = {
  production: false,
  bddUrl: adressH || "http://127.0.0.1:3000/comptes/users",
  picUrl: adressH1 || "http://127.0.0.1:3000/comptes/images",
  picUrl1: adressH2 || "http://127.0.0.1:3000/comptes/imagePros",
  logUrl: adressH3 || "http://127.0.0.1:3000/comptes/login",
  emailUrl: adressH4 || "http://127.0.0.1:3000/comptes/sendmail",
  resetUrl: adressH5 || "http://127.0.0.1:3000/comptes/reset",
  emailPUrl: adressH6 || "http://127.0.0.1:3000/comptes/forgotPassword",
  searchUrl : adressH7 || "http://127.0.0.1:3000/comptes",
  siteUrl : adressH8 || "http://127.0.0.1:3000",
  statusUrl : adressH9 || "http://127.0.0.1:3000/comptes/messagePublic",
  searchUrl1 : adressH10 || "http://127.0.0.1:3000/comptes/users/follow",
  searchUrl2 : adressH11 || "http://127.0.0.1:3000/comptes/users/unfollow",
  aimeUrl : adressH12 || "http://127.0.0.1:3000/comptes/messagePublic/likePost",
  aimeUrl1 : adressH13 || "http://127.0.0.1:3000/comptes/messagePublic/unlikePost"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
