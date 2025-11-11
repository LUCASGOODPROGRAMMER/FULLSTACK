// Polyfill = código que simula uma funcionalidade moderna em navegadores antigos que não a possuem nativamente.

import "core-js/stable"; // adiciona polyfills de recursos moderno do javaScript
import "regenerator-runtime/runtime";

import run from "./modules/promises";

import "./assets/css/style.css";

run();
