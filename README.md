# React Works

#### Requirements
    NodeJS version

#### App Creation
    npx create-react-app <app_name>
    cd <app_name>

#### Startup

    yarn start
    yarn build (For production build)

Properties:

    - React Apps are typically Single Page Apps. Doesn't request the server too often, just shows different components as required.
    - Only one HTML page will be served to the browser
    - React changes the content on the page dynamically.

Requirements:
    VS Code Extensions:

        1> Sublime Babel

        2> ES7 React/Redux/GraphQL
        
        3> Live Server(To Render the work)

    Chrome Extension:
        1> React Developer Tools
JSX is not supported in Browser. It needs to be transpiled using Babel for the Browser to understand.

Components:


State:
Keeping the UI and data in state in sync with each other. User interacts with 
# V1 - Getting started with React on single html page.

# Main - Creating  React App using  'Create React App' boilerplate
    For handling bigger projects with multiple components 
    Robust Development Platform using WebPack and Babel
    > Create app using 'create react app'
    Benefits:
        > Development Server
        > Use ES6 features which are not normally supported
        > Modular code
        > Using Build tools to create optimized code

#### Types of Components
Container Components vs UI Components
    * UI Components can be thought of just the internals of render method. No access to state. ONLY UI related work can be done here. Before its return (), we can also write Javascript as it is essentially a method.


    Container Components with State using Classes
    - Contain State
    - Contain Lifecycle hooks
    - Not concerned with UI
    - Use classes to create

    UI Components without State using Functions(When we dont need the state and primarily purpose is UI )
    - Dont contain state
    - Receive data from props
    - Only concerned with UI
    - Use function to create 


# Learning


    1> spread -> ...    
     To create copy of array
    2> Destructuring : extracting values 
        let { vals } = props.vals


    Lifecycle Hooks:
    1> componentDidMount - Good Place to get external data from APIs. 
    2> componentDidUpdate
    3> componentDidUnmount

#### Routing
    React Router:
    It stops the request from going to the sever by inject the components as requested

    > npm install react-router-dom
    
    import {BrowserRouter,Route} from 'react-router-dom';
    <BrowserRouter></BrowserRouter>

    Navigation:

    import { Link,NavLink} from 'react-router-dom';
    <li><NavLink to="/contact">Contact</NavLink></li>
    // Use NavLink as a replacement for anchor tags. NavLinks have the 'active' property which can be useful for UI
    // Links enable react apps to take control and not call the server, but instead load the components locally

    Programmatic Redirect :
    (Using settimeout() on 'props.history.push("/contact")')
    Every component redirected using Link receives the 'props' object.
    Other need to use the HigherOrder COmponents


    1. Higher Order Components - Enhancing the functionality of a component
        # Reference => v4/src/hoc

        import {withRouter} from 'react-router-dom';
        ........
        export default withRouter(Navbar);
        => withRouter is a higher order component that supercharges a component and allows using props with it for more functionalities.

    2. Fetching and Displaying Data from a third party API:
    
        We can use Axios(HTTP Request Library) to do this job. It uses promises and fetches the JSON data, which can the be used to change the state and then render appropriately

    
