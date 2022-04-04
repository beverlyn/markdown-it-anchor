let e=!1;const n={false:"push",true:"unshift",after:"push",before:"unshift"},t={isPermalinkSymbol:!0};function a(a,r,i,l){if(!e){const n="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";"object"==typeof process&&process&&process.emitWarning?process.emitWarning(n):console.warn(n),e=!0}const o=[Object.assign(new i.Token("link_open","a",1),{attrs:[...r.permalinkClass?[["class",r.permalinkClass]]:[],["href",r.permalinkHref(a,i)],...Object.entries(r.permalinkAttrs(a,i))]}),Object.assign(new i.Token("html_block","",0),{content:r.permalinkSymbol,meta:t}),new i.Token("link_close","a",-1)];r.permalinkSpace&&i.tokens[l+1].children[n[r.permalinkBefore]](Object.assign(new i.Token("text","",0),{content:" "})),i.tokens[l+1].children[n[r.permalinkBefore]](...o)}function r(e){return"#"+e}function i(e){return{}}const l={class:"header-anchor",symbol:"#",renderHref:r,renderAttrs:i};function o(e){function n(t){return t=Object.assign({},n.defaults,t),(n,a,r,i)=>e(n,t,a,r,i)}return n.defaults=Object.assign({},l),n.renderPermalinkImpl=e,n}const c=o((e,a,r,i,l)=>{const o=[Object.assign(new i.Token("link_open","a",1),{attrs:[...a.class?[["class",a.class]]:[],["href",a.renderHref(e,i)],...a.ariaHidden?[["aria-hidden","true"]]:[],...Object.entries(a.renderAttrs(e,i))]}),Object.assign(new i.Token("html_inline","",0),{content:a.symbol,meta:t}),new i.Token("link_close","a",-1)];a.space&&i.tokens[l+1].children[n[a.placement]](Object.assign(new i.Token("text","",0),{content:" "})),i.tokens[l+1].children[n[a.placement]](...o)});Object.assign(c.defaults,{space:!0,placement:"after",ariaHidden:!1});const s=o(c.renderPermalinkImpl);s.defaults=Object.assign({},c.defaults,{ariaHidden:!0});const d=o((e,n,t,a,r)=>{const i=[Object.assign(new a.Token("link_open","a",1),{attrs:[...n.class?[["class",n.class]]:[],["href",n.renderHref(e,a)],...Object.entries(n.renderAttrs(e,a))]}),...n.safariReaderFix?[new a.Token("span_open","span",1)]:[],...a.tokens[r+1].children,...n.safariReaderFix?[new a.Token("span_close","span",-1)]:[],new a.Token("link_close","a",-1)];a.tokens[r+1]=Object.assign(new a.Token("inline","",0),{children:i})});Object.assign(d.defaults,{safariReaderFix:!1});const b=o((e,a,r,i,l)=>{if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(a.style))throw new Error(`\`permalink.linkAfterHeader\` called with unknown style option \`${a.style}\``);if(!["aria-describedby","aria-labelledby"].includes(a.style)&&!a.assistiveText)throw new Error(`\`permalink.linkAfterHeader\` called without the \`assistiveText\` option in \`${a.style}\` style`);if("visually-hidden"===a.style&&!a.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");const o=i.tokens[l+1].children.filter(e=>"text"===e.type||"code_inline"===e.type).reduce((e,n)=>e+n.content,""),c=[],s=[];a.class&&s.push(["class",a.class]),s.push(["href",a.renderHref(e,i)]),s.push(...Object.entries(a.renderAttrs(e,i))),"visually-hidden"===a.style?(c.push(Object.assign(new i.Token("span_open","span",1),{attrs:[["class",a.visuallyHiddenClass]]}),Object.assign(new i.Token("text","",0),{content:a.assistiveText(o)}),new i.Token("span_close","span",-1)),a.space&&c[n[a.placement]](Object.assign(new i.Token("text","",0),{content:" "})),c[n[a.placement]](Object.assign(new i.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new i.Token("html_inline","",0),{content:a.symbol,meta:t}),new i.Token("span_close","span",-1))):c.push(Object.assign(new i.Token("html_inline","",0),{content:a.symbol,meta:t})),"aria-label"===a.style?s.push(["aria-label",a.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(a.style)&&s.push([a.style,e]);const d=[Object.assign(new i.Token("link_open","a",1),{attrs:s}),...c,new i.Token("link_close","a",-1)];i.tokens.splice(l+3,0,...d),a.wrapper&&(i.tokens.splice(l,0,Object.assign(new i.Token("html_block","",0),{content:a.wrapper[0]+"\n"})),i.tokens.splice(l+3+d.length+1,0,Object.assign(new i.Token("html_block","",0),{content:a.wrapper[1]+"\n"})))});function p(e,n,t,a){let r=e,i=a;if(t&&Object.prototype.hasOwnProperty.call(n,r))throw new Error(`User defined \`id\` attribute \`${e}\` is not unique. Please fix it in your Markdown to continue.`);for(;Object.prototype.hasOwnProperty.call(n,r);)r=`${e}-${i}`,i+=1;return n[r]=!0,r}function u(e,n){n=Object.assign({},u.defaults,n),e.core.ruler.push("anchor",e=>{const t={},r=e.tokens,i=Array.isArray(n.level)?(l=n.level,e=>l.includes(e)):(e=>n=>n>=e)(n.level);var l;for(let l=0;l<r.length;l++){const o=r[l];if("heading_open"!==o.type)continue;if(!i(Number(o.tag.substr(1))))continue;const c=r[l+1].children.filter(e=>"text"===e.type||"code_inline"===e.type).reduce((e,n)=>e+n.content,"");let s=o.attrGet("id");s=null==s?p(n.slugify(c),t,!1,n.uniqueSlugStartIndex):p(s,t,!0,n.uniqueSlugStartIndex),o.attrSet("id",s),!1!==n.tabIndex&&o.attrSet("tabindex",""+n.tabIndex),"function"==typeof n.permalink?n.permalink(s,n,e,l):(n.permalink||n.renderPermalink&&n.renderPermalink!==a)&&n.renderPermalink(s,n,e,l),l=r.indexOf(o),n.callback&&n.callback(o,{slug:s,title:c})}})}Object.assign(b.defaults,{style:"visually-hidden",space:!0,placement:"after",wrapper:null}),u.permalink={__proto__:null,legacy:a,renderHref:r,renderAttrs:i,makePermalink:o,linkInsideHeader:c,ariaHidden:s,headerLink:d,linkAfterHeader:b},u.defaults={level:1,slugify:e=>encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g,"-")),uniqueSlugStartIndex:1,tabIndex:"-1",permalink:!1,renderPermalink:a,permalinkClass:s.defaults.class,permalinkSpace:s.defaults.space,permalinkSymbol:"¶",permalinkBefore:"before"===s.defaults.placement,permalinkHref:s.defaults.renderHref,permalinkAttrs:s.defaults.renderAttrs},u.default=u;export default u;
//# sourceMappingURL=markdownItAnchor.modern.js.map
