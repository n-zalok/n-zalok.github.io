const POSTS_PER_PAGE = 4;

// Sample posts data. Replace or extend with your own posts (max 50 words in preview will be enforced).
const posts = [
  {id:1,title:'Welcome to my portfolio',date:'2025-11-11',content:`Here I would share my thoughts, projects and achievements. I delayed creating this portofolio for a long time because I was using Linkedin as my portofolio but thanks to their random account restrictions I finally created it.`}
];

// sort posts by date descending
posts.sort((a,b)=> new Date(b.date) - new Date(a.date));

let currentPage = 1;
const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

function formatPreview(text, maxWords = 50) {
  const words = text.trim().split(/\s+/);
  const isLong = words.length > maxWords;
  const preview = isLong ? words.slice(0, maxWords).join(' ') + '...' : text;
  return { preview, isLong };
}

function renderPosts() {
  const list = document.getElementById('posts-list');
  list.innerHTML = '';
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  pagePosts.forEach(p => {
    const { preview, isLong } = formatPreview(p.content);

    const el = document.createElement('div');
    el.className = 'post-card';

    // build post HTML
    el.innerHTML = `
      <h3>${p.title}</h3>
      <div class="post-date">${p.date}</div>
      <p>${preview}${isLong ? ` <a class="read-more" href="post.html?id=${p.id}">Read more</a>` : ''}</p>
    `;

    // Make the whole card clickable (optional)
    el.addEventListener('click', e => {
      // Don't trigger if clicking the link itself
      if (e.target.tagName.toLowerCase() === 'a') return;
      window.location.href = `post.html?id=${p.id}`;
    });

    list.appendChild(el);
  });

  renderPagination();
}

function renderPagination(){
  const container = document.querySelector('#posts-section .pagination');
  if(!container) return;
  container.innerHTML = '';
  for(let i=1;i<=totalPages;i++){
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i===currentPage? ' active':'');
    btn.textContent = i;
    btn.addEventListener('click', ()=>{ currentPage = i; renderPosts(); window.scrollTo({top:0,behavior:'smooth'}) });
    container.appendChild(btn);
  }
}

// expose posts data for post page
window._POSTS = posts;

if(document.getElementById('posts-list')){
  renderPosts();
}
