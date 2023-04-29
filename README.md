# AngularRatingPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Interview Question Prompt

Consider a rating system that you might see for an app that reviews movies or restaurants. Your task to create a rating sytem using three componenets in Angular which, based on supplied data, will allow the display of individual ratings, a list of ratings, and an average rating. The components are:

  1. RatingComponent
    - displays an individual rating. Takes inputs name, rate, and contnt, and displays the appropriate number of filled and empty stars.
    - the component should have the class name ratings-item.
    - the name should be rendered in <h3> tags, and the content should be in <p> tags.
    - in vertical order the componenet should display the star rating, then the name, then the content at the bottom.

Assumptions:
  - components can be reused.
  - place any components you create inside the `components` folder. Structure inside this folder does not matter.
  - styling is not required here, but flexbox or CSS grid solutions are preferred.
  - the `rate` property of the `ratings` element will always be an integer.
  the `ratings` input type `Rating` will have the following structure:
    - name: string
    - content: string
    - rate: number
  - filled star symbol: `&#9733;`
  - empty star symbol: `&#9734;`
