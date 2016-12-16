# REACTive Day Planner
ReactJS + Flux demonstration calendar/booking application.

## Highlights
 - Working Components, Actions, Dispatchers and Stores
 - Mock API for working with Appointments
 - Browserify for bundling
 - Reactify for JSX transforming 
 - Ships with local Gulp tasks for Linting, building and local Web serving

## Installing locally
- Clone the repository on your local environment
```
git clone https://github.com/johnmaster208/dayplanner.git
```
- ```cd``` into the ```dayplanner``` directory
- Install npm dependencies
```
npm install
```
- After npm modules are downloaded run ```gulp``` default task
```
gulp
```
Your default browser should open the application at the following address:
```
http://localhost:5000/#/dashboard
```
If your hostname or port conflict with these, feel free to modify the ```config``` variables in the gulpfile.js

## Demo
Demonstration available on [Heroku](https://rocky-ridge-51031.herokuapp.com/#/dashboard)