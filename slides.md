---
marp: true
---

# State of Rails - JS Bundling in 2023

Michael Yin @ GloryLeague 🏀

* sprockets (from ?)
* webpacker / shakapacker (from 2017)
* importmap-rails (from 2022)
* jsbundling-rails (from 2022)
* propshaft (still 0.x)

---

# Why

* Migrated from "some_deprecated_gem" to `webpacker` in 2021.
* `webpacker` is no longer maintained by Rails team (v5). `shakapacker` took over as a fork. (v6, v7)

---

# Demos

Basic React.js Demo

* `create-react-app` (Node.js)
* `importmap-rails` (Rails 7 default) 
* `shakapacker`
* `jsbundling-rails` with `esbuild`
* `jsbundling-rails` with `webpack`

---

## CRA (create-react-app)

```
npm install @mui/joy @emotion/react @emotion/styled
```

---

## Rails 7.0.8 / importmap-rails

```
./bin/importmap pin react react-dom/client
./bin/importmap pin @mui/joy @emotion/react @emotion/styled
./bin/importmap pin htm/react
```

---

# Can I use importmap-rails?

> https://guides.rubyonrails.org/working_with_javascript_in_rails.html
> 
> * If your code requires a transpilation step, such as JSX or TypeScript.
> * If you need to use JavaScript libraries that include CSS or otherwise rely on Webpack loaders.
> * If you are absolutely sure that you need tree-shaking.
> * If you will install Bootstrap, Bulma, PostCSS, or Dart CSS through the cssbundling-rails gem. All options provided by this gem except Tailwind will automatically install esbuild for you if you do not specify a different option in rails new.

