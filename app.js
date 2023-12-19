function getThumbnails() {
  const imageArea = document.getElementById('resultArea');
  imageArea.innerHTML = '';
  const inputArea = document.getElementById('urlInput').value;
  const urlToRemove = `https://www.youtube.com/watch?v=`;
  const newVideoID = inputArea.replace(urlToRemove, '');
  const thumbUrl = `https://img.youtube.com/vi/${newVideoID}/maxresdefault.jpg`;
  const thumbPreview = document.createElement('img');
  thumbPreview.src = thumbUrl;
  thumbPreview.classList = 'thumbnail';
  imageArea.appendChild(thumbPreview);
}
