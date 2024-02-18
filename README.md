# Misapuntesde.com Blog

Site created using VuePress 2 by Jose Cerrejon. enjoy! ❤️

This is a personal blog about programming, Linux, and more.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run docs:dev
```

### Compiles and minifies for production

```bash
npm run docs:build
```

You have some python code on /tools to convert json exported from MySQL to markdown & check broken URL links.

## Cheat sheet

### Images

```markdown
![Alt text](/path/to/img.jpg "Optional title")
```

### Text

```markdown
::: important Custom important
...
:::

::: info Custom info
...
:::

::: note Custom note
...
:::

::: tip Custom tip
...
:::

::: warning Custom warning
...
:::

::: caution Custom caution
...
:::

Use == == to mark. ==highlighted==
```

- Frontmatter reference: https://vuejs.press/reference/frontmatter.html#description

- Icons: ['fa-brands fa-raspberry-pi', 'fa-brands fa-apple', 'fa-solid fa-code', 'fa-regular fa-newspaper', 'fa-solid fa-mobile-button']

## Links

- [VuePress 2](https://v2.vuepress.vuejs.org/)

- [Hope Theme](https://theme-hope.vuejs.press)

- [fontawesome.com](https://fontawesome.com/search?o=r&m=free&f=classic&s=brands)

## Issues

- Permission denied. Please check the permissions and owner of that directory. If you are running this command as a privileged user, please consider not using a virtual environment.

```bash
sudo chown -R $USER:$GROUP ~/.npm  && sudo chown -R $USER:$GROUP /usr/local/lib/node_modules && sudo chown -R $USER:$GROUP /usr/local/bin/
```

- Uncaught ReferenceError: **VUE_HMR_RUNTIME** is not defined

Solution: Run `npm run docs:dev` from terminal, don't use VSCode .

- Get stuck with `sh: vuepress-vite: command not found`

```bash
# Remove devDependencies at packages.json and directory node_modules
npm i -D @vuepress/bundler-vite @vuepress/plugin-search@next vuepress@next vuepress-theme-hope @vuepress/plugin-feed@next @vuepress/plugin-redirect@next --legacy-peer-deps
```
