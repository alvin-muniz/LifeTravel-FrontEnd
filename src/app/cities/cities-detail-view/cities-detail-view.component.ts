import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities-detail-view',
  templateUrl: './cities-detail-view.component.html',
  styleUrls: ['./cities-detail-view.component.less']
})
export class CitiesDetailViewComponent implements OnInit {

  @Input() selectedCity: any;
  @Input() selectedPosts: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
