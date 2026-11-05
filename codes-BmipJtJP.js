import{m as e,r as t,v as n}from"./index-D12hkORu.js";import{a as r,i,t as a}from"./helpers-B_61C2tc.js";import{a as o,i as s}from"./calculs-DPAwy0MW.js";import{n as c}from"./transfers-Ci6P5xVH.js";var l=`tous`;async function u(e){e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">⏳ Codes en attente</h2>

    <div class="kpi-grid">
      <div class="kpi-card" style="background:var(--tl-warning);">
        <div class="label">À servir</div>
        <div class="value" id="codes-kpi-reste">—</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-success);">
        <div class="label">Servi</div>
        <div class="value" id="codes-kpi-servi">—</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-danger);">
        <div class="label">Écart</div>
        <div class="value" id="codes-kpi-ecart">—</div>
      </div>
    </div>

    <div class="alert alert-info">
      <strong>ℹ️ Info :</strong> Cette page affiche <strong>automatiquement</strong> tous les transferts dont le montant n'a pas été entièrement servi (Reste &gt; 0). Cliquez sur "Retrait" pour solder un transfert.
    </div>

    <div class="d-flex gap-1 mb-2">
      <button type="button" class="btn btn-sm btn-outline-primary filtre-codes active" data-filtre="tous" style="flex:1;">Tous</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-codes" data-filtre="aservir" style="flex:1;">À servir</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-codes" data-filtre="partiels" style="flex:1;">Partiels</button>
      <button type="button" class="btn btn-sm btn-outline-primary filtre-codes" data-filtre="soldes" style="flex:1;">Soldés</button>
    </div>

    <div class="card">
      <div class="card-header">
        <span>📋 Codes reportés</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <span id="codes-count" class="badge bg-secondary">0</span>
          <button id="codes-toggle" class="btn-toggle-table">👁️ Afficher</button>
        </div>
      </div>
      <div class="card-body p-0" id="codes-body">
        <div id="codes-liste"></div>
      </div>
    </div>
  `,document.querySelectorAll(`.filtre-codes`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.filtre-codes`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),l=e.dataset.filtre,p()})}),i(`codes-toggle`,`codes-body`),await f(),await p(),t(async()=>{await f(),await p()})}async function d(){let t=await n(`mois_actif`)||new Date().toISOString().slice(0,7),r=s(await e(`kin_ctn`),t).filter(e=>(e.reste||0)>0).map(e=>({...e,direction:`kin_ctn`,sourceStore:`kin_ctn`})),i=s(await e(`ctn_kin`),t).filter(e=>(e.reste||0)>0).map(e=>({...e,direction:`ctn_kin`,sourceStore:`ctn_kin`}));return[...r,...i]}async function f(){let t=await n(`mois_actif`)||new Date().toISOString().slice(0,7),r=s(await e(`kin_ctn`),t),i=s(await e(`ctn_kin`),t),a=r.reduce((e,t)=>e+(t.reste||0),0)+i.reduce((e,t)=>e+(t.reste||0),0),c=r.reduce((e,t)=>e+(t.servi||0),0)+i.reduce((e,t)=>e+(t.servi||0),0),l=r.reduce((e,t)=>e+(t.aServir||0),0)+i.reduce((e,t)=>e+(t.aServir||0),0);document.getElementById(`codes-kpi-reste`).textContent=o(a)+` $`,document.getElementById(`codes-kpi-servi`).textContent=o(c)+` $`,document.getElementById(`codes-kpi-ecart`).textContent=o(l-c)+` $`}async function p(){let e=document.getElementById(`codes-liste`);if(!e)return;let t=await d(),n=t;l===`aservir`?n=t.filter(e=>(e.servi||0)===0):l===`partiels`?n=t.filter(e=>(e.servi||0)>0&&(e.reste||0)>0):l===`soldes`&&(n=[]);let i=document.getElementById(`codes-count`);if(i&&(i.textContent=n.length),n.length===0){r(e,`Aucun code en attente pour ce filtre.`);return}n.sort((e,t)=>(t.date||``).localeCompare(e.date||``));let s=`<div class="table-responsive"><table class="table"><thead><tr>`;s+=`<th>Direction</th><th>Date</th><th>Code secret</th><th>Bénéficiaire</th><th>À servir</th><th>Servi</th><th>Reste</th><th></th>`,s+=`</tr></thead><tbody>`,n.forEach(e=>{let t=e.direction===`kin_ctn`?`<span class="badge bg-primary">KIN → CTN</span>`:`<span class="badge bg-secondary">CTN → KIN</span>`;s+=`<tr>
      <td>${t}</td>
      <td>${a(e.date||`—`)}</td>
      <td><span class="badge bg-light font-mono" style="font-size:.7rem;">${a(e.codeSecret||`—`)}</span></td>
      <td class="text-left">${a(e.beneficiaire||`—`)}</td>
      <td>${o(e.aServir)}</td>
      <td class="text-success">${o(e.servi||0)}</td>
      <td class="fw-bold text-danger">${o(e.reste)}</td>
      <td>
        <button class="btn btn-sm btn-success" data-retrait="${e.id}" data-store="${e.sourceStore}" data-agence="${e.direction===`kin_ctn`?`Cotonou`:`Kinshasa`}">
          💵 Retrait
        </button>
      </td>
    </tr>`}),s+=`</tbody></table></div>`,e.innerHTML=s,e.querySelectorAll(`[data-retrait]`).forEach(e=>{e.addEventListener(`click`,async()=>{await c({agenceLabel:e.dataset.agence,sourceStore:e.dataset.store,onSuccess:async()=>{await f(),await p()}})})})}export{u as render};