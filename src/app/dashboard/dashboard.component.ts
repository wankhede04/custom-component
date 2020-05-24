import { Component, OnInit } from '@angular/core';
import { ICharacterDetails } from '../models/CardDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public characterDetails: Array<ICharacterDetails> = [
    {
      title: 'skyler',
      quote: 'I need you to look me in the eye and tell me right now. Are you in danger?',
      fullName: 'Skyler White'
    },
    {
      title: 'walter-jr',
      quote: 'If you’re going to buy me off, buy me off.',
      fullName: 'Walter White, Jr.'
    },
    {
      title: 'lydia',
      quote: '',
      fullName: 'Lydia Rodarte'
    },
    {
      title: 'walter',
      quote: 'What? does he have some kind of sixth sense.',
      fullName: 'Walter White'
    },
    {
      title: 'jesse',
      quote: 'Did you just bring a bomb into a hospital?',
      fullName: 'Jesse Pinkman'
    },
    {
      title: 'saul',
      quote: 'Celebrities get their cars washed just like everybody else.',
      fullName: 'Saul Goodman'
    },
    {
      title: 'hank',
      quote: 'Are you seriously doing this to me again?',
      fullName: 'Hank Shrader'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
