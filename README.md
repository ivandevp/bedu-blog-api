# Blog API @ Bedu

## Contexto de la API

Ejemplo del workshop de Node.js. API REST de un blog con los endpoints:

* `GET /api/v1/posts` - retorna todos los posts.
* `GET /api/v1/posts/:id` - retorna el post especificado por id en la URI.
* `POST /api/v1/posts` - crea un post nuevo y lo retorna.
* `PUT /api/v1/posts/:id` - actualiza un post especificado por id y lo retorna.
* `DELETE /api/v1/posts/:id` - elimina un post especificado por id y lo retorna.

El esquema de la entidad `Post` que usamos tiene los siguientes campos:

```
{
  _id: GUID (autogenerado por MongoDB)
  title: string (requerido y único)
  content: string (requerido)
  publishDate: Date (requerido)
  author: string (requerido)
}
```

## Ejecución

Para ejecutar el proyecto, es necesario clonar el repositorio o un fork de este, instalar las dependencias e iniciar el servidor.

```sh
# clonar el proyecto
$ git clone https://github.com/ivandevp/bedu-blog-api.git
# entrar al directorio del proyecto
$ cd bedu-blog-api
# instalar las dependencias
$ npm install
# iniciar el servidor
$ npm start
```