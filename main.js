(function(){
  var S = window.SITE || {}, $ = function(id){return document.getElementById(id)};
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function el(tag, cls, txt){var e=document.createElement(tag); if(cls)e.className=cls; if(txt!=null)e.textContent=txt; return e;}

  document.title = S.name || document.title;
  $('heroName').textContent = S.name || '';
  $('footName').textContent = S.name || '';
  $('yr').textContent = new Date().getFullYear();
  $('tagline').textContent = S.tagline || '';
  $('navLogo').textContent = S.initials || 'AY';

  // Avatar: photo if it loads, else monogram
  var av = $('avatar'); av.textContent = S.initials || 'AY';
  if (S.photo) { var img = new Image(); img.alt = S.name || '';
    img.onload = function(){ av.textContent=''; av.classList.add('photo'); av.appendChild(img);
      var n=$('navAv'); n.appendChild(img.cloneNode()); n.classList.add('on'); $('navLogo').style.display='none';
      var a=img.cloneNode(); a.loading='lazy'; $('aboutPic').appendChild(a); };
    img.onerror = function(){ $('aboutPic').classList.add('none'); $('aboutPic').parentNode.classList.add('nopic'); };
    img.src = S.photo; } else { $('aboutPic').classList.add('none'); $('aboutPic').parentNode.classList.add('nopic'); }

  var gh = $('ghBtn'); if (S.github) gh.href = S.github; else gh.remove();

  (S.about||[]).forEach(function(p){ $('aboutText').appendChild(el('p',null,p)); });

  (S.now||[]).forEach(function(n,i){ var li=el('li','glass reveal');
    li.appendChild(el('div','step','0'+(i+1))); li.appendChild(el('h3',null,n.title)); li.appendChild(el('p',null,n.text));
    $('timeline').appendChild(li); });

  (S.skills||[]).forEach(function(s){ $('skills').appendChild(el('li',null,s)); });

  (S.projects||[]).forEach(function(p){
    var c=el('article','proj glass reveal'+(p.featured?' featured':''));
    if(p.featured) c.appendChild(el('div','label','Featured'));
    c.appendChild(el('h3',null,p.name)); c.appendChild(el('p',null,p.text));
    var t=el('div','tags'); (p.tags||[]).forEach(function(x){t.appendChild(el('span',null,x))}); c.appendChild(t);
    var l=el('div','links');
    if(p.link){var a=el('a','btn magnetic','View on GitHub');a.href=p.link;a.target='_blank';a.rel='noopener';l.appendChild(a);}
    if(p.extraLink){var b=el('a','btn primary magnetic',p.extraLabel||'Open');b.href=p.extraLink;b.target='_blank';b.rel='noopener';l.appendChild(b);}
    c.appendChild(l); $('projects').appendChild(c);
  });

  // Contact buttons (hidden when empty)
  var toast=$('toast'), tt;
  function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('show')},2200);}
  function copy(text,label){
    var done=function(){showToast(label+' copied')};
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done,fallback);}else fallback();
    function fallback(){var ta=el('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){showToast('Could not copy')}ta.remove();}
  }
  var cb=$('contactBtns');
  if(S.email){var m=el('a','btn primary magnetic','Email me');m.href='mailto:'+S.email;cb.appendChild(m);
    var mc=el('button','btn magnetic','Copy email');mc.type='button';mc.onclick=function(){copy(S.email,'Email')};cb.appendChild(mc);}
  if(S.linkedin){var li=el('a','btn magnetic','LinkedIn');li.href=S.linkedin;li.target='_blank';li.rel='noopener';cb.appendChild(li);
    var lc=el('button','btn magnetic','Copy LinkedIn');lc.type='button';lc.onclick=function(){copy(S.linkedin,'LinkedIn link')};cb.appendChild(lc);}
  if(S.github){var g=el('a','btn magnetic','GitHub');g.href=S.github;g.target='_blank';g.rel='noopener';cb.appendChild(g);}
  if(!S.email&&!S.linkedin) $('contactText').textContent='You can find me and my code on GitHub.';

  // Typing headline
  var lines=S.typing&&S.typing.length?S.typing:[S.name||''], typed=$('typed');
  if(reduce){typed.textContent=lines[0];}
  else{var li2=0,ch=0,del=false;(function tick(){var w=lines[li2];
    typed.textContent=w.slice(0,ch);
    if(!del&&ch<w.length){ch++;setTimeout(tick,70);}
    else if(!del){del=true;setTimeout(tick,1700);}
    else if(ch>0){ch--;setTimeout(tick,35);}
    else{del=false;li2=(li2+1)%lines.length;setTimeout(tick,300);}})();}

  // Scroll reveal
  var rs=document.querySelectorAll('.reveal');
  if(reduce||!('IntersectionObserver' in window)) rs.forEach(function(r){r.classList.add('in')});
  else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    rs.forEach(function(r){io.observe(r)});}

  if(reduce||matchMedia('(hover: none)').matches) return;
  // Cursor glow
  var glow=document.querySelector('.glow');
  addEventListener('pointermove',function(e){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach(function(b){
    b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();
      b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.25)+'px,'+((e.clientY-r.top-r.height/2)*.35)+'px)';});
    b.addEventListener('pointerleave',function(){b.style.transform='';});
  });
  // Tilt cards
  document.querySelectorAll('.proj').forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.transform='rotateX('+((.5-y)*6)+'deg) rotateY('+((x-.5)*6)+'deg)';
      c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');});
    c.addEventListener('pointerleave',function(){c.style.transform='';});
  });
})();
