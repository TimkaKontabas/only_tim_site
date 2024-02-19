// Взято с https://yandex.ru/dev/jsapi-v1-1/doc/ru/dg/tasks/quick-start

const coordinates = {
    lat: 61.541002,
    lng: 54.082683
}

// Создает обработчик события window.onLoad
YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    let map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

    setPlaceMark(map);

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(coordinates.lat, coordinates.lng), 15);
})

function setPlaceMark(map) {
    // Создает метку в центре Москвы
    let placemark = new YMaps.Placemark(new YMaps.GeoPoint(coordinates.lat, coordinates.lng), {style: "default#mailPostIcon"});

    // Устанавливает содержимое балуна
    placemark.name = "Москва";
    placemark.description = "Столица Российской Федерации";

    // Добавляет метку на карту
    map.addOverlay(placemark); 
}