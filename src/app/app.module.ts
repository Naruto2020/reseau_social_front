import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministrationComponent } from './components/administration/administration.component';
import { ListesComponent } from './components/listes/listes.component';
import { from } from 'rxjs';
import { AddProfilComponent } from './components/add-profil/add-profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import du module socket io
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// configuration du socket io 
//const config: SocketIoConfig = { url: 'https://localhost:3000', options: {} };


import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { AdminConnectionComponent } from './components/admin-connection/admin-connection.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProfilFormComponent } from './components/profil-form/profil-form.component';
import { ProfilSetComponent } from './components/profil-set/profil-set.component';
import { UserConnectionComponent } from './components/user-connection/user-connection.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { UserProfilFormComponent } from './components/user-profil-form/user-profil-form.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserSetComponent } from './components/user-set/user-set.component';
import { UserNotifComponent } from './components/user-notif/user-notif.component';
import { AdminNotifComponent } from './components/admin-notif/admin-notif.component';




@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    ListesComponent,
    AddProfilComponent,
    UtilisateurComponent,
    AdminAccountComponent,
    AdminConnectionComponent,
    AdminUpdateComponent,
    HomeAdminComponent,
    MenuComponent,
    PageAdminComponent,
    ResetPasswordComponent,
    ProfilComponent,
    ProfilFormComponent,
    ProfilSetComponent,
    UserConnectionComponent,
    UserAccountComponent,
    UserHomeComponent,
    UserMenuComponent,
    UserProfilComponent,
    UserProfilFormComponent,
    UserUpdateComponent,
    UserSetComponent,
    UserNotifComponent,
    AdminNotifComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    //SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
