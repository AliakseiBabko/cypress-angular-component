# Cypress Angular Component with Storybook

This project demonstrates how to integrate **Cypress** with **Angular** for component testing, including support for **Storybook** as a visual testing environment.

## Installation Guide

### 1. **Install Project Dependencies**

Once you have Angular CLI set up, install the project dependencies by running the following command in your project folder:

```bash
npm install
```

This will install all necessary dependencies, including **Angular**, **Angular Material**, **Cypress**, and **Storybook**.

---

## Running the Project

### 1. **Running the Application**

To start the Angular development server:

```bash
npm start
```

This will start the application and serve it at `http://localhost:4200`. The application will automatically reload when you make changes to the source files.

### 2. **Running Component Tests (without Storybook)**

To run component tests using **Cypress** without Storybook (i.e., testing standalone Angular components), use the following script:

```bash
npm run test:component
```

This will open Cypress in **component testing mode**. It will look for your component test files under the `cypress/component` directory, where you can test components in isolation.

For example, to test a `MatCheckbox` component, you would write tests in the `cypress/component/mat-checkbox.cy.ts` file.

### 3. **Running Component Tests (with Storybook)**

If you want to test your components in the context of **Storybook** (i.e., testing components as they're displayed in Storybook stories), use this command:

```bash
npm run test:inStorybook
```

This will open **Cypress** in **end-to-end testing mode**. Cypress will visit the locally running Storybook instance at `http://localhost:6006` and run the tests for the components you’ve created stories for in Storybook.

---

### Notes

- **Storybook**: For any new component, create a story under `src/stories`. This allows you to interactively develop the component and test it in isolation with **Cypress**.
- **Cypress**: Cypress supports both component testing and end-to-end testing, making it flexible for various testing scenarios.

By following the above instructions, you can run both unit and component tests for your Angular application, including testing your components in **Storybook** using **Cypress**. Let me know if you need further assistance!
