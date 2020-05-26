import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-links',
  templateUrl: './brand-links.component.html',
  styleUrls: ['./brand-links.component.scss']
})
export class BrandLinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public routeTo(routeValue: string) {
    this.router.navigate([routeValue]);
  }

}
