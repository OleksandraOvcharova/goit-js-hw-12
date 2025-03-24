import{a as h,S as L,i as n}from"./assets/vendor-DtRopbQG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();async function b(r,s){try{return(await h.get("https://pixabay.com/api/",{params:{key:"49368815-3bbcd5bcef21230b847f53bd6",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}catch{return[]}}const v=new L("a.gallery-link",{captionsData:"alt"}),c=document.querySelector("ul.gallery"),u=document.querySelector("span.loader"),d=document.querySelector("button.load_button");function w(r){const s=r.map(({webformatURL:l,largeImageURL:i,tags:e,likes:t,views:a,comments:y,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${l}" alt="${e}">
          <ul class="gallery-list">
          <li class="gallery-list-item">
          <p class="gallery-list-item-text">Likes</p>
          <p class="gallery-list-item-value">${t}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Views</p>
          <p class="gallery-list-item-value">${a}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Comments</p>
          <p class="gallery-list-item-value">${y}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Downloads</p>
          <p class="gallery-list-item-value">${f}</p>
          </li>
          </ul></a></li>`).join("");c.insertAdjacentHTML("beforeend",s),v.refresh()}function S(){n.message({message:"We are sorry, but you have reached the end of search results.",position:"topRight"})}function q(){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function x(){c.innerHTML=""}function $(){const s=document.querySelector("li.gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}function P(){u.classList.remove("hidden")}function B(){u.classList.add("hidden")}function O(){d.classList.remove("hidden")}function m(){d.classList.add("hidden")}let o=1,g="";const I=document.querySelector("button.load_button");async function p(){P();const{hits:r,totalHits:s}=await b(g,o),l=Math.ceil(s/15);B(),r.length===0?q():(w(r),o>1&&$(),o==l?(m(),S()):O())}const D=document.querySelector("form");D.addEventListener("submit",async r=>{r.preventDefault(),m();const l=new FormData(r.target).get("search-text");l!==""&&(g=l,o=1,x(),p())});I.addEventListener("click",async r=>{o+=1,p()});
//# sourceMappingURL=index.js.map
