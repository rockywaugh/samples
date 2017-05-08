import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'content',
  templateUrl: '/app/content/legacy/Title_Page.htm',
  directives: [ROUTER_DIRECTIVES]
})

export class FrontPageComponent { }