# React Template

This is a template for bootstrapping React projects quickly with a predefined set of configurations and tools.

## Features Included

- **Vite**: Fast and lightweight build tool for modern web development.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: Opinionated code formatter to maintain consistent code style.
- **React-Router-dom**: Declarative routing for React applications.
- **Redux**: A predictable state container for managing the application state.
- **VS Code Settings**: Recommended settings for Visual Studio Code to enhance development experience.
- **TypeScript**: Typed superset of JavaScript for building scalable applications.
- **Pre-commit Hooks with Husky**: Automatically run linting and formatting checks before each commit.
- **Environment Variables Support**: Includes support for environment variables using .env.local and .env.production files for managing configuration settings across local and production environments.
- **Axios**: Promise-based HTTP client for making asynchronous requests in browser and Node.js environments.
- **SVG Icon Support with vite-plugin-svgr**: Easily include SVG icons in your project using the vite-plugin-svgr plugin.
- **Vitest**: Unit testing framework optimized for Vite projects.
- **MSW**: MSW (Mock Service Worker): Industry-standard API mocking library for seamless, client-agnostic mocks across frameworks and environments.

**Additional Testing Dependencies**:

- **@testing-library/jest-dom**: Provides custom Jest matchers for asserting on DOM elements.
- **@testing-library/react**:provides utilities for testing React components with a user-centric approach and seamless integration with Vitest, emphasizing accessibility and simulating user interactions.
- **@testing-library/user-event**: Simulates user events for testing React components.
- **jsdom**: A JavaScript implementation of the DOM for Node.js, used for testing React components in a simulated environment.

## How to Use

You can use `npx degit` to clone this template without the commit history:

```bash
npx degit deepaksisodiya/react-template your-project-name
cd your-project-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

<!--

# React + TypeScript + Vite

# This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Currently, two official plugins are available:

# - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
# - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ## Expanding the ESLint configuration

# If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

# - Configure the top-level `parserOptions` property like this:

# ```js
# export default {
#   // other rules...
#   parserOptions: {
#     ecmaVersion: 'latest',
#     sourceType: 'module',
#     project: ['./tsconfig.json', './tsconfig.node.json'],
#     tsconfigRootDir: __dirname
#   }
# };
# ```

# - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
# - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
# - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list  -->
