
# POC MCP Figma + @it-ds/ui Boilerplate

## Descripción

Este proyecto es un boilerplate para pruebas rápidas con el MCP Server de Figma y la librería de diseño `@it-ds/ui`. Permite experimentar con prompts, estructura de proyectos y la integración directa entre Figma y React, facilitando la creación y testeo de interfaces de manera ágil.

## Tecnologías principales

- **React** (18.x)
- **Vite** (7.x)
- **TypeScript**
- **TailwindCSS**
- **@it-ds/ui** (librería de componentes UI)
- **react-router-dom**
- **react-icons**
- **ESLint** (con reglas recomendadas y soporte para TypeScript)

## Objetivo

- Probar y optimizar la integración entre Figma MCP y la librería de componentes.
- Servir como entorno base para crear, testear y versionar rápidamente nuevas pantallas o flujos.
- Permitir a cualquier desarrollador clonar el repo y comenzar a experimentar con prompts y selección de Figma usando MCP, sin preocuparse por la configuración inicial.

## Instalación y uso

```bash
git clone https://github.com/[TU-ORG]/[TU-REPO].git
cd [TU-REPO]
npm install
npm run dev
```

Esto levanta el entorno en modo desarrollo. Puedes modificar `App.tsx` o crear nuevas ramas para guardar tus pruebas.

## Flujo de trabajo recomendado

- Usa la rama principal como base limpia.
- Crea una nueva rama para cada experimento o prueba.
- Si una versión funciona bien, puedes dejarla documentada en su branch.
- Si necesitas partir de cero, vuelve a la rama principal y comienza de nuevo.

## Ejemplo de prompts y conexión con MCP

1. Selecciona un nodo en Figma y usa el plugin MCP para generar el código.
2. Copia el código generado y pégalo en el archivo correspondiente (`App.tsx` o un nuevo componente).
3. Si el prompt requiere componentes de la librería `@it-ds/ui`, asegúrate de importarlos así:

```tsx
import { Button, Card } from '@it-ds/ui';
```

4. Puedes experimentar con diferentes prompts, por ejemplo:

> "Genera una pantalla de login usando los componentes de @it-ds/ui, con campos de usuario y contraseña, y un botón de ingresar centrado."

> "Crea un dashboard con cards y un header, usando la paleta de colores institucional."

5. Guarda tus pruebas en ramas separadas para mantener el boilerplate limpio.

## Consideraciones

- El proyecto está listo para conectar con MCP y recibir componentes desde Figma.
- No requiere configuración adicional para comenzar a probar.
- Puedes agregar screenshots, ejemplos de prompts o resultados en las ramas de tus pruebas.

