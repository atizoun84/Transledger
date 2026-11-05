import{C as e,_ as t,b as n,t as r,v as i,x as a,y as o}from"./index-D12hkORu.js";import{c as s}from"./helpers-B_61C2tc.js";import{t as c}from"./modal-B0S64iRE.js";import{a as l}from"./calculs-DPAwy0MW.js";async function u(t){let n=await i(`mois_actif`)||new Date().toISOString().slice(0,7),o=Number(await i(`taux_jour`))||0,c=Number(await i(`solde_initial_ctn_`+n))||0,m=Number(await i(`solde_initial_kin_`+n))||0;t.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">⚙️ Paramètres</h2>

    <!-- Mois actif -->
    <div class="card">
      <div class="card-header">📅 Mois actif</div>
      <div class="card-body">
        <input type="month" id="param-mois" class="form-control" value="${n}">
        <small class="text-secondary">Toutes les saisies seront rattachées à ce mois.</small>
      </div>
    </div>

    <!-- Taux du jour -->
    <div class="card">
      <div class="card-header">💱 Taux du jour</div>
      <div class="card-body">
        <label class="form-label">Taux (FCFA pour 1 $)</label>
        <div style="display:flex;gap:6px;align-items:center;">
          <span style="white-space:nowrap;">1 $ =</span>
          <input type="number" step="0.01" id="param-taux" class="form-control" value="${o||``}" placeholder="ex: 595">
          <span style="white-space:nowrap;">FCFA</span>
        </div>
        <button id="param-save-taux" class="btn btn-primary btn-block mt-2">💾 Enregistrer le taux</button>
        <small class="text-secondary d-block mt-2">Ce taux sera utilisé par défaut dans tous les formulaires.</small>
      </div>
    </div>

    <!-- Report du mois -->
    <div class="card">
      <div class="card-header">🔄 Report du mois précédent</div>
      <div class="card-body">
        <label class="form-label">Solde initial CTN ($)</label>
        <input type="number" step="0.01" id="param-solde-ctn" class="form-control" value="${c||``}" placeholder="0.00">

        <label class="form-label mt-2">Solde initial KIN ($)</label>
        <input type="number" step="0.01" id="param-solde-kin" class="form-control" value="${m||``}" placeholder="0.00">

        <button id="param-save-report" class="btn btn-primary btn-block mt-2">💾 Enregistrer le report</button>
      </div>
    </div>

    <!-- Données -->
    <div class="card">
      <div class="card-header">🗄️ Données</div>
      <div class="card-body">
        <button id="param-export" class="btn btn-outline-primary btn-block mb-2">⬇️ Exporter en JSON</button>
        <label class="btn btn-outline-primary btn-block mb-2" style="position:relative;overflow:hidden;">
          ⬆️ Importer un JSON
          <input type="file" id="param-import" accept=".json" style="position:absolute;left:-9999px;">
        </label>
        <button id="param-reset" class="btn btn-outline-danger btn-block">🗑️ Réinitialiser toutes les données</button>
      </div>
    </div>

    <!-- À propos -->
    <div class="card">
      <div class="card-header">ℹ️ À propos</div>
      <div class="card-body small text-secondary">
        <div><strong>TransLedger</strong> v2.0</div>
        <div>Auteur : Atizoun</div>
        <div>Gestion de transferts KIN ↔ CTN</div>
      </div>
    </div>
  `,document.getElementById(`param-mois`).addEventListener(`change`,async n=>{let r=n.target.value;r&&(await a(`mois_actif`,r),e.success(`Mois actif : `+r),await u(t))}),document.getElementById(`param-save-taux`).addEventListener(`click`,async()=>{let t=s(`param-taux`);await a(`taux_jour`,t),await r(),e.success(`Taux enregistré : `+t+` FCFA/$`)}),document.getElementById(`param-save-report`).addEventListener(`click`,async()=>{let t=s(`param-solde-ctn`),r=s(`param-solde-kin`);await a(`solde_initial_ctn_`+n,t),await a(`solde_initial_kin_`+n,r),e.success(`Report enregistré : CTN `+l(t)+` $, KIN `+l(r)+` $`)}),document.getElementById(`param-export`).addEventListener(`click`,d),document.getElementById(`param-import`).addEventListener(`change`,f),document.getElementById(`param-reset`).addEventListener(`click`,p)}async function d(){try{let n=await t(),r=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`transledger_backup_`+new Date().toISOString().slice(0,10)+`.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),e.success(`💾 Export JSON effectué`)}catch(t){e.error(`Erreur export : `+t.message)}}async function f(t){let n=t.target.files[0];if(n){if(!await c(`Cette action va REMPLACER toutes les données. Continuer ?`))t.target.value=``;else{try{let t=await n.text(),r=JSON.parse(t);await o(r),e.success(`✅ Import réussi`),setTimeout(async()=>{let e=document.getElementById(`page-container`);e&&await u(e)},500)}catch(t){e.error(`Erreur import : `+t.message)}t.target.value=``}}}async function p(){if(await c(`⚠️ Supprimer TOUTES les données ? Cette action est irréversible.`))try{await n(),e.success(`♻️ Base réinitialisée`),setTimeout(async()=>{let e=document.getElementById(`page-container`);e&&await u(e)},500)}catch(t){e.error(`Erreur reset : `+t.message)}}export{u as render};