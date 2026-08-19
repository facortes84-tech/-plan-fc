# Plan FC — PWA

Versión v7 para GitHub Pages / iPhone.

Incluye el plan semanal, nutrición, registro local, motor de reglas, recordatorios y exportación de entrenamientos.

## Nuevo en v7

- Workout Schema v1.
- Sesiones convertidas a pasos estructurados.
- Exportación JSON del workout.
- TCX con `Workouts` y `Step`.
- Duración por tiempo y, cuando corresponde, distancia.
- Objetivos de potencia, FC y cadencia conservados cuando están expresamente definidos por el plan.
- Detección de tiempo no desglosado para no inventar instrucciones.
- Service Worker v7.

## Garmin

Garmin documenta que un workout estructurado está compuesto por pasos, duración y objetivos. La representación interna de esta PWA sigue esa lógica. El TCX se mantiene como formato de intercambio, pero no se afirma que Garmin Connect lo convierta automáticamente en un workout futuro. La siguiente fase es generar FIT Workout, que es el formato documentado por Garmin para archivos de workout estructurado.
