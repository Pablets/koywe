<div align="center">
  <p>
    <img src="./ImgKoywe.png" width="250" />
  </p>
</div>

# Cuentanos del Desafio
#### 1. Nivel de dificultad del desafío (que tan compleja fue para ti).

Me gustó mucho el desafío, sentí que estaba cómodo realizándolo y me entretuve bastante. Me hubiese gustado tener más tiempo para agregarle más funcionalidades y hacer el código más robusto, pero lo haré después de la entrega. En términos generales no me costó técnicamente aunque si tiene una carga de tiempo bastante considerable ya que es el diseño de una app fullstack.

#### 2. Que sección te tomó más tiempo hacer. ¿Cuál te resultó más compleja? ¿pórque?

La más compleja de entender fue la de los order books ya que inicialmente quería comparar todas las ofertas que el servicio me brindaba, ordenarlas por precio, simular la compra, y en caso de seguir teniendo dinero continuar simulando con la siguiente mejor oferta, pero por una cuestión de tiempos no pude realizarlo a tiempo. (Aunque está toda la lógica testeada para ver como funcionaría.)

#### 3. Que librerias usaste en el FrontEnd. ¿Qué hace y para que la usaste?

React: UI
Redux: Manejo de estado global
Axios: Data Fetching
Tailwind: Microclases de CSS, bundle reducido.
Typescript: Tipado
Next: Framework, originalmente quería servir estáticamente mi aplicación mediante NGNX pero por una cuestión de tiempos no pude así que utilizé el ruteo de docker compose con los puertos expuestos para la comunicación.

#### 4. Que librerias usaste en el BackEnd. ¿Qué hace y para que la usaste?
Node. Server
Express Librería que extiende ciertas funcionalidades de node para facilitar el desarrollo.
Cookie session: Librería para manejo de cookies.
cors: Librería para manejo de protocolo CORS
Express async errors: wrapper para manejo asyncrono de errores evitando boilerplate.
Express Validator: Librería con midlewares de validación.
Jsonwebtoken: Librería que permite el intercambio seguro de información entre dos partes.
mongoose: ORM Para manejo de base de datos mongo
node-fetch: Adaptación de la api web fetch para data fetching dentro de node.
supertest: Uitilidades para testeo de APIs
typescript: tipado.
Jest: Librería para testing
Eslint: linter
mongodb-memory-server: implementación de una base de datos mongo en memoria para fines de testeo.




#### 5. Algún supuesto y/o consideraciones que debamos tener presente cuando implementaste el FrontEnd?
Todo el flujo de autenticación es solo un extra y si bien funciona, hay ciertas licencias de seguridad que me tomé para agilizar la implementación como el manejo de web token en el frontend.
#### 6. Algún supuesto y/o consideraciones que debamos tener presente cuando implementaste el BackEnd?
Ciertas partes del flujo no están terminadas aunque creo que para fines de demostración la aplicación cumple con lo requerido.

#### 7. Nos encantaría ver que sugerencia nos puedes hacer para mejorar este desafio.
El punto de comparación de order books, es un poco complejo debido a que la documentación de las apis no está clara en algunas partes. Me sirivieron mucho todos los links con documentación, fue un buen detalle.
