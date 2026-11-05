import{C as e,d as t,f as n,h as r,m as i,o as a,p as o}from"./index-D12hkORu.js";import{a as s,i as c,s as l,t as u}from"./helpers-B_61C2tc.js";import{t as d}from"./modal-B0S64iRE.js";var f=null;async function p(e,t){f=t||null;let n=a(f);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">👥 Agents apporteurs</h2>

    <div class="alert alert-info">
      <strong>ℹ️ Info :</strong> Les agents listés ici sont les personnes qui apportent des fonds pour approvisionner les caisses des agences.
      ${n?``:`<br><strong>🔒 Modification réservée aux administrateurs.</strong>`}
    </div>

    ${n?`
    <div class="card">
      <div class="card-header">➕ Nouvel agent</div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <label class="form-label">Nom de l'agent *</label>
            <input type="text" id="agent-nom" class="form-control" placeholder="Ex : Louis" autocomplete="off">
          </div>
        </div>
        <button id="agent-ajouter" class="btn btn-primary btn-block mt-2">➕ Ajouter l'agent</button>
      </div>
    </div>
    `:``}

    <div class="card">
      <div class="card-header">
        <span>📋 Liste des agents</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="agent-count" class="badge bg-secondary">0</span>
          <button id="agent-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="agent-body">
        <div id="agent-liste"></div>
      </div>
    </div>
  `,n&&(document.getElementById(`agent-ajouter`).addEventListener(`click`,m),document.getElementById(`agent-nom`).addEventListener(`keydown`,e=>{e.key===`Enter`&&m()})),c(`agent-toggle`,`agent-body`),await h()}async function m(){if(!a(f)){e.error(`⛔ Réservé aux administrateurs`);return}let n=(l(`agent-nom`)||``).trim();n?(await i(`agents`)).some(e=>(e.nom||``).toLowerCase()===n.toLowerCase())?e.error(`Un agent porte déjà ce nom`):(await t(`agents`,{nom:n,actif:!0}),document.getElementById(`agent-nom`).value=``,e.success(`✅ Agent ajouté`),await h()):e.error(`Le nom est obligatoire`)}async function h(){let t=document.getElementById(`agent-liste`);if(!t)return;let c=await i(`agents`),l=c.filter(e=>e.actif!==!1),p=document.getElementById(`agent-count`);if(p&&(p.textContent=l.length+` actif(s)`),c.length===0){s(t,`Aucun agent enregistré.`);return}let m=a(f),g=`<div class="table-responsive"><table class="table"><thead><tr>`;g+=`<th>Nom</th><th>Statut</th>`+(m?`<th>Actions</th>`:``)+`</tr></thead><tbody>`,c.forEach(e=>{let t=e.actif!==!1,n=t?`<span class="badge bg-success">Actif</span>`:`<span class="badge bg-secondary">Inactif</span>`,r=m?`
      <td>
        <button class="btn btn-sm btn-outline-primary" data-edit="${e.id}">✏️</button>
        <button class="btn btn-sm btn-outline-${t?`warning`:`success`}" data-toggle="${e.id}">${t?`⏸️`:`▶️`}</button>
        <button class="btn btn-sm btn-outline-danger" data-suppr="${e.id}">🗑️</button>
      </td>`:``;g+=`<tr>
      <td class="text-left fw-bold">${u(e.nom||`—`)}</td>
      <td>${n}</td>
      ${r}
    </tr>`}),g+=`</tbody></table></div>`,t.innerHTML=g,m&&(t.querySelectorAll(`[data-edit]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=parseInt(t.dataset.edit,10),i=await o(`agents`,n);if(!i)return;let a=prompt(`Nouveau nom :`,i.nom);if(a===null)return;let s=a.trim();s?(i.nom=s,await r(`agents`,i),e.success(`Agent modifié`),await h()):e.error(`Le nom ne peut pas être vide`)})}),t.querySelectorAll(`[data-toggle]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=parseInt(t.dataset.toggle,10),i=await o(`agents`,n);i&&(i.actif=i.actif===!1,await r(`agents`,i),e.info(i.nom+` : `+(i.actif?`actif`:`inactif`)),await h())})}),t.querySelectorAll(`[data-suppr]`).forEach(t=>{t.addEventListener(`click`,async()=>{let r=parseInt(t.dataset.suppr,10);await d(`Supprimer cet agent ? Les appros déjà enregistrées garderont son nom.`)&&(await n(`agents`,r),e.success(`Agent supprimé`),await h())})}))}export{p as render};