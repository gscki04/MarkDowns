import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThirdModel } from 'src/app/Models/third.model';
import { ThirdService } from 'src/app/services/third.service';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss']
})
export class ThirdFormComponent implements OnInit {

  thirdForm: FormGroup;
  thirdId: number | null = null;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private thirdService: ThirdService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.thirdForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEditing = true;
      this.thirdId = +id;
      this.loadThird();
    }
  }

  loadThird(): void{
    if(this.thirdId){
      this.thirdService.getThirdById(this.thirdId).subscribe({
        next: (x) => {
          this.thirdForm.patchValue({
            name: x.name,
          });
        },
        error: () => {
          this.router.navigate(['/third-list'])
        },
      });
    }
  }

  onSubmit(): void{
    if(this.thirdForm.invalid) return;

    const entry: ThirdModel = this.thirdForm.value;

    if(this.isEditing && this.thirdId){
      this.thirdService.updateThirdById(this.thirdId, entry).subscribe({
        next: ()=> this.router.navigate(['/third-listt']),
        error: (err) => console.error(err)
      });
    } else {
      this.thirdService.addThird(entry).subscribe({
        next: ()=> this.router.navigate(['/third-list']),
        error: (err) => console.error(err)        
      })
    }
  }

}
