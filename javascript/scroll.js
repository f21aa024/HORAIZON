// スクロールイベント
window.addEventListener('scroll', () => {
    // visualVerticalImgのid名がつく画像を取得
    const elemImg = document.getElementById('visualVerticalImg');
    //現在のスクロール位置を取得して10で除算
    let imgVerScrollY = window.scrollY/10;
    //取得したスクロール値でY値をtransform
    elemImg.style.transform = 'translateY('+ 0 + imgVerScrollY + 'px) scale(1.4)';
  });