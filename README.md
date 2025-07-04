# Microservicio de emails - Taller 2 - Arquitectura de Sistemas

Microservicio de emails para envío de emails del sistema **Streamflow** del taller 2 del curso "Arquitectura de Sistemas".

## Autor

**Jairo Calcina Valda - 20.734.228-9**

## Pre-requisitos

- [Node.js](https://nodejs.org/es/) (version 23.11.0)

## Instalación y configuración

1. **Clonar el repositorio**

```bash
git clone https://github.com/Broukt/emails-service
```

2. **Ingresar al directorio del proyecto**

```bash
cd emails-service
```

3. **Instalar las dependencias**

```bash
npm install
```

4. **Crear un archivo `.env` en la raíz del proyecto y ingresar las variables de entorno**

```bash
cp .env.example .env
```

Las variables de entorno que se deben ingresar manualmente corresponden con las credenciales del servicio de Mailtrap, las cuales se obtienen en la página de [Mailtrap](https://mailtrap.io/), iniciando sesión e ingresando a la sección de Sandbox.

## Ejecutar la aplicación

```bash
npm start
```

El servidor se iniciará en el puerto **50053** (o en el puerto definido en la variable de entorno `PORT`). Accede a la API mediante `localhost:50053`.