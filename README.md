# eslint-plugin-interpolation-outside-template

Verifies that string interpolation is done within a template literal

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-interpolation-outside-template`:

```
$ npm install eslint-plugin-interpolation-outside-template --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-interpolation-outside-template` globally.

## Usage

Add `interpolation-outside-template` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "interpolation-outside-template"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "interpolation-outside-template/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





