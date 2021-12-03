(()=>{"use strict";function t(t,e,n){const o=document.documentElement,i="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((t=>{o.removeEventListener(t,s)})),n())}t.hasAttribute(i)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,s)}),0)})),t.setAttribute(i,""))}new class{constructor(t,e){this.linkInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollTosection=this.scrollTosection.bind(this)}scrollTosection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linkInternos.forEach((t=>{t.addEventListener("click",this.scrollTosection)}))}init(){if(this.linkInternos.length)return this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent())}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){this.tabMenu.length&&this.tabContent.length&&(this.addTabNavEvent(0),this.addTabNavEvent())}}('[data-tab="menu"] li','[data-tab="content"] section').init(),function(){const t=document.querySelector('[data-menu="suave"]'),e=t.offsetHeight;window.addEventListener("scroll",(function(){window.scrollY>=e?t.classList.add("effect-active"):t.classList.remove("effect-active")}))}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&n.classList.remove("ativo")})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.toolTipBox.style.top=`${t.pageY+20}px`,this.toolTipBox.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.toolTipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tootip"),e.innerText=n,document.body.appendChild(e),e}(this);e.toolTipBox=t,n.toolTipBox=t,n.element=this,this.addEventListener("mouseleave",n),this.addEventListener("mousemove",e)}t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["click"];function i(){n.classList.toggle("active"),e.classList.toggle("active"),t(n,o,(()=>{n.classList.remove("active"),e.classList.remove("active")}))}e&&o.forEach((t=>{e.addEventListener(t,i)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,i=o.getDay(),s=o.getHours(),a=-1!==e.indexOf(i),c=s>=n[0]&&s<n[1];a&&c&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=e/100;let o=0;const i=setInterval((()=>{o=Math.floor(o+n),t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())})))})),e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://www.blockchain.com/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>console.log(Error(t)))),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}()})();