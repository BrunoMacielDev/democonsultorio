# ShiftFlow
# 📜 Descripción del proyecto
#### Este proyecto fue desarrollado como proyecto final del curso de Desarrollo Web Fullstack
El objetivo del proyecto fue satisfacer las necesidades básicas de un consultorio/clínica medica en donde se pueda gestionar los perfiles de profesionales y pacientes además de una historia clínica relativamente completa de este ultimo y la posibilidad de agendar turnos/citas entre paciente y profesional medico.
Para ello, por medio de distintas tecnologias, se busco satisfacer los siguientes puntos:
- ABM de profesionales.
- ABM de pacientes.
- ABM de historia clínica (la cual esta dividida en tres partes: Antecedentes familiares, antecedentes personales y hábitos.)
- ABM de turnos (relacion entre pacientes y profesionales para coordinar turnos).
###### Nota: ABM significa Alta, Baja y Modificacion
---

## 🛡️ Tecnologías usadas:

- [React](https://reactjs.org/) para frontend; permitio desarrollar toda la parte visual del proyecto asi como tambien involucrar funcionalidades propias del frontend y tambien relacionada con el backend por medio de una RestAPI.
- [NodeJS](https://nodejs.org/en/) para backend; permitio desarrollar la RestAPI necesaria para interconectar la base de datos con el proyecto en si. Se utilizaron diferentes librerias para dar la mayor funcionalidad y seguridad posible al proyecto.
- [MySQL](https://www.mysql.com/) para base de datos; ideal para el proyecto ya que se utilizaron relaciones entre tablas por medio de un diagrama entidad-relacion previamente realizado.

---

## 📚 Librerías utilizadas:

### Backend:

- [BCrypt](https://www.npmjs.com/package/bcrypt); Permitio el cifrado de contraseñas en la base de datos brindando asi una mayor seguridad a los usuarios.
- [Express](https://expressjs.com/); Permitio hacer las solicitudes HTTP, la gestión de errores y el soporte para diferentes tipos de contenido, como HTML, JSON, entre otros.
- [JWT](https://jwt.io/); Permitio autenticar y autorizar a los usuarios generando tokens de acceso que se envian al cliente una vez que se ha autenticado correctamente.
- [Morgan](https://www.npmjs.com/package/morgan); Permitio mejorar el desarrollo de la RestAPI brindando informacion sobre las solicitudes y las respuestas que se realizan en el servidor
- [MySQL](https://www.npmjs.com/package/mysql); Permitio hacer la conexion con la base de datos la cual se utilizo para almacenar y gestionar los datos del sistema.
- [Nodemon](https://nodemon.io/); Permitio mejorar el desarrollo de la RestAPI reiniciando de manera automatica el servidor cuando se detectaban cambios en el codigo.

### Frontend:

- [Chakra UI](https://chakra-ui.com/); Se utilizo para dar estilo a varios componentes y utilizar varios predeterminados como modals, toast, entre otros y asi mejorar la experiencia de usuario.
- [React Router Dom](https://reactrouter.com/); Se utilizo para manejar la navegacion en la aplicacion y hacerla single-page application (SPA) facilitando una navegacion mas fluida para el usuario.
- [React Icons](https://react-icons.github.io/react-icons/); Se utilizo para añadir iconos a la interfaz de usuario.
- [Moment](https://momentjs.com/); Se utilizo para manipular y formatear fechas y horas para que sea mas legible para el usuario.

---

###### Nota: solamente se encuentra disponible el codigo del frontend hecho en React. Tanto la restAPI como la base de datos estan en repositorios privados por tema de seguridad, [contactame](https://www.linkedin.com/in/brunomacieldev/) para brindarte acceso a las mismas.
