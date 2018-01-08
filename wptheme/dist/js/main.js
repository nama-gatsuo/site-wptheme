!function t(e,n,i){function o(r,s){if(!n[r]){if(!e[r]){var u="function"==typeof require&&require;if(!s&&u)return u(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[r]={exports:{}};e[r][0].call(h.exports,function(t){var n=e[r][1][t];return o(n?n:t)},h,h.exports,t,e,n,i)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(t,e,n){function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(l===setTimeout)return setTimeout(t,0);if((l===i||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function s(){g&&p&&(g=!1,p.length?v=p.concat(v):m=-1,v.length&&u())}function u(){if(!g){var t=a(s);g=!0;for(var e=v.length;e;){for(p=v,v=[];++m<e;)p&&p[m].run();m=-1,e=v.length}p=null,g=!1,r(t)}}function c(t,e){this.fun=t,this.array=e}function h(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:i}catch(t){l=i}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,v=[],g=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new c(t,e)),1!==v.length||g||a(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=h,f.addListener=h,f.once=h,f.off=h,f.removeListener=h,f.removeAllListeners=h,f.emit=h,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],2:[function(t,e,n){(function(t){var i=i||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},update:function(e,n){if(0===t.length)return!1;var o=0;for(e=void 0!==e?e:i.now();o<t.length;)t[o].update(e)||n?o++:t.splice(o,1);return!0}}}();!function(){void 0===this.window&&void 0!==this.process?i.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e3}:void 0!==this.window&&void 0!==window.performance&&void 0!==window.performance.now?i.now=window.performance.now.bind(window.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()}}(),i.Tween=function(t){var e=t,n={},o={},a={},r=1e3,s=0,u=!1,c=!1,h=!1,l=0,d=null,f=i.Easing.Linear.None,p=i.Interpolation.Linear,v=[],g=null,m=!1,y=null,E=null,w=null;for(var T in t)n[T]=parseFloat(t[T],10);this.to=function(t,e){return void 0!==e&&(r=e),o=t,this},this.start=function(t){i.add(this),c=!0,m=!1,d=void 0!==t?t:i.now(),d+=l;for(var r in o){if(o[r]instanceof Array){if(0===o[r].length)continue;o[r]=[e[r]].concat(o[r])}void 0!==n[r]&&(n[r]=e[r],n[r]instanceof Array==!1&&(n[r]*=1),a[r]=n[r]||0)}return this},this.stop=function(){return c?(i.remove(this),c=!1,null!==w&&w.call(e),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var t=0,e=v.length;t<e;t++)v[t].stop()},this.delay=function(t){return l=t,this},this.repeat=function(t){return s=t,this},this.yoyo=function(t){return u=t,this},this.easing=function(t){return f=t,this},this.interpolation=function(t){return p=t,this},this.chain=function(){return v=arguments,this},this.onStart=function(t){return g=t,this},this.onUpdate=function(t){return y=t,this},this.onComplete=function(t){return E=t,this},this.onStop=function(t){return w=t,this},this.update=function(t){var i,c,w;if(t<d)return!0;m===!1&&(null!==g&&g.call(e),m=!0),c=(t-d)/r,c=c>1?1:c,w=f(c);for(i in o)if(void 0!==n[i]){var T=n[i]||0,b=o[i];b instanceof Array?e[i]=p(b,w):("string"==typeof b&&(b="+"===b.charAt(0)||"-"===b.charAt(0)?T+parseFloat(b,10):parseFloat(b,10)),"number"==typeof b&&(e[i]=T+(b-T)*w))}if(null!==y&&y.call(e,w),1===c){if(s>0){isFinite(s)&&s--;for(i in a){if("string"==typeof o[i]&&(a[i]=a[i]+parseFloat(o[i],10)),u){var M=a[i];a[i]=o[i],o[i]=M}n[i]=a[i]}return u&&(h=!h),d=t+l,!0}null!==E&&E.call(e);for(var N=0,R=v.length;N<R;N++)v[N].start(d+r);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,e){var n=t.length-1,o=n*e,a=Math.floor(o),r=i.Interpolation.Utils.Linear;return e<0?r(t[0],t[1],o):e>1?r(t[n],t[n-1],n-o):r(t[a],t[a+1>n?n:a+1],o-a)},Bezier:function(t,e){for(var n=0,o=t.length-1,a=Math.pow,r=i.Interpolation.Utils.Bernstein,s=0;s<=o;s++)n+=a(1-e,o-s)*a(e,s)*t[s]*r(o,s);return n},CatmullRom:function(t,e){var n=t.length-1,o=n*e,a=Math.floor(o),r=i.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(a=Math.floor(o=n*(1+e))),r(t[(a-1+n)%n],t[a],t[(a+1)%n],t[(a+2)%n],o-a)):e<0?t[0]-(r(t[0],t[0],t[1],t[1],-o)-t[0]):e>1?t[n]-(r(t[n],t[n],t[n-1],t[n-1],o-n)-t[n]):r(t[a?a-1:0],t[a],t[n<a+1?n:a+1],t[n<a+2?n:a+2],o-a)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=i.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,o){var a=.5*(n-t),r=.5*(i-e),s=o*o,u=o*s;return(2*e-2*n+a+r)*u+(-3*e+3*n-2*a-r)*s+a*o+e}}},function(t){"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof e&&"object"==typeof n?e.exports=i:void 0!==t&&(t.TWEEN=i)}(this)}).call(this,t("_process"))},{_process:1}],3:[function(t,e,n){(function(e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i,o="undefined"!=typeof window?window.$:"undefined"!=typeof e?e.$:null,a=n(o),r=t("./wgl/NodeScene"),s=n(r),u=0,c=3,h=!1,l=function(){u++,(0,a.default)("#progress--wp").css({width:200*u/c}),u==c&&(i=new s.default)},d=function(){for(var t={y:null,m:null},e={y:null,m:null},n=[],o=0;o<POSTS.length;o++){var r=new Date(POSTS[o].date),s=r.getFullYear(),u=r.getMonth()+1;n.push({y:s,m:u}),0==o?(t.y=s,t.m=u):o==POSTS.length-1&&(e.y=s,e.m=u)}for(var c=(0,a.default)("#menu__blog"),h=function(o){var r=n.filter(function(t){return t.y==o}),s=void 0;s=o==t.y?t.m:12;var u=void 0;u=o==e.y?e.m:1;var h=(0,a.default)("<div/>");h.addClass("year__header "+o),h.text(o),h.click(function(){i.fetchPostsByYear(o)}),c.append(h);var l=(0,a.default)("<ul/>");l.addClass("menu__area__wrapper");for(var d=function(t){var e=r.filter(function(e){return e.m==t}),n=e.length,s=(0,a.default)("<li/>");if(s.addClass("year__month"),n>0){var u=void 0,c=void 0,h=void 0;u=Math.floor(45+13.5*n),c=Math.floor(76+179/8*n),h=Math.floor(66+155/8*n),s.css({backgroundColor:"rgb("+u+","+c+","+h+")"}),s.addClass("isClickable"),s.click(function(){i.fetchPostsByMonth(o,t)})}s.text(t),l.append(s)},f=s;f>u-1;f--)d(f);c.append(l)},l=t.y;l>e.y-1;l--)h(l)},f=function(){var t=(0,a.default)("#menu__works"),e=(0,a.default)("<ul/>");e.addClass("menu__area__wrapper");for(var n=function(t){var n=CATEGORIES[t].name,o=CATEGORIES[t].count,r=(0,a.default)("<li/>");if(r.text(n),r.addClass("works__category"),o>0){var s=void 0,u=void 0,c=void 0;s=Math.floor(45+13.5*o),u=Math.floor(76+179/8*o),c=Math.floor(66+155/8*o),r.css({backgroundColor:"rgb("+s+","+u+","+c+")"}),r.addClass("isClickable"),r.click(function(){i.fetchPagesByCategory(CATEGORIES[t].id)})}e.append(r)},o=0;o<CATEGORIES.length;o++)n(o);t.append(e)},p=function(){var t=(0,a.default)("#menuBtn");t.hover(function(t){(0,a.default)(t.currentTarget).velocity({opacity:1},{duration:200})},function(t){(0,a.default)(t.currentTarget).velocity({opacity:.5},{duration:200})}),t.click(function(){h?g():v()})},v=function(){(0,a.default)("#menu").show().velocity({right:0},{duration:200}),h=!0},g=function(){(0,a.default)("#menu").velocity({right:-300},{duration:200,onComplete:function(t){(0,a.default)("#menu").hide()}}),h=!1},m=function(){(0,a.default)(".toggler__button").click(function(t){var e=(0,a.default)(t.currentTarget).parent(),n=e.find(".toggler__area");n.toggle(200)})};window.onload=function(){var t={_wp_json_nonce:window.nonce},e="https://ayumu-nagamatsu.com/wp-json/wp/v2/pages?_embed&parent=7&orderby=menu_order&order=desc&per_page=100";a.default.getJSON(e,t).done(function(t){window.PAGES=t,l()}),t={_wp_json_nonce:window.nonce},e="https://ayumu-nagamatsu.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=100",a.default.getJSON(e,t).done(function(t){window.POSTS=t,d(),l()}),t={_wp_json_nonce:window.nonce},e="https://ayumu-nagamatsu.com/wp-json/wp/v2/categories?parent=9",a.default.getJSON(e,t).done(function(t){window.CATEGORIES=t,f(),l()}),p(),m()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./wgl/NodeScene":5}],4:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(){i(this,t),this.data=[],this.objs=[]}return o(t,[{key:"addPost",value:function(t,e,n){var i=new Date(e),o=i.getFullYear(),a=i.getMonth()+1,r={obj:t,type:0,attr:{y:o,m:a},isActive:!1,isHover:!1,index:this.objs.length,start:t.position.clone(),url:n};this.data.push(r),this.objs.push(t)}},{key:"addPage",value:function(t,e,n){var i={obj:t,type:1,attr:{categories:e},isActive:!1,isHover:!1,index:this.objs.length,start:t.position.clone(),url:n};this.data.push(i),this.objs.push(t)}},{key:"findObj",value:function(t){var e=this.objs.findIndex(function(e){return e==t});return e}},{key:"getLength",value:function(){return this.data.length}},{key:"getPostsByYear",value:function(t,e){for(var n=[],i=0;i<this.data.length;i++)0==this.data[i].type&&this.data[i].attr.y==t&&(n.push(this.data[i].obj),e&&(this.data[i].isActive=!0));return n}},{key:"getPostsByMonth",value:function(t,e,n){for(var i=[],o=0;o<this.data.length;o++){var a=this.data[o];0==a.type&&a.attr.y==t&&a.attr.m==e&&(i.push(a.obj),n&&(a.isActive=!0))}return i}},{key:"getAllPosts",value:function(t){for(var e=[],n=0;n<this.data.length;n++)0==this.data[n].type&&(e.push(this.data[n].obj),t&&(this.data[n].isActive=!0));return e}},{key:"getPagesByCategory",value:function(t,e){for(var n=[],i=0;i<this.data.length;i++){var o=this.data[i];if(1==o.type){var a=o.attr.categories.filter(function(e){return e==t});a.length>0&&(n.push(o.obj),e&&(o.isActive=!0))}}return n}},{key:"getAllPages",value:function(t){for(var e=[],n=0;n<this.data.length;n++)1==this.data[n].type&&(e.push(this.data[n].obj),t&&(this.data[n].isActive=!0));return e}},{key:"getAll",value:function(t){return this.objs}},{key:"getByIndex",value:function(t,e){return this.objs[t]}},{key:"getActiveIndex",value:function(){for(var t=[],e=0;e<this.data.length;e++)this.data[e].isActive&&t.push(e);return t}},{key:"reset",value:function(){for(var t=this.getActiveIndex(),e=0;e<t.length;e++)this.data[t[e]].isActive=!1}}]),t}();n.default=a},{}],5:[function(t,e,n){(function(e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=t("tween.js"),s=i(r),u="undefined"!=typeof window?window.$:"undefined"!=typeof e?e.$:null,c=i(u);t("./libs/TrackballControls");var h=t("./NodeDAO"),l=i(h),d="https://ayumu-nagamatsu.com/wp-content/themes/myportfolio_v2/",f=function(){function t(){o(this,t),this.NV={kanji:[],alph:[],t:0,n:0,pv:null,lv:null,pm:null,lm:null},this.PAGE_IMAGE=new Array(PAGES.length),this.dao=new l.default,this.preload()}return a(t,[{key:"preload",value:function(){var t=this,e=new THREE.LoadingManager,n=new THREE.JSONLoader(e),i=new THREE.TextureLoader(e);n.load(d+"asset/json/kanji.json",function(e){for(var n=0;n<e.vertices.length;n++){var i=e.vertices[n];i.multiplyScalar(20).applyAxisAngle(new THREE.Vector3(1,0,0),Math.PI/2),i.z=3*Math.random(),t.NV.kanji.push(i)}t.NV.n=e.vertices.length}),n.load(d+"asset/json/alph.json",function(e){for(var n=0;n<e.vertices.length;n++){var i=e.vertices[n];i.multiplyScalar(10).applyAxisAngle(new THREE.Vector3(1,0,0),Math.PI/2),i.z=3*Math.random(),t.NV.alph.push(i)}t.NV.n=e.vertices.length});for(var o=function(e){var n=PAGES[e]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;i.load(n,function(n){var i=n.image.width/n.image.height,o=new THREE.PlaneBufferGeometry(12,12/i,1,1),a=new THREE.MeshBasicMaterial({map:n,side:THREE.DoubleSide,transparent:!0,opacity:.5}),r=new THREE.Mesh(o,a);t.PAGE_IMAGE[e]=r})},a=0;a<PAGES.length;a++)o(a);e.onProgress=function(t,e,n){(0,c.default)("#progress--res").css({width:200*e/n})},e.onLoad=function(){(0,c.default)("#loading").hide(100),t.init()}}},{key:"init",value:function(){this.scene=new THREE.Scene,this.offset=12,this.w=window.innerWidth-2*this.offset,this.h=window.innerHeight-2*this.offset,this.camera=new THREE.PerspectiveCamera(45,this.w/this.h,.1,1e3),this.camera.position.set(0,0,200),this.camera.lookAt(this.scene.position),this.mouse=new THREE.Vector2,this.raycaster=new THREE.Raycaster;var t=this.createHeaderNode("BLOG");t.position.set(-70,20*Math.random()-10,20*Math.random()-10),this.scene.add(t);for(var e=0;e<POSTS.length;e++){var n=document.createElement("canvas");n.width=512,n.height=128;var i=n.getContext("2d");i.fillStyle="#003355",i.fillRect(0,0,512,128),i.font="400 24px 'Noto Sans Japanese'",i.fillStyle="#99ffdd",i.fillText(POSTS[e].title.rendered,12,64),i.fillStyle="#99ffdd",i.font="400 16px 'Noto Sans Japanese'",i.fillText(this.getDate(POSTS[e].date),12,96);var o=new THREE.CanvasTexture(n),a=new THREE.PlaneBufferGeometry(44,11,1,1),r=new THREE.MeshBasicMaterial({map:o,side:THREE.DoubleSide,transparent:!0,opacity:.5}),s=new THREE.Mesh(a,r),u=this.createRandomSphereCoord();s.position.set(u.x+t.position.x,u.y+t.position.y,u.z+t.position.z),this.scene.add(s),this.dao.addPost(s,POSTS[e].date,POSTS[e].link)}var c=this.createHeaderNode("WORKS");c.position.set(70,20*Math.random()-10,20*Math.random()-10),this.scene.add(c);for(var h=0;h<PAGES.length;h++){var l=document.createElement("canvas");l.width=128,l.height=128;var d=l.getContext("2d");d.font="400 18px 'Noto Sans Japanese'",d.fillStyle="#99ffdd";for(var f=PAGES[h].title.rendered.split(" "),p=0;p<f.length;p++)d.fillText(f[p],12,24*(p+1));var v=new THREE.CanvasTexture(l),g=new THREE.PlaneBufferGeometry(12,12,1,1),m=new THREE.MeshBasicMaterial({map:v,side:THREE.DoubleSide,transparent:!0,opacity:.9}),y=new THREE.Mesh(g,m);y.position.set(0,-10,1),this.PAGE_IMAGE[h].add(y);var E=this.createRandomSphereCoord();this.PAGE_IMAGE[h].position.set(E.x+c.position.x,E.y+c.position.y,E.z+c.position.z),this.scene.add(this.PAGE_IMAGE[h]),this.dao.addPage(this.PAGE_IMAGE[h],PAGES[h].categories,PAGES[h].link)}this.lines=new THREE.Object3D;for(var w=this.dao.getAllPages(),T=this.dao.getAllPosts(),b=0;b<T.length;b++){var M=T[b];this.lines.add(this.createLine(t.position,M.position))}for(var N=0;N<w.length;N++){var R=w[N];this.lines.add(this.createLine(c.position,R.position))}this.lines.add(this.createLine(this.scene.position,c.position)),this.lines.add(this.createLine(this.scene.position,t.position)),this.scene.add(this.lines),this.createNameObject(),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(this.w,this.h),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(new THREE.Color(0));var O=document.getElementById("wgl");O.appendChild(this.renderer.domElement),this.controls=new THREE.TrackballControls(this.camera),this.controls.rotateSpeed=.7,this.controls.zoomSpeed=.5,this.controls.noPan=!0,this.controls.minDistance=10,this.controls.maxDistance=1e3,window.addEventListener("resize",this.onWindowResize.bind(this),!1),O.addEventListener("mousemove",this.onMouseMove.bind(this),!1),O.addEventListener("click",this.onMouseClick.bind(this),!1),this.animate()}},{key:"createRandomSphereCoord",value:function(){var t=2*Math.random()-1,e=Math.random()*Math.PI*2,n=40*Math.random()+30,i=new THREE.Vector3(n*Math.sqrt(1-t*t)*Math.cos(e),n*Math.sqrt(1-t*t)*Math.sin(e),n*t);return i}},{key:"createHeaderNode",value:function(t){var e=document.createElement("canvas");e.width=256,e.height=128;var n=e.getContext("2d");n.font="400 64px 'Noto Sans Japanese'",n.fillStyle="#99ffdd",n.fillText(t,12,64);var i=new THREE.CanvasTexture(e),o=new THREE.PlaneBufferGeometry(16,8,1,1),a=new THREE.MeshBasicMaterial({map:i,blending:THREE.AdditiveBlending,transparent:!0,opacity:.5,side:THREE.DoubleSide}),r=new THREE.Mesh(o,a);return r}},{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),s.default.update(),this.controls.update(),this.updateName(),this.updateLines(),this.renderer.render(this.scene,this.camera)}},{key:"createLine",value:function(t,e){var n=new THREE.Geometry;n.vertices.push(t,e);var i=new THREE.LineBasicMaterial({color:10092509,blending:THREE.AdditiveBlending,transparent:!0,opacity:.5}),o=new THREE.Line(n,i);return o}},{key:"getDate",value:function(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),a=n+" / "+i+" / "+o;return a}},{key:"createNameObject",value:function(){var t=new THREE.BufferGeometry;this.NV.pv=new Float32Array(3*this.NV.n);for(var e=0;e<this.NV.n;e++)this.NV.pv[3*e]=this.NV.alph[e].x,this.NV.pv[3*e+1]=this.NV.alph[e].y,this.NV.pv[3*e+2]=this.NV.alph[e].z;t.addAttribute("position",new THREE.BufferAttribute(this.NV.pv,3).setDynamic(!0));var n=new THREE.LineBasicMaterial({color:10092509,blending:THREE.AdditiveBlending,transparent:!0,opacity:.7}),i=new THREE.Line(t,n);this.NV.pm=i,this.scene.add(i);var o=new THREE.BufferGeometry,a=this.NV.n*this.NV.n;this.NV.lv=new Float32Array(3*a),o.addAttribute("position",new THREE.BufferAttribute(this.NV.lv,3).setDynamic(!0));var r=new THREE.LineBasicMaterial({color:10092509,blending:THREE.AdditiveBlending,transparent:!0,opacity:.3,lineWidth:1}),s=new THREE.LineSegments(o,r);this.NV.lm=s,this.scene.add(s),this.loopName()}},{key:"loopName",value:function(){this.NV.t<=0?new s.default.Tween(this.NV).to({t:1},4e3).delay(1e3).easing(s.default.Easing.Quadratic.Out).onComplete(this.loopName.bind(this)).start():this.NV.t>=1&&new s.default.Tween(this.NV).to({t:0},4e3).delay(1e3).easing(s.default.Easing.Quadratic.Out).onComplete(this.loopName.bind(this)).start()}},{key:"onWindowResize",value:function(){this.w=window.innerWidth-2*this.offset,this.h=window.innerHeight-2*this.offset,this.renderer.setSize(this.w,this.h),this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix()}},{key:"onMouseClick",value:function(t){for(var e=0;e<this.dao.getLength();e++){var n=this.dao.data[e];1==n.isHover&&(window.location.href=n.url)}}},{key:"onMouseMove",value:function(t){t.preventDefault(),this.mouse.x=(t.clientX-this.offset)/this.w*2-1,this.mouse.y=2*-((t.clientY-this.offset)/this.h)+1,this.raycaster.setFromCamera(this.mouse,this.camera);var e=this.raycaster.intersectObjects(this.dao.getAll());e.length>0?this.updateMaterial(e[0].object):this.resetMaterial()}},{key:"resetMaterial",value:function(){for(var t=0;t<this.dao.getLength();t++){var e=this.dao.getByIndex(t),n=this.dao.data[t];1==n.isHover&&(e.material.opacity=.5,e.material.needsUpdate=!0,n.isHover=!1)}}},{key:"updateMaterial",value:function(t){for(var e=this.dao.findObj(t),n=0;n<this.dao.getLength();n++){var i=this.dao.getByIndex(n),o=this.dao.data[n];e==n?(o.isHover=!0,i.material.opacity=1,i.material.needsUpdate=!0):(o.isHover=!1,i.material.opacity=.5,i.material.needsUpdate=!0)}}},{key:"updateName",value:function(){for(var t=0,e=0,n=0;n<this.NV.n;n++){this.NV.pv[3*n]=this.NV.alph[n].x*this.NV.t+this.NV.kanji[n].x*(1-this.NV.t),this.NV.pv[3*n+1]=this.NV.alph[n].y*this.NV.t+this.NV.kanji[n].y*(1-this.NV.t),this.NV.pv[3*n+2]=this.NV.alph[n].z*this.NV.t+this.NV.kanji[n].z*(1-this.NV.t);for(var i=n+1;i<this.NV.n;i++){var o=this.NV.pv[3*n]-this.NV.pv[3*i],a=this.NV.pv[3*n+1]-this.NV.pv[3*i+1],r=this.NV.pv[3*n+2]-this.NV.pv[3*i+2],s=Math.sqrt(o*o+a*a+r*r);s<3&&(this.NV.lv[t++]=this.NV.pv[3*n],this.NV.lv[t++]=this.NV.pv[3*n+1],this.NV.lv[t++]=this.NV.pv[3*n+2],this.NV.lv[t++]=this.NV.pv[3*i],this.NV.lv[t++]=this.NV.pv[3*i+1],this.NV.lv[t++]=this.NV.pv[3*i+2],e++)}}this.NV.lm.geometry.setDrawRange(0,2*e),this.NV.lm.geometry.attributes.position.needsUpdate=!0,this.NV.pm.geometry.attributes.position.needsUpdate=!0}},{key:"updateLines",value:function(){for(var t=this.lines.children,e=0;e<t.length-2;e++)t[e].geometry.vertices[1]=this.dao.getByIndex(e).position,t[e].geometry.verticesNeedUpdate=!0}},{key:"reset",value:function(){for(var t=this.dao.getActiveIndex(),e=0;e<t.length;e++){var n=this.dao.getByIndex(t[e]),i=this.dao.data[t[e]].start;new s.default.Tween(n.position).to({x:i.x,y:i.y,z:i.z},1900).easing(s.default.Easing.Exponential.InOut).start()}this.dao.reset()}},{key:"fetchAllPages",value:function(){this.reset();var t=this.dao.getAllPages(!0);this.alignCamera(),this.alignPages(t)}},{key:"fetchPagesByCategory",value:function(t){this.reset();var e=this.dao.getPagesByCategory(t,!0);this.alignCamera(),this.alignPages(e)}},{key:"fetchAllPosts",value:function(){this.reset();var t=this.dao.getAllPosts(!0);this.alignCamera(),this.alignPages(t)}},{key:"fetchPostsByMonth",value:function(t,e){this.reset();var n=this.dao.getPostsByMonth(t,e,!0);this.alignCamera(),this.alignPosts(n)}},{key:"fetchPostsByYear",value:function(t){this.reset();var e=this.dao.getPostsByYear(t,!0);this.alignCamera(),this.alignPosts(e)}},{key:"alignCamera",value:function(){new s.default.Tween(this.camera.position).to({x:0,y:0,z:200},2e3).easing(s.default.Easing.Exponential.InOut).start(),new s.default.Tween(this.camera.up).to({x:0,y:1,z:0},2e3).easing(s.default.Easing.Exponential.InOut).start()}},{key:"alignPosts",value:function(t){for(var e=0;e<t.length;e++){var n=void 0,i=void 0,o=void 0;n=0,i=e%5*-14+20,o=Math.floor(e/5)*-20+80,new s.default.Tween(t[e].position).to({x:n,y:i,z:o},2e3).delay(1e3*Math.random()).easing(s.default.Easing.Exponential.InOut).start()}}},{key:"alignPages",value:function(t){for(var e=0;e<t.length;e++){var n=void 0,i=void 0,o=void 0;n=e%9%3*16-16,i=Math.floor(e%9/3)*-20+20,o=Math.floor(e/9)*-20+80,new s.default.Tween(t[e].position).to({x:n,y:i,z:o},2e3).delay(1e3*Math.random()).easing(s.default.Easing.Exponential.InOut).start()}}}]),t}();n.default=f}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./NodeDAO":4,"./libs/TrackballControls":6,"tween.js":2}],6:[function(t,e,n){"use strict";THREE.TrackballControls=function(t,e){function n(t){d.enabled!==!1&&(window.removeEventListener("keydown",n),m=g,g===f.NONE&&(t.keyCode!==d.keys[f.ROTATE]||d.noRotate?t.keyCode!==d.keys[f.ZOOM]||d.noZoom?t.keyCode!==d.keys[f.PAN]||d.noPan||(g=f.PAN):g=f.ZOOM:g=f.ROTATE))}function i(t){d.enabled!==!1&&(g=m,window.addEventListener("keydown",n,!1))}function o(t){d.enabled!==!1&&(t.preventDefault(),t.stopPropagation(),g===f.NONE&&(g=t.button),g!==f.ROTATE||d.noRotate?g!==f.ZOOM||d.noZoom?g!==f.PAN||d.noPan||(A.copy(C(t.pageX,t.pageY)),P.copy(A)):(M.copy(C(t.pageX,t.pageY)),N.copy(M)):(w.copy(S(t.pageX,t.pageY)),E.copy(w)),document.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",r,!1),d.dispatchEvent(k))}function a(t){d.enabled!==!1&&(t.preventDefault(),t.stopPropagation(),g!==f.ROTATE||d.noRotate?g!==f.ZOOM||d.noZoom?g!==f.PAN||d.noPan||P.copy(C(t.pageX,t.pageY)):N.copy(C(t.pageX,t.pageY)):(E.copy(w),w.copy(S(t.pageX,t.pageY))))}function r(t){d.enabled!==!1&&(t.preventDefault(),t.stopPropagation(),g=f.NONE,document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r),d.dispatchEvent(H))}function s(t){d.enabled!==!1&&(t.preventDefault(),t.stopPropagation(),M.y-=.01*t.deltaY,d.dispatchEvent(k),d.dispatchEvent(H))}function u(t){if(d.enabled!==!1){switch(t.touches.length){case 1:g=f.TOUCH_ROTATE,w.copy(S(t.touches[0].pageX,t.touches[0].pageY)),E.copy(w);break;default:g=f.TOUCH_ZOOM_PAN;var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY;O=R=Math.sqrt(e*e+n*n);var i=(t.touches[0].pageX+t.touches[1].pageX)/2,o=(t.touches[0].pageY+t.touches[1].pageY)/2;A.copy(C(i,o)),P.copy(A)}d.dispatchEvent(k)}}function c(t){if(d.enabled!==!1)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:E.copy(w),w.copy(S(t.touches[0].pageX,t.touches[0].pageY));break;default:var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY;O=Math.sqrt(e*e+n*n);var i=(t.touches[0].pageX+t.touches[1].pageX)/2,o=(t.touches[0].pageY+t.touches[1].pageY)/2;P.copy(C(i,o))}}function h(t){if(d.enabled!==!1){switch(t.touches.length){case 0:g=f.NONE;break;case 1:g=f.TOUCH_ROTATE,w.copy(S(t.touches[0].pageX,t.touches[0].pageY)),E.copy(w)}d.dispatchEvent(H)}}function l(t){t.preventDefault()}var d=this,f={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=void 0!==e?e:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var p=1e-6,v=new THREE.Vector3,g=f.NONE,m=f.NONE,y=new THREE.Vector3,E=new THREE.Vector2,w=new THREE.Vector2,T=new THREE.Vector3,b=0,M=new THREE.Vector2,N=new THREE.Vector2,R=0,O=0,A=new THREE.Vector2,P=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var V={type:"change"},k={type:"start"},H={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}},this.handleEvent=function(t){"function"==typeof this[t.type]&&this[t.type](t)};var C=function(){var t=new THREE.Vector2;return function(e,n){return t.set((e-d.screen.left)/d.screen.width,(n-d.screen.top)/d.screen.height),t}}(),S=function(){var t=new THREE.Vector2;return function(e,n){return t.set((e-.5*d.screen.width-d.screen.left)/(.5*d.screen.width),(d.screen.height+2*(d.screen.top-n))/d.screen.width),t}}();this.rotateCamera=function(){var t,e=new THREE.Vector3,n=new THREE.Quaternion,i=new THREE.Vector3,o=new THREE.Vector3,a=new THREE.Vector3,r=new THREE.Vector3;return function(){r.set(w.x-E.x,w.y-E.y,0),t=r.length(),t?(y.copy(d.object.position).sub(d.target),i.copy(y).normalize(),o.copy(d.object.up).normalize(),a.crossVectors(o,i).normalize(),o.setLength(w.y-E.y),a.setLength(w.x-E.x),r.copy(o.add(a)),e.crossVectors(r,y).normalize(),t*=d.rotateSpeed,n.setFromAxisAngle(e,t),y.applyQuaternion(n),d.object.up.applyQuaternion(n),T.copy(e),b=t):!d.staticMoving&&b&&(b*=Math.sqrt(1-d.dynamicDampingFactor),y.copy(d.object.position).sub(d.target),n.setFromAxisAngle(T,b),y.applyQuaternion(n),d.object.up.applyQuaternion(n)),E.copy(w)}}(),this.zoomCamera=function(){var t;g===f.TOUCH_ZOOM_PAN?(t=R/O,R=O,y.multiplyScalar(t)):(t=1+(N.y-M.y)*d.zoomSpeed,1!==t&&t>0&&y.multiplyScalar(t),d.staticMoving?M.copy(N):M.y+=(N.y-M.y)*this.dynamicDampingFactor)},this.panCamera=function(){var t=new THREE.Vector2,e=new THREE.Vector3,n=new THREE.Vector3;return function(){t.copy(P).sub(A),t.lengthSq()&&(t.multiplyScalar(y.length()*d.panSpeed),n.copy(y).cross(d.object.up).setLength(t.x),n.add(e.copy(d.object.up).setLength(t.y)),d.object.position.add(n),d.target.add(n),d.staticMoving?A.copy(P):A.add(t.subVectors(P,A).multiplyScalar(d.dynamicDampingFactor)))}}(),this.checkDistances=function(){d.noZoom&&d.noPan||(y.lengthSq()>d.maxDistance*d.maxDistance&&(d.object.position.addVectors(d.target,y.setLength(d.maxDistance)),M.copy(N)),y.lengthSq()<d.minDistance*d.minDistance&&(d.object.position.addVectors(d.target,y.setLength(d.minDistance)),M.copy(N)))},this.update=function(){y.subVectors(d.object.position,d.target),d.noRotate||d.rotateCamera(),d.noZoom||d.zoomCamera(),d.noPan||d.panCamera(),d.object.position.addVectors(d.target,y),d.checkDistances(),d.object.lookAt(d.target),v.distanceToSquared(d.object.position)>p&&(d.dispatchEvent(V),v.copy(d.object.position))},this.reset=function(){g=f.NONE,m=f.NONE,d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.up.copy(d.up0),y.subVectors(d.object.position,d.target),d.object.lookAt(d.target),d.dispatchEvent(V),v.copy(d.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",l,!1),this.domElement.removeEventListener("mousedown",o,!1),this.domElement.removeEventListener("wheel",s,!1),this.domElement.removeEventListener("touchstart",u,!1),this.domElement.removeEventListener("touchend",h,!1),this.domElement.removeEventListener("touchmove",c,!1),document.removeEventListener("mousemove",a,!1),document.removeEventListener("mouseup",r,!1),window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",i,!1)},this.domElement.addEventListener("contextmenu",l,!1),this.domElement.addEventListener("mousedown",o,!1),this.domElement.addEventListener("wheel",s,!1),
this.domElement.addEventListener("touchstart",u,!1),this.domElement.addEventListener("touchend",h,!1),this.domElement.addEventListener("touchmove",c,!1),window.addEventListener("keydown",n,!1),window.addEventListener("keyup",i,!1),this.handleResize(),this.update()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.TrackballControls.prototype.constructor=THREE.TrackballControls},{}]},{},[3]);