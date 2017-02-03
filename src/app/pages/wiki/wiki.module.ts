import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WikiComponent } from './wiki.component';
import { MarkdownPipe } from '../../markdown.pipe';

import { wikiRouting, wikiRoutingProviders }  from './wiki.routes';

@NgModule({
  imports: [
    FormsModule,
    wikiRouting
  ],
  declarations: [
    WikiComponent,
    MarkdownPipe
  ],
  providers: [
    wikiRoutingProviders
  ],
})
export class WikiModule { }
