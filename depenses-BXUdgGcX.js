import{C as e,d as t,f as n,m as r,n as i,v as a}from"./index-D12hkORu.js";import{a as o,c as s,i as c,o as l,s as u,t as d}from"./helpers-B_61C2tc.js";import{t as f}from"./modal-B0S64iRE.js";import{a as p,i as m,s as h}from"./calculs-DPAwy0MW.js";import{t as g}from"./whatsapp-CDqoXPlQ.js";var _=null;async function v(e,t){_=t||null;let n=await a(`mois_actif`)||new Date().toISOString().slice(0,7);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">💸 Dépenses</h2>

    <div class="card card-tl">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">Ville *</label>
            <select id="dep-ville" class="form-select">
              <option value="CTN">Cotonou (CTN)</option>
              <option value="KIN">Kinshasa (KIN)</option>
              <option value="AUTRE">Autres</option>
            </select>
          </div>
          <div class="col-6">
            <label class="form-label">Date *</label>
            <input type="date" id="dep-date" class="form-control" value="${l()}">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Libellé *</label>
            <input type="text" id="dep-libelle" class="form-control" placeholder="Ex : Carburant, loyer…">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label class="form-label">Montant ($) *</label>
            <input type="number" step="0.01" id="dep-montant" class="form-control" placeholder="0.00">
          </div>
          <div class="col-6">
            <label class="form-label">Agent</label>
            <input type="text" id="dep-agent" class="form-control" placeholder="Nom">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Observation</label>
            <input type="text" id="dep-obs" class="form-control" placeholder="Notes libres…">
          </div>
        </div>
        <button id="dep-ajouter" class="btn btn-warning btn-block mt-2">
          📲 Finaliser via WhatsApp
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Dépenses de ${d(h(n))}</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="dep-total" class="badge bg-primary">—</span>
          <button id="dep-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="dep-body">
        <div id="dep-liste"></div>
      </div>
    </div>
  `,document.getElementById(`dep-ajouter`).addEventListener(`click`,()=>y()),c(`dep-toggle`,`dep-body`),await C()}async function y(){let t=u(`dep-ville`),n=u(`dep-date`),r=u(`dep-libelle`),i=s(`dep-montant`),a=u(`dep-agent`)||``,o=u(`dep-obs`)||``;if(!n){e.error(`La date est obligatoire`);return}if(!r){e.error(`Le libellé est obligatoire`);return}if(i<=0){e.error(`Le montant doit être supérieur à 0`);return}let c={ville:t,date:n,libelle:r,montant:i,agent:a,obs:o},l=document.getElementById(`dep-ajouter`);l.disabled=!0,l.textContent=`⏳ Préparation WhatsApp...`;try{await g({operationType:`depense`,data:c,profil:_,agenceSource:t===`KIN`?`KIN`:`CTN`}),e.success(`📱 Retour détecté. Validez l'opération.`),l.disabled=!1,l.className=`btn btn-success btn-block mt-2`,l.textContent=`✅ Valider et enregistrer`;let n=l.cloneNode(!0);l.parentNode.replaceChild(n,l),n.addEventListener(`click`,()=>b(c,n))}catch(t){e.error(t.message||`Erreur WhatsApp`),l.disabled=!1,l.className=`btn btn-warning btn-block mt-2`,l.textContent=`📲 Finaliser via WhatsApp`}}async function b(n,r){r.disabled=!0,r.textContent=`⏳ Enregistrement...`;try{let r=await a(`mois_actif`)||new Date().toISOString().slice(0,7);await t(`depenses`,{mois:r,...n,agentUid:_?.uid||null,agentNomComplet:_?.nom||_?.email||``,agentRole:_?.role||``,createdAt:new Date().toISOString()}),e.success(`✅ Dépense enregistrée`);let i=document.getElementById(`page-container`);i&&await v(i,_)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`✅ Valider et enregistrer`}}async function x(t){if(!i(_))e.error(`⛔ Seuls les administrateurs et gestionnaires peuvent supprimer.`);else if(await f(`Supprimer cette dépense de <strong>${p(t.montant)} $</strong> ?<br><br>
    <small class="text-secondary">Une notification WhatsApp sera envoyée à l'administrateur pour confirmation.</small>`))try{await g({operationType:`suppression`,typeSuppression:`depense`,data:t,profil:_,agenceSource:t.ville===`KIN`?`KIN`:`CTN`}),e.success(`📱 Retour détecté. Confirmez la suppression.`),await S(t)}catch(t){e.error(t.message||`Erreur WhatsApp`)}}async function S(t){let r=document.getElementById(`dep-liste`);if(!r)return;let i=document.createElement(`div`);i.style.cssText=`padding:12px;background:#fff3cd;border-left:4px solid #fd7e14;margin-bottom:8px;`,i.innerHTML=`
    <div style="font-size:.85rem;margin-bottom:8px;">
      ⚠️ <strong>Suppression en attente de confirmation</strong><br>
      <small>Dépense : ${p(t.montant)} $ — ${t.libelle||``} (${t.date})</small>
    </div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-danger btn-sm" id="btn-confirm-suppr" style="flex:1;">🗑️ Confirmer la suppression</button>
      <button class="btn btn-secondary btn-sm" id="btn-cancel-suppr" style="flex:1;">Annuler</button>
    </div>
  `,r.parentNode.insertBefore(i,r),document.getElementById(`btn-cancel-suppr`).addEventListener(`click`,()=>i.remove()),document.getElementById(`btn-confirm-suppr`).addEventListener(`click`,async()=>{let r=document.getElementById(`btn-confirm-suppr`);r.disabled=!0,r.textContent=`⏳ Suppression...`;try{await n(`depenses`,t.id),e.success(`✅ Suppression effectuée`),i.remove(),await C()}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`🗑️ Confirmer la suppression`}})}async function C(){let e=document.getElementById(`dep-liste`);if(!e)return;let t=await a(`mois_actif`)||new Date().toISOString().slice(0,7),n=m(await r(`depenses`),t);if(n.length===0){o(e,`Aucune dépense ce mois.`),document.getElementById(`dep-total`).textContent=`Total : 0.00 $`;return}n.sort((e,t)=>(t.date||``).localeCompare(e.date||``)),window._depItems=n;let s=i(_),c=0,l=0,u=0,f=`<div class="table-responsive"><table class="table"><thead><tr>`;f+=`<th>Ville</th><th>Date</th><th>Libellé</th><th>Montant</th><th>Agent</th><th>Créé par</th><th></th>`,f+=`</tr></thead><tbody>`,n.forEach(e=>{e.ville===`CTN`?c+=e.montant||0:e.ville===`KIN`?l+=e.montant||0:u+=e.montant||0;let t=e.ville===`CTN`?`<span class="badge bg-primary">CTN</span>`:e.ville===`KIN`?`<span class="badge bg-success">KIN</span>`:`<span class="badge bg-secondary">Autre</span>`,n=e.agentNomComplet?`<small class="text-secondary">${d(e.agentNomComplet)}</small>`:`<small class="text-secondary">—</small>`,r=s?`<button class="btn btn-sm btn-outline-danger" data-suppr="${e.id}">🗑️</button>`:`<small class="text-secondary" title="Suppression réservée aux admins">🔒</small>`;f+=`<tr>
      <td>${t}</td>
      <td>${d(e.date||`—`)}</td>
      <td class="text-left">${d(e.libelle||`—`)}</td>
      <td class="fw-bold text-danger">${p(e.montant)}</td>
      <td>${d(e.agent||`—`)}</td>
      <td>${n}</td>
      <td>${r}</td>
    </tr>`}),f+=`</tbody></table></div>`,e.innerHTML=f,document.getElementById(`dep-total`).textContent=`CTN : `+p(c)+` | KIN : `+p(l)+` | Autres : `+p(u),e.querySelectorAll(`[data-suppr]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.suppr,10),r=n.find(e=>e.id===t);r&&await x(r)})})}export{v as render};