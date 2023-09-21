import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {AnalyticsService} from "./app/shared/analytics.service";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers:[AnalyticsService]  //? Right way for providers
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
