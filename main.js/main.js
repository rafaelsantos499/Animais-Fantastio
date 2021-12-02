/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n    // Accordion List\r\n\r\n    const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n    const activeClass = 'ativo'\r\n\r\n    function activeAccordion() {\r\n        this.classList.toggle(activeClass)\r\n        this.nextElementSibling.classList.toggle(activeClass)\r\n    }\r\n\r\n    if (accordionList.length) {\r\n        accordionList[0].classList.add(activeClass)\r\n        accordionList[0].nextElementSibling.classList.add(activeClass)\r\n\r\n        accordionList.forEach((item) => {\r\n            item.addEventListener('click', activeAccordion)\r\n        })\r\n    }\r\n}\r\nconsole.log('hey')\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/accordion.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n    // Accordion List\r\n\r\n    const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n    const activeClass = 'ativo'\r\n\r\n    function activeAccordion() {\r\n        this.classList.toggle(activeClass)\r\n        this.nextElementSibling.classList.toggle(activeClass)\r\n    }\r\n\r\n    if (accordionList.length) {\r\n        accordionList[0].classList.add(activeClass)\r\n        accordionList[0].nextElementSibling.classList.add(activeClass)\r\n\r\n        accordionList.forEach((item) => {\r\n            item.addEventListener('click', activeAccordion)\r\n        })\r\n    }\r\n}\r\nconsole.log('ola')\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/accordion.js?");
>>>>>>> master

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n    function animaNumeros() {\r\n        const numeros = document.querySelectorAll('[data-numero]')\r\n\r\n        numeros.forEach((numero) => {\r\n            const total = +numero.innerText\r\n            const incremento = total / 100\r\n            let start = 0;\r\n\r\n            const timer = setInterval(() => {\r\n                start = Math.floor(start + incremento) // Arrendondar o valor\r\n                numero.innerText = start\r\n\r\n                if (start > total) {\r\n                    numero.innerText = total\r\n                    clearInterval(timer)\r\n                }\r\n            }, 25 * Math.random())\r\n        })\r\n    }\r\n    const observer = new MutationObserver(handleMutation);\r\n\r\n    function handleMutation(mutation) {\r\n        if (mutation[0].target.classList.contains('ativo')) {\r\n            observer.disconnect();\r\n            animaNumeros();\r\n        }\r\n    }\r\n\r\n    const observerTarget = document.querySelector('.numeros')\r\n\r\n    observer.observe(observerTarget, { attributes: true })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animation-menu.js":
/*!**************************************!*\
  !*** ./js/modules/animation-menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollMenu)\n/* harmony export */ });\nfunction initScrollMenu() {\r\n    const menu = document.querySelector('[data-menu=\"suave\"]')\r\n    const scrollHeight = menu.offsetHeight // valor do Scroll\r\n\r\n    function Scroll() {\r\n        if (window.scrollY >= scrollHeight) {\r\n            menu.classList.add('effect-active')\r\n        } else {\r\n            menu.classList.remove('effect-active')\r\n        }\r\n    }\r\n\r\n    window.addEventListener('scroll', Scroll)\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/animation-menu.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initdropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initdropdownMenu() {\r\n    const dropdownMenus = document.querySelectorAll('[data-dropdown]')\r\n    function handleClick(event) {\r\n        event.preventDefault()\r\n        this.classList.add('active')\r\n        ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n            this.classList.remove('active')\r\n        })\r\n    }\r\n\r\n    dropdownMenus.forEach((menu) => {\r\n        // criar dois evento usando Array e fazendo um forEach\r\n\r\n        ['touchstart', 'click'].forEach((userEvent) => {\r\n            menu.addEventListener(userEvent, handleClick)\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n    function createAnimal(animal) {\n        const div = document.createElement('div')\n        div.classList.add('numero-animal')\n\n        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`\n        return div\n    }\n\n    async function fetchAnimais(url) {\n        try {\n            const animaisResponse = await fetch(url)\n\n            const animaisJSON = await animaisResponse.json()\n\n            const numeroGrid = document.querySelector('.numeros-grid')\n\n            animaisJSON.forEach((animal) => {\n                const divAnimal = createAnimal(animal)\n                numeroGrid.appendChild(divAnimal)\n            })\n            ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n        } catch (erro) {\n            console.log(erro)\n        }\n    }\n\n    fetchAnimais('./animaisapi.json')\n}\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitCoin)\n/* harmony export */ });\nfunction initFetchBitCoin() {\r\n    fetch('https://www.blockchain.com/ticker')\r\n        .then((r) => r.json())\r\n        .then((bitcoin) => {\r\n            document.querySelector('.btc-preco').innerText = (1000 / bitcoin.BRL.sell).toFixed(4)\r\n        }).catch((erro) => console.log(Error(erro)))\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n    const funcionamento = document.querySelector('[data-semana]')\r\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number) // puxar o que esta dentro do dataset / split trasformando ne um array depois da vírgula\r\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n\r\n    const dataAgora = new Date();\r\n    const diaAgora = dataAgora.getDay(); // puxar o dia\r\n    const horarioAgora = dataAgora.getHours();\r\n\r\n    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1\r\n\r\n    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])\r\n    // se os dois for true\r\n    if (semanaAberto && horarioAberto) {\r\n        funcionamento.classList.add('aberto')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n    const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n    const menuList = document.querySelector('[data-menu=\"list\"]')\r\n    const eventos = ['click']\r\n\r\n    function openMenu() {\r\n        menuList.classList.toggle('active')\r\n        menuButton.classList.toggle('active')\r\n\r\n        ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n            menuList.classList.remove('active')\r\n            menuButton.classList.remove('active')\r\n        })\r\n    }\r\n\r\n    if (menuButton) {\r\n        eventos.forEach((event) => {\r\n            menuButton.addEventListener(event, openMenu)\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n    const btnAbrir = document.querySelector('[data-modal=\"abrir\"]')\r\n    const btnFechar = document.querySelector('[data-modal=\"fechar\"]')\r\n    const containeModal = document.querySelector('[data-modal=\"container\"]')\r\n\r\n    function toggleModal(event) {\r\n        event.preventDefault();\r\n        containeModal.classList.toggle('ativo');\r\n    }\r\n\r\n    function fecharTotal(event) {\r\n        if (event.target === this) { // target  seleciona o elemento clicado\r\n            containeModal.classList.remove('ativo')\r\n        }\r\n    }\r\n\r\n    if (btnAbrir && btnFechar && containeModal) {\r\n        btnAbrir.addEventListener('click', toggleModal);\r\n        btnFechar.addEventListener('click', toggleModal);\r\n        containeModal.addEventListener('click', fecharTotal);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n    const html = document.documentElement\r\n    const outside = 'data-outside'\r\n\r\n    function handleOutsidClick(event) {\r\n        if (!element.contains(event.target)) {\r\n            element.removeAttribute(outside)\r\n\r\n            events.forEach((userEvent) => {\r\n                html.removeEventListener(userEvent, handleOutsidClick)\r\n            })\r\n            callback()\r\n        }\r\n    }\r\n\r\n    if (!element.hasAttribute(outside)) {\r\n        events.forEach((userEvent) => {\r\n            setTimeout(() => {\r\n                html.addEventListener(userEvent, handleOutsidClick)\r\n            }, 0)\r\n        })\r\n\r\n        element.setAttribute(outside, '')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animação.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animação.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n    const section = document.querySelectorAll('[data-anime=\"scroll\"]')\r\n\r\n    // para o scrool começar a adicionar a class 'ativo' com 60% da tela\r\n    const windowMetade = window.innerHeight * 0.6;\r\n\r\n    function animaScroll() {\r\n        section.forEach((section) => {\r\n            const sectionTop = section.getBoundingClientRect().top - windowMetade\r\n\r\n            if (sectionTop < 0) {\r\n                section.classList.add('ativo')\r\n            } else if (section.classList.contains('ativo')) {\r\n                // contains = se conter\r\n                section.classList.remove('ativo')\r\n            }\r\n        })\r\n    }\r\n\r\n    if (section.length) {\r\n        animaScroll()\r\n\r\n        window.addEventListener('scroll', animaScroll)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/scroll-anima%C3%A7%C3%A3o.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScroolSuave)\n/* harmony export */ });\nclass ScroolSuave {\r\n    constructor(links, options) {\r\n        this.linkInternos = document.querySelectorAll(links); // buscar todos href que começa com #\r\n        if (options === undefined) {\r\n            this.options = { behavior: 'smooth', block: 'start' }\r\n        } else {\r\n            this.options = options\r\n        }\r\n\r\n        this.scrollTosection = this.scrollTosection.bind(this)\r\n    }\r\n\r\n    scrollTosection(event) {\r\n        event.preventDefault();\r\n        // puxar o href em forma de ID\r\n        const href = event.currentTarget.getAttribute('href');\r\n        const section = document.querySelector(href)\r\n        // suavizar o scrool\r\n        section.scrollIntoView(this.options)\r\n    }\r\n\r\n    addLinkEvent() {\r\n        this.linkInternos.forEach((link) => {\r\n            link.addEventListener('click', this.scrollTosection);\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if (this.linkInternos.length) {\r\n            this.addLinkEvent()\r\n            return this\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/scroll-suave.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroolSuave)\n/* harmony export */ });\nfunction initScroolSuave() {\r\n    const linkInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]'); // buscar todos href que começa com #\r\n\r\n    function scrollTosection(event) {\r\n        event.preventDefault();\r\n        // puxar o href em forma de ID\r\n        const href = event.currentTarget.getAttribute('href');\r\n        const section = document.querySelector(href)\r\n\r\n        // suavizar o scrool\r\n        section.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n        })\r\n    }\r\n    linkInternos.forEach((link) => {\r\n        link.addEventListener('click', scrollTosection);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/scroll-suave.js?");
>>>>>>> master

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li')\r\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section')\r\n\r\n    // Adicionar e remover class 'ativo'\r\n    function activeTab(index) {\r\n        tabContent.forEach((evento) => {\r\n            evento.classList.remove('ativo')\r\n        })\r\n        const direcao = tabContent[index].dataset.anime;\r\n        tabContent[index].classList.add('ativo', direcao)\r\n    }\r\n\r\n    // verificar se realmente tem os elementos no HTML\r\n\r\n    if (tabMenu.length && tabContent.length) {\r\n        // adicionar class 'ativo' na section\r\n\r\n        tabContent[0].classList.add('ativo')\r\n\r\n        tabMenu.forEach((itemMenu, index) => {\r\n            itemMenu.addEventListener('click', () => {\r\n                activeTab(index)\r\n            })\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\r\n    const tooltip = document.querySelectorAll('[data-tooltip]')\r\n\r\n    const onMouseMove = {\r\n        handleEvent(event) {\r\n            // valores da onde o mouse esta na pagina\r\n            this.toolTipBox.style.top = `${event.pageY + 20}px`\r\n            this.toolTipBox.style.left = `${event.pageX + 20}px`\r\n        },\r\n    }\r\n\r\n    const onMouseLeave = {\r\n        handleEvent() {\r\n            this.toolTipBox.remove()\r\n            this.element.removeEventListener('mouseleave', onMouseLeave)\r\n            this.element.removeEventListener('mousemove', onMouseMove)\r\n        },\r\n    }\r\n\r\n    function criarTooltipBox(element) {\r\n        const toolTipBox = document.createElement('div') // criar uma div\r\n        const text = element.getAttribute('aria-label') // puxar o texto da aria label do HTML\r\n        toolTipBox.classList.add('tootip') // criar uma class dentro da div\r\n        toolTipBox.innerText = text\r\n        document.body.appendChild(toolTipBox) // cria o elemento no final do BODY\r\n        return toolTipBox\r\n    }\r\n\r\n    function onMouseOver() {\r\n        // ao passar o mouse\r\n        // retorno da função criarTooltipBox\r\n        const toolTipBox = criarTooltipBox(this)\r\n\r\n        onMouseMove.toolTipBox = toolTipBox\r\n        onMouseLeave.toolTipBox = toolTipBox;\r\n        onMouseLeave.element = this;\r\n        this.addEventListener('mouseleave', onMouseLeave)\r\n        this.addEventListener('mousemove', onMouseMove)\r\n    }\r\n\r\n    tooltip.forEach((item) => {\r\n        item.addEventListener('mouseover', onMouseOver)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_anima_o_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animação.js */ \"./js/modules/scroll-animação.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_animation_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animation-menu.js */ \"./js/modules/animation-menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]')\r\nscrollSuave.init()\r\n\r\n;(0,_modules_scroll_anima_o_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_animation_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/script.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_anima_o_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animação.js */ \"./js/modules/scroll-animação.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_animation_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animation-menu.js */ \"./js/modules/animation-menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll_anima_o_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_animation_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\r\n\n\n//# sourceURL=webpack://animais-fantastico/./js/script.js?");
>>>>>>> master

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;