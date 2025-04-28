## Component:  
`fe-solo\src\app\components\solo-list\solo-list.component.ts`:  
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoloService } from '../../services/solo.service';
import { SoloModel } from '../../models/solo.model';
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef

@Component({
  selector: 'app-solo-list',
  templateUrl: './solo-list.component.html',
  styleUrls: ['./solo-list.component.scss'],
})
export class SoloListComponent implements OnInit {
  solos: SoloModel[] = [];

  constructor(
    private soloService: SoloService,
    private router: Router,
    private cdRef: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadSolos();
  }

  loadSolos(): void {
    console.log('Loading solos');
    this.soloService.getSolos().subscribe({
      next: (result) => {
        this.solos = result;
        console.log('Loaded solos:', result);
      },
      error: (err) => {
        console.error('Error loading solos', err);
      },
    });
  }
  
  deleteSolo(id: number): void {
    console.log('Deleting solo with id:', id);
    if (confirm('Are you sure you want to delete this solo?')) {
      this.soloService.deleteSolo(id).subscribe({
        next: () => {
          console.log('Solo deleted, updating the list');
          this.solos = this.solos.filter(solo => solo.id !== id);
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.error('Error deleting solo', err);
        },
      });
    }
  }
  

  editSolo(id: number): void {
    this.router.navigate([`/edit-solo/${id}`]);
  }
}
```  
## Template:  
`fe-solo\src\app\components\solo-list\solo-list.component.html`  
```html
<h2>Solos List</h2>

<table style="margin-left: 30px; padding: 100px; width: 30%; border: 1px solid black;">
    <tr *ngFor="let solo of solos">
        <td>{{ solo.name }}</td>
        <td> <button (click)="editSolo(solo.id)">Edit</button></td>
        <td> <button (click)="deleteSolo(solo.id)">Delete</button></td>
    </tr>
</table>

<button routerLink="/add-solo">Add New Solo</button>
```  