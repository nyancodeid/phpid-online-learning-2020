parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
if(window.iframeURL=function(e){var t=e.split("/");return t[2].includes("youtu")?"https://youtube.com/embed/".concat(t[3]):t[2].includes("facebook")?"https://www.facebook.com/plugins/video.php?href=".concat(encodeURIComponent(e),"&show_text=false&width=734&height=400"):void 0},window.showModal=function(e){var t=document.querySelector("#modal-video"),o=document.querySelector("#modal-video .card iframe"),a=document.querySelector("#modal-video .card .card-body .card-actions a");o.setAttribute("src",iframeURL(e.dataset.video)),t.style.display="block",a.setAttribute("href",e.dataset.video)},window.closeModal=function(){var e=document.querySelector("#modal-video"),t=document.querySelector("#modal-video .card iframe");e.style="display:none;",t.setAttribute("src","")},"loading"in HTMLImageElement.prototype)if("IntersectionObserver"in window){var e=null;try{e=Macy({container:"#content-speaker",trueOrder:!1,waitForImages:!0,margin:20,columns:3,breakAt:{520:1,400:1}})}catch(n){console.debug(n)}var t=document.querySelector(".hero-image"),o=document.querySelectorAll("#content-speaker .card"),a=new IntersectionObserver(function(t,o){t.forEach(function(t){if(t.isIntersecting)if("hero-image"==t.target.classList)window.scrollTo({behavior:"smooth",top:0});else{var o=t.target,r=t.target.childNodes[0];r.src=r.dataset.src,o.classList.add("animate__animated"),o.classList.add("animate__zoomIn"),r.classList.remove("lazyload"),a.unobserve(o),e&&e.recalculate&&e.recalculate(!0)}})});a.observe(t),o.forEach(function(e){return a.observe(e)})}else{var r=document.querySelectorAll("img.lazyload");r.forEach(function(e){e.src=e.dataset.src})}else{var c=document.createElement("script");c.async=!0,c.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js",document.body.appendChild(c)}
},{}]},{},["epB2"], null)
//# sourceMappingURL=https://phpid-jakarta.github.io/phpid-online-learning-2020/main.2937395f.js.map