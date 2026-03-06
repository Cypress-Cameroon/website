// Simple HTML include loader for partials
(async function(){
  async function include(el){
    const path = el.getAttribute('data-include');
    if(!path) return;
    try {
      const res = await fetch(path);
      if(!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      el.outerHTML = html;
    } catch (err) {
      console.error('Include failed:', path, err);
    }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const nodes = Array.from(document.querySelectorAll('[data-include]'));
    nodes.forEach(n=> include(n));
  });
})();
