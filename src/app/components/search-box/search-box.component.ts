import { Component, OnInit, Injector } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.scss' ]
})
export class SearchBoxComponent extends LayoutComponent implements OnInit {
  public someToFind = '';
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

  public goToSearch(event: any): void {
    if (event.keyCode === 13) {
      this.router.navigate(['/items'], { queryParams: { search: this.someToFind } });
    }
  }
}
