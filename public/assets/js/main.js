
// Mobile menu (if used)
const burger=document.querySelector('.burger');
const links=document.querySelector('.nav-links');
if(burger){burger.onclick=()=>links.classList.toggle('open');}
// Theme toggle
const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme=localStorage.getItem('theme')||(prefersDark?'dark':'light');
if(theme==='light')document.documentElement.classList.add('light');
window.toggleTheme=()=>{document.documentElement.classList.toggle('light');localStorage.setItem('theme',document.documentElement.classList.contains('light')?'light':'dark');};
// Affiliate disclosure banner
(function(){
 try{
   const KEY='mizfit_disclosure_ok';
   const el=document.getElementById('affiliateDisclosure');
   if(el && !localStorage.getItem(KEY)){ el.classList.add('show'); }
   const btn=document.getElementById('disclosureOk');
   if(btn){ btn.addEventListener('click',()=>{ localStorage.setItem(KEY,'1'); const el=document.getElementById('affiliateDisclosure'); if(el){el.remove();} }); }
 }catch(e){}
})();
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
