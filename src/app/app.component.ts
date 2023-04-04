import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myFirstSnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myBestSnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  myVeryLastSnap!: FaceSnap;

  ngOnInit() {
    this.myFirstSnap = new FaceSnap(
      'Harrier',
      'Le Harrier Douglas à la vanille MacChicken',
      'https://cdn.pixabay.com/photo/2017/07/19/00/32/av-8b-harrier-2517552_960_720.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Corvette',
      'Ma future voiture pour le weekend',
      'https://cdn.pixabay.com/photo/2016/03/28/20/02/corvette-1286826_960_720.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'La Z',
      'Une moto qui à du charme',
      'https://cdn.pixabay.com/photo/2020/11/12/14/22/motorcycle-5735642_960_720.jpg',
      new Date(),
      0
    );
    this.myVeryLastSnap = new FaceSnap(
      'Mais bien sûr !',
      'Et la marmotte elle met le chocolat dans le papier d\'alu',
      'https://cdn.pixabay.com/photo/2012/10/07/14/41/marmot-60172_960_720.jpg',
      new Date(),
      99
    );
    this.mySecondSnap = new FaceSnap(
      'Fly & Boom !',
      'BoxCarRacer',
      'https://cdn.pixabay.com/photo/2015/01/21/22/13/airplane-607225_960_720.jpg',
      new Date(),
      66
    );
    this.myBestSnap = new FaceSnap(
      'Best',
      'Blalbalblalballablbla',
      'https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715_960_720.jpg',
      new Date(),
      0
    );
  }
}