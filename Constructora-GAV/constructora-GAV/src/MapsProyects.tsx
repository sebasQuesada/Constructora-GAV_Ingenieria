import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "12px",
};

const center = {
  lat: 9.748917, // Centro de Costa Rica
  lng: -83.753428,
};

// Lista de proyectos actuales
const proyectos = [
  {
    id: 1,
    nombre: "Proyecto Paraíso",
    position: { lat: 9.838, lng: -83.864 },
  },
  {
    id: 2,
    nombre: "Proyecto Escazú",
    position: { lat: 9.918, lng: -84.142 },
  },
  // Agregá más puntos aquí...
];

export default function MapaGAVS() {
  return (
    <LoadScript googleMapsApiKey="https://serpapi.com/search?engine=google_maps">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        {proyectos.map((p) => (
          <Marker key={p.id} position={p.position} title={p.nombre} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
