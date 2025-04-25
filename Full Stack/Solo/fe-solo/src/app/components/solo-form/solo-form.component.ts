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
        next: (solo) => {
          this.soloForm.patchValue({
            name: solo.name,
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

    const solo: SoloModel = this.soloForm.value;

    if (this.isEditing && this.soloId) {
      this.soloService.updateSolo(this.soloId, solo).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    } else {
      this.soloService.addSolo(solo).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    }
  }
}
