!function(){var e,t,o,n,c;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.add("modal-open");var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){var o=this.closest(".modal");document.body.classList.remove("modal-open"),o.classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-backdrop-modal").classList.remove("active"),document.body.classList.remove("modal-open"))}),!1),t.addEventListener("click",(function(e){e.target===e.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))}))})),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),document.querySelectorAll(".menu__item").forEach((function(e){e.addEventListener("click",(function(e){t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)}))})),new Swiper(".reviwes__container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},slidesPerView:1,spaceBetween:70,speed:600}),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementsByClassName("up__btn")[0].style.display="flex",document.getElementsByClassName("up__btn")[0].style.opacity="1"):(document.getElementsByClassName("up__btn")[0].style.display="none",document.getElementsByClassName("up__btn")[0].style.opacity="0")},document.getElementById("up-button").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}();
//# sourceMappingURL=index.8a103c8b.js.map