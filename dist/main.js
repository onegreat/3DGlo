(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),r=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let l;const o=()=>{let e=(new Date("15 January 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaning:e,days:"Дней "+Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},n=()=>{o().timeRemaning>0?function(e,l,n,s){let i=o();t.textContent=i.days,r.textContent=i.hours>=10?i.hours:`0${i.hours}`,a.textContent=i.minutes>=10?i.minutes:`0${i.minutes}`,c.textContent=i.seconds>=10?i.seconds:`0${i.seconds}`}():clearInterval(l),l=setInterval(n,1e3)};n()})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{(e.classList.contains("active-menu")&&!t.target.closest("menu")||t.target.closest(".menu")||t.target.closest(".close-btn")||t.target.closest("menu>ul>li>a"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=document.querySelector("#form3-name"),a=document.querySelector("#form3-phone"),c=document.querySelector("#form3-email");r.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я -]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"").toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g,(function(e,t,r){return t+r.toUpperCase()}))})),a.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")})),c.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\w@\-_.!~*']/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")})),t.forEach((t=>{t.addEventListener("click",(()=>{document.documentElement.clientWidth>768&&(e.style.display="block",e.style.opacity="0",setTimeout((()=>{e.style.transition="all 1s ease",e.style.opacity="1"}),100)),e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\d]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")}))})),(()=>{const e=document.querySelector("#form1-name"),t=document.querySelector("#form1-phone"),r=document.querySelector("#form1-email");e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я -]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"").toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g,(function(e,t,r){return t+r.toUpperCase()}))})),t.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")})),r.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\w@\-_.!~*']/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")}))})(),(()=>{const e=document.querySelector("#form2-name"),t=document.querySelector("#form2-phone"),r=document.querySelector("#form2-email"),a=document.querySelector("#form2-message");e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я -]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"").toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g,(function(e,t,r){return t+r.toUpperCase()}))})),t.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")})),r.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^\w@\-_.!~*']/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")})),a.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я -]/gi,"").replace(/\ \ +/gi," ").replace(/\-\-+/gi,"-").replace(/^\s/g,"").replace(/\s$/g,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),r=document.querySelector(".portfolio-dots");let a,c=0;for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),r.append(e)}const l=document.querySelectorAll(".dot"),o=(e,t,r)=>{e[t].classList.remove(r)},n=(e,t,r)=>{e[t].classList.add(r)},s=()=>{o(t,c,"portfolio-item-active"),o(l,c,"dot-active"),c++,c>=t.length&&(c=0),n(t,c,"portfolio-item-active"),n(l,c,"dot-active")},i=(e=1500)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(o(t,c,"portfolio-item-active"),o(l,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&l.forEach(((t,r)=>{e.target===t&&(c=r)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),n(t,c,"portfolio-item-active"),n(l,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block");document.querySelector(".calc-type"),document.querySelector(".calc-square"),document.querySelector(".calc-count"),document.querySelector(".calc-day"),document.getElementById("total"),t.addEventListener("input",(e=>{console.log("calc")}))})(100)})();