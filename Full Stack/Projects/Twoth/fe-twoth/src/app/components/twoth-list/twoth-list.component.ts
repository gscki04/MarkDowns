import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwothModel } from 'src/app/model/TwothModel';
import { TwothService } from 'src/app/services/twoth.service';

@Component({
  selector: 'app-twoth-list',
  templateUrl: './twoth-list.component.html',
  styleUrls: ['./twoth-list.component.scss']
})
export class TwothListComponent implements OnInit{

  twoths: TwothModel[] = [];

  constructor(
    private twothService: TwothService,
    private router: Router,
    private cdRef: ChangeDetectorRef 
  ){};

  ngOnInit(): void{
    this.loadTwoths();
  };

  loadTwoths(): void{
    console.log('Loading Twoths');
    this.twothService.getTwoths().subscribe({
      next: (result) => {
        this.twoths = result;        
        console.log(`Loaded twoths`, this.twoths);
      },
      error: (err) => {
        console.error("Error loading twoths", err);
      },
    });
  };

  deleteTwoth(id: number): void{
    console.log("Deleting twoth with id: ", id);
    if(confirm('Are you sure you want to delete?')){
      this.twothService.deleteTwoth(id).subscribe({
        next: () => {
          console.log('Record deleted, updating the list');
          this.twoths = this.twoths.filter(x => x.id !== id);
          this.cdRef.detectChanges();          
        },
        error: (err) => {
          console.log("Error deleting twoth", err);
        }
      });
    }    
  };

  editTwoth(id: number): void{
    this.router.navigate([`/edit-twoth/${id}`]);
  };

}