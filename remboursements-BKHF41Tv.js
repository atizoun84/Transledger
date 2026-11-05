import{C as e,d as t,f as n,m as r,n as i,v as a}from"./index-D12hkORu.js";import{a as o,c as s,i as c,o as l,s as u,t as d}from"./helpers-B_61C2tc.js";import{t as f}from"./modal-B0S64iRE.js";import{a as p,i as m,n as h,s as g}from"./calculs-DPAwy0MW.js";import{t as _}from"./whatsapp-CDqoXPlQ.js";var v=null;async function y(e,t){v=t||null;let n=await a(`mois_actif`)||new Date().toISOString().slice(0,7);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">💸 Remboursements</h2>

    <div class="alert alert-warning">
      <strong>⚠️ Attention :</strong> Un remboursement <strong>débite le solde</strong> de l'agence source. Choisissez bien la source (Cotonou, Kinshasa, ou répartition 50/50).
    </div>

    <div class="card card-tl">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">Date *</label>
            <input type="date" id="remb-date" class="form-control" value="${l()}">
          </div>
          <div class="col-6">
            <label class="form-label">Montant ($) *</label>
            <input type="number" step="0.01" inputmode="decimal" id="remb-montant" class="form-control" placeholder="0.00">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label class="form-label">Source à débiter *</label>
            <select id="remb-source" class="form-select">
              <option value="">— Choisir —</option>
              <option value="CTN">🇧🇯 Cotonou uniquement</option>
              <option value="KIN">🇨🇩 Kinshasa uniquement</option>
              <option value="BOTH">🌍 Les deux (50% / 50%)</option>
            </select>
          </div>
        </div>

        <div id="remb-solde-info" style="display:none;margin-top:8px;"></div>

        <div class="row mt-2">
          <div class="col-12">
            <label class="form-label">Bénéficiaire (nom du client)</label>
            <input type="text" id="remb-benef" class="form-control" placeholder="Nom du client remboursé">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label class="form-label">Motif *</label>
            <select id="remb-motif" class="form-select">
              <option value="">— Choisir —</option>
              <option value="annulation">Annulation de transfert</option>
              <option value="litige">Litige</option>
              <option value="erreur">Erreur de saisie</option>
              <option value="non-retrait">Non-retrait (code expiré)</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <input type="checkbox" id="remb-use-custom" style="width:16px;height:16px;cursor:pointer;">
              <label for="remb-use-custom" style="font-size:.72rem;font-weight:600;color:#6c757d;cursor:pointer;margin:0;">
                Motif personnalisé
              </label>
            </div>
            <input type="text" id="remb-motif-custom" class="form-control" placeholder="Saisir un motif libre (ex: Client décédé)" disabled style="background:#e9ecef;opacity:.6;">
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label class="form-label">Observation</label>
            <input type="text" id="remb-obs" class="form-control" placeholder="Notes libres…">
          </div>
        </div>

        <button id="remb-ajouter" class="btn btn-warning btn-block mt-2">
          📲 Finaliser via WhatsApp
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Remboursements de ${d(g(n))}</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="remb-total" class="badge bg-primary">—</span>
          <button id="remb-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="remb-body">
        <div id="remb-liste"></div>
      </div>
    </div>
  `,document.getElementById(`remb-ajouter`).addEventListener(`click`,()=>x()),document.getElementById(`remb-source`).addEventListener(`change`,b),c(`remb-toggle`,`remb-body`);let r=document.getElementById(`remb-use-custom`),i=document.getElementById(`remb-motif`),o=document.getElementById(`remb-motif-custom`);r.addEventListener(`change`,()=>{r.checked?(o.disabled=!1,o.style.background=``,o.style.opacity=``,o.focus(),i.disabled=!0,i.style.background=`#e9ecef`,i.style.opacity=`.6`,i.value=``):(o.disabled=!0,o.style.background=`#e9ecef`,o.style.opacity=`.6`,o.value=``,i.disabled=!1,i.style.background=``,i.style.opacity=``)}),await T()}async function b(){let e=u(`remb-source`),t=document.getElementById(`remb-solde-info`);if(!t)return;if(!e){t.style.display=`none`;return}let n=await a(`mois_actif`)||new Date().toISOString().slice(0,7),r=await h(`CTN`,n),i=await h(`KIN`,n),o=``;if(e===`CTN`){let e=r>=0?`#d1e7dd`:`#f8d7da`,t=r>=0?`#198754`:`#dc3545`;o=`<div style="padding:10px 12px;background:${e};border-left:4px solid ${t};border-radius:8px;">
      <div style="font-size:.7rem;color:#666;text-transform:uppercase;font-weight:600;">💵 Solde disponible CTN</div>
      <div style="font-size:1.3rem;font-weight:800;color:${t};">${p(r)} $</div>
    </div>`}else if(e===`KIN`){let e=i>=0?`#d1e7dd`:`#f8d7da`,t=i>=0?`#198754`:`#dc3545`;o=`<div style="padding:10px 12px;background:${e};border-left:4px solid ${t};border-radius:8px;">
      <div style="font-size:.7rem;color:#666;text-transform:uppercase;font-weight:600;">💵 Solde disponible KIN</div>
      <div style="font-size:1.3rem;font-weight:800;color:${t};">${p(i)} $</div>
    </div>`}else e===`BOTH`&&(o=`<div style="display:flex;gap:8px;">
      <div style="flex:1;padding:10px 12px;background:#d1e7dd;border-left:4px solid #198754;border-radius:8px;">
        <div style="font-size:.65rem;color:#666;text-transform:uppercase;font-weight:600;">CTN</div>
        <div style="font-size:1.1rem;font-weight:800;color:#198754;">${p(r)} $</div>
      </div>
      <div style="flex:1;padding:10px 12px;background:#d1e7dd;border-left:4px solid #198754;border-radius:8px;">
        <div style="font-size:.65rem;color:#666;text-transform:uppercase;font-weight:600;">KIN</div>
        <div style="font-size:1.1rem;font-weight:800;color:#198754;">${p(i)} $</div>
      </div>
    </div>
    <small class="text-secondary" style="font-size:.7rem;display:block;margin-top:4px;">Répartition : 50% sur chaque caisse</small>`);t.innerHTML=o,t.style.display=`block`}async function x(){let t=u(`remb-date`),n=s(`remb-montant`),r=u(`remb-source`),i=u(`remb-benef`)||``,o=u(`remb-obs`)||``,c=document.getElementById(`remb-use-custom`),l=``;if(c&&c.checked){if(l=(u(`remb-motif-custom`)||``).trim(),!l){e.error(`Saisissez un motif personnalisé`);return}}else if(l=u(`remb-motif`),!l){e.error(`Choisissez un motif`);return}if(!t){e.error(`La date est obligatoire`);return}if(n<=0){e.error(`Le montant doit être supérieur à 0`);return}if(!r){e.error(`Choisissez la source à débiter`);return}let d=0,m=0;r===`CTN`?d=n:r===`KIN`?m=n:(d=n/2,m=n/2);let g=await a(`mois_actif`)||new Date().toISOString().slice(0,7),y=await h(`CTN`,g),b=await h(`KIN`,g);if(d>y&&!await f(`⚠️ Le solde CTN (${p(y)} $) est insuffisant pour ce débit de ${p(d)} $.<br><br>Continuer quand même ?`)||m>b&&!await f(`⚠️ Le solde KIN (${p(b)} $) est insuffisant pour ce débit de ${p(m)} $.<br><br>Continuer quand même ?`))return;let x={date:t,montant:n,source:r,montantCTN:d,montantKIN:m,beneficiaire:i,motif:l,observation:o},C=document.getElementById(`remb-ajouter`);C.disabled=!0,C.textContent=`⏳ Préparation WhatsApp...`;try{await _({operationType:`remboursement`,data:x,profil:v,agenceSource:r===`BOTH`?`CTN`:r}),e.success(`📱 Retour détecté. Validez le remboursement.`),C.disabled=!1,C.className=`btn btn-success btn-block mt-2`,C.textContent=`✅ Valider et enregistrer`;let t=C.cloneNode(!0);C.parentNode.replaceChild(t,C),t.addEventListener(`click`,()=>S(x,t))}catch(t){e.error(t.message||`Erreur WhatsApp`),C.disabled=!1,C.className=`btn btn-warning btn-block mt-2`,C.textContent=`📲 Finaliser via WhatsApp`}}async function S(n,r){r.disabled=!0,r.textContent=`⏳ Enregistrement...`;try{let r=await a(`mois_actif`)||new Date().toISOString().slice(0,7);await t(`remboursements`,{mois:r,...n,agentUid:v?v.uid:null,agentNomComplet:v&&(v.nom||v.email)||``,agentRole:v?v.role:``,createdAt:new Date().toISOString()}),e.success(`✅ Remboursement enregistré`);let i=document.getElementById(`page-container`);i&&await y(i,v)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`✅ Valider et enregistrer`}}async function C(t){if(!i(v))e.error(`⛔ Réservé aux admins/gestionnaires`);else if(await f(`Supprimer ce remboursement de <strong>${p(t.montant)} $</strong> ?<br><br>
    <small class="text-secondary">Le solde sera RECRÉDITÉ (l'inverse du débit).</small>`))try{await _({operationType:`suppression`,typeSuppression:`remboursement`,data:t,profil:v,agenceSource:t.source===`BOTH`?`CTN`:t.source}),e.success(`📱 Confirmez la suppression`),w(t)}catch(t){e.error(t.message||`Erreur WhatsApp`)}}function w(t){let r=document.getElementById(`remb-liste`);if(!r)return;let i=document.createElement(`div`);i.style.cssText=`padding:12px;background:#fff3cd;border-left:4px solid #fd7e14;margin-bottom:8px;`,i.innerHTML=`
    <div style="font-size:.85rem;margin-bottom:8px;">
      ⚠️ <strong>Suppression en attente</strong><br>
      <small>Remboursement de ${p(t.montant)} $ (${t.source})</small>
    </div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-danger btn-sm" id="btn-confirm-suppr" style="flex:1;">🗑️ Confirmer</button>
      <button class="btn btn-secondary btn-sm" id="btn-cancel-suppr" style="flex:1;">Annuler</button>
    </div>
  `,r.parentNode.insertBefore(i,r),document.getElementById(`btn-cancel-suppr`).addEventListener(`click`,()=>i.remove()),document.getElementById(`btn-confirm-suppr`).addEventListener(`click`,async()=>{let r=document.getElementById(`btn-confirm-suppr`);r.disabled=!0,r.textContent=`⏳ Suppression...`;try{await n(`remboursements`,t.id),e.success(`✅ Remboursement supprimé (solde recrédité)`),i.remove();let r=document.getElementById(`page-container`);r&&await y(r,v)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`🗑️ Confirmer`}})}async function T(){let e=document.getElementById(`remb-liste`);if(!e)return;let t=await a(`mois_actif`)||new Date().toISOString().slice(0,7),n=m(await r(`remboursements`),t);if(n.sort((e,t)=>(t.date||``).localeCompare(e.date||``)),n.length===0){o(e,`Aucun remboursement ce mois.`),document.getElementById(`remb-total`).textContent=`0.00 $`;return}let s=i(v),c=0,l=`<div class="table-responsive"><table class="table"><thead><tr>`;l+=`<th>Date</th><th>Source</th><th>Montant</th><th>Bénéficiaire</th><th>Motif</th><th>Agent</th><th></th>`,l+=`</tr></thead><tbody>`;let u={annulation:`Annulation`,litige:`Litige`,erreur:`Erreur de saisie`,"non-retrait":`Non-retrait`,autre:`Autre`};n.forEach(e=>{c+=e.montant||0;let t=``;t=e.source===`CTN`?`<span class="badge bg-primary">🇧🇯 CTN</span>`:e.source===`KIN`?`<span class="badge bg-success">🇨🇩 KIN</span>`:`<span class="badge bg-secondary">🌍 50/50</span>`;let n=e.agentNomComplet?`<small class="text-secondary">${d(e.agentNomComplet)}</small>`:`<small class="text-secondary">—</small>`,r=s?`<button class="btn btn-sm btn-outline-danger" data-suppr="${e.id}">🗑️</button>`:`<small class="text-secondary">🔒</small>`;l+=`<tr>
      <td>${d(e.date||`—`)}</td>
      <td>${t}</td>
      <td class="fw-bold text-danger">${p(e.montant)}</td>
      <td class="text-left">${d(e.beneficiaire||`—`)}</td>
      <td><small>${u[e.motif]||e.motif||`—`}</small></td>
      <td>${n}</td>
      <td>${r}</td>
    </tr>`}),l+=`</tbody></table></div>`,e.innerHTML=l,document.getElementById(`remb-total`).textContent=`Total : `+p(c)+` $`,e.querySelectorAll(`[data-suppr]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.suppr,10),r=n.find(e=>e.id===t);r&&await C(r)})})}export{y as render};