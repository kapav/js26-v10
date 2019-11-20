import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NotfoundPageComponent} from '../notfound-page/notfound-page.component'
import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from "../shared/components/phrase-detail/phrase-detail.component"

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'phrase',
        component: PhraseListComponent
      },
      {
        path: 'phrase/:id',
        component: PhraseDetailComponent
      },
      {
        path: '**',
        component: NotfoundPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
