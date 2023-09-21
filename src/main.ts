import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {AnalyticsService} from "./app/shared/analytics.service";
import {AppRoutingModule} from "./app/app-routing.module";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers:[
      AnalyticsService,
      importProvidersFrom(AppRoutingModule), //* Theoretically Routing module is not a provider, but it
                                            //* server as a provider in this case, this makes it recognizable for app component
  ]
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
