# TypeScript Configuration for ESM (Migrating from CommonJS to ESM)

## tl;dr

***

- To configure TypeScript for ESM in Playwright, we need to make changes in the `tsconfig.json` file and
  the `package.json` file.
- We need to change the `module` and `moduleResolution` options in the `tsconfig.json` file to support ESM. We also need
  to add the `type` field with the value `module` in the `package.json` file.
- When using ESM, we cannot use `__dirname` directly. We need to use `import.meta.url` to get the current file's path.
- We can use the `ts2esm` tool to convert TypeScript files to ESM and automatically add the `.js` extension to imports.
- We can set the `moduleResolution` option to `"Bundler"` in the `tsconfig.json` file to allow bundlers to handle the
  resolution of modules. This will allow us to use imports without extensions.
- We can set the `allowImportingTsExtensions` option to `true` in the `tsconfig.json` file to allow importing `.ts`
  files instead of `.js` files.

***

## Table of Contents

***

- [Step 1: Changes in TSConfig File for ESM](#step-1-changes-in-tsconfig-file-for-esm)
- [Step 2: Changes in package.json](#step-2-changes-in-packagejson)
- [Step 3: Changes in `file-util` to access `__dirname` equivalent](#step-3-changes-in-file-util-to-access-__dirname-equivalent)
- [Step 4: File Extensions for Imports after Migrating to ESM](#file-extensions-for-imports-after-migrating-to-esm)
  - [Option 1: Automatically Add `.js` Extension to Imports using `ts2esm`](#option-1-automatically-add-js-extension-to-all-imports-using-ts2esm)
  - [Option 2: Use `moduleResolution: "Bundler"` in `tsconfig.json`](#option-2-use-moduleresolution-bundler-in-tsconfigjson)
  - [Optional: Using `.ts` Extension in Imports Instead of `.js`](#optional-using-ts-extension-in-imports-instead-of-js)
- [Takeaways](#takeaways)
- [References](#references)

***

## Step 1: Changes in TSConfig File for ESM

***
Playwright supports TypeScript configuration for ESM. We can use the `tsconfig.json` file to configure TypeScript for
ESM. Here is an example of a `tsconfig.json` file for ESM:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    // Changing module to 'ESNext'. 'ES2022' Can also be used.
    "module": "ESNext",
    "target": "ESNext",
    // Changing to 'NodeNext'.
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "isolatedModules": true
  },
  "include": [
    "src/**/*.ts",
    "tests/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

## Step 2: Changes in `package.json`

***
We need to add the following changes to the `package.json` file to support ESM:

1. Add the `type` field with the value `module`:

```json
{
  "type": "module"
  //... other fields
}
```

## Step 3: Changes in `file-util` to access `__dirname` equivalent

***
When using ESM, we cannot use `__dirname` directly. We need to use `import.meta.url` to get the current file's path.
In our `file-util.ts` file, we need to change the way we access the `__dirname` equivalent.
Here is code we need to add to `file-util.ts`:

```typescript
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

```

The above code snippet demonstrates how to get the `__dirname` equivalent in ESM using the `url` and `path` modules.

## File Extensions for Imports after Migrating to ESM

***
After migrating to ESM, you might face issues with file extensions in imports. For example, you might need to change
imports like:

```typescript
import {someFunction} from './some-file.js';
```

```text
Notice the .js extension in above import.
This is because TypeScript files are not natively supported in ESM,
and we need to specify the .js extension to import TypeScript files
```

The issues related to file extensions in imports can be resolved in the following ways:

### Option 1: Automatically Add `.js` Extension to All Imports using `ts2esm`

***
You can use the `ts2esm` tool to convert TypeScript files to ESM and automatically add the `.js` extension to imports.
This will fix all the imports in files/packages mentioned in the `tsconfig.json` file.

```bash
# Install ts2esm
$ npm install -g ts2esm

# Convert TypeScript files to ESM. It will pick our tsconfig.json file and convert the files to ESM.
# This will automatically add the .js extension to the imports.
$ npx ts2esm

```

### Option 2: Use `moduleResolution: "Bundler"` in `tsconfig.json`

***
If you are using bundlers, you can set the `moduleResolution` option to `"Bundler"` in
the `tsconfig.json` file. This will allow TypeScript to resolve modules using the bundler's resolution logic.

- This will loosen the module resolution constraints and allow bundlers to handle the resolution of modules.
- You can use imports without extensions.
- The `module` requires to be `es2015` or later for this to work correctly.
- Read more from the feature PR [here](https://github.com/microsoft/TypeScript/pull/51669).

```json
{
  "compilerOptions": {
    //Instead of "NodeNext" or "Node", use "Bundler" if you 
    //do not want to specify file extensions at all.
    "moduleResolution": "Bundler"
  }
}
```

The previous example will work with imports like:

```typescript
import {someFunction} from './some-file'; //No need to specify file extension.

```

## Optional: Using `.ts` Extension in Imports Instead of `.js`

***

If you import `.ts` files instead of `.js` files, you will see an error like:

```text
An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
```

If you want to use the `.ts` extension in imports instead of `.js`, you can set the `allowImportingTsExtensions` option
to `true` in the `tsconfig.json` file. This will allow TypeScript to import `.ts` files instead of `.js` files.

```json
{
  "compilerOptions": {
    //Allow importing .ts extensions
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

The previous example will work with the `.ts` extension in imports like:

```typescript
import {someFunction} from './some-file.ts';
```

## Takeaways

***
In this note, we learned about configuring TypeScript for ESM in Playwright. We created a `tsconfig.json` file for ESM
and made changes to the `package.json` file to support ESM. We also learned how to access the `__dirname` equivalent in
ESM using the `url` and `path` modules. Finally, we discussed how to convert TypeScript files to ESM using `ts2esm`.

## References

***

- [Documentation for allowImportingTsExtensions](https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions)
- [Documentation for moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)
- [The Module Compiler Option Reference Page](https://www.typescriptlang.org/docs/handbook/modules/reference.html#the-module-compiler-option)
- [ts2esm Guide on NPM](https://www.npmjs.com/package/ts2esm#guide)
- [Detailed Medium Article for CJS to ESM Migration](https://electerious.medium.com/from-commonjs-to-es-modules-how-to-modernize-your-node-js-app-ad8cdd4fb662)

***
