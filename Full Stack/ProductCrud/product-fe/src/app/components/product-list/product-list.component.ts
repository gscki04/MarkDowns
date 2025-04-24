import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void{
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (error) => console.error("Error Fetching Products:", error)      
    })
  }

  deleteProduct(id: number): void{
    if(confirm("Are you sure you want to delete this product?")){
      this.productService.deleteProduct(id).subscribe( ()=> {
        this.getAllProducts();
      });
    }
  }  

}
