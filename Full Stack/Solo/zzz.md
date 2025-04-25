fe-solo\src\app\app-routing.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloFormComponent } from './components/solo-form/solo-form.component';
import { SoloListComponent } from './components/solo-list/solo-list.component';

// 🔄: add routing to this array
const routes: Routes = [
  { path: '', redirectTo: 'solos-list', pathMatch: 'full' },
  { path: 'solos-list', component: SoloListComponent },
  { path: 'add-solo', component: SoloFormComponent },
  { path: 'edit-solo/:id', component: SoloFormComponent },
  { path: '**', redirectTo: 'solos-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

fe-solo\src\app\app.component.html:
```html
<h1>Solo Input Application</h1>
<router-outlet></router-outlet>

```

fe-solo\src\app\app.component.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fe-solo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-solo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fe-solo app is running!');
  });
});

```

fe-solo\src\app\app.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-solo';
}

```

fe-solo\src\app\app.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoloListComponent } from './components/solo-list/solo-list.component';
import { SoloFormComponent } from './components/solo-form/solo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SoloListComponent,
    SoloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

fe-solo\src\app\components\solo-form\solo-form.component.html:
```html
<h2>{{ isEditing ? 'Edit Solo' : 'Add Solo' }}</h2>

<form [formGroup]="soloForm" (ngSubmit)="onSubmit()">
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

  <button type="submit" [disabled]="soloForm.invalid">
    {{ isEditing ? 'Update' : 'Add' }} Solo
  </button>
</form>

```

fe-solo\src\app\components\solo-form\solo-form.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloFormComponent } from './solo-form.component';

describe('SoloFormComponent', () => {
  let component: SoloFormComponent;
  let fixture: ComponentFixture<SoloFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloFormComponent]
    });
    fixture = TestBed.createComponent(SoloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

fe-solo\src\app\components\solo-form\solo-form.component.ts:
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

```

fe-solo\src\app\components\solo-list\solo-list.component.html:
```html
<h2>Solos List</h2>

<ul>
  <li *ngFor="let solo of solos">
    <span>{{ solo.name }}</span>
    <button (click)="editSolo(solo.id)">Edit</button>
    <button (click)="deleteSolo(solo.id)">Delete</button>
  </li>
</ul>

<button routerLink="/add-solo">Add New Solo</button>

```

fe-solo\src\app\components\solo-list\solo-list.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloListComponent } from './solo-list.component';

describe('SoloListComponent', () => {
  let component: SoloListComponent;
  let fixture: ComponentFixture<SoloListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoloListComponent]
    });
    fixture = TestBed.createComponent(SoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

fe-solo\src\app\components\solo-list\solo-list.component.ts:
```typescript
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

fe-solo\src\app\env\env.ts:
```typescript
export const environment = {
    production: false,
    apiUrl: "https://localhost:7013/api/solo"
  };
  
```

fe-solo\src\app\models\solo.model.ts:
```typescript
export interface SoloModel {
    id: number;
    name: string;
}
```

fe-solo\src\app\services\solo.service.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';

import { SoloService } from './solo.service';

describe('SoloService', () => {
  let service: SoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```

fe-solo\src\app\services\solo.service.ts:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoloModel } from '../models/solo.model';
import { environment } from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class SoloService {
  private beUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSolos(): Observable<SoloModel[]> {
    return this.http.get<SoloModel[]>(this.beUrl);
  }

  getSoloById(id: number): Observable<SoloModel> {
    return this.http.get<SoloModel>(`${this.beUrl}/${id}`);
  }

  addSolo(solo: SoloModel): Observable<SoloModel> {
    return this.http.post<SoloModel>(this.beUrl, solo);
  }

  updateSolo(id: number, solo: SoloModel): Observable<void> {
    return this.http.put<void>(`${this.beUrl}/${id}`, solo);
  }

  deleteSolo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.beUrl}/${id}`);
  }
}

```

fe-solo\src\index.html:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FeSolo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

fe-solo\src\main.ts:
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

SingleInput\SingleInput\Controllers\SoloController.cs:
```csharp
﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }

        // Update record
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateSolo(int id, UpdateSoloDTO updateSoloDTO) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            tempEntity.Name = updateSoloDTO.Name;
            // other fields here

            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        // Delet Record
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteSolo(int id) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            var msg = tempEntity;

            dbContext.solos.Remove(tempEntity);
            dbContext.SaveChanges();
            return Ok("Product Deleted!");
        }

    }
}

```

SingleInput\SingleInput\Data\ApplicationDbContext.cs:
```csharp
﻿using Microsoft.EntityFrameworkCore;
using SingleInput.Model.Entities;

namespace SingleInput.Data {
    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options) {
            // the constructor is automatically invoked every time you create an instance of a class
        }

        public DbSet<Solo> solos { get; set; }
    }
}

```

SingleInput\SingleInput\Model\AddSoloDTO.cs:
```csharp
﻿using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class AddSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }
    }
}

```

SingleInput\SingleInput\Model\Entities\Solo.cs:
```csharp
﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SingleInput.Model.Entities {
    public class Solo {
        [Key] // make this primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string Name { get; set; }
    }
}

```

SingleInput\SingleInput\Model\UpdateSoloDTO.cs:
```csharp
﻿using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class UpdateSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }

        // add other fields here
    }
}

```

SingleInput\SingleInput\Program.cs:
```csharp
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => {       // cors here
    options.AddPolicy("AllowAngularApp", builder => {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<ApplicationDbContext>(options => options
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngularApp"); // here

app.UseAuthorization();

app.MapControllers();

app.Run();

```

