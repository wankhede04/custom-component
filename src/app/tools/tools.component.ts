import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TextEncryptComponent } from './text-encrypt/text-encrypt.component'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  public openTextEncryptModal() {
    const modalRef = this.modalService.open(TextEncryptComponent, {
      size: 'lg',
      backdrop: true
    });
  }
}
