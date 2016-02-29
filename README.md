AngularJS and RESTful API demo
===================================
Created by [Aleksanteri Hämäläinen](http://nsquared.fi) (aleksanterih@gmail.com).

A small demo demonstrating the use of AngularJS, UI-Router and RESTful APIs.

## Making it run

1. Make sure you have [NodeJS](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (comes with node) installed.

2. On the top level of the project, run `npm install` and then `bower install` on a command line of your choice.

3. Now you are ready to serve the site on a platform of your choice.

**Note 1:**
Python's simpleHTTPServer is an easy alternative. Make sure you have [Python](https://www.python.org/downloads/) installed and added to path and then simply run `python -m http.server` for python 3 or `python -m simpleHTTPServer` for Python 2.

**Note 2:**
All commands are run on the top level of the project unless specified otherwise

## Development instructions

##### Compile stylesheets
1. Run `gulp` on the top level of the project and it will compile the stylesheets. Additionally it will keep watching for changes in stylesheet files and compile it again after changes.

##### Prepare for production
1. Running `gulp production`

**Note:**
All commands are run on the top level of the project unless specified otherwise

## TODO

**GENERAL**
* Better mobile support

**APOD**
* Buttons to skip weeks/months/years
* An option to show the description the picture comes with
* Show current date
* Show copyright

**Rover**
* The whole page

**FOAAS**
* The whole page

## Issues

* APOD seems to return youtube links too. They fuck shit up.
