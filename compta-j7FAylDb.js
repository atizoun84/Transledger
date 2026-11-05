import{C as e,m as t,v as n}from"./index-D12hkORu.js";import{a as r,n as i}from"./calculs-DPAwy0MW.js";function a(e,t=new Date){let n=e=>String(e).padStart(2,`0`),r=e=>e.getFullYear()+`-`+n(e.getMonth()+1)+`-`+n(e.getDate()),i=e=>e.toLocaleDateString(`fr-FR`,{day:`2-digit`,month:`short`,year:`numeric`}),a=e=>e.toLocaleDateString(`fr-FR`,{month:`long`,year:`numeric`});if(e===`jour`){let e=r(t);return{debut:e,fin:e,label:i(t)}}if(e===`semaine`){let e=new Date(t),n=e.getDay(),a=n===0?-6:1-n,o=new Date(e);o.setDate(e.getDate()+a);let s=new Date(o);return s.setDate(o.getDate()+6),{debut:r(o),fin:r(s),label:i(o)+` → `+i(s)}}if(e===`mois`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{debut:r(e),fin:r(n),label:a(e)}}if(e===`annee`){let e=new Date(t.getFullYear(),0,1),n=new Date(t.getFullYear(),11,31);return{debut:r(e),fin:r(n),label:`Année `+t.getFullYear()}}return{debut:r(t),fin:r(t),label:i(t)}}function o(e,t=new Date){if(e===`jour`){let e=new Date(t);return e.setDate(e.getDate()-1),a(`jour`,e)}if(e===`semaine`){let e=new Date(t);return e.setDate(e.getDate()-7),a(`semaine`,e)}return e===`mois`?a(`mois`,new Date(t.getFullYear(),t.getMonth()-1,1)):e===`annee`?a(`annee`,new Date(t.getFullYear()-1,0,1)):a(`jour`,t)}function s(e,t,n){return e.filter(e=>{let r=(e.date||``).slice(0,10);return r?r>=t&&r<=n:!1})}function c(e,t){return!t||t===0?null:(e-t)/t*100}function l(e,t,n={}){let r=c(e,t);if(r===null)return`<span style="font-size:.7rem;opacity:.6;">— vs préc.</span>`;let i=r>0?`+`:``,a=r>0?`↑`:r<0?`↓`:`→`,o=r>0?`#198754`:r<0?`#dc3545`:`#6c757d`;return`<span style="font-size:.7rem;color:${n.inverser?r>0?`#dc3545`:`#198754`:o};font-weight:700;">${a} ${i}${r.toFixed(1)}% vs préc.</span>`}function u(e){let{series:t,labels:n,titre:r=``,hauteur:i=220}=e,a={top:20,right:8,bottom:24,left:8};if(!t||t.length===0||n.length===0)return`<div class="p-3 text-center text-secondary small">Pas assez de données</div>`;let o=0,s=0;t.forEach(e=>e.valeurs.forEach(e=>{e<o&&(o=e),e>s&&(s=e)})),s===o&&(s=o+1);let c=i,l=100-a.left-a.right,u=c-a.top-a.bottom,d=n.length>1?l/(n.length-1):0,f=e=>a.left+e*d,g=e=>a.top+u-(e-o)/(s-o)*u,_=``;for(let e=0;e<=4;e++){let t=a.top+u*e/4,n=s-(s-o)*e/4;_+=`<line x1="${a.left}" y1="${t}" x2="${100-a.right}" y2="${t}" stroke="#e9ecef" stroke-width="0.3"/>`,_+=`<text x="${a.left+.5}" y="${t-.8}" font-size="3" fill="#6c757d">${h(n)}</text>`}let v=``,y=``;t.forEach(e=>{let t=e.valeurs.map((e,t)=>`${f(t)},${g(e)}`).join(` `);v+=`<polyline points="${t}" fill="none" stroke="${e.couleur}" stroke-width="0.8" stroke-linejoin="round" stroke-linecap="round"/>`,e.valeurs.forEach((t,n)=>{y+=`<circle cx="${f(n)}" cy="${g(t)}" r="0.6" fill="${e.couleur}"/>`})});let b=``,x=Math.max(1,Math.ceil(n.length/6));return n.forEach((e,t)=>{(t%x===0||t===n.length-1)&&(b+=`<text x="${f(t)}" y="${c-2}" font-size="2.8" fill="#6c757d" text-anchor="middle">${p(m(e))}</text>`)}),`
    <div style="margin-bottom:6px;">${t.map(e=>`<span style="display:inline-flex;align-items:center;gap:4px;margin-right:10px;font-size:.7rem;">
      <span style="width:10px;height:3px;background:${e.couleur};border-radius:2px;"></span>${p(e.nom)}
    </span>`).join(``)}</div>
    <svg viewBox="0 0 100 ${c}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block;">
      ${_}
      ${v}
      ${y}
      ${b}
    </svg>
  `}function d(e){let{labels:t,series:n,hauteur:r=200,titre:i=``}=e;if(!t.length||!n.length)return`<div class="p-3 text-center text-secondary small">Pas assez de données</div>`;let a=r,o={top:16,right:4,bottom:20,left:4},s=100-o.left-o.right,c=a-o.top-o.bottom,l=0;n.forEach(e=>e.valeurs.forEach(e=>{e>l&&(l=e)})),l===0&&(l=1);let u=s/t.length,d=u*.7/n.length,f=u*.3,h=``;t.forEach((e,t)=>{n.forEach((e,n)=>{let r=(e.valeurs[t]||0)/l*c,i=o.left+t*u+f/2+n*d,a=o.top+c-r;h+=`<rect x="${i}" y="${a}" width="${d}" height="${r}" fill="${e.couleur}" rx="0.3"/>`})});let g=``,_=Math.max(1,Math.ceil(t.length/7));return t.forEach((e,n)=>{if(n%_===0||n===t.length-1){let t=o.left+n*u+u/2;g+=`<text x="${t}" y="${a-3}" font-size="2.6" fill="#6c757d" text-anchor="middle">${p(m(e))}</text>`}}),`
    <div style="margin-bottom:6px;">${n.map(e=>`<span style="display:inline-flex;align-items:center;gap:4px;margin-right:10px;font-size:.7rem;">
      <span style="width:10px;height:10px;background:${e.couleur};border-radius:2px;"></span>${p(e.nom)}
    </span>`).join(``)}</div>
    <svg viewBox="0 0 100 ${a}" preserveAspectRatio="none" style="width:100%;height:${r}px;display:block;">
      ${h}
      ${g}
    </svg>
  `}function f(e){let{donnees:t,taille:n=180}=e,r=t.reduce((e,t)=>e+(t.valeur||0),0);if(r===0)return`<div class="p-3 text-center text-secondary small">Aucune donnée</div>`;let i=-Math.PI/2,a=``;t.forEach(e=>{let t=(e.valeur||0)/r;if(t===0)return;let n=i+t*Math.PI*2,o=50+40*Math.cos(i),s=50+40*Math.sin(i),c=50+40*Math.cos(n),l=50+40*Math.sin(n);a+=`<path d="M 50 50 L ${o} ${s} A 40 40 0 ${+(t>.5)} 1 ${c} ${l} Z" fill="${e.couleur}" stroke="#fff" stroke-width="0.5"/>`,i=n}),a+=`<circle cx="50" cy="50" r="20" fill="#fff"/>`;let o=t.map(e=>`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:.75rem;">
      <span style="display:flex;align-items:center;gap:6px;">
        <span style="width:10px;height:10px;background:${e.couleur};border-radius:2px;"></span>
        ${p(e.label)}
      </span>
      <span style="font-weight:700;color:${e.couleur};">${e.valeur.toFixed(2)} $</span>
    </div>
  `).join(``);return`
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
      <svg viewBox="0 0 100 100" style="width:${n}px;height:${n}px;">
        ${a}
      </svg>
      <div style="width:100%;">${o}</div>
    </div>
  `}function p(e){return String(e||``).replace(/[<>&"']/g,e=>({"<":`&lt;`,">":`&gt;`,"&":`&amp;`,'"':`&quot;`,"'":`&#39;`})[e])}function m(e){return e?/^\d{4}-\d{2}-\d{2}$/.test(e)?e.slice(8,10)+`/`+e.slice(5,7):e.slice(0,6):``}function h(e){return Math.abs(e)>=1e3?(e/1e3).toFixed(1)+`k`:e.toFixed(0)}var g=`mois`;async function _(e,n){let r=s(await t(`kin_ctn`),e,n),i=s(await t(`ctn_kin`),e,n),a=s(await t(`retraits`),e,n),o=s(await t(`depenses`),e,n),c=s(await t(`compensations`),e,n),l={envoisEmis:i.reduce((e,t)=>e+(t.recu||0),0),nbEnvois:i.length,commissions:i.reduce((e,t)=>e+(t.commission||0),0),retraitsPayes:a.filter(e=>e.sourceStore===`kin_ctn`).reduce((e,t)=>e+(t.montantRetrait||t.montant||0),0),nbRetraits:a.filter(e=>e.sourceStore===`kin_ctn`).length,aServir:r.filter(e=>(e.reste||0)>0).reduce((e,t)=>e+(t.reste||0),0),nbCodesEnAttente:r.filter(e=>(e.reste||0)>0).length,depenses:o.filter(e=>e.ville===`CTN`||e.ville===`AUTRE`).reduce((e,t)=>e+(t.montant||0),0),compEnvoyees:c.filter(e=>e.source===`CTN`).reduce((e,t)=>e+(t.montant||0),0),compRecues:c.filter(e=>e.dest===`CTN`).reduce((e,t)=>e+(t.montant||0),0)};l.marge=l.commissions-l.depenses,l.tauxMarge=l.commissions>0?l.marge/l.commissions*100:0,l.panierMoyen=l.nbEnvois>0?l.envoisEmis/l.nbEnvois:0;let u={envoisEmis:r.reduce((e,t)=>e+(t.recu||0),0),nbEnvois:r.length,commissions:r.reduce((e,t)=>e+(t.commission||0),0),retraitsPayes:a.filter(e=>e.sourceStore===`ctn_kin`).reduce((e,t)=>e+(t.montantRetrait||t.montant||0),0),nbRetraits:a.filter(e=>e.sourceStore===`ctn_kin`).length,aServir:i.filter(e=>(e.reste||0)>0).reduce((e,t)=>e+(t.reste||0),0),nbCodesEnAttente:i.filter(e=>(e.reste||0)>0).length,depenses:o.filter(e=>e.ville===`KIN`).reduce((e,t)=>e+(t.montant||0),0),compEnvoyees:c.filter(e=>e.source===`KIN`).reduce((e,t)=>e+(t.montant||0),0),compRecues:c.filter(e=>e.dest===`KIN`).reduce((e,t)=>e+(t.montant||0),0)};u.marge=u.commissions-u.depenses,u.tauxMarge=u.commissions>0?u.marge/u.commissions*100:0,u.panierMoyen=u.nbEnvois>0?u.envoisEmis/u.nbEnvois:0;let d={commissions:l.commissions+u.commissions,marge:l.marge+u.marge,depenses:l.depenses+u.depenses,aServir:l.aServir+u.aServir,nbEnvois:l.nbEnvois+u.nbEnvois};return d.tauxMarge=d.commissions>0?d.marge/d.commissions*100:0,{ctn:l,kin:u,total:d,raw:{kinCtn:r,ctnKin:i,retraits:a,depenses:o,compensations:c}}}function v(e,t,n,r){let i={};e.forEach(e=>{let a=(e.date||``).slice(0,10);!a||a<t||a>n||(i[a]=(i[a]||0)+(r(e)||0))});let a=[],o=t.split(`-`).map(Number),s=n.split(`-`).map(Number),c=new Date(o[0],o[1]-1,o[2]),l=new Date(s[0],s[1]-1,s[2]);for(;c<=l;){let e=c.getFullYear(),t=String(c.getMonth()+1).padStart(2,`0`),n=String(c.getDate()).padStart(2,`0`),r=e+`-`+t+`-`+n;a.push({date:r,valeur:i[r]||0}),c.setDate(c.getDate()+1)}return a}async function y(e){let t=await n(`mois_actif`)||new Date().toISOString().slice(0,7);e.innerHTML=`
    <h2 class="text-primary fw-bold mb-3" style="font-size:1.05rem;">🧮 Comptabilité &amp; Analyse</h2>

    <!-- Filtre période -->
    <div class="card card-tl">
      <div class="card-body py-2">
        <div class="d-flex align-center gap-2 flex-wrap">
          <label class="form-label mb-0" style="white-space:nowrap;">🔽 Période :</label>
          <select id="compta-periode" class="form-select" style="width:auto;min-width:160px;">
            <option value="jour">📅 Aujourd'hui</option>
            <option value="semaine">🗓️ Cette semaine</option>
            <option value="mois" selected>📆 Ce mois</option>
            <option value="annee">📊 Cette année</option>
          </select>
          <small id="compta-periode-info" class="text-secondary" style="font-style:italic;">—</small>
          <button id="compta-export-pdf" class="btn btn-outline-primary btn-sm" style="margin-left:auto;" onclick="window.exporterPDF && window.exporterPDF('mois')">📄 PDF</button>
        </div>
      </div>
    </div>

    <!-- Zone dynamique -->
    <div id="compta-contenu">
      <div class="p-3 text-center text-secondary small">Chargement…</div>
    </div>
  `,document.getElementById(`compta-periode`).addEventListener(`change`,async n=>{g=n.target.value,await b(e,t)}),window.__exporterPDF_trigger=()=>exporterPDF(t),await b(e,t)}async function b(t,n){let s=document.getElementById(`compta-contenu`);if(!s)return;let c=a(g),p=o(g);document.getElementById(`compta-periode-info`).textContent=`📆 `+c.label;let[m,h]=await Promise.all([_(c.debut,c.fin),_(p.debut,p.fin)]),y=await i(`CTN`,n),b=await i(`KIN`,n),x=y+b,S=Math.max(0,m.raw.ctnKin.reduce((e,t)=>e+(t.aServir||0),0)-m.raw.compensations.filter(e=>e.source===`CTN`).reduce((e,t)=>e+(t.montant||0),0)),C=Math.max(0,m.raw.kinCtn.reduce((e,t)=>e+(t.aServir||0),0)-m.raw.compensations.filter(e=>e.source===`KIN`).reduce((e,t)=>e+(t.montant||0),0)),w=new Date(new Date().getTime()-6048e5).toISOString().slice(0,10),T=[...m.raw.kinCtn,...m.raw.ctnKin].filter(e=>(e.reste||0)>0&&(e.date||``)<w),E=``;E+=`
    <div class="kpi-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-bottom:12px;">
      <div class="kpi-card" style="background:linear-gradient(135deg,#0d6e5c,#14a085);">
        <div class="label">💰 Commissions</div>
        <div class="value">${r(m.total.commissions)} $</div>
        ${l(m.total.commissions,h.total.commissions)}
      </div>
      <div class="kpi-card" style="background:${m.total.marge>=0?`linear-gradient(135deg,#198754,#20c997)`:`linear-gradient(135deg,#dc3545,#e85d6a)`};">
        <div class="label">📈 Marge nette</div>
        <div class="value">${r(m.total.marge)} $</div>
        ${l(m.total.marge,h.total.marge)}
        <div style="font-size:.65rem;opacity:.85;">Taux : ${r(m.total.tauxMarge)}%</div>
      </div>
      <div class="kpi-card" style="background:linear-gradient(135deg,#fd7e14,#ffa94d);">
        <div class="label">⚠️ Total à servir</div>
        <div class="value">${r(m.total.aServir)} $</div>
        <div style="font-size:.65rem;opacity:.85;">${m.ctn.nbCodesEnAttente+m.kin.nbCodesEnAttente} code(s) en attente</div>
      </div>
      <div class="kpi-card" style="background:linear-gradient(135deg,#0d6e5c,#0a5244);">
        <div class="label">💵 Trésorerie</div>
        <div class="value">${r(x)} $</div>
        <div style="font-size:.65rem;opacity:.85;">${r(y)} $ + ${r(b)} $</div>
      </div>
    </div>
  `;let D=m.ctn,O=m.kin,k=D.aServir>0?y/D.aServir:0,A=O.aServir>0?b/O.aServir:0,j=e=>e>=1.5?`<span class="badge bg-success">✅ Solide</span>`:e>=1?`<span class="badge bg-warning">⚠️ Juste</span>`:e>0?`<span class="badge bg-danger">🚨 Tension</span>`:`<span class="badge bg-secondary">—</span>`;E+=`
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header" style="background:var(--tl-primary);color:#fff;">🇧🇯 COTONOU</div>
          <div class="card-body p-2">
            <table class="table" style="font-size:.78rem;margin-bottom:0;">
              <tr><td>💵 Solde caisse</td><td class="text-end fw-bold">${r(y)} $</td></tr>
              <tr><td>📤 Envois émis</td><td class="text-end">${r(D.envoisEmis)} $ (${D.nbEnvois})</td></tr>
              <tr><td>💰 Commissions</td><td class="text-end text-success fw-bold">+${r(D.commissions)} $</td></tr>
              <tr><td>📥 Retraits payés</td><td class="text-end">${r(D.retraitsPayes)} $ (${D.nbRetraits})</td></tr>
              <tr><td>💸 Dépenses</td><td class="text-end text-danger">−${r(D.depenses)} $</td></tr>
              <tr style="background:#f0f7f5;"><td><strong>📊 Marge</strong></td><td class="text-end fw-bold">${r(D.marge)} $ (${r(D.tauxMarge)}%)</td></tr>
              <tr><td>⚠️ À servir (dette)</td><td class="text-end text-warning fw-bold">${r(D.aServir)} $</td></tr>
              <tr><td>🎯 Ratio couverture</td><td class="text-end">${k.toFixed(2)}x ${j(k)}</td></tr>
              <tr><td>🔄 Comp. envoyées</td><td class="text-end">${r(D.compEnvoyees)} $</td></tr>
              <tr><td>🔄 Comp. reçues</td><td class="text-end">${r(D.compRecues)} $</td></tr>
              <tr><td>📦 Panier moyen</td><td class="text-end">${r(D.panierMoyen)} $</td></tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header" style="background:var(--tl-success);color:#fff;">🇨🇩 KINSHASA</div>
          <div class="card-body p-2">
            <table class="table" style="font-size:.78rem;margin-bottom:0;">
              <tr><td>💵 Solde caisse</td><td class="text-end fw-bold">${r(b)} $</td></tr>
              <tr><td>📤 Envois émis</td><td class="text-end">${r(O.envoisEmis)} $ (${O.nbEnvois})</td></tr>
              <tr><td>💰 Commissions</td><td class="text-end text-success fw-bold">+${r(O.commissions)} $</td></tr>
              <tr><td>📥 Retraits payés</td><td class="text-end">${r(O.retraitsPayes)} $ (${O.nbRetraits})</td></tr>
              <tr><td>💸 Dépenses</td><td class="text-end text-danger">−${r(O.depenses)} $</td></tr>
              <tr style="background:#f0f7f5;"><td><strong>📊 Marge</strong></td><td class="text-end fw-bold">${r(O.marge)} $ (${r(O.tauxMarge)}%)</td></tr>
              <tr><td>⚠️ À servir (dette)</td><td class="text-end text-warning fw-bold">${r(O.aServir)} $</td></tr>
              <tr><td>🎯 Ratio couverture</td><td class="text-end">${A.toFixed(2)}x ${j(A)}</td></tr>
              <tr><td>🔄 Comp. envoyées</td><td class="text-end">${r(O.compEnvoyees)} $</td></tr>
              <tr><td>🔄 Comp. reçues</td><td class="text-end">${r(O.compRecues)} $</td></tr>
              <tr><td>📦 Panier moyen</td><td class="text-end">${r(O.panierMoyen)} $</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;let M=S-C,N=M>0?`🇧🇯 CTN doit ${r(M)} $ à 🇨🇩 KIN`:M<0?`🇨🇩 KIN doit ${r(Math.abs(M))} $ à 🇧🇯 CTN`:`✅ Caisses équilibrées`;E+=`
    <div class="card" style="border-left:4px solid #fd7e14;">
      <div class="card-header">🔄 Position inter-agences</div>
      <div class="card-body p-2" style="font-size:.82rem;">
        <div class="d-flex justify-between mb-1"><span>CTN → KIN (à compenser)</span><strong class="text-primary">${r(S)} $</strong></div>
        <div class="d-flex justify-between mb-1"><span>KIN → CTN (à compenser)</span><strong class="text-success">${r(C)} $</strong></div>
        <hr class="my-2">
        <div class="text-center fw-bold" style="font-size:.9rem;">${N}</div>
      </div>
    </div>
  `;let P=v([],c.debut,c.fin,()=>0).map(e=>e.date),F=v(m.raw.ctnKin,c.debut,c.fin,e=>e.commission||0),I=v(m.raw.kinCtn,c.debut,c.fin,e=>e.commission||0),L=0,R=0,z=F.map(e=>(L+=e.valeur,L)),B=I.map(e=>(R+=e.valeur,R)),V=v([...m.raw.kinCtn,...m.raw.ctnKin],c.debut,c.fin,e=>e.recu||0),H=v(m.raw.retraits,c.debut,c.fin,e=>e.montantRetrait||e.montant||0),U=m.raw.depenses.filter(e=>e.ville===`CTN`).reduce((e,t)=>e+(t.montant||0),0),W=m.raw.depenses.filter(e=>e.ville===`KIN`).reduce((e,t)=>e+(t.montant||0),0),G=m.raw.depenses.filter(e=>e.ville===`AUTRE`).reduce((e,t)=>e+(t.montant||0),0),K=[{label:`🇧🇯 Cotonou`,valeur:U,couleur:`#0d6e5c`},{label:`🇨🇩 Kinshasa`,valeur:W,couleur:`#198754`},{label:`Autres`,valeur:G,couleur:`#6c757d`}].filter(e=>e.valeur>0);E+=`
    <div class="card">
      <div class="card-header">📈 Évolution des commissions cumulées</div>
      <div class="card-body p-2">
        ${u({labels:P,hauteur:180,series:[{nom:`CTN`,valeurs:z,couleur:`#0d6e5c`},{nom:`KIN`,valeurs:B,couleur:`#198754`}]})}
      </div>
    </div>

    <div class="card">
      <div class="card-header">📊 Entrées vs Sorties par jour</div>
      <div class="card-body p-2">
        ${d({labels:P,hauteur:180,series:[{nom:`Entrées`,valeurs:V.map(e=>e.valeur),couleur:`#0d6e5c`},{nom:`Sorties`,valeurs:H.map(e=>e.valeur),couleur:`#dc3545`}]})}
      </div>
    </div>

    <div class="card">
      <div class="card-header">🥧 Répartition des dépenses</div>
      <div class="card-body p-2">
        ${K.length>0?f({donnees:K,taille:160}):`<div class="p-3 text-center text-secondary small">Aucune dépense sur la période</div>`}
      </div>
    </div>
  `;let q=[];y<D.aServir&&D.aServir>0&&q.push({type:`danger`,texte:`🚨 Cotonou : trésorerie (${r(y)} $) insuffisante pour les ${r(D.aServir)} $ à servir`}),b<O.aServir&&O.aServir>0&&q.push({type:`danger`,texte:`🚨 Kinshasa : trésorerie (${r(b)} $) insuffisante pour les ${r(O.aServir)} $ à servir`}),T.length>0&&q.push({type:`warning`,texte:`⚠️ ${T.length} code(s) non retiré(s) depuis plus de 7 jours`}),S>500&&q.push({type:`warning`,texte:`🔴 Compensation urgente : ${r(S)} $ dus par CTN à KIN`}),C>500&&q.push({type:`warning`,texte:`🔴 Compensation urgente : ${r(C)} $ dus par KIN à CTN`}),m.total.marge<0&&q.push({type:`danger`,texte:`📉 Marge négative sur la période : ${r(m.total.marge)} $`}),q.length>0?(E+=`<div class="card"><div class="card-header">🚨 Alertes</div><div class="card-body p-2">`,q.forEach(e=>{E+=`<div class="alert alert-${e.type}" style="margin-bottom:6px;padding:8px 12px;font-size:.78rem;">${e.texte}</div>`}),E+=`</div></div>`):E+=`<div class="alert alert-success text-center small">✅ Aucune alerte. Tout est sous contrôle.</div>`,s.innerHTML=E;async function J(t){try{let n=document.getElementById(`compta-export-pdf`);n&&(n.disabled=!0,n.textContent=`...`);let o=a(g),s=await _(o.debut,o.fin),c=await i(`CTN`,t),l=await i(`KIN`,t),u=s.ctn,d=s.kin,f={title:`color:#0d6e5c;font-size:20px;margin:0;letter-spacing:1px;`,sub:`color:#555;font-size:10px;margin-top:4px;`,h2:`color:#0d6e5c;font-size:13px;margin:16px 0 8px 0;border-bottom:2px solid #0d6e5c;padding-bottom:4px;`,table:`width:100%;border-collapse:collapse;font-size:11px;`,td:`padding:6px 8px;border-bottom:1px solid #e0e0e0;color:#222;`,tdRight:`padding:6px 8px;border-bottom:1px solid #e0e0e0;text-align:right;color:#222;`,th:`background:#0d6e5c;color:#ffffff;padding:8px;text-align:left;font-size:10px;`,thRight:`background:#0d6e5c;color:#ffffff;padding:8px;text-align:right;font-size:10px;`,green:`color:#198754;font-weight:bold;`,red:`color:#dc3545;font-weight:bold;`,orange:`color:#fd7e14;font-weight:bold;`,footer:`margin-top:24px;padding-top:10px;border-top:1px solid #cccccc;text-align:center;font-size:9px;color:#888888;`},p=(e,t,n)=>`<tr><td style="`+f.td+`">`+e+`</td><td style="`+f.tdRight+`">`+t+`</td><td style="`+f.tdRight+`">`+n+`</td></tr>`,m=`
      <div style="font-family:Arial,Helvetica,sans-serif;color:#222222;background:#ffffff;padding:20px;">
        <div style="text-align:center;border-bottom:3px double #0d6e5c;padding-bottom:12px;margin-bottom:16px;">
          <h1 style="${f.title}">AFRI LINK LEDGER</h1>
          <div style="${f.sub}">Système de gestion des transferts — Cotonou / Kinshasa</div>
          <div style="${f.sub}margin-top:8px;font-weight:bold;color:#0d6e5c;">RAPPORT FINANCIER</div>
          <div style="${f.sub}">${o.label}</div>
          <div style="color:#888888;font-size:9px;margin-top:4px;">Généré le ${new Date().toLocaleString(`fr-FR`)}</div>
        </div>

        <h2 style="${f.h2}">SYNTHÈSE GLOBALE</h2>
        <table style="${f.table}">
          <tr>
            <th style="${f.th}">Indicateur</th>
            <th style="${f.thRight}">Cotonou</th>
            <th style="${f.thRight}">Kinshasa</th>
          </tr>
          ${p(`Solde caisse`,`<strong>`+r(c)+` $</strong>`,`<strong>`+r(l)+` $</strong>`)}
          ${p(`Envois émis`,r(u.envoisEmis)+` $ (`+u.nbEnvois+`)`,r(d.envoisEmis)+` $ (`+d.nbEnvois+`)`)}
          ${p(`Commissions`,`<span style="`+f.green+`">+`+r(u.commissions)+` $</span>`,`<span style="`+f.green+`">+`+r(d.commissions)+` $</span>`)}
          ${p(`Retraits payés`,r(u.retraitsPayes)+` $ (`+u.nbRetraits+`)`,r(d.retraitsPayes)+` $ (`+d.nbRetraits+`)`)}
          ${p(`Dépenses`,`<span style="`+f.red+`">-`+r(u.depenses)+` $</span>`,`<span style="`+f.red+`">-`+r(d.depenses)+` $</span>`)}
          ${p(`<strong>Marge nette</strong>`,`<strong>`+r(u.marge)+` $ (`+r(u.tauxMarge)+`%)</strong>`,`<strong>`+r(d.marge)+` $ (`+r(d.tauxMarge)+`%)</strong>`)}
          ${p(`À servir (dette)`,`<span style="`+f.orange+`">`+r(u.aServir)+` $</span>`,`<span style="`+f.orange+`">`+r(d.aServir)+` $</span>`)}
          ${p(`Compensations envoyées`,r(u.compEnvoyees)+` $`,r(d.compEnvoyees)+` $`)}
          ${p(`Compensations reçues`,r(u.compRecues)+` $`,r(d.compRecues)+` $`)}
          ${p(`Panier moyen`,r(u.panierMoyen)+` $`,r(d.panierMoyen)+` $`)}
        </table>

        <h2 style="${f.h2}">TOTAUX CONSOLIDÉS</h2>
        <table style="${f.table}">
          <tr><td style="${f.td}">Commissions totales</td><td style="${f.tdRight}"><strong>${r(s.total.commissions)} $</strong></td></tr>
          <tr><td style="${f.td}">Marge nette totale</td><td style="${f.tdRight}"><strong style="${s.total.marge>=0?f.green:f.red}">${r(s.total.marge)} $ (${r(s.total.tauxMarge)}%)</strong></td></tr>
          <tr><td style="${f.td}">Trésorerie totale</td><td style="${f.tdRight}"><strong>${r(c+l)} $</strong></td></tr>
          <tr><td style="${f.td}">Total à servir</td><td style="${f.tdRight}"><strong style="${f.orange}">${r(s.total.aServir)} $</strong></td></tr>
          <tr><td style="${f.td}">Nombre d envois</td><td style="${f.tdRight}"><strong>${s.total.nbEnvois}</strong></td></tr>
        </table>

        <div style="${f.footer}">
          TransLedger v2 - ATIZOUN DIGICOM - atizoun@gmail.com - +229 01 97 74 40 35
        </div>
      </div>
    `,h=document.getElementById(`compta-print-area`);h&&h.remove(),h=document.createElement(`div`),h.id=`compta-print-area`,h.innerHTML=m,document.body.appendChild(h),await new Promise(e=>setTimeout(e,200)),window.print(),setTimeout(()=>{let e=document.getElementById(`compta-print-area`);e&&e.remove()},1e3),e.success(`Choisissez "Enregistrer en PDF" dans l'imprimante`),n&&(n.disabled=!1,n.textContent=`PDF`)}catch(t){console.error(`Erreur PDF:`,t),e.error(`Erreur PDF : `+(t.message||`inconnue`));let n=document.getElementById(`compta-export-pdf`);n&&(n.disabled=!1,n.textContent=`PDF`)}}window.exporterPDF=J}export{y as render};