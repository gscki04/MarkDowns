import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TwothModel } from 'src/app/model/TwothModel';
import { TwothService } from 'src/app/services/twoth.service';

@Component({
  selector: 'app-twoth-form',
  templateUrl: './twoth-form.component.html',
  styleUrls: ['./twoth-form.component.scss']
})
export class TwothFormComponent implements OnInit {
  twothForm: FormGroup;
  twothId: number| null = null;
  isEditing: false | boolean = false;

  constructor(
    private fb: FormBuilder,
    private twothService: TwothService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.twothForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEditing = true;
      this.twothId = +id;
      this.loadTwoth();
    }
  }

  loadTwoth(): void{
    if(this.twothId){
      this.twothService.getTwothById(this.twothId).subscribe({
        next: (twoth) => {
          this.twothForm.patchValue({
            name: twoth.name,
          })
        },
        error: () => {
          this.router.navigate(['/twoths-list']);
        },
      });
    }
  };

  onSubmit(): void{
    if(this.twothForm.invalid) return;

    const twoth: TwothModel = this.twothForm.value;

    if(this.isEditing && this.twothId){
      this.twothService.updateTwoth(this.twothId, twoth).subscribe({
        next: () => this.router.navigate([`/twoths-list`]),
        error: (err) => console.error(err),        
      });
    }else{
      this.twothService.addTwoth(twoth).subscribe({
        next:() => this.router.navigate(['/twoths-list']),
        error: (err) => console.error(err),        
      })
    }
  };

}
