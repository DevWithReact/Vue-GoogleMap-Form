# Travel Recording Form page (for expenses)

Create a simple form using react, which contains google maps integration (hidden fields getting longitude and latitude as hidden fields and updating a map with those two points)

●	include the following fields: 

  ○	Journey origin text (e.g. ‘Norwich, UK’) 

  ○	Journey origin latitude (hidden, e.g. 52.6308859) 

  ○	Journey origin longitude (hidden, e.g. 1.297355) 

  ○	Journey destination text (e.g. ‘London, UK’) 

  ○	Journey destination latitude (hidden, e.g. 51.5073509) 

  ○	Journey destination longitude (hidden, e.g. -0.1277583) 

  ○	Departure Date (DateTime) 

  ○	Return Date (DateTime) 
  
  
At the bottom of the form, place a submit button that sends the data as json in a fake XHR POST request. 
  
Use a geocoding Service to get location latitude and longitude based on the origin/destination text entered. (Feel free to use whatever mapping library you’re familiar with, Google Maps in developer mode is fine.) 
  
Display a Map alongside the form, which should plot marker pins at the start & destination locations.
  
Feel free to put as much effort into the design as you want. Please use bootstrap to set the initial styles for the form. Please use your UX skills to make the page layout look clean and user friendly.



> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
