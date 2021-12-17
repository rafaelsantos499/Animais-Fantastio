import ScroolSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import animationMenu from './modules/animation-menu.js'
import Modal from './modules/modal.js'
import ToolTip from './modules/tooltip.js'
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitCoin from './modules/fetch-bitcoin.js'
import ScrollAnima from './modules/scroll-Anima.js'
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import SlideNav from './modules/slide.js';

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

const dropDownMenu = new DropdownMenu('[data-dropdown]')
dropDownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'aberto')
funcionamento.init()

animationMenu();

fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitCoin('https://www.blockchain.com/ticker', '.btc-preco')

const slide = new SlideNav('.slide', '.wrapper')
slide.init()

slide.addControl('.custom-control')
