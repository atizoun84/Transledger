const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Cz2yT3FU.js","./rolldown-runtime-DK3Fl9T5.js","./firebase-xAqBbcgB.js","./index-BKb4GZ-m.css"])))=>i.map(i=>d[i]);
import{C as e,S as t,d as n,h as r,v as i}from"./index-Cz2yT3FU.js";import{c as a,n as o,o as s,r as c,s as l,t as u}from"./helpers-B_61C2tc.js";import{r as d}from"./modal-B0S64iRE.js";import{a as f}from"./calculs-BKQ3qFV7.js";import{n as p,t as m}from"./whatsapp-BbbOoBaT.js";async function h(t){let{from:n,to:r,sourceStore:o,prefixe:c,profil:u,onSuccess:f}=t,h=Number(await i(`taux_jour`))||0,_=n===`KIN`?`Kinshasa`:`Cotonou`,v=r===`CTN`?`Cotonou`:`Kinshasa`,y=d({title:`📤 Envoi `+_+` → `+v,size:`lg`,body:`
      <div class="row">
        <div class="col-6">
          <label class="form-label">Date *</label>
          <input type="date" id="env-date" class="form-control" value="${s()}">
        </div>
        <div class="col-6">
          <label class="form-label">Heure</label>
          <input type="time" id="env-heure" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="form-label">Expéditeur (nom)</label>
          <input type="text" id="env-exp" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="form-label">Téléphone expéditeur</label>
          <input type="tel" id="env-tel-exp" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="form-label">Bénéficiaire à ${v}</label>
          <input type="text" id="env-benef" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="form-label">Téléphone bénéficiaire</label>
          <input type="tel" id="env-tel-benef" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label class="form-label">Montant reçu ($) *</label>
          <input type="number" step="0.01" inputmode="decimal" id="env-recu" class="form-control" placeholder="0.00">
        </div>
        <div class="col-6">
          <label class="form-label">Commission ($) *</label>
          <input type="number" step="0.01" inputmode="decimal" id="env-comm" class="form-control" placeholder="0.00" value="0">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label class="form-label">À servir ($)</label>
          <input type="number" step="0.01" id="env-aservir" class="form-control bg-light" readonly>
        </div>
        <div class="col-6">
          <label class="form-label">Taux du jour</label>
          <input type="number" step="0.01" id="env-taux" class="form-control" value="${h||``}">
        </div>
      </div>
      <div class="alert alert-info mt-3 mb-0 small">
        📱 Une notification WhatsApp sera envoyée à l'administrateur pour confirmation avant l'enregistrement.
      </div>
    `,footer:`
      <button type="button" class="btn btn-secondary btn-sm" data-action="cancel">Annuler</button>
      <button type="button" class="btn btn-warning btn-sm" id="env-submit">📲 Finaliser via WhatsApp</button>
    `,onClose:()=>{}}),b=y.el,x=b.querySelector(`#env-recu`),S=b.querySelector(`#env-comm`),C=b.querySelector(`#env-aservir`),w=()=>{let e=parseFloat(x.value)||0,t=parseFloat(S.value)||0;return C.value=(e-t).toFixed(2),{recu:e,commission:t,aServir:e-t}};[`input`,`change`,`blur`,`keyup`].forEach(e=>{x.addEventListener(e,w),S.addEventListener(e,w)}),w(),b.querySelector(`[data-action="cancel"]`).addEventListener(`click`,y.close),b.querySelector(`#env-submit`).addEventListener(`click`,async()=>{let t=l(`env-date`),i=a(`env-recu`),s=a(`env-comm`);if(t===null){e.error(`La date est obligatoire`);return}if(i<=0){e.error(`Le montant reçu doit être supérieur à 0`);return}if(s<0){e.error(`La commission ne peut pas être négative`);return}if(s>=i){e.error(`La commission doit être inférieure au montant reçu`);return}let d=p(),h={date:t,heure:l(`env-heure`)||``,taux:a(`env-taux`),expediteur:l(`env-exp`)||``,telExp:l(`env-tel-exp`)||``,beneficiaire:l(`env-benef`)||``,telephone:l(`env-tel-benef`)||``,recu:i,commission:s,commissionPct:0,aServir:i-s},_=b.querySelector(`#env-submit`);_.disabled=!0,_.textContent=`⏳ Préparation WhatsApp...`;try{await m({operationType:`envoi`,data:h,profil:u,agenceSource:n,agenceDest:r},d),e.success(`📱 Retour détecté. Validez l'envoi.`),_.disabled=!1,_.className=`btn btn-success btn-sm`,_.textContent=`✅ Valider et enregistrer`;let t=_.cloneNode(!0);_.parentNode.replaceChild(t,_),t.addEventListener(`click`,()=>g({data:h,from:n,to:r,sourceStore:o,prefixe:c,modal:y,profil:u,onSuccess:f}))}catch(t){e.error(t.message||`Erreur WhatsApp`),_.disabled=!1,_.textContent=`📲 Finaliser via WhatsApp`,d&&d.closed===!1&&d.close()}})}async function g({data:r,from:a,to:s,sourceStore:l,prefixe:u,modal:d,profil:f,onSuccess:p}){let m=d.el.querySelector(`#env-submit`);m&&(m.disabled=!0,m.textContent=`⏳ Enregistrement...`);try{let{dbGetAll:m}=await t(async()=>{let{dbGetAll:e}=await import(`./index-Cz2yT3FU.js`).then(e=>e.g);return{dbGetAll:e}},__vite__mapDeps([0,1,2,3]),import.meta.url),h=await c(async e=>m(e)),g=await o(u,async e=>m(e)),v={mois:await i(`mois_actif`)||new Date().toISOString().slice(0,7),...r,servi:0,code:g,codeSecret:h,type:`envoi`,reste:r.aServir,agentUid:f?f.uid:null,agentNomComplet:f&&(f.nom||f.email)||``,agentRole:f?f.role:``,createdAt:new Date().toISOString()};await n(l,v),d.close(),e.success(`✅ Envoi enregistré`),_({codeSecret:h,codeEnvoi:g,expediteur:v.expediteur,beneficiaire:v.beneficiaire,montant:v.aServir,source:a===`KIN`?`Kinshasa`:`Cotonou`,dest:s===`CTN`?`Cotonou`:`Kinshasa`}),typeof p==`function`&&await p()}catch(t){e.error(`Erreur : `+t.message),m&&(m.disabled=!1,m.textContent=`✅ Valider et enregistrer`)}}function _(e){let{codeSecret:t,codeEnvoi:n,expediteur:r,beneficiaire:i,montant:a,source:o,dest:s}=e,c=`🔐 RETRAIT AFRI LINK LEDGER
━━━━━━━━━━━━━━━━━━━━━━━━
Code envoi : `+n+`
Expéditeur : `+(r||`—`)+`
Bénéficiaire : `+(i||`—`)+`
Agence : `+o+` → `+s+`
Montant à servir : `+f(a)+` $

🔑 CODE SECRET : `+t+`
━━━━━━━━━━━━━━━━━━━━━━━━
Présentez ce code à l'agence `+s+` pour retirer les fonds.`,l=d({title:`✅ Envoi enregistré avec succès`,headerClass:`modal-success`,body:`
      <div class="text-center">
        <p class="text-secondary small mb-2">🔐 CODE SECRET À COMMUNIQUER AU BÉNÉFICIAIRE</p>
        <div class="code-secret-display" id="succ-code">${t}</div>
        <div class="d-flex gap-2 mt-3" style="justify-content:center;">
          <button class="btn btn-primary btn-sm" id="succ-copie-code">📋 Copier le code</button>
          <button class="btn btn-outline-primary btn-sm" id="succ-copie-tout">📋 Copier tout</button>
        </div>
        <div id="succ-feedback" class="text-success small mt-2" style="display:none;">✅ Copié !</div>
        <hr>
        <div class="text-left small">
          <div class="d-flex justify-between mb-1"><span class="text-secondary">Code envoi :</span><strong>${n}</strong></div>
          <div class="d-flex justify-between mb-1"><span class="text-secondary">Expéditeur :</span><strong>${u(r||`—`)}</strong></div>
          <div class="d-flex justify-between mb-1"><span class="text-secondary">Bénéficiaire :</span><strong>${u(i||`—`)}</strong></div>
          <div class="d-flex justify-between mb-1"><span class="text-secondary">À servir :</span><strong class="text-success">${f(a)} $</strong></div>
        </div>
      </div>
    `,footer:`<button type="button" class="btn btn-success btn-block fw-bold" data-action="close">✅ Terminé</button>`}),p=l.el;p.querySelector(`[data-action="close"]`).addEventListener(`click`,l.close);let m=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(e),!0;let t=document.createElement(`textarea`);return t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),!0}catch{return!1}},h=p.querySelector(`#succ-feedback`),g=p.querySelector(`#succ-code`),_=()=>{h.style.display=`block`,g.classList.add(`copie-success`),setTimeout(()=>g.classList.remove(`copie-success`),700)};p.querySelector(`#succ-copie-code`).addEventListener(`click`,async()=>{await m(t)&&_()}),p.querySelector(`#succ-copie-tout`).addEventListener(`click`,async()=>{await m(c)&&_()}),setTimeout(async()=>{await m(c)&&_()},400)}async function v(n){let{agenceLabel:r,sourceStore:i,profil:a,onSuccess:o}=n,s=d({title:`💵 Retrait — `+r,headerClass:`modal-success`,size:`lg`,body:`
      <div class="alert alert-info small">
        <strong>ℹ️ Info :</strong> Saisissez le <strong>code secret</strong> communiqué par l'expéditeur.
      </div>
      <label class="form-label">Code secret (6 chiffres)</label>
      <input type="text" id="ret-code" class="form-control text-center font-mono"
             maxlength="6" placeholder="••••••"
             style="letter-spacing:.5rem;font-size:1.5rem;">
      <button class="btn btn-outline-primary btn-sm btn-block mt-2" id="ret-verifier">
        🔍 Vérifier le code
      </button>

      <div id="ret-resultat" style="display:none;">
        <div class="alert alert-success small mb-2 mt-2">✅ Transfert trouvé !</div>
        <div class="card bg-light">
          <div class="card-body p-2 small">
            <div><strong>Code envoi :</strong> <span id="ret-info-code">—</span></div>
            <div><strong>Expéditeur :</strong> <span id="ret-info-exp">—</span></div>
            <div><strong>Bénéficiaire :</strong> <span id="ret-info-benef">—</span></div>
            <div><strong>Date envoi :</strong> <span id="ret-info-date">—</span></div>
            <hr class="my-2">
            <div class="d-flex justify-between"><span>À servir :</span><strong id="ret-info-aservir">—</strong></div>
            <div class="d-flex justify-between"><span>Déjà servi :</span><strong id="ret-info-servi">—</strong></div>
            <div class="d-flex justify-between text-danger"><span>Reste :</span><strong id="ret-info-reste">—</strong></div>
          </div>
        </div>

        <label class="form-label mt-3">Montant à retirer maintenant ($)</label>
        <input type="number" step="0.01" inputmode="decimal" id="ret-montant" class="form-control">
        <button class="btn btn-warning btn-block mt-3 fw-bold" id="ret-submit">
          📲 Finaliser via WhatsApp
        </button>
      </div>
    `,onClose:()=>{}}),c=s.el,l={item:null,sourceStore:i};c.querySelector(`#ret-verifier`).addEventListener(`click`,async()=>{let{dbGetAll:n}=await t(async()=>{let{dbGetAll:e}=await import(`./index-Cz2yT3FU.js`).then(e=>e.g);return{dbGetAll:e}},__vite__mapDeps([0,1,2,3]),import.meta.url),r=c.querySelector(`#ret-code`).value.trim();if(r.length!==6){e.error(`Le code doit faire 6 chiffres`);return}let a=(await n(i)).find(e=>e.codeSecret===r&&(e.reste||0)>0);a===void 0?(e.error(`Code invalide ou transfert déjà soldé`),c.querySelector(`#ret-resultat`).style.display=`none`):(l.item=a,c.querySelector(`#ret-info-code`).textContent=a.code||`—`,c.querySelector(`#ret-info-exp`).textContent=a.expediteur||`—`,c.querySelector(`#ret-info-benef`).textContent=a.beneficiaire||`—`,c.querySelector(`#ret-info-date`).textContent=a.date||`—`,c.querySelector(`#ret-info-aservir`).textContent=f(a.aServir)+` $`,c.querySelector(`#ret-info-servi`).textContent=f(a.servi||0)+` $`,c.querySelector(`#ret-info-reste`).textContent=f(a.reste)+` $`,c.querySelector(`#ret-montant`).value=(a.reste||0).toFixed(2),c.querySelector(`#ret-montant`).max=a.reste||0,c.querySelector(`#ret-resultat`).style.display=`block`)}),c.querySelector(`#ret-submit`).addEventListener(`click`,async()=>{if(l.item===null)return;let t=parseFloat(c.querySelector(`#ret-montant`).value)||0,n=l.item,u=n.reste||0;if(t<=0){e.error(`Montant invalide`);return}if(t>u){e.error(`Le montant dépasse le reste à servir (`+f(u)+` $)`);return}let d=p(),h={date:new Date().toISOString().slice(0,10),heure:new Date().toTimeString().slice(0,5),codeEnvoi:n.code||``,codeSecret:n.codeSecret||``,expediteur:n.expediteur||``,beneficiaire:n.beneficiaire||``,telephone:n.telephone||``,montant:t,montantRetrait:t,resteApres:u-t,transfertId:n.id,sourceStore:i},g=c.querySelector(`#ret-submit`);g.disabled=!0,g.textContent=`⏳ Préparation WhatsApp...`;try{await m({operationType:`retrait`,data:h,profil:a,agenceSource:r===`Kinshasa`?`KIN`:`CTN`},d),e.success(`📱 Retour détecté. Confirmez le retrait.`),g.disabled=!1,g.className=`btn btn-success btn-block mt-3 fw-bold`,g.textContent=`✅ Confirmer le retrait`;let t=g.cloneNode(!0);g.parentNode.replaceChild(t,g),t.addEventListener(`click`,()=>y({data:h,item:n,sourceStore:i,modal:s,agenceLabel:r,profil:a,onSuccess:o}))}catch(t){e.error(t.message||`Erreur WhatsApp`),g.disabled=!1,g.textContent=`📲 Finaliser via WhatsApp`,d&&d.closed===!1&&d.close()}})}async function y({data:t,item:a,sourceStore:o,modal:s,agenceLabel:c,profil:l,onSuccess:u}){let d=s.el.querySelector(`#ret-submit`);d&&(d.disabled=!0,d.textContent=`⏳ Enregistrement...`);try{a.servi=(a.servi||0)+t.montant,a.reste=(a.aServir||0)-a.servi,await r(o,a);let d=await i(`mois_actif`)||new Date().toISOString().slice(0,7);await n(`retraits`,{mois:d,...t,agence:c,agentUid:l?l.uid:null,agentNomComplet:l&&(l.nom||l.email)||``,agentRole:l?l.role:``,createdAt:new Date().toISOString()}),e.success(`✅ Retrait validé : `+f(t.montant)+` $ — Reste : `+f(a.reste)+` $`),s.close(),typeof u==`function`&&await u()}catch(t){e.error(`Erreur : `+t.message),d&&(d.disabled=!1,d.textContent=`✅ Confirmer le retrait`)}}export{v as n,h as t};