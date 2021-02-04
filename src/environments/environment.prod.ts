
const adressH = "https://swapengin.herokuapp.com/comptes/users";
const adressH1 = "https://swapengin.herokuapp.com/comptes/images";
const adressH2 = "https://swapengin.herokuapp.com/comptes/imagePros";
const adressH3 = "https://swapengin.herokuapp.com/comptes/login";
const adressH4 = "https://swapengin.herokuapp.com/comptes/sendmail";
const adressH5 = "https://swapengin.herokuapp.com/comptes/reset";
const adressH6 = "https://swapengin.herokuapp.com/comptes/forgotPassword";
const adressH7 = "https://swapengin.herokuapp.com/comptes";
const adressH8 = "https://swapengin.herokuapp.com";
const adressH9 = "https://swapengin.herokuapp.com/comptes/messagePublic";
const adressH10 = "https://swapengin.herokuapp.com/comptes/follow";
const adressH11 = "https://swapengin.herokuapp.com/comptes/unfollow";

export const environment = {
  production: true,
  bddUrl: adressH || "https://127.0.0.1:3000/comptes/users",
  picUrl: adressH1 || "https://127.0.0.1:3000/comptes/images",
  picUrl1:adressH2 || "https://127.0.0.1:3000/comptes/imagePros",
  logUrl: adressH3 || "https://127.0.0.1:3000/comptes/login",
  emailUrl: adressH4 || "https://127.0.0.1:3000/comptes/sendmail",
  resetUrl: adressH5 || "https://127.0.0.1:3000/comptes/reset",
  emailPUrl: adressH6 || "https://127.0.0.1:3000/comptes/forgotPassword",
  searchUrl : adressH7 || "https://127.0.0.1:3000/comptes",
  siteUrl : adressH8 || "https://127.0.0.1:3000",
  statusUrl : adressH9 || "https://127.0.0.1:3000/comptes/messagePublic",
  searchUrl1 : adressH10 || "https://127.0.0.1:3000/comptes/follow",
  searchUrl2 : adressH11 || "https://127.0.0.1:3000/comptes/unfollow",
};
