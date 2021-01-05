
const adressH = "https://swapengin.herokuapp.com/comptes/users";
const adressH1 = "https://swapengin.herokuapp.com/comptes/images";
const adressH2 = "https://swapengin.herokuapp.com/comptes/imagePros";
const adressH3 = "https://swapengin.herokuapp.com/comptes/login";
const adressH4 = "https://swapengin.herokuapp.com/comptes/sendmail";
const adressH5 = "https://swapengin.herokuapp.com/comptes/reset";
const adressH6 = "https://swapengin.herokuapp.com/comptes/forgotPassword";
const adressH7 = "https://swapengin.herokuapp.com/comptes";

export const environment = {
  production: true,
  bddUrl: adressH || "https://127.0.0.1:3000/comptes/users",
  picUrl: adressH1 || "https://127.0.0.1:3000/compte/images",
  picUrl1: adressH2 || "https://127.0.0.1:3000/compte/imagePros",
  logUrl: adressH3 || "https://127.0.0.1:3000/comptes/login",
  emailUrl: adressH4 || "https://127.0.0.1:3000/comptes/sendmail",
  resetUrl: adressH5 || "https://127.0.0.1:3000/comptes/reset",
  emailPUrl: adressH6 || "https://127.0.0.1:3000/comptes/forgotPassword",
  searchUrl : adressH7 || "https://127.0.0.1:3000/comptes",
};
