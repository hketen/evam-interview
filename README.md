
### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
src/                            --> all of the source files for the application
  assets/images/*               --> all images
  assets/images/*               --> all libraries
  assets/styles/app.css         --> default stylesheet
  directives/                   --> the view1 view template and logic
  services/                     --> the view1 view template and logic
  views/                        --> all view template and logic
  app.js                        --> main application module
  index.html                    --> app layout file (the main html template file of the app)
package.json                    --> Node.js specific metadata, including development tools dependencies
```
