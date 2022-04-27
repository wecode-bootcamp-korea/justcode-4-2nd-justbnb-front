import React from 'react';
import { useState } from 'react';

function MapMarkerItem({ position, latlng, map }) {
  return (
    <MapMarker
      position={position}
      title={position.title}
      map={map}
      latlng={latlng}
      key={position.id}
    />
  );
}
const MapMarker = React.memo(function MapMarker({
  position,
  title,
  onClick,
  map,
  latlng,
}) {
  const { kakao } = window;
  const [open, setOpen] = useState(false);
  let image =
    latlng.lat === position.latlng.Ma
      ? '/images/thump/marker_yellow.png'
      : '/images/thump/marker_black.png';
  let imageSize = new kakao.maps.Size(40, 50);
  let markerImage = new kakao.maps.MarkerImage(image, imageSize);
  let marker = new kakao.maps.Marker({
    map: map,
    position: position.latlng,
    title: title,
  });
  marker.setImage(markerImage);

  // 마커 위에 커스텀오버레이를 표시합니다
  let _content = `
    <div ref="el" style="width:250px; height:270px; border-radius: 5%; position: absolute; top: 0px; left:-120px; background-color: white;">
    <img src=${position.image} alt="photo" style="width: 100%; border-top-left-radius: 5%; border-top-right-radius: 5%; height: 180px;"/>
    <div style="margin-top: 15px; padding-top: 10px; padding-left: 20px;">
    ${position.buildType} 전체 · ${position.localName}
    </div>
    <p style="width: 100%; padding-top: 10px; padding-left: 20px; padding-right: 20px; text-overflow: ellipsis; overflow: hidden;">${position.title}</p>
    </div>`;
  let content = document.createElement('p');
  let parser = new DOMParser();
  let doc = parser.parseFromString(_content, 'text/html');
  content.appendChild(doc.documentElement);

  let overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition(),
  });
  overlay.setMap(null);
  kakao.maps.event.addListener(marker, 'click', function () {
    setOpen(true);
  });
  kakao.maps.event.addListener(map, 'click', function () {
    setOpen(false);
    overlay.setMap(null);
  });
  if (open) overlay.setMap(map);
});

export default React.memo(MapMarkerItem);
