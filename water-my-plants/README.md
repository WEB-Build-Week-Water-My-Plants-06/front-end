# Water My Plants: Bloom Tech Build Week JanuaryFebruary 2022

The purpose of Build Week is to empower students to demonstrate mastery of your learning objectives. The Build Weeks experience helps prepare students for the job market.

## ☝️ **Pitch**

Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, **Water My Plants** will remind users when it's time to feed that foliage and quench your plants' thirst.

## ✅  **MVP**

1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 
2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `phoneNumber` and `password`.
6. Authenticated `user` can update their `phoneNumber` and `password`.

## Steps to clone this project:

1. Clone this repository.

```jsx
git clone git@github.com:Build-Week-Water-My-Plants-8/front-end.git
```

1. To install all the dependencies; React, Reactstrap, React-Router-DOM, Bootstrap, React-DOM, and React-Router.

```jsx
npm install
```

1. Run the server for the backend:

```jsx
npm run server
```

1. Start the application. It will open [http://localhost:3000](http://localhost:3000) in your browser

```jsx
npm start
```
