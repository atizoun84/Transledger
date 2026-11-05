import{C as e,d as t,f as n,m as r,n as i,v as a}from"./index-D12hkORu.js";import{a as o,c as s,i as c,o as l,s as u,t as d}from"./helpers-B_61C2tc.js";import{t as f}from"./modal-B0S64iRE.js";import{a as p,i as m,s as h}from"./calculs-DPAwy0MW.js";import{t as g}from"./whatsapp-CDqoXPlQ.js";var _=null;async function v(e,t){_=t||null;let n=await a(`mois_actif`)||new Date().toISOString().slice(0,7),i=(await r(`agents`)).filter(e=>e.actif!==!1);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">💼 Approvisionnement</h2>

    <div class="card card-tl">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">Date *</label>
            <input type="date" id="appro-date" class="form-control" value="${l()}">
          </div>
          <div class="col-6">
            <label class="form-label">Montant ($) *</label>
            <input type="number" step="0.01" id="appro-montant" class="form-control" placeholder="0.00">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Agence à approvisionner *</label>
            <div class="d-flex gap-2">
              <label style="flex:1;display:flex;align-items:center;gap:6px;padding:8px;border:1px solid var(--tl-border);border-radius:8px;">
                <input type="radio" name="appro-agence" value="CTN">
                <span>🇧🇯 Cotonou</span>
              </label>
              <label style="flex:1;display:flex;align-items:center;gap:6px;padding:8px;border:1px solid var(--tl-border);border-radius:8px;">
                <input type="radio" name="appro-agence" value="KIN">
                <span>🇨🇩 Kinshasa</span>
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Agent apporteur *</label>
            <select id="appro-agent" class="form-select">
              <option value="">— Choisir un agent —</option>
              ${i.map(e=>`<option value="${d(e.nom)}">${d(e.nom)}</option>`).join(``)}
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Libellé</label>
            <input type="text" id="appro-libelle" class="form-control" placeholder="Ex : Apport caisse KIN">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Observation</label>
            <textarea id="appro-observation" class="form-control" rows="2" placeholder="Notes libres…"></textarea>
          </div>
        </div>
        <button id="appro-ajouter" class="btn btn-warning btn-block mt-2">
          📲 Finaliser via WhatsApp
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Transactions de ${d(h(n))}</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="appro-total" class="badge bg-primary">—</span>
          <button id="appro-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="appro-body">
        <div id="appro-liste"></div>
      </div>
    </div>
  `,document.getElementById(`appro-ajouter`).addEventListener(`click`,()=>y()),c(`appro-toggle`,`appro-body`),await C()}async function y(){let t=u(`appro-date`),n=document.querySelector(`input[name="appro-agence"]:checked`),r=n?n.value:``,i=s(`appro-montant`),a=document.getElementById(`appro-agent`)?.value||``,o=u(`appro-libelle`)||``,c=u(`appro-observation`)||``;if(!t){e.error(`La date est obligatoire`);return}if(!r){e.error(`Choisissez une agence`);return}if(i<=0){e.error(`Le montant doit être supérieur à 0`);return}if(!a){e.error(`Choisissez un agent apporteur`);return}let l={date:t,agence:r,montant:i,agentNom:a,libelle:o,observation:c},d=document.getElementById(`appro-ajouter`);d.disabled=!0,d.textContent=`⏳ Préparation WhatsApp...`;try{await g({type:`appro`,data:l,profil:_,agenceSource:r}),e.success(`📱 Retour détecté. Validez l'opération.`),d.disabled=!1,d.className=`btn btn-success btn-block mt-2`,d.textContent=`✅ Valider et enregistrer`;let t=d.cloneNode(!0);d.parentNode.replaceChild(t,d),t.addEventListener(`click`,()=>b(l,t))}catch(t){e.error(t.message||`Erreur WhatsApp`),d.disabled=!1,d.className=`btn btn-warning btn-block mt-2`,d.textContent=`📲 Finaliser via WhatsApp`}}async function b(n,r){r.disabled=!0,r.textContent=`⏳ Enregistrement...`;try{let r=await a(`mois_actif`)||new Date().toISOString().slice(0,7);await t(`appro`,{mois:r,...n,agentUid:_?.uid||null,agentNomComplet:_?.nom||_?.email||``,agentRole:_?.role||``,createdAt:new Date().toISOString()}),e.success(`✅ Approvisionnement enregistré`);let i=document.getElementById(`page-container`);i&&await v(i,_)}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`✅ Valider et enregistrer`}}async function x(t){if(!i(_))e.error(`⛔ Seuls les administrateurs et gestionnaires peuvent supprimer.`);else if(await f(`Supprimer cet approvisionnement de <strong>${p(t.montant)} $</strong> ?<br><br>
    <small class="text-secondary">Une notification WhatsApp sera envoyée à l'administrateur pour confirmation.</small>`))try{await g({type:`suppression`,typeSuppression:`appro`,data:t,profil:_,agenceSource:t.agence}),e.success(`📱 Retour détecté. Confirmez la suppression.`),await S(t)}catch(t){e.error(t.message||`Erreur WhatsApp`)}}async function S(t){let r=document.getElementById(`appro-liste`);if(!r)return;let i=document.createElement(`div`);i.style.cssText=`padding:12px;background:#fff3cd;border-left:4px solid #fd7e14;margin-bottom:8px;`,i.innerHTML=`
    <div style="font-size:.85rem;margin-bottom:8px;">
      ⚠️ <strong>Suppression en attente de confirmation</strong><br>
      <small>Opération : Approvisionnement de ${p(t.montant)} $ (${t.date})</small>
    </div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-danger btn-sm" id="btn-confirm-suppr" style="flex:1;">🗑️ Confirmer la suppression</button>
      <button class="btn btn-secondary btn-sm" id="btn-cancel-suppr" style="flex:1;">Annuler</button>
    </div>
  `,r.parentNode.insertBefore(i,r),document.getElementById(`btn-cancel-suppr`).addEventListener(`click`,()=>i.remove()),document.getElementById(`btn-confirm-suppr`).addEventListener(`click`,async()=>{let r=document.getElementById(`btn-confirm-suppr`);r.disabled=!0,r.textContent=`⏳ Suppression...`;try{await n(`appro`,t.id),e.success(`✅ Suppression effectuée`),i.remove(),await C()}catch(t){e.error(`Erreur : `+t.message),r.disabled=!1,r.textContent=`🗑️ Confirmer la suppression`}})}async function C(){let e=document.getElementById(`appro-liste`);if(!e)return;let t=await a(`mois_actif`)||new Date().toISOString().slice(0,7),n=m(await r(`appro`),t);if(n.length===0){o(e,`Aucune transaction ce mois.`),document.getElementById(`appro-total`).textContent=`Total : 0.00 $`;return}n.sort((e,t)=>(t.date||``).localeCompare(e.date||``)),window._approItems=n;let s=i(_),c=0,l=0,u=`<div class="table-responsive"><table class="table"><thead><tr>`;u+=`<th>Date</th><th>Agence</th><th>Agent</th><th>Libellé</th><th>Montant</th><th>Créé par</th><th></th>`,u+=`</tr></thead><tbody>`,n.forEach(e=>{e.agence===`CTN`?c+=e.montant||0:e.agence===`KIN`&&(l+=e.montant||0);let t=e.agence===`CTN`?`<span class="badge bg-primary">🇧🇯 CTN</span>`:`<span class="badge bg-success">🇨🇩 KIN</span>`,n=e.agentNomComplet?`<small class="text-secondary">${d(e.agentNomComplet)}</small>`:`<small class="text-secondary">—</small>`,r=s?`<button class="btn btn-sm btn-outline-danger" data-suppr="${e.id}">🗑️</button>`:`<small class="text-secondary" title="Suppression réservée aux admins">🔒</small>`;u+=`<tr>
      <td>${d(e.date||`—`)}</td>
      <td>${t}</td>
      <td>${d(e.agentNom||`—`)}</td>
      <td class="text-left">${d(e.libelle||`—`)}</td>
      <td class="fw-bold">${p(e.montant)}</td>
      <td>${n}</td>
      <td>${r}</td>
    </tr>`}),u+=`</tbody></table></div>`,e.innerHTML=u,document.getElementById(`appro-total`).textContent=`CTN : `+p(c)+` $ | KIN : `+p(l)+` $`,e.querySelectorAll(`[data-suppr]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.dataset.suppr,10),r=n.find(e=>e.id===t);r&&await x(r)})})}export{v as render};