import { Subscription } from 'rxjs';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { CartService } from './../../../cart/services';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') title: ElementRef<HTMLElement>;

  quantity = 0;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop App';
  }
}
