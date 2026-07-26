# PRD — The Squared Room (Mettle Program)

## Problema original
Clon pixel-perfect de la web fitness "Hybrid Mamut" adaptado a la marca "The Squared Room" (Mettle Program). Tema oscuro, tipografía Antonio Bold, acentos turquesa/cyan, vídeo de fondo YouTube, enlace a playlist de Spotify. Copy en español para coaches. Sitio frontend-only pensado para alojarse como estáticos en CDMON.

**Idioma del usuario: ESPAÑOL.** El usuario es NO técnico.

## Arquitectura
- React + Tailwind, frontend-only (sin backend). Contenido centralizado en `src/data/mockData.js`.
- Componentes en `src/components/*`.
- Hook `src/hooks/useScrollReveal.js` (IntersectionObserver) para animaciones al scroll.

## Implementado (jun 2026)
- Clon UI/UX completo, tema dark + turquesa, Antonio Bold, logo, imágenes B/N (DONE)
- Vídeo YouTube en Hero, enlace Spotify (DONE)
- Copy actualizado: marca a voz plural "coaches/nosotros" (se eliminó "Jordi"). Título "COACHES EN ENTRENAMIENTO HÍBRIDO Y ESTÉTICA", descripción híbrida+bodybuilding, lema Mettle (DONE)
- Sección DEPORTE FUNCIONAL con texto del método Mettle Program (DONE)
- Lista "Podemos ayudarte si" con "¿Quieres estar en forma en tu día a día?" como primer punto (DONE)
- Todo el texto de contenido justificado (text-justify) (DONE)
- Fix móvil: acordeón coach ya no corta contenido (max-h-96 -> max-h-[1500px]) (DONE)
- Foto del coach reemplazada por foto de competición (atleta con cuerda), en B/N (DONE)
- **Mejora 1**: Formulario de contacto funcional (Nombre, Email, Objetivo [HYROX/DEKA/Crosstraining/Bodybuilding/Otro], Mensaje) que envía el lead por WhatsApp (wa.me/34694463184). Sección id=#contacto. (DONE, testeado)
- **Mejora 2**: Botón flotante de WhatsApp (bottom-right, pulso animado). (DONE, testeado)
- **Mejora 3**: Animaciones reveal al hacer scroll en todas las secciones clave (stagger en testimonios). (DONE, testeado)
- Botones "Contáctame" (CTA y Asesoría Online) ahora llevan a #contacto. (DONE)
- **Apartado NUTRICIÓN** (id=#nutricion, `NutritionSection.jsx`): fusiona la marca híbrida con coaching nutricional deportivo (inspirado en institute.nutritionalcoaching.com). Banda de imagen B/N, intro, 4 pilares (Combustible para competir, Composición corporal y estética, Cambio de hábitos real, Seguimiento y ajustes), lista de beneficios, cita y CTA a #contacto. (DONE, testeado iteration_4)
- "Nutrición" añadido como opción del selector Objetivo en el formulario de contacto. (DONE, testeado)

## Integraciones
- WhatsApp: wa.me/34694463184 (sin API key, funciona en estático)
- YouTube (iframe) y Spotify (enlace) — sin keys

## Backlog / Futuro (P1/P2)
- Sección de resultados / antes-después o marcas reales (credibilidad)
- Logos de competiciones (HYROX/DEKA)
- Testimonios con foto y estrellas
- Sección de planes/precios
- SEO básico (title, meta description, favicon, Open Graph)
- Galería tipo mosaico con hover
- Contadores animados de estadísticas

## Pendiente operativo (P0 no técnico)
- Entregar/desplegar la web: el usuario quiere subirla a CDMON (estáticos). Opciones ofrecidas: Deploy de Emergent, descarga directa del zip, o GitHub. Pendiente de decisión del usuario.

## Notas
- COMUNICAR SIEMPRE EN ESPAÑOL. Usuario no técnico.
- Texto de la sección DEPORTE FUNCIONAL está HARDCODED en `HybridSportSection.jsx` (no usa mockData.description) — cualquier cambio de copy ahí debe hacerse en el componente.
