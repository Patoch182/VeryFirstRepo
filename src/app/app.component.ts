import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: "Marseille t'as vu"
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: "Grow"
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: "112233 - aabbcc"
      },
      {
        title: 'Mais bien sûr !',
        description: 'Et la marmotte elle met le chocolat dans le papier d\'alu',
        imageUrl: 'https://cdn.pixabay.com/photo/2012/10/07/14/41/marmot-60172_960_720.jpg',
        createdDate: new Date(),
        snaps: 99    
      },
      {
        title: 'Fly & Boom !',
        description: 'BoxCarRacer',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/01/21/22/13/airplane-607225_960_720.jpg',
        createdDate: new Date(),
        snaps: 66 
      },
      {
        title: 'Best',
        description: 'Blalbalblalballablbla',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715_960_720.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ];
  }
}