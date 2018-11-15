import { Component, OnInit, Injector } from '@angular/core';
import { LayoutService } from './layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'base-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent implements OnInit {

  protected layoutService: LayoutService;
  protected router: Router;
  protected spinner: NgxSpinnerService;
  protected activatedRoute: ActivatedRoute;

  constructor(injector: Injector) {
    this.layoutService = injector.get(LayoutService);
    this.router = injector.get(Router);
    this.spinner = injector.get(NgxSpinnerService);
    this.activatedRoute = injector.get(ActivatedRoute);
  }

  ngOnInit() {
  }

}
