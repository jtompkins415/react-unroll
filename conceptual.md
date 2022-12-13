### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React router is a React library that helps with client side routing. 

- What is a single page application?
  A single page application is a web application that, while the url does change, the page doesn't reload. All the communication will be done browser side

- What are some differences between client side and server side routing?
  Server side routing involves a more traditional pattern, make a request to an API/server, parse through the response, replace elements in the DOM, and reload the full page. With client-side routing the url does change, but there is no page reload. Traditional routing is simulated, but everything is done on a single page app. 

- What are two ways of handling redirects with React Router? When would you use each?
  The two ways to handle redirects with React Router are to either use the Redirect component or using the history object. The Redirect component is best used for declaritive coding, basically saying that redirection **will** happen if this path is not found. The history object is best used when there is some involvement from the user, best example the submission of a form. 

- What are two different ways to handle page-not-found user experiences using React Router? 
  The two ways to handle page-not-found errors are either including a "Not Found" component in the bottom of your Switch component or in a route with no path which will render some form of error messaging. The second option is not an actual response, the route will match after all the other routes fail to match. 


- How do you grab URL parameters from within a component using React Router?
  We can access the data from a URL parameter by using the hook **useParams**. It returns an object whose key will be the parameter (i.e. :name), the value of that key will be whatever is passed in the place of the parameter (i.e. food/sushi). 

- What is context in React? When would you use it?
  Context is a way of having universal data across an entire application. It allows a developer to access data across multiple components, limiting tunneling and code repition. It's useful for incorporating global themes and shared data

- Describe some differences between class-based components and function
  components in React.
  Class components extend from **React.Component** and must have a **render()** methodn describing what the component should render. Hooks are not used in class components, so state is initialized in the constructor method and changed with the instance method **setState**. 

  Function components were originally used for dumb components, but popularity quickly rose and now, with the help of hooks, function components can be used all the time. 

- What are some of the problems that hooks were designed to solve?
  Hooks were developed to solve the issue of sharing data across multiple components. Some of the earilier solutions to sharing code were mixins, higher order components, and render props. Many of the issues with these earlier attempts included bloated code, difficult naming conventions, & difficulty with following logic and debugging. 
