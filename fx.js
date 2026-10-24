/* fx.js: 3D tilt, parallax depth and scroll depth. Shared by home and CV pages. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, touch=matchMedia('(hover: none)').matches;
  // Active nav state (scrollspy), runs regardless of motion settings
  (function(){var links=[].slice.call(document.querySelectorAll('header.nav a[href^="#"]')).filter(function(a){return a.getAttribute('href').length>1&&document.querySelector(a.getAttribute('href'))});
    if(!links.length) return; function upd(){var y=innerHeight*.35,cur=null;links.forEach(function(a){var t=document.querySelector(a.getAttribute('href')).getBoundingClientRect();if(t.top<=y&&t.bottom>y)cur=a;});
      links.forEach(function(a){var on=a===cur;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});}
    addEventListener('scroll',upd,{passive:true});upd();})();
  if(reduce){window.fxTilt=function(){};return;}
  // Shared tilt + sheen utility (pointer devices only). window.fxTilt(root) binds any new cards.
  var SEL='.tilt,.bt,.ctile,.licard,.tool,.proj,.card,.skg,.timeline li',MAX=6,PERS=900;
  function bind(c){ if(c.__tilt||c.closest('.nav')) return; c.__tilt=1; c.classList.add('fxt');
    var max=c.classList.contains('avatar')?14:MAX, sh=document.createElement('span'); sh.className='fxsheen'; sh.setAttribute('aria-hidden','true'); c.appendChild(sh);
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.transform='perspective('+PERS+'px) rotateX('+((.5-y)*max)+'deg) rotateY('+((x-.5)*max)+'deg) translateZ(0)';
      c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.classList.add('fxon');});
    c.addEventListener('pointerleave',function(){c.style.transform='';c.classList.remove('fxon');});
  }
  window.fxTilt=function(root){ if(touch) return; (root||document).querySelectorAll(SEL).forEach(bind); };
  window.fxTilt();
  if(!touch) new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(function(n){if(n.nodeType!==1)return; if(n.matches&&n.matches(SEL))bind(n); window.fxTilt(n);});});}).observe(document.body,{childList:true,subtree:true});
  // Hero parallax layers
  var stage=document.getElementById('stage');
  // Scroll depth: sections ease in from slight depth
  var secs=document.querySelectorAll('.section'), tick=false;
  function onScroll(){tick=false;var vh=innerHeight;
    secs.forEach(function(s){var r=s.getBoundingClientRect(),p=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh));
      s.style.transform='perspective(1200px) translateZ('+(-Math.abs(p)*(touch?8:20))+'px) rotateX('+(p*(touch?0:1.5))+'deg)';});
    if(stage){var y=scrollY;stage.style.transform='translateY('+(y*.25)+'px) scale('+Math.max(.85,1-y/3000)+')';stage.style.opacity=Math.max(0,1-y/700);}
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true}); onScroll();
})();
