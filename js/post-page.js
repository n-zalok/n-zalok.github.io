function getQueryParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderPost(){
  const id = Number(getQueryParam('id'));
  const post = window._POSTS && window._POSTS.find(p=>p.id===id);
  if(!post){
    document.getElementById('post-article').innerHTML = '<p>Post not found.</p>';
    return;
  }
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = post.date;
  // preserve newlines
  const contentEl = document.getElementById('post-content');
  contentEl.innerHTML = post.content.replace(/\n/g, '<br>');

  const thumb = document.getElementById('post-thumb');
  if(post.thumbnail){
    thumb.src = post.thumbnail;
    thumb.alt = post.title;
    thumb.style.display = '';
  } else {
    thumb.style.display = 'none';
  }
}

if(document.getElementById('post-article')){
  renderPost();
}
