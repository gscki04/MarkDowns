import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoloService } from '../../services/solo.service';
import { SoloModel } from '../../models/solo.model';

@Component({
  selector: 'app-solo-list',
  templateUrl: './solo-list.component.html',
  styleUrls: ['./solo-list.component.scss'],
})
export class SoloListComponent implements OnInit {
  solos: SoloModel[] = [];

  constructor(private soloService: SoloService, private router: Router) {}

  ngOnInit(): void {
    this.loadSolos();
  }

  loadSolos(): void {
    this.soloService.getSolos().subscribe({
      next: (solos) => {
        this.solos = solos;
      },
      error: (err) => {
        console.error('Error loading solos', err);
      },
    });
  }

  deleteSolo(id: number): void {
    if (confirm('Are you sure you want to delete this solo?')) {
      this.soloService.deleteSolo(id).subscribe({
        next: () => {
          // Directly update the solos list after deletion
          this.solos = this.solos.filter(solo => solo.id !== id);
  
          // Reload the list to make sure data is updated
          this.loadSolos();  // This will fetch the latest list from the server
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
