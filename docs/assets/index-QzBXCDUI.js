(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();(function(){const o=(t,n=!1)=>(t=t.trim(),n?[...document.querySelectorAll(t)]:document.querySelector(t)),r=(t,n,a,m=!1)=>{let u=o(n,m);u&&(m?u.forEach(p=>p.addEventListener(t,a)):u.addEventListener(t,a))},s=(t,n)=>{t.addEventListener("scroll",n)};let i=o("#navbar .scrollto",!0);const e=()=>{let t=window.scrollY+200;i.forEach(n=>{if(!n.hash)return;let a=o(n.hash);a&&(t>=a.offsetTop&&t<=a.offsetTop+a.offsetHeight?n.classList.add("active"):n.classList.remove("active"))})};window.addEventListener("load",e),s(document,e);const l=t=>{let n=o(t).offsetTop;window.scrollTo({top:n,behavior:"smooth"})};let c=o(".top-link");if(c){const t=()=>{window.scrollY>100?c.classList.add("active"):c.classList.remove("active")};window.addEventListener("load",t),s(document,t)}r("click",".mobile-nav-toggle",function(t){o("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bx-menu"),this.classList.toggle("bx-x")}),r("click",".scrollto",function(t){if(o(this.hash)){t.preventDefault();let n=o("body");if(n.classList.contains("mobile-nav-active")){n.classList.remove("mobile-nav-active");let a=o(".mobile-nav-toggle");a.classList.toggle("bx-menu"),a.classList.toggle("bx-x")}l(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&o(window.location.hash)&&l(window.location.hash)})})();const f=document.querySelector(".footer-year");f&&(f.innerHTML=new Date().getFullYear());const y=document.querySelectorAll(".progress-bar"),h=new IntersectionObserver((o,r)=>{o.forEach(s=>{if(s.isIntersecting){const i=s.target.getAttribute("aria-valuenow");s.target.style.width=`${i}%`,r.unobserve(s.target)}})},{threshold:.5});y.forEach(o=>{h.observe(o)});const g=document.getElementById("php-email-form");g.addEventListener("submit",function(o){const r=document.getElementById("name"),s=document.getElementById("email"),i=document.getElementById("message");let e=!0;r.value===""?(e=!1,r.setCustomValidity("Please enter your name.")):r.setCustomValidity(""),s.value===""?(e=!1,s.setCustomValidity("Please enter your email address.")):s.checkValidity()?s.setCustomValidity(""):(e=!1,s.setCustomValidity("Please enter a valid email address.")),i.value===""?(e=!1,i.setCustomValidity("Please enter a message.")):i.setCustomValidity(""),e||o.preventDefault()});g.addEventListener("submit",function(o){const r=document.getElementById("name"),s=document.getElementById("email"),i=document.getElementById("subject"),e=document.getElementById("message"),l="saaqi.grw@gmail.com";document.querySelector("button.bttn");const c=`${i.value} from ${r.value}`,t=`${e.value}

${r.value}
${s.value}`,n=`mailto:${encodeURIComponent(l)}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(t)}`;window.open(n),o.preventDefault()});function d(o,r,s){let i=!1,e=null;new IntersectionObserver(c=>{if(c[0].isIntersecting&&!i){i=!0,e=performance.now();let t=0,n=s,a=setInterval(()=>{let u=(performance.now()-e)/n;u>=1?(clearInterval(a),o.innerHTML=r):(t=Math.floor(u*r),o.innerHTML=t)},20)}}).observe(o)}d(document.querySelector(".statcounter.happy"),22,2e3);d(document.querySelector(".statcounter.project"),59,2e3);d(document.querySelector(".statcounter.support"),1463,2e3);d(document.querySelector(".statcounter.certificate"),8,2e3);const v=document.getElementById("preloader");v&&window.addEventListener("load",()=>{v.remove()});
