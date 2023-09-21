import { Injectable } from '@angular/core';

@Injectable()  //! case that we do not provide in root
export class AnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}
