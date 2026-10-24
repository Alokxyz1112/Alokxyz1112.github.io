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
      var n=$('navAv'); var ni=document.createElement('img');ni.src='assets/avatar-small.jpg?v=1';ni.alt='';n.appendChild(ni); n.classList.add('on'); $('navLogo').style.display='none';
      var a=img.cloneNode(); a.loading='lazy'; $('aboutPic').appendChild(a); };
    img.onerror = function(){ $('aboutPic').classList.add('none'); $('aboutPic').parentNode.classList.add('nopic'); };
    img.src = S.photo; } else { $('aboutPic').classList.add('none'); $('aboutPic').parentNode.classList.add('nopic'); }

  var gh = $('ghBtn'); if (S.github) gh.href = S.github; else gh.remove();

  (S.about||[]).forEach(function(p){ $('aboutText').appendChild(el('p',null,p)); });

  (S.now||[]).forEach(function(n,i){ var li=el('li','glass reveal');
    li.appendChild(el('div','step','0'+(i+1))); li.appendChild(el('h3',null,n.title)); li.appendChild(el('p',null,n.text));
    $('timeline').appendChild(li); });

  var TOOL={"Flutter": {"p": "<path d=\"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z\"/>", "c": "#54C5F8", "g": "84,197,248"}, "Dart": {"p": "<path d=\"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z\"/>", "c": "#2CB7F6", "g": "0,180,171"}, "Python": {"p": "<path d=\"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z\"/>", "c": "#FFD43B", "g": "255,212,59"}, "JavaScript": {"p": "<path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"/>", "c": "#F7DF1E", "g": "247,223,30"}, "Android": {"p": "<path d=\"M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z\"/>", "c": "#3DDC84", "g": "61,220,132"}, "Git": {"p": "<path d=\"M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z\"/>", "c": "#F05032", "g": "240,80,50"}};
  (S.skills||[]).forEach(function(s){var t=TOOL[s],li=el('li','tool glass');if(t){li.style.setProperty('--tc',t.c);li.style.setProperty('--tg',t.g);li.innerHTML='<span class="tico"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'+t.p+'</svg></span>'}li.appendChild(el('span','tname',s));$('skills').appendChild(li);});

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
  else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0,rootMargin:"0px 0px -40px 0px"});
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
