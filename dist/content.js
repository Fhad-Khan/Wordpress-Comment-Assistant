(()=>{var Fo=/^(?:utm_.+|gclid|fbclid|msclkid)$/i;function fe(r){try{let s=new URL(r);if(!/^https?:$/.test(s.protocol))return"";s.hash="";for(let u of Array.from(s.searchParams.keys()))Fo.test(u)&&s.searchParams.delete(u);return s.searchParams.sort(),Oo(s.href)}catch{return""}}function Oo(r){return r.endsWith("/")?r.slice(0,-1):r}var A=Object.freeze({extensionEnabled:!0,apiKey:"",model:"openrouter/auto",commenterName:"",commenterEmail:"",autoGenerateName:!1,autoGenerateEmail:!1,autoPost:!1,googleMultiPageAutoPostEnabled:!1,googleMultiPageAutoPostLastPage:10,googleMultiPageAutoPostDelayMinSeconds:1,googleMultiPageAutoPostDelayMaxSeconds:5,hideCommentedPages:!0,stopRetryingFailedComments:!0,maxCommentAttempts:3,backlinkCheckFrequencyMinutes:5,unverifiedHistoryRetentionDays:3,backlinkCheckLinksPerRun:100,backlinkCheckBatchSize:10,additionalInstructions:"",onboardingComplete:!1,activeDomainId:""}),ta=Object.freeze({...A,commentHistory:[],commentHistoryRevision:0,commentHistoryMigrationVersion:0,failedCommentAttempts:[],domainProfiles:[],crawlProgress:null,openrouterVerification:null,openrouterCreditRefresh:null});function X(r){let s=Number.parseInt(r,10);return Number.isInteger(s)?Math.min(100,Math.max(1,s)):A.googleMultiPageAutoPostLastPage}function he(r,s){let u=Number.parseInt(r,10);if(Number.isInteger(u))return Math.min(300,Math.max(1,u));let m=Number.parseInt(s,10);return Number.isInteger(m)?Math.min(300,Math.max(1,m)):A.googleMultiPageAutoPostDelayMinSeconds}function ie(r){return String(r||"").replace(/\s+/g," ").trim()}var Mt=18e3;function Le(){let u=Array.from(document.querySelectorAll("form")).map(h=>({form:h,score:Ko(h)})).filter(({score:h})=>h>0).sort((h,E)=>E.score-h.score)[0]||null,m=u?.form||document,v=ot(m,["textarea#comment","textarea[name='comment']","textarea[id*='comment' i]","textarea[name*='comment' i]","[contenteditable='true'][id*='comment' i]","[contenteditable='true'][class*='comment' i]","textarea"]);return{form:m instanceof HTMLFormElement?m:v?.closest("form")||null,confidence:u?.score||0,comment:v,name:ot(m,["input#author","input[name='author']","input[name='name']","input[autocomplete='name']","input[id*='author' i]","input[placeholder*='name' i]"]),email:ot(m,["input#email","input[name='email']","input[type='email']","input[autocomplete='email']","input[placeholder*='email' i]"]),website:ot(m,["input#url","input[name='url']","input[name='website']","input[type='url']","input[autocomplete='url']","input[placeholder*='website' i]"])}}function at(r){return Ho(r)&&!!r.form&&!!nt(r.form)}function nt(r){if(!(r instanceof HTMLFormElement))return null;let s="button[type='submit'], input[type='submit'], button:not([type])",u=Array.from(r.querySelectorAll(s));if(r.id){let m=CSS.escape(r.id);u.push(...document.querySelectorAll(s.split(", ").map(v=>`${v}[form='${m}']`).join(", ")))}return u.find(m=>Vo(m))||null}function to(){let r=Zt(["meta[property='og:title']","meta[name='twitter:title']","article h1","main h1","h1.entry-title","h1.post-title","h1"])||document.title.trim(),s=Zt(["meta[name='author']","meta[property='article:author']","[rel='author']",".author-name",".byline"]),u=Qo();if(!u.length)throw new Error("No readable article container was found on this page.");let m=u.sort((w,G)=>G.score-w.score)[0].element.cloneNode(!0);Yo(m);let h=Wo(m,r).join(`

`).trim();h.length<120&&(h=ie(m.innerText||m.textContent||""));let E=h.length>Mt;if(E){let w=h.lastIndexOf(" ",Mt);h=`${h.slice(0,w>15e3?w:Mt).trim()}\u2026`}return{url:rt(),title:ie(r),author:ie(s),text:h,truncated:E}}function oo(r,s,u){let m=String(u.websiteUrl||"").trim(),v=r.website?s:Xo(s,m);return Ct(r.comment,v,!0),eo(r.name,u.commenterName),eo(r.email,u.commenterEmail),r.website&&m&&Ct(r.website,m,!1),v}function Ue(r){return r?.isContentEditable?r.textContent||"":r?.value||""}function rt(){let r=document.querySelector("link[rel='canonical'][href]")?.href;return/^https?:\/\//i.test(r||"")?r:location.href}function Ho(r){return r?.comment?r.confidence>=8?!0:r.comment.matches(["textarea#comment","textarea[name='comment']","textarea[id*='comment' i]","textarea[name*='comment' i]","[contenteditable='true'][id*='comment' i]","[contenteditable='true'][class*='comment' i]"].join(",")):!1}function Ko(r){let s=0,u=`${r.id} ${r.className}`.toLowerCase(),m=(r.getAttribute("action")||"").toLowerCase();return r.matches("#commentform, .comment-form")&&(s+=20),m.includes("wp-comments-post")&&(s+=25),(u.includes("comment")||u.includes("reply"))&&(s+=8),r.querySelector("textarea#comment, textarea[name='comment']")?s+=20:r.querySelector("textarea")&&(s+=3),r.querySelector("input[name='author'], input#author")&&(s+=3),r.querySelector("input[name='email'], input#email")&&(s+=3),s}function ot(r,s){for(let u of s){let m;try{m=r.querySelectorAll(u)}catch{continue}for(let v of m)if(jo(v))return v}return null}function jo(r){return r.disabled||r.readOnly||r.hidden||r.getAttribute("aria-hidden")==="true"||r instanceof HTMLInputElement&&r.type==="hidden"||r.closest("[hidden], [inert], [aria-hidden='true']")?!1:ao(r)}function Vo(r){return!r.disabled&&r.getAttribute("aria-disabled")!=="true"&&r.getAttribute("aria-hidden")!=="true"&&!r.closest("[hidden], [inert], [aria-hidden='true']")&&ao(r)}function ao(r){for(let s=r;s?.nodeType===1;s=s.parentElement){let u=getComputedStyle(s);if(u.display==="none"||u.visibility==="hidden")return!1}return!0}function Qo(){let r=[["[itemprop='articleBody']",90],[".entry-content",85],[".post-content",82],[".article-content",82],[".article-body",82],["article",75],["main",45],["[role='main']",40]],s=new Set,u=[];for(let[m,v]of r)for(let h of document.querySelectorAll(m)){if(s.has(h)||h.closest("aside, footer, nav, [class*='comment' i]"))continue;s.add(h);let E=ie(h.innerText||h.textContent||"").length;if(E<120)continue;let w=h.querySelectorAll("p").length,G=ie(Array.from(h.querySelectorAll("a")).map(K=>K.textContent).join(" ")).length,se=E?G/E*40:0;u.push({element:h,score:v+Math.min(E/250,45)+Math.min(w,15)-se})}return!u.length&&document.body&&u.push({element:document.body,score:1}),u}function Yo(r){let s=["script","style","noscript","template","svg","canvas","iframe","nav","header","footer","aside","form","button","input","textarea","select","[role='navigation']","[role='banner']","[role='contentinfo']","[aria-hidden='true']",".comments",".comment",".comment-respond",".comments-area","#comments","#respond",".related",".related-posts",".recommended",".newsletter",".subscribe",".subscription",".advertisement",".advertising",".ad-container","[class~='ad']","[id^='ad-']",".share",".sharing",".social-share",".social-links",".breadcrumbs",".breadcrumb",".pagination",".post-navigation",".author-box",".cookie",".popup",".modal"];for(let u of s)try{r.querySelectorAll(u).forEach(m=>m.remove())}catch{}}function Wo(r,s){let u=r.querySelectorAll("h1, h2, h3, h4, p, li, blockquote, figcaption, pre"),m=[],v=new Set,h=ie(s).toLowerCase();for(let E of u){let w=ie(E.innerText||E.textContent||""),G=w.toLowerCase();!w||w.length<18||G===h||v.has(G)||Jo(G)||(v.add(G),m.push(w))}return m}function Jo(r){return["leave a reply","post comment","cancel reply","required fields are marked","save my name","subscribe to","share this","related posts","read more"].some(s=>r===s||r.length<120&&r.startsWith(s))}function Zt(r){for(let s of r){let u=document.querySelector(s);if(!u)continue;let m=u instanceof HTMLMetaElement?u.content:u.innerText||u.textContent;if(m?.trim())return m.trim()}return""}function Xo(r,s){let u=String(r||"").trim(),m=String(s||"").trim();return!m||u.includes(m)?u:`${u}

${m}`}function eo(r,s){r&&s&&!Ue(r).trim()&&Ct(r,s,!1)}function Ct(r,s,u){if(r){if(r.isContentEditable)r.textContent=s;else{let m=r instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(m,"value")?.set;v?v.call(r,s):r.value=s}r.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:u?"insertText":void 0,data:s})),r.dispatchEvent(new Event("change",{bubbles:!0})),Zo(r)}}function Zo(r){let s=r.style.outline,u=r.style.outlineOffset;r.style.outline="3px solid #4caf72",r.style.outlineOffset="2px",setTimeout(()=>{r.style.outline=s,r.style.outlineOffset=u},1800)}(()=>{let r="relevant-comment-assistant-root",s="relevant-comment-google-bulk",u="relevantCommentAssistantGoogleMultiPageRun",m="relevantCommentAssistantGoogleMultiPageReport",h=new Set(["keygateDeviceId","keygateLicenseKey","keygateLicenseToken","keygateLicenseCache","keygateDailyUsage"]),E=Object.freeze({licensed:!1,plan:"free",status:"free",source:"default",entitlements:Object.freeze({auto_post_all:!1,auto_google_search:!1}),usage:Object.freeze({linksPerDay:Object.freeze({limit:0,remaining:0})}),deviceId:"",maskedLicenseKey:"",validUntil:"",tokenExpiresAt:"",lastCheckedAt:"",message:"Free plan",portalUrl:"",upgradeUrl:""}),w=!1,G="",se="generate",K=null,wt="",At="",le=new WeakMap,Z=new WeakSet,it=new WeakSet,st=!1,_e=!1,ee=mo(),lt=new Map,De=new Set,Et=new Set,ct=null,ze=!1,Fe=!1,B=!1,b="",F=null,we=null,Oe=null,Ae=!1,f={enabled:A.googleMultiPageAutoPostEnabled,lastPage:A.googleMultiPageAutoPostLastPage,delayMinSeconds:A.googleMultiPageAutoPostDelayMinSeconds,delayMaxSeconds:A.googleMultiPageAutoPostDelayMaxSeconds},He=Promise.resolve(),y=!1,g=null,ut=null,Ke=null,j=E,qt=Promise.resolve(E),ce=!1,te="";if(document.getElementById(r))return;document.addEventListener("click",_o,!0),document.addEventListener("submit",Uo,!0),chrome.storage.onChanged.addListener((e,t)=>{if(t!=="local"||(e.extensionEnabled&&mt(!!e.extensionEnabled.newValue),Object.keys(e).some(ro)&&be().catch(()=>{}),ee&&Object.keys(e).some(io)&&ko(e),!y))return;let o=e.commentHistoryRevision||e.commentHistory;(o||e.hideCommentedPages)&&(Xt(),ee&&o&&Rt())}),no().catch(()=>mt(!1));async function no(){let e=await chrome.storage.local.get({extensionEnabled:A.extensionEnabled,googleMultiPageAutoPostEnabled:A.googleMultiPageAutoPostEnabled,googleMultiPageAutoPostLastPage:null,googleMultiPageAutoPostPages:null,googleMultiPageAutoPostDelayMinSeconds:A.googleMultiPageAutoPostDelayMinSeconds,googleMultiPageAutoPostDelayMaxSeconds:A.googleMultiPageAutoPostDelayMaxSeconds});f=Gt(e),await be().catch(()=>{}),mt(!!e.extensionEnabled)}function ro(e){return h.has(e)||/(?:keygate|license)/i.test(e)}function io(e){return e==="googleMultiPageAutoPostEnabled"||e==="googleMultiPageAutoPostLastPage"||e==="googleMultiPageAutoPostPages"||e==="googleMultiPageAutoPostDelayMinSeconds"||e==="googleMultiPageAutoPostDelayMaxSeconds"}function be(){let e=qt.then(Nt,Nt);return qt=e.catch(()=>j),e}async function Nt(){let e=await Q({type:"GET_LICENSE_STATE"},{allowWhenDisabled:!0});if(!e?.ok)throw ge(e,"Could not load the license state.");let t=e.license||e.state||e.licenseState||e.publicState||(e.entitlements?e:null);if(!t||typeof t!="object")throw new Error("The background returned an invalid license state.");j=so(t);let o=co();return ee?(o.entered&&Qe(),o.restored&&(b="",So()),qo()):Ge(),j}function so(e){let t=e.entitlements&&typeof e.entitlements=="object"?{...e.entitlements}:{},o=e.usage&&typeof e.usage=="object"?e.usage:{},a=o.linksPerDay&&typeof o.linksPerDay=="object"?{...o.linksPerDay}:{},n=e.plan&&typeof e.plan=="object"?{...e.plan}:e.plan||"free";return{licensed:!!e.licensed,plan:n,status:String(e.status||(e.licensed?"active":"free")),source:String(e.source||"background"),entitlements:{...t,auto_post_all:t.auto_post_all===!0,auto_google_search:t.auto_google_search===!0},usage:{linksPerDay:a},deviceId:String(e.deviceId||""),maskedLicenseKey:String(e.maskedLicenseKey||""),validUntil:String(e.validUntil||""),tokenExpiresAt:String(e.tokenExpiresAt||""),lastCheckedAt:String(e.lastCheckedAt||""),message:String(e.message||""),portalUrl:String(e.portalUrl||""),upgradeUrl:String(e.upgradeUrl||"")}}function Ee(e){if(e==null||e==="")return null;let t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function qe(e=j){let t=e?.usage?.linksPerDay,o=t&&typeof t=="object"?t:{},a=Ee(o.limit),n=Ee(o.used),i=Ee(o.remaining);return{...o,limit:a,used:n,remaining:i,known:a!==null&&i!==null}}function lo(e=qe()){return e.known&&e.remaining<=0}function S(){return ce||lo()}function co(){let e=qe();if(!e.known)return{entered:!1,restored:!1};let t=ce;return ce=e.remaining<=0,te=ce?oe(e):"",{entered:!t&&ce,restored:t&&!ce}}function Tt(e){let t=String(e?.code||"").toUpperCase();return t==="DAILY_LINK_LIMIT_REACHED"||t==="QUOTA_EXCEEDED"}function uo(e){let t=e?.details&&typeof e.details=="object"?e.details:{},o=t.linksPerDay&&typeof t.linksPerDay=="object"?t.linksPerDay:t,a=qe(),n=Ee(o.limit)??a.limit,i=Ee(o.used)??n??a.used;return{...a,...o,limit:n,used:i,remaining:0,known:n!==null}}function dt(e){if(!Tt(e))return!1;let t=uo(e);return j={...j,usage:{...j.usage||{},linksPerDay:{...t}}},ce=!0,te=oe(t),ee&&Qe(),Ge(),!0}function oe(e=qe()){let o=String(e.period||"daily").trim().toLowerCase()==="daily"?"daily ":"",a=e.limit!==null?` (${e.used??e.limit} of ${e.limit} used)`:"",n=Date.parse(String(e.resetsAt||"")),i=Number.isFinite(n)?` until it resets ${new Date(n).toLocaleString()}`:" until your quota resets";return`You've reached your ${o}backlink quota${a}. Comment Assistant is paused${i}.`}function mt(e){if(e!==y){if(y=e,!e){clearTimeout(ut),clearTimeout(ct),Ve(),ee&&V(),Fe=!1,Ke?.disconnect(),g?.host.remove(),document.getElementById(s)?.remove(),document.getElementById("relevant-comment-google-styles")?.remove(),document.querySelectorAll(".rca-google-tools").forEach(t=>{t.__rcaResultAnchor&&(t.__rcaResultAnchor.dataset.rcaCommentChecked="false"),t.remove()}),st=!1,_e=!1,K=null,w=!1,G="",se="generate",g&&(g.button.disabled=!1,g.button.classList.remove("post"),g.button.textContent="AI Fill Comment",g.status.className="status",delete g.status.dataset.quotaTerminal);return}g?g.host.isConnected||document.documentElement.appendChild(g.host):g=Go(),Ge(),Xt(),ee&&(go(),po(),Rt().finally(()=>gt(0))),Ke||(Ke=new MutationObserver(()=>{clearTimeout(ut),ut=setTimeout($e,120),ee&&gt(180)})),Ke.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-hidden","class","disabled","hidden","inert","style"]})}}function mo(){try{let e=new URL(location.href);return/(^|\.)google\.[a-z.]+$/i.test(e.hostname)&&e.pathname==="/search"}catch{return!1}}function go(){if(!y||document.getElementById("relevant-comment-google-styles"))return;let e=document.createElement("style");e.id="relevant-comment-google-styles",e.textContent=`
      /* Hallmark \xB7 pre-emit critique: P5 H5 E5 S5 R5 V4
       * Hallmark \xB7 component: Google auto-post panel \xB7 genre: modern-minimal \xB7 theme: Quiet
       * states: default \xB7 hover \xB7 focus \xB7 active \xB7 disabled \xB7 loading \xB7 error \xB7 success
       * contrast: pass (46\xE2\u20AC\u201C50) \xC2\xB7 responsive: pass (36, 59)
       */
      .rca-google-tools {
        all: initial;
        display: flex !important;
        position: relative !important;
        inset: auto !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: fit-content !important;
        gap: 8px !important;
        margin: 8px 0 4px !important;
        direction: ltr !important;
        writing-mode: horizontal-tb !important;
        text-align: left !important;
        transform: none !important;
        rotate: none !important;
        scale: none !important;
        unicode-bidi: isolate;
        color: #4d5156;
        font: 500 12px/1.25 Arial, sans-serif;
      }
      .rca-google-tools * {
        box-sizing: border-box !important;
        direction: ltr !important;
        writing-mode: horizontal-tb !important;
        text-orientation: mixed !important;
        transform: none !important;
      }
      .rca-google-status {
        display: inline-flex !important;
        align-items: center !important;
        min-height: 26px !important;
        border-radius: 999px !important;
        padding: 4px 9px !important;
        background: #f1f3f4 !important;
        color: #4d5156 !important;
        font: 600 12px/1.2 Arial, sans-serif !important;
        white-space: nowrap !important;
      }
      .rca-google-tools[data-state='supported'] .rca-google-status,
      .rca-google-tools[data-state='submitted'] .rca-google-status { background: #e6f4ea !important; color: #137333 !important; }
      .rca-google-tools[data-state='commented'] .rca-google-status { background: #e8f0fe !important; color: #1967d2 !important; }
      .rca-google-tools[data-state='unsupported'] .rca-google-status,
      .rca-google-tools[data-state='error'] .rca-google-status { background: #fce8e6 !important; color: #b3261e !important; }
      .rca-google-tools[data-state='manual'] .rca-google-status { background: #fef7e0 !important; color: #8a5a00 !important; }
      .rca-google-tools[data-license-blocked='true'] .rca-google-status { background: #fef7e0 !important; color: #8a5a00 !important; }
      .rca-google-button {
        appearance: none !important;
        min-height: 28px !important;
        border: 1px solid #dadce0 !important;
        border-radius: 999px !important;
        padding: 5px 11px !important;
        background: #fff !important;
        color: #1a73e8 !important;
        cursor: pointer !important;
        font: 600 12px/1.2 Arial, sans-serif !important;
      }
      .rca-google-button:hover:not(:disabled) { border-color: #1a73e8 !important; background: #f8fbff !important; }
      .rca-google-button:disabled { color: #80868b !important; cursor: default !important; opacity: .8 !important; }
      .rca-google-bulk {
        all: initial;
        --rca-color-paper: oklch(99% 0.004 255);
        --rca-color-paper-2: oklch(96.5% 0.008 255);
        --rca-color-rule: oklch(87% 0.012 255);
        --rca-color-rule-strong: oklch(74% 0.018 255);
        --rca-color-muted: oklch(45% 0.025 255);
        --rca-color-ink: oklch(24% 0.018 255);
        --rca-color-accent: oklch(48% 0.19 255);
        --rca-color-accent-hover: oklch(43% 0.18 255);
        --rca-color-accent-ink: oklch(99% 0.004 255);
        --rca-color-focus: oklch(14% 0.04 255);
        --rca-color-success: oklch(43% 0.12 145);
        --rca-color-error: oklch(48% 0.17 28);
        --rca-font-ui: Arial, sans-serif;
        --rca-space-2xs: 4px;
        --rca-space-xs: 8px;
        --rca-space-sm: 12px;
        --rca-space-md: 16px;
        --rca-space-lg: 20px;
        --rca-radius-input: 10px;
        --rca-radius-panel: 18px;
        --rca-radius-pill: 999px;
        --rca-duration-micro: 120ms;
        --rca-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
        --rca-shadow-panel: 0 16px 40px oklch(24% 0.018 255 / .16), 0 2px 8px oklch(24% 0.018 255 / .08);
        --rca-z-overlay: 2147483647;
        box-sizing: border-box !important;
        position: fixed !important;
        right: 12px !important;
        bottom: 12px !important;
        z-index: var(--rca-z-overlay) !important;
        display: flex !important;
        flex-direction: column !important;
        gap: var(--rca-space-sm) !important;
        width: min(392px, calc(100% - 24px)) !important;
        max-height: calc(100dvh - 24px) !important;
        overflow-y: auto !important;
        border: 1px solid var(--rca-color-rule) !important;
        border-radius: var(--rca-radius-panel) !important;
        padding: var(--rca-space-lg) !important;
        background: var(--rca-color-paper) !important;
        box-shadow: var(--rca-shadow-panel) !important;
        color: var(--rca-color-ink) !important;
        font: 500 14px/1.45 var(--rca-font-ui) !important;
        direction: ltr !important;
        text-align: left !important;
      }
      .rca-google-bulk * { box-sizing: border-box !important; font-family: var(--rca-font-ui) !important; }
      .rca-google-bulk-header {
        display: flex !important;
        align-items: flex-start !important;
        justify-content: space-between !important;
        gap: var(--rca-space-md) !important;
        min-width: 0 !important;
      }
      .rca-google-bulk-heading { min-width: 0 !important; }
      .rca-google-bulk-title {
        font-size: 17px !important;
        font-weight: 700 !important;
        line-height: 1.2 !important;
        letter-spacing: -.02em !important;
      }
      .rca-google-bulk-context {
        margin-top: var(--rca-space-2xs) !important;
        color: var(--rca-color-muted) !important;
        font-size: 12px !important;
        font-weight: 500 !important;
      }
      .rca-google-bulk-badge,
      .rca-google-multi-page-badge {
        display: inline-flex !important;
        align-items: center !important;
        min-height: 24px !important;
        border: 1px solid var(--rca-color-rule) !important;
        border-radius: var(--rca-radius-pill) !important;
        padding: 3px 8px !important;
        background: var(--rca-color-paper-2) !important;
        color: var(--rca-color-muted) !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        line-height: 1 !important;
        white-space: nowrap !important;
      }
      .rca-google-quota {
        display: grid !important;
        gap: var(--rca-space-xs) !important;
        border: 1px solid var(--rca-color-rule) !important;
        border-radius: var(--rca-radius-input) !important;
        padding: var(--rca-space-sm) !important;
        background: var(--rca-color-paper-2) !important;
      }
      .rca-google-quota-header {
        display: flex !important;
        align-items: baseline !important;
        justify-content: space-between !important;
        gap: var(--rca-space-sm) !important;
      }
      .rca-google-quota-label,
      .rca-google-quota-value {
        color: var(--rca-color-ink) !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        line-height: 1.2 !important;
      }
      .rca-google-quota-value { font-variant-numeric: tabular-nums !important; }
      .rca-google-quota-meter {
        display: block !important;
        width: 100% !important;
        height: 7px !important;
        overflow: hidden !important;
        border-radius: var(--rca-radius-pill) !important;
        background: var(--rca-color-rule) !important;
      }
      .rca-google-quota-fill {
        display: block !important;
        width: 0;
        height: 100% !important;
        border-radius: inherit !important;
        background: var(--rca-color-success) !important;
        transition: width var(--rca-duration-micro) var(--rca-ease-out) !important;
      }
      .rca-google-quota-fill[data-tone='warning'] { background: var(--rca-color-accent) !important; }
      .rca-google-quota-fill[data-tone='error'] { background: var(--rca-color-error) !important; }
      .rca-google-quota-detail {
        color: var(--rca-color-muted) !important;
        font-size: 11px !important;
        font-weight: 500 !important;
        line-height: 1.35 !important;
      }
      .rca-google-bulk-summary {
        min-height: 40px !important;
        color: var(--rca-color-muted) !important;
        font-size: 14px !important;
        line-height: 1.45 !important;
      }
      .rca-google-bulk[data-state='success'] .rca-google-bulk-summary { color: var(--rca-color-success) !important; }
      .rca-google-bulk[data-state='error'] .rca-google-bulk-summary { color: var(--rca-color-error) !important; }
      .rca-google-session {
        display: grid !important;
        gap: var(--rca-space-sm) !important;
        border-block: 1px solid var(--rca-color-rule) !important;
        padding-block: var(--rca-space-sm) !important;
      }
      .rca-google-session[hidden] { display: none !important; }
      .rca-google-session-stats {
        display: grid !important;
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        min-width: 0 !important;
      }
      .rca-google-session-stat {
        display: grid !important;
        gap: var(--rca-space-2xs) !important;
        min-width: 0 !important;
        padding-inline: var(--rca-space-xs) !important;
      }
      .rca-google-session-stat:first-child { padding-inline-start: 0 !important; }
      .rca-google-session-stat + .rca-google-session-stat { border-inline-start: 1px solid var(--rca-color-rule) !important; }
      .rca-google-session-value {
        overflow: hidden !important;
        color: var(--rca-color-ink) !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        font-variant-numeric: tabular-nums !important;
        line-height: 1.1 !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      .rca-google-session-stat[data-stat='published'] .rca-google-session-value { color: var(--rca-color-success) !important; }
      .rca-google-session-stat[data-stat='failed'] .rca-google-session-value { color: var(--rca-color-error) !important; }
      .rca-google-session-stat-label {
        overflow: hidden !important;
        color: var(--rca-color-muted) !important;
        font-size: 10px !important;
        font-weight: 700 !important;
        line-height: 1.2 !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      .rca-google-multi-page {
        display: grid !important;
        gap: var(--rca-space-sm) !important;
        border-block: 1px solid var(--rca-color-rule) !important;
        padding-block: var(--rca-space-sm) !important;
      }
      .rca-google-bulk[data-run-active='true'] .rca-google-multi-page,
      .rca-google-bulk[data-run-active='true'] .rca-google-bulk-button { display: none !important; }
      .rca-google-multi-page-toggle {
        display: grid !important;
        grid-template-columns: 20px minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: var(--rca-space-sm) !important;
        min-height: 44px !important;
        cursor: pointer !important;
      }
      .rca-google-multi-page-toggle[data-disabled='true'] { cursor: not-allowed !important; }
      .rca-google-multi-page-checkbox {
        width: 18px !important;
        height: 18px !important;
        margin: 0 !important;
        accent-color: var(--rca-color-accent) !important;
      }
      .rca-google-multi-page-copy {
        display: grid !important;
        gap: var(--rca-space-2xs) !important;
        min-width: 0 !important;
      }
      .rca-google-multi-page-label {
        color: var(--rca-color-ink) !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 1.25 !important;
      }
      .rca-google-multi-page-description,
      .rca-google-multi-page-helper {
        color: var(--rca-color-muted) !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        line-height: 1.4 !important;
      }
      .rca-google-multi-page-helper { min-height: 1lh !important; }
      .rca-google-multi-page-fields {
        display: grid !important;
        grid-template-columns: minmax(96px, .8fr) minmax(0, 1.4fr) !important;
        gap: var(--rca-space-sm) !important;
      }
      .rca-google-multi-page-field {
        display: grid !important;
        gap: var(--rca-space-xs) !important;
        min-width: 0 !important;
        color: var(--rca-color-muted) !important;
        font-size: 12px !important;
        font-weight: 700 !important;
      }
      .rca-google-multi-page-delay {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: var(--rca-space-xs) !important;
      }
      .rca-google-multi-page-number {
        width: 100% !important;
        min-width: 0 !important;
        height: 44px !important;
        border: 1px solid var(--rca-color-rule-strong) !important;
        border-radius: var(--rca-radius-input) !important;
        padding: 0 var(--rca-space-sm) !important;
        outline: 2px solid transparent !important;
        outline-offset: 1px !important;
        background: var(--rca-color-paper) !important;
        color: var(--rca-color-ink) !important;
        font-size: 14px !important;
        font-variant-numeric: tabular-nums !important;
      }
      .rca-google-multi-page-number:invalid {
        border-color: var(--rca-color-error) !important;
        color: var(--rca-color-error) !important;
      }
      .rca-google-multi-page-checkbox:focus-visible,
      .rca-google-multi-page-number:focus-visible,
      .rca-google-bulk-button:focus-visible,
      .rca-google-bulk-stop:focus-visible {
        outline: 2px solid var(--rca-color-focus) !important;
        outline-offset: 2px !important;
      }
      .rca-google-multi-page-checkbox:active:not(:disabled),
      .rca-google-multi-page-number:active:not(:disabled) {
        outline: 2px solid var(--rca-color-focus) !important;
        outline-offset: 1px !important;
      }
      .rca-google-multi-page-checkbox:disabled,
      .rca-google-multi-page-number:disabled {
        opacity: .55 !important;
        cursor: not-allowed !important;
      }
      .rca-google-bulk-button {
        appearance: none !important;
        min-height: 44px !important;
        border: 1px solid var(--rca-color-accent) !important;
        border-radius: var(--rca-radius-pill) !important;
        padding: 10px 16px !important;
        background: var(--rca-color-accent) !important;
        color: var(--rca-color-accent-ink) !important;
        cursor: pointer !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 1.2 !important;
        white-space: nowrap !important;
        transition: transform var(--rca-duration-micro) var(--rca-ease-out) !important;
      }
      .rca-google-bulk-button:active:not(:disabled),
      .rca-google-bulk-stop:active:not(:disabled) { transform: translateY(1px) !important; }
      .rca-google-bulk-button:disabled,
      .rca-google-bulk-stop:disabled {
        border-color: var(--rca-color-rule) !important;
        background: var(--rca-color-paper-2) !important;
        color: var(--rca-color-muted) !important;
        cursor: not-allowed !important;
        opacity: .72 !important;
      }
      .rca-google-bulk-stop {
        appearance: none !important;
        min-height: 44px !important;
        border: 1px solid var(--rca-color-rule-strong) !important;
        border-radius: var(--rca-radius-pill) !important;
        padding: 10px 16px !important;
        background: var(--rca-color-paper) !important;
        color: var(--rca-color-ink) !important;
        cursor: pointer !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        line-height: 1.2 !important;
        white-space: nowrap !important;
        transition: transform var(--rca-duration-micro) var(--rca-ease-out) !important;
      }
      .rca-google-bulk-stop[hidden] { display: none !important; }
      @media (hover: hover) and (pointer: fine) {
        .rca-google-bulk-button:hover:not(:disabled) { background: var(--rca-color-accent-hover) !important; }
        .rca-google-bulk-stop:hover:not(:disabled),
        .rca-google-multi-page-number:hover:not(:disabled) { background: var(--rca-color-paper-2) !important; }
        .rca-google-multi-page-checkbox:hover:not(:disabled) {
          outline: 1px solid var(--rca-color-rule-strong) !important;
          outline-offset: 2px !important;
        }
      }
      @media (max-width: 27rem) {
        .rca-google-bulk { padding: var(--rca-space-md) !important; }
        .rca-google-multi-page-fields { grid-template-columns: minmax(0, 1fr) !important; }
      }
      @media (prefers-reduced-motion: reduce) {
        .rca-google-bulk-button,
        .rca-google-bulk-stop { transition-duration: 0ms !important; }
        .rca-google-bulk-button:active:not(:disabled),
        .rca-google-bulk-stop:active:not(:disabled) { transform: none !important; }
      }
    `,(document.head||document.documentElement).appendChild(e)}function po(){if(!y||document.getElementById(s))return;let e=document.createElement("section");e.id=s,e.className="rca-google-bulk",e.setAttribute("aria-label","Google comment actions");let t=document.createElement("header");t.className="rca-google-bulk-header";let o=document.createElement("div");o.className="rca-google-bulk-heading";let a=document.createElement("div");a.className="rca-google-bulk-title",a.textContent="Comment Assistant";let n=document.createElement("div");n.className="rca-google-bulk-context",n.textContent="Google result posting",o.append(a,n);let i=document.createElement("span");i.className="rca-google-bulk-badge",i.textContent="Auto post",t.append(o,i);let l=document.createElement("section");l.className="rca-google-quota",l.setAttribute("aria-label","Backlink quota");let c=document.createElement("div");c.className="rca-google-quota-header";let d=document.createElement("span");d.className="rca-google-quota-label",d.textContent="Backlink quota";let P=document.createElement("strong");P.className="rca-google-quota-value",P.textContent="Checking\u2026",c.append(d,P);let M=document.createElement("span");M.className="rca-google-quota-meter",M.setAttribute("role","progressbar"),M.setAttribute("aria-label","Backlink quota used"),M.setAttribute("aria-valuemin","0"),M.setAttribute("aria-valuemax","100"),M.setAttribute("aria-valuenow","0");let N=document.createElement("span");N.className="rca-google-quota-fill",M.append(N);let L=document.createElement("span");L.className="rca-google-quota-detail",L.textContent="Loading current usage\u2026",l.append(c,M,L);let U=document.createElement("div");U.className="rca-google-bulk-summary",U.setAttribute("role","status"),U.setAttribute("aria-live","polite");let x=document.createElement("section");x.className="rca-google-session",x.hidden=!0,x.setAttribute("aria-label","Current Google posting session");let C=document.createElement("div");C.className="rca-google-session-stats";for(let[$,zo]of[["published","Published"],["failed","Failed"],["attempted","Attempts"],["pages","Pages"]]){let tt=document.createElement("div");tt.className="rca-google-session-stat",tt.dataset.stat=$;let St=document.createElement("strong");St.className="rca-google-session-value",St.textContent="0";let vt=document.createElement("span");vt.className="rca-google-session-stat-label",vt.textContent=zo,tt.append(St,vt),C.append(tt)}x.append(C);let D=document.createElement("div");D.className="rca-google-multi-page";let T=document.createElement("label");T.className="rca-google-multi-page-toggle";let k=document.createElement("input");k.className="rca-google-multi-page-checkbox",k.type="checkbox",k.checked=f.enabled,k.setAttribute("aria-describedby","rca-google-multi-page-helper");let _=document.createElement("span");_.className="rca-google-multi-page-copy";let re=document.createElement("span");re.className="rca-google-multi-page-label",re.textContent="Continue across pages";let pe=document.createElement("span");pe.className="rca-google-multi-page-description",pe.textContent="Post this page, wait, then open Next.",_.append(re,pe);let ve=document.createElement("span");ve.className="rca-google-multi-page-badge",ve.textContent="Pro",T.append(k,_,ve),T.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),!k.disabled&&setTimeout(()=>{k.disabled||(k.checked=!k.checked,ht(e,k))},0)});let Pt=document.createElement("div");Pt.className="rca-google-multi-page-fields";let Xe=document.createElement("label");Xe.className="rca-google-multi-page-field",Xe.append("Last page");let H=document.createElement("input");H.className="rca-google-multi-page-number",H.type="number",H.min=String(ue()),H.max="100",H.step="1",H.value=String(f.lastPage),H.dataset.preference="lastPage",H.setAttribute("aria-label","Last Google result page to process"),Xe.append(H);let Ze=document.createElement("label");Ze.className="rca-google-multi-page-field",Ze.append("Random delay");let kt=document.createElement("span");kt.className="rca-google-multi-page-delay";let z=document.createElement("input");z.className="rca-google-multi-page-number",z.type="number",z.min="1",z.max="300",z.step="1",z.value=String(f.delayMinSeconds),z.dataset.preference="delayMinSeconds",z.setAttribute("aria-label","Minimum random delay in seconds");let Be=z.cloneNode();Be.value=String(f.delayMaxSeconds),Be.dataset.preference="delayMaxSeconds",Be.setAttribute("aria-label","Maximum random delay in seconds"),kt.append(z,"to",Be,"sec"),Ze.append(kt),Pt.append(Xe,Ze);let et=document.createElement("div");et.id="rca-google-multi-page-helper",et.className="rca-google-multi-page-helper",et.textContent="The last page is included. Multi-page continuation requires Pro.",D.append(T,Pt,et);let Me=document.createElement("button");Me.className="rca-google-bulk-button",Me.type="button",Me.disabled=!0,Me.textContent="Checking all results\u2026",Me.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),jt()});let Ce=document.createElement("button");Ce.className="rca-google-bulk-stop",Ce.type="button",Ce.hidden=!0,Ce.textContent="Stop after current page",Ce.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),Pe()}),k.addEventListener("change",()=>ht(e,k));for(let $ of[H,z,Be])$.addEventListener("change",()=>ht(e,$));e.append(t,l,x,U,D,Me,Ce),(document.body||document.documentElement).appendChild(e),ye(e),p()}function gt(e=180){y&&(clearTimeout(ct),p(),ct=setTimeout(()=>{fo().catch(()=>{})},e))}async function fo(){if(y){if(await $t(),ze){Fe=!0;return}ze=!0;try{do{Fe=!1;let e=xo(),t=new Map;for(let i of e){let l=No(i.anchor,i.url);if(Te(i.url)){ke(l);continue}if(Ne(i.url)){Ie(l);continue}let c=lt.get(i.url);if(c){Te(i.url,c.finalUrl)?ke(l):Ne(i.url,c.finalUrl)?Ie(l):Ot(l,c);continue}let d=t.get(i.url)||{url:i.url,toolbars:[]};d.toolbars.push(l),t.set(i.url,d)}let o=Array.from(t.values()),a=0,n=Array.from({length:Math.min(8,o.length)},async()=>{for(;y&&a<o.length;){let i=o[a];if(a+=1,await $t(),Te(i.url)){i.toolbars.forEach(c=>ke(c));continue}if(Ne(i.url)){i.toolbars.forEach(c=>Ie(c));continue}let l=await yo(i.url);lt.set(i.url,l),i.toolbars.forEach(c=>{Te(i.url,l.finalUrl)?ke(c):Ne(i.url,l.finalUrl)?Ie(c):Ot(c,l)})}});await Promise.all(n)}while(Fe)}finally{ze=!1,p(),Ao()}}}function Rt(){let e=He.then(It,It);return He=e.catch(()=>{}),e}async function It(){try{let e=Array.from(document.querySelectorAll("#search a[href]")).filter(o=>o.querySelector("h3")&&pt(o)).map(o=>ft(o.getAttribute("href"))).filter(Boolean),t=await Q({type:"HAS_COMMENT_HISTORY_PAGES",urls:e});if(b="",De.clear(),t?.ok&&Array.isArray(t.matches))for(let o of t.matches)De.add(fe(o));bo(),p()}catch{}}async function $t(){let e;do e=He,await e;while(e!==He)}function Ne(...e){return e.some(t=>De.has(fe(t)))}function Te(...e){return e.some(t=>Et.has(fe(t)))}function ho(...e){for(let t of e){let o=fe(t);o&&Et.add(o)}}function bo(){let e=!1;for(let t of document.querySelectorAll(".rca-google-tools")){let o=lt.get(t.dataset.url);if(Te(t.dataset.url,o?.finalUrl))ke(t);else if(Ne(t.dataset.url,o?.finalUrl))Ie(t);else if(t.dataset.state==="commented"){let a=t.__rcaResultAnchor;a&&(a.dataset.rcaCommentChecked="false"),t.remove(),e=!0}}e&&gt(0)}async function yo(e){try{let t=await Q({type:"CHECK_COMMENT_PAGE",url:e});if(!t?.ok)throw ge(t,"Could not inspect this result.");if(t.inspection?.alreadyCommented)for(let o of[e,t.inspection.finalUrl]){let a=fe(o);a&&De.add(a)}return{ok:!0,...t.inspection}}catch(t){return{ok:!1,reason:Y(t,"Could not inspect this result.")}}}function xo(){let e=[];for(let t of document.querySelectorAll("#search a[href]")){if(t.dataset.rcaCommentChecked==="true"||!t.querySelector("h3")||!pt(t))continue;let o=ft(t.getAttribute("href"));o&&(t.dataset.rcaCommentChecked="true",e.push({anchor:t,url:o}))}return e}function pt(e){return e.closest("[hidden], [aria-hidden='true']")?!1:typeof e.getClientRects!="function"?!0:Array.from(e.getClientRects()).some(t=>t.width>0&&t.height>0)}function ft(e){try{let t=new URL(e,location.href);if(/(^|\.)google\.[a-z.]+$/i.test(t.hostname)&&t.pathname==="/url"){let o=t.searchParams.get("q")||t.searchParams.get("url");if(!o)return"";t=new URL(o)}return!/^https?:$/.test(t.protocol)||Po(t.hostname)?"":(t.hash="",t.href)}catch{return""}}function Po(e){return/(^|\.)google\.[a-z.]+$/i.test(e)||/(^|\.)(?:googleadservices\.com|doubleclick\.net)$/i.test(e)}function Gt(e={}){let t=ue(),o=Math.max(t,X(e.googleMultiPageAutoPostLastPage??e.googleMultiPageAutoPostPages??e.lastPage??e.pages)),a=he(e.googleMultiPageAutoPostDelayMinSeconds??e.delayMinSeconds,A.googleMultiPageAutoPostDelayMinSeconds),n=he(e.googleMultiPageAutoPostDelayMaxSeconds??e.delayMaxSeconds,A.googleMultiPageAutoPostDelayMaxSeconds);return a>n&&([a,n]=[n,a]),{enabled:!!(e.googleMultiPageAutoPostEnabled??e.enabled),lastPage:o,delayMinSeconds:a,delayMaxSeconds:n}}function ko(e){let t={googleMultiPageAutoPostEnabled:e.googleMultiPageAutoPostEnabled?.newValue??f.enabled,googleMultiPageAutoPostLastPage:e.googleMultiPageAutoPostLastPage?.newValue??e.googleMultiPageAutoPostPages?.newValue??f.lastPage,googleMultiPageAutoPostDelayMinSeconds:e.googleMultiPageAutoPostDelayMinSeconds?.newValue??f.delayMinSeconds,googleMultiPageAutoPostDelayMaxSeconds:e.googleMultiPageAutoPostDelayMaxSeconds?.newValue??f.delayMaxSeconds};f=Gt(t);let o=document.getElementById(s);o&&ye(o),p()}async function ht(e,t){let o=e.querySelector(".rca-google-multi-page-checkbox"),a=e.querySelector("[data-preference='lastPage']"),n=e.querySelector("[data-preference='delayMinSeconds']"),i=e.querySelector("[data-preference='delayMaxSeconds']");if(t===o&&o.checked&&!xe()){o.checked=!1,b=Bt(),ye(e),p();return}let l=he(n.value,f.delayMinSeconds),c=he(i.value,f.delayMaxSeconds);l>c&&(t===i?l=c:c=l),f={enabled:o.checked,lastPage:Math.max(ue(),X(a.value)),delayMinSeconds:l,delayMaxSeconds:c},b="",ye(e),p();try{await chrome.storage.local.set({googleMultiPageAutoPostEnabled:f.enabled,googleMultiPageAutoPostLastPage:f.lastPage,googleMultiPageAutoPostDelayMinSeconds:f.delayMinSeconds,googleMultiPageAutoPostDelayMaxSeconds:f.delayMaxSeconds})}catch(d){e.dataset.state="error",b=Y(d,"Could not save the multi-page settings."),p()}}function ye(e=document.getElementById(s)){if(!e)return;let t=e.querySelector(".rca-google-multi-page-checkbox"),o=e.querySelector(".rca-google-multi-page-toggle"),a=e.querySelector(".rca-google-multi-page-helper"),n=e.querySelector(".rca-google-bulk-stop"),i=R(),l=xe(),c=S(),d=l&&!c,P=!!i||B||c,M=!!i||f.enabled;t.checked!==M&&(t.checked=M);let N=!d||P;t.disabled!==N&&(t.disabled=N);let L=String(t.disabled);o.dataset.disabled!==L&&(o.dataset.disabled=L);for(let _ of e.querySelectorAll(".rca-google-multi-page-number")){let re=!d||!f.enabled||P;_.disabled!==re&&(_.disabled=re)}let U={lastPage:f.lastPage,delayMinSeconds:f.delayMinSeconds,delayMaxSeconds:f.delayMaxSeconds};for(let[_,re]of Object.entries(U)){let pe=e.querySelector(`[data-preference='${_}']`);_==="lastPage"&&(pe.min=String(ue()));let ve=String(re);pe.value!==ve&&(pe.value=ve)}let x=!i;n.hidden!==x&&(n.hidden=x);let C=i?.stopRequested===!0;n.disabled!==C&&(n.disabled=C);let D=C?"Stopping after current page\xE2\u20AC\xA6":"Stop after current page";n.textContent!==D&&(n.textContent=D);let T=String(!!i);e.dataset.runActive!==T&&(e.dataset.runActive=T),$o(e,i);let k=c?te||oe():de()?l?i?`Processing ${Ut(i)}: ${i.completedPages} of ${i.targetPages} complete.`:`Current page: ${ue()}. The last page is included.`:"Basic can post this page. Continuing through result pages requires Pro.":"Free can inspect results, but Google auto-posting requires Basic or Pro.";a.textContent!==k&&(a.textContent=k)}function xe(){return j?.entitlements?.auto_google_search===!0}function Bt(){return"Upgrade to Pro to continue automatically across Google result pages."}function Lt(){return f.enabled&&xe()&&!S()}function Re(e=location.href){try{let t=new URL(e,location.href);return!/(^|\.)google\.[a-z.]+$/i.test(t.hostname)||t.pathname!=="/search"?"":String(t.searchParams.get("q")||"").replace(/\s+/g," ").trim()}catch{return""}}function R(){try{if(typeof sessionStorage>"u")return null;let e=sessionStorage.getItem(u);if(!e)return null;let t=JSON.parse(e);if(!t||t.active!==!0||t.version!==2)return null;let o=X(t.startPage),a=Math.max(o,X(t.lastPage)),n=a-o+1,i=he(t.delayMinSeconds,A.googleMultiPageAutoPostDelayMinSeconds),l=he(t.delayMaxSeconds,A.googleMultiPageAutoPostDelayMaxSeconds);return i>l&&([i,l]=[l,i]),{version:2,active:!0,runId:String(t.runId||""),keyword:String(t.keyword||Re()).replace(/\s+/g," ").trim(),startedAt:Math.max(0,Number(t.startedAt)||0),startPage:o,lastPage:a,targetPages:n,completedPages:Math.min(n,Math.max(0,Number.parseInt(t.completedPages,10)||0)),posted:Math.max(0,Number.parseInt(t.posted,10)||0),failed:Math.max(0,Number.parseInt(t.failed,10)||0),stopRequested:t.stopRequested===!0,stopReason:String(t.stopReason||""),quotaBlocked:t.quotaBlocked===!0,delayMinSeconds:i,delayMaxSeconds:l,expectedPageUrl:String(t.expectedPageUrl||""),resumeAt:Math.max(0,Number(t.resumeAt)||0),visitedPageKeys:Array.isArray(t.visitedPageKeys)?t.visitedPageKeys.map(String).filter(Boolean).slice(-100):[]}}catch{return null}}function je(e){try{return typeof sessionStorage>"u"?!1:(sessionStorage.setItem(u,JSON.stringify(e)),!0)}catch{return!1}}function V(){try{typeof sessionStorage<"u"&&sessionStorage.removeItem(u)}catch{}}function So(){try{typeof sessionStorage<"u"&&sessionStorage.removeItem(m)}catch{}}function bt(){try{if(typeof sessionStorage>"u")return null;let e=sessionStorage.getItem(m);if(!e)return null;let t=JSON.parse(e),o=String(t?.keyword||"").replace(/\s+/g," ").trim();if(!t||t.version!==1||!o||o!==Re())return null;let a=X(t.startPage),n=Math.max(a,X(t.lastPage)),i=n-a+1;return{version:1,runId:String(t.runId||""),keyword:o,status:["running","stopping","stopped","finished","error"].includes(t.status)?t.status:"stopped",startedAt:Math.max(0,Number(t.startedAt)||0),endedAt:Math.max(0,Number(t.endedAt)||0),startPage:a,lastPage:n,targetPages:i,completedPages:Math.min(i,Math.max(0,Number.parseInt(t.completedPages,10)||0)),posted:Math.max(0,Number.parseInt(t.posted,10)||0),failed:Math.max(0,Number.parseInt(t.failed,10)||0),message:String(t.message||"")}}catch{return null}}function I(e,t="running",o=""){try{if(typeof sessionStorage>"u"||!e)return!1;let a=bt(),n={version:1,runId:String(e.runId||""),keyword:String(e.keyword||Re()).replace(/\s+/g," ").trim(),status:t,startedAt:Math.max(0,Number(e.startedAt)||(a?.runId===e.runId?a.startedAt:0)||Date.now()),endedAt:["stopped","finished","error"].includes(t)?Date.now():0,startPage:e.startPage,lastPage:e.lastPage,completedPages:e.completedPages,posted:e.posted,failed:e.failed,message:String(o||"")};return n.keyword?(sessionStorage.setItem(m,JSON.stringify(n)),!0):!1}catch{return!1}}function Ve(){clearTimeout(we),clearTimeout(Oe),we=null,Oe=null,Ae=!1}function Pe(e="Multi-page auto-post stopped. This page will finish any submissions already in progress.",t="stopped"){let o=R();if(o&&B){o.stopRequested=!0,o.stopReason="",o.quotaBlocked=!1,je(o),I(o,"stopping",e),b="Stop requested. Finishing submissions already running on this page.",p();return}Ve(),o&&I(o,t,e),V(),b=e;let a=document.getElementById(s);a&&(a.dataset.state="default"),p()}function Qe(){if(!ee||!S())return;let e=te||oe();Ve();let t=R();t&&(t.stopRequested=!0,t.stopReason=e,t.quotaBlocked=!0,B?(je(t),I(t,"stopping",e)):(I(t,"stopped",e),V())),b=e;let o=document.getElementById(s);o&&(o.dataset.state="error");for(let a of document.querySelectorAll(".rca-google-tools"))me(a);p()}function vo(){let e=ae(location.href),t=ue(),o=Math.max(t,f.lastPage),a=Date.now();return{version:2,active:!0,runId:`${a}-${Math.random().toString(36).slice(2,10)}`,keyword:Re(),startedAt:a,startPage:t,lastPage:o,targetPages:o-t+1,completedPages:0,posted:0,failed:0,stopRequested:!1,stopReason:"",quotaBlocked:!1,delayMinSeconds:f.delayMinSeconds,delayMaxSeconds:f.delayMaxSeconds,expectedPageUrl:location.href,resumeAt:0,visitedPageKeys:e?[e]:[]}}function ue(e=location.href){try{let t=new URL(e,location.href);if(!/(^|\.)google\.[a-z.]+$/i.test(t.hostname)||t.pathname!=="/search")return 1;let o=Number.parseInt(t.searchParams.get("start"),10);if(Number.isInteger(o)&&o>=0)return X(Math.floor(o/10)+1);let a=Number.parseInt(t.searchParams.get("page"),10);return Number.isInteger(a)&&a>=1?X(a):1}catch{return 1}}function Mo(e){return e.startPage===e.lastPage?String(e.startPage):`${e.startPage}\u2013${e.lastPage}`}function Ut(e){return e.startPage===e.lastPage?`page ${e.startPage}`:`pages ${Mo(e)}`}function Ye(e){return Math.min(e.lastPage,e.startPage+e.completedPages)}function ae(e){try{let t=new URL(e,location.href);if(!/(^|\.)google\.[a-z.]+$/i.test(t.hostname)||t.pathname!=="/search")return"";let o=["q","start","page"].map(a=>`${a}=${t.searchParams.get(a)||""}`).join("&");return`${t.pathname}?${o}`}catch{return""}}function _t(e){let t=ae(e);return!!t&&t===ae(location.href)}function Dt(){let e=[];for(let o of["a#pnnext[href]","a[aria-label='Next page'][href]","a[aria-label='Next'][href]","a[rel='next'][href]"]){let a=document.querySelector(o);a&&e.push(a)}for(let o of document.querySelectorAll("a[href]")){let a=`${o.getAttribute("aria-label")||""} ${o.textContent||""}`.trim();/^next(?: page)?$/i.test(a)&&e.push(o)}let t=ae(location.href);for(let o of e)try{let a=new URL(o.getAttribute("href"),location.href),n=ae(a.href);if(!n||n===t)continue;let i=new URL(location.href);if((a.searchParams.get("q")||"")!==(i.searchParams.get("q")||""))continue;return a.href}catch{}return""}function Co(e){let t=e.delayMinSeconds*1e3,o=e.delayMaxSeconds*1e3;return t+Math.floor(Math.random()*(o-t+1))}function zt(e){let t=Math.max(0,e)/1e3;return`${t>=10?Math.round(t):t.toFixed(1)} seconds`}function wo(e){let t=ae(location.href),o=ae(e?.expectedPageUrl),a=e?.visitedPageKeys||[],n=a[a.length-2]||"",i=a[a.length-1]||"";return!!(e?.resumeAt&&t&&t===n&&o&&o===i)}function Ft(e){if(we)return;let t=Math.max(0,e.resumeAt-Date.now());we=setTimeout(()=>{if(we=null,S()){Qe();return}let o=R();if(!(!o||o.runId!==e.runId))try{let a=o.expectedPageUrl;typeof location.assign=="function"?location.assign(a):location.href=a}catch(a){Pe(Y(a,"Google could not open the next result page."),"error")}},t)}function Ao(){let e=R();if(!e||B||Ae||ze)return;if(S()){Qe();return}if(!y||!de()||!xe()){Pe("Multi-page auto-post stopped because the current plan no longer includes it.");return}if(!_t(e.expectedPageUrl)){if(wo(e)){Ft(e),p();return}Pe("Multi-page auto-post stopped because the Google search or result page changed.");return}if(yt()>0||document.querySelector(".rca-google-tools[data-state='checking']"))return;let t=Math.max(0,e.resumeAt-Date.now()),o=Ye(e);Ae=!0,b=t?`Page ${o} of ${e.lastPage} is ready. Auto-post starts in ${zt(t)}.`:`Starting page ${o} of ${e.lastPage}\u2026`,p(),Oe=setTimeout(()=>{Oe=null,Ae=!1,jt({resume:!0})},t)}async function Eo(e){let t=R();if(!t)return!1;t.completedPages+=1,t.posted+=e.posted,t.failed+=e.failed,t.resumeAt=0;let o=t.startPage+t.completedPages-1,a=`${t.posted} posted${t.failed?`, ${t.failed} failed`:""}`;if(t.stopRequested){let c=t.stopReason?`${t.stopReason} Page ${o} finished: ${a}.`:`Stopped after page ${o}: ${a}.`;I(t,"stopped",c),V(),b=c;let d=document.getElementById(s);return d&&(d.dataset.state=t.quotaBlocked?"error":"default"),!1}if(t.completedPages>=t.targetPages){let c=`Finished ${Ut(t)}: ${a}.`;I(t,"finished",c),V(),b=c;let d=document.getElementById(s);return d&&(d.dataset.state=t.failed?"error":"success"),!1}let n=Dt();if(!n){let c=`Finished at page ${o}: Google has no Next page before requested page ${t.lastPage}. ${a}.`;I(t,"finished",c),V(),b=c;let d=document.getElementById(s);return d&&(d.dataset.state=t.failed?"error":"success"),!1}let i=ae(n);if(!i||t.visitedPageKeys.includes(i)){let c=`Multi-page auto-post stopped to avoid revisiting the same Google result page. ${a}.`;I(t,"error",c),V(),b=c;let d=document.getElementById(s);return d&&(d.dataset.state="error"),!1}let l=Co(t);if(t.expectedPageUrl=n,t.resumeAt=Date.now()+l,t.visitedPageKeys.push(i),!je(t)){let c="This tab could not retain the multi-page run. No automatic navigation was started.";I(t,"error",c),V(),b=c;let d=document.getElementById(s);return d&&(d.dataset.state="error"),!1}return b=`Page ${o} of ${t.lastPage} complete: ${a}. Opening Next in ${zt(l)}.`,I(t,"running",b),Ft(t),!0}function de(){return j?.entitlements?.auto_post_all===!0}function We(){return"Upgrade to Basic or Pro to auto-post Google results."}function ne(e,t){e.__rcaLicenseBaseTitle=t,e.dataset.licenseBlocked="false",e.title=t;let o=e.querySelector(".rca-google-button");o&&(o.title="")}function me(e){let t=e.dataset.state;if(t!=="supported"&&t!=="post-failed"&&t!=="quota-blocked"){e.dataset.licenseBlocked="false",e.dataset.quotaBlocked="false";return}let o=e.querySelector(".rca-google-button");if(o){if(!de()){let a=e.__rcaLicenseBaseTitle||e.title;e.dataset.licenseBlocked="true",e.dataset.quotaBlocked="false",e.title=`${a?`${a} `:""}${We()}`,o.disabled=!0,o.textContent="Upgrade to auto-post",o.title=We();return}if(S()){let a=te||oe();e.dataset.licenseBlocked="false",e.dataset.quotaBlocked="true",e.title=a,o.disabled=!0,o.textContent="Quota reached",o.title=a;return}if(t==="quota-blocked"){e.dataset.state="post-failed";let a=e.querySelector(".rca-google-status");a&&(a.textContent="Quota available \u2014 ready to retry"),e.__rcaLicenseBaseTitle="Backlink quota is available again. Retry this submission."}e.dataset.licenseBlocked="false",e.dataset.quotaBlocked="false",e.title=e.__rcaLicenseBaseTitle||e.title,o.title="",o.disabled=!1,o.textContent=e.dataset.state==="post-failed"?"Retry Post":"Post Comment"}}function qo(){let e=R();!xe()&&e&&(Ve(),I(e,"stopped","Multi-page auto-post stopped because the current plan does not include automatic Google navigation."),V(),b="Multi-page auto-post stopped because the current plan does not include automatic Google navigation.");for(let t of document.querySelectorAll(".rca-google-tools"))me(t);ye(),p()}function No(e,t){b="";let o=document.createElement("div");o.className="rca-google-tools",o.dataset.state="checking",o.dataset.url=t,o.__rcaResultAnchor=e;let a=document.createElement("span");a.className="rca-google-status",a.textContent="Checking comment form\u2026";let n=document.createElement("button");return n.className="rca-google-button",n.type="button",n.disabled=!0,n.textContent="Checking\u2026",n.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),!B&&Ht(o,t)}),o.append(a,n),To(e,o),p(),o}function To(e,t){let o=e.parentElement,a=null,n=null;for(;o&&o.id!=="search";){let c=Array.from(o.querySelectorAll("h3")).filter(P=>P.closest("a[href]")).length;if(c>1)break;if(c===1){a=o;let P=Number.parseFloat(getComputedStyle(o).marginBottom||"0");Number.isFinite(P)&&P>0&&(n=o)}let d=o.querySelector(".VwiC3b, .IsZvec, [data-sncf]");if(d&&!d.contains(e)){d.insertAdjacentElement("afterend",t);return}o=o.parentElement}let i=n||a;if(i){i.append(t);return}(e.closest(".yuRUbf")||e.parentElement||e).insertAdjacentElement("afterend",t)}function Ot(e,t){let o=e.querySelector(".rca-google-status"),a=e.querySelector(".rca-google-button");if(t.retryBlocked){e.dataset.state="retry-blocked",o.textContent="\u26A0 Max retries reached",ne(e,t.reason||`Retry limit reached (${t.attempts} of ${t.maxAttempts}).`),a.disabled=!0,a.textContent="Retries stopped",p();return}if(!t.ok){e.dataset.state="error",o.textContent="\u2715 Check failed",ne(e,t.reason||"The page source could not be inspected."),a.disabled=!0,a.textContent="Unavailable",p();return}if(!t.hasCommentForm){e.dataset.state="unsupported",o.textContent="\u2715 No comment form",ne(e,t.reason||"No supported comment fields were found in the page source."),a.disabled=!0,a.textContent="Unavailable",p();return}if(!t.canAutoComment){e.dataset.state="manual",o.textContent="\u2713 Comments available",ne(e,t.reason||"This form must be completed on the page."),a.disabled=!0,a.textContent="Open page required",p();return}e.dataset.state="supported",o.textContent="\u2713 Comments available",ne(e,t.title||t.finalUrl||"Comment form found"),a.disabled=!1,a.textContent="Post Comment",me(e),p()}function Ie(e){let t=e.querySelector(".rca-google-status"),o=e.querySelector(".rca-google-button");e.dataset.state="commented",t.textContent="\u2713 Already commented",ne(e,"This page is already recorded in Comment History."),o.disabled=!0,o.textContent="Already posted",p()}function ke(e,t=""){let o=e.querySelector(".rca-google-status"),a=e.querySelector(".rca-google-button"),n=e.dataset.state==="submitted"?e.title:"";e.dataset.state="submitted",o.textContent="\u2713 Comment submitted",ne(e,t||n||"The comment was submitted during this Google session and saved to history."),a.disabled=!0,a.textContent="Submitted",p()}async function Ht(e,t){if(!y)return!1;let o=e.querySelector(".rca-google-status"),a=e.querySelector(".rca-google-button");if(!de()||S())return me(e),p(),!1;if(a.disabled)return;B||(b=""),a.disabled=!0,a.textContent="Posting\u2026",o.textContent="Generating comment\u2026",e.dataset.state="checking";let n;try{if(n=await Q({type:"AUTO_COMMENT_PAGE",url:t}),!n?.ok)throw ge(n,"Automatic comment submission failed.");return ho(t,n.submission?.pageUrl),ke(e,n.submission?.responseUrl),!0}catch(i){if(Tt(i))return e.dataset.state="quota-blocked",o.textContent="Quota reached",a.disabled=!0,a.textContent="Quota reached",dt(i),me(e),be().catch(()=>{}),!1;let l=!!n?.retryBlocked;return e.dataset.state=l?"retry-blocked":"post-failed",o.textContent=l?"\u26A0 Retry limit reached":"\u26A0 Submission failed",ne(e,Y(i,"Automatic comment submission failed.")),a.disabled=l,a.textContent=l?"Retries stopped":"Retry Post",l||me(e),xt(i)&&be().catch(()=>{}),!1}finally{p()}}function yt(){let e=0;for(let t of document.querySelectorAll("#search a[href]"))t.dataset.rcaCommentChecked==="true"||!t.querySelector("h3")||!pt(t)||ft(t.getAttribute("href"))&&(e+=1);return e}function Kt(){return!de()||S()?[]:Array.from(document.querySelectorAll(".rca-google-tools")).filter(e=>e.dataset.state==="supported"||e.dataset.state==="post-failed")}function q(e,t){e.textContent!==t&&(e.textContent=t)}function Se(e,t){e.disabled!==t&&(e.disabled=t)}function Ro(e=document.getElementById(s)){if(!e)return;let t=qe(),o=e.querySelector(".rca-google-quota-value"),a=e.querySelector(".rca-google-quota-meter"),n=e.querySelector(".rca-google-quota-fill"),i=e.querySelector(".rca-google-quota-detail");if(!o||!a||!n||!i)return;let l=t.used??0,c=t.limit,d=t.remaining,P=c===null?0:c<=0?d===0?100:0:Math.min(100,Math.max(0,Math.round(l/c*100))),M=t.known?c===null?`${l} used`:`${l} / ${c}`:"Unavailable";q(o,M);let N=String(P);a.getAttribute("aria-valuenow")!==N&&a.setAttribute("aria-valuenow",N);let L=t.known?`${l} used, ${d} remaining`:"Backlink quota usage unavailable";a.getAttribute("aria-valuetext")!==L&&a.setAttribute("aria-valuetext",L);let U=`${P}%`;n.style.width!==U&&(n.style.width=U),n.dataset.percent!==N&&(n.dataset.percent=N);let x=P>=100?"error":P>=80?"warning":"active";n.dataset.tone!==x&&(n.dataset.tone=x);let C=Date.parse(String(t.resetsAt||"")),D=Number.isFinite(C)?` \xB7 resets ${new Date(C).toLocaleString()}`:"",T=t.known?`${d} remaining${D}`:"Current quota usage is temporarily unavailable.";q(i,T);let k=e.querySelector(".rca-google-quota"),_=S()?"exhausted":"available";k?.dataset.state!==_&&(k.dataset.state=_)}function Io(e=R()){if(e){let t=B&&F?F:{posted:0,failed:0};return{keyword:e.keyword||Re(),status:e.stopRequested?"stopping":"running",completedPages:e.completedPages,targetPages:e.targetPages,posted:e.posted+t.posted,failed:e.failed+t.failed}}return bt()}function $o(e,t=R()){let o=e.querySelector(".rca-google-session");if(!o)return;let a=Io(t);if(!a){o.hidden||(o.hidden=!0);return}o.hidden&&(o.hidden=!1);let n={published:a.posted,failed:a.failed,attempted:a.posted+a.failed,pages:`${a.completedPages} / ${a.targetPages}`};for(let[i,l]of Object.entries(n))q(o.querySelector(`[data-stat='${i}'] .rca-google-session-value`),String(l))}function p(){let e=document.getElementById(s);if(!e)return;Ro(e),ye(e);let t=e.querySelector(".rca-google-bulk-summary"),o=e.querySelector(".rca-google-bulk-button"),a=Array.from(document.querySelectorAll(".rca-google-tools")),n=a.filter(x=>x.dataset.state==="checking").length,i=yt(),l=a.length+i;if(!de()){e.hasAttribute("aria-busy")&&e.removeAttribute("aria-busy"),e.dataset.state="default",q(t,We()),Se(o,!0),q(o,"Upgrade to auto-post"),o.title=We();return}if(S()){let x=te||oe();B?e.setAttribute("aria-busy","true"):e.hasAttribute("aria-busy")&&e.removeAttribute("aria-busy"),e.dataset.state="error",q(t,x),Se(o,!0),q(o,"Quota reached"),o.title=x;return}if(o.title="",B&&F){let{completed:x,total:C,posted:D,failed:T}=F;e.getAttribute("aria-busy")!=="true"&&e.setAttribute("aria-busy","true"),e.dataset.state="loading";let k=R();q(t,k?`Page ${Ye(k)} of ${k.lastPage}: ${x} of ${C} finished, ${D} posted${T?`, ${T} failed`:""}.`:`Posting all at once: ${x} of ${C} finished, ${D} posted${T?`, ${T} failed`:""}.`),Se(o,!0),q(o,C?`Posting all ${C}\u2026`:"Finishing this page\u2026");return}if(e.hasAttribute("aria-busy")&&e.removeAttribute("aria-busy"),n>0||i>0){let x=Math.max(0,l-n-i),C=R();e.dataset.state="loading",q(t,C?`Page ${Ye(C)} of ${C.lastPage}: checking results (${x} of ${l} complete)\u2026`:`Checking results (${x} of ${l} complete)\u2026`),Se(o,!0),q(o,"Checking all results\u2026");return}let c=R();if(c){e.dataset.state="loading",q(t,b||`Preparing page ${Ye(c)} of ${c.lastPage}\u2026`),Se(o,!0),q(o,Ae?"Auto-post scheduled\u2026":"Multi-page auto-post running\u2026");return}let d=Kt(),P=d.filter(x=>x.dataset.state==="post-failed").length,M=Lt(),N=bt(),L=M&&f.lastPage>ue()&&!!Dt();b||(e.dataset.state=N?.status==="error"?"error":N?.status==="finished"?"success":"default");let U=l?`All ${l} results checked. ${d.length} ready to post.`:"No organic search results found yet.";q(t,b||N?.message||(M?`${U} Multi-page will stop after page ${f.lastPage}.`:U)),Se(o,d.length===0&&!L),q(o,d.length===0?L?"Continue to Next Page":"Nothing to post":P===d.length?`Retry Failed (${d.length})`:`Post Comment to All (${d.length})`)}async function jt({resume:e=!1}={}){if(!y||B||!de()||S()){p();return}let t=R(),o=e?!!t:Lt();if(o&&!xe()){Pe(Bt());return}let a=Kt();if(!(!a.length&&!o||yt()>0||document.querySelector(".rca-google-tools[data-state='checking']"))){if(!e&&o){if(t=vo(),!je(t)){I(t,"error","This tab could not retain a multi-page run. Current-page posting is still available."),b="This tab could not retain a multi-page run. Current-page posting is still available.";let n=document.getElementById(s);n&&(n.dataset.state="error"),p();return}I(t,"running","Starting multi-page auto-post.")}if(e&&(!t||!_t(t.expectedPageUrl))){Pe("Multi-page auto-post stopped because the Google result page changed.");return}B=!0,b="",F={completed:0,total:a.length,posted:0,failed:0},p();try{await Promise.all(a.map(async c=>{let d=await Ht(c,c.dataset.url);F.completed+=1,d?F.posted+=1:F.failed+=1,p()}));let{posted:n,failed:i,total:l}=F;if(o)await Eo({posted:n,failed:i,total:l});else if(S()){b=te||oe();let c=document.getElementById(s);c&&(c.dataset.state="error")}else{b=i?`Finished ${l}: ${n} posted, ${i} failed. Per-page retry limits apply.`:`Finished: all ${n} comments were submitted.`;let c=document.getElementById(s);c&&(c.dataset.state=i?"error":"success")}}finally{B=!1,F=null,p()}}}function Go(){let e=document.createElement("div");e.id=r,e.style.display="none";let t=e.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        :host { all: initial; }
        .wrap {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 2147483647;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          max-width: min(360px, calc(100vw - 36px));
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        button {
          appearance: none;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 999px;
          padding: 11px 17px;
          background: #00489c;
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,.22);
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          font-weight: 650;
          line-height: 1.2;
          letter-spacing: -.01em;
          transition: transform .15s ease, opacity .15s ease, background .15s ease;
        }
        button:hover { background: #003b80; transform: translateY(-1px); }
        button.post { background: #238636; }
        button.post:hover { background: #1a6f2c; }
        button:focus-visible { outline: 3px solid #8ab4ff; outline-offset: 2px; }
        button:disabled { cursor: wait; opacity: .75; transform: none; }
        .status {
          display: none;
          box-sizing: border-box;
          max-width: 100%;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #fff;
          color: #252525;
          box-shadow: 0 8px 30px rgba(0,0,0,.16);
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.4;
        }
        .status.show { display: block; }
        .status.error { border-color: #efb2b2; color: #8a1f1f; }
        .status.success { border-color: #a8d9b7; color: #176332; }
        @media (max-width: 600px) {
          .wrap { top: 10px; right: 10px; max-width: calc(100vw - 20px); }
          button { padding: 10px 14px; }
        }
      </style>
      <div class="wrap">
        <button type="button" title="Extract this article and draft a relevant comment">AI Fill Comment</button>
        <div class="status" role="status" aria-live="polite"></div>
      </div>`;let o=t.querySelector("button"),a=t.querySelector(".status");return o.addEventListener("click",Bo),document.documentElement.appendChild(e),{host:e,button:o,status:a}}function Bo(){if(y){if(S()){O();return}se==="post"?Vt():Lo()}}async function Lo(){if(!y||w)return;if(S()){O();return}let e=Le();if(!at(e)){$e();return}let t=Ue(e.comment).trim();if(t&&t!==wt){J("The comment field already has text. Clear it before generating so your writing is not overwritten.","error",8e3),e.comment.focus();return}W(!0,"Reading article\u2026");try{let o=to();if(o.text.length<120)throw new Error("Could not isolate enough article text. This page may not contain a standard article.");W(!0,"Writing comment\u2026");let a=await Q({type:"GENERATE_COMMENT",article:o});if(!a?.ok)throw ge(a,"Comment generation failed.");if(!y)return;let n=Le();if(!n.comment)throw new Error("The comment form disappeared while the comment was being generated.");wt=oo(n,a.comment,a.profile||{}),At=String(a.profile?.websiteUrl||"").trim(),K=n.form,n.form&&le.set(n.form,n),Je("post");let l=!!a.workflow?.autoPost;J(l?"Comment fields filled. Auto-posting after validation\u2026":"Comment fields filled. Review everything before clicking Post Comment.","success",9e3),n.comment.scrollIntoView({behavior:"smooth",block:"center"}),n.comment.focus({preventScroll:!0}),l&&setTimeout(()=>{y&&!S()&&se==="post"&&K===n.form&&Vt(!0)},400)}catch(o){J(Y(o,"Could not generate the comment."),"error",9e3)}finally{W(!1)}}async function Vt(e=!1){if(!y||w)return;if(S()){O();return}let t=Le();if(!at(t)||t.form!==K){Je("generate"),$e();return}if(!t.form.checkValidity()){t.form.reportValidity(),J("Complete the required fields before posting.","error",7e3);return}let o=nt(t.form);if(!o){Je("generate"),$e();return}W(!0,"Posting\u2026"),J(e?"Auto-posting through this page's comment form\u2026":"Submitting through this page's comment form\u2026","success",5e3);let a="",n=!1;try{a=await Yt(),await Jt(t,a),n=!0,Z.add(t.form),o.click(),setTimeout(()=>{document.contains(t.form)&&W(!1)},3e3)}catch(i){let l=null;if(a&&!n)try{await Wt(a)}catch(M){l=M}let c=dt(i);if((c||xt(i))&&be().catch(()=>{}),W(!1),c){O();return}let d=Y(i,"The page could not submit this comment."),P=l?` Reservation cleanup also failed: ${Y(l,"unknown error")}`:"";J(`${d}${P}`,"error",1e4)}}function Uo(e){let t=e.target;if(!(!t||!le.has(t))){if(!y){le.delete(t),Z.delete(t);return}if(Z.has(t)){Z.delete(t),le.delete(t);return}if(S()){e.preventDefault(),e.stopImmediatePropagation(),O();return}e.preventDefault(),e.stopImmediatePropagation(),Qt(t,e.submitter||nt(t))}}function _o(e){let t=e.target?.closest?.("button, input[type='submit'], input[type='image']");if(!t)return;let o=String(t.getAttribute?.("type")||(t.tagName==="BUTTON"?"submit":"")).toLowerCase();if(!["submit","image"].includes(o))return;let a=t.closest?.("form");if(!a||!le.has(a))return;if(!y){le.delete(a),Z.delete(a);return}if(Z.has(a)){setTimeout(()=>Z.delete(a),0);return}if(S()){e.preventDefault(),e.stopImmediatePropagation(),O();return}if(!(t.hasAttribute?.("formnovalidate")||t.formNoValidate===!0)&&typeof a.checkValidity=="function"&&!a.checkValidity()){a.reportValidity?.();return}e.preventDefault(),e.stopImmediatePropagation(),Qt(a,t)}function Qt(e,t){if(it.has(e))return;if(S()){O();return}it.add(e);let o=le.get(e);Do(e,o,t).finally(()=>it.delete(e))}async function Do(e,t,o){if(!t?.comment||!o){J("The generated comment could not be matched to a submit control.","error",9e3);return}if(S()){O();return}W(!0,"Posting\u2026"),J("Recording licensed usage before submitting this generated comment\u2026","success",5e3);let a="",n=!1;try{a=await Yt(),await Jt(t,a),n=!0,Z.add(e),o.click(),setTimeout(()=>{document.contains(e)&&W(!1)},3e3)}catch(i){let l=null;if(a&&!n)try{await Wt(a)}catch(M){l=M}let c=dt(i);if((c||xt(i))&&be().catch(()=>{}),W(!1),c){O();return}let d=Y(i,"The page could not submit this generated comment."),P=l?` Reservation cleanup also failed: ${Y(l,"unknown error")}`:"";J(`${d}${P}`,"error",1e4)}}async function Yt(){let e=await Q({type:"RESERVE_LINK_SUBMISSION"});if(!e?.ok)throw ge(e,"This license cannot submit another link right now.");let t=e.reservationId||e.reservation?.id||e.reservation?.reservationId||e.quota?.reservationId||e.id;if(!t)throw new Error("The background did not return a submission reservation.");return String(t)}async function Wt(e){let t=await Q({type:"RELEASE_LINK_SUBMISSION",reservationId:e},{allowWhenDisabled:!0});if(!t?.ok)throw ge(t,"Could not release the unused submission reservation.");return t}async function Jt(e,t){let o=await Q({type:"ADD_COMMENT_HISTORY",reservationId:t,entry:{pageUrl:rt(),pageTitle:document.title,comment:Ue(e.comment),backlinkUrl:Ue(e.website)||At,submittedAt:new Date().toISOString()}});if(!o?.ok)throw ge(o,"Could not save this comment to history.");return o}function $e(){if(!g)return;if(!y){g.host.style.display="none";return}let e=Le(),t=at(e),o=st&&!_e&&t;(!o||K&&e.form!==K)&&(Je("generate"),K=null),g.host.style.display=o?"":"none"}async function Xt(){if(y)try{let e=await chrome.storage.local.get({hideCommentedPages:!0}),t=fe(rt()),o=e.hideCommentedPages?await Q({type:"HAS_COMMENT_HISTORY_PAGES",urls:[t]}):{ok:!0,matches:[]};_e=!!e.hideCommentedPages&&o?.ok&&o.matches?.includes(t)}catch{_e=!1}finally{if(!y)return;st=!0,$e()}}function Q(e,{allowWhenDisabled:t=!1}={}){return!y&&!t?Promise.reject(new Error("The extension is disabled in Settings.")):new Promise((o,a)=>{chrome.runtime.sendMessage(e,n=>{if(chrome.runtime.lastError){a(new Error(chrome.runtime.lastError.message));return}o(n)})})}function ge(e,t){let o=e?.error,a=typeof o=="string"?o:o?.message||e?.message||t,n=new Error(a||t);return n.code=String(o?.code||e?.code||e?.errorCode||""),n.details=o?.details||e?.details||e?.quota||(o&&typeof o=="object"?o:null)||(e?.entitlement||e?.limit!==void 0||e?.remaining!==void 0?{entitlement:e.entitlement,limit:e.limit,used:e.used,reserved:e.reserved,remaining:e.remaining,upgradeRequired:e.upgradeRequired}:null),n}function Y(e,t){let o=e instanceof Error?e.message:String(e||t),a=String(e?.code||""),n=e?.details&&typeof e.details=="object"?e.details:null,i=n?.linksPerDay&&typeof n.linksPerDay=="object"?n.linksPerDay:n,l=[];Number.isFinite(Number(i?.limit))&&l.push(`daily limit ${Number(i.limit)}`),Number.isFinite(Number(i?.used))&&l.push(`${Number(i.used)} used`),Number.isFinite(Number(i?.reserved))&&Number(i.reserved)>0&&l.push(`${Number(i.reserved)} reserved`),Number.isFinite(Number(i?.remaining))&&l.push(`${Number(i.remaining)} remaining`),n?.entitlement&&l.push(`entitlement ${String(n.entitlement)}`);let c=l.length?` (${l.join(", ")})`:"",d=a&&!o.includes(a)?` [${a}]`:"";return`${o||t}${c}${d}`}function xt(e){return/(?:LICENSE|ENTITLEMENT|QUOTA|LIMIT|ACTIVATION|SUBSCRIPTION|RESERVATION)/i.test(String(e?.code||""))}function W(e,t){w=e,G=e?String(t||"Working\u2026"):"",Ge()}function Je(e){se=e,g&&(g.button.classList.toggle("post",e==="post"),Ge())}function Ge(){if(g){if(S()){g.button.disabled=!0,g.button.textContent="Quota reached",O();return}g.button.disabled=w,g.button.textContent=w?G||"Working\u2026":se==="post"?"Post Comment":"AI Fill Comment",g.status.dataset.quotaTerminal==="true"&&(delete g.status.dataset.quotaTerminal,g.status.className="status",g.status.textContent="")}}function O(){if(!g||!y)return;let e=te||oe();g.status.textContent=e,g.status.className="status show error",g.status.dataset.quotaTerminal="true"}function J(e,t="",o=0){!g||!y||(delete g.status.dataset.quotaTerminal,g.status.textContent=e,g.status.className=`status show ${t}`.trim(),o&&setTimeout(()=>{g.status.textContent===e&&(g.status.className="status")},o))}})();})();
