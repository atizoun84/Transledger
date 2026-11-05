import{i as e,v as t}from"./index-D12hkORu.js";import{a as n,r}from"./calculs-DPAwy0MW.js";function i(){try{return window.open(`about:blank`,`_blank`)}catch{return null}}async function a(t,n=null){let r=await e();if(!r)throw n&&n.closed===!1&&n.close(),Error(`Numéro WhatsApp de l'admin introuvable. Contactez un administrateur pour configurer son numéro.`);let i=await o(t),a=`https://wa.me/${r}?text=${encodeURIComponent(i)}`;return n&&n.closed===!1?n.location.href=a:window.location.href=a,new Promise(e=>{let t=!1,n=()=>{document.visibilityState===`visible`&&t===!1&&(t=!0,document.removeEventListener(`visibilitychange`,n),e({success:!0,whatsappUrl:a,message:i,adminPhone:r,returned:!0}))};document.addEventListener(`visibilitychange`,n),setTimeout(()=>{t===!1&&(t=!0,document.removeEventListener(`visibilitychange`,n),e({success:!0,whatsappUrl:a,message:i,adminPhone:r,returned:!1,timeout:!0}))},9e4)})}async function o(e){let t=e.operationType||e.type,n=e.data||{},r=e.profil||{},i=e.agenceSource||n.agence||n.ville||`CTN`,a=e.agenceDest,o=e.typeSuppression;return t===`suppression`?c({data:n,profil:r,typeSuppression:o}):s({opType:t,data:n,profil:r,agenceSource:i,agenceDest:a})}async function s({opType:e,data:i,profil:a,agenceSource:o,agenceDest:s}){let c=await t(`mois_actif`)||new Date().toISOString().slice(0,7),u=await r(c),d=new Date,f=d.toLocaleDateString(`fr-FR`),p=d.toTimeString().slice(0,5),m=(a.role===`admin`?`👑`:a.role===`gestionnaire`?`🔑`:`👤`)+` `+(a.nom||a.email||`—`),h=o===`KIN`?`Kinshasa`:`Cotonou`,g=s===`KIN`?`Kinshasa`:`Cotonou`,_=``,v=``;e===`envoi`||e===void 0&&i.recu!==void 0&&i.beneficiaire!==void 0?(_=`📤 *Envoi ${h} → ${g}*`,v=`
💵 *Expéditeur :* ${i.expediteur||`—`}
📞 ${i.telExp||`—`}
💵 *Bénéficiaire :* ${i.beneficiaire||`—`}
📞 ${i.telephone||`—`}
━━━━━━━━━━━━━━━━━━━
💰 *Reçu :* ${n(i.recu)} $
💸 *Commission :* ${n(i.commission)} $
✅ *À servir :* ${n(i.aServir)} $
🔑 *Code :* ${i.code||`—`}`):e===`retrait`||e===void 0&&i.montantRetrait!==void 0?(_=`📥 *Retrait ${h}*`,v=`
💵 *Bénéficiaire :* ${i.beneficiaire||`—`}
📞 ${i.telephone||`—`}
━━━━━━━━━━━━━━━━━━━
💰 *Montant retiré :* ${n(i.montantRetrait||i.montant)} $
🔑 *Code envoi :* ${i.codeEnvoi||`—`}`):e===`depense`||e===void 0&&i.libelle!==void 0&&i.ville!==void 0?(_=`💸 *Dépense ${h}*`,v=`
📝 *Libellé :* ${i.libelle||`—`}
👤 *Agent :* ${i.agent||`—`}
🏙️ *Ville :* ${i.ville||`—`}
━━━━━━━━━━━━━━━━━━━
💰 *Montant :* ${n(i.montant)} $`):e===`appro`||e===void 0&&i.agentNom!==void 0?(_=`💼 *Approvisionnement ${h}*`,v=`
👤 *Agent apporteur :* ${i.agentNom||`—`}
📝 *Libellé :* ${i.libelle||`—`}
🏦 *Agence :* ${h}
━━━━━━━━━━━━━━━━━━━
💰 *Montant :* ${n(i.montant)} $`):(_=`📋 *Opération (${e||`type inconnu`})*`,v=Object.entries(i).filter(([e,t])=>e!==`id`&&t!=null&&typeof t!=`object`).map(([e,t])=>`• *${e}* : ${t}`).join(`
`)||`(aucun détail disponible)`);let{deltaCTN:y,deltaKIN:b,deltaCommCTN:x,deltaCommKIN:S}=l({opType:e,data:i,agenceSource:o,agenceDest:s}),C=u.soldeCTN+y,w=u.soldeKIN+b,T=u.totCtnKinComm+x,E=u.totKinCtnComm+S,D=e=>Math.abs(e)<.01?``:` (${e>0?`+`:``}${n(e)} $)`;return`🔔 *NOUVELLE OPÉRATION - TransLedger*

━━━━━━━━━━━━━━━━━━━
${_}
👤 *Agent :* ${m}
📅 *Date :* ${f} à ${p}
━━━━━━━━━━━━━━━━━━━${v}
━━━━━━━━━━━━━━━━━━━
📊 *BILAN FINANCIER*

🇧🇯 *COTONOU*
• Solde caisse : ${n(u.soldeCTN)} → *${n(C)} $*${D(y)}
• Commissions du mois : ${n(u.totCtnKinComm)} → *${n(T)} $*${D(x)}

🇨🇩 *KINSHASA*
• Solde caisse : ${n(u.soldeKIN)} → *${n(w)} $*${D(b)}
• Commissions du mois : ${n(u.totKinCtnComm)} → *${n(E)} $*${D(S)}

━━━━━━━━━━━━━━━━━━━
📊 *SYNTHÈSE GLOBALE*
• Total entrées du mois : ${n(u.entreesCTN+u.entreesKIN+y+b)} $
• Total sorties du mois : ${n(u.sortiesCTN+u.sortiesKIN)} $
• Commissions totales : ${n(T+E)} $
• Codes en attente : ${n(u.totCodesReste)} $

━━━━━━━━━━━━━━━━━━━

Merci de confirmer la réception. ✅`}async function c({data:e,profil:i,typeSuppression:a}){let o=await t(`mois_actif`)||new Date().toISOString().slice(0,7),s=await r(o),c=new Date,l=c.toLocaleDateString(`fr-FR`),d=c.toTimeString().slice(0,5),f=(i.role===`admin`?`👑`:i.role===`gestionnaire`?`🔑`:`👤`)+` `+(i.nom||i.email||`—`),p={appro:`💼 Approvisionnement`,depense:`💸 Dépense`,envoi:`📤 Envoi`,retrait:`📥 Retrait`,compensation:`🔁 Compensation`,agent:`👤 Agent`},m=``;if(a===`appro`){let t=e.agence===`KIN`?`Kinshasa`:`Cotonou`;m=`
📅 Date : ${e.date||`—`}
🏦 Agence : ${t}
👤 Agent apporteur : ${e.agentNom||`—`}
📝 Libellé : ${e.libelle||`—`}
💰 Montant : ${n(e.montant)} $`}else if(a===`depense`){let t=e.ville===`KIN`?`Kinshasa`:e.ville===`CTN`?`Cotonou`:`Autre`;m=`
📅 Date : ${e.date||`—`}
🏙️ Ville : ${t}
📝 Libellé : ${e.libelle||`—`}
👤 Agent : ${e.agent||`—`}
💰 Montant : ${n(e.montant)} $`}else m=a===`envoi`?`
📅 Date : ${e.date||`—`}
🔑 Code : ${e.code||`—`}
👤 Expéditeur : ${e.expediteur||`—`}
👤 Bénéficiaire : ${e.beneficiaire||`—`}
💰 Reçu : ${n(e.recu)} $
💸 Commission : ${n(e.commission)} $
✅ À servir : ${n(e.aServir)} $
🔄 Déjà servi : ${n(e.servi||0)} $`:a===`retrait`?`
📅 Date : ${e.date||`—`}
🔑 Code envoi : ${e.codeEnvoi||`—`}
👤 Bénéficiaire : ${e.beneficiaire||`—`}
💰 Montant retiré : ${n(e.montantRetrait||e.montant)} $`:a===`compensation`?`
📅 Date : ${e.date||`—`}
🔄 Sens : ${e.source} → ${e.dest}
💰 Montant : ${n(e.montant)} $
📝 Observation : ${e.observation||`—`}`:a===`agent`?`
👤 Nom : ${e.nom||`—`}
📊 Statut : ${e.actif?`Actif`:`Inactif`}`:Object.entries(e).filter(([e,t])=>e!==`id`&&t!=null&&typeof t!=`object`).map(([e,t])=>`• ${e} : ${t}`).join(`
`);let h=u({typeSuppression:a,data:e}),g=e=>Math.abs(e)<.01?``:` (${e>0?`+`:``}${n(e)} $)`;return`🗑️ *SUPPRESSION D'OPÉRATION - TransLedger*

━━━━━━━━━━━━━━━━━━━
⚠️ *${p[a]||`Opération`} à supprimer*
👤 *Demandé par :* ${f}
📅 *Date :* ${l} à ${d}
━━━━━━━━━━━━━━━━━━━
📋 *DÉTAILS DE L'OPÉRATION :*${m}
━━━━━━━━━━━━━━━━━━━
📊 *IMPACT SUR LE BILAN :*

🇧🇯 *COTONOU*
• Solde caisse : ${n(s.soldeCTN)} → *${n(s.soldeCTN+h.deltaCTN)} $*${g(h.deltaCTN)}

🇨🇩 *KINSHASA*
• Solde caisse : ${n(s.soldeKIN)} → *${n(s.soldeKIN+h.deltaKIN)} $*${g(h.deltaKIN)}

━━━━━━━━━━━━━━━━━━━

⚠️ *Cette suppression est IRRÉVERSIBLE.*
Merci de confirmer la demande. ✅`}function l({opType:e,data:t,agenceSource:n,agenceDest:r}){let i=0,a=0,o=0,s=0,c=e||(t.recu===void 0?t.montantRetrait===void 0?t.ville===void 0?t.agentNom===void 0?null:`appro`:`depense`:`retrait`:`envoi`);if(c===`envoi`)n===`KIN`?(a+=Number(t.recu)||0,s+=Number(t.commission)||0):(i+=Number(t.recu)||0,o+=Number(t.commission)||0);else if(c===`retrait`){let e=Number(t.montantRetrait||t.montant)||0;n===`KIN`?a-=e:i-=e}else c===`depense`?n===`KIN`||t.ville===`KIN`?a-=Number(t.montant)||0:i-=Number(t.montant)||0:c===`appro`&&(n===`KIN`?a+=Number(t.montant)||0:i+=Number(t.montant)||0);return{deltaCTN:i,deltaKIN:a,deltaCommCTN:o,deltaCommKIN:s}}function u({typeSuppression:e,data:t}){let n=0,r=0;return e===`appro`?t.agence===`KIN`?r-=Number(t.montant)||0:n-=Number(t.montant)||0:e===`depense`?t.ville===`KIN`?r+=Number(t.montant)||0:n+=Number(t.montant)||0:e===`compensation`&&(t.source===`KIN`?r+=Number(t.montant)||0:n+=Number(t.montant)||0,t.dest===`KIN`?r-=Number(t.montant)||0:n-=Number(t.montant)||0),{deltaCTN:n,deltaKIN:r}}export{i as n,a as t};