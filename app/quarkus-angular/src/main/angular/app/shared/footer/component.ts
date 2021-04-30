import { Component, OnInit } from '@angular/core';

/**
 * Global page footer.
 */
@Component({
  selector: 'app-footer',
  styleUrls: ['./component.scss'],
  templateUrl: './component.html'
})
export class FooterComponent implements OnInit {
  year;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
