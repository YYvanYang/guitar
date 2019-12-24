!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t,n){},function(e,t,n){class o{constructor(e,t){this.context=e,this.buffer=t}setup(){this.gainNode=this.context.createGain(),this.source=this.context.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.gainNode.gain.setValueAtTime(.8,this.context.currentTime)}play(){this.setup(),this.source.start(this.context.currentTime)}stop(){var e=this.context.currentTime+.5;this.gainNode.gain.exponentialRampToValueAtTime(.001,e),this.source.stop(e)}}let c=document.querySelector(".progress"),p=0;let r=null,d=0,a=!1;function u(){let e=parseInt(this.dataset.note)+d;r=new o(f,s.getSound(e)),r.play()}function i(){r.stop()}let f=new(window.AudioContext||window.webkitAudioContext),s=new class{constructor(e,t){this.context=e,this.urls=t,this.buffer=[]}loadSound(e,t){let o=new XMLHttpRequest,r=n(3)("./"+e);o.open("get",r,!0),o.responseType="arraybuffer";let d=this;o.onload=function(){d.context.decodeAudioData(o.response,(function(e){var n;d.buffer[t]=e,n=d.urls.length,c.style.width=++p/n*100+"%",t==d.urls.length-1&&d.loaded()}))},o.send()}getBuffer(){this.urls.forEach((e,t)=>{this.loadSound(e,t)})}loaded(){document.querySelector(".loading").style.opacity=0,document.querySelector(".loading").style.height=0,document.querySelector(".notes").style.height="auto",document.querySelector(".notes").style.opacity=1,a=!0}getSound(e){return this.buffer[e]}}(f,["G4.mp3","A4.mp3","C5.mp3","D5.mp3","E5.mp3","G5.mp3","A5.mp3","C6.mp3","D6.mp3","D#6.mp3","E6.mp3","G6.mp3","A6.mp3","C7.mp3","D7.mp3","d_G4.mp3","d_A4.mp3","d_C5.mp3","d_D5.mp3","d_E5.mp3","d_G5.mp3","d_A5.mp3","d_C6.mp3","d_D6.mp3","d_D#6.mp3","d_E6.mp3","d_G6.mp3","d_A6.mp3","d_C7.mp3","d_D7.mp3"]);s.getBuffer();document.querySelectorAll(".notes .note").forEach(e=>{e.addEventListener("mouseenter",u.bind(e)),e.addEventListener("mouseleave",i)});let m=document.querySelector("audio"),l=document.querySelector(".play"),b=document.querySelector(".rewind"),y=document.querySelector(".circle");function x(){l.querySelector(".pause-icon").style.display="block",l.querySelector(".play-icon").style.display="none"}function h(){l.querySelector(".pause-icon").style.display="none",l.querySelector(".play-icon").style.display="block"}m.addEventListener("pause",h),m.addEventListener("play",x),l.addEventListener("click",()=>{m.paused?(m.play(),x()):(m.pause(),h())}),b.addEventListener("click",()=>{m.currentTime=0}),y.addEventListener("click",()=>{d=0==d?15:0,y.classList.toggle("rock")}),m.addEventListener("ended",()=>{h()})},function(e,t,n){var o={"./A4.mp3":4,"./A5.mp3":5,"./A6.mp3":6,"./C5.mp3":7,"./C6.mp3":8,"./C7.mp3":9,"./D#6.mp3":10,"./D5.mp3":11,"./D6.mp3":12,"./D7.mp3":13,"./E5.mp3":14,"./E6.mp3":15,"./G4.mp3":16,"./G5.mp3":17,"./G6.mp3":18,"./d_A4.mp3":19,"./d_A5.mp3":20,"./d_A6.mp3":21,"./d_C5.mp3":22,"./d_C6.mp3":23,"./d_C7.mp3":24,"./d_D#6.mp3":25,"./d_D5.mp3":26,"./d_D6.mp3":27,"./d_D7.mp3":28,"./d_E5.mp3":29,"./d_E6.mp3":30,"./d_G4.mp3":31,"./d_G5.mp3":32,"./d_G6.mp3":33};function c(e){var t=p(e);return n(t)}function p(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}c.keys=function(){return Object.keys(o)},c.resolve=p,e.exports=c,c.id=3},function(e,t,n){e.exports=n.p+"e6510aa4576c0ea7931563c89a35e49e.mp3"},function(e,t,n){e.exports=n.p+"a035d1dfa518583959ab323000ddeec3.mp3"},function(e,t,n){e.exports=n.p+"93630737bbdf93ef1cec483cf50c8914.mp3"},function(e,t,n){e.exports=n.p+"9129319d9ccebd9066bf3e90418ced7e.mp3"},function(e,t,n){e.exports=n.p+"8d3649adf883ad55ee5d60922e23be86.mp3"},function(e,t,n){e.exports=n.p+"f428fc5263ff3db68b6f68aefa03c1b8.mp3"},function(e,t,n){e.exports=n.p+"52927227e0a8f7eacd05661247bf8e9e.mp3"},function(e,t,n){e.exports=n.p+"1d815f287cbe6a702f9255768e8f6185.mp3"},function(e,t,n){e.exports=n.p+"795a56cc39ea6e2f2a899dcc2cbc99b7.mp3"},function(e,t,n){e.exports=n.p+"e3fa8eeda10762c7ffb7218e1a405a37.mp3"},function(e,t,n){e.exports=n.p+"59fee939c9f9a9151b6aedef9cc07470.mp3"},function(e,t,n){e.exports=n.p+"1dffabc69dc7e684ef76853c226dd3c5.mp3"},function(e,t,n){e.exports=n.p+"c3e79b6f7ef847f034ffa1f0a756e552.mp3"},function(e,t,n){e.exports=n.p+"5357303d41d668da95979e190b20e54a.mp3"},function(e,t,n){e.exports=n.p+"383ecbfe6a85ddce48dada87d65d25be.mp3"},function(e,t,n){e.exports=n.p+"0cdb7474205a1115efc31765baa1b329.mp3"},function(e,t,n){e.exports=n.p+"f365f1a6416f0ebf645900b23deb4ac1.mp3"},function(e,t,n){e.exports=n.p+"02a89667c3f683d100499c67bbea2a86.mp3"},function(e,t,n){e.exports=n.p+"821b9351e2caf289e3c0675d0f0b3147.mp3"},function(e,t,n){e.exports=n.p+"177620ddca04e9483a6075566fa8bfb7.mp3"},function(e,t,n){e.exports=n.p+"700400d8486c6a438362e5da593b3a90.mp3"},function(e,t,n){e.exports=n.p+"e9c8dad34aeeb15349511fadf1922af0.mp3"},function(e,t,n){e.exports=n.p+"a3169a4e3556f1b11d0c00a5b37832c9.mp3"},function(e,t,n){e.exports=n.p+"eaec0cdc9cd12cac0ebfc81cba48b779.mp3"},function(e,t,n){e.exports=n.p+"0dcd6236b5b8878069da2aab95769f7a.mp3"},function(e,t,n){e.exports=n.p+"8e0d699ee85f6dd5be4ba7410b4ae7b0.mp3"},function(e,t,n){e.exports=n.p+"24c670974306761d2baa313dc5bf005a.mp3"},function(e,t,n){e.exports=n.p+"57e8449d914ea212755529732e30a787.mp3"},function(e,t,n){e.exports=n.p+"1f44ac7416bc818ace832460c7acfb79.mp3"},function(e,t,n){e.exports=n.p+"249c8feb1ddee64461245779ed45c317.mp3"}]);
//# sourceMappingURL=app.bundle.js.map