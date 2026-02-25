// 1)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: ` Hello {{city}}, {{1+1}}`,
// })
// export class App {
//   city='Almaty'
// }


// 2)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: ` Username: {{ username }} `,
// })
// export class User {
//   username = 'youngTech';
// }

// @Component({
//   selector: 'app-root',
//   template: `<app-user>`,
//   imports: [User],
// })
// export class App {}


// 3)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: ` @if(isServerRunning){ <span>Yes, the server is running</span> } @else {<span>No</span>}`,
// })
// export class App {
//   isServerRunning=true;
// }



// 4)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `@for (user of users; track user.id) {<p>{{user.name}}</p>}`,
// })
// export class App {
//   users=[{id: 0, name: 'Sarah'},
//   {id: 1, name: 'Amy'},
//   {id: 2, name: 'Rachel'},
//   {id: 3, name: 'Jessica'},
//   {id: 4, name: 'Poornima'},
// ];
// }



// 5)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.css'],
//   template: ` <div [contentEditable]="isEditable"></div> `,
// })
// export class App {
//   isEditable=true;
// }



// 6)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <section (mouseover)="showSecretMessage()">
//       There's a secret message for you, hover to reveal 👀
//       {{ message }}
//     </section>
//   `,
// })
// export class App {
//   message = '';

//   showSecretMessage() {
//     this.message='Way to go';
//   }
// }



// 7)))
// import {Component, input} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: ` <p>The user's name is {{name()}}</p> `,
// })
// export class User {
//   name=input<string>();
// }

// @Component({
//   selector: 'app-root',
//   template: ` <app-user [name] = 'name' /> `,
//   imports: [User],
// })
// export class App {
//   name="Ami";
// }



// 8)))
// import {Component, output} from '@angular/core';

// @Component({
//   selector: 'app-child',
//   styles: `
//     .btn {
//       padding: 5px;
//     }
//   `,
//   template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
// })
// export class Child {
//   addItemEvent=output<string>();
//   addItem() {
//     this.addItemEvent.emit('🐢');
//   }
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [Child],
// })
// export class App {
//   items = new Array();

//   addItem(item: string) {
//     this.items.push(item);
//   }
// }


// 9)))
// import {Component} from '@angular/core';

// @Component({
//   selector: 'comments',
//   template: `
//     <ul>
//       <li>Building for the web is fantastic!</li>
//       <li>The new template syntax is great</li>
//       <li>I agree with the other comments!</li>
//     </ul>
//   `,
// })
// export class Comments {}

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <h1>How I feel about Angular</h1>
//       <article>
//   <p>
//     Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//     feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//     The Angular community is also filled with amazing contributors and experts that create excellent
//     content. The community is welcoming and friendly, and it really is the best community out there.
//   </p>
//   <p>
//     I can't express enough how much I enjoy working with Angular. It offers the best developer
//     experience I've ever had. I love that the Angular team puts their developers first and takes
//     care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//     they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//     all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//   </p>
//   <p>
//     Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//     feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//     The Angular community is also filled with amazing contributors and experts that create excellent
//     content. The community is welcoming and friendly, and it really is the best community out there.
//   </p>
//   <p>
//     I can't express enough how much I enjoy working with Angular. It offers the best developer
//     experience I've ever had. I love that the Angular team puts their developers first and takes
//     care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//     they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//     all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//   </p>
//   <p>
//     Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//     feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//     The Angular community is also filled with amazing contributors and experts that create excellent
//     content. The community is welcoming and friendly, and it really is the best community out there.
//   </p>
//   <p>
//     I can't express enough how much I enjoy working with Angular. It offers the best developer
//     experience I've ever had. I love that the Angular team puts their developers first and takes
//     care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//     they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//     all copied and pasted.
//   </p>
// </article>
//       @defer (on viewport){ 
//       <comments />
//       } @placeholder {
//       <p>Future comments</p>
//       } @loading (minimum 2s){
//       <p>Loading comments...</p>
//       }
//     </div>
//   `,
//   imports: [Comments],
// })
// export class App {}



// 10)))
// import { Component } from '@angular/core';
// import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [NgOptimizedImage],
//   providers: [provideImgixLoader('https://my.base.url/')],
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>

//     <ul>
//       <li>
//         Static Image:
//         <img
//           ngSrc="logo.svg"
//           alt="Angular logo"
//           width="32"
//           height="32" />
//       </li>

//       <li>
//         Dynamic Image:
//         <img
//           [ngSrc]="logoUrl"
//           [alt]="logoAlt"
//           width="32"
//           height="32" />
//       </li>
//     </ul>

//     <div class="image-container">
//       <img
//         ngSrc="hero-image.png"
//         width="800"
//         height="600"
//         priority />
//     </div>
//   `,
// })
// export class App {
//   username = 'youngTech';
//   logoUrl = 'logo.svg';
//   logoAlt = 'Angular logo';
// }






// // app.ts 
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// // Компонент главной страницы
// @Component({
//   selector: 'app-home',
//   template: '<h2 style="color: blue;">Главная страница</h2>'
// })
// export class HomeComponent { }

// // Компонент страницы пользователя
// @Component({
//   selector: 'app-user',
//   template: '<h2 style="color: green;">Страница пользователя</h2>'
// })
// export class UserComponent { }

// // Главный компонент App 
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   template: `
//     <nav>
//       <a href="/">Home</a>
//       |
//       <a href="/user">User</a>
//     </nav>
//     <router-outlet />
//   `
// })
// export class App { }

// // app.routes.ts 
// import { Routes } from '@angular/router';
// import { HomeComponent, UserComponent } from './app';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'user', component: UserComponent }
// ];

// // app.config.ts 
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };





// //forms
// import {Component} from '@angular/core';
// import {FormsModule} from '@angular/forms';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
//     <label for="framework">
//   Favorite Framework:
//   <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
// </label>
//   `,
//   imports: [FormsModule],
// })
// export class User {
//   username = 'youngTech';
//   favoriteFramework = '';
// }
// @Component({
//   selector: 'app-root',
//   imports: [User],
//   template: '<app-user></app-user>'
// })
// export class App { }





// //reactive forms 
// import {Component} from '@angular/core';
// import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   template:  `
//     <h2>Profile Form</h2>
//     <p>Name: {{ profileForm.value.name }}</p>
//     <p>Email: {{ profileForm.value.email }}</p>
    
//     <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
//       <label>
//         Name
//         <input type="text" formControlName="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" formControlName="email" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class App {
//   profileForm = new FormGroup({
//     name: new FormControl(''),
//     email: new FormControl(''),
//   });

//   handleSubmit() {
//     alert(
//       this.profileForm.value.name + ' | ' + this.profileForm.value.email
//     );
//   }
// }




// //validating forms
// import {Component} from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';
// import {ReactiveFormsModule,  Validators} from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   template: `
//     <form [formGroup]="profileForm">
//       <input type="text" formControlName="name" name="name" />
//       <input type="email" formControlName="email" name="email" />
//       <button type="submit" [disabled]="!profileForm.valid">Submit</button>
//     </form>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class App {
//   profileForm = new FormGroup({
//   name: new FormControl('', Validators.required),
//   email: new FormControl('', [Validators.required, Validators.email]),
// });
// }





// // Dependency Injection
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // делает сервис доступным во всём приложении
// })
// export class CarService {
//   cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

//   getCars(): string[] {
//     return this.cars;
//   }

//   addCar(name: string) {
//     this.cars.push(name);
//   }
// }

// import { inject } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>Cars List</h1>
//     <ul>
//       <li *ngFor="let car of carService.getCars()">{{ car }}</li>
//     </ul>

//     <input type="text" [(ngModel)]="newCar" placeholder="Add a car" />
//     <button (click)="addNewCar()">Add Car</button>
//   `,
//   imports: [FormsModule], // для standalone components можно добавить FormsModule, если используем [(ngModel)]
// })
// export class AppComponent {
//   carService = inject(CarService); // Angular "впрыснул" сервис
//   newCar = '';

//   addNewCar() {
//     if (this.newCar.trim()) {
//       this.carService.addCar(this.newCar.trim());
//       this.newCar = '';
//     }
//   }
// }




//Pipe

// import { Component, Injectable, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
// import { UpperCasePipe, JsonPipe, NgFor } from '@angular/common';
// import { Pipe, PipeTransform } from '@angular/core';

// // --------------- Сервис -----------------
// @Injectable({ providedIn: 'root' })
// export class CarService {
//   cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

//   getCars(): string[] {
//     return this.cars;
//   }

//   addCar(name: string) {
//     if (name.trim()) this.cars.push(name.trim());
//   }
// }

// // --------------- Кастомный pipe -----------------
// @Pipe({ name: 'reverse' })
// export class ReversePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.split('').reverse().join('');
//   }
// }

// // --------------- Основной компонент -----------------
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, ReactiveFormsModule, UpperCasePipe, JsonPipe, ReversePipe, NgFor],
//   template: `
//     <h1>Angular Mega Example</h1>

//     <!-- ==== Template-driven form ==== -->
//     <section>
//       <h2>Template-driven Form</h2>
//       <label>
//         Favorite Framework:
//         <input type="text" [(ngModel)]="favoriteFramework" />
//       </label>
//       <p>Your favorite framework: {{ favoriteFramework | uppercase }}</p>
//       <button (click)="showFramework()">Alert Framework</button>
//     </section>

//     <hr />

//     <!-- ==== Reactive form ==== -->
//     <section>
//       <h2>Reactive Form</h2>
//       <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
//         <label>
//           Name:
//           <input type="text" formControlName="name" />
//         </label>
//         <label>
//           Email:
//           <input type="email" formControlName="email" />
//         </label>
//         <button type="submit" [disabled]="!profileForm.valid">Submit</button>
//       </form>
//       <p>Reactive Form Values: {{ profileForm.value | json }}</p>
//     </section>

//     <hr />

//     <!-- ==== DI + Service ==== -->
//     <section>
//       <h2>Car List (Service via DI)</h2>
//       <ul>
//         <li *ngFor="let car of carService.getCars()">{{ car | reverse }}</li>
//       </ul>
//       <input type="text" [(ngModel)]="newCar" placeholder="Add a car" />
//       <button (click)="addNewCar()">Add Car</button>
//     </section>
//   `,
// })
// export class App {
//   // ---- Template-driven form ----
//   favoriteFramework = '';

//   showFramework() {
//     alert(this.favoriteFramework);
//   }

//   // ---- Reactive form ----
//   profileForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//   });

//   handleSubmit() {
//     alert('Submitted: ' + JSON.stringify(this.profileForm.value));
//   }

//   // ---- DI Service ----
//   carService = inject(CarService);
//   newCar = '';

//   addNewCar() {
//     if (this.newCar.trim()) {
//       this.carService.addCar(this.newCar);
//       this.newCar = '';
//     }
//   }
// }