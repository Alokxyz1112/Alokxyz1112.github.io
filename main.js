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
  function link(cls,txt,href,blank,aria){var a=el('a',cls,txt);a.href=href;if(blank){a.target='_blank';a.rel='noopener'}if(aria)a.setAttribute('aria-label',aria);return a;}
  var ICON={mail:'<svg viewBox="0 0 24 24"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5zm2 .3v.2l7 4.9 7-4.9v-.2a.8.8 0 0 0-.5-.8h-13a.8.8 0 0 0-.5.8zm14 2.6-6.4 4.5a1 1 0 0 1-1.2 0L5 9.4v8.1c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5z"/></svg>',
    li:'<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v10.75H3zm6.5 0h3.8v1.5h.06c.53-1 1.83-1.75 3.44-1.75 3.68 0 4.2 2.2 4.2 5.06v5.94h-4v-5.2c0-1.3-.02-2.9-1.85-2.9-1.86 0-2.15 1.4-2.15 2.8v5.3h-4z"/></svg>',
    gh:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>'};
  function icons(box){ if(!box) return;
    if(S.email){var m=link('ico glass','', 'mailto:'+S.email,false,'Email '+S.email);m.innerHTML=ICON.mail;box.appendChild(m);}
    if(S.linkedin){var l=link('ico glass','',S.linkedin,true,'LinkedIn');l.innerHTML=ICON.li;box.appendChild(l);}
    if(S.github){var g=link('ico glass','',S.github,true,'GitHub');g.innerHTML=ICON.gh;box.appendChild(g);} }
  icons($('heroIcons')); icons($('footIcons'));
  document.querySelectorAll('[data-copy]').forEach(function(b){b.onclick=function(){copy(b.dataset.copy,b.dataset.label)}});

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
})();
