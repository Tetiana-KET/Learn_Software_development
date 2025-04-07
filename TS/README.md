1. Install TypeScript globally so you can use the tsc command in the console. You only need to install it globally once to use tsc in your terminal globally.
   `npm install -g typescript`
   `tsc --version`

2. Install TypeScript locally to devDependencies. It should appear in package.json after that.
   `npm install --save-dev typescript`

3. Create a `tsconfig.json` file in the project root. You can do this manually or by running `tsc --init`.
   Basic `tsconfig.json` requirements:

   - Target: `ES2015`
   - Module: `ESNext`
   - Output directory: `dist`
   - Allow JS
   - Include the folder `src`. Please use the `"include"` property for this.

Also, please read and include the following `compilerOptions`:

- ["strict"](https://www.typescriptlang.org/tsconfig#strict)
- ["forceConsistentCasingInFileNames"](https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames)
- ["strictFunctionTypes"](https://www.typescriptlang.org/tsconfig#strictFunctionTypes)
- ["noUnusedLocals"](https://www.typescriptlang.org/tsconfig#noUnusedLocals)
- ["noUnusedParameters"](https://www.typescriptlang.org/tsconfig#noUnusedParameters)
- ["noImplicitReturns"](https://www.typescriptlang.org/tsconfig#noImplicitReturns)
- ["skipLibCheck"](https://www.typescriptlang.org/tsconfig#skipLibCheck)

4. Create an `src` folder and put an `index.ts` file in it so that it contains `console.log("Hello, world!");`.
5. In `package.json`, create a script called `"compile"` with the command `"tsc"`. Run this script in the console and make sure `JS` files are created in the `dist` folder. Then, commit these new files. Notice that you have to commit these files in order to pass the tests.
6. Add eslint linting script. Please use [the following tutorial](https://typescript-eslint.io/getting-started/)
   `npm install --save-dev eslint @eslint/js typescript typescript-eslint`
   - Install all required dependencies. Please note that all dependencies should be placed in the `"devDependecies"` section of the `package.json` file.
   - Create an `.eslintrc.cjs` file as specified in the tutorial. Please use the same file contents.
   - Add `lint` script to `package.json` with the following contents: `"eslint ./src/index.ts"`.
   - Run the new script in the console and check the results.
