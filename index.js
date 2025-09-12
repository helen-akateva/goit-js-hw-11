import{a as l,S as y,i as n}from"./assets/vendor-jlerdHUr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",p="52251600-fd545eaf39516c2667db2508b";l.defaults.baseURL=g;function h(s){return l.get("",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captions:!0,captionDelay:250});function b(s){const t=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:o,comments:m,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${a}" alt="${e}" />
            <div class="card">
          <ul class="card-list">
            <li class="card-item">Likes ${r}</li>
            <li class="card-item">Views ${o}</li>
            <li class="card-item">Comments ${m}</li>
            <li class="card-item">Downloads ${f}</li>
          </ul>
        </div>
          </a>
        </li>`).join("");c.innerHTML=t,L.refresh()}function S(){c.innerHTML=""}function P(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const d=document.querySelector("form");d.addEventListener("submit",v);function v(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search term!"});return}S(),P(),h(t).then(a=>{const i=a.hits;if(i.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(i)}).catch(a=>{console.log(a),n.error({title:"Error",message:"Something went wrong. Please try again!"})}).finally(()=>{w(),d.reset()})}
//# sourceMappingURL=index.js.map
