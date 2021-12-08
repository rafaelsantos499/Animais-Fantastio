import ScroolSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import animationMenu from './modules/animation-menu.js'
import Modal from './modules/modal.js'
import ToolTip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitCoin from './modules/fetch-bitcoin.js'
import initAnimacaoScroll from './modules/scroll-animação.js'

const scrollSuave = new ScroolSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabnav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const toolTip = new ToolTip('[data-tooltip]')
toolTip.init()



animationMenu();


initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitCoin()
initAnimacaoScroll();

