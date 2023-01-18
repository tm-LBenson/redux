<!-- @format -->

# Project: Online Storefront Lab 37d49

[Deployment on Netlify](https://gleeful-bavarois-d1325b.netlify.app/)

# Technical Requirements / Notes

Today's goal is to continue to develop the online storefront application using React, Material UI and Redux. The application should have a Cart indicator in the header and a new Cart component to show the items in the user's cart. Additionally, the application should allow users to add products to their cart, and update the number of items in the cart and in stock when a product is added.

## Application Architecture

- Add a new component to the page: `<SimpleCart />`
- Displays a short list (title only) of products in the cart.
- This should be present at all times.

## Home Page Operation:

- When the user selects (clicks on) a category, identify that category as selected.
- Show a list of products associated with the category, that have a quantity > 0.
- Add an “add to cart” button to each product.
- When a user clicks the “add to cart” button, add the item to their cart.
- In the `<SimpleCart/>` component, show a running list of the items in the cart (just the titles).
- Change the (0) indicator in the header to show the actual number of items in the cart.
- Reduce the number in stock for that product.

## Manage state in a Redux store with multiple reducers/actions

### Categories

- State should be a list of categories as well as the active one.
- Each category should have a normalized name, display name, and a description.
- Create an action that will trigger the reducer to change the active category.
- Update the active category in the reducer when this action is dispatched.

### Products

- State should be a list of all products.
- Each product should have a category association, name, description, price, inventory count.
- Create an action that will trigger the reducer to filter the product list when the active category is changed.
- Create a reducer that will filter the products list based on the active category.
- Create an action that will trigger the reducer to reduce the stock counter.
- Create a reducer that reduces the # in stock when that action is dispatched.

### Cart

- State should be an array of products that have been added (all product details).
- Create an action that will trigger the reducer to add the selected item to the cart.
- Create a reducer that adds the product to the array of items in state.

## Checklist

- [x] Add a Cart indicator to the header
- [x] Create a new Cart component to show the items in the user’s cart
- [x] Add a new component to the page: `<SimpleCart />`
- [x] Allow users to add products to their cart
- [x] Update the number of items in the cart and in stock when a product is added
- [x] Create actions and reducers to manage the state of the cart and update it when a product is added.

## Project: Online Storefront Lab 36d49

[Deployed at Netlify](https://luminous-torte-257d86.netlify.app/)

Our goal is to build an online storefront application using React. This application will allow users to browse and purchase products from multiple categories.

## Phase 1 Requirements

In this first phase, our goal is to set up the basic scaffolding of the application with initial styling and basic behaviors. This initial build will set up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project:

As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy-to-use user interface so that I can shop the online store with confidence.

## Technical Requirements / Notes

![Screenshot from 2023-01-17 00-43-09](https://user-images.githubusercontent.com/105423307/212820614-6262d6e0-102b-4156-b227-fbdeb03c33a1.png)

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
