---
name: wedding-invitation-planning
description: Genera planes detallados de diseño o desarrollo para la invitación de boda interactiva. Usar cuando el usuario solicite crear un plan, proponga ajustes de diseño, cambios de secciones, nuevas funcionalidades o cualquier modificación al proyecto antes de implementar.
disable-model-invocation: true
---

# Wedding Invitation — Planning Skill

## Cuándo aplicar

Aplicar este skill cuando el usuario pida:
- Crear un plan para modificar el diseño de una sección
- Agregar una nueva sección o componente
- Cambiar tipografía, colores o espaciado
- Añadir animaciones o interactividad
- Reorganizar el flujo de la invitación

## Contexto del proyecto

- **Stack**: Next.js 16, Tailwind CSS 4, TypeScript, React 19
- **Diseño**: Solo dispositivos móviles (≤ 430 px)
- **Secciones actuales**: `HeroSection`, `SectionOne`–`SectionTen` en `src/app/ui/sections/`
- **Componentes**: `src/app/_components/` (ej. `WeddingCountdown`)
- **Fuentes**: `font-iniria-serif` (cuerpo), `font-meow-script` (destacados), `font-hortensia` (etiquetas)
- **Paleta**: `primary-*` (tierra cálidos) y `secondary-*` (ámbar)
- **CSS custom**: `src/app/css/` importado en `globals.css`

## Formato del plan

Siempre estructurar el plan así:

```markdown
## Objetivo
[Una frase que describe qué se logrará]

## Archivos afectados
- `ruta/al/archivo.tsx` — descripción del cambio
- `ruta/al/otro.css` — descripción del cambio

## Pasos
1. [Paso concreto y accionable]
2. [Paso concreto y accionable]
3. ...

## Consideraciones de diseño
- [Restricción o decisión de diseño relevante para móvil]
- [Token de color o fuente a usar]

## Lo que NO cambia
- [Diseño o comportamiento existente que se preserva]
```

## Reglas del plan

- **No implementar nada** — el plan es solo para revisión y aprobación.
- Mencionar siempre los tokens de color (`primary-*`, `secondary-*`) y fuentes a usar.
- Especificar si el componente será Server o Client Component.
- Indicar si se necesita un nuevo archivo CSS en `src/app/css/`.
- Si el cambio afecta `globals.css`, listar exactamente qué se agrega bajo `@theme {}`.
- Respetar los principios SOLID: proponer componentes con responsabilidad única.
- Señalar si algún cambio podría afectar otras secciones o el `layout.tsx`.
