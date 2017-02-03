import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { homeRouting, homeRoutingProviders }  from './home.routes';

@NgModule({
  imports: [
    FormsModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    homeRoutingProviders
  ],
})
export class HomeModule { }
