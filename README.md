# ShiftFlow [ES]
# 📜 Descripción del proyecto
#### Este proyecto fue desarrollado como proyecto final del curso de Desarrollo Web Fullstack hecho en [Silicon Misiones](https://siliconmisiones.gob.ar/)
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
----------
# ShiftFlow [EN]
# 📜 Project description
#### This project was developed as the final project of the Fullstack Web Development course at [Silicon Misiones](https://siliconmisiones.gob.ar/)
The objective of the project was to meet the basic needs of a medical clinic where the profiles of professionals and patients can be managed, as well as a relatively complete medical history of the latter, and the possibility of scheduling appointments between patients and medical professionals.
To achieve this, through various technologies, the following points were sought to be satisfied:
- CRUD of professionals.
- CRUD of patients.
- CRUD of medical history (which is divided into three parts: family history, personal history, and habits.)
- CRUD of appointments (relationship between patients and professionals to coordinate appointments).
###### Note: CRUD stands for Create, Read, Update, and Delete
---

## 🛡️ Technologies used:

- [React](https://reactjs.org/) for frontend; allowed to develop all the visual part of the project as well as involve functionalities specific to the frontend and also related to the backend through a RestAPI.
- [NodeJS](https://nodejs.org/en/) for backend; allowed to develop the necessary RestAPI to interconnect the database with the project itself. Different libraries were used to provide the highest functionality and security possible to the project.
- [MySQL](https://www.mysql.com/) for database; ideal for the project as table relationships were used through an entity-relationship diagram previously made.

---

## 📚 Libraries used:

### Backend:

- [BCrypt](https://www.npmjs.com/package/bcrypt); Allowed password encryption in the database, providing greater security to users.
- [Express](https://expressjs.com/); Allowed to make HTTP requests, error management, and support for different types of content, such as HTML, JSON, among others.
- [JWT](https://jwt.io/); Allowed to authenticate and authorize users by generating access tokens that are sent to the client once authenticated correctly.
- [Morgan](https://www.npmjs.com/package/morgan); Improved the development of RestAPI by providing information about requests and responses made on the server.
- [MySQL](https://www.npmjs.com/package/mysql); Allowed to make the connection with the database, which was used to store and manage system data.
- [Nodemon](https://nodemon.io/); Improved the development of RestAPI by automatically restarting the server when changes were detected in the code.

### Frontend:

- [Chakra UI](https://chakra-ui.com/); Used to style various components and use various defaults such as modals, toast, among others, and thus improve the user experience.
- [React Router Dom](https://reactrouter.com/); Used to handle navigation in the application and make it a single-page application (SPA), facilitating smoother navigation for the user.
- [React Icons](https://react-icons.github.io/react-icons/); Used to add icons to the user interface.
- [Moment](https://momentjs.com/); Used to manipulate and format dates and times to make them more readable for the user.

---

###### Note: only the code of the frontend made in React is available. Both the RestAPI and the database are in private repositories for security reasons, [contact me](https://www.linkedin.com/in/brunomacieldev/) to grant you access to them.
