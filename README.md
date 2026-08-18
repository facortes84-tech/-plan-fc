# Plan FC — PWA

Versión estática para GitHub Pages / iPhone.

## Incluye

- Plan semanal de entrenamiento existente.
- Objetivo visible y seguimiento diario.
- Registro local de sueño, estado, alimentación, entrenamiento y medidas mediante `localStorage`.
- Motor de reglas existente para ajustar la sesión según los datos registrados.
- Recordatorios locales almacenados en `localStorage`.
- Generación de archivo `.ics` para añadir un recordatorio al calendario del iPhone.
- Generación de correo mediante `mailto:` para abrir el redactor de correo del iPhone.
- Exportación TCX de la sesión de hoy y de una sesión del plan para facilitar el intercambio/importación con Garmin Connect.
- Service Worker v6 con actualización `network-first` del HTML y funcionamiento offline de los recursos estáticos.

## Importante sobre recordatorios

La PWA puede pedir permiso de notificaciones y programar avisos mientras puede ejecutarse en el navegador. Para notificaciones fiables con la PWA completamente cerrada se necesitará una arquitectura Web Push y un backend (por ejemplo, cuando lleguemos al siguiente nivel con n8n o un servicio equivalente).

## Importante sobre Garmin

El TCX generado representa la sesión como archivo compatible para intercambio/importación. No se presenta como una garantía de que Garmin Connect vaya a convertirlo automáticamente en un entrenamiento estructurado programado con todos los pasos, objetivos y alertas del dispositivo. Garmin documenta soporte de TCX para determinadas importaciones y cursos; el flujo exacto depende del tipo de archivo y del dispositivo.
