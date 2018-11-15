import { Component, OnInit, Injector } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { delay } from 'q';
import { ProductList } from '../../classStructure/classstructure';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent extends LayoutComponent implements OnInit {
  public resultList: Array<ProductList> = new Array<ProductList>();

  public getFormattedPrice(price: number): string {
    return `$ ${price.toLocaleString()}`;
  }

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.initResults();
  }

  private goToSearch(someToSearch: string) {
    this.layoutService.search(someToSearch).subscribe((data: any) => {
      delay(2000);
      this.resultList = data.results;
      this.spinner.hide();
    });
  }

  private initResults(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.spinner.show();
      if (params.search !== null && params.search !== undefined && params.search.length > 0) {
        this.goToSearch(params.search);
      }
    });
  }
}
