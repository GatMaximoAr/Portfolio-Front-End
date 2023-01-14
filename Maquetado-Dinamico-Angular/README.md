# Maquetado Dinamico Angular

Este maquetado corresponde a el proyecto integrador de Argentina Programa.

**Funcionalidades de Angular utilizadas:**
* [Componentes](https://angular.io/guide/component-overview)
* [Servicios](https://angular.io/tutorial/tour-of-heroes/toh-pt4)
* [Reactive forms](https://angular.io/guide/reactive-forms)
* [Angular routing](https://angular.io/guide/routing-overview)
* [Angular Guards](https://angular.io/api/router/CanActivate)
* [Interceptors](https://angular.io/api/common/http/HttpInterceptor)


**Otras**
* [Oservables y subcripciones (Rxjs)](https://rxjs.dev/guide/observable)
* [Bootstrap CSS](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Ngx spinner](https://www.npmjs.com/package/ngx-spinner)

## Para el correcto funcionamiento de este maquetado de frontend Angular

**Bootstrap**

Se requiere tener incluido Bootstrap Css en la carpeta **node_modules**, mediante

`npm i bootstrap`  

### Visualizar proyecto

**Iniciar ng-serve**
`ng serve -o`

### Sobre el proyecto
El protfolio cuenta con una conexion ApiRest y bases de datos, lo que permite la creacion de diferentes usuarios y asi poder utilizar todas las funcionalidades del portfolio

### Links
* [Mi perfil](https://proyecto-argentina-progr-296dd.web.app/portfolio/maximo-gatica)
* [Registrarse](https://proyecto-argentina-progr-296dd.web.app/singUp)
* [Log in](https://proyecto-argentina-progr-296dd.web.app/login)


## Nota Importante*

El deploy del backend esta realizado en el servicio de [Render](https://render.com/) en una intancia **free** de Servicio Web. Debido a esto, luego de 15 minutos de inactividad el servicio se apaga, la primer request efectuada despues de este lapso de tiempo puede demorar incluso un par de minutos hasta responder, no obstante, una vez el servcio ApiRest se encuentra activo todas las siguientes llamamadas se llevan acabo con fluides.

