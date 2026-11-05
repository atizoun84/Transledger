import{C as e,r as t,v as n,x as r}from"./index-D12hkORu.js";import{a as i,r as a,s as o}from"./calculs-DPAwy0MW.js";async function s(c){let l=await n(`mois_actif`)||new Date().toISOString().slice(0,7),u=await a(l);c.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">📊 Tableau de bord</h2>

    <!-- KPI -->
    <div class="kpi-grid">
      <div class="kpi-card" style="background:var(--tl-primary);">
        <div class="label">Solde CTN</div>
        <div class="value">${i(u.soldeCTN)} $</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-primary);">
        <div class="label">Solde KIN</div>
        <div class="value">${i(u.soldeKIN)} $</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-success);">
        <div class="label">Entrées $</div>
        <div class="value">${i(u.entreesCTN+u.entreesKIN)} $</div>
      </div>
      <div class="kpi-card" style="background:var(--tl-danger);">
        <div class="label">Sorties $</div>
        <div class="value">${i(u.sortiesCTN+u.sortiesKIN)} $</div>
      </div>
    </div>

    <!-- Mois -->
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-between align-center">
          <label class="form-label mb-0">Mois :</label>
          <input type="month" id="tbord-mois" class="form-control" style="width:auto;" value="${l}">
        </div>
      </div>
    </div>

    <!-- Situation -->
    <div class="card">
      <div class="card-header">📋 Situation</div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr><th class="text-left">Rubrique</th><th>Cotonou</th><th>Kinshasa</th></tr>
            </thead>
            <tbody>
              <tr><td class="col-nom">Solde initial</td><td>${i(u.soldeInitialCTN)}</td><td>${i(u.soldeInitialKIN)}</td></tr>
              <tr><td class="col-nom">Approvisionnement</td><td>${i(u.totApproCTN)}</td><td>${i(u.totApproKIN)}</td></tr>
              <tr><td class="col-nom">Envois</td><td>${i(u.totCtnKinRecu)}</td><td>${i(u.totKinCtnRecu)}</td></tr>
              <tr><td class="col-nom">Transfert de fonds</td><td>${i(u.compRecuesCTN)}</td><td>${i(u.compRecuesKIN)}</td></tr>
              <tr><td class="col-nom">Codes en attente</td><td>${i(u.totCodesResteCTN)}</td><td>${i(u.totCodesResteKIN)}</td></tr>
              <tr style="background:#f0f7f5;font-weight:700;">
                <td class="col-nom">SOUS-TOTAL ENTRÉES</td>
                <td>${i(u.entreesCTN)}</td>
                <td>${i(u.entreesKIN)}</td>
              </tr>
              <tr><td class="col-nom">Dépenses</td><td>${i(u.totDepCTN)}</td><td>${i(u.totDepKIN)}</td></tr>
              <tr><td class="col-nom">Remboursement</td><td>${i(u.totDepAutre+u.rembCTN)}</td><td>${i(u.rembKIN)}</td></tr>
              <tr><td class="col-nom">Codes servis</td><td>${i(u.totKinCtnServi)}</td><td>${i(u.totCtnKinServi)}</td></tr>
              <tr style="background:#f0f7f5;font-weight:700;">
                <td class="col-nom">SOUS-TOTAL SORTIES</td>
                <td>${i(u.sortiesCTN)}</td>
                <td>${i(u.sortiesKIN)}</td>
              </tr>
              <tr><td class="col-nom">Commissions</td><td>${i(u.totCtnKinComm)}</td><td>${i(u.totKinCtnComm)}</td></tr>
              <tr style="background:#d1e7dd;font-weight:700;">
                <td class="col-nom">MONTANT RESTANT</td>
                <td>${i(u.soldeCTN)}</td>
                <td>${i(u.soldeKIN)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Solde global -->
    <div class="card">
      <div class="card-header">💵 Solde global</div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr><td class="col-nom">Total entrées</td><td>${i(u.entreesCTN+u.entreesKIN)} $</td></tr>
              <tr><td class="col-nom">Total sorties</td><td>${i(u.sortiesCTN+u.sortiesKIN)} $</td></tr>
              <tr style="background:#cfe2ff;font-weight:800;">
                <td class="col-nom">SOLDE GLOBAL</td>
                <td>${i(u.soldeCTN+u.soldeKIN)} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;let d=document.getElementById(`tbord-mois`);d&&d.addEventListener(`change`,async t=>{let n=t.target.value;n&&(await r(`mois_actif`,n),e.info(`Mois actif : `+o(n)),await s(c))}),t(()=>s(c))}export{s as render};