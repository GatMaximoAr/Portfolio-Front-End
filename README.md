# Proyecto integrador Argentina Programa (Frontend)

Repositorio utilizado para almacenar capa frontend del proyecto practico integrador Argentina Programa un programa nacional y federal argentino que tiene como objetivo capacitar a personas en lenguajes y conocimientos sobre programación.

## Sobre el proyecto 
El objetivo final de este proyecto es realizar un portfolio web utilizando las tecnologias de [Angular](https://angular.io/) y [Boostrap Css](https://getbootstrap.com/docs/5.0/getting-started/introduction/) para la capa de frontend. Asi como [Java Spring Boot](https://spring.io/) y [Mysql](https://www.mysql.com/) para la capa del backend.

La app web cuenta con sistemas de registro y log in con los que se puede acceder a funcionalizades ABM (Alta, Baja, Modificacion) de los datos que se muestran en la palntilla principal del portfolio.

## Sobre deploy
El despliege de esta SPA (Single Page Aplication), la ApiRest y base de datos que con forman este proyecto, se encuentran alojados en los siguientes servicios y/o plataformas: 

### Frontend
La capa frontend utiliza los servicios hosting, para almacenar el build de la SAP construida con Angular, el servicio storage, para almacenar archivos. Ambos servicios brindados por [Firebase](https://firebase.google.com/?gclid=CjwKCAiAwomeBhBWEiwAM43YIKeXctxc0fMfuODjZ87dIgNQ8lkIZftQ_tiC56gpsK5AS-15U0bj-BoCK38QAvD_BwE&gclsrc=aw.ds)

## Backend 
Por otro lado lado la capa de backend se devide en dos partes:

* la base de datos alojada y suministrada por [Clever Cloud](https://www.clever-cloud.com/)
* La ApiRest, la cual se encuentra en los servidores de [Render](https://render.com/)

## Nota Importante!

El deploy del backend esta realizado en el servicio de [Render](https://render.com/) en una intancia **free** de Servicio Web. Debido a esto, luego de 15 minutos de inactividad el servicio se apaga, la primer request efectuada despues de este lapso de tiempo, puede demorar incluso un par de minutos hasta responder, no obstante, una vez el servcio ApiRest se encuentra activo todas las siguientes llamamadas se llevan acabo con fluides.

&copy; Gatica Maximo 2022
