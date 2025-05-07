## Component:  
`fe-solo\src\app\components\solo-form\solo-form.component.ts`  
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoloService } from '../../services/solo.service';
import { SoloModel } from '../../models/solo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solo-form',
  templateUrl: './solo-form.component.html',
  styleUrls: ['./solo-form.component.scss'],
})

export class SoloFormComponent implements OnInit {
  soloForm: FormGroup;
  soloId: number | null = null;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private soloService: SoloService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.soloForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.soloId = +id;
      this.loadSolo();
    }
  }

  loadSolo(): void {
    if (this.soloId) {
      this.soloService.getSoloById(this.soloId).subscribe({
        next: (x) => {
          this.soloForm.patchValue({
            name: x.name,
          });
        },
        error: () => {
          this.router.navigate(['/solos-list']);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.soloForm.invalid) {
      return;
    }

    const entry: SoloModel = this.soloForm.value;

    if (this.isEditing && this.soloId) {
      this.soloService.updateSolo(this.soloId, entry).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    } else {
      this.soloService.addSolo(entry).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    }
  }
}
```  
## Template:  
`fe-solo\src\app\components\solo-form\solo-form.component.html`  
```html
<h2>{{ isEditing ? 'Edit Solo' : 'Add Solo' }}</h2>

<form [formGroup]="soloForm">
  <div>
    <label for="name">Name</label>
    <input
      id="name"
      formControlName="name"
      type="text"
      placeholder="Enter solo name"
    />
    <div *ngIf="soloForm.get('name')?.invalid && soloForm.get('name')?.touched">
      <small *ngIf="soloForm.get('name')?.errors?.['required']">
        Name is required.
      </small>
      <small *ngIf="soloForm.get('name')?.errors?.['maxlength']">
        Name can't exceed 100 characters.
      </small>
    </div>
  </div>
        <button type="submit" (click)="onSubmit()" [disabled]="twothForm.invalid">
          {{ isEditing ? 'update' : 'add' }} Entry
        </button>
</form>
```  