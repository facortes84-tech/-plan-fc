# Plan FC — Workout Schema v1

La PWA conserva el plan original y genera una representación estructurada independiente para cada sesión.

## Flujo

PLAN ORIGINAL → SESIÓN AJUSTADA → WORKOUT SCHEMA → EXPORTACIÓN

El motor de reglas sigue siendo la fuente de adaptación. El Workout Schema no reemplaza el plan: lo representa en pasos.

## Campos principales

- `schemaVersion`
- `date`
- `sport`
- `name`
- `plannedDurationSeconds`
- `structuredDurationSeconds`
- `unallocatedSeconds`
- `adjusted`
- `targets`
- `steps[]`
- `notes`

Cada paso conserva:

- nombre
- duración por tiempo o distancia
- intensidad: warmup / active / recovery / cooldown
- objetivo: power / heart_rate / cadence / pace / open
- notas

## Exportaciones

### JSON
Es la representación maestra del entrenamiento estructurado y sirve como formato de intercambio para la siguiente etapa de integración con Garmin.

### TCX
La PWA genera ahora un TCX con `Workouts` y `Step` en lugar de un TCX que solo describía una actividad. Esto conserva la estructura de pasos en el archivo.

El TCX no se presenta como garantía de importación automática de un entrenamiento futuro en Garmin Connect. Garmin documenta los workouts estructurados y el formato FIT por separado. La siguiente etapa técnica es generar un archivo FIT de workout para dispositivos Garmin compatibles.

## Regla importante

Cuando el texto del plan no especifica una parte de la duración, la PWA no inventa ese tiempo. Lo registra como `unallocatedSeconds` y lo muestra en las notas. Esto evita convertir una inferencia en una instrucción de entrenamiento.
