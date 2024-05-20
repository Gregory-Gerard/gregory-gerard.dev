---
title: ESLint in a Monorepo
headline: Optimize your monorepo by centralizing ESLint configuration
metaDescription: Optimize your monorepo by centralizing ESLint configuration. Learn to create and manage a shared ESLint config, ensuring consistent code quality and reducing maintenance across multiple workspaces.
publishedAt: 2024-05-20T11:52:16Z
---

## Introduction

If you're diving into the world of JavaScript development, you've probably heard of ESLint. It's a fantastic tool for identifying and fixing problems in your code, ensuring everything is neat, tidy, and consistent.

Monorepos, on the other hand, are repositories that house multiple projects or packages within a single version control repository. They offer benefits such as easier code sharing, consistent dependency management, and unified CI/CD pipelines.

However, setting up and maintaining consistent ESLint configurations across multiple workspaces within a monorepo can be challenging.

## Problem

In a monorepo setup, ESLint rules are usually the same across different workspaces. The common approach? Copying and pasting the ESLint configuration into each workspace. But let’s be real, this method isn't great for maintenance. You could say, okay, let's keep a single ESLint config at the root and run ESLint at the root, but this isn't ideal due to performance issues and the unique tweaks each workspace might need.

Here’s a simplified architecture of the monorepo we’ll be using:

```text
acme/
├─ packages/
│  ├─ ui/
│  ├─ app/
├─ package.json
```

## Solution

### Create a shared ESLint configuration package

First things first, let’s create a configuration package as recommended by ESLint, named `eslint-config-x` or scoped as `@acme/eslint-config`. This package will house our shared ESLint configuration. Here’s how our monorepo structure looks now:

```text
acme/
├─ packages/
│  ├─ ui/
│  ├─ app/
│  ├─ eslint-config/ // [!code ++]
│  │  ├─ package.json // [!code ++]
│  │  ├─ index.js // [!code ++]
├─ package.json
```

The `package.json` for our configuration package is as follows:

```json
{
  "name": "@acme/eslint-config",
  "version": "1.0.0",
  "main": "index.js",
  "license": "proprietary",
  "private": true,
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "~7.4.0",
    "@typescript-eslint/parser": "~7.4.0",
    "eslint-config-prettier": "~9.1.0",
    "eslint-config-standard": "~17.1.0",
    "eslint-plugin-import": "~2.29.1",
    "eslint-plugin-jsx-a11y": "~6.8.0",
    "eslint-plugin-n": "~16.6.2",
    "eslint-plugin-prettier": "~5.1.3",
    "eslint-plugin-promise": "~6.1.1",
    "eslint-plugin-react": "~7.34.1",
    "eslint-plugin-react-hooks": "~4.6.0"
  },
  "peerDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

I’ve added `eslint` as a `peerDependencies` to make sure each package installs it separately. This setup includes the configurations and plugins we want to reuse across the monorepo. I’ve also included Prettier, because who doesn’t love keeping things pretty? 💅
For real, Prettier is integrated directly into ESLint to avoid conflicts and streamline the development workflow. I prefer it this way, but feel free to modify this part!

Our `index.js` file for the shared ESLint configuration looks like this:

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y'
  ],
  ignorePatterns: ['vite-env.d.ts', 'node_modules/', 'dist/'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error'
  },
};
```

This opinionated configuration is suitable for a React and TypeScript monorepo.

Now, let's install this configuration in each workspace. In `packages/ui/package.json` and `packages/app/package.json`, we add our dependency:

```json
{
  "devDependencies": {
    "@acme/eslint-config": "workspace:*",
    "eslint": "~8.57.0"
  }
}
```

The `workspace:` protocol is specific to [Yarn](https://yarnpkg.com/features/workspaces#cross-references). Use the recommended approach for your package manager. We also add `eslint` because it is required as a `peerDependencies` by `@acme/eslint-config`.

Next, we create a minimal ESLint configuration in each workspace to use our shared configuration, in a file named `.eslintrc.cjs`:

```js
module.exports = {
  extends: ['@acme/eslint-config'],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ['node_modules', 'dist']
};
```

Our updated architecture now looks like this:

```text
acme/
├─ packages/
│  ├─ ui/
│  │  ├─ .eslintrc.cjs // [!code ++]
│  │  ├─ package.json // [!code ++]
│  ├─ app/
│  │  ├─ .eslintrc.cjs // [!code ++]
│  │  ├─ package.json // [!code ++]
│  ├─ eslint-config/
│  │  ├─ package.json
│  │  ├─ index.js
├─ package.json
```

Finally, we run `yarn` to update the `package-lock.json` and correctly link the dependencies. Let’s test it out:

```shell
yarn workspace @acme/ui eslint .
```

Uh-oh. It won't work. You should encounter an error like:

```js
Error: Cannot find module 'eslint-plugin-<x>'
```

It’s because of how ESLint loads plugins. ESLint loads plugins only when configurations are initialized within the workspace where ESLint is run. So, our workspace `@acme/ui` doesn’t have the plugins installed by `@acme/eslint-config`.

To fix this, we could add all plugins as `peerDependencies` in `@acme/eslint-config`, but that defeats the purpose of having an easily maintainable configuration.

### Using `@rushstack/eslint-patch`

Here’s where it gets exciting! 🎉 Microsoft’s "Rush Stack" provides an open-source package called `@rushstack/eslint-patch`:

> Enhance ESLint with better support for large-scale monorepos!
>
> This is a runtime patch that enables new/experimental features for ESLint. It operates as a "monkey patch" that gets loaded with .eslintrc.js and modifies the ESLint engine in memory. This approach works with your existing ESLint version (no need to install a forked ESLint), and is fully interoperable with companion tools such as the ESLint extensions for VS Code and WebStorm.

Specifically, the `modern-module-resolution` feature:

> Allows an ESLint config package to provide plugin dependencies, avoiding the problem where hundreds of projects in a monorepo need to copy+paste the same "devDependencies" in every package.json file.

You got it, this nifty little "patch" will allow us to install our configuration just as we intended! 🎉

Install the patch in the `@acme/eslint-config` package:

```shell
yarn workspace @acme/eslint-config add @rushstack/eslint-patch
```

Create a new file `patch.js` and add the following:

```js
require('@rushstack/eslint-patch/modern-module-resolution');
```

Expose this file to include it in each workspace ESLint configuration. The simple inclusion of this file will "monkey patch" (🙊) ESLint and add modern module resolution.

Our updated architecture now looks like this:

```text
acme/
├─ packages/
│  ├─ ui/
│  │  ├─ .eslintrc.cjs
│  │  ├─ package.json
│  ├─ app/
│  │  ├─ .eslintrc.cjs
│  │  ├─ package.json
│  ├─ eslint-config/
│  │  ├─ package.json
│  │  ├─ index.js
│  │  ├─ patch.js // [!code ++]
├─ package.json
```

Edit the ESLint configuration in each workspace to use our patch, in `.eslintrc.cjs`:

```js
require('@acme/eslint-config/patch'); // [!code ++]

module.exports = {
  extends: ['@acme/eslint-config'],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ['src/__generated__/', 'node_modules', 'dist']
};
```

Include this new line in each ESLint configuration. This extra step simplifies maintenance significantly. You can now use ESLint in each workspace, with a shared, easily-maintainable configuration.

### Bonus

Good news! ESLint 8.21.0 introduced the "Flat Config," allowing modern module resolution without patches or additional libraries. However, I'm not using this new method yet because most ESLint configurations and plugins aren’t yet compatible with the "Flat Config".

This method is a temporary solution until full compatibility is achieved. When ready, transitioning to "Flat Config" will be straightforward: simply remove the patch and edit the configuration to make it compatible with the new way of doing things.

Happy linting! 🚀
