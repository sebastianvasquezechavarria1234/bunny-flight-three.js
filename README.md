<div align="center">

# Bunny Flight

### Un conejo piloto surcando un cielo de nubes, construido desde cero con Three.js

<br>

![Three.js](https://img.shields.io/badge/Three.js-r110-049EF4?logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-2.1.3-88CE02?logo=greensock&logoColor=white)

<br>

[Ver demo](https://sebas-dev.vercel.app/) · [Código fuente](https://github.com/sebastianvasquezechavarria1234/bunny-flight-three.js)

</div>

---

## Sobre el proyecto

Bunny Flight nació como una exploración de lo que se puede lograr con geometría procedural y animación por código. No hay modelos externos, no hay texturas descargadas: cada forma —la zanahoria, el conejo, las nubes— existe porque alguien definió sus vértices a mano.

El resultado es una escena breve pero hipnótica: un conejo montado en una zanahoria con alas, flotando entre nubes que cruzan la pantalla. Simple en concepto, cuidadoso en ejecución.

---

## ¿Qué hay aquí?

| Componente | Qué hace |
|------------|----------|
| **Zanahoria-avión** | Cuerpo cilíndrico deformado, alas con vértices ajustados, tres hojas giratorias |
| **Conejo piloto** | Orejas que se balancean, ojos que parpadean, asiento integrado |
| **Nubes** | Tres esferas agrupadas que cruzan el escenario de derecha a izquierda |
| **Escenario** | Niebla atmosférica, iluminación direccional, sombras en tiempo real |

Cada pieza es una clase independiente que se ensambla en `main.js`. La arquitectura es deliberadamente simple: sin build tools, sin frameworks, sin complicaciones.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| **Three.js r110** | Motor 3D y renderizado WebGL. Se usa esta versión porque el proyecto modifica vértices de geometrías — algo que fue deprecado en versiones posteriores. |
| **GSAP 2.1.3** | Todas las animaciones: flotación, balanceo de orejas, parpadeo, tránsito de nubes. |
| **HTML / CSS** | Estructura mínima. El CSS se limita a eliminar márgenes y ocultar overflow. |

---

## Estructura

```
bunny-flight/
├── index.html        ← punto de entrada
├── css/
│   └── style.css     ← estilos globales
├── js/
│   ├── utils.js      ← materiales, constantes y utilidades
│   ├── Cloud.js      ← nubes animadas
│   ├── Pilot.js      ← conejo piloto
│   ├── Carrot.js     ← zanahoria-avión
│   └── main.js       ← orquestación de la escena
```

---

## Ejecución

No se necesita instalar nada. Abre `index.html` en un navegador y listo.

Si prefieres un servidor local:

```bash
python -m http.server 8000
```

Luego navega a `http://localhost:8000`.

---

## Controles

| Acción | Input |
|--------|-------|
| Rotar la escena | Click izquierdo + arrastrar |
| Zoom | Scroll del ratón |
| Desplazar | Click derecho + arrastrar |

---

## Detalles técnicos

La escena se construye sobre un objeto `internals` que centraliza el renderer, la cámara, la escena y los materiales. Cada clase (`Carrot`, `Cloud`, `Pilot`) encapsula su propia geometría y animación, manteniendo el código modular sin excesiva abstracción.

Las animaciones usan `TweenMax` con modos `yoyo` e `Infinity` para crear movimientos perpetuos y naturales. Las nubes se reinician fuera de cámara y reaparecen con posiciones Y aleatorias, dando sensación de continuidad.

El fondo azul claro (`#C5F5F5`) y la niebla crean profundidad sin necesidad de un skybox complejo.

---

## Paleta

| | Color | Hex |
|---|-------|-----|
| Zanahoria | Naranja | `#B7513C` |
| Hojas | Verde | `#379351` |
| Alas / Asiento | Marrón | `#5C2C22` |
| Nariz / Orejas | Rosa | `#B1325E` |
| Conejo | Gris | `#AAAAAA` |
| Nubes | Blanco | `#EEEEEE` |
| Cielo | Azul | `#C5F5F5` |

---

## Autor

**Sebastian V.** · [sebas-dev.vercel.app](https://sebas-dev.vercel.app/)

---

<div align="center">

Hecho con paciencia y Three.js

</div>
