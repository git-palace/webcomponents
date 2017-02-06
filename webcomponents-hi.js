(function(){'use strict';function d(ze){return ze=y(ze),_(h(ze),ze)}function y(ze){return ze.replace(W.comments,'').replace(W.port,'')}function h(ze){let $e={start:0,end:ze.length},Je=$e;for(let Ze=0,Qe=ze.length;Ze<Qe;Ze++)if(ze[Ze]===X){Je.rules||(Je.rules=[]);let et=Je,tt=et.rules[et.rules.length-1];Je={start:Ze+1,parent:et,previous:tt},et.rules.push(Je)}else ze[Ze]===V&&(Je.end=Ze+1,Je=Je.parent||$e);return $e}function _(ze,$e){let Je=$e.substring(ze.start,ze.end-1);if(ze.parsedCssText=ze.cssText=Je.trim(),ze.parent){let Qe=ze.previous?ze.previous.end:ze.parent.start;Je=$e.substring(Qe,ze.start-1),Je=S(Je),Je=Je.replace(W.multipleSpaces,' '),Je=Je.substring(Je.lastIndexOf(';')+1);let et=ze.parsedSelector=ze.selector=Je.trim();ze.atRule=0===et.indexOf('@'),ze.atRule?0===et.indexOf('@media')?ze.type=K.MEDIA_RULE:et.match(W.keyframesRule)&&(ze.type=K.KEYFRAMES_RULE,ze.keyframesName=ze.selector.split(W.multipleSpaces).pop()):0===et.indexOf(G)?ze.type=K.MIXIN_RULE:ze.type=K.STYLE_RULE}let Ze=ze.rules;if(Ze)for(let tt,Qe=0,et=Ze.length;Qe<et&&(tt=Ze[Qe]);Qe++)_(tt,$e);return ze}function S(ze){return ze.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let $e=arguments[1],Je=6-$e.length;for(;Je--;)$e='0'+$e;return'\\'+$e})}function g(ze,$e,Je){Je=Je||'';let Ze='';if(ze.cssText||ze.rules){let Qe=ze.rules;if(Qe&&!E(Qe))for(let rt,et=0,tt=Qe.length;et<tt&&(rt=Qe[et]);et++)Ze=g(rt,$e,Ze);else Ze=$e?ze.cssText:C(ze.cssText),Ze=Ze.trim(),Ze&&(Ze='  '+Ze+'\n')}return Ze&&(ze.selector&&(Je+=ze.selector+' '+X+'\n'),Je+=Ze,ze.selector&&(Je+=V+'\n\n')),Je}function E(ze){return 0===ze[0].selector.indexOf(G)}function C(ze){return ze=A(ze),N(ze)}function A(ze){return ze.replace(W.customProp,'').replace(W.mixinProp,'')}function N(ze){return ze.replace(W.mixinApply,'').replace(W.varApply,'')}function b(ze){ze&&(J=J&&!ze.shimcssproperties,$=$&&!ze.shimshadow)}function R(ze,$e){return'string'==typeof ze&&(ze=d(ze)),$e&&M(ze,$e),g(ze,J)}function I(ze){return!ze.__cssRules&&ze.textContent&&(ze.__cssRules=d(ze.textContent)),ze.__cssRules}function P(ze){return ze.parent&&ze.parent.type===K.KEYFRAMES_RULE}function M(ze,$e,Je,Ze){if(ze){let Qe=!1;if(Ze&&ze.type===K.MEDIA_RULE){let tt=ze.selector.match(ee.MEDIA_MATCH);tt&&!window.matchMedia(tt[1]).matches&&(Qe=!0)}ze.type===K.STYLE_RULE?$e(ze):Je&&ze.type===K.KEYFRAMES_RULE?Je(ze):ze.type===K.MIXIN_RULE&&(Qe=!0);let et=ze.rules;if(et&&!Qe)for(let st,tt=0,rt=et.length;tt<rt&&(st=et[tt]);tt++)M(st,$e,Je,Ze)}}function O(ze,$e,Je,Ze){let Qe=w(ze,$e);return L(Qe,Je,Ze)}function L(ze,$e,Je){$e=$e||document.head;let Ze=Je&&Je.nextSibling||$e.firstChild;return Q=ze,$e.insertBefore(ze,Ze)}function w(ze,$e){let Je=document.createElement('style');return $e&&Je.setAttribute('scope',$e),Je.textContent=ze,Je}function U(ze){let $e=document.createComment(' Shady DOM styles for '+ze+' '),Je=Q?Q.nextSibling:null,Ze=document.head;return Ze.insertBefore($e,Je||Ze.firstChild),Q=$e,$e}function D(ze,$e){let Je=0;for(let Ze=$e,Qe=ze.length;Ze<Qe;Ze++)if('('===ze[Ze])Je++;else if(')'===ze[Ze]&&0==--Je)return Ze;return-1}function k(ze,$e){let Je=ze.indexOf('var(');if(-1===Je)return $e(ze,'','','');let Ze=D(ze,Je+3),Qe=ze.substring(Je+4,Ze),et=ze.substring(0,Je),tt=k(ze.substring(Ze+1),$e),rt=Qe.indexOf(',');if(-1===rt)return $e(et,Qe.trim(),'',tt);let st=Qe.substring(0,rt).trim(),nt=Qe.substring(rt+1).trim();return $e(et,st,nt,tt)}function F(ze,$e){window.ShadyDOM?window.ShadyDOM.nativeMethods.setAttribute.call(ze,'class',$e):ze.setAttribute('class',$e)}function H(ze,$e){let Je=parseInt(ze/32);$e[Je]=($e[Je]||0)|1<<ze%32}function q(){Ve||(Ve=!0,window.HTMLImports?window.HTMLImports.whenReady(B):'complete'===document.readyState?B():document.addEventListener('readystatechange',()=>{'complete'===document.readyState&&B()}))}function B(){requestAnimationFrame(()=>{(Ve||Xe._elementsHaveApplied)&&Xe.updateStyles(),Ve=!1})}(ze=>{const $e=!!('import'in document.createElement('link'));let Je=null;!1=='currentScript'in document&&Object.defineProperty(document,'currentScript',{get(){return Je||('complete'===document.readyState?null:document.scripts[document.scripts.length-1])},configurable:!0});const Ze=/(^\/)|(^#)|(^[\w-\d]*:)/,Qe=/(url\()([^)]*)(\))/g,et=/(@import[\s]+(?!url\())([^;]*)(;)/g,tt=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,rt={fixUrls(xt,vt){xt.href&&xt.setAttribute('href',rt.replaceAttrUrl(xt.getAttribute('href'),vt)),xt.src&&xt.setAttribute('src',rt.replaceAttrUrl(xt.getAttribute('src'),vt)),'style'===xt.localName&&rt.resolveUrlsInStyle(xt,vt)},fixUrlAttributes(xt,vt){const Nt=['action','src','href','url','style'];for(let bt,Tt=0;Tt<Nt.length&&(bt=Nt[Tt]);Tt++){const Rt=xt.attributes[bt],It=Rt&&Rt.value;It&&0>It.search(/({{|\[\[)/)&&(Rt.value='style'===bt?rt.resolveUrlsInCssText(It,vt):rt.replaceAttrUrl(It,vt))}},fixUrlsInTemplates(xt,vt){const Nt=xt.querySelectorAll('template');for(let Tt=0;Tt<Nt.length;Tt++)rt.fixUrlsInTemplate(Nt[Tt],vt)},fixUrlsInTemplate(xt,vt){const Nt=xt.content;if(Nt){const Tt=Nt.querySelectorAll('style, form[action], [src], [href], [url], [style]');for(let bt=0;bt<Tt.length;bt++){const Rt=Tt[bt];'style'==Rt.localName?rt.resolveUrlsInStyle(Rt,vt):rt.fixUrlAttributes(Rt,vt)}rt.fixUrlsInTemplates(Nt,vt)}},resolveUrlsInStyle(xt,vt){xt.textContent=rt.resolveUrlsInCssText(xt.textContent,vt)},resolveUrlsInCssText(xt,vt){let Nt=rt.replaceUrls(xt,vt,Qe);return Nt=rt.replaceUrls(Nt,vt,et),Nt},replaceUrls(xt,vt,Nt){return xt.replace(Nt,(Tt,bt,Rt,It)=>{let Pt=Rt.replace(/["']/g,'');return vt&&(Pt=rt.resolveUrl(Pt,vt)),bt+'\''+Pt+'\''+It})},replaceAttrUrl(xt,vt){return xt&&Ze.test(xt)?xt:rt.resolveUrl(xt,vt)},resolveUrl(xt,vt){if(void 0===rt.__workingURL){rt.__workingURL=!1;try{const Tt=new URL('b','http://a');Tt.pathname='c%20d',rt.__workingURL='http://a/c%20d'===Tt.href}catch(Tt){}}if(rt.__workingURL)return new URL(xt,vt).href;let Nt=rt.__tempDoc;return Nt||(Nt=document.implementation.createHTMLDocument('temp'),rt.__tempDoc=Nt,Nt.__base=Nt.createElement('base'),Nt.head.appendChild(Nt.__base),Nt.__anchor=Nt.createElement('a')),Nt.__base.href=vt,Nt.__anchor.href=xt,Nt.__anchor.href||xt}},st={async:!0,load(xt){return new Promise((vt,Nt)=>{if(!xt)Nt({resource:'error: href must be specified'});else if(xt.match(/^data:/)){const Tt=xt.split(','),bt=Tt[0];let Rt=Tt[1];Rt=-1<bt.indexOf(';base64')?atob(Rt):decodeURIComponent(Rt),vt({resource:Rt})}else{const Tt=new XMLHttpRequest;Tt.open('GET',xt,st.async),Tt.addEventListener('readystatechange',()=>{if(4===Tt.readyState){let bt;try{const It=Tt.getResponseHeader('Location');It&&(bt='/'===It.substr(0,1)?location.origin+It:It)}catch(It){console.error(It.message)}const Rt={resource:Tt.response||Tt.responseText,redirectedUrl:bt};304===Tt.status||0===Tt.status||200<=Tt.status&&300>Tt.status?vt(Rt):Nt(Rt)}}),Tt.send()}})}},nt=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent),lt='link[rel=import]',ot='import-disable',it=`link[rel=stylesheet][href][type=${ot}]`,dt=`${lt}, ${it},
    style:not([type]), link[rel=stylesheet][href]:not([type]),
    script:not([type]), script[type="application/javascript"],
    script[type="text/javascript"]`,pt='import-dependency',ct=`${lt}:not(${pt})`,mt=`script[${pt}]`,ut=`style[${pt}],
    link[rel=stylesheet][${pt}]`,yt=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector;const ht=xt=>{return xt.nodeType===Node.ELEMENT_NODE&&yt.call(xt,lt)},_t=xt=>{return xt.__loadPromise||(xt.__loadPromise=new Promise(vt=>{'script'!==xt.localName||xt.src?nt&&'style'===xt.localName?xt.addEventListener('load',vt):(xt.addEventListener('load',vt),xt.addEventListener('error',vt)):vt()}).then(()=>{return xt.__loaded=!0,xt})),xt.__loadPromise},St=xt=>{gt(()=>Et(()=>xt&&xt()))},gt=xt=>{if('loading'!==document.readyState)xt();else{const vt=()=>{'loading'!==document.readyState&&(document.removeEventListener('readystatechange',vt),xt())};document.addEventListener('readystatechange',vt)}},Et=xt=>{let vt=document.querySelectorAll(ct);const Nt=[];for(let Rt,Tt=0,bt=vt.length;Tt<bt&&(Rt=vt[Tt]);Tt++)Rt.__loaded||Nt.push(_t(Rt));Nt.length?Promise.all(Nt).then(xt):xt()},Ct=xt=>{if($e)return xt.ownerDocument;let vt=xt.__ownerImport;if(!vt){for(vt=xt;(vt=vt.parentNode||vt.host)&&!ht(vt););xt.__ownerImport=vt}return vt};let At;if(window.customElements?At=window.customElements.polyfillFlushCallback:window.customElements={},window.customElements.polyfillFlushCallback=At?xt=>St(()=>At(xt)):St,$e){const xt=document.querySelectorAll(lt);for(let bt,Nt=0,Tt=xt.length;Nt<Tt&&(bt=xt[Nt]);Nt++)bt.import&&'loading'===bt.import.readyState||(bt.__loaded=!0);const vt=Nt=>{const Tt=Nt.target;ht(Tt)&&(Tt.__loaded=!0)};document.addEventListener('load',vt,!0),document.addEventListener('error',vt,!0)}else new class{constructor(){this.documents={},this.inflight=0,gt(()=>{new MutationObserver(xt=>this.handleMutations(xt)).observe(document.head,{childList:!0,subtree:!0}),this.load()})}load(xt){const vt=xt?this.whenImportLoaded(xt):this.whenImportsLoaded(document);vt&&(this.inflight++,vt.then(()=>{0==--this.inflight&&this.onLoadedAll()}))}whenImportsLoaded(xt){const vt=xt.querySelectorAll(lt),Nt=[];for(let Tt=0,bt=vt.length;Tt<bt;Tt++){const Rt=this.whenImportLoaded(vt[Tt]);Rt&&Nt.push(Rt)}return Nt.length?Promise.all(Nt).then(()=>xt):null}whenImportLoaded(xt){const vt=xt.href;return void 0===this.documents[vt]?(this.documents[vt]='pending',st.load(vt).then(Nt=>{const Tt=this.makeDocument(Nt.resource,Nt.redirectedUrl||vt);return this.documents[vt]=Tt,this.whenImportsLoaded(Tt)},()=>this.documents[vt]=null).then(()=>xt)):null}makeDocument(xt,vt){if(!xt)return document.createDocumentFragment();nt&&(xt=xt.replace(tt,(Mt,Ot,Lt)=>{return-1===Mt.indexOf('type=')?`${Ot} type=${ot} ${Lt}`:Mt}));let Nt;const Tt=document.createElement('template');if(Tt.innerHTML=xt,Tt.content)Nt=Tt.content;else for(Nt=document.createDocumentFragment();Tt.firstElementChild;)Nt.appendChild(Tt.firstElementChild);const bt=Nt.querySelector('base');bt&&(vt=rt.replaceAttrUrl(bt.getAttribute('href'),vt),bt.removeAttribute('href'));const Rt=Nt.querySelectorAll('dom-module');for(let Ot,Mt=0;Mt<Rt.length&&(Ot=Rt[Mt]);Mt++)Ot.setAttribute('assetpath',rt.replaceAttrUrl(Ot.getAttribute('assetpath')||'',vt));const It=Nt.querySelectorAll(dt);let Pt=0;for(let Lt,Mt=0,Ot=It.length;Mt<Ot&&(Lt=It[Mt]);Mt++)if(_t(Lt),rt.fixUrls(Lt,vt),Lt.setAttribute(pt,''),'script'===Lt.localName&&!Lt.src&&Lt.textContent){const wt=Pt?`-${Pt}`:'',Ut=Lt.textContent+`\n//# sourceURL=${vt}${wt}.js\n`;Lt.setAttribute('src','data:text/javascript;charset=utf-8,'+encodeURIComponent(Ut)),Lt.textContent='',Pt++}return rt.fixUrlsInTemplates(Nt,vt),Nt}onLoadedAll(){this.flatten(document),Promise.all([this.waitForStyles(),this.runScripts()]).then(()=>this.fireEvents())}flatten(xt){const vt=xt.querySelectorAll(lt);for(let bt,Nt=0,Tt=vt.length;Nt<Tt&&(bt=vt[Nt]);Nt++){const Rt=this.documents[bt.href];bt.import=Rt,Rt&&Rt.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(this.documents[bt.href]=bt,bt.readyState='loading',bt.import=bt,this.flatten(Rt),bt.appendChild(Rt))}}runScripts(){const xt=document.querySelectorAll(mt);let vt=Promise.resolve();for(let bt,Nt=0,Tt=xt.length;Nt<Tt&&(bt=xt[Nt]);Nt++)vt=vt.then(()=>{const Rt=document.createElement('script');bt.removeAttribute(pt);for(let It=0,Pt=bt.attributes.length;It<Pt;It++)Rt.setAttribute(bt.attributes[It].name,bt.attributes[It].value);return Je=Rt,bt.parentNode.replaceChild(Rt,bt),_t(Rt).then(()=>Je=null)});return vt}waitForStyles(){const xt=!!document.querySelector(it),vt=document.querySelectorAll(ut),Nt=[];for(let Rt,Tt=0,bt=vt.length;Tt<bt&&(Rt=vt[Tt]);Tt++)if(Nt.push(_t(Rt).then(()=>Rt.removeAttribute(pt))),xt&&Rt.parentNode!==document.head){let It=Ct(Rt);for(;It&&Ct(It);)It=Ct(It);const Pt=Rt.parentNode,Mt=Rt.nextSibling,Ot=document.createElement(Rt.localName);Ot.__appliedElement=Rt,Ot.setAttribute('type','import-placeholder'),It.parentNode===document.head?document.head.insertBefore(Rt,It):document.head.appendChild(Rt),Pt.insertBefore(Ot,Mt),Rt.removeAttribute('type')}return Promise.all(Nt)}fireEvents(){const xt=document.querySelectorAll(lt);for(let Nt,vt=xt.length-1;0<=vt&&(Nt=xt[vt]);vt--)this.fireEventIfNeeded(Nt)}fireEventIfNeeded(xt){if(!xt.__loaded){xt.__loaded=!0,xt.import&&(xt.import.readyState='complete');const vt=xt.import?'load':'error';xt.dispatchEvent(new CustomEvent(vt,{bubbles:!1,cancelable:!1,detail:void 0}))}}handleMutations(xt){for(let vt=0;vt<xt.length;vt++){const Nt=xt[vt];if(Nt.addedNodes)for(let Tt=0;Tt<Nt.addedNodes.length;Tt++){const bt=Nt.addedNodes[Tt];if(bt&&bt.nodeType===Node.ELEMENT_NODE){const Rt=ht(bt)?[bt]:bt.querySelectorAll(lt);for(let It=0;It<Rt.length;It++){const Pt=Rt[It],Mt=this.documents[Pt.href];void 0===Mt?this.load(Pt):!this.inflight&&(Pt.import=Mt,this.fireEventIfNeeded(Pt))}}}}}};St(()=>document.dispatchEvent(new CustomEvent('HTMLImportsLoaded',{cancelable:!0,bubbles:!0,detail:void 0}))),ze.useNative=$e,ze.whenReady=St,ze.importForElement=Ct})(window.HTMLImports=window.HTMLImports||{});let K={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},X='{',V='}',W={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},G='--',$=!(window.ShadyDOM&&window.ShadyDOM.inUse),J=!navigator.userAgent.match('AppleWebKit/601')&&window.CSS&&CSS.supports&&CSS.supports('box-shadow','0 0 0 var(--foo)');window.ShadyCSS?b(window.ShadyCSS):window.WebComponents&&b(window.WebComponents.flags);let Q=null,ee={VAR_ASSIGN:/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,MIXIN_MATCH:/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,VAR_CONSUMED:/(--[\w-]+)\s*([:,;)]|$)/gi,ANIMATION_MATCH:/(animation\s*:)|(animation-name\s*:)/,MEDIA_MATCH:/@media[^(]*(\([^)]*\))/,IS_VAR:/^--/,BRACKETED:/\{[^}]*\}/g,HOST_PREFIX:'(?:^|[^.#[:])',HOST_SUFFIX:'($|[.:[\\s>+~])'};const te='style-scope';class re{get SCOPE_NAME(){return te}dom(ze,$e,Je){ze.__styleScoped?ze.__styleScoped=null:this._transformDom(ze,$e||'',Je)}_transformDom(ze,$e,Je){ze.nodeType===Node.ELEMENT_NODE&&this.element(ze,$e,Je);let Ze='template'===ze.localName?(ze.content||ze._content).childNodes:ze.children||ze.childNodes;if(Ze)for(let Qe=0;Qe<Ze.length;Qe++)this._transformDom(Ze[Qe],$e,Je)}element(ze,$e,Je){if($e)if(ze.classList)Je?(ze.classList.remove(te),ze.classList.remove($e)):(ze.classList.add(te),ze.classList.add($e));else if(ze.getAttribute){let Ze=ze.getAttribute('class');if(!Je){let Qe=(Ze?Ze+' ':'')+te+' '+$e;F(ze,Qe)}else if(Ze){let Qe=Ze.replace(te,'').replace($e,'');F(ze,Qe)}}}elementStyles(ze,$e,Je){let Ze=ze.__cssBuild,Qe=$||'shady'===Ze?R($e,Je):this.css($e,ze.is,ze.extends,Je)+'\n\n';return Qe.trim()}css(ze,$e,Je,Ze){let Qe=this._calcHostScope($e,Je);$e=this._calcElementScope($e);let et=this;return R(ze,function(tt){tt.isScoped||(et.rule(tt,$e,Qe),tt.isScoped=!0),Ze&&Ze(tt,$e,Qe)})}_calcElementScope(ze){return ze?'.'+ze:''}_calcHostScope(ze,$e){return $e?'[is='+ze+']':ze}rule(ze,$e,Je){this._transformRule(ze,this._transformComplexSelector,$e,Je)}_transformRule(ze,$e,Je,Ze){ze.selector=ze.transformedSelector=this._transformRuleCss(ze,$e,Je,Ze)}_transformRuleCss(ze,$e,Je,Ze){let Qe=ze.selector.split(le);if(!P(ze))for(let rt,et=0,tt=Qe.length;et<tt&&(rt=Qe[et]);et++)Qe[et]=$e.call(this,rt,Je,Ze);return Qe.join(le)}_transformComplexSelector(ze,$e,Je){let Ze=!1;return ze=ze.trim(),ze=ze.replace(se,(Qe,et,tt)=>`:${et}(${tt.replace(/\s/g,'')})`),ze=ze.replace(me,`${ie} $1`),ze=ze.replace(oe,(Qe,et,tt)=>{if(!Ze){let rt=this._transformCompoundSelector(tt,et,$e,Je);Ze=Ze||rt.stop,et=rt.combinator,tt=rt.value}return et+tt}),ze}_transformCompoundSelector(ze,$e,Je,Ze){let Qe=ze.indexOf(pe);0<=ze.indexOf(ie)?ze=this._transformHostSelector(ze,Ze):0!==Qe&&(ze=Je?this._transformSimpleSelector(ze,Je):ze);let et=!1;0<=Qe&&($e='',et=!0);let tt;return et&&(tt=!0,et&&(ze=ze.replace(ye,(rt,st)=>` > ${st}`))),ze=ze.replace(fe,(rt,st,nt)=>`[dir="${nt}"] ${st}, ${st}[dir="${nt}"]`),{value:ze,combinator:$e,stop:tt}}_transformSimpleSelector(ze,$e){let Je=ze.split(_e);return Je[0]+=$e,Je.join(_e)}_transformHostSelector(ze,$e){let Je=ze.match(ue),Ze=Je&&Je[2].trim()||'';if(Ze){if(!Ze[0].match(ae)){let Qe=Ze.split(ae)[0];return Qe===$e?Ze:'should_not_match'}return ze.replace(ue,function(Qe,et,tt){return $e+tt})}return ze.replace(ie,$e)}documentRule(ze){ze.selector=ze.parsedSelector,this.normalizeRootSelector(ze),this._transformRule(ze,this._transformDocumentSelector)}normalizeRootSelector(ze){ze.selector===':root'&&(ze.selector='html')}_transformDocumentSelector(ze){return ze.match(pe)?this._transformComplexSelector(ze,ne):this._transformSimpleSelector(ze.trim(),ne)}}let se=/:(nth[-\w]+)\(([^)]+)\)/,ne=`:not(.${te})`,le=',',oe=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,ae=/[[.:#*]/,ie=':host',pe='::slotted',me=/^(::slotted)/,ue=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ye=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,fe=/(.*):dir\((?:(ltr|rtl))\)/,_e=':';var Ee=new re,Ce={};const Ae=Promise.resolve();class xe{static get(ze){return ze.__styleInfo}static set(ze,$e){return ze.__styleInfo=$e,$e}static invalidate(ze){Ce[ze]&&(Ce[ze]._applyShimInvalid=!0)}static startValidating(ze){const $e=Ce[ze];$e._validating||($e._validating=!0,Ae.then(()=>{$e._applyShimInvalid=!1,$e._validating=!1}))}constructor(ze,$e,Je,Ze,Qe,et){this.styleRules=ze||null,this.placeholder=$e||null,this.ownStylePropertyNames=Je||[],this.overrideStyleProperties=null,this.elementName=Ze||'',this.cssBuild=et||'',this.typeExtension=Qe||'',this.styleProperties=null,this.scopeSelector=null,this.customStyle=null}}const ve=window.Element.prototype,Ne=ve.matches||ve.matchesSelector||ve.mozMatchesSelector||ve.msMatchesSelector||ve.oMatchesSelector||ve.webkitMatchesSelector,Te=navigator.userAgent.match('Trident'),be='x-scope';class Re{get XSCOPE_NAME(){return be}decorateStyles(ze){let $e=this,Je={},Ze=[],Qe=0;M(ze,function(tt){$e.decorateRule(tt),tt.index=Qe++,$e.collectPropertiesInCssText(tt.propertyInfo.cssText,Je)},function(rt){Ze.push(rt)}),ze._keyframes=Ze;let et=[];for(let tt in Je)et.push(tt);return et}decorateRule(ze){if(ze.propertyInfo)return ze.propertyInfo;let $e={},Je={},Ze=this.collectProperties(ze,Je);return Ze&&($e.properties=Je,ze.rules=null),$e.cssText=this.collectCssText(ze),ze.propertyInfo=$e,$e}collectProperties(ze,$e){let Je=ze.propertyInfo;if(!Je){let Ze,Qe=ee.VAR_ASSIGN,et=ze.parsedCssText,tt,rt;for(;Ze=Qe.exec(et);)tt=(Ze[2]||Ze[3]).trim(),('inherit'!==tt||'unset'!==tt)&&($e[Ze[1].trim()]=tt),rt=!0;return rt}else if(Je.properties)return Object.assign($e,Je.properties),!0}collectCssText(ze){return this.collectConsumingCssText(ze.parsedCssText)}collectConsumingCssText(ze){return ze.replace(ee.BRACKETED,'').replace(ee.VAR_ASSIGN,'')}collectPropertiesInCssText(ze,$e){for(let Je,Ze;Je=ee.VAR_CONSUMED.exec(ze);)Ze=Je[1],':'!==Je[2]&&($e[Ze]=!0)}reify(ze){let $e=Object.getOwnPropertyNames(ze);for(let Ze,Je=0;Je<$e.length;Je++)Ze=$e[Je],ze[Ze]=this.valueForProperty(ze[Ze],ze)}valueForProperty(ze,$e){if(ze)if(0<=ze.indexOf(';'))ze=this.valueForProperties(ze,$e);else{let Je=this;ze=k(ze,function(Qe,et,tt,rt){if(!et)return Qe+rt;let st=Je.valueForProperty($e[et],$e);return st&&'initial'!==st?'apply-shim-inherit'===st&&(st='inherit'):st=Je.valueForProperty($e[tt]||tt,$e)||tt,Qe+(st||'')+rt})}return ze&&ze.trim()||''}valueForProperties(ze,$e){let Je=ze.split(';');for(let Qe,et,Ze=0;Ze<Je.length;Ze++)if(Qe=Je[Ze]){if(ee.MIXIN_MATCH.lastIndex=0,et=ee.MIXIN_MATCH.exec(Qe),et)Qe=this.valueForProperty($e[et[1]],$e);else{let tt=Qe.indexOf(':');if(-1!==tt){let rt=Qe.substring(tt);rt=rt.trim(),rt=this.valueForProperty(rt,$e)||rt,Qe=Qe.substring(0,tt)+rt}}Je[Ze]=Qe&&Qe.lastIndexOf(';')===Qe.length-1?Qe.slice(0,-1):Qe||''}return Je.join(';')}applyProperties(ze,$e){let Je='';ze.propertyInfo||this.decorateRule(ze),ze.propertyInfo.cssText&&(Je=this.valueForProperties(ze.propertyInfo.cssText,$e)),ze.cssText=Je}applyKeyframeTransforms(ze,$e){let Je=ze.cssText,Ze=ze.cssText;if(null==ze.hasAnimations&&(ze.hasAnimations=ee.ANIMATION_MATCH.test(Je)),ze.hasAnimations){let Qe;if(null==ze.keyframeNamesToTransform)for(let et in ze.keyframeNamesToTransform=[],$e)Qe=$e[et],Ze=Qe(Je),Je!==Ze&&(Je=Ze,ze.keyframeNamesToTransform.push(et));else{for(let et=0;et<ze.keyframeNamesToTransform.length;++et)Qe=$e[ze.keyframeNamesToTransform[et]],Je=Qe(Je);Ze=Je}}ze.cssText=Ze}propertyDataFromStyles(ze,$e){let Je={},Ze=this,Qe=[];return M(ze,function(et){et.propertyInfo||Ze.decorateRule(et);let tt=et.transformedSelector||et.parsedSelector;$e&&et.propertyInfo.properties&&tt&&Ne.call($e,tt)&&(Ze.collectProperties(et,Je),H(et.index,Qe))},null,!0),{properties:Je,key:Qe}}whenHostOrRootRule(ze,$e,Je,Ze){if($e.propertyInfo||this.decorateRule($e),!!$e.propertyInfo.properties){let Qe=ze.is?Ee._calcHostScope(ze.is,ze.extends):'html',et=$e.parsedSelector,tt=':host > *'===et||'html'===et,rt=0===et.indexOf(':host')&&!tt;if('shady'===Je&&(tt=et===Qe+' > *.'+Qe||-1!==et.indexOf('html'),rt=!tt&&0===et.indexOf(Qe)),'shadow'===Je&&(tt=':host > *'===et||'html'===et,rt=rt&&!tt),tt||rt){let st=Qe;rt&&($&&!$e.transformedSelector&&($e.transformedSelector=Ee._transformRuleCss($e,Ee._transformComplexSelector,Ee._calcElementScope(ze.is),Qe)),st=$e.transformedSelector||Qe),Ze({selector:st,isHost:rt,isRoot:tt})}}}hostAndRootPropertiesForScope(ze,$e){let Je={},Ze={},Qe=this,et=$e&&$e.__cssBuild;return M($e,function(tt){Qe.whenHostOrRootRule(ze,tt,et,function(rt){let st=ze._element||ze;Ne.call(st,rt.selector)&&(rt.isHost?Qe.collectProperties(tt,Je):Qe.collectProperties(tt,Ze))})},null,!0),{rootProps:Ze,hostProps:Je}}transformStyles(ze,$e,Je){let Ze=this,Qe=Ee._calcHostScope(ze.is,ze.extends),et=ze.extends?'\\'+Qe.slice(0,-1)+'\\]':Qe,tt=new RegExp(ee.HOST_PREFIX+et+ee.HOST_SUFFIX),rt=xe.get(ze).styleRules,st=this._elementKeyframeTransforms(ze,rt,Je);return Ee.elementStyles(ze,rt,function(nt){Ze.applyProperties(nt,$e),$||P(nt)||!nt.cssText||(Ze.applyKeyframeTransforms(nt,st),Ze._scopeSelector(nt,tt,Qe,Je))})}_elementKeyframeTransforms(ze,$e,Je){let Ze=$e._keyframes,Qe={};if(!$&&Ze)for(let et=0,tt=Ze[et];et<Ze.length;tt=Ze[++et])this._scopeKeyframes(tt,Je),Qe[tt.keyframesName]=this._keyframesRuleTransformer(tt);return Qe}_keyframesRuleTransformer(ze){return function($e){return $e.replace(ze.keyframesNameRx,ze.transformedKeyframesName)}}_scopeKeyframes(ze,$e){ze.keyframesNameRx=new RegExp(ze.keyframesName,'g'),ze.transformedKeyframesName=ze.keyframesName+'-'+$e,ze.transformedSelector=ze.transformedSelector||ze.selector,ze.selector=ze.transformedSelector.replace(ze.keyframesName,ze.transformedKeyframesName)}_scopeSelector(ze,$e,Je,Ze){ze.transformedSelector=ze.transformedSelector||ze.selector;let Qe=ze.transformedSelector,et='.'+Ze,tt=Qe.split(',');for(let nt,rt=0,st=tt.length;rt<st&&(nt=tt[rt]);rt++)tt[rt]=nt.match($e)?nt.replace(Je,et):et+' '+nt;ze.selector=tt.join(',')}applyElementScopeSelector(ze,$e,Je){let Ze=ze.getAttribute('class')||'',Qe=Ze;Je&&(Qe=Ze.replace(new RegExp('\\s*'+be+'\\s*'+Je+'\\s*','g'),' ')),Qe+=(Qe?' ':'')+be+' '+$e,Ze!==Qe&&F(ze,Qe)}applyElementStyle(ze,$e,Je,Ze){let Qe=Ze?Ze.textContent||'':this.transformStyles(ze,$e,Je),et=xe.get(ze),tt=et.customStyle;return tt&&!$&&tt!==Ze&&(tt._useCount--,0>=tt._useCount&&tt.parentNode&&tt.parentNode.removeChild(tt)),$?et.customStyle?(et.customStyle.textContent=Qe,Ze=et.customStyle):Qe&&(Ze=O(Qe,Je,ze.shadowRoot,et.placeholder)):Ze?!Ze.parentNode&&L(Ze,null,et.placeholder):Qe&&(Ze=O(Qe,Je,null,et.placeholder)),Ze&&(Ze._useCount=Ze._useCount||0,et.customStyle!=Ze&&Ze._useCount++,et.customStyle=Ze),Te&&(Ze.textContent=Ze.textContent),Ze}applyCustomStyle(ze,$e){let Je=I(ze),Ze=this;ze.textContent=R(Je,function(Qe){let et=Qe.cssText=Qe.parsedCssText;Qe.propertyInfo&&Qe.propertyInfo.cssText&&(et=A(et),Qe.cssText=Ze.valueForProperties(et,$e))})}}var Ie=new Re;let Pe={};const Me=window.customElements;if(Me&&!$){const ze=Me.define;Me.define=function($e,Je,Ze){return Pe[$e]=U($e),ze.call(Me,$e,Je,Ze)}}let Le=ee.MIXIN_MATCH,we=ee.VAR_ASSIGN,Ue=/;\s*/m,De=/^\s*(initial)|(inherit)\s*$/,ke='_-_';class Fe{constructor(){this._map={}}set(ze,$e){ze=ze.trim(),this._map[ze]={properties:$e,dependants:{}}}get(ze){return ze=ze.trim(),this._map[ze]}}class He{constructor(){this._currentTemplate=null,this._measureElement=null,this._map=new Fe,this._separator=ke,this._boundProduceCssProperties=(ze,$e,Je,Ze)=>this._produceCssProperties(ze,$e,Je,Ze)}detectMixin(ze){const $e=Le.test(ze)||we.test(ze);return Le.lastIndex=0,we.lastIndex=0,$e}transformStyle(ze,$e){let Je=I(ze);return this.transformRules(Je,$e),Je}transformRules(ze,$e){this._currentTemplate=Ce[$e],M(ze,Je=>{this.transformRule(Je)}),this._currentTemplate=null}transformRule(ze){ze.cssText=this.transformCssText(ze.parsedCssText),':root'===ze.selector&&(ze.selector=':host > *')}transformCssText(ze){return ze=ze.replace(we,this._boundProduceCssProperties),this._consumeCssProperties(ze)}_getInitialValueForProperty(ze){return this._measureElement||(this._measureElement=document.createElement('meta'),this._measureElement.style.all='initial',document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(ze)}_consumeCssProperties(ze){for(let $e;$e=Le.exec(ze);){let Je=$e[0],Ze=$e[1],Qe=$e.index,et=Qe+Je.indexOf('@apply'),tt=Qe+Je.length,rt=ze.slice(0,et),st=ze.slice(tt),nt=this._cssTextToMap(rt),lt=this._atApplyToCssProperties(Ze,nt);ze=[rt,lt,st].join(''),Le.lastIndex=Qe+lt.length}return ze}_atApplyToCssProperties(ze,$e){ze=ze.replace(Ue,'');let Je=[],Ze=this._map.get(ze);if(Ze||(this._map.set(ze,{}),Ze=this._map.get(ze)),Ze){this._currentTemplate&&(Ze.dependants[this._currentTemplate.name]=this._currentTemplate);let Qe,et,tt;for(Qe in Ze.properties)tt=$e&&$e[Qe],et=[Qe,': var(',ze,ke,Qe],tt&&et.push(',',tt),et.push(')'),Je.push(et.join(''))}return Je.join('; ')}_replaceInitialOrInherit(ze,$e){let Je=De.exec($e);return Je&&(Je[1]?$e=He._getInitialValueForProperty(ze):$e='apply-shim-inherit'),$e}_cssTextToMap(ze){let $e=ze.split(';'),Je,Ze,Qe={};for(let tt,rt,et=0;et<$e.length;et++)tt=$e[et],tt&&(rt=tt.split(':'),1<rt.length&&(Je=rt[0].trim(),Ze=this._replaceInitialOrInherit(Je,rt.slice(1).join(':')),Qe[Je]=Ze));return Qe}_invalidateMixinEntry(ze){for(let $e in ze.dependants)this._currentTemplate&&$e===this._currentTemplate.name||xe.invalidate($e)}_produceCssProperties(ze,$e,Je,Ze){if(Je&&k(Je,(pt,ct)=>{ct&&this._map.get(ct)&&(Ze='@apply '+ct+';')}),!Ze)return ze;let Qe=this._consumeCssProperties(Ze),et=ze.slice(0,ze.indexOf('--')),tt=this._cssTextToMap(Qe),rt=tt,st=this._map.get($e),nt=st&&st.properties;nt?rt=Object.assign(Object.create(nt),tt):this._map.set($e,rt);let ot,it,lt=[],dt=!1;for(ot in rt)it=tt[ot],void 0==it&&(it='initial'),nt&&!(ot in nt)&&(dt=!0),lt.push($e+ke+ot+': '+it);return dt&&this._invalidateMixinEntry(st),st&&(st.properties=rt),Je&&(et=ze+';'+et),et+lt.join('; ')+';'}}let qe=new He;window.ApplyShim=qe;let je=function(){};if(!$){let ze=et=>{return et.classList&&!et.classList.contains(Ee.SCOPE_NAME)||et instanceof SVGElement&&(!et.hasAttribute('class')||0>et.getAttribute('class').indexOf(Ee.SCOPE_NAME))},$e=et=>{for(let rt,tt=0;tt<et.length;tt++)if(rt=et[tt],rt.target!==document.documentElement&&rt.target!==document.head){for(let nt,st=0;st<rt.addedNodes.length;st++)if(nt=rt.addedNodes[st],ze(nt)){let lt=nt.getRootNode();if(lt.nodeType===Node.DOCUMENT_FRAGMENT_NODE){let ot=lt.host;if(ot){let it=ot.is||ot.localName;Ee.dom(nt,it)}}}for(let nt,st=0;st<rt.removedNodes.length;st++)if(nt=rt.removedNodes[st],nt.nodeType===Node.ELEMENT_NODE){let lt;if(nt.classList?lt=Array.from(nt.classList):nt.hasAttribute('class')&&(lt=nt.getAttribute('class').split(/\s+/)),void 0!=lt){let ot=lt.indexOf(Ee.SCOPE_NAME);if(0<=ot){let it=lt[ot+1];it&&Ee.dom(nt,it,!0)}}}}},Je=new MutationObserver($e),Ze=et=>{Je.observe(et,{childList:!0,subtree:!0})},Qe=window.customElements&&!window.customElements.flush;if(Qe)Ze(document);else{let et=()=>{Ze(document.body)};window.HTMLImports?window.HTMLImports.whenReady(et):requestAnimationFrame(function(){if('loading'===document.readyState){let tt=function(){et(),document.removeEventListener('readystatechange',tt)};document.addEventListener('readystatechange',tt)}else et()})}je=function(){$e(Je.takeRecords())}}let Be=new class{constructor(ze=100){this.cache={},this.typeMax=ze}_validate(ze,$e,Je){for(let Qe,Ze=0;Ze<Je.length;Ze++)if(Qe=Je[Ze],ze.properties[Qe]!==$e[Qe])return!1;return!0}store(ze,$e,Je,Ze){let Qe=this.cache[ze]||[];Qe.push({properties:$e,styleElement:Je,scopeSelector:Ze}),Qe.length>this.typeMax&&Qe.shift(),this.cache[ze]=Qe}fetch(ze,$e,Je){let Ze=this.cache[ze];if(Ze)for(let et,Qe=Ze.length-1;0<=Qe;Qe--)if(et=Ze[Qe],this._validate(et,$e,Je))return et}};class Ke{constructor(){this._scopeCounter={},this._documentOwner=document.documentElement,this._documentOwnerStyleInfo=xe.set(document.documentElement,new xe({rules:[]})),this._elementsHaveApplied=!1}get nativeShadow(){return $}get nativeCss(){return J}get nativeCssApply(){return!1}flush(){je()}_generateScopeSelector(ze){let $e=this._scopeCounter[ze]=(this._scopeCounter[ze]||0)+1;return`${ze}-${$e}`}getStyleAst(ze){return I(ze)}styleAstToString(ze){return R(ze)}_gatherStyles(ze){let $e=ze.content.querySelectorAll('style'),Je=[];for(let Qe,Ze=0;Ze<$e.length;Ze++)Qe=$e[Ze],Je.push(Qe.textContent),Qe.parentNode.removeChild(Qe);return Je.join('').trim()}_getCssBuild(ze){let $e=ze.content.querySelector('style');return $e?$e.getAttribute('css-build')||'':''}prepareTemplate(ze,$e,Je){if(!ze._prepared){ze._prepared=!0,ze.name=$e,ze.extends=Je,Ce[$e]=ze;let Ze=this._getCssBuild(ze),Qe=this._gatherStyles(ze),et={is:$e,extends:Je,__cssBuild:Ze};this.nativeShadow||Ee.dom(ze.content,$e);let tt=qe.detectMixin(Qe),rt=d(Qe);tt&&this.nativeCss&&!this.nativeCssApply&&qe.transformRules(rt,$e),ze._styleAst=rt;let st=[];if(this.nativeCss||(st=Ie.decorateStyles(ze._styleAst,et)),!st.length||this.nativeCss){let nt=this.nativeShadow?ze.content:null,lt=Pe[$e],ot=this._generateStaticStyle(et,ze._styleAst,nt,lt);ze._style=ot}ze._ownPropertyNames=st}}_generateStaticStyle(ze,$e,Je,Ze){let Qe=Ee.elementStyles(ze,$e);if(Qe.length)return O(Qe,ze.is,Je,Ze)}_prepareHost(ze){let Je,$e=ze.getAttribute('is')||ze.localName;$e!==ze.localName&&(Je=ze.localName);let et,tt,rt,Ze=Pe[$e],Qe=Ce[$e];return Qe&&(et=Qe._styleAst,tt=Qe._ownPropertyNames,rt=Qe._cssBuild),xe.set(ze,new xe(et,Ze,tt,$e,Je,rt))}applyStyle(ze,$e){let Je=ze.getAttribute('is')||ze.localName,Ze=xe.get(ze),Qe=!!Ze;if(Ze||(Ze=this._prepareHost(ze)),this._isRootOwner(ze)||(this._elementsHaveApplied=!0),window.CustomStyle){let et=window.CustomStyle;if(et._documentDirty){if(et.findStyles(),this.nativeCss?!this.nativeCssApply&&et._revalidateApplyShim():this._updateProperties(this._documentOwner,this._documentOwnerStyleInfo),et.applyStyles(),!this._elementsHaveApplied)return;if(!this.nativeCss&&(this.updateStyles(),Qe))return}}if($e&&(Ze.overrideStyleProperties=Ze.overrideStyleProperties||{},Object.assign(Ze.overrideStyleProperties,$e)),this.nativeCss){Ze.overrideStyleProperties&&this._updateNativeProperties(ze,Ze.overrideStyleProperties);let et=Ce[Je];if(!et&&!this._isRootOwner(ze))return;if(et&&et._applyShimInvalid&&et._style){if(et._validating||(qe.transformRules(et._styleAst,Je),et._style.textContent=Ee.elementStyles(ze,Ze.styleRules),xe.startValidating(Je)),this.nativeShadow){let tt=ze.shadowRoot;if(tt){let rt=tt.querySelector('style');rt.textContent=Ee.elementStyles(ze,Ze.styleRules)}}Ze.styleRules=et._styleAst}}else this._updateProperties(ze,Ze),Ze.ownStylePropertyNames&&Ze.ownStylePropertyNames.length&&this._applyStyleProperties(ze,Ze);if(Qe){let et=this._isRootOwner(ze)?ze:ze.shadowRoot;et&&this._applyToDescendants(et)}}_applyToDescendants(ze){let $e=ze.children||ze.childNodes;for(let Ze,Je=0;Je<$e.length;Je++)Ze=$e[Je],Ze.shadowRoot&&this.applyStyle(Ze),this._applyToDescendants(Ze)}_styleOwnerForNode(ze){let $e=ze.getRootNode(),Je=$e.host;return Je?xe.get(Je)?Je:this._styleOwnerForNode(Je):this._documentOwner}_isRootOwner(ze){return ze===this._documentOwner}_applyStyleProperties(ze,$e){let Je=ze.getAttribute('is')||ze.localName,Ze=Be.fetch(Je,$e.styleProperties,$e.ownStylePropertyNames),Qe=Ze&&Ze.scopeSelector,et=Ze?Ze.styleElement:null,tt=$e.scopeSelector;$e.scopeSelector=Qe||this._generateScopeSelector(Je);let rt=Ie.applyElementStyle(ze,$e.styleProperties,$e.scopeSelector,et);return this.nativeShadow||Ie.applyElementScopeSelector(ze,$e.scopeSelector,tt),Ze||Be.store(Je,$e.styleProperties,rt,$e.scopeSelector),rt}_updateProperties(ze,$e){let Je=this._styleOwnerForNode(ze),Ze=xe.get(Je),Qe=Ze.styleProperties,et=Object.create(Qe||null),tt=Ie.hostAndRootPropertiesForScope(ze,$e.styleRules),rt=Ie.propertyDataFromStyles(Ze.styleRules,ze),st=rt.properties;Object.assign(et,tt.hostProps,st,tt.rootProps),this._mixinOverrideStyles(et,$e.overrideStyleProperties),Ie.reify(et),$e.styleProperties=et}_mixinOverrideStyles(ze,$e){for(let Je in $e){let Ze=$e[Je];(Ze||0===Ze)&&(ze[Je]=Ze)}}_updateNativeProperties(ze,$e){for(let Je in $e)null===Je?ze.style.removeProperty(Je):ze.style.setProperty(Je,$e[Je])}updateStyles(ze){this.applyStyle(this._documentOwner,ze)}_transformCustomStyleForDocument(ze){let $e=I(ze);M($e,Je=>{$?Ee.normalizeRootSelector(Je):Ee.documentRule(Je),this.nativeCss&&!this.nativeCssApply&&qe.transformRule(Je)}),this.nativeCss?ze.textContent=R($e):this._documentOwnerStyleInfo.styleRules.rules.push($e)}_revalidateApplyShim(ze){if(this.nativeCss&&!this.nativeCssApply){let $e=I(ze);qe.transformRules($e),ze.textContent=R($e)}}_applyCustomStyleToDocument(ze){this.nativeCss||Ie.applyCustomStyle(ze,this._documentOwnerStyleInfo.styleProperties)}getComputedStyleValue(ze,$e){let Je;if(!this.nativeCss){let Ze=xe.get(ze)||xe.get(this._styleOwnerForNode(ze));Je=Ze.styleProperties[$e]}return Je=Je||window.getComputedStyle(ze).getPropertyValue($e),Je.trim()}setElementClass(ze,$e){let Je=ze.getRootNode(),Ze=$e?$e.split(/\s/):[],Qe=Je.host&&Je.host.localName;if(!Qe){var et=ze.getAttribute('class');if(et){let tt=et.split(/\s/);for(let rt=0;rt<tt.length;rt++)if(tt[rt]===Ee.SCOPE_NAME){Qe=tt[rt+1];break}}}if(Qe&&Ze.push(Ee.SCOPE_NAME,Qe),!this.nativeCss){let tt=xe.get(ze);tt&&tt.scopeSelector&&Ze.push(Ie.XSCOPE_NAME,tt.scopeSelector)}F(ze,Ze.join(' '))}_styleInfoForNode(ze){return xe.get(ze)}}window.ShadyCSS=new Ke;let Xe=window.ShadyCSS,Ve=!1,We=[],Ge=null;class Ye extends HTMLElement{static get _customStyles(){return We}static get processHook(){return Ge}static set processHook(ze){Ge=ze}static get _documentDirty(){return Ve}static findStyles(){for(let $e,ze=0;ze<We.length;ze++)if($e=We[ze],!$e._style){let Je=$e.querySelector('style');if(!Je)continue;if(Je.__appliedElement)for(let Qe,Ze=0;Ze<Je.attributes.length;Ze++)Qe=Je.attributes[Ze],Je.__appliedElement.setAttribute(Qe.name,Qe.value);$e._style=Je.__appliedElement||Je,Ge&&Ge($e._style),Xe._transformCustomStyleForDocument($e._style)}}static _revalidateApplyShim(){for(let $e,ze=0;ze<We.length;ze++)$e=We[ze],$e._style&&Xe._revalidateApplyShim($e._style)}static applyStyles(){for(let $e,ze=0;ze<We.length;ze++)$e=We[ze],$e._style&&Xe._applyCustomStyleToDocument($e._style);Ve=!1}constructor(){super(),We.push(this),q()}}window.CustomStyle=Ye,window.customElements.define('custom-style',Ye),function(){'use strict';if(HTMLImports.whenReady(function(){requestAnimationFrame(function(){window.dispatchEvent(new CustomEvent('WebComponentsReady'))})}),customElements&&customElements.polyfillWrapFlushCallback){function $e(){if(Je){let Qe=Je;Je=null,Qe()}}let Je,Ze=HTMLImports.whenReady;customElements.polyfillWrapFlushCallback(function(Qe){Je=Qe,Ze($e)}),HTMLImports.whenReady=function(Qe){Ze(function(){$e(),Qe()})}}}(window.WebComponents),function(){var $e=document.createElement('style');$e.textContent='body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n';var Je=document.querySelector('head');Je.insertBefore($e,Je.firstChild)}(window.WebComponents)})();
//# sourceMappingURL=webcomponents-hi.js.map
