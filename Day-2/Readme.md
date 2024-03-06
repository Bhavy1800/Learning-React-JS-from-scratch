What is npm?
npm does not stand for node package manager
npm is a standard repo for all the packages

package.json is a configuration for npm

The most important package in our project is a bundler
webpack, parcel, vite is a bundler
parcel is a beast

There are two types of dependencies in which one is dev dependescies and one is normal dependencies
dev is used generally in development phase
normal is used in production also

**_imp for interview_**
^2.12.0 inwhich ^ is caret and it is used because if version is minor updated that time parcel is automatically updated

## ~ tilda is for major update

package-lock.json keeps record of every version or dependecies

node mudules contains all the code that we fetched from npm
node mulules are known as transitive dependency
none of them are garbage

there are many package.json in a project

do not have to send node mudules to production or github

send package.json and package-lock.json to production and github

if youhave package.json and package-lock.json you can create node_modules

npx means executing package

npm install = npm i

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of our file
- Bundling
- Compressing
- Consistent hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and production bundles

node_modules : npm i or npm install
dev dependencies: npm install -D parcel
deploy : npx parcel index.html
Build: npm parcel build index.html
