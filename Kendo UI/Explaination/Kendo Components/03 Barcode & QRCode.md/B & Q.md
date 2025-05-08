### 1. install the barcode & qrcode via CLI  
```sh
ng add @progress/kendo-angular-barcodes
```  
### 2. create component for Barcode   
```sh
ng generate component Sub/Barcode
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`  
```typescript
  { path: 'barcode', component: BarcodeComponent }
```  
create card in main component  

this single  
### 4. import & add to imports array into components TS file  
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_BARCODES } from '@progress/kendo-angular-barcodes'; // 🔄
import { KENDO_QRCODE } from '@progress/kendo-angular-barcodes'; // 🔄

@Component({
  selector: 'app-barcode',
  imports: [RouterOutlet, KENDO_BARCODES, KENDO_QRCODE],  // 🔄
  templateUrl: './barcode.component.html',
  styleUrl: './barcode.component.scss'
})
export class BarcodeComponent {
  title = "Barcode & QR code";
}
```  

### 5. Apply QR or barcode into HTML file  
```html
<h2>{{ title }}</h2>
<kendo-barcode type="EAN8" value="1234567"> </kendo-barcode>
<kendo-qrcode type="EAN8" value="https://www.youtube.com/watch?v=hgaKSN2o0bA"> </kendo-qrcode>
```  