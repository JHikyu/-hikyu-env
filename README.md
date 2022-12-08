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
All Variables are stored in the global.env object. Use it like so:
```js
console.log(global.env.text)
// Output: My Variable Text

console.log(env.anyNumber)
// Output: 1
```

# License
This package is licensed under the MIT License.