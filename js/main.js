// common scripts for footer year and placeholder social links
(function(){
  const year = new Date().getFullYear();
  ['year','year-about','year-projects','year-post','year-cert'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // Replace social link hrefs with values from a small config if provided
  const cfg = window.__SITE_CONFIG || {};
  const map = [
    ['github-link','github'],['linkedin-link','linkedin'],['wa-link','whatsapp'],
    ['github-link-about','github'],['linkedin-link-about','linkedin'],['wa-link-about','whatsapp'],
    ['github-link-projects','github'],['linkedin-link-projects','linkedin'],['wa-link-projects','whatsapp'],
    ['github-link-post','github'],['linkedin-link-post','linkedin'],['wa-link-post','whatsapp'],
    ['github-link-cert','github'],['linkedin-link-cert','linkedin'],['wa-link-cert','whatsapp']
  ];
  map.forEach(([id,key])=>{
    const a = document.getElementById(id);
    if(!a) return;
    if(cfg[key]) a.href = cfg[key];
  });
})();
