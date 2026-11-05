import{C as e,c as t}from"./index-D12hkORu.js";async function n(n,r){let i=r?.email||`—`,a=r?.role||`agent`;n.innerHTML=`
    <div style="min-height:70vh;display:flex;align-items:center;justify-content:center;">
      <div style="width:100%;max-width:420px;">
        <div class="card" style="box-shadow:var(--tl-shadow-lg);border-left:4px solid #fd7e14;">
          <div class="card-header" style="background:#fd7e14;color:#fff;font-size:1rem;">
            ⏳ Compte en attente d'activation
          </div>
          <div class="card-body text-center">
            <div style="font-size:3rem;margin:10px 0;">🔒</div>
            <p style="font-size:.95rem;margin-bottom:12px;">
              Votre compte a bien été créé, mais il doit être <strong>activé par un administrateur</strong> avant de pouvoir accéder à l'application.
            </p>
            <div class="alert alert-info text-left small" style="text-align:left;">
              <div><strong>Email :</strong> ${i}</div>
              <div><strong>Rôle demandé :</strong> ${a===`gestionnaire`?`🔑 Gestionnaire`:a===`agent`?`👤 Agent`:a===`admin`?`👑 Administrateur`:a}</div>
              <div><strong>Statut :</strong> <span class="text-warning fw-bold">En attente</span></div>
            </div>
            <p class="text-secondary small" style="margin-top:12px;">
              📞 Contactez l'administrateur de votre agence pour qu'il active votre compte et vous assigne une agence (Cotonou ou Kinshasa).
            </p>
            <button id="btn-logout-attente" class="btn btn-outline-danger btn-block mt-2">
              🚪 Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById(`btn-logout-attente`).addEventListener(`click`,async()=>{try{await t(),e.info(`Vous êtes déconnecté`)}catch{e.error(`Erreur de déconnexion`)}})}export{n as render};