import{C as e,m as t,n,r,v as i}from"./index-D12hkORu.js";import{a,i as o,t as s}from"./helpers-B_61C2tc.js";import{r as c,t as l}from"./modal-B0S64iRE.js";import{a as u,i as d,n as f}from"./calculs-DPAwy0MW.js";import{t as p}from"./whatsapp-CDqoXPlQ.js";import{n as m,t as h}from"./transfers-Ci6P5xVH.js";import{t as g}from"./suppression-D5MZp9ge.js";var _=`tous`,v=null;function y(e){let t=e.reste===void 0?e.aServir||0:e.reste,n=e.servi||0;return t<=.01?`<span class="badge bg-success">✅ Retiré</span>`:n>0?`<span class="badge bg-warning">🟠 Partiel</span>`:`<span class="badge bg-secondary">🟡 En attente</span>`}async function b(e,t){v=t||null;let n=await i(`mois_actif`)||new Date().toISOString().slice(0,7),a=await f(`KIN`,n);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">📍 Agence Kinshasa (RDC)</h2>

    <div class="card" style="background:linear-gradient(135deg,#0d6e5c,#0a5244);color:#fff;border:none;">
      <div class="card-body" style="display:flex;justify-content:space-between;align-items:center;">
        <span class="small">💼 Solde réel en caisse</span>
        <span class="h5 mb-0 fw-bold" style="font-size:1.2rem;color:${a<0?`#ffb3b3`:`#fff`};">${u(a)} $</span>
      </div>
    </div>

    <div class="kpi-grid" id="kin-kpis">
      <div class="kpi-card" style="background:var(--tl-primary);">
        <div class="label">Envois</div>
        <div class="value" id="kpi-kin-envois">—</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-success);">
        <div class="label">Retraits</div>
        <div class="value" id="kpi-kin-retraits">—</div>
      </div>
      <div class="kpi-card kpi-clickable" style="background:var(--tl-warning);cursor:pointer;" id="kpi-kin-reste-card">
        <div class="label">À servir <span class="counter-badge zero" id="kpi-kin-count">0</span></div>
        <div class="value" id="kpi-kin-reste">—</div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <button id="btn-envoi-kin" class="btn btn-primary btn-block" style="padding:16px 8px;flex-direction:column;">
          <span style="font-size:1.4rem;">📤</span>
          <span style="font-size:.78rem;">Envoi vers Cotonou</span>
        </button>
      </div>
      <div class="col-6">
        <button id="btn-retrait-kin" class="btn btn-success btn-block" style="padding:16px 8px;flex-direction:column;">
          <span style="font-size:1.4rem;">💵</span>
          <span style="font-size:.78rem;">Retrait à Kinshasa</span>
        </button>
      </div>
    </div>

    <div class="d-flex gap-1 mb-2" id="kin-filtres">
      <button type="button" class="btn btn-sm btn-outline-primary filtre-kin active" data-filtre="tous" style="flex:1;">Tous</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-kin" data-filtre="envois" style="flex:1;">📤 Envois</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-kin" data-filtre="retraits" style="flex:1;">📥 Retraits</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-kin" data-filtre="depenses" style="flex:1;">💸 Dép.</button>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Opérations</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="kin-totaux" class="badge bg-primary">—</span>
          <button id="kin-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="kin-body">
        <div id="kin-liste"></div>
      </div>
    </div>
  `,document.getElementById(`btn-envoi-kin`).addEventListener(`click`,async()=>{await h({from:`KIN`,to:`CTN`,sourceStore:`kin_ctn`,prefixe:`kin`,profil:v,onSuccess:()=>b(e,v)})}),document.getElementById(`btn-retrait-kin`).addEventListener(`click`,async()=>{await m({agenceLabel:`Kinshasa`,sourceStore:`ctn_kin`,profil:v,onSuccess:()=>b(e,v)})}),document.getElementById(`kpi-kin-reste-card`).addEventListener(`click`,()=>T()),document.querySelectorAll(`.filtre-kin`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.filtre-kin`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),_=e.dataset.filtre,S()})}),o(`kin-toggle`,`kin-body`),await x(),await S(),r(async()=>{await x(),await S()})}async function x(){let e=await i(`mois_actif`)||new Date().toISOString().slice(0,7),n=d(await t(`kin_ctn`),e),r=d(await t(`ctn_kin`),e),a=d(await t(`retraits`),e),o=n.reduce((e,t)=>e+(t.recu||0),0),s=a.filter(e=>e.sourceStore===`ctn_kin`).reduce((e,t)=>e+(t.montantRetrait||t.montant||0),0),c=r.filter(e=>(e.reste||0)>0),l=c.reduce((e,t)=>e+(t.reste||0),0);document.getElementById(`kpi-kin-envois`).textContent=u(o)+` $`,document.getElementById(`kpi-kin-retraits`).textContent=u(s)+` $`,document.getElementById(`kpi-kin-reste`).textContent=u(l)+` $`;let f=document.getElementById(`kpi-kin-count`);f.textContent=c.length,f.classList.toggle(`zero`,c.length===0)}async function S(){let e=document.getElementById(`kin-liste`);if(!e)return;let r=await i(`mois_actif`)||new Date().toISOString().slice(0,7),o=d(await t(`kin_ctn`),r),c=d(await t(`retraits`),r).filter(e=>e.sourceStore===`ctn_kin`),l=d(await t(`depenses`),r).filter(e=>e.ville===`KIN`),f=[];if((_===`tous`||_===`envois`)&&o.forEach(e=>f.push({type:`envoi`,date:e.date,data:e,store:`kin_ctn`})),(_===`tous`||_===`retraits`)&&c.forEach(e=>f.push({type:`retrait`,date:e.date,data:e,store:`retraits`})),(_===`tous`||_===`depenses`)&&l.forEach(e=>f.push({type:`depense`,date:e.date,data:e,store:`depenses`})),f.length===0){a(e,`Aucune opération.`),document.getElementById(`kin-totaux`).textContent=`—`;return}f.sort((e,t)=>(t.date||``).localeCompare(e.date||``)),window._kinOps=f;let p=n(v),m=0,h=0,g=`<div class="table-responsive"><table class="table"><thead><tr>`;g+=`<th>Type</th><th>Date</th><th>Code</th><th>Nom</th><th>Montant</th><th>Statut</th><th>Agent</th><th></th>`,g+=`</tr></thead><tbody>`,f.forEach((e,t)=>{let n=p?`<button class="btn btn-sm btn-outline-danger" data-idx="${t}">🗑️</button>`:`<small class="text-secondary" title="Suppression réservée aux admins">🔒</small>`,r=e.data.agentNomComplet?`<small class="text-secondary">${s(e.data.agentNomComplet)}</small>`:`<small class="text-secondary">—</small>`;if(e.type===`envoi`){let t=e.data;m+=t.recu||0,g+=`<tr>
        <td><span class="badge bg-primary">📤 Envoi</span></td>
        <td>${s(t.date||``)}<br><small class="text-secondary">${s(t.heure||``)}</small></td>
        <td><span class="badge bg-light font-mono" style="font-size:.65rem;">${s(t.code||`—`)}</span></td>
        <td class="text-left">${s(t.beneficiaire||t.expediteur||``)}</td>
        <td class="fw-bold">${u(t.recu)}</td>
        <td>${y(t)}</td>
        <td>${r}</td>
        <td>${n}</td>
      </tr>`}else if(e.type===`retrait`){let t=e.data,i=t.montantRetrait||t.montant||0;h+=i,g+=`<tr style="background:#f0fff4;">
        <td><span class="badge bg-success">📥 Retrait</span></td>
        <td>${s(t.date||``)}<br><small class="text-secondary">${s(t.heure||``)}</small></td>
        <td><span class="badge bg-light font-mono" style="font-size:.65rem;">${s(t.codeEnvoi||`—`)}</span></td>
        <td class="text-left">${s(t.beneficiaire||``)}</td>
        <td class="fw-bold text-success">${u(i)}</td>
        <td><span class="badge bg-success">✅ Effectué</span></td>
        <td>${r}</td>
        <td>${n}</td>
      </tr>`}else if(e.type===`depense`){let t=e.data;g+=`<tr style="background:#fff5f5;">
        <td><span class="badge bg-danger">💸 Dép.</span></td>
        <td>${s(t.date||``)}</td>
        <td>—</td>
        <td class="text-left">${s(t.libelle||``)}</td>
        <td class="fw-bold text-danger">${u(t.montant)}</td>
        <td>—</td>
        <td>${r}</td>
        <td>${n}</td>
      </tr>`}}),g+=`</tbody></table></div>`,e.innerHTML=g,document.getElementById(`kin-totaux`).textContent=`📤 `+u(m)+` $ | 📥 `+u(h)+` $`,e.querySelectorAll(`[data-idx]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.idx,10),n=f[t];n&&await C(n)})})}async function C(t){if(!n(v)){e.error(`⛔ Suppression réservée aux admins/gestionnaires`);return}let r=t.type===`retrait`?`🗑️ Supprimer ce RETRAIT ? Le transfert source redeviendra "à servir" (le code sera de nouveau actif).`:t.type===`envoi`?`🗑️ Supprimer cet ENVOI ? ⚠️ ATTENTION : tous les retraits associés à ce transfert seront AUSSI supprimés.`:`Supprimer cette opération ?`;if(!await l(r+`<br><br><small class="text-secondary">Une notification WhatsApp sera envoyée à l'administrateur.</small>`))return;let i=t.type===`envoi`?`envoi`:t.type===`retrait`?`retrait`:`depense`;try{await p({operationType:`suppression`,typeSuppression:i,data:t.data,profil:v,agenceSource:`KIN`}),e.success(`📱 Confirmez la suppression`),w(t)}catch(t){e.error(t.message||`Erreur WhatsApp`)}}function w(t){let n=document.getElementById(`kin-liste`);if(!n)return;let r=document.createElement(`div`);r.style.cssText=`padding:12px;background:#fff3cd;border-left:4px solid #fd7e14;margin-bottom:8px;`,r.innerHTML=`
    <div style="font-size:.85rem;margin-bottom:8px;">
      ⚠️ <strong>Suppression en attente</strong><br>
      <small>Opération : ${t.type} du ${t.data.date}</small>
    </div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-danger btn-sm" id="btn-confirm-suppr" style="flex:1;">🗑️ Confirmer</button>
      <button class="btn btn-secondary btn-sm" id="btn-cancel-suppr" style="flex:1;">Annuler</button>
    </div>
  `,n.parentNode.insertBefore(r,n),document.getElementById(`btn-cancel-suppr`).addEventListener(`click`,()=>r.remove()),document.getElementById(`btn-confirm-suppr`).addEventListener(`click`,async()=>{let n=document.getElementById(`btn-confirm-suppr`);n.disabled=!0,n.textContent=`⏳ Suppression...`;try{let n=await g(t.store,t.data);n.retraitRestaure&&n.transfertRestaure?e.success(`✅ Retrait supprimé. Transfert de nouveau à servir (reste : `+u(n.transfertRestaure.nouveauReste)+` $)`):n.envoiSupprime?e.success(`✅ Envoi supprimé`+(n.retraitsSupprimes>0?` + `+n.retraitsSupprimes+` retrait(s) en cascade`:``)):e.success(`✅ Suppression effectuée`),r.remove();let i=document.getElementById(`page-container`);i&&await b(i,v)}catch(t){e.error(`Erreur : `+t.message),n.disabled=!1,n.textContent=`🗑️ Confirmer`}})}async function T(){let n=await i(`mois_actif`)||new Date().toISOString().slice(0,7),r=d(await t(`ctn_kin`),n).filter(e=>(e.reste||0)>0);if(r.sort((e,t)=>(t.date||``).localeCompare(e.date||``)),r.length===0){e.info(`Aucun transfert à servir 🎉`);return}let a=0,o=`<div class="table-responsive"><table class="table"><thead><tr>`;o+=`<th>Date</th><th>Code</th><th>Bénéficiaire</th><th class="text-end">À servir</th><th class="text-end">Reste</th><th></th>`,o+=`</tr></thead><tbody>`,r.forEach(e=>{a+=e.reste||0,o+=`<tr>
      <td>${s(e.date||``)}</td>
      <td><span class="badge bg-warning font-mono" style="font-size:.75rem;">${s(e.codeSecret||`—`)}</span></td>
      <td class="text-left">${s(e.beneficiaire||``)}</td>
      <td class="text-end">${u(e.aServir)}</td>
      <td class="text-end text-danger fw-bold">${u(e.reste)}</td>
      <td><button class="btn btn-sm btn-success" data-retrait="${e.id}">Retrait</button></td>
    </tr>`}),o+=`</tbody></table></div>`;let l=c({title:`⏳ Transferts à servir à Kinshasa`,size:`lg`,body:o,footer:`<span class="small text-secondary">${r.length} transfert(s) — Total : ${u(a)} $</span>
             <button class="btn btn-secondary btn-sm" data-action="close">Fermer</button>`}),f=l.el;f.querySelector(`[data-action="close"]`).addEventListener(`click`,l.close),f.querySelectorAll(`[data-retrait]`).forEach(e=>{e.addEventListener(`click`,async()=>{l.close(),await m({agenceLabel:`Kinshasa`,sourceStore:`ctn_kin`,profil:v,onSuccess:async()=>{let e=document.getElementById(`page-container`);e&&await b(e,v)}})})})}export{b as render};