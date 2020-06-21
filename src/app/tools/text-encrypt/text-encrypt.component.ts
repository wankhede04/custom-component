import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { Encryption } from '../../../utils/encryption';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
  selector: 'app-text-encrypt',
  templateUrl: './text-encrypt.component.html',
  styleUrls: ['./text-encrypt.component.scss']
})
export class TextEncryptComponent implements OnInit {

  private _inputValues = new BehaviorSubject<IInputValues>({
    getValue: '',
    putValue: ''
  });

  public get inputValues() {
    return this._inputValues.getValue();
  }

  public set inputValues(inputValues: IInputValues) {
    this._inputValues.next(inputValues);
  }

  constructor(
    private activeModal: NgbActiveModal,
    private clipboardService: ClipboardService
  ) { }

  ngOnInit() {
  }

  public generateHash() {
    let encrypt = new Encryption();
    this.inputValues.putValue = encrypt.encrypt256(this.inputValues.getValue);
  }

  public copyEncryptText() {
    this.clipboardService.copyToClipboard(this.inputValues.putValue)
  }

  public dismissModal() {
    this.activeModal.dismiss();
  }
}

interface IInputValues {
  getValue: string;
  putValue: string;
}