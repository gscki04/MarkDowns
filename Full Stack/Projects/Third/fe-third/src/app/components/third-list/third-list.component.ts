import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThirdModel } from 'src/app/Models/third.model';
import { ThirdService } from 'src/app/services/third.service';

@Component({
  selector: 'app-third-list',
  templateUrl: './third-list.component.html',
  styleUrls: ['./third-list.component.scss']
})
export class ThirdListComponent implements OnInit {

  thirds: ThirdModel[] = [];

  constructor(
    private thirdService: ThirdService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadThirds();
  };

  loadThirds(): void{
    console.log('Loading thirds entries');
    this.thirdService.getThirds().subscribe({
      next: (result) => {
        this.thirds = result;
        console.log('Loaded thirds entries', result);
      },
      error: (err) => {
        console.log('Error loading thirds', err);
      },
    });
  };

  deleteThird(id: number): void{
    console.log('Deleting third with id:', id);
    if(confirm('Are you sure you want to delete this Entry?')){
      this.thirdService.deleteThirdById(id).subscribe({
        next: () => {
          console.log('Entry deleted, updating the list');
          this.thirds = this.thirds.filter(x => x.id !== id); 
          this.cdRef.detectChanges();          
        },
        error: (err) => {
          console.error('Error deleting entry', err);
        }
      });
    };
  }

  editThird(id: number): void{
    this.router.navigate([`/edit-third/${id}`]);
  }

}
