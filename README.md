# ImageSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Folder Structure
--------------

This tree represents the directories of this repository:

```
|
├───app
│   │   app.component.css
│   │   app.component.html
│   │   app.component.ts
│   │   app.module.ts
│   │
│   ├───image-list --- Main component of app
│   │       image-list.component.css
│   │       image-list.component.html
│   │       image-list.component.ts
│   │
│   └───shared
│       ├───model --- Contains model objects
│       │       image-response.ts
│       │
│       └───service --- Contains shared service of app
│               image-list-api.service.ts
│
├───assets
│
└───environments --- Contains build configuration options for particular target environments.
        environment.prod.ts
        environment.ts
```