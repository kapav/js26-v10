import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PhraseRoutingModule} from './phrase-routing.module'

import {NotfoundPageComponent} from '../notfound-page/notfound-page.component'
import { PhrasePageComponent } from './phrase-page.component'
import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component';

@NgModule({
  declarations: [
    NotfoundPageComponent,
    PhrasePageComponent,
    PhraseListComponent,
    PhraseDetailComponent
  ],
  imports: [
    CommonModule,
    PhraseRoutingModule
  ]
})
export class PhraseModule { }
