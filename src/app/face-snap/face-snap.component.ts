import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;
buttonText!: string;


ngOnInit() {
this.buttonText = 'Whoa, Snap!';
}

onSnap() {
  if (this.buttonText === 'Whoa, Snap!') {
    this.faceSnap.snaps++;
    this.buttonText = 'Oops, unsnap!';
  } else {
    this.faceSnap.snaps--;
    this.buttonText = 'Whoa, Snap!';
  }
  }
}