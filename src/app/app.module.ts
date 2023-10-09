import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { ItemsComponent } from './items/items.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './star-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path:'characters', component: TabsComponent, 
    children: [
      {path:'', redirectTo: 'all', pathMatch: 'full'},
      {path:':side', component: ListComponent}
  ] },
  { path:'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemsComponent,
    ListComponent,
    CreateCharacterComponent,
    HeaderComponent   
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
