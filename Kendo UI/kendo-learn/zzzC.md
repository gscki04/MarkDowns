src\app\app.component.html:
```html
<h2>{{ title }}</h2>
<router-outlet></router-outlet>
```

src\app\app.component.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'kendo-learn' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kendo-learn');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, kendo-learn');
  });
});

```

src\app\app.component.ts:
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GoPro';
}

```

src\app\app.config.ts:
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

```

src\app\app.routes.ts:
```typescript
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'sub', loadChildren: () => import('./sub/sub.module').then(x => x.SubModule) }
];

```

src\app\main\main.component.html:
```html
<div class="mainDiv">

    <div class="card-container">
        
      <div class="card">
        <h3>Grid</h3>
        <p>Learn how to use Kendo UI Grid.</p>
        <a routerLink="/sub/grid" class="btn">Go to Grid</a>
      </div>
      
      <div class="card">
        <h3>Buttons</h3>
        <p>Learn how to use Kendo UI Buttons.</p>
        <a routerLink="/sub/buttons" class="btn">Go to Buttons</a>
      </div>
  
      <div class="card">
        <h3>Date Input</h3>
        <p>Learn how to use Kendo UI Date Input.</p>
        <a routerLink="/sub/dateinput" class="btn">Go to Date Input</a>
      </div>

    </div>

  </div>
  
```

src\app\main\main.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\main\main.component.ts:
```typescript
import { Component } from '@angular/core';
import { GridComponent } from '../sub/grid/grid.component';
import { DateInputComponent } from '@progress/kendo-angular-dateinputs';
import { ButtonComponent } from '@progress/kendo-angular-buttons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ 
      RouterLink 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

```

src\app\sub\buttons\buttons.component.html:
```html
<p>buttons works!</p>

```

src\app\sub\buttons\buttons.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\sub\buttons\buttons.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}

```

src\app\sub\date-input\date-input.component.html:
```html
<kendo-calendar></kendo-calendar>
```

src\app\sub\date-input\date-input.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\sub\date-input\date-input.component.ts:
```typescript
import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';  // 🔄: import into component.ts

@Component({
  selector: 'app-date-input',
  imports: [KENDO_DATEINPUTS], // 🔄: add to array
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss'
})
export class DateInputComponent {
  title = "Date Input"

}

```

src\app\sub\grid\grid.component.html:
```html
<p>grid works!</p>

```

src\app\sub\grid\grid.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\sub\grid\grid.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

}

```

src\app\sub\sub-routing.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DateInputComponent } from '@progress/kendo-angular-dateinputs';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dateinput', component: DateInputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
```

src\app\sub\sub.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';

// Import Kendo modules
import { ButtonsModule } from '@progress/kendo-angular-buttons'; // Import Kendo buttons module

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonsModule 
  ]
})
export class SubModule { }

```

