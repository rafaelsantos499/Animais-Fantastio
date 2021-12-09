import ScroolSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import animationMenu from './modules/animation-menu.js'
import Modal from './modules/modal.js'
import ToolTip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitCoin from './modules/fetch-bitcoin.js'
import ScrollAnima from './modules/scroll-Anima.js'

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

animationMenu();
initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitCoin('https://www.blockchain.com/ticker', '.btc-preco')
