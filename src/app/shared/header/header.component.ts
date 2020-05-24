import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public myAudio: HTMLAudioElement;
  public isActive: boolean = false;
  constructor(
    private router: Router,
  ) {
    this.myAudio = new Audio('assets/audio/rock-roll.mp3');
  }

  ngOnInit() {
  }

  public audioPlay(option: boolean) {
    this.isActive = option;
    if (option) {
      this.myAudio.play();
    } else {
      this.myAudio.pause();
    }
  }

  public goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

}
