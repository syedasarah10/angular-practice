import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { ItemsComponent } from './items/items.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './star-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemsComponent,
    ListComponent,
    CreateCharacterComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
