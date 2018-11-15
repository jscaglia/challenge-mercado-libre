import { Component, OnInit, Injector } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { delay } from 'q';
import { ProductDetail } from 'src/app/classStructure/classstructure';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss']
})
export class ResultDetailsComponent extends LayoutComponent implements OnInit {
  public itemSelected: ProductDetail = new ProductDetail();
  public initialized: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.initDetail();
  }

  public get itemPrice(): { integer: string, fraction: string } {
    const integer: number = Math.floor(this.itemSelected.price);
    const fraction: number = (this.itemSelected.price - integer) * 100;
    return {
      integer: integer.toLocaleString(),
      fraction: fraction.toLocaleString().padEnd(2, '0'),
    };
  }

  private initDetail(): void {
    this.activatedRoute.params.subscribe(params => {
      this.spinner.show();
      if (params.id !== null && params.id !== undefined && params.id.length > 0) {
        this.getDescription(params.id);
      }
    });
  }

  private getDescription(product: string): void {
    this.layoutService.getDescription(product).subscribe((data: any) => {
      delay(2000);
      this.itemSelected = data;
      this.initialized = true;
      this.spinner.hide();
    });
  }
}
