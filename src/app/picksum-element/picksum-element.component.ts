import { Component, OnInit } from '@angular/core';
import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-picksum-element',
  templateUrl: './picksum-element.component.html',
  styleUrls: ['./picksum-element.component.css']
})
export class PicksumElementComponent implements OnInit {


  picksumelement: Observable<any>;
  constructor(private picsumService: PicsumService) {
    
  }

  ngOnInit(): void {
    this.getImages();
  }

 getImages(){
  this.picksumelement = this.picsumService.getPicsum();
   };
}

