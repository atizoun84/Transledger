import{s as e,t}from"./firebase-xAqBbcgB.js";import{C as n,c as r,l as i,s as a}from"./index-D12hkORu.js";import{r as o}from"./modal-B0S64iRE.js";async function s(e){e.innerHTML=`
    <div style="min-height:70vh;display:flex;align-items:center;justify-content:center;">
      <div style="width:100%;max-width:400px;">
        <div class="card" style="box-shadow:var(--tl-shadow-lg);border-left:4px solid var(--tl-primary);">
          <div class="card-header" style="background:var(--tl-primary);color:#fff;font-size:1rem;">
            🔐 TransLedger
          </div>
          <div class="card-body">

            <div style="display:flex;gap:4px;margin-bottom:14px;background:#f0f0f0;padding:4px;border-radius:8px;">
              <button id="tab-login" class="btn btn-sm" style="flex:1;background:var(--tl-primary);color:#fff;">Connexion</button>
              <button id="tab-register" class="btn btn-sm" style="flex:1;background:transparent;color:#555;">Inscription</button>
            </div>

            <div id="form-login">
              <label class="form-label">Email</label>
              <input type="email" id="login-email" class="form-control mb-2" placeholder="email@exemple.com" autocomplete="email">

              <label class="form-label">Mot de passe</label>
              <input type="password" id="login-password" class="form-control mb-3" placeholder="••••••••" autocomplete="current-password">

              <button id="btn-login" class="btn btn-primary btn-block">🔓 Se connecter</button>
              <div style="text-align:center;margin-top:10px;">
                <a href="#" id="lnk-forgot" style="font-size:.78rem;color:var(--tl-primary);text-decoration:none;">
                  ❓ Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div id="form-register" style="display:none;">
              <label class="form-label">Nom complet *</label>
              <input type="text" id="reg-nom" class="form-control mb-2" placeholder="Ex : Louis Kossou" autocomplete="name">

              <label class="form-label">Email *</label>
              <input type="email" id="reg-email" class="form-control mb-2" placeholder="email@exemple.com" autocomplete="email">

              <label class="form-label">Mot de passe * (min. 6 caractères)</label>
              <input type="password" id="reg-password" class="form-control mb-2" placeholder="••••••••" autocomplete="new-password">

              <label class="form-label">Confirmer le mot de passe *</label>
              <input type="password" id="reg-password2" class="form-control mb-2" placeholder="••••••••" autocomplete="new-password">

              <div style="margin:12px 0;padding:10px;background:#f8f9fa;border-radius:8px;">
                <label class="form-label" style="margin-bottom:6px;">🔑 Code administrateur (optionnel)</label>
                <input type="text" id="reg-secret" class="form-control mb-2" placeholder="Laisser vide si vous êtes un agent">

                <label class="form-label" style="margin-bottom:6px;">📱 Numéro WhatsApp (admin uniquement)</label>
                <input type="tel" id="reg-whatsapp" class="form-control" placeholder="+229 01 97 74 40 35">
                <small class="text-secondary" style="font-size:.7rem;display:block;margin-top:4px;">
                  Ce numéro recevra toutes les notifications d'opérations. Format : +229XXXXXXXX
                </small>
              </div>

              <button id="btn-register" class="btn btn-success btn-block">✨ Créer mon compte</button>
            </div>

          </div>
        </div>

        <p class="text-center text-secondary small" style="margin-top:14px;">
          💰 TransLedger v2 • ATIZOUN DIGICOM
        </p>
      </div>
    </div>
  `;let t=document.getElementById(`tab-login`),o=document.getElementById(`tab-register`),s=document.getElementById(`form-login`),u=document.getElementById(`form-register`),d=e=>{e===`login`?(t.style.background=`var(--tl-primary)`,t.style.color=`#fff`,o.style.background=`transparent`,o.style.color=`#555`,s.style.display=`block`,u.style.display=`none`):(o.style.background=`var(--tl-primary)`,o.style.color=`#fff`,t.style.background=`transparent`,t.style.color=`#555`,s.style.display=`none`,u.style.display=`block`)};t.addEventListener(`click`,()=>d(`login`)),o.addEventListener(`click`,()=>d(`register`)),document.getElementById(`btn-login`).addEventListener(`click`,async()=>{let e=document.getElementById(`login-email`).value.trim(),t=document.getElementById(`login-password`).value;if(!e||!t){n.error(`Email et mot de passe requis`);return}let r=document.getElementById(`btn-login`);r.disabled=!0,r.textContent=`⏳ Connexion...`;try{await a(e,t),n.success(`✅ Connexion réussie`)}catch(e){n.error(l(e)),r.disabled=!1,r.textContent=`🔓 Se connecter`}}),document.getElementById(`lnk-forgot`).addEventListener(`click`,e=>{e.preventDefault(),c()}),document.getElementById(`btn-register`).addEventListener(`click`,async()=>{let e=document.getElementById(`reg-nom`).value.trim(),t=document.getElementById(`reg-email`).value.trim(),a=document.getElementById(`reg-password`).value,o=document.getElementById(`reg-password2`).value,s=document.getElementById(`reg-secret`).value.trim(),c=document.getElementById(`reg-whatsapp`).value.trim();if(!e){n.error(`Le nom est requis`);return}if(!t){n.error(`L'email est requis`);return}if(a.length<6){n.error(`Mot de passe : min. 6 caractères`);return}if(a!==o){n.error(`Les mots de passe ne correspondent pas`);return}if(s&&!c){n.error(`Le numéro WhatsApp est obligatoire pour un admin`);return}let u=document.getElementById(`btn-register`);u.disabled=!0,u.textContent=`⏳ Création...`;try{let{role:o}=await i({email:t,password:a,nom:e,secretCode:s,whatsapp:c});await r(),d(`login`),document.getElementById(`login-email`).value=t,document.getElementById(`login-password`).value=``,document.getElementById(`reg-nom`).value=``,document.getElementById(`reg-email`).value=``,document.getElementById(`reg-password`).value=``,document.getElementById(`reg-password2`).value=``,document.getElementById(`reg-secret`).value=``,document.getElementById(`reg-whatsapp`).value=``,u.disabled=!1,u.textContent=`✨ Créer mon compte`,o===`admin`?n.success(`👑 Compte administrateur créé ! Connectez-vous maintenant.`):n.success(`✅ Compte créé. En attente d'activation par un administrateur.`)}catch(e){n.error(l(e)),u.disabled=!1,u.textContent=`✨ Créer mon compte`}})}function c(){let r=o({title:`Mot de passe oublie`,size:`sm`,body:`
      <p style="font-size:.85rem;margin-bottom:10px;">
        Saisissez votre adresse email. Un lien de reinitialisation vous sera envoye.
      </p>
      <label class="form-label">Email</label>
      <input type="email" id="forgot-email" class="form-control" placeholder="email@exemple.com" autocomplete="email">
      <div class="alert alert-info small mt-2" style="font-size:.75rem;">
        Verifiez aussi vos <strong>spams</strong> si vous ne voyez pas l email sous 2 minutes.
      </div>
    `,footer:`
      <button class="btn btn-secondary btn-sm" data-action="cancel">Annuler</button>
      <button class="btn btn-primary btn-sm" data-action="send">Envoyer le lien</button>
    `}),i=r.el;i.querySelector(`[data-action="cancel"]`).addEventListener(`click`,r.close),i.querySelector(`[data-action="send"]`).addEventListener(`click`,async()=>{let a=i.querySelector(`#forgot-email`).value.trim();if(!a){n.error(`Email requis`);return}let o=i.querySelector(`[data-action="send"]`);o.disabled=!0,o.textContent=`Envoi...`;try{await e(t,a),n.success(`Email de reinitialisation envoye !`),r.close()}catch(e){let t=e.code||``;n.error({"auth/user-not-found":`Aucun compte avec cet email`,"auth/invalid-email":`Email invalide`,"auth/too-many-requests":`Trop de tentatives. Reessayez plus tard.`}[t]||`Erreur : `+e.message),o.disabled=!1,o.textContent=`Envoyer le lien`}})}function l(e){return{"auth/email-already-in-use":`Cet email est déjà utilisé`,"auth/invalid-email":`Email invalide`,"auth/weak-password":`Mot de passe trop faible (min. 6 caractères)`,"auth/user-not-found":`Aucun compte avec cet email`,"auth/wrong-password":`Mot de passe incorrect`,"auth/invalid-credential":`Email ou mot de passe incorrect`,"auth/too-many-requests":`Trop de tentatives, réessayez plus tard`,"auth/network-request-failed":`Problème de connexion réseau`}[e&&e.code?e.code:``]||e&&e.message||`Erreur inconnue`}export{s as render};