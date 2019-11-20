import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {routes} from './app.routes'

// Сервисы
import {PhraseService} from './shared/services/phrase.service'

// Компоненты
import { AppComponent } from './app.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhraseListComponent } from './shared/components/phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './shared/components/phrase-detail/phrase-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundPageComponent,
    HomePageComponent,
    PhraseListComponent,
    PhraseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
