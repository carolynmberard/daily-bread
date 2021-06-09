# Daily Bread

###### A basic CRUD application that allows users to create and manipulate a variety of breads and pastries.

## Getting Started

1. Fork and clone this repository.
2. Install the project's dependencies by running `npm install` in your terminal.
3. Create a `daily-bread` PostgreSQL database.
4. Seed the database by running `npm run seed` in your terminal.
5. Start the build process and run the application by running `npm run start-dev` in your terminal.
6. Navigate to (http://localhost:1337) in your browser to view and interact with the application (this application was tested using Google Chrome).

### The Technology

This application uses Express to handle HTTP requests and Sequelize to interface with the database. The frontend is rendered through React Class Components and state is managed with Redux. The whole site is styled using CSS.

### Notes on Development / Next Steps

In setting up my backend, I decided to modularize the Express routes and Sequelize models even though I'm only dealing with one table. This way, if I were to expand on this site in the future, the framework would already be in place to add new tables without created unnecessarily bloated files.

Similarly on the frontend, I chose to use Redux to manage my state. This would once again provide the necessary framework to scale the application to deal with larger and more complex data.

Currently, the product id is used as the parameter for fetching product data from the backend and rendering it for the user. A couple options I'd like to explore in the future is implementing a search bar to allow users to search for a specific product by name on the frontend and querying with the product name on the backend.

Given the parameters of this project, I chose to use React class components, but given the opportunity, I would choose to refactor those class components into functional components to keep up with changing practices in industry. I would also write unit tests to ensure that any new code could be tested thoroughly before being deployed.

To make the user experience more fluid across devices, I'd include media queries in my styles to account for a wide variety of screen sizes. If this product dealt with a more complex structure, I would forgo the single CSS style sheet in favor of utilizing Styled Components to prevent one gargantuan style sheet.
