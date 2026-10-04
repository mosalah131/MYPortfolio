const menu=document.getElementById('menuToggle'),nav=document.getElementById('nav'),theme=document.getElementById('themeToggle');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
theme.addEventListener('click',()=>{document.body.classList.toggle('light');theme.textContent=document.body.classList.contains('light')?'☀':'☾';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));