# WayfarerAppFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

Developed wireframes further using Figma for responsive layout:
![image](https://user-images.githubusercontent.com/28934521/117042094-298a3d80-acd1-11eb-86aa-b8a644026ad8.png)



www.colormind.io

![image](https://user-images.githubusercontent.com/28934521/117056450-eedcd100-ace1-11eb-9d9d-92358d9f5d64.png)

Color pallete:
Color Mind Color Picker I chose:
hex: 123B44
0C9581
D7DA48
F5B926
F43A1D

Using TypeScale.com, I implemented a basic type system based off of perfect fifths.

Sprints:

Sprint 1: Landing Page
A user should be able to:

Navigate to "/" and see a basic splash page with the name of the website.
See the site-wide header on every page with a link to home page with list of cities.

The concept evolved halfway through the sprint. While the client wanted the 
city list to be an path of interaction, the emphasized the need for user 
action right off the bat. Becuase of that we, extended the functinoality of 
the jumbotron to be such that it is a for that will display the appropriate 
data when a city is typed into the form field.

We put the browse cities list as a secondar visual element to provide the 
option to those who are wanting it.


Sprint 2: HomePage
A user should be able to:

View the "San Francisco" page (at "/cities/1") including:
The site-wide header.
The name of the city.
An iconic photo of the city.
View a list of posts on the San Francisco page:
Sorted by newest first.
With the post titles linked to the individual post "show" pages.
Use the search bar to search through the posts' title and/or content.
Click on the title of one of their posts and be redirected to a "show" page for that post.
View post "show" pages with title, author, and content.
Sprint 3: Validations
A user should be able to:

View city pages for "London" and "Gibraltar".
A post's title must be between 1 and 200 characters.
A post's content must not be empty.
Sprint 4: Weather API
Call Open Weather API for each city to display the current weather on each city's page.

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
