/* js/script.js */
const galleries = {
  droppongi: ['img/livearchive/2026roppongi/11.jpg', 'img/livearchive/2026roppongi/1.jpg', 'img/livearchive/2026roppongi/2.jpg', 'img/livearchive/2026roppongi/3.jpg', 'img/livearchive/2026roppongi/4.jpg', 'img/livearchive/2026roppongi/5.jpg', 'img/livearchive/2026roppongi/6.jpg', 'img/livearchive/2026roppongi/7.jpg', 'img/livearchive/2026roppongi/8.jpg', 'img/livearchive/2026roppongi/9.jpg', 'img/livearchive/2026roppongi/10.jpg', 'img/livearchive/2026roppongi/12.jpg'],
  adm: ['img/livearchive/20260322adm/1.jpg', 'img/livearchive/20260322adm/2.jpg', 'img/livearchive/20260322adm/3.jpg', 'img/livearchive/20260322adm/4.jpg', 'img/livearchive/20260322adm/5.jpg', 'img/livearchive/20260322adm/6.jpg', 'img/livearchive/20260322adm/7.jpg', 'img/livearchive/20260322adm/8.jpg', 'img/livearchive/20260322adm/9.jpg', 'img/livearchive/20260322adm/10.jpg', 'img/livearchive/20260322adm/11.jpg'],
  mugenf: ['img/livearchive/2025mugenrock/1.jpg', 'img/livearchive/2025mugenrock/2.jpg', 'img/livearchive/2025mugenrock/3.jpg', 'img/livearchive/2025mugenrock/4.jpg', 'img/livearchive/2025mugenrock/5.jpg', 'img/livearchive/2025mugenrock/6.jpg', 'img/livearchive/2025mugenrock/7.jpg', 'img/livearchive/2025mugenrock/8.jpg', 'img/livearchive/2025mugenrock/9.jpg', 'img/livearchive/2025mugenrock/10.jpg', 'img/livearchive/2025mugenrock/11.jpg', 'img/livearchive/2025mugenrock/12.jpg'],
  weaver: ['img/livearchive/20231111weaver/1.jpg', 'img/livearchive/20231111weaver/2.jpg', 'img/livearchive/20231111weaver/3.jpg', 'img/livearchive/20231111weaver/4.jpg', 'img/livearchive/20231111weaver/5.jpg', 'img/livearchive/20231111weaver/6.jpg', 'img/livearchive/20231111weaver/7.jpg', 'img/livearchive/20231111weaver/8.jpg', 'img/livearchive/20231111weaver/9.jpg', 'img/livearchive/20231111weaver/10.jpg', 'img/livearchive/20231111weaver/11.jpg', 'img/livearchive/20231111weaver/12.jpg'],
  trppngi: ['img/livearchive/20240323shinsekai/1.jpg', 'img/livearchive/20240323shinsekai/2.jpg', 'img/livearchive/20240323shinsekai/3.jpg', 'img/livearchive/20240323shinsekai/4.jpg', 'img/livearchive/20240323shinsekai/5.jpg', 'img/livearchive/20240323shinsekai/6.jpg', 'img/livearchive/20240323shinsekai/7.jpg', 'img/livearchive/20240323shinsekai/8.jpg', 'img/livearchive/20240323shinsekai/9.jpg', 'img/livearchive/20240323shinsekai/10.jpg', 'img/livearchive/20240323shinsekai/11.jpg', 'img/livearchive/20240323shinsekai/12.jpg'],
  fshareido: ['img/livearchive/20220619elle/1.jpg', 'img/livearchive/20220619elle/2.jpg', 'img/livearchive/20220619elle/3.jpg', 'img/livearchive/20220619elle/4.jpg', 'img/livearchive/20220619elle/5.jpg', 'img/livearchive/20220619elle/6.jpg', 'img/livearchive/20220619elle/7.jpg', 'img/livearchive/20220619elle/8.jpg', 'img/livearchive/20220619elle/9.jpg', 'img/livearchive/20220619elle/10.jpg', 'img/livearchive/20220619elle/11.jpg', 'img/livearchive/20220619elle/12.jpg', 'img/livearchive/20220619elle/13.jpg', 'img/livearchive/20220619elle/14.jpg', 'img/livearchive/20220619elle/15.jpg', 'img/livearchive/20220619elle/16.jpg'],
};

const categoryTitles = {
  droppongi: '2026/6/21(日) Do WHat i Love Shinsekai at 六本木 新世界',
  adm: '2026/3/22(日) at 池袋adm',
  mugenf: '2025/9/7(日) at Mugen Rock Fes.',
  weaver: '2023/11/11(日) Do What i Love 1 at 下北沢Weaver',
  trppngi: '2024/3/23(土) Tori Fes Vol.5 at 六本木 新世界',
  fshareido:'2022/6/19(日) ELLE Night!! at LIVE HOUSE 小田原姿麗人',
};

const galleryContainer = document.getElementById('gallery');
const navLinks = document.querySelectorAll('.nav-link');

function loadGallery(category) {
  const images = galleries[category] || [];
  const title = categoryTitles[category] || '';
  galleryContainer.innerHTML = `
  <div class="main-content" id="gallery">  
    <div class="gallery-header">
      <h2>${title}</h2>
    </div>
  <div class="gallery-grid" id="gallery-body">
      ${images.map(src => `<img src="${src}" alt="${title}">`).join('')}
  </div>
    <div class="gallery-setlist-area">
    <button class="setlist-btn" onclick="toggleSetlist()">セットリスト</button>
    <div id="setlist-area"></div>
  </div>
  `;
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
    loadGallery(e.target.dataset.category);
  });
});

const setlists = {
  droppongi: ['1. ミス・ブランニューデイ', '2. 遠くまで', '3. 人として', '4. 焼け野が原', 'encore. ららら'],
  adm: ['1. 名もなき詩', '2. 19 Growing Up', '3. FACES PLACES', '4. LA LA LA LOVESONG', '5. ららら'],
  mugenf: ['1. Hello again', '2. 世界で一番熱い夏', '3. everything~it`s you~', '4. Grip!', '5. 歩いて帰ろう'],
  weaver: ['1. Crazy', '2. Reminder', '3. Real Voice', '4. 茜色の約束', '5. Your Song', 'encore. Two Of Us'],
  trppngi: ['1. GRAMOROUS SKY', '2. 紺碧の夜に', '3. Ghost In The Rain', '4. 強く儚い者たち', '5. 冒険者たち', '6. 遠くまで'],
  fshareido: ['1. 紺碧の夜に', '2. 貴方の恋人になりたいのです', '3. ELLEGARDENメドレー', '(風の日 ▶ 虹 ▶ 金星 ▶ Supernova)']
};

let isSetlist = false;

function toggleSetlist() {
  isSetlist = !isSetlist;
  const currentCategory = document.querySelector('.nav-link.active')?.dataset.category || 'droppongi';
  const bodyEl = document.getElementById('gallery-body');
  const setlistBtn = document.querySelector('.setlist-btn');
  const setlistArea = document.getElementById('setlist-area');
  
  const list = setlists[currentCategory] || [];
  
  // 各カテゴリごとの画像パスを定義
  const setlistImages = {
    droppongi: ['img/livearchive/2026roppongi/flr.jpg'],
    adm: ['img/livearchive/20260322adm/ik.jpg'],
    mugenf: ['img/livearchive/2025mugenrock/mfl25.jpg'],
    weaver: ['img/livearchive/20231111weaver/weaver.png'], // weaver用の画像パスを指定
    trppngi: ['img/livearchive/flyer/dwilflyer.png'],
    fshareido: ['img/livearchive/20220619elle/0619shareidoflyer.png'],
  };

  // 各カテゴリごとのYouTubeリンクURLを定義
const youtubeLinks = {
  // droppongi: 'https://www.youtube.com/watch?v=droppongi_url',
  adm: '', // 例：リンクがない場合
  mugenf: 'https://youtu.be/NhgD56gGes4',
  trppngi: 'https://www.youtube.com/watch?v=dCobfRHQQXc',
  fshareido: 'https://www.youtube.com/watch?v=0GZUVEFdi2k&t=556s',
};
  
  const previewImages = setlistImages[currentCategory] || [];
  const youtubeUrl = youtubeLinks[currentCategory] || '';
  const title = categoryTitles[currentCategory] || '';

if (isSetlist) {
  bodyEl.style.display = 'none';
  setlistBtn.style.display = 'none';
  setlistArea.innerHTML = `
    <div class="setlist-container">
      <div class="setlist-gallery-preview">
        ${previewImages.map(src => `<img src="${src}" alt="${title}">`).join('')}
      </div>
      <ul class="setlist-list">
        ${list.map(s => `<li>${s}</li>`).join('')}
      </ul>
      ${youtubeUrl ? `
        <button type="button" class="youtube-modal-btn" onclick="openYoutubeModal('${youtubeUrl}')">
          <img src="img/sns/ytlogo.png" alt="YouTube" class="youtube-logo"> <!-- パスを修正 -->
        </button>
      ` : ''}
    </div>
    
    <!-- ポップアップモーダル要素 -->
    <div id="youtube-modal" class="modal-overlay" style="display: none;" onclick="closeYoutubeModal(event)">
      <div class="modal-content" onclick="event.stopPropagation()">
        <button type="button" class="modal-close" onclick="closeYoutubeModal()">×</button>
        <div id="modal-video-container"></div>
      </div>
    </div>
  `;
}
  
  else {
    bodyEl.style.display = 'grid';
    setlistBtn.style.display = 'inline-block';
    setlistArea.innerHTML = '';
    isSetlist = false;
  }
}

/* js/gallery.js にモーダルの開閉関数を追加 */
function openYoutubeModal(url) {
  const modal = document.getElementById('youtube-modal');
  const container = document.getElementById('modal-video-container');
  
  // URLから動画IDを抽出して埋め込み用iframeを生成
  const videoId = extractYoutubeId(url);
  container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  
  modal.style.display = 'flex';
}

function closeYoutubeModal() {
  const modal = document.getElementById('youtube-modal');
  const container = document.getElementById('modal-video-container');
  
  modal.style.display = 'none';
  container.innerHTML = ''; // 閉じたときに動画を停止する
}

function extractYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

