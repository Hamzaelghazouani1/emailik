import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { RoughNotationModule } from 'ng-rough-notation';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,RoughNotationModule],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit,AfterViewInit {
  // <span  [roughNotation]="{ type: 'box', color: '#134e4a' }"> all-in-one</span> : This is the rough notation directive that will be used to highlight the text.
  ngOnInit() {
    initFlowbite();
  }
  @ViewChild('hero_right') hero_right: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('hero_left') hero_left: ElementRef<HTMLDivElement> | undefined;
  platformId = inject(PLATFORM_ID);
  ngAfterViewInit(){
    if(isPlatformBrowser(this.platformId)){
      gsap.registerPlugin(ScrollTrigger);
      this.initialAnimation();
    }
  }

  initScrollAnimations(){
    if (this.hero_left) {
      gsap.from(this.hero_left.nativeElement, {
        x: -110,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      });
    }
    if (this.hero_right) {
      gsap.from(this.hero_right.nativeElement, {
        x: 110,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }
  }

  initialAnimation(){
    if (this.hero_left) {
      gsap.from(this.hero_left.nativeElement, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }
    if (this.hero_right) {
      gsap.from(this.hero_right.nativeElement, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }
  }

}
