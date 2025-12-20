const CERTS_PER_PAGE = 4;

const certs = [
  {id:1,title:'CS50SQL',org:'Cambridge, Massachusetts',date:'2025-04-10',thumbnail:'images/certificates/cs50sql.png',link:'certificates/CS50SQL.pdf'},
  {id:2,title:'Forward Program',org:'McKinsey.org',date:'2024-12-17',thumbnail:'images/certificates/forward.png',link:'certificates/McKinsey-Forward.pdf'},
  {id:3,title:'CS50X',org:'Cambridge, Massachusetts',date:'2024-04-30',thumbnail:'images/certificates/cs50x.png',link:'certificates/CS50X.pdf'},
  {id:4,title:'CS50P',org:'Cambridge, Massachusetts',date:'2024-02-16',thumbnail:'images/certificates/cs50p.jpg',link:'certificates/CS50P.pdf'},
  {id:5,title:'Bachelor of Chemistry',org:'Kafrelsheikh University',date:'2024-07-30',thumbnail:'images/certificates/kfs-uni.png',link:'certificates/Bachelor-degree.pdf'}
];

certs.sort((a,b)=> new Date(b.date) - new Date(a.date));
let certPage = 1;
const certTotal = Math.ceil(certs.length / CERTS_PER_PAGE);

function renderCerts(){
  const list = document.getElementById('certificate-list');
  if(!list) return;
  list.innerHTML = '';
  const start = (certPage-1)*CERTS_PER_PAGE;
  const page = certs.slice(start, start+CERTS_PER_PAGE);
  page.forEach(c=>{
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      ${c.thumbnail ? `<img src="${c.thumbnail}" alt="${c.title}" class="thumb">` : ''}
      <div class="project-body">
        <h3>${c.title}</h3>
        <div class="post-date">${c.org} · ${c.date}</div>
        <p></p>
        <a href="${c.file || c.link}" class="btn" download>Download</a>
      </div>
    `;

    list.appendChild(card);
  });
  renderCertPagination();
}

function renderCertPagination(){
  const container = document.querySelector('.certificates .pagination');
  if(!container) return;
  container.innerHTML = '';
  for(let i=1;i<=certTotal;i++){
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i===certPage? ' active':'');
    btn.textContent = i;
    btn.addEventListener('click', ()=>{ certPage = i; renderCerts(); window.scrollTo({top:0,behavior:'smooth'}) });
    container.appendChild(btn);
  }
}

function initCertPagination(){
  // no-op
}

if(document.getElementById('certificate-list')){
  initCertPagination();
  renderCerts();
}
