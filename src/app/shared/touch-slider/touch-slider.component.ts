import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss']
})
export class TouchSliderComponent implements OnInit {

  @Input()
  public boxDetails: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
