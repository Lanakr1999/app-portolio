import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';

  isMainPageVisible: boolean = true;
  isAboutUsPageVisible: boolean = false;
  isContactPageVisible: boolean = false;
  isPortfolioPageVisible: boolean = false;

  showMainPage(){
    this.isMainPageVisible = true;
    this.isAboutUsPageVisible = false;
    this.isContactPageVisible = false;
    this.isPortfolioPageVisible = false;
  }
  showAboutUsPage(){
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = true;
    this.isContactPageVisible = false;
    this.isPortfolioPageVisible = false;
  }
  showContactsPage(){
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = false;
    this.isContactPageVisible = true;
    this.isPortfolioPageVisible = false;
  }
  showPortfolioPage(){
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = false;
    this.isContactPageVisible = false;
    this.isPortfolioPageVisible = true;
  }
}
