import { Component } from '@angular/core';
import { GridDataResult, KENDO_GRID, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { categories, Category } from './DummyData/Categories';
import { ProductService } from './Service/product.service';
import { CommonModule } from '@angular/common';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, KENDO_GRID, KENDO_DROPDOWNS],
  providers: [ProductService],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

      public title = "Kendo UI for Angular Quick Start";
      public dropDownItems: Category[] = categories;
      public defaultItem: Category = { text: 'Filter by Category', value: null };

      public gridItems: Observable<GridDataResult> | undefined;
      public pageSize: number = 10;
      public skip: number = 0;
      public sortDescriptor: SortDescriptor[] = [];
      public filterTerm: number | null = null;

      constructor(private service: ProductService) {
          this.loadGridItems();
      }

      public pageChange(event: PageChangeEvent): void {
          this.skip = event.skip;
          this.loadGridItems();
      }

      private loadGridItems(): void {
          this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
      }

      public handleSortChange(descriptor: SortDescriptor[]): void {
          this.sortDescriptor = descriptor;
          this.loadGridItems();
      }

      public handleFilterChange(item: Category): void {
          this.filterTerm = item.value;
          this.skip = 0;
          this.loadGridItems();
      }

}
