import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare var Swiper: any;

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss']
})
export class TouchSliderComponent implements OnInit {

  @Input()
  public boxDetails: Array<any>;
  swiper: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  ngAfterViewInit() {
    this.swiper.update();
  }

  public goToDetails() {
    this.router.navigate(['/details']);
  }
}
