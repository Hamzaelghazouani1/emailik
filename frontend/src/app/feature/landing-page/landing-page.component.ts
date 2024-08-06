import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { RoughNotationModule } from 'ng-rough-notation';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,RoughNotationModule],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  // <span  [roughNotation]="{ type: 'box', color: '#134e4a' }"> all-in-one</span> : This is the rough notation directive that will be used to highlight the text.
  ngOnInit() {
    initFlowbite();
  }

}
