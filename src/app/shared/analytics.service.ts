import {Injectable} from '@angular/core';

@Injectable()
export class AnalyticsService {
    registerClick(): void {
        console.log('Clicked!');
    }
}
