### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  - https://reactrouter.com/en/main/start/overview
  - enables "client side routing."
  - allows app to update the URL from a link click without making another request. Immediately renders new page.
  - faster user experience

- What is a single page application?

  - mapping between URL bar and page user sees via browser rather than via server (https://lessons.springboard.com/Client-Side-Routing-with-React-Router-9f774708ec664abaa02ccfc786830a54)
  - web application that dynamically rewrites the current page with data from a browser instead of a server. (https://en.wikipedia.org/wiki/Single-page_application)

- What are some differences between client side and server side routing?

  - Server-side routing: Clicking a link causes browser to request page and replace entire DOM. Server decides what HTML to return based on URL requested. (https://www.youtube.com/embed/lYiS4MjLCxw?showinfo=0&controls=1&rel=0&autoplay=1)
  - Client-side routing: handles mapping between URL bar and page user sees via browser rather than via server. JavaScript manipulates URL bar with History Web API. (https://www.youtube.com/embed/KSqXkgKlL3M?autoplay=1&controls=1&showinfo=0&rel=0)

- What are two ways of handling redirects with React Router? When would you use each?

  - 1. redirect: Is a component you render. use redirect in loaders and actions when redirect is in response to data.
  - 2. Navigate: "You shouldn't have gotten here, go here instead, do not go back." When we want a user to immediately be redirected somewhere else.
  - useHistory is not currently part of the most recent React Router docs. useNavigate is the replacement.

- What are two different ways to handle page-not-found user experiences using React Router?

  - 1. Automatically redirect user to desired route. (<Route path="\*" element={<Navigate to="/" />} />)
  - 2. Render a "Not Found" or "404" component that displays some message to the user. (<Route path="\*" element={<NotFound />}>)

- How do you grab URL parameters from within a component using React Router?

  - useParams hook. Object that contains parameters/variables from the route. (<Route path="/food/:name" element={<Food />} />)

- What is context in React? When would you use it?

  - Universal data across your application. Data accessible across all components. (https://lessons.springboard.com/React-Context-04c831a2b063476f861c5a02d956afba)
  - It is less repetative, avoids prop drilling/tunneling, useful for global themes/shared data.

- Describe some differences between class-based components and function
  components in React.

  - Class-based: Every component extends React.Component. Must have a render method describing what the component should render. To initialize state, we use the constructor. State is changed using setState.
  - Function: Just a return value. Originally could not contain state or make use of lifecycle methods.

- What are some of the problems that hooks were designed to solve?
  - Let you use state and other React features without writing a class.
  - Functions that let you "hook into" React state lifecycle featrues from function components.
  - Use hooks in any of our components and test it easily in isolation.
  - More concise and less lines of code.
