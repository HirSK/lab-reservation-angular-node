
# LabReservationAngular

This is a simple lab reservation system developed for UCSC.
This web application is developed specially to cater the reservations of the laborarties at UCSC made by the users. All the current reservations are also displayed in the system. Not only that, users are also able to search on lab availability by just entering the date. When the users are making a new reservation, user is informed if the time is overlapped with another reservation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Navigate to admin panel

Navigate to '`http://localhost:4200/login'. This will direct to login page. Use username:admin and password:labadmin  to log in to the admin panel.
You can register your own admins by going to  register users link in the sidebar.

#Assumptions and constraints

•	The internet connection is a necessary available so as to work the software as intended.
•	User should select the required lab he want to reserve from the sidebar.
•	An admin registration should be done by another admin who is logged into the admin panel.
•	Only the requests that are given approval (status in green badges) are considered as the current reserved     time slots and only those are displayed to the user as reserved.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
