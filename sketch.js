function setup() {
    noCanvas();

    // 地図を表示するための要素を取得
    const mapElement = document.getElementById('map');

    // Leaflet地図の初期化
    const leafletMap = L.map(mapElement).setView([35.6566067, 140.0426483], 17);

    // 地図タイルの設定
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    // マーカーを追加
    const markers = [
        { coords: [35.6571232, 140.0430484], popup: "<img src='３号館.png' width='200'><br>３号館" },
        { coords: [35.65803434073385, 140.04290957812046], popup: "<img src='４号館１階.png' width='200'><br>４号館１階" },
        { coords: [35.65786627983767, 140.0430474722702], popup: "<img src='４号館２階.png' width='200'><br>４号館２階" },
        { coords: [35.657310, 140.043290], popup: "<img src='２号館.png' width='200'><br>2号館" },
        { coords: [35.65537985430815, 140.0436159350883], popup: "<img src='体育館.png' width='200'><br>体育館" },
        { coords: [35.65618565139854, 140.04461355588595], popup: "<img src='ミレニアムホール.png' width='200'><br>ミレニアムホール" },
        { coords: [35.65675386781967, 140.04120067567973], popup: "<img src='７号館.png' width='200'><br>７号館" },
    ];

    markers.forEach(markerData => {
        const marker = L.marker(markerData.coords).addTo(leafletMap);
        marker.bindPopup(markerData.popup).openPopup();
    });
}
