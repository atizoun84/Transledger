import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";var t=e({confirmModal:()=>i,openModal:()=>r}),n=null;function r(e){let{title:t=``,body:r=``,footer:i=``,size:a=``,headerClass:o=``,closeOnBackdrop:s=!0,onClose:c=null}=e,l=document.getElementById(`modal-root`);if(!l)return console.warn(`[Modal] #modal-root introuvable`),{close:()=>{},el:null};let u=a===`sm`?`modal-sm`:a===`lg`?`modal-lg`:``,d=document.createElement(`div`);d.className=`modal-backdrop`,d.innerHTML=`
    <div class="modal ${u}" role="dialog" aria-modal="true">
      <div class="modal-header ${o}">
        <h5>${t}</h5>
        <button type="button" class="modal-close" aria-label="Fermer">✕</button>
      </div>
      <div class="modal-body">${r}</div>
      ${i?`<div class="modal-footer">${i}</div>`:``}
    </div>
  `,l.appendChild(d);let f=()=>{d.classList.remove(`show`),setTimeout(()=>{d.remove(),n&&n.el===d&&(n=null),typeof c==`function`&&c()},200)};d.querySelector(`.modal-close`)?.addEventListener(`click`,f),s&&d.addEventListener(`click`,e=>{e.target===d&&f()});let p=e=>{e.key===`Escape`&&(f(),document.removeEventListener(`keydown`,p))};return document.addEventListener(`keydown`,p),requestAnimationFrame(()=>{d.classList.add(`show`)}),n={el:d,close:f},n}function i(e,t={}){return new Promise(n=>{let i=r({title:t.title||`⚠️ Confirmation`,headerClass:`modal-warning`,size:`sm`,body:`<p style="margin:0;font-size:.95rem;">${e}</p>`,footer:`
        <button type="button" class="btn btn-secondary btn-sm" data-action="cancel">Annuler</button>
        <button type="button" class="btn btn-danger btn-sm" data-action="confirm">Confirmer</button>
      `,onClose:()=>n(!1)}),a=i.el;a&&(a.querySelector(`[data-action="cancel"]`)?.addEventListener(`click`,()=>{n(!1),i.close()}),a.querySelector(`[data-action="confirm"]`)?.addEventListener(`click`,()=>{n(!0),i.close()}))})}export{t as n,r,i as t};