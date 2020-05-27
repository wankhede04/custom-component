import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-fx',
  templateUrl: './card-fx.component.html',
  styleUrls: ['./card-fx.component.scss']
})
export class CardFxComponent implements OnInit {

  @Input()
  public cardTitle: string;

  @Input()
  public cardImageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
