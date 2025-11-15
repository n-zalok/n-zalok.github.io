const PROJECTS_PER_PAGE = 4;

const projects = [
  {id:1,title:'Chemical-Balancer',date:'2024-02-16',description:'Python program that takes imbalanced chemical equation as an input then outputs the balanced equation',thumbnail:'images/projects/chemical.jpg',link:'https://github.com/n-zalok/Chemical-Balancer'},
  {id:2,title:'Islam-web-Fatwas-Database',date:'2025-04-10',description:'Scraped religious rulings (fatwas) from Islam-web using BeautifulSoup and stored them in a structured SQLite database with search by subject',thumbnail:'images/projects/islamweb.jpg',link:'https://github.com/n-zalok/Islamweb-fatwas'},
  {id:3,title:'House-Prices',date:'2025-04-14',description:'Built a regression model using both linear and non-linear techniques to predict the final sale price',thumbnail:'images/projects/house.png',link:'https://www.kaggle.com/code/noorzalouk/house-prices-stacking-regressor'},
  {id:4,title:'Chess-Engine-with-Transformers',date:'2025-08-29',description:'Encoder-only transformer that takes current board as input then outputs next move',thumbnail:'images/projects/chess.jpg',link:'https://github.com/n-zalok/Chess-Engine-with-Transformers'},
  {id:5,title:'Math-Classifier',date:'2025-10-10',description:'Multilabel-Classifier DistilBERT model fine-tuned on Wikipedia math articles from The Mathematics Portal',thumbnail:'images/projects/math.jpg',link:'https://github.com/n-zalok/Math-Classifier'}
];

projects.sort((a,b)=> new Date(b.date) - new Date(a.date));
let projPage = 1;
const projTotal = Math.ceil(projects.length / PROJECTS_PER_PAGE);

function renderProjects(){
  const list = document.getElementById('project-list');
  if(!list) return;
  list.innerHTML = '';
  const start = (projPage-1)*PROJECTS_PER_PAGE;
  const page = projects.slice(start, start+PROJECTS_PER_PAGE);
  page.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      ${p.thumbnail ? `<img src="${p.thumbnail}" alt="${p.title}" class="thumb">` : ''}
      <div class="project-body">
        <h3>${p.title}</h3>
        <div class="post-date">${p.date}</div>
        <p>${p.description}</p>
        <a href="${p.link}" class="btn" target="_blank" rel="noopener">View</a>
      </div>
    `;

    card.addEventListener('click', (e)=>{
      if(e.target.tagName.toLowerCase() === 'a') return;
      if(p.link){ window.open(p.link, '_blank', 'noopener'); }
    });

    list.appendChild(card);
  });

  renderProjPagination();
}

function renderProjPagination(){
  const container = document.querySelector('.projects .pagination');
  if(!container) return;
  container.innerHTML = '';
  for(let i=1;i<=projTotal;i++){
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i===projPage? ' active':'');
    btn.textContent = i;
    btn.addEventListener('click', ()=>{ projPage = i; renderProjects(); window.scrollTo({top:0,behavior:'smooth'}) });
    container.appendChild(btn);
  }
}

function initProjPagination(){
  // no-op, buttons rendered by renderProjPagination
}

if(document.getElementById('project-list')){
  initProjPagination();
  renderProjects();
}
