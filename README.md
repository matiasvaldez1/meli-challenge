# README

## Introducción
Este proyecto es una aplicación para control de centros de distribucion, principalmente enfocada en el registro de incidentes. El proyecto cuenta con los paths principales de home (/) y registro de incidentes (/incident_registration). En el home o inicio podemos encontrar varias cards mockeadas siendo la de Registro de Incidentes la unica funcional, mientras que en la pagina de registro de incidentes podemos encontrar el formulario con los requerimientos funcionales.
A su vez el proyecto es enteramente funcional en modo responsive, sea para mobile, tablet o desktop.

## Diseño en Figma
Tanto el diseño de la interfaz de usuario como el user flow de este proyecto podés encontrarlo haciendo clic en el siguiente enlace: [Enlace a Figma](https://www.figma.com/file/6GA481qUypo9a6gGd4YURS/Matias-Mercadolibre-Technical-Test?type=design&node-id=2%3A79&mode=design&t=yJVjF8T0PAvqjP5X-1)

## Paquetes utilizados
El proyecto utiliza varios paquetes y bibliotecas para su funcionalidad detallados a continuacion:

- **React Js**: La biblioteca de interfaces de usuario que nos da muchas facilidades para desarrollar una moderna web app.
- **Shadcn/ui**: Paquete de componentes que nos permite instalar solamente los componentes que necesitemos, lo que nos por consecuencia ayuda a reducir el tamaño del bundle final al solamente instalar los componentes que utilizaremos de manera ondemand.
- **Tailwind Css**: Framework de css mobile first que nos proporciona utility classes y customizacion de theme que agiliza el desarrollo de componentes y su estilado. 
- **React router dom**: Paquete utilizado para generar SPA routing a un proyecto con React, con muchas utilizades a la hora de definir los paths de nuestra aplicacion.
- **Formik**: Paquete utilizado para la creacion de formularios, facilita mucho el código en la definicion de los tipos y validaciones de los mismos.
- **Yup**: Paquete utilizado para validaciones, en este caso del formulario principal de la aplicacion.
- **Vitest**: Unit testing de componentes de UI del formulario.

## Unit tests
Los tests se encuentran dentro de la carpeta "src/__tests__" y pueden ser corridos a traves del comando:

   ```
   npm run test
   ```

## Seguridad
Con respecto a la seguridad, principalmente la relacionada a la subida de archivos, se limita el tamaño y la extension de los mismos para evitar cualquier tipo de ataque a traves de esta funcionalidad.

## Validaciones
El formulario principal cuenta con validaciones a la hora de su envío en todos los inputs, sean requeridos o no.

## Instalación
Para ejecutar este proyecto localmente, seguí estos pasos:

1. Cloná este repositorio en tu máquina local.
2. Instala las dependencias utilizando el siguiente comando:
   ```
   npm install
   ```
3. Corre el proyecto localmente utilizando:

    ```
   npm run dev
    ```

## Despliegue
El proyecto se encuentra deployeado en Vercel, a dicho deploy se puede acceder a través del siguiente [link](https://meli-challenge-steel.vercel.app)

## Licencia
Este proyecto está bajo la [Licencia MIT](LICENSE).

---

¡Gracias por leer!
