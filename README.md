To install @hikyu/env, run the following command:
```bash
npm install @hikyu/env
```

To use the package, require it in your project like so:
```js
require('@hikyu/env')(); // Path default to ./.env
require('@hikyu/env')('./.myEnv'); // File path is optional
```

# Usage

## Creating file
```
text=My Variable Text
anyNumber=1
```

## Getting variables
Using global.env
```js
console.log(global.env.text)
// Output: My Variable Text

console.log(env.anyNumber) // global is not needed (use only if no other env variable exists)
// Output: 1
```

Using proces.env
```js
console.log(process.env.text)
// Output: My Variable Text
```

# License
This package is licensed under the MIT License.