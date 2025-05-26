import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/img/pages/purchase/marker.svg";

const MapComponent: React.FC<{
  width: number;
  height: number;
  img: string;
  iconHeight: number;
  iconWidth: number;
}> = ({ width, height, img, iconHeight, iconWidth }) => {
  const center: LatLngExpression = [48.4647, 35.0462];
  const zoom: number = 16;
  const customIcon = new L.Icon({
    iconUrl: `${img}`,
    iconSize: [iconWidth, iconHeight],
  });
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: `${height}px`, width: `100%` }}
      zoomControl={false}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      <Marker position={center} icon={customIcon}>
        <Popup>Лондон</Popup>
      </Marker>
      <style>
        {`
          .leaflet-control-attribution {
            display: none !important; /* Скрыть надпись "Powered by Leaflet" */
          }

        `}
      </style>
    </MapContainer>
  );
};

export default MapComponent;
