import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    initFlowbite();
  }
}
