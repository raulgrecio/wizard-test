## Project Info

This is the initial requirement [documento](./React_App.pdf)

> - ReactJS
> - Sass
> - Typescript
> - Pattern
> - Redux, sagas, redux-toolkit, Jest
> - other libs and helpers

### ReactJS

At the time of development, the used version of ReactJS v17.0.2.

All the code developed has been using the best practices of JavaScript ES6 and Typescript 4.

ReactJS recommendations have been followed. The components are developed with functions and with profuse use of hooks.

### Sass

[Sass](https://sass-lang.com/) is completely compatible with all versions of CSS. We take this compatibility seriously, so that you can seamlessly use any available CSS libraries.

It has been used in this project because it was one of the requirements.

[Boostrap](https://getbootstrap.com/) has also been used because it is used in the "home"

### TypeScript

[TypeScript](https://es.wikipedia.org/wiki/TypeScript) is a "superset of JavaScript, adding static typing and class-based objects."
Why use Typescript?

- **More explicit**. Explicit types allow you to focus your attention on exactly how your system is built and how the parts interact.
- **Reliability**. TypeScript code is more reliable and simple to refactor.

- **Interchangeability**. You can use all the libraries and JavaScript code you want in your TypeScript code. Also, you can gradually adopt TypeScript in your Javascript code base

### Pattern

Flux is an architecture for the management and flow of data in a web application, particularly in the Front-End. It was devised by Facebook and would replace the MV\* (MVC or MVVM or MVP) pattern.

Flux proposes an architecture in which the data flow is unidirectional. The data travels from the view through actions and reaches a Store from which the view will be updated again

<p style="text-align: center;"><img src="./flux.png" width="450"></p>

### Redux, sagas, redux-toolkit

**Redux**
There are numerous implementations of the Flux pattern under development in JavaScript. Redux, today, is the most used and that has practically become a standard is Redux, created by Dan Abramov (software engineer at Facebook within the React.js team)

**Redux sagas**
Redux saga is a library that aims to make application side effects (i.e. asynchronous things like fetching data and impure things like accessing the database) easier to manage, more efficient to run, easy to test and better to handle failures.

Redux Saga is a very powerful library and although it adds a bit of complexity (compared to other solutions such as thunk) it allows development to evolve without problems.

**Redux toolkit**
It is a perfect complement to use with redux. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic.

Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in

**Jest**
Jest is a framework created by Facebook and maintained by the community with support from Facebook. It is easy to install and does not require a very complex configuration to be able to add it to our projects.

To carry out our testing tests we are going to create a project and thus be able to test everything we need.

To carry out our testing tests we are going to create a project and thus be able to test everything we need.

### other libs and helpers

**other libs**

- [react-router-dom](https://reactrouter.com/)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://github.com/jquense/yup)

**helpers**

[ESLint](https://eslint.org/)
The project has ESLint built in, ESLint statically analyzes the code to find problems quickly.

ESLint is built into most text editors and you can run ESLint as part of your continuous integration process.
