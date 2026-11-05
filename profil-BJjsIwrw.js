import{d as e,o as t,r as n,t as r,u as i}from"./firebase-xAqBbcgB.js";import{C as a,a as o,c as s,u as c}from"./index-D12hkORu.js";import{s as l,t as u}from"./helpers-B_61C2tc.js";var d=null,f=null;async function p(e,t){if(f=r.currentUser,t){let e=await o(t.uid);e&&(d=e)}if(!d&&f&&(d=await o(f.uid)),!d){e.innerHTML=`<div class="alert alert-danger">Profil introuvable</div>`;return}let n=d.role||``,i=n===`admin`?`👑 Administrateur`:n===`gestionnaire`?`🔑 Gestionnaire`:`👤 Agent`,c=d.agence===`CTN`?`🇧🇯 Cotonou`:d.agence===`KIN`?`🇨🇩 Kinshasa`:`—`;e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">👤 Mon profil</h2>

    <!-- Infos compte (lecture seule) -->
    <div class="card">
      <div class="card-header">📇 Mon compte</div>
      <div class="card-body p-2" style="font-size:.85rem;">
        <div class="d-flex justify-between mb-1"><span>📧 Email</span><strong>${u(d.email||`—`)}</strong></div>
        <div class="d-flex justify-between mb-1"><span>🎭 Rôle</span><strong>${i}</strong></div>
        <div class="d-flex justify-between mb-1"><span>📍 Agence</span><strong>${c}</strong></div>
        <div class="d-flex justify-between"><span>📊 Statut</span><strong>${d.actif?`✅ Actif`:`⏳ En attente`}</strong></div>
      </div>
    </div>

    <!-- Modifier infos -->
    <div class="card">
      <div class="card-header">✏️ Modifier mes informations</div>
      <div class="card-body">
        <label class="form-label">Nom complet *</label>
        <input type="text" id="profil-nom" class="form-control mb-2"
               value="${u(d.nom||``)}"
               placeholder="Ex : AMOUSSOU Atizoun Plateny">

        <label class="form-label">📱 Numéro WhatsApp</label>
        <input type="tel" id="profil-whatsapp" class="form-control mb-1"
               value="${u(d.whatsapp||``)}"
               placeholder="Ex : +229 01 97 74 40 35">
        <small class="text-secondary" style="font-size:.7rem;display:block;margin-bottom:10px;">
          Format international, avec indicatif. Ex : 2290197744035 (pour le Bénin).
          ${n===`admin`?`<br><strong>⚠️ C'est ce numéro qui reçoit les notifications d'opérations.</strong>`:``}
        </small>

        <button id="btn-save-infos" class="btn btn-primary btn-block">
          💾 Enregistrer mes informations
        </button>
      </div>
    </div>

    <!-- Changer mot de passe -->
    <div class="card">
      <div class="card-header">🔒 Changer mon mot de passe</div>
      <div class="card-body">
        <label class="form-label">Mot de passe actuel *</label>
        <input type="password" id="pwd-actuel" class="form-control mb-2" autocomplete="current-password">

        <label class="form-label">Nouveau mot de passe * (min. 6 caractères)</label>
        <input type="password" id="pwd-nouveau" class="form-control mb-2" autocomplete="new-password">

        <label class="form-label">Confirmer le nouveau mot de passe *</label>
        <input type="password" id="pwd-confirm" class="form-control mb-2" autocomplete="new-password">

        <button id="btn-change-pwd" class="btn btn-warning btn-block">
          🔑 Changer le mot de passe
        </button>
      </div>
    </div>

    <!-- Déconnexion -->
    <div class="card">
      <div class="card-header">🚪 Session</div>
      <div class="card-body">
        <button id="btn-logout-profil" class="btn btn-outline-danger btn-block">
          🚪 Se déconnecter
        </button>
      </div>
    </div>
  `,document.getElementById(`btn-save-infos`).addEventListener(`click`,m),document.getElementById(`btn-change-pwd`).addEventListener(`click`,h),document.getElementById(`btn-logout-profil`).addEventListener(`click`,async()=>{try{await s(),a.info(`Déconnecté`)}catch{a.error(`Erreur déconnexion`)}})}async function m(){let t=(l(`profil-nom`)||``).trim(),n=(l(`profil-whatsapp`)||``).replace(/[\s\-().]/g,``);if(!t){a.error(`Le nom est obligatoire`);return}let r=document.getElementById(`btn-save-infos`);r.disabled=!0,r.textContent=`⏳ Enregistrement...`;try{let r={nom:t};if(n&&(r.whatsapp=n),await c(d.uid,r),f&&f.displayName!==t)try{await e(f,{displayName:t})}catch{}d.nom=t,n&&(d.whatsapp=n);let i=document.getElementById(`header-user-info`);if(i){let e=d.role,n=e===`admin`?`👑`:e===`gestionnaire`?`🔑`:`👤`,r=d.agence?` • `+d.agence:``;i.textContent=n+` `+t+r}a.success(`✅ Profil mis à jour`)}catch(e){a.error(`Erreur : `+e.message)}finally{r.disabled=!1,r.textContent=`💾 Enregistrer mes informations`}}async function h(){let e=document.getElementById(`pwd-actuel`).value,r=document.getElementById(`pwd-nouveau`).value,o=document.getElementById(`pwd-confirm`).value;if(!e){a.error(`Mot de passe actuel requis`);return}if(r.length<6){a.error(`Le nouveau doit faire min. 6 caractères`);return}if(r!==o){a.error(`Les mots de passe ne correspondent pas`);return}if(!f||!f.email){a.error(`Non connecté`);return}let s=document.getElementById(`btn-change-pwd`);s.disabled=!0,s.textContent=`⏳ Changement...`;try{let o=n.credential(f.email,e);await t(f,o),await i(f,r),a.success(`✅ Mot de passe changé`),document.getElementById(`pwd-actuel`).value=``,document.getElementById(`pwd-nouveau`).value=``,document.getElementById(`pwd-confirm`).value=``}catch(e){let t=e.code||``;a.error({"auth/wrong-password":`Mot de passe actuel incorrect`,"auth/invalid-credential":`Mot de passe actuel incorrect`,"auth/weak-password":`Nouveau mot de passe trop faible`,"auth/requires-recent-login":`Session expirée. Reconnectez-vous d'abord.`,"auth/too-many-requests":`Trop de tentatives. Réessayez plus tard.`}[t]||e.message)}finally{s.disabled=!1,s.textContent=`🔑 Changer le mot de passe`}}export{p as render};