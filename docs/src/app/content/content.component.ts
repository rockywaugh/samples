import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'content',
  templateUrl: '/app/content/legacy/Getting_Started/Introduction.htm'
})

export class ContentComponent implements OnInit {

  constructor(private _routeParams: RouteParams) {

  }

  ngOnInit() {
    let id = +this._routeParams.get('name');
  }
}