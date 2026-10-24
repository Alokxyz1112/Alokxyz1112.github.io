/* fx.js: 3D tilt, parallax depth and scroll depth. Shared by home and CV pages. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, touch=matchMedia('(hover: none)').matches;
  if(reduce) return;
  // Tilt (pointer devices only)
  if(!touch) document.querySelectorAll('.tilt,.proj,.skg,.timeline li,.grid2 .card').forEach(function(c){
    var max=c.classList.contains('avatar')?14:6;
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.transform='perspective(900px) rotateX('+((.5-y)*max)+'deg) rotateY('+((x-.5)*max)+'deg) translateZ(0)';
      c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');});
    c.addEventListener('pointerleave',function(){c.style.transform='';});
  });
  // Hero parallax layers
  var stage=document.getElementById('stage');
  if(stage && !touch){ var layers=stage.querySelectorAll('[data-depth]');
    addEventListener('pointermove',function(e){var dx=e.clientX/innerWidth-.5,dy=e.clientY/innerHeight-.5;
      layers.forEach(function(l){var d=+l.dataset.depth;l.style.translate=(dx*d)+'px '+(dy*d)+'px';});},{passive:true}); }
  // Scroll depth: sections ease in from slight depth
  var secs=document.querySelectorAll('.section'), tick=false;
  function onScroll(){tick=false;var vh=innerHeight;
    secs.forEach(function(s){var r=s.getBoundingClientRect(),p=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh));
      s.style.transform='perspective(1200px) translateZ('+(-Math.abs(p)*(touch?20:60))+'px) rotateX('+(p*(touch?0:4))+'deg)';});
    if(stage){var y=scrollY;stage.style.transform='translateY('+(y*.25)+'px) scale('+Math.max(.85,1-y/3000)+')';stage.style.opacity=Math.max(0,1-y/700);}
  }
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true}); onScroll();
})();
