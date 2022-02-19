Front end Angular application for theater-or-chill movie app: https://theater-or-chill.herokuapp.com/ 

UPDATE 2022-02-19
  - the app is live on heroku. 
  - I worked on the responsiveness before deploying the app, but having navigated to the url from my phone, I can see that the mobile view needs work.
 
A friend recommended I deploy the app even though I am still working on some things. He said it's good to have something live that people can interact with.

STILL TO DO
  - search bar
  - lazy-loading
  - mobile view responsivesness
  - cart, account, transaction confirmation, print ticket, and watch movie routes
  - router guards.

UPDATE - 2022-02-05
  - I made the app run more effeciently by adding getters and setters to the service class - reduced the number of calls made to the backend
  - movie detail, about, and contact us routes are done.
STILL TO DO
  - lazy-loading
  - responsive layout
  - search bar
  - cart, account, transaction confirmation, print ticket, and watch movie routes
  - router guards for aforementioned routes.

UPDATE - 2022-01-30
 - I replaced the owl-carousel with a custom-made one. Now I have all movie posters in one size
 - Footer issues have been fixed
 - I won't be splitting the upcoming movies into Coming Soon and Coming Next Week lists anymore. Not just because of the issue with the date comparison, but mostly because the API
   does not return that many results when making a GET request for the upcoming movies. I am adding a Movie News and Headlines section instead.
   
  STILL TO DO: 
 - cart, account, movie detail, about, contact and checkout routes
 - lazy loading
 - responsive layout
 - get search bar working.

UPDATE - 2021-12-19: 
I have worked on some of the routes. There is a bit more work left to do and some issues to work on such as:
  - I need to get the movie posters in the carousels to be the same height 
  - I need to get my date comparison code working. I've tried various things like using getTime() and converting to ISO format strings but nothing has worked so far. May explore         third-party libraries
  - I need to get rid of the whitespace below the footer
  - I need to finish the cart, account, movie detail, about and contact us routes. I may add more routes later on, such as a checkout page
  - Implement the search function.
  - Get movie posters to display evenly as the number of returned movies changes
  - Improve user experience with lazy loading and a landing page
  - Make sure elements are responsive.
