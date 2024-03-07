## Laying the foundation

To starting and building our app like industry we have to go to package.json and add "start": "parcel index.html", "build": "parcel build index.html", in script then you only have to run npm run start to start the app and npm run build to build the app.

npm run start = npm start,
npm run build != npm build because start is reserved in npm

# JSX

JSX is a JS syntax which is easier to create react element
JSX is not a part of react
there is fundamental difference between react and jsx
we can write react without jsx also
It is html and js mix
jsx is not inside html but jsx is a html like syntax
If you have to give attribute in jsx then you have to use camel case

HW: try img and a tag

it is save you from crosssidescripting attack

# Babel

it is a trasnpiler
it converts jsx to react elements

## React Cmomponents

Everything in a react is component
Class based components - old
Functiocal components - new

const fn = () => true is equal to const fn = () =>{
return true;
}

### this is component composition

## Some interviewer tell you this also

```
const HeadingComponent = () => (

  <div id="container">
    <Title/>
    <h1 className="heading">This is Functional Component</h1>
  </div>
);
```
