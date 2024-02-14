# MyCountdownApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

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


# Countdown Web Application

This is a countdown web application developed as a solution to the Natural Cycles Frontend Challenge. The application is built using Angular 17 and Angular Material for the UI components.

## Features

- Countdown timer that displays the time remaining to a specified end date.
- Ability to define the end date and the name of the event taking place.
- Responsive design that works in both portrait and landscape modes.
- Persistence of event name and end date between page reloads using localStorage.
- Prettier formatting for all the code.

## Installation

Before proceeding with the installation, make sure you have Node.js and npm installed on your machine.

1. Clone the repository: `git clone <repository-url>`

2. Navigate to the project directory: `cd countdown-web-app`

3. Install dependencies: `npm install`


## Usage

1. Start the development server: `npm start`

2. Open your browser and visit `http://localhost:4200`.

3. Specify the end date and event name in the input fields.

4. The countdown timer will start automatically, displaying the time remaining to the specified end date.

## Additional Notes

- For storing event name and end date, localStorage is used. Alternatively, you can configure the application to use cookies or NgRx Store for larger projects.
- Server-side rendering (SSR) was initially set up for the project, but it's currently disabled due to limitations with localStorage permissions and current project requirements.

## Improvement Suggestions

- Implement server-side rendering (SSR) with appropriate permissions for localStorage to enable persistence of event data on the server side.
- Implement unit tests for critical components and functionality.
- Consider adding internationalization (i18n) support for displaying countdown in multiple languages.

## Deployment

The application can be deployed to any hosting platform that supports Angular applications, such as Netlify or GitHub Pages.

[Live Demo](<https://events-countdown.netlify.app/>)








