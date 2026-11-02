# @rolldown/plugin-emotion minifier repro

Minimal reproduction of three CSS minification bugs in `@rolldown/plugin-emotion@0.2.0`.

```bash
npm install
npm run build
cat dist/index.js
```

## Expected (what `@emotion/babel-plugin` / stylis produce)

```js
css("& :first-child{color:red;}")
css("&::before{content:\"Note: a, b\";}")
css("background:url(//cdn.example.com/a.png);color:red;")
```

## Actual

```js
css("&:first-child{color:red;}")
css("&::before{content:\"Note:a,b\";}")
css("background:url(\n  color:red;")
```
