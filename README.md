# Countdown Web Application

This is a countdown web application developed as a solution to the Natural Cycles Frontend Challenge. The application is built using Angular 17.1.3 and Angular Material for the UI components.

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

1. Start the development server: `ng serve`

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

The application deployed to Netlify.

[Live Demo](<https://events-countdown.netlify.app/>)

## View on Screen

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911262/Screenshot_2024-02-14_at_13.21.25_bonofp.png" alt="Screen1" width="450" style="margin: 50px;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911262/Screenshot_2024-02-14_at_13.24.45_fyffof.png" alt="Screen2" width="450" style="margin: 50px;">
</div>

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911263/Screenshot_2024-02-14_at_14.44.50_qrgamx.png" alt="Screen3" width="900" style="margin: 50px;">
</div>

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911262/Screenshot_2024-02-14_at_13.21.54_aya3nk.png" alt="Screen4" width="300" height="auto" style="margin: 50px;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911262/Screenshot_2024-02-14_at_13.24.14_gprnsd.png" alt="Screen4" width="300" height="auto" style="margin: 50px;">
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1707911262/Screenshot_2024-02-14_at_13.23.38_rnvn5x.png" alt="Screen4" width="300" height="auto" style="padding: 50px;">
</div>




