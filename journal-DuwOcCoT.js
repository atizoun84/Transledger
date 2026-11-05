import{C as e,m as t,v as n}from"./index-D12hkORu.js";import{o as r,t as i}from"./helpers-B_61C2tc.js";import{a,o}from"./calculs-DPAwy0MW.js";function s(e){if(e)return e+`-01`;let t=new Date;return t.getFullYear()+`-`+String(t.getMonth()+1).padStart(2,`0`)+`-01`}function c(e,t,n){if(!e)return!1;let r=String(e).slice(0,10);if(/^\d{2}\/\d{2}\/\d{4}$/.test(r)){let[e,t,n]=r.split(`/`);r=n+`-`+t+`-`+e}return!(t&&r<t||n&&r>n)}async function l(e,n,r){let i=[],a=await t(`kin_ctn`),o=await t(`ctn_kin`),s=await t(`retraits`),l=await t(`compensations`),u=await t(`depenses`),d=await t(`appro`);(e===`CTN`?o:a).forEach(t=>{c(t.date,n,r)&&i.push({date:t.date,heure:t.heure||``,type:`envoi`,libelle:`Envoi `+e+` → `+(e===`CTN`?`KIN`:`CTN`)+` — `+(t.beneficiaire||``),code:t.code||``,entree:t.recu||0,sortie:0})});let f=e===`CTN`?`kin_ctn`:`ctn_kin`;return s.filter(e=>e.sourceStore===f).forEach(t=>{c(t.date,n,r)&&i.push({date:t.date,heure:t.heure||``,type:`retrait`,libelle:`Retrait — `+(t.beneficiaire||t.expediteur||``)+` (`+(t.agence||e)+`)`,code:t.codeEnvoi||``,entree:0,sortie:t.montantRetrait||0})}),l.forEach(t=>{c(t.date,n,r)&&(t.source===e&&i.push({date:t.date,heure:``,type:`comp_sortie`,libelle:`Compensation envoyée → `+t.dest,code:``,entree:0,sortie:t.montant||0}),t.dest===e&&i.push({date:t.date,heure:``,type:`comp_entree`,libelle:`Compensation reçue ← `+t.source,code:``,entree:t.montant||0,sortie:0}))}),d.filter(t=>t.agence===e).forEach(e=>{c(e.date,n,r)&&i.push({date:e.date,heure:``,type:`appro`,libelle:`Approvisionnement — `+(e.agentNom||``)+(e.libelle?` (`+e.libelle+`)`:``),code:``,entree:e.montant||0,sortie:0})}),u.forEach(t=>{c(t.date,n,r)&&(e===`CTN`&&(t.ville===`CTN`||t.ville===`AUTRE`)?i.push({date:t.date,heure:``,type:`depense`,libelle:`Dépense — `+(t.libelle||``)+(t.ville===`AUTRE`?` [Autre]`:``),code:``,entree:0,sortie:t.montant||0}):e===`KIN`&&t.ville===`KIN`&&i.push({date:t.date,heure:``,type:`depense`,libelle:`Dépense — `+(t.libelle||``),code:``,entree:0,sortie:t.montant||0}))}),i.sort((e,t)=>(e.date||``).localeCompare(t.date||``)),i}function u(e){if(e.length===0)return`<div class="p-3 text-secondary small">Aucune opération sur cette période.</div>`;let t=0,n=0,r=`<div class="table-responsive"><table class="table" style="font-size:.82rem;"><thead><tr>`;return r+=`<th>Date</th><th>Type</th><th>Libellé</th><th>Code</th><th class="text-end">Entrée</th><th class="text-end">Sortie</th>`,r+=`</tr></thead><tbody>`,e.forEach(e=>{t+=e.entree||0,n+=e.sortie||0;let o=``;e.type===`envoi`?o=`<span class="badge bg-primary">Envoi</span>`:e.type===`retrait`?o=`<span class="badge bg-success">Retrait</span>`:e.type===`comp_entree`?o=`<span class="badge bg-info">Comp. ←</span>`:e.type===`comp_sortie`?o=`<span class="badge bg-warning">Comp. →</span>`:e.type===`appro`?o=`<span class="badge bg-secondary">Appro.</span>`:e.type===`depense`&&(o=`<span class="badge bg-danger">Dépense</span>`),r+=`<tr>`,r+=`<td class="text-nowrap">`+i(e.date||``)+(e.heure?`<br><small class="text-secondary">`+i(e.heure)+`</small>`:``)+`</td>`,r+=`<td>`+o+`</td>`,r+=`<td class="text-left">`+i(e.libelle||``)+`</td>`,r+=`<td><small class="font-mono">`+i(e.code||`—`)+`</small></td>`,r+=`<td class="text-end text-success">`+(e.entree?a(e.entree):`—`)+`</td>`,r+=`<td class="text-end text-danger">`+(e.sortie?a(e.sortie):`—`)+`</td>`,r+=`</tr>`}),r+=`</tbody><tfoot class="journal-totaux">`,r+=`<tr><td colspan="4" class="text-end">TOTAUX (`+e.length+`)</td>`,r+=`<td class="text-end text-success">`+a(t)+`</td>`,r+=`<td class="text-end text-danger">`+a(n)+`</td></tr>`,r+=`<tr><td colspan="4" class="text-end">SOLDE PÉRIODE</td>`,r+=`<td colspan="2" class="text-end">`+a(t-n)+`</td></tr>`,r+=`</tfoot></table></div>`,r}async function d(e){e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3 no-print" style="font-size:1.05rem;">📒 Journal des opérations</h2>

    <!-- FILTRES -->
    <div class="card no-print">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">Du *</label>
            <input type="date" id="journal-debut" class="form-control" value="${s(await n(`mois_actif`)||new Date().toISOString().slice(0,7))}">
          </div>
          <div class="col-6">
            <label class="form-label">Au *</label>
            <input type="date" id="journal-fin" class="form-control" value="${r()}">
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button id="journal-actualiser" class="btn btn-primary btn-block">🔍 Actualiser</button>
          </div>
          <div class="col-6">
            <button id="journal-imprimer" class="btn btn-success btn-block">🖨️ Imprimer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ZONE À IMPRIMER -->
    <div id="journal-print-area">

      <!-- En-tête pro (visible seulement à l'impression) -->
      <div class="journal-header-print journal-entete-pro">
        <h1>AFRI LINK LEDGER</h1>
        <div class="sub">Système de gestion des transferts — Cotonou ↔ Kinshasa</div>
        <div class="sub" style="margin-top:8px;">
          <strong>JOURNAL DES OPÉRATIONS</strong> — Du <span id="journal-print-debut">—</span> au <span id="journal-print-fin">—</span>
        </div>
      </div>

      <!-- 2 tableaux comparatifs -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header" style="background:var(--tl-primary);color:#fff;">
              🇧🇯 COTONOU — <span id="journal-ctn-count">0</span> opération(s)
            </div>
            <div class="card-body p-0"><div id="journal-ctn-liste"></div></div>
          </div>
        </div>
        <div class="col-12">
          <div class="card">
            <div class="card-header" style="background:var(--tl-success);color:#fff;">
              🇨🇩 KINSHASA — <span id="journal-kin-count">0</span> opération(s)
            </div>
            <div class="card-body p-0"><div id="journal-kin-liste"></div></div>
          </div>
        </div>
      </div>

      <!-- Signatures (visible seulement à l'impression) -->
      <div class="journal-signature journal-sig-block">
        <div class="sig-zone">
          <div style="height:50px;"></div>
          <strong>Le Comptable</strong>
          <div class="text-secondary small">Nom &amp; Signature</div>
        </div>
        <div class="sig-zone">
          <div style="height:50px;"></div>
          <strong>Le Directeur Général (PDG)</strong>
          <div class="text-secondary small">Nom &amp; Signature</div>
        </div>
      </div>
    </div>
  `,document.getElementById(`journal-actualiser`).addEventListener(`click`,f),document.getElementById(`journal-imprimer`).addEventListener(`click`,p),document.getElementById(`journal-debut`).addEventListener(`change`,f),document.getElementById(`journal-fin`).addEventListener(`change`,f),await f()}async function f(){let t=document.getElementById(`journal-debut`),n=document.getElementById(`journal-fin`);if(!t||!n)return;let r=t.value,i=n.value;if(r&&i&&r>i){e.error(`La date de début doit être antérieure à la date de fin`);return}let a=await l(`CTN`,r,i),s=await l(`KIN`,r,i);document.getElementById(`journal-ctn-liste`).innerHTML=u(a),document.getElementById(`journal-kin-liste`).innerHTML=u(s),document.getElementById(`journal-ctn-count`).textContent=a.length,document.getElementById(`journal-kin-count`).textContent=s.length,document.getElementById(`journal-print-debut`).textContent=o(r),document.getElementById(`journal-print-fin`).textContent=o(i)}function p(){f().then(()=>window.print())}export{d as render};