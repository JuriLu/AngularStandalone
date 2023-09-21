import { Component } from '@angular/core';
import {DetailsComponent} from "./details/details.component";

@Component({
  //** imports:[DetailsComponent],  would work only if Welcome Component is also standalone
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
