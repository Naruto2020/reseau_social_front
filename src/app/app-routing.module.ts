import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

/******************************************************************************************
 * ****** ****** gestion des imports admin ***** *****
 */
import {AdministrationComponent} from './components/administration/administration.component';
import {AdminAccountComponent} from './components/admin-account/admin-account.component';
import {AdminConnectionComponent} from './components/admin-connection/admin-connection.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {ListesComponent} from './components/listes/listes.component';
import {AdminUpdateComponent} from './components/admin-update/admin-update.component';
import {AddProfilComponent} from './components/add-profil/add-profil.component';
import {HomeAdminComponent} from './components/home-admin/home-admin.component';
import {PageAdminComponent} from './components/page-admin/page-admin.component';
import {MenuComponent} from './components/menu/menu.component';
import {ProfilComponent} from './components/profil/profil.component';
import {ProfilFormComponent} from './components/profil-form/profil-form.component';
import {ProfilSetComponent} from './components/profil-set/profil-set.component';
import {AdminNotifComponent} from './components/admin-notif/admin-notif.component';
import {AdminPublicationsComponent} from './components/admin-publications/admin-publications.component';
import {UpdateAdminPublicationsComponent} from './components/update-admin-publications/update-admin-publications.component';


/***********************************************************************************
 * ***** ***** gestion des imports utilisateurs ***** ****
 */

import {UtilisateurComponent} from './components/utilisateur/utilisateur.component';
import {UserAccountComponent} from './components/user-account/user-account.component';
import {UserConnectionComponent} from './components/user-connection/user-connection.component';
import {UserHomeComponent} from './components/user-home/user-home.component';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {UserProfilComponent} from './components/user-profil/user-profil.component';
import {UserProfilFormComponent} from './components/user-profil-form/user-profil-form.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';
import {UserSetComponent} from './components/user-set/user-set.component';
import {UserNotifComponent} from './components/user-notif/user-notif.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {UpdatePublicationsComponent} from './components/update-publications/update-publications.component';
import {UserDisplayFriendsComponent} from './components/user-display-friends/user-display-friends.component';
import {UserDisplayFriendProfilComponent} from './components/user-display-friend-profil/user-display-friend-profil.component';
import {UserLikesCommentsComponent} from './components/user-likes-comments/user-likes-comments.component';

import { AuthGuard} from './guards/auth.guard';
import {AuthUserGuard} from './guards/auth-user.guard';

const routes: Routes = [

  /* *** *** gestion des routes Admin *** *** */

  {path:"admin", component:AdministrationComponent},
  {path : "conectAdmin", component: AdminConnectionComponent},
  {path : "reset/:reset", component: ResetPasswordComponent},
  {path:"page_accueil", component:PageAdminComponent, canActivate:[AuthGuard], data:['admin']},
  {path : "compteAdmin", component:AdminAccountComponent, canActivate:[AuthGuard], data:['admin']},
  {path:"listProfils/:_id", component:ListesComponent, canActivate:[AuthGuard], data:['admin']},
  {path: "updateProfils/:_id", component : AdminUpdateComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"accueil_admin", component:HomeAdminComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"createProfils", component:AddProfilComponent},
  {path:"menu", component:MenuComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"profil/:_id", component:ProfilComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"profil-info", component:ProfilFormComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"profil-info-img/:_id", component:ProfilSetComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"admin-notifications", component:AdminNotifComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"admin-publications", component:AdminPublicationsComponent,canActivate:[AuthGuard], data:['admin']},
  {path:"updateAdmin-publications/:_id", component:UpdateAdminPublicationsComponent,canActivate:[AuthGuard], data:['admin']},
  
  /* *** *** gestion des routes Utilisateur *** *** */
  
  {path:"", component:UtilisateurComponent},
  {path:"createUser", component:UserAccountComponent},
  {path:"conectUser", component:UserConnectionComponent},
  {path:"accueil", component:UserHomeComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"menu-user", component:UserMenuComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"profil-user/:_id", component:UserProfilComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"profil-user-info", component:UserProfilFormComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"updateUsers/:_id", component:UserUpdateComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"profil-user-infoImg/:_id", component:UserSetComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"notifications", component:UserNotifComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"publications", component:PublicationsComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"updateUser-publications/:_id", component:UpdatePublicationsComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"user-display-friends", component:UserDisplayFriendsComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"user-display-friend-profil/:_id", component:UserDisplayFriendProfilComponent, canActivate:[AuthUserGuard], data:['user']},
  {path:"user-Likes-Comments/:_id", component:UserLikesCommentsComponent, canActivate:[AuthUserGuard], data:['user']},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
