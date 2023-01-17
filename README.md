<!-- @format -->

# Project: Online Storefront Lab 36d49

Our goal is to build an online storefront application using React. This application will allow users to browse and purchase products from multiple categories.

## Phase 1 Requirements

In this first phase, our goal is to set up the basic scaffolding of the application with initial styling and basic behaviors. This initial build will set up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project:

As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy-to-use user interface so that I can shop the online store with confidence.

## Technical Requirements / Notes

Create a visually appealing site using Material UI.
Use a Redux Store to manage the state of categories and items in the store.
Display a list of categories from state.
When the user selects (clicks on) a category:
Identify that category as selected (change of class/display).
Show a list of products associated with the category.

## Application Architecture

Create the Virtual Store application using create-react-app.
Install Material UI as a dependency.
Write an App component that serves as the container for all sub-components of this application.
A `<Header>` component which shows the name of your virtual store.
A `<Footer>` component which shows your copyright and contact information.
A `<Categories>` component:
Shows a list of all categories.
Dispatches an action when one is clicked to “activate” it.
A `<Products>` component:
Displays a list of products associated with the selected category.

## Notes on constructing the Redux Store

### Categories

State should contain a list of categories as well as the active category.
Each category should have a normalized name, display name, and a description.
Create an action that will trigger the reducer to change the active category.
Update the active category in the reducer when this action is dispatched.

### Products

State should be a list of all products.
Each product should have a category association, name, description, price, and inventory count.
Create an action that will trigger when the active category is changed.
Create a reducer that will filter the products list based on the active category.

### Active Category

State should store active category.
Other components (products, etc.) might need to reference this.

## Checklist

- [x] Create visually appealing site using Material UI.
- [x] Implement Redux to manage state of categories and items in the store.
- [x] Display a list of categories from state.
- [x] Identify selected category and change class/display when clicked on.
- [x] Show a list of products associated with the selected category.
- [x] Create action to trigger reducer to change active category.
- [x] Update active category in the reducer when action is dispatched.
- [x] Create action to trigger when active category is changed.
- [x] Create a reducer to filter products list based on active category.
- [x] Store active category in state.
