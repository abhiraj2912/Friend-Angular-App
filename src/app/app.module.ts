import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

const myroute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewFriendComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendComponent,
    SearchFriendComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
