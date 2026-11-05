import{C as e,d as t,f as n,m as r,n as i,v as a}from"./index-D12hkORu.js";import{a as o,c as s,i as c,o as l,s as u,t as d}from"./helpers-B_61C2tc.js";import{t as f}from"./modal-B0S64iRE.js";import{a as p,i as m,s as h,t as g}from"./calculs-DPAwy0MW.js";import{t as _}from"./whatsapp-CDqoXPlQ.js";var v=null;async function y(e,t){v=t||null;let n=await a(`mois_actif`)||new Date().toISOString().slice(0,7);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">🔁 Compensations inter-agences</h2>

    <div class="alert alert-info">
      <strong>ℹ️ Info :</strong> Transférez le montant encaissé par l'agence émettrice vers l'agence qui doit payer le bénéficiaire. Compensations <strong>partielles multiples</strong> possibles.
    </div>

    <div class="row">
      <div class="col-6">
        <div class="kpi-card" style="background:var(--tl-primary);">
          <div class="label">🇧🇯 CTN → 🇨🇩 KIN</div>
          <div class="value" id="comp-reste-ctn-kin">—</div>
          <div class="small-xs" style="opacity:.85;">Reste à compenser</div>
        </div>
      </div>
      <div class="col-6">
        <div class="kpi-card" style="background:var(--tl-success);">
          <div class="label">🇨🇩 KIN → 🇧🇯 CTN</div>
          <div class="value" id="comp-reste-kin-ctn">—</div>
          <div class="small-xs" style="opacity:.85;">Reste à compenser</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">➕ Nouvelle compensation</div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <label class="form-label">Sens *</label>
            <select id="comp-sens" class="form-select">
              <option value="">— Choisir —</option>
              <option value="CTN_KIN">🇧🇯 Cotonou → 🇨🇩 Kinshasa</option>
              <option value="KIN_CTN">🇨🇩 Kinshasa → 🇧🇯 Cotonou</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label class="form-label">Date *</label>
            <input type="date" id="comp-date" class="form-control" value="${l()}">
          </div>
          <div class="col-6">
            <label class="form-label">Montant ($) *</label>
            <input type="number" step="0.01" inputmode="decimal" id="comp-montant" class="form-control" placeholder="0.00">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Observation</label>
            <input type="text" id="comp-observation" class="form-control" placeholder="Ex : Compensation partielle #1/3">
          </div>
        </div>
        <button id="comp-ajouter" class="btn btn-warning btn-block mt-2">
          📲 Finaliser via WhatsApp
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Historique de ${d(h(n))}</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="comp-totaux" class="badge bg-primary">—</span>
          <button id="comp-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="comp-body">
        <div id="comp-liste"></div>
      </div>
    </div>
  `,document.getElementById(`comp-ajouter`).addEventListener(`click`,()=>x()),c(`comp-toggle`,`comp-body`),await b(),await T()}async function b(){let e=await a(`mois_actif`)||new Date().toISOString().slice(0,7),t=await g(e);document.getElementById(`comp-reste-ctn-kin`).textContent=p(t.resteCtnKin)+` $`,document.getElementById(`comp-reste-kin-ctn`).textContent=p(t.resteKinCtn)+` $`}async function x(){let t=u(`comp-sens`),n=u(`comp-date`),r=s(`comp-montant`),i=u(`comp-observation`)||``;if(!t){e.error(`Choisissez le sens de la compensation`);return}if(!n){e.error(`La date est obligatoire`);return}if(r<=0){e.error(`Le montant doit être supérieur à 0`);return}let[o,c]=t.split(`_`),l=await a(`mois_actif`)||new Date().toISOString().slice(0,7),d=await g(l),f=o===`CTN`?d.resteCtnKin:d.resteKinCtn;if(r>f+.01){e.error(`Montant supérieur au reste à compenser (`+p(f)+` $)`);return}let m={date:n,source:o,dest:c,montant:r,observation:i,auto:!1},h=document.getElementById(`comp-ajouter`);h.disabled=!0,h.textContent=`⏳ Préparation WhatsApp...`;try{await _({operationType:`depense`,data:{libelle:`Compensation `+o+` → `+c,agent:v?v.nom||v.email:``,ville:o,montant:r},profil:v,agenceSource:o}),e.success(`📱 Retour détecté. Validez la compensation.`),h.disabled=!1,h.className=`btn btn-success btn-block mt-2`,h.textContent=`✅ Valider et enregistrer`;let t=h.cloneNode(!0);h.parentNode.replaceChild(t,h),t.addEventListener(`click`,()=>S(m,t))}catch(t){e.error(t.message||`Erreur WhatsApp`),h.disabled=!1,h.className=`btn btn-warning btn-block mt-2`,h.textContent=`📲 Finaliser via WhatsApp`}}async function S(n,r){r.disabled=!0,r.textContent=`⏳ Enregistrement...`;try{let r=await a(`mois_actif`)||new Date().toISOString().slice(0,7);await t(`compensations`,{mois:r,...n,agentUid:v?v.uid:null,agentNomComplet:v&&(v.nom||v.email)||``,agentRole:v?v.role:``,createdAt:new Date().toISOString()}),e.success(`✅ Compensation enregistrée`);let i=document.getElementById(`page-container`);i&&await y(i,v)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`✅ Valider et enregistrer`}}async function C(t){if(!i(v))e.error(`⛔ Suppression réservée aux admins/gestionnaires`);else if(await f(`🗑️ Supprimer cette compensation de <strong>${p(t.montant)} $</strong> ?<br><br>
    <small class="text-secondary">Une notification WhatsApp sera envoyée à l'administrateur.</small>`))try{await _({operationType:`suppression`,typeSuppression:`compensation`,data:t,profil:v,agenceSource:t.source}),e.success(`📱 Confirmez la suppression`),w(t)}catch(t){e.error(t.message||`Erreur WhatsApp`)}}function w(t){let r=document.getElementById(`comp-liste`);if(!r)return;let i=document.createElement(`div`);i.style.cssText=`padding:12px;background:#fff3cd;border-left:4px solid #fd7e14;margin-bottom:8px;`,i.innerHTML=`
    <div style="font-size:.85rem;margin-bottom:8px;">
      ⚠️ <strong>Suppression en attente</strong><br>
      <small>Compensation ${t.source} → ${t.dest} (${p(t.montant)} $)</small>
    </div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-danger btn-sm" id="btn-confirm-suppr" style="flex:1;">🗑️ Confirmer</button>
      <button class="btn btn-secondary btn-sm" id="btn-cancel-suppr" style="flex:1;">Annuler</button>
    </div>
  `,r.parentNode.insertBefore(i,r),document.getElementById(`btn-cancel-suppr`).addEventListener(`click`,()=>i.remove()),document.getElementById(`btn-confirm-suppr`).addEventListener(`click`,async()=>{let r=document.getElementById(`btn-confirm-suppr`);r.disabled=!0,r.textContent=`⏳ Suppression...`;try{await n(`compensations`,t.id),e.success(`✅ Compensation supprimée`),i.remove();let r=document.getElementById(`page-container`);r&&await y(r,v)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`🗑️ Confirmer`}})}async function T(){let e=document.getElementById(`comp-liste`);if(!e)return;let t=await a(`mois_actif`)||new Date().toISOString().slice(0,7),n=m(await r(`compensations`),t);n.sort((e,t)=>(t.date||``).localeCompare(e.date||``));let s=document.getElementById(`comp-totaux`);if(n.length===0){o(e,`Aucune compensation enregistrée ce mois.`),s&&(s.textContent=`0`);return}let c=i(v),l=`<div class="table-responsive"><table class="table"><thead><tr>`;l+=`<th>Date</th><th>Sens</th><th>Montant</th><th>Observation</th><th>Agent</th><th></th>`,l+=`</tr></thead><tbody>`;let u=0,f=0;n.forEach(e=>{e.source===`CTN`?u+=e.montant||0:f+=e.montant||0;let t=e.source===`CTN`?`<span class="badge bg-primary">🇧🇯 CTN → 🇨🇩 KIN</span>`:`<span class="badge bg-success">🇨🇩 KIN → 🇧🇯 CTN</span>`,n=e.agentNomComplet?`<small class="text-secondary">${d(e.agentNomComplet)}</small>`:`<small class="text-secondary">—</small>`,r=c?`<button class="btn btn-sm btn-outline-danger" data-suppr="${e.id}">🗑️</button>`:`<small class="text-secondary" title="Suppression réservée aux admins">🔒</small>`;l+=`<tr>
      <td>${d(e.date||`—`)}</td>
      <td>${t}</td>
      <td class="fw-bold">${p(e.montant)}</td>
      <td class="text-left small text-secondary">${d(e.observation||`—`)}</td>
      <td>${n}</td>
      <td>${r}</td>
    </tr>`}),l+=`</tbody></table></div>`,e.innerHTML=l,s&&(s.textContent=`CTN→KIN : `+p(u)+` $ | KIN→CTN : `+p(f)+` $`),e.querySelectorAll(`[data-suppr]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.suppr,10),r=n.find(e=>e.id===t);r&&await C(r)})})}export{y as render};