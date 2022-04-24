import{r as I,b as _,R as Ze,i as X,L as fe,_ as ze,d as $e,e as Ge,f as We,h as Ve,j as Xe,k as qe,g as Je}from"./index.25aee059.js";function De(e){return Intl.getCanonicalLocales(e)}function Qe(e,r){var n=r.tzData,u=r.uppercaseLinks,t=e.toUpperCase(),i=Object.keys(n).reduce(function(o,s){return o[s.toUpperCase()]=s,o},{}),a=u[t]||i[t];return a==="Etc/UTC"||a==="Etc/GMT"?"UTC":a}function ge(e){if(typeof e=="symbol")throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function de(e){if(e===void 0)return NaN;if(e===null)return 0;if(typeof e=="boolean")return e?1:0;if(typeof e=="number")return e;if(typeof e=="symbol"||typeof e=="bigint")throw new TypeError("Cannot convert symbol/bigint to number");return Number(e)}function xe(e){var r=de(e);if(isNaN(r)||A(r,-0))return 0;if(isFinite(r))return r;var n=Math.floor(Math.abs(r));return r<0&&(n=-n),A(n,-0)?0:n}function Ke(e){return isFinite(e)?Math.abs(e)>8.64*1e15?NaN:xe(e):NaN}function q(e){if(e==null)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function A(e,r){return Object.is?Object.is(e,r):e===r?e!==0||1/e===1/r:e!==e&&r!==r}function ve(e){return new Array(e)}function pe(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function er(e){if(e===null)return"Null";if(typeof e=="undefined")return"Undefined";if(typeof e=="function"||typeof e=="object")return"Object";if(typeof e=="number")return"Number";if(typeof e=="boolean")return"Boolean";if(typeof e=="string")return"String";if(typeof e=="symbol")return"Symbol";if(typeof e=="bigint")return"BigInt"}var Fe=864e5;function P(e,r){return e-Math.floor(e/r)*r}function J(e){return Math.floor(e/Fe)}function rr(e){return P(J(e)+4,7)}function ye(e){return Date.UTC(e,0)/Fe}function nr(e){return Date.UTC(e,0)}function Q(e){return new Date(e).getUTCFullYear()}function be(e){return e%4!==0?365:e%100!==0?366:e%400!==0?365:366}function x(e){return J(e)-ye(Q(e))}function K(e){return be(Q(e))===365?0:1}function Ee(e){var r=x(e),n=K(e);if(r>=0&&r<31)return 0;if(r<59+n)return 1;if(r<90+n)return 2;if(r<120+n)return 3;if(r<151+n)return 4;if(r<181+n)return 5;if(r<212+n)return 6;if(r<243+n)return 7;if(r<273+n)return 8;if(r<304+n)return 9;if(r<334+n)return 10;if(r<365+n)return 11;throw new Error("Invalid time")}function ur(e){var r=x(e),n=Ee(e),u=K(e);if(n===0)return r+1;if(n===1)return r-30;if(n===2)return r-58-u;if(n===3)return r-89-u;if(n===4)return r-119-u;if(n===5)return r-150-u;if(n===6)return r-180-u;if(n===7)return r-211-u;if(n===8)return r-242-u;if(n===9)return r-272-u;if(n===10)return r-303-u;if(n===11)return r-333-u;throw new Error("Invalid time")}var tr=24,he=60,Ce=60,ee=1e3,Se=ee*Ce,ir=Se*he;function ar(e){return P(Math.floor(e/ir),tr)}function or(e){return P(Math.floor(e/Se),he)}function cr(e){return P(Math.floor(e/ee),Ce)}function sr(e){return typeof e=="function"}function lr(e,r,n){if(!sr(e))return!1;if(n!=null&&n.boundTargetFunction){var u=n==null?void 0:n.boundTargetFunction;return r instanceof u}if(typeof r!="object")return!1;var t=e.prototype;if(typeof t!="object")throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");return Object.prototype.isPrototypeOf.call(t,r)}function fr(e){return P(e,ee)}function Ne(e){return typeof e=="undefined"?Object.create(null):q(e)}function k(e,r,n,u){if(e!==void 0){if(e=Number(e),isNaN(e)||e<r||e>n)throw new RangeError("".concat(e," is outside of range [").concat(r,", ").concat(n,"]"));return Math.floor(e)}return u}function we(e,r,n,u,t){var i=e[r];return k(i,n,u,t)}function C(e,r,n,u,t){if(typeof e!="object")throw new TypeError("Options must be an object");var i=e[r];if(i!==void 0){if(n!=="boolean"&&n!=="string")throw new TypeError("invalid type");if(n==="boolean"&&(i=Boolean(i)),n==="string"&&(i=ge(i)),u!==void 0&&!u.filter(function(a){return a==i}).length)throw new RangeError("".concat(i," is not within ").concat(u.join(", ")));return i}return t}function mr(e){if(typeof e=="undefined")return Object.create(null);if(typeof e=="object")return e;throw new TypeError("Options must be an object")}var Ie=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];function Te(e){return e.slice(e.indexOf("-")+1)}var Ae=Ie.map(Te);function j(e){return Ae.indexOf(e)>-1}function Dr(e,r){var n=r.tzData,u=r.uppercaseLinks,t=e.toUpperCase(),i=new Set,a=new Set;return Object.keys(n).map(function(o){return o.toUpperCase()}).forEach(function(o){return i.add(o)}),Object.keys(u).forEach(function(o){a.add(o.toUpperCase()),i.add(u[o].toUpperCase())}),i.has(t)||a.has(t)}function gr(e){return e.replace(/([a-z])/g,function(r,n){return n.toUpperCase()})}var dr=/[^A-Z]/;function Be(e){return e=gr(e),!(e.length!==3||dr.test(e))}function vr(e){return e.replace(/([A-Z])/g,function(r,n){return n.toLowerCase()})}function Oe(e){if(e=vr(e),j(e))return!0;var r=e.split("-per-");if(r.length!==2)return!1;var n=r[0],u=r[1];return!(!j(n)||!j(u))}function G(e,r,n){var u=n.getInternalSlots,t=u(e),i=t.notation,a=t.dataLocaleData,o=t.numberingSystem;switch(i){case"standard":return 0;case"scientific":return r;case"engineering":return Math.floor(r/3)*3;default:{var s=t.compactDisplay,f=t.style,d=t.currencyDisplay,l=void 0;if(f==="currency"&&d!=="name"){var m=a.numbers.currency[o]||a.numbers.currency[a.numbers.nu[0]];l=m.short}else{var v=a.numbers.decimal[o]||a.numbers.decimal[a.numbers.nu[0]];l=s==="long"?v.long:v.short}if(!l)return 0;var c=String(Math.pow(10,r)),D=Object.keys(l);if(c<D[0])return 0;if(c>D[D.length-1])return D[D.length-1].length-1;var p=D.indexOf(c);if(p===-1)return 0;var g=D[p],y=l[g].other;return y==="0"?0:g.length-l[g].other.match(/0+/)[0].length}}}function W(e,r,n){var u=n,t,i,a;if(e===0)t=I("0",u),i=0,a=0;else{var o=e.toString(),s=o.indexOf("e"),f=o.split("e"),d=f[0],l=f[1],m=d.replace(".","");if(s>=0&&m.length<=u)i=+l,t=m+I("0",u-m.length),a=e;else{i=_(e);var v=i-u+1,c=Math.round(g(e,v));g(c,u-1)>=10&&(i=i+1,c=Math.floor(c/10)),t=c.toString(),a=g(c,u-1-i)}}var D;if(i>=u-1?(t=t+I("0",i-u+1),D=i+1):i>=0?(t="".concat(t.slice(0,i+1),".").concat(t.slice(i+1)),D=i+1):(t="0.".concat(I("0",-i-1)).concat(t),D=1),t.indexOf(".")>=0&&n>r){for(var p=n-r;p>0&&t[t.length-1]==="0";)t=t.slice(0,-1),p--;t[t.length-1]==="."&&(t=t.slice(0,-1))}return{formattedString:t,roundedNumber:a,integerDigitsCount:D};function g(y,b){return b<0?y*Math.pow(10,-b):y/Math.pow(10,b)}}function Y(e,r,n){var u=n,t=Math.round(e*Math.pow(10,u)),i=t/Math.pow(10,u),a;if(t<1e21)a=t.toString();else{a=t.toString();var o=a.split("e"),s=o[0],f=o[1];a=s.replace(".",""),a=a+I("0",Math.max(+f-a.length+1,0))}var d;if(u!==0){var l=a.length;if(l<=u){var m=I("0",u+1-l);a=m+a,l=u+1}var v=a.slice(0,l-u),c=a.slice(l-u);a="".concat(v,".").concat(c),d=v.length}else d=a.length;for(var D=n-r;D>0&&a[a.length-1]==="0";)a=a.slice(0,-1),D--;return a[a.length-1]==="."&&(a=a.slice(0,-1)),{formattedString:a,roundedNumber:i,integerDigitsCount:d}}function re(e,r){var n=r<0||A(r,-0);n&&(r=-r);var u,t=e.roundingType;switch(t){case"significantDigits":u=W(r,e.minimumSignificantDigits,e.maximumSignificantDigits);break;case"fractionDigits":u=Y(r,e.minimumFractionDigits,e.maximumFractionDigits);break;default:u=W(r,1,2),u.integerDigitsCount>1&&(u=Y(r,0,0));break}r=u.roundedNumber;var i=u.formattedString,a=u.integerDigitsCount,o=e.minimumIntegerDigits;if(a<o){var s=I("0",o-a);i=s+i}return n&&(r=-r),{roundedNumber:r,formattedString:i}}function Me(e,r,n){var u=n.getInternalSlots;if(r===0)return[0,0];r<0&&(r=-r);var t=_(r),i=G(e,t,{getInternalSlots:u});r=i<0?r*Math.pow(10,-i):r/Math.pow(10,i);var a=re(u(e),r);if(a.roundedNumber===0)return[i,t];var o=_(a.roundedNumber);return o===t-i?[i,t]:[G(e,t+1,{getInternalSlots:u}),t+1]}function Le(e,r){var n=r.currencyDigitsData;return pe(n,e)?n[e]:2}var pr={adlm:["\u{1E950}","\u{1E951}","\u{1E952}","\u{1E953}","\u{1E954}","\u{1E955}","\u{1E956}","\u{1E957}","\u{1E958}","\u{1E959}"],ahom:["\u{11730}","\u{11731}","\u{11732}","\u{11733}","\u{11734}","\u{11735}","\u{11736}","\u{11737}","\u{11738}","\u{11739}"],arab:["\u0660","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"],arabext:["\u06F0","\u06F1","\u06F2","\u06F3","\u06F4","\u06F5","\u06F6","\u06F7","\u06F8","\u06F9"],bali:["\u1B50","\u1B51","\u1B52","\u1B53","\u1B54","\u1B55","\u1B56","\u1B57","\u1B58","\u1B59"],beng:["\u09E6","\u09E7","\u09E8","\u09E9","\u09EA","\u09EB","\u09EC","\u09ED","\u09EE","\u09EF"],bhks:["\u{11C50}","\u{11C51}","\u{11C52}","\u{11C53}","\u{11C54}","\u{11C55}","\u{11C56}","\u{11C57}","\u{11C58}","\u{11C59}"],brah:["\u{11066}","\u{11067}","\u{11068}","\u{11069}","\u{1106A}","\u{1106B}","\u{1106C}","\u{1106D}","\u{1106E}","\u{1106F}"],cakm:["\u{11136}","\u{11137}","\u{11138}","\u{11139}","\u{1113A}","\u{1113B}","\u{1113C}","\u{1113D}","\u{1113E}","\u{1113F}"],cham:["\uAA50","\uAA51","\uAA52","\uAA53","\uAA54","\uAA55","\uAA56","\uAA57","\uAA58","\uAA59"],deva:["\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F"],diak:["\u{11950}","\u{11951}","\u{11952}","\u{11953}","\u{11954}","\u{11955}","\u{11956}","\u{11957}","\u{11958}","\u{11959}"],fullwide:["\uFF10","\uFF11","\uFF12","\uFF13","\uFF14","\uFF15","\uFF16","\uFF17","\uFF18","\uFF19"],gong:["\u{11DA0}","\u{11DA1}","\u{11DA2}","\u{11DA3}","\u{11DA4}","\u{11DA5}","\u{11DA6}","\u{11DA7}","\u{11DA8}","\u{11DA9}"],gonm:["\u{11D50}","\u{11D51}","\u{11D52}","\u{11D53}","\u{11D54}","\u{11D55}","\u{11D56}","\u{11D57}","\u{11D58}","\u{11D59}"],gujr:["\u0AE6","\u0AE7","\u0AE8","\u0AE9","\u0AEA","\u0AEB","\u0AEC","\u0AED","\u0AEE","\u0AEF"],guru:["\u0A66","\u0A67","\u0A68","\u0A69","\u0A6A","\u0A6B","\u0A6C","\u0A6D","\u0A6E","\u0A6F"],hanidec:["\u3007","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D"],hmng:["\u{16B50}","\u{16B51}","\u{16B52}","\u{16B53}","\u{16B54}","\u{16B55}","\u{16B56}","\u{16B57}","\u{16B58}","\u{16B59}"],hmnp:["\u{1E140}","\u{1E141}","\u{1E142}","\u{1E143}","\u{1E144}","\u{1E145}","\u{1E146}","\u{1E147}","\u{1E148}","\u{1E149}"],java:["\uA9D0","\uA9D1","\uA9D2","\uA9D3","\uA9D4","\uA9D5","\uA9D6","\uA9D7","\uA9D8","\uA9D9"],kali:["\uA900","\uA901","\uA902","\uA903","\uA904","\uA905","\uA906","\uA907","\uA908","\uA909"],khmr:["\u17E0","\u17E1","\u17E2","\u17E3","\u17E4","\u17E5","\u17E6","\u17E7","\u17E8","\u17E9"],knda:["\u0CE6","\u0CE7","\u0CE8","\u0CE9","\u0CEA","\u0CEB","\u0CEC","\u0CED","\u0CEE","\u0CEF"],lana:["\u1A80","\u1A81","\u1A82","\u1A83","\u1A84","\u1A85","\u1A86","\u1A87","\u1A88","\u1A89"],lanatham:["\u1A90","\u1A91","\u1A92","\u1A93","\u1A94","\u1A95","\u1A96","\u1A97","\u1A98","\u1A99"],laoo:["\u0ED0","\u0ED1","\u0ED2","\u0ED3","\u0ED4","\u0ED5","\u0ED6","\u0ED7","\u0ED8","\u0ED9"],lepc:["\u1A90","\u1A91","\u1A92","\u1A93","\u1A94","\u1A95","\u1A96","\u1A97","\u1A98","\u1A99"],limb:["\u1946","\u1947","\u1948","\u1949","\u194A","\u194B","\u194C","\u194D","\u194E","\u194F"],mathbold:["\u{1D7CE}","\u{1D7CF}","\u{1D7D0}","\u{1D7D1}","\u{1D7D2}","\u{1D7D3}","\u{1D7D4}","\u{1D7D5}","\u{1D7D6}","\u{1D7D7}"],mathdbl:["\u{1D7D8}","\u{1D7D9}","\u{1D7DA}","\u{1D7DB}","\u{1D7DC}","\u{1D7DD}","\u{1D7DE}","\u{1D7DF}","\u{1D7E0}","\u{1D7E1}"],mathmono:["\u{1D7F6}","\u{1D7F7}","\u{1D7F8}","\u{1D7F9}","\u{1D7FA}","\u{1D7FB}","\u{1D7FC}","\u{1D7FD}","\u{1D7FE}","\u{1D7FF}"],mathsanb:["\u{1D7EC}","\u{1D7ED}","\u{1D7EE}","\u{1D7EF}","\u{1D7F0}","\u{1D7F1}","\u{1D7F2}","\u{1D7F3}","\u{1D7F4}","\u{1D7F5}"],mathsans:["\u{1D7E2}","\u{1D7E3}","\u{1D7E4}","\u{1D7E5}","\u{1D7E6}","\u{1D7E7}","\u{1D7E8}","\u{1D7E9}","\u{1D7EA}","\u{1D7EB}"],mlym:["\u0D66","\u0D67","\u0D68","\u0D69","\u0D6A","\u0D6B","\u0D6C","\u0D6D","\u0D6E","\u0D6F"],modi:["\u{11650}","\u{11651}","\u{11652}","\u{11653}","\u{11654}","\u{11655}","\u{11656}","\u{11657}","\u{11658}","\u{11659}"],mong:["\u1810","\u1811","\u1812","\u1813","\u1814","\u1815","\u1816","\u1817","\u1818","\u1819"],mroo:["\u{16A60}","\u{16A61}","\u{16A62}","\u{16A63}","\u{16A64}","\u{16A65}","\u{16A66}","\u{16A67}","\u{16A68}","\u{16A69}"],mtei:["\uABF0","\uABF1","\uABF2","\uABF3","\uABF4","\uABF5","\uABF6","\uABF7","\uABF8","\uABF9"],mymr:["\u1040","\u1041","\u1042","\u1043","\u1044","\u1045","\u1046","\u1047","\u1048","\u1049"],mymrshan:["\u1090","\u1091","\u1092","\u1093","\u1094","\u1095","\u1096","\u1097","\u1098","\u1099"],mymrtlng:["\uA9F0","\uA9F1","\uA9F2","\uA9F3","\uA9F4","\uA9F5","\uA9F6","\uA9F7","\uA9F8","\uA9F9"],newa:["\u{11450}","\u{11451}","\u{11452}","\u{11453}","\u{11454}","\u{11455}","\u{11456}","\u{11457}","\u{11458}","\u{11459}"],nkoo:["\u07C0","\u07C1","\u07C2","\u07C3","\u07C4","\u07C5","\u07C6","\u07C7","\u07C8","\u07C9"],olck:["\u1C50","\u1C51","\u1C52","\u1C53","\u1C54","\u1C55","\u1C56","\u1C57","\u1C58","\u1C59"],orya:["\u0B66","\u0B67","\u0B68","\u0B69","\u0B6A","\u0B6B","\u0B6C","\u0B6D","\u0B6E","\u0B6F"],osma:["\u{104A0}","\u{104A1}","\u{104A2}","\u{104A3}","\u{104A4}","\u{104A5}","\u{104A6}","\u{104A7}","\u{104A8}","\u{104A9}"],rohg:["\u{10D30}","\u{10D31}","\u{10D32}","\u{10D33}","\u{10D34}","\u{10D35}","\u{10D36}","\u{10D37}","\u{10D38}","\u{10D39}"],saur:["\uA8D0","\uA8D1","\uA8D2","\uA8D3","\uA8D4","\uA8D5","\uA8D6","\uA8D7","\uA8D8","\uA8D9"],segment:["\u{1FBF0}","\u{1FBF1}","\u{1FBF2}","\u{1FBF3}","\u{1FBF4}","\u{1FBF5}","\u{1FBF6}","\u{1FBF7}","\u{1FBF8}","\u{1FBF9}"],shrd:["\u{111D0}","\u{111D1}","\u{111D2}","\u{111D3}","\u{111D4}","\u{111D5}","\u{111D6}","\u{111D7}","\u{111D8}","\u{111D9}"],sind:["\u{112F0}","\u{112F1}","\u{112F2}","\u{112F3}","\u{112F4}","\u{112F5}","\u{112F6}","\u{112F7}","\u{112F8}","\u{112F9}"],sinh:["\u0DE6","\u0DE7","\u0DE8","\u0DE9","\u0DEA","\u0DEB","\u0DEC","\u0DED","\u0DEE","\u0DEF"],sora:["\u{110F0}","\u{110F1}","\u{110F2}","\u{110F3}","\u{110F4}","\u{110F5}","\u{110F6}","\u{110F7}","\u{110F8}","\u{110F9}"],sund:["\u1BB0","\u1BB1","\u1BB2","\u1BB3","\u1BB4","\u1BB5","\u1BB6","\u1BB7","\u1BB8","\u1BB9"],takr:["\u{116C0}","\u{116C1}","\u{116C2}","\u{116C3}","\u{116C4}","\u{116C5}","\u{116C6}","\u{116C7}","\u{116C8}","\u{116C9}"],talu:["\u19D0","\u19D1","\u19D2","\u19D3","\u19D4","\u19D5","\u19D6","\u19D7","\u19D8","\u19D9"],tamldec:["\u0BE6","\u0BE7","\u0BE8","\u0BE9","\u0BEA","\u0BEB","\u0BEC","\u0BED","\u0BEE","\u0BEF"],telu:["\u0C66","\u0C67","\u0C68","\u0C69","\u0C6A","\u0C6B","\u0C6C","\u0C6D","\u0C6E","\u0C6F"],thai:["\u0E50","\u0E51","\u0E52","\u0E53","\u0E54","\u0E55","\u0E56","\u0E57","\u0E58","\u0E59"],tibt:["\u0F20","\u0F21","\u0F22","\u0F23","\u0F24","\u0F25","\u0F26","\u0F27","\u0F28","\u0F29"],tirh:["\u{114D0}","\u{114D1}","\u{114D2}","\u{114D3}","\u{114D4}","\u{114D5}","\u{114D6}","\u{114D7}","\u{114D8}","\u{114D9}"],vaii:["\u1620","\u1621","\u1622","\u1623","\u1624","\u1625","\u1626","\u1627","\u1628","\u1629"],wara:["\u{118E0}","\u{118E1}","\u{118E2}","\u{118E3}","\u{118E4}","\u{118E5}","\u{118E6}","\u{118E7}","\u{118E8}","\u{118E9}"],wcho:["\u{1E2F0}","\u{1E2F1}","\u{1E2F2}","\u{1E2F3}","\u{1E2F4}","\u{1E2F5}","\u{1E2F6}","\u{1E2F7}","\u{1E2F8}","\u{1E2F9}"]},ke=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,Fr=new RegExp("^".concat(ke.source)),yr=new RegExp("".concat(ke.source,"$")),me=/[#0](?:[\.,][#0]+)*/g;function Pe(e,r,n,u){var t=e.sign,i=e.exponent,a=e.magnitude,o=u.notation,s=u.style,f=u.numberingSystem,d=r.numbers.nu[0],l=null;o==="compact"&&a&&(l=Er(e,n,r,s,u.compactDisplay,u.currencyDisplay,f));var m;if(s==="currency"&&u.currencyDisplay!=="name"){var v=r.currencies[u.currency];if(v)switch(u.currencyDisplay){case"code":m=u.currency;break;case"symbol":m=v.symbol;break;default:m=v.narrow;break}else m=u.currency}var c;if(l)c=l;else if(s==="decimal"||s==="unit"||s==="currency"&&u.currencyDisplay==="name"){var D=r.numbers.decimal[f]||r.numbers.decimal[d];c=R(D.standard,t)}else if(s==="currency"){var p=r.numbers.currency[f]||r.numbers.currency[d];c=R(p[u.currencySign],t)}else{var g=r.numbers.percent[f]||r.numbers.percent[d];c=R(g,t)}var y=me.exec(c)[0];if(c=c.replace(me,"{0}").replace(/'(.)'/g,"$1"),s==="currency"&&u.currencyDisplay!=="name"){var p=r.numbers.currency[f]||r.numbers.currency[d],b=p.currencySpacing.afterInsertBetween;b&&!yr.test(m)&&(c=c.replace("\xA4{0}","\xA4".concat(b,"{0}")));var E=p.currencySpacing.beforeInsertBetween;E&&!Fr.test(m)&&(c=c.replace("{0}\xA4","{0}".concat(E,"\xA4")))}for(var B=c.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),F=[],N=r.numbers.symbols[f]||r.numbers.symbols[d],O=0,U=B;O<U.length;O++){var h=U[O];if(!!h)switch(h){case"{0}":{F.push.apply(F,br(N,e,o,i,f,!l&&u.useGrouping,y));break}case"-":F.push({type:"minusSign",value:N.minusSign});break;case"+":F.push({type:"plusSign",value:N.plusSign});break;case"%":F.push({type:"percentSign",value:N.percentSign});break;case"\xA4":F.push({type:"currency",value:m});break;default:/^\{c:/.test(h)?F.push({type:"compact",value:h.substring(3,h.length-1)}):F.push({type:"literal",value:h});break}}switch(s){case"currency":if(u.currencyDisplay==="name"){var w=(r.numbers.currency[f]||r.numbers.currency[d]).unitPattern,H=void 0,ne=r.currencies[u.currency];ne?H=T(n,e.roundedNumber*Math.pow(10,i),ne.displayName):H=u.currency;for(var _e=w.split(/(\{[01]\})/g),S=[],Z=0,ue=_e;Z<ue.length;Z++){var h=ue[Z];switch(h){case"{0}":S.push.apply(S,F);break;case"{1}":S.push({type:"currency",value:H});break;default:h&&S.push({type:"literal",value:h});break}}return S}else return F;case"unit":{var z=u.unit,M=u.unitDisplay,te=r.units.simple[z],w=void 0;if(te)w=T(n,e.roundedNumber*Math.pow(10,i),r.units.simple[z][M]);else{var ie=z.split("-per-"),ae=ie[0],oe=ie[1];te=r.units.simple[ae];var ce=T(n,e.roundedNumber*Math.pow(10,i),r.units.simple[ae][M]),se=r.units.simple[oe].perUnit[M];if(se)w=se.replace("{0}",ce);else{var Ye=r.units.compound.per[M],He=T(n,1,r.units.simple[oe][M]);w=w=Ye.replace("{0}",ce).replace("{1}",He.replace("{0}",""))}}for(var S=[],$=0,le=w.split(/(\s*\{0\}\s*)/);$<le.length;$++){var h=le[$],L=/^(\s*)\{0\}(\s*)$/.exec(h);L?(L[1]&&S.push({type:"literal",value:L[1]}),S.push.apply(S,F),L[2]&&S.push({type:"literal",value:L[2]})):h&&S.push({type:"unit",value:h})}return S}default:return F}}function br(e,r,n,u,t,i,a){var o=[],s=r.formattedString,f=r.roundedNumber;if(isNaN(f))return[{type:"nan",value:s}];if(!isFinite(f))return[{type:"infinity",value:s}];var d=pr[t];d&&(s=s.replace(/\d/g,function(N){return d[+N]||N}));var l=s.indexOf("."),m,v;if(l>0?(m=s.slice(0,l),v=s.slice(l+1)):m=s,i&&(n!=="compact"||f>=1e4)){var c=e.group,D=[],p=a.split(".")[0],g=p.split(","),y=3,b=3;g.length>1&&(y=g[g.length-1].length),g.length>2&&(b=g[g.length-2].length);var E=m.length-y;if(E>0){for(D.push(m.slice(E,E+y)),E-=b;E>0;E-=b)D.push(m.slice(E,E+b));D.push(m.slice(0,E+b))}else D.push(m);for(;D.length>0;){var B=D.pop();o.push({type:"integer",value:B}),D.length>0&&o.push({type:"group",value:c})}}else o.push({type:"integer",value:m});if(v!==void 0&&o.push({type:"decimal",value:e.decimal},{type:"fraction",value:v}),(n==="scientific"||n==="engineering")&&isFinite(f)){o.push({type:"exponentSeparator",value:e.exponential}),u<0&&(o.push({type:"exponentMinusSign",value:e.minusSign}),u=-u);var F=Y(u,0,0);o.push({type:"exponentInteger",value:F.formattedString})}return o}function R(e,r){e.indexOf(";")<0&&(e="".concat(e,";-").concat(e));var n=e.split(";"),u=n[0],t=n[1];switch(r){case 0:return u;case-1:return t;default:return t.indexOf("-")>=0?t.replace(/-/g,"+"):"+".concat(u)}}function Er(e,r,n,u,t,i,a){var o,s=e.roundedNumber,f=e.sign,d=e.magnitude,l=String(Math.pow(10,d)),m=n.numbers.nu[0],v;if(u==="currency"&&i!=="name"){var c=n.numbers.currency,D=c[a]||c[m],p=(o=D.short)===null||o===void 0?void 0:o[l];if(!p)return null;v=T(r,s,p)}else{var c=n.numbers.decimal,g=c[a]||c[m],y=g[t][l];if(!y)return null;v=T(r,s,y)}return v==="0"?null:(v=R(v,f).replace(/([^\s;\-\+\d¤]+)/g,"{c:$1}").replace(/0+/,"0"),v)}function T(e,r,n){return n[e.select(r)]||n.other}function Ue(e,r,n){var u,t=n.getInternalSlots,i=t(e),a=i.pl,o=i.dataLocaleData,s=i.numberingSystem,f=o.numbers.symbols[s]||o.numbers.symbols[o.numbers.nu[0]],d=0,l=0,m;if(isNaN(r))m=f.nan;else if(!isFinite(r))m=f.infinity;else{i.style==="percent"&&(r*=100),u=Me(e,r,{getInternalSlots:t}),l=u[0],d=u[1],r=l<0?r*Math.pow(10,-l):r/Math.pow(10,l);var v=re(i,r);m=v.formattedString,r=v.roundedNumber}var c,D=i.signDisplay;switch(D){case"never":c=0;break;case"auto":A(r,0)||r>0||isNaN(r)?c=0:c=-1;break;case"always":A(r,0)||r>0||isNaN(r)?c=1:c=-1;break;default:r===0||isNaN(r)?c=0:r>0?c=1:c=-1}return Pe({roundedNumber:r,formattedString:m,exponent:l,magnitude:d,sign:c},i.dataLocaleData,a,i)}function hr(e,r,n){for(var u=Ue(e,r,n),t=ve(0),i=0,a=u;i<a.length;i++){var o=a[i];t.push({type:o.type,value:o.value})}return t}function je(e,r,n){r===void 0&&(r=Object.create(null));var u=n.getInternalSlots,t=u(e),i=C(r,"style","string",["decimal","percent","currency","unit"],"decimal");t.style=i;var a=C(r,"currency","string",void 0,void 0);if(a!==void 0&&!Be(a))throw RangeError("Malformed currency code");if(i==="currency"&&a===void 0)throw TypeError("currency cannot be undefined");var o=C(r,"currencyDisplay","string",["code","symbol","narrowSymbol","name"],"symbol"),s=C(r,"currencySign","string",["standard","accounting"],"standard"),f=C(r,"unit","string",void 0,void 0);if(f!==void 0&&!Oe(f))throw RangeError("Invalid unit argument for Intl.NumberFormat()");if(i==="unit"&&f===void 0)throw TypeError("unit cannot be undefined");var d=C(r,"unitDisplay","string",["short","narrow","long"],"short");i==="currency"&&(t.currency=a.toUpperCase(),t.currencyDisplay=o,t.currencySign=s),i==="unit"&&(t.unit=f,t.unitDisplay=d)}function Re(e,r,n,u,t){var i=we(r,"minimumIntegerDigits",1,21,1),a=r.minimumFractionDigits,o=r.maximumFractionDigits,s=r.minimumSignificantDigits,f=r.maximumSignificantDigits;if(e.minimumIntegerDigits=i,s!==void 0||f!==void 0)e.roundingType="significantDigits",s=k(s,1,21,1),f=k(f,s,21,21),e.minimumSignificantDigits=s,e.maximumSignificantDigits=f;else if(a!==void 0||o!==void 0){e.roundingType="fractionDigits",a=k(a,0,20,n);var d=Math.max(a,u);o=k(o,a,20,d),e.minimumFractionDigits=a,e.maximumFractionDigits=o}else t==="compact"?e.roundingType="compactRounding":(e.roundingType="fractionDigits",e.minimumFractionDigits=n,e.maximumFractionDigits=u)}function Cr(e,r,n,u){var t=u.getInternalSlots,i=u.localeData,a=u.availableLocales,o=u.numberingSystemNames,s=u.getDefaultLocale,f=u.currencyDigitsData,d=De(r),l=Ne(n),m=Object.create(null),v=C(l,"localeMatcher","string",["lookup","best fit"],"best fit");m.localeMatcher=v;var c=C(l,"numberingSystem","string",void 0,void 0);if(c!==void 0&&o.indexOf(c)<0)throw RangeError("Invalid numberingSystems: ".concat(c));m.nu=c;var D=Ze(a,d,m,["nu"],i,s),p=i[D.dataLocale];X(!!p,"Missing locale data for ".concat(D.dataLocale));var g=t(e);g.locale=D.locale,g.dataLocale=D.dataLocale,g.numberingSystem=D.nu,g.dataLocaleData=p,je(e,l,{getInternalSlots:t});var y=g.style,b,E;if(y==="currency"){var B=g.currency,F=Le(B,{currencyDigitsData:f});b=F,E=F}else b=0,E=y==="percent"?0:3;var N=C(l,"notation","string",["standard","scientific","engineering","compact"],"standard");g.notation=N,Re(g,l,b,E,N);var O=C(l,"compactDisplay","string",["short","long"],"short");N==="compact"&&(g.compactDisplay=O);var U=C(l,"useGrouping","boolean",void 0,!0);g.useGrouping=U;var h=C(l,"signDisplay","string",["auto","never","always","exceptZero"],"auto");return g.signDisplay=h,e}function Sr(e){for(var r=[],n=e.indexOf("{"),u=0,t=0,i=e.length;n<e.length&&n>-1;)u=e.indexOf("}",n),X(u>n,"Invalid pattern ".concat(e)),n>t&&r.push({type:"literal",value:e.substring(t,n)}),r.push({type:e.substring(n+1,u),value:void 0}),t=u+1,n=e.indexOf("{",t);return t<i&&r.push({type:"literal",value:e.substring(t,i)}),r}function Nr(e,r,n){var u="best fit";return n!==void 0&&(n=q(n),u=C(n,"localeMatcher","string",["lookup","best fit"],"best fit")),u==="best fit"?fe(e,r):fe(e,r)}(function(e){ze(r,e);function r(){var n=e!==null&&e.apply(this,arguments)||this;return n.type="MISSING_LOCALE_DATA",n}return r})(Error);function wr(e){return e.type==="MISSING_LOCALE_DATA"}var V;(function(e){e.startRange="startRange",e.shared="shared",e.endRange="endRange"})(V||(V={}));var Ir=Object.freeze(Object.defineProperty({__proto__:null,_formatToParts:Pe,getInternalSlot:$e,getMultiInternalSlots:Ge,isLiteralPart:We,setInternalSlot:Ve,setMultiInternalSlots:Xe,getMagnitude:_,defineProperty:qe,isMissingLocaleDataError:wr,invariant:X,CanonicalizeLocaleList:De,CanonicalizeTimeZoneName:Qe,CoerceOptionsToObject:Ne,GetNumberOption:we,GetOption:C,GetOptionsObject:mr,SANCTIONED_UNITS:Ie,removeUnitNamespace:Te,SIMPLE_UNITS:Ae,IsSanctionedSimpleUnitIdentifier:j,IsValidTimeZoneName:Dr,IsWellFormedCurrencyCode:Be,IsWellFormedUnitIdentifier:Oe,ComputeExponent:Me,ComputeExponentForMagnitude:G,CurrencyDigits:Le,FormatNumericToParts:hr,FormatNumericToString:re,InitializeNumberFormat:Cr,PartitionNumberPattern:Ue,SetNumberFormatDigitOptions:Re,SetNumberFormatUnitOptions:je,ToRawFixed:Y,ToRawPrecision:W,PartitionPattern:Sr,SupportedLocales:Nr,get RangePatternType(){return V},ToString:ge,ToNumber:de,TimeClip:Ke,ToObject:q,SameValue:A,ArrayCreate:ve,HasOwnProperty:pe,Type:er,Day:J,WeekDay:rr,DayFromYear:ye,TimeFromYear:nr,YearFromTime:Q,DaysInYear:be,DayWithinYear:x,InLeapYear:K,MonthFromTime:Ee,DateFromTime:ur,HourFromTime:ar,MinFromTime:or,SecFromTime:cr,OrdinaryHasInstance:lr,msFromTime:fr},Symbol.toStringTag,{value:"Module"})),Ar=Je(Ir);export{Ar as r};
