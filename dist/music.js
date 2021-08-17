const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "ニルギリ",
        artist: 'NIRGILIS',
        url: 'https://youtu.be/yvUvamhYPHw',
        // cover: '/music/cover/兩隻老虎.jpg',
        // lrc: '/music/lyrics/兩隻老虎.lrc',
      }
    
    ]
});