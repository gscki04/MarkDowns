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
