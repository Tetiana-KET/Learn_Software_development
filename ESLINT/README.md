1. `npm install --save-dev eslint`
2. `npm init @eslint/config@latest`
3. `npm install --save-dev eslint-plugin-immutable` 

And then all we have to do is add some of these rules to our eslintrc file. So we'll open up eslintrc.js, and add a plugins property right above rules. And it's going to be an array. And then we simply add our immutable package to it, like this, immutable. And don't forget to add the commas. Then inside the rules object, we're going to add a rule from immutable. Specifically, we're going to use the immutable/no-mutation rule. And we're going to give it the value 2 because we want ESLint to treat this as an error