import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FirstLevelComponent } from './first-level/first-level.component';
import { PlayerComponent } from './player/player.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FirstLevelComponent,
    PlayerComponent,
    DeckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
