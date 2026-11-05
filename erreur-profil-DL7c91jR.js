import{C as e,a as t,c as n}from"./index-D12hkORu.js";async function r(r,i){r.innerHTML=`
    <div style="min-height:70vh;display:flex;align-items:center;justify-content:center;">
      <div style="width:100%;max-width:420px;">
        <div class="card" style="box-shadow:var(--tl-shadow-lg);border-left:4px solid #dc3545;">
          <div class="card-header" style="background:#dc3545;color:#fff;font-size:1rem;">
            ⚠️ Profil introuvable
          </div>
          <div class="card-body text-center">
            <div style="font-size:3rem;margin:10px 0;">🚫</div>
            <p style="font-size:.95rem;margin-bottom:12px;">
              Votre compte de connexion existe, mais <strong>votre profil est introuvable</strong> dans la base de données.
            </p>
            <div class="alert alert-danger text-left small" style="text-align:left;">
              <div><strong>Email :</strong> ${i?.email||`—`}</div>
              <div><strong>Cause possible :</strong> Règles de sécurité Firebase bloquantes ou problème réseau.</div>
            </div>
            <p class="text-secondary small" style="margin-top:12px;">
              📞 Contactez l'administrateur du système (Atizoun). Si vous êtes l'admin, vérifiez les règles Firebase (RTDB).
            </p>
            <button id="btn-retry" class="btn btn-primary btn-block mb-2">
              🔄 Réessayer
            </button>
            <button id="btn-logout-err" class="btn btn-outline-danger btn-block">
              🚪 Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById(`btn-retry`).addEventListener(`click`,async()=>{i&&(e.info(`Vérification du profil...`),await t(i.uid)?(e.success(`✅ Profil trouvé, redirection...`),location.reload()):e.error(`Toujours introuvable. Vérifiez les règles Firebase.`))}),document.getElementById(`btn-logout-err`).addEventListener(`click`,async()=>{try{await n(),e.info(`Déconnecté`)}catch{e.error(`Erreur de déconnexion`)}})}export{r as render};