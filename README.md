# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Codigo de Inicio de Proyecto

- Configuramos con Vite [npm create vite@latest]
- Configuramos con Vite [cd $Nombre_del_proyecto]
- Instalamos el NPM [npm install]
- Instalamos el GH-pages [npm install gh-pages --save-dev]
- Instalamos tailwindcss [npm install -D tailwindcss postcss autoprefixer] [npx tailwindcss init -p] 
- Instalamos el route [npm install react-router-dom]
- Instalamos el route [npm run dev]

# Codigo GIT

- Ir al directorio del proyecto
- Inicializamos el repositorio [git init]
- Vinculamos con el repositorio [git remote add origin https://github.com/ArcadiaAlejandro/cheliretti]

# Configurar el archivo package.json 

- En Scripts agregar [    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist" ]

# Subir a git pages

- Ir al GIT CMD y codificar [npm run deploy ]

# Comandos GIT

- Mostrará una lista de todas las ramas en tu repositorio y marcará con un asterisco (*) la rama en la que estás actualmente.[git branch]
- Mostrará información sobre el estado del repositorio, [git status]
- Añade todos los archivos a la zona de stage [git add .]
- Realiza un commit de los cambios añadidos: [git commit -m "Añadir componente Section1 con tipos explícitos"]
- Sube los cambios al repositorio remoto [git push origin main]

# Clonar 