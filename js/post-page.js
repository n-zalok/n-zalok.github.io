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
  document.getElementById('post-content').textContent = post.content;
}

if(document.getElementById('post-article')){
  renderPost();
}
