import { Component, Input, OnInit } from '@angular/core';
import { DogService } from 'src/app/shared/service/dog.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  randomImgUrl: string = "";

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getRandomImg().subscribe((data: any) => {
      console.log(data);
      this.randomImgUrl = data.message;
    })
  }

  getRandomImg() {
    this.dogService.getRandomImg().subscribe((data: any) => {
      console.log(data);
      this.randomImgUrl = data.message;
    })
  }

}
