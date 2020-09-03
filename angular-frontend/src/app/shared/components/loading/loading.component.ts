import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  dots = ''

  constructor() {
    window.setInterval(() => {
      if (this.dots.length < 3) {
        this.dots += '.'
      } else {
        this.dots = ''
      }
    }, 500)
  }

  ngOnInit(): void {
  }

}
