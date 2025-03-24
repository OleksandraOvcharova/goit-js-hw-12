import{a as h,S as L,i as n}from"./assets/vendor-DtRopbQG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function b(t,o){try{return(await h.get("https://pixabay.com/api/",{params:{key:"49368815-3bbcd5bcef21230b847f53bd6",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(s){return{error:s.message}}}const v=new L("a.gallery-link",{captionsData:"alt"}),c=document.querySelector("ul.gallery"),u=document.querySelector("div.loader"),d=document.querySelector("button.load_button");function w(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:l,comments:f,downloads:y})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}">
          <ul class="gallery-list">
          <li class="gallery-list-item">
          <p class="gallery-list-item-text">Likes</p>
          <p class="gallery-list-item-value">${r}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Views</p>
          <p class="gallery-list-item-value">${l}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Comments</p>
          <p class="gallery-list-item-value">${f}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Downloads</p>
          <p class="gallery-list-item-value">${y}</p>
          </li>
          </ul></a></li>`).join("");c.insertAdjacentHTML("beforeend",o),v.refresh()}function S(){n.error({message:"Please, fill the search input.",position:"topRight"})}function q(t){n.error({message:`Something went wrong. ${t}`,position:"topRight"})}function x(){n.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"})}function P(){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function $(){c.innerHTML=""}function B(){const o=document.querySelector("li.gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}function E(){u.classList.remove("hidden")}function I(){u.classList.add("hidden")}function N(){d.classList.remove("hidden")}function m(){d.classList.add("hidden")}let a=1,g="";const O=document.querySelector("button.load_button");async function p(){E();const{hits:t,totalHits:o,error:s}=await b(g,a);if(I(),s)q(s);else if(t.length===0)P();else{w(t),a>1&&B();const i=Math.ceil(o/15);a==i?(m(),x()):N()}}const R=document.querySelector("form");R.addEventListener("submit",async t=>{t.preventDefault(),m();const s=new FormData(t.target).get("search-text").trim();if(s===""){S();return}g=s,a=1,$(),p()});O.addEventListener("click",async t=>{a+=1,p()});
//# sourceMappingURL=index.js.map
