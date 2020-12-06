import React from "react";
import MapView from "react-native-maps";
import openMap from "react-native-open-maps";

export default function Map(props) {
    const { location, name, height } = props;

    const openAppMap = () => {
        openMap({
            //latitude: location.latitude,
            //longitude: location.longitude,
            //zoom: 19,
            query:`${String(location.latitude)},${String(location.longitude)}`,
            zoom: 19,
            //query:`${String(name.name)}`,//ojo falta el nombre del restaurante
        });
    }

    return (
        <MapView
            style={{ height: height, width: "100%" }}
            initialRegion={location}
            onPress={openAppMap}
        >
            <MapView.Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
            />
        </MapView>
    );
}