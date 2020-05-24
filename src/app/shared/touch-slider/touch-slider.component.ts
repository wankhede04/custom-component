import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss']
})
export class TouchSliderComponent implements OnInit {

  @Input()
  public boxDetails: Array<any>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public goToDetails() {
    this.router.navigate(['/details']);
  }
}
