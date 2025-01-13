# Como iniciar un proyecto en Typescript

## Primero debemos instalar los archivos de Desarrollo

```
npm i -D typescript @types/node ts-node-dev rimraf
```

**@types/node** es para tener los tipados de node  

**ts-node-dev** es para ejecutar desde los archivos .ts como si fuese nodemon

**rimraf** nos permite eliminar de manera recursiva directorios

## Paso 2

Escribimos este comando en el root de nuestro proyecto

```
npx tsc --init --outDir dist/ --rootDir src/
```

## Paso 3

Escribimos estos scripts en el package.json

```javascript
"scripts": {
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
  },
```
