import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
//import{HttpClient} from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';



import {environment} from 'src/environments/environment';
const profilUrl = environment.bddUrl;
const loginUrl = environment.logUrl;
const emailUrl = environment.emailUrl;
const resetPUrl = environment.resetUrl;
const forgotPUrl = environment.emailPUrl;
const photoUrl = environment.picUrl;
const photoUrl1 = environment.picUrl1;
const amisUrl = environment.searchUrl;
const postUrl = environment.statusUrl;
const followUrl = environment.searchUrl1;
const unfollowUrl = environment.searchUrl2;
const likeUrl = environment.aimeUrl;
const unlikeUrl = environment.aimeUrl1;
const commentsUrl = environment.comUrl1;

@Injectable({
  providedIn: 'root'
})
export class BailService {


  constructor(private http:HttpClient) { }
  /***********************************************
   * **** gestion des requêtes Utilisateurs
   */
  // requête pour affichage de la liste des profils 
  showProfils() :Observable<any> {
    return this.http.get(profilUrl);
  }
  
  // requête pour creer et enregistrer les profils 
  createProfil(data): Observable<any> {
    
    return this.http.post(profilUrl,data);
  }
  
  // requête pour recupérer le profil à modifier 
  currentData(id):Observable<any> {
    return this.http.get(`${profilUrl}/${id}`);
  }
  
  // requête pour mettre à jour le profil précédement séléctionné 
  updateProfil(id, data) {
    return this.http.put(`${profilUrl}/${id}`, data);
  }

  // requête pour supprimer le profil 
  effaceProfil(id):Observable<any> {
    return this.http.delete(`${profilUrl}/${id}`);
  }
  
  /*************************************************
   * **** gestion des reqêtes de connexions(authentification)
   */
  
  //requête pour connexion 
  connecter(data):Observable<any> {
    return this.http.post(loginUrl, data);
  }
  
  // requête pour l'envois des emails de confirmation et en cas d'oublie de mot de passe 
  sendMail(data):Observable<any> {
    return this.http.post(emailUrl, data);
  }
  
  forgotMail(data):Observable<any> {
    return this.http.post(forgotPUrl, data);
  }
  
  // requête pour reinitialiser le mot de passe 
  initPass(token, data):Observable<any> {
    return this.http.post(`${resetPUrl}/${token}`, data);
  }
  
  // pour recupérer le token 
  currentDta(token):Observable<any> {
    return this.http.get(`${resetPUrl}/${token}`);
  }

  deconnecter(){
    //localStorage.removeItem('isConnected');
    localStorage.removeItem('loggedUser');
  }
  
  /***************************************************
   * *** gestion des requêtes d'images
   */
  
  // requête pour charger l'image background
  uploadImage(data){
    
    return this.http.post("http://127.0.0.1:3000/comptes/images",data);
  }
  // pour afficher l'images back
  displayImage(){
    return this.http.get(photoUrl);
  }

  // requête pour selectionner une img back via son id 
  currentImage(id):Observable<any>{
    return this.http.get(`${photoUrl}/${id}`);
  }

  // requête pour supprimer l'image back
  deleteImgBack(id):Observable<any>{
    return this.http.delete(`${photoUrl}/${id}`);
  }
  
  // pour charger l'image de profil 
  uploadImage1(data){
    return this.http.post(photoUrl1,data)
  }
  
  // pour afficher l'image de profil 
  displayImage1(){
    return this.http.get(photoUrl1);
  }

  // requête pour selectionner une img Profil via son id 
  currentImg(id):Observable<any>{
    return this.http.get(`${photoUrl1}/${id}`);
  }

  // requête pour supprimer l'image profil
  deleteImgPro(id):Observable<any>{
    return this.http.delete(`${photoUrl1}/${id}`);
  }

  /********************************************************************
   * ******  ******* gestion des requêtes de recherche et d'ajout d'amis 
   */

  // requêtes pour rechercher, enregistrer et supprimier un utilisateur de la liste d'amis 
  findFriends(nom):Observable<any>{
    return this.http.get(`${amisUrl}/${nom}`);
  }
  
  /*addFriend(username, data){
    return this.http.patch(`${followUrl}/${username}`, data);
  }*/
  addFriend(id, data){
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH','content-type': 'application/json'}  )
    return this.http.patch(`${followUrl}/${id}`, data, {'headers':headers});
  }
  cancelFriend(id,data):Observable<any>{
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH','content-type': 'application/json'}  )
    return this.http.patch(`${unfollowUrl}/${id}`, data, {'headers':headers})
  }

  /********************************************************************
   * ******  ******* gestion des requêtes des publications  
   */
  publierMess(data):Observable<any>{
    return this.http.post(postUrl, data);
  }

  displayPost():Observable<any>{
    return this.http.get(postUrl);
  }

  curentPost(id):Observable<any>{
    return this.http.get(`${postUrl}/${id}`);
  }

  updatePost(id, data){
    return this.http.put(`${postUrl}/${id}`, data);
  }
  deletePost(id){
    return this.http.delete(`${postUrl}/${id}`);
  }


    /********************************************************************
   * ******  ******* gestion des requêtes Like 
   */
  likesPost(id, data):Observable<any>{
    return this.http.patch(`${likeUrl}/${id}`, data);
  }

  unlikesPost(id, data):Observable<any>{
    return this.http.patch(`${unlikeUrl}/${id}`, data);
  }

      /********************************************************************
   * ******  ******* gestion des requêtes comments 
   */

   commentsPost(id, data):Observable<any>{
     return this.http.patch(`${commentsUrl}/${id}`, data);
   }


}
