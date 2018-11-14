# React Works

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


#### Learning
    1> spread -> ...    
     To create copy of array
    2> Destructuring : extracting values 
        let { vals } = props.vals


    Lifecycle Hooks:
    1> componentDidMount
    2> componentDidUpdate
    3> componentDidUnmount