import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin  from "../../components/pin/pin";


function Map({items}){

    //const position = [51.505, -0.09],[11.3410, 77.7172]-for erode

    return(
        
        <MapContainer center={[52.4797, -1.90269]} zoom={10} scrollWheelZoom={false}  className="map" >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {items.map(item => (
    <Pin item={item} key={item.id}/>
   ))}
  </MapContainer>


    )
}

export default Map;