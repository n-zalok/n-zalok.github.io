const POSTS_PER_PAGE = 4;

// Sample posts data. Replace or extend with your own posts (max 50 words in preview will be enforced).
const posts = [
  {id:1,title:'Welcome to my portfolio',date:'2025-11-11',content:`Here I would share my thoughts, projects and achievements. I delayed creating this portofolio for a long time because I was using Linkedin as my portofolio but thanks to their random account restrictions I finally created it.`},
  {id:2,title:'Introduction to Algorithms',date:'2025-11-15',content:`Started learning more thoroughly about data structures and algorithms. Currently reading Introduction to Algorithms, third edition.<br></br>Created a <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C">repo</a> where I would implement concepts in the book in C. Hope you find it helpful.`},
  {id:3,title:'Introduction to Algorithms: Foundations',date:'2025-11-23',content:`Finished the first chapter in the book in which I learned:<br></br>1- Insertion sort<br></br>2- Merge sort<br></br>3- Find maximum subarray problem<br></br>4- Matrix multiplication<br></br>5- Hiring problem<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Foundations">here</a> check it out`},
  {id:4,title:'Introduction to Algorithms: Sorting and Order Statistics',date:'2025-12-07',content:`Finished the second chapter in the book in which I learned:<br></br>1- Quick sort<br></br>2- Heap<br></br>3- Max priority queue<br></br>4- Counting sort<br></br>5- Radix sort<br></br>6- Bucket sort<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Sorting%20and%20Order%20Statistics">here</a> check it out`},
  {id:5,title:'Introduction to Algorithms: Data Structures',date:'2025-12-20',content:`Finished the third chapter in the book in which I learned:<br></br>1- Stack<br></br>2- Queue<br></br>3- Linked list<br></br>4- Direct address table<br></br>5- Hash table<br></br>6- Binary search tree<br></br>7- Red-Black search tree<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Data%20Structures">here</a> check it out`},
  {id:6,title:'Introduction to Algorithms: Advanced Designs and Analysis Techniques',date:'2026-01-04',content:`Finished the fourth chapter in the book in which I learned:<br></br>1- Dynamic Programming<br></br>2- Greedy Algorithms<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Advanced%20Designs%20and%20Analysis%20Techniques">here</a> check it out`},
  {id:7,title:'Introduction to Algorithms: Advanced Data Structures',date:'2026-01-11',content:`Finished the fifth chapter in the book in which I learned:<br></br>1- Disjoint sets<br></br>2- Connected components<br></br>3- Union by rank<br></br>4- Path compression<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Advanced%20Data%20Structures/Disjoint-sets">here</a> check it out`},
  {id:8,title:'Introduction to Algorithms: Graph Algorithms',date:'2026-01-29',content:`Finished the sixth chapter in the book in which I learned:<br></br>1- Breadth first search<br></br>2- Depth first search<br></br>3- Topological sort<br></br>4- Strongly connected components<br></br>5- Minimum spanning trees<br></br>6- Single source shortest paths<br></br>7- All pairs shortest paths<br></br>8- Maximum flow<br></br>I implemented all these algorithms in C <a href="https://github.com/n-zalok/Introduction-to-Algorithms-in-C/tree/main/Graph%20Algorithms">here</a> check it out`},
  {id:9,title:'Building ML Powered Apps',date:'2026-02-13',content:`I read the book "Building Machine Learning Powered Applications: Going from Idea to Product" which wraps the whole end-to-end ML process. The book explains:<br></br>1- Defining and framing the problem<br></br>2- Gathering and exploring the data<br></br>3- Training and evaluating the model<br></br>4- Debuging and testing<br></br>5- Comparing different approaches<br></br>6- Deploying and monitoring the model<br></br>I will apply these concepts in an end-to-end ML project in this <a href="https://github.com/n-zalok/Python-Editor">repo</a>. Hope you find it helpful.`},
  {id:10,title:'Building ML Powered Apps: Idea',date:'2026-04-02',content:`The book created a model (ML-editor) that gives recommendations to write better questions.<br></br>I will create a model (python-editor) that helps you write better python code.<br></br>What criteria would I use to defferintiate good code from bad code?<br></br>Style so model should help you write more elegant understandable code.<br></br>The final model should output a quality score of the code and give actioable steps to make it better.<br></br>Project's <a href="https://github.com/n-zalok/Python-Editor">repo</a>.`},
  {id:11,title:'Building ML Powered Apps: App',date:'2026-05-19',content:`Just finished building an end-to-end ML-powered Python code review system focused on code readability and style recommendations.<br></br>The project started with a simple question:<br></br>Can we train a model to identify patterns behind well-written Python code and generate actionable suggestions for improvement?<br></br>Some of the things I explored while building it:<br></br>1- Custom target generation using Pylint scores</br></br>2- AST-based feature engineering</br></br>3- CodeBERT embeddings experimentation</br></br>4- SHAP-based recommendation generation</br></br>5- Leakage-aware dataset splitting</br></br>6- ML monitoring & drift detection with Evidently</br></br>7- Automated retraining workflows using MLflow</br></br>8- FastAPI + React deployment with Docker</br></br>One of the most interesting tradeoffs was balancing model quality with inference speed. After multiple iterations, I replaced embedding-heavy models with engineered structural features, making inference ~12x faster than running Pylint directly while maintaining competitive performance.<br></br>This project taught me a lot about building ML systems beyond just training models — especially monitoring, deployment, and lifecycle management.<br></br><a href="https://github.com/n-zalok/Python-Editor">GitHub repo</a><br></br>I will make a video breaking down the project in the future.`},
  {id:12,title:'Building ML Powered Apps: Video',date:'2026-06-13',content:`I made the video in which I walk through my end-to-end Machine Learning project: an ML-powered Python Code Review System.<br></br>The system analyzes Python code and generates style and readability recommendations using machine learning and AST-based feature engineering.<br></br>Topics covered:<br></br>1- Project motivation and problem definition<br></br>2- Data collection and preprocessing<br></br>3- Feature engineering using Python AST<br></br>4- Model training and evaluation<br></br>5- Explainability and interpretation<br></br>6- Monitoring and retraining workflow<br></br>7- Deployment and live demo<br></br>Link to the <a href="https://huggingface.co/spaces/noor-zalouk/Python-Editor">Demo</a><br></br>Link to the <a href="https://www.youtube.com/watch?v=qp6-sYvMRIM">Video</a>`},
];

// sort posts by date descending
posts.sort((a,b)=> new Date(b.date) - new Date(a.date));

let currentPage = 1;
const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

function formatPreview(text, maxWords = 50) {
  const words = text.trim().split(/\s+/);
  const isLong = words.length > maxWords;

  return {
    preview: isLong ? words.slice(0, maxWords).join(' ') : text,
    isLong
  };
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

    el.innerHTML = `
      <div class="post-body">
        <h3>${p.title}</h3>
        <div class="post-date">${p.date}</div>
        <p>
          ${preview}
          ${
            isLong
              ? ` <a class="read-more" href="post.html?id=${p.id}">...see more</a>`
              : ''
          }
        </p>
      </div>
    `;

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
