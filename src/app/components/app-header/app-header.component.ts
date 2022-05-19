import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input()
  isMainPageVisible!: boolean;

  @Input()
  isAboutUsPageVisible!: boolean;

  @Input()
  isContactPageVisible!: boolean;

  @Output() onMainPageSelected = new EventEmitter();

  @Output() onAboutUsPageSelected = new EventEmitter();

  @Output() onContactsPageSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showMainPage() {
    this.onMainPageSelected.emit();
  }

  showAboutUsPage(){
    this.onAboutUsPageSelected.emit();
  }

  showContactsPage(){
    this.onContactsPageSelected.emit();
  }

}
