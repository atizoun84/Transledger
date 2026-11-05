const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./modal-B0S64iRE.js","./rolldown-runtime-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{f as e,h as t,m as n,n as r}from"./firebase-xAqBbcgB.js";import{C as i,S as a,a as o,u as s}from"./index-D12hkORu.js";import{a as c,i as l,t as u}from"./helpers-B_61C2tc.js";import{t as d}from"./modal-B0S64iRE.js";async function f(e,t){!t||t.role!==`admin`?e.innerHTML=`<div class="alert alert-danger">⛔ Accès réservé aux administrateurs.</div>`:(e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">👥 Gestion des utilisateurs</h2>

    <div class="alert alert-info">
      <strong>ℹ️ Info :</strong> Validez les comptes en attente, assignez les rôles et agences. Seuls les utilisateurs <strong>actifs</strong> peuvent se connecter à l'application.
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Liste des utilisateurs</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="users-count" class="badge bg-secondary">0</span>
          <button id="users-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="users-body">
        <div id="users-liste"></div>
      </div>
    </div>
  `,l(`users-toggle`,`users-body`),await m())}async function p(){let t=n(r,`users`),i=await e(t);if(!i.exists())return[];let a=i.val();return Object.keys(a).map(e=>({uid:e,...a[e]}))}async function m(){let e=document.getElementById(`users-liste`);if(!e)return;let a=await p();if(a.length===0){c(e,`Aucun utilisateur enregistré.`),document.getElementById(`users-count`).textContent=`0`;return}a.sort((e,t)=>e.actif===t.actif?(t.createdAt||0)-(e.createdAt||0):e.actif?1:-1),document.getElementById(`users-count`).textContent=a.length;let o=`<div class="table-responsive"><table class="table"><thead><tr>`;o+=`<th>Nom / Email</th><th>Rôle</th><th>Agence</th><th>Statut</th><th>Actions</th>`,o+=`</tr></thead><tbody>`,a.forEach(e=>{let t=e.role===`admin`?`<span class="badge bg-danger">👑 Admin</span>`:e.role===`gestionnaire`?`<span class="badge bg-warning">🔑 Gestionnaire</span>`:`<span class="badge bg-primary">👤 Agent</span>`,n=e.agence===`CTN`?`<span class="badge bg-primary">🇧🇯 CTN</span>`:e.agence===`KIN`?`<span class="badge bg-success">🇨🇩 KIN</span>`:`<span class="text-secondary small">—</span>`,r=e.actif===!0?`<span class="badge bg-success">✅ Actif</span>`:`<span class="badge bg-warning">⏳ En attente</span>`;o+=`<tr>
      <td class="text-left">
        <strong>${u(e.nom||`—`)}</strong><br>
        <small class="text-secondary">${u(e.email||``)}</small>
      </td>
      <td>${t}</td>
      <td>${n}</td>
      <td>${r}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary" data-edit="${e.uid}" title="Modifier">✏️</button>
        <button class="btn btn-sm btn-outline-${e.actif?`warning`:`success`}" data-toggle="${e.uid}" title="${e.actif?`Désactiver`:`Activer`}">${e.actif?`⏸️`:`▶️`}</button>
        <button class="btn btn-sm btn-outline-danger" data-suppr="${e.uid}" title="Supprimer">🗑️</button>
      </td>
    </tr>`}),o+=`</tbody></table></div>`,e.innerHTML=o,e.querySelectorAll(`[data-edit]`).forEach(e=>{e.addEventListener(`click`,()=>h(e.dataset.edit))}),e.querySelectorAll(`[data-toggle]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.toggle,n=a.find(e=>e.uid===t);if(!n)return;let r=n.actif!==!0;r&&n.role===`agent`&&!n.agence?i.warning(`Assignez d'abord une agence à cet agent`):(await s(t,{actif:r}),i.success(r?`✅ Compte activé`:`⏸️ Compte désactivé`),await m())})}),e.querySelectorAll(`[data-suppr]`).forEach(e=>{e.addEventListener(`click`,async()=>{let o=e.dataset.suppr,s=a.find(e=>e.uid===o);s&&await d(`Supprimer le profil de <strong>${u(s.nom||s.email)}</strong> ?<br><br><small class="text-secondary">Le compte de connexion Firebase ne sera pas supprimé (cela nécessite l'admin SDK). Le profil sera retiré de la base, l'utilisateur ne pourra plus accéder à l'app.</small>`)&&(await t(n(r,`users/`+o)),i.success(`Profil supprimé`),await m())})})}async function h(e){let t=await o(e);if(!t){i.error(`Utilisateur introuvable`);return}let n=`
    <div style="margin-bottom:10px;">
      <strong>${u(t.nom||``)}</strong><br>
      <small class="text-secondary">${u(t.email||``)}</small>
    </div>

    <label class="form-label">Rôle</label>
    <select id="edit-role" class="form-select mb-2">
      <option value="agent" ${t.role===`agent`?`selected`:``}>👤 Agent</option>
      <option value="gestionnaire" ${t.role===`gestionnaire`?`selected`:``}>🔑 Gestionnaire</option>
      <option value="admin" ${t.role===`admin`?`selected`:``}>👑 Administrateur</option>
    </select>

    <label class="form-label">Agence (agents uniquement)</label>
    <select id="edit-agence" class="form-select mb-2">
      <option value="" ${t.agence?``:`selected`}>— Aucune (rôles globaux) —</option>
      <option value="CTN" ${t.agence===`CTN`?`selected`:``}>🇧🇯 Cotonou</option>
      <option value="KIN" ${t.agence===`KIN`?`selected`:``}>🇨🇩 Kinshasa</option>
    </select>

    <div class="alert alert-info small" style="margin-top:10px;">
      <strong>ℹ️ Rappel :</strong> un agent doit avoir une agence assignée pour être activé.
    </div>
  `,{openModal:r}=await a(async()=>{let{openModal:e}=await import(`./modal-B0S64iRE.js`).then(e=>e.n);return{openModal:e}},__vite__mapDeps([0,1]),import.meta.url),c=r({title:`✏️ Modifier l'utilisateur`,body:n,footer:`
      <button class="btn btn-secondary btn-sm" data-action="cancel">Annuler</button>
      <button class="btn btn-primary btn-sm" data-action="save">💾 Enregistrer</button>
    `}),l=c.el;l.querySelector(`[data-action="cancel"]`).addEventListener(`click`,c.close),l.querySelector(`[data-action="save"]`).addEventListener(`click`,async()=>{let n=l.querySelector(`#edit-role`).value,r=l.querySelector(`#edit-agence`).value;if(n===`agent`&&!r){i.error(`Un agent doit avoir une agence (CTN ou KIN)`);return}let a={role:n,agence:r||null};!t.actif&&n===`agent`&&r&&(a.actif=!0),t.actif||n!==`admin`&&n!==`gestionnaire`||(a.actif=!0),await s(e,a),i.success(`✅ Utilisateur mis à jour`),c.close(),await m()})}export{f as render};