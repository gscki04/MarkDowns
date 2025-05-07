import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  productId: number | null = null;
  isEditedMode = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router  
  ) {
    this.productForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');

    this.productId = idParam ? +idParam : null;
    if(this.productId){
      this.isEditedMode = true;
      this.productService.GetProductById(this.productId).subscribe(product => {
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        });
      });
    }
  }

  onSubmit(): void{
    if(this.productForm.valid){
      if(this.isEditedMode && this.productId){
        this.productService.updateProduct(this.productId, {id: this.productId, ...this.productForm.value})
        .subscribe( ()=> {
          alert("Product updated successfully!");
          this.router.navigate(['/products']);
        } );
      } else {
        this.productService.createProduct(this.productForm.value).subscribe( ()=> {
          alert('Product created successfully!');
          this.productForm.reset();
          this.router.navigate(['/products']);
        } )
      }
    
  }

}
}