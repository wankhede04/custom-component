import { Component, OnInit } from '@angular/core';
import { Encryption } from '../../utils/encryption';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor() {}

  ngOnInit() {
  }

  public generateHash() {
    let encrypt = new Encryption();
    this.inputValues.putValue = encrypt.encrypt(this.inputValues.getValue);
  }
}

interface IInputValues {
  getValue: string;
  putValue: string;
}