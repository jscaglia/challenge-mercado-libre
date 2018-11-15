import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface BreadcrumbItem {
  text: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbItems: BreadcrumbItem[] = [{ text: 'Categoria 1' }, { text: 'Categoria 2' }, { text: 'Categoria 3' }];

  constructor() { }

  ngOnInit() {
  }

  public isFirstItem(item: BreadcrumbItem): boolean {
    const result = this.breadcrumbItems.filter(function (element, index) {
      return (element.text === item.text && index === 0);
    });
    
    return result.length > 0;
  }

  public isLastItem(item: BreadcrumbItem): boolean {
    const result = this.breadcrumbItems.filter(function (element, index) {
      return (element.text === item.text && index === 2);
    });
    
    return result.length > 0;
  }

}
