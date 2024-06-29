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

    // マーカーを追加　２、３、４に２つ、スポーツ、ミレニアムセンター、
    const markers = [
      {coords:　[35.6571232,140.0430484], popup: "<img src='３号館.png' width='200'><br>３号館" },
        { coords: [35.6581119,140.0425235], popup: '４号館' },
        { coords: [35.657310, 140.043290], popup: '２号館' },
      {coords: [35.65537985430815, 140.0436159350883], popup: '体育館'},
        ];

    markers.forEach(markerData => {
        const marker = L.marker(markerData.coords).addTo(leafletMap);
        marker.bindPopup(markerData.popup).openPopup();
    });
}
