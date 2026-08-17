PLAN FC — NIVEL 1 — SCHEMA LOCALSTORAGE V1

Archivos:
- index.html
- manifest.json
- sw.js

Almacenamiento:
- pf1_schema
- pf1_users
- pf1_active_user
- pf1_user_{userId}

Cada usuario contiene perfil, preferencias, baseline, plan, días, mediciones y espacio preparado para Garmin.
Los días contienen sueño, estado, nutrición, entrenamiento, decisión del motor, Garmin y eventos.

Migración:
La aplicación detecta el almacenamiento anterior (pf1_day_{userId}_{fecha} y pf1_measure_{userId}) y lo migra automáticamente al schema v1.

Importante:
Los datos son locales al navegador/origen. GitHub Pages no sincroniza localStorage entre dispositivos ni entre navegadores.
