import ScroolSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animação.js'
import accordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'
import animationMenu from './modules/animation-menu.js'
import initModal from './modules/modal.js'
import initToolTip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitCoin from './modules/fetch-bitcoin.js'

const scrollSuave = new ScroolSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

initAnimacaoScroll();
accordion();
initTabNav();
animationMenu();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitCoin()
