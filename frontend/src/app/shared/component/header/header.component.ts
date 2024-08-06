import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  links = [
    { label: 'Explore', path: '/explore' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
