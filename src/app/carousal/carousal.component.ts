import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  banners = [
    { url: "assets/img/image1.jpeg", label: "Grande Ventes D'entrepôt" },
    { url: "assets/img/image2.jpeg", label: "Ce Samedi" },
    { url: "assets/img/image3.jpeg", label: "Ne ratez pas votre chance"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
