import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  public openAboutModal() {
    const modalRef = this.modalService.open(AboutComponent, {
      size: 'lg',
      // windowClass: 'large-popup',
      backdrop: 'static'
    });
  }

}
