# Maquetado-Dinamico-Angular ( Maquetado preliminar )

Este proyecto corresponde a el desafio del modulo 3, Argentina Programa.

**Funcionalidades de angular utilizadas:**
* Componentes
* Servicios
* Reactive forms
* Angular routing
* Angular Guards

**Otras**
* Oservables y subcripciones (Rxjs)
* Json server (fake api)
* Bootstrap CSS

## Para el correcto funcionamiento de este maquetado preliminar

**Json-server**
Se requiere tener instalado Json server (fake api) enlazado al archivo `db.json` el cual de iniciar en el puerto " 5001 "

Como se muestra en el siguiente ejemplo:

en el archivo **Package.json** scripts, agregar

`"server": "json-server --watch db.json --port 5001"`

**Bootstrap**

Se requiere tener incluido Bootstrap en la carpeta **node_modules**, mediante `npm i bootstrap`  
### Visualizar proyecto

**Iniciar Json-server**
`npm run server`

**Iniciar ng-serve**
`ng serve -o`

### Sobre el Login

**Entrar como visitante**
permite un vistazo al diseño del portfolio

**Entrar con "credenciales"**
Ademas de permitir ver el diseño de portfolio, da al usuario acceso a funciones de edicion **(Aun en proceso)**. Ademas da acceso a la rutas protegidas de la aplicacion **(en proceso)** 

### Credenciales

**usuario** : admin

**Password** : admin
