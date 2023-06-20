import React, { useCallback, useRef, useState } from 'react';
import MapView, { UrlTile, Marker } from 'react-native-maps';
import { View, Image, Dimensions, Text } from 'react-native';
import { mapStyles } from './Map.style';
import { BottomSheet, BottomSheetRefProps } from '../../components';
import { useSelector } from 'react-redux';
import { selectStations, StationType } from '../../store';
import stationImage from '../../../assets/images/station.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 47.922;
const LONGITUDE = 106.922;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialRegion = {
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
  latitude: LATITUDE,
};

const OpenStreetMap = React.memo(() => {
  const markers = useSelector(selectStations);
  const URL_TEMPLATE = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  const ref = useRef<BottomSheetRefProps>(null);

  const [currentStation, setCurrentStation] = useState(markers[0]);

  const onBottomSheetPress = useCallback(() => {
    ref?.current?.scrollTo(-100);
  }, []);
  const onMarkerPress = (marker: StationType) => {
    setCurrentStation(marker);
    onBottomSheetPress();
  };
  return (
    <View style={mapStyles.container}>
      <MapView style={mapStyles.map} initialRegion={initialRegion}>
        <UrlTile urlTemplate={URL_TEMPLATE} flipY={false} />
        {markers.map((marker) => (
          <Marker
            key={marker._id}
            tappable
            onPress={() => onMarkerPress(marker)}
            coordinate={marker.coordinate}
            title={marker.title}
            pinColor={marker.status}
          />
        ))}
      </MapView>
      {/* <View style={mapStyles.searchContainer}>
        <TextInput style={mapStyles.input} placeholder='Search' />
      </View> */}
      <BottomSheet ref={ref}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={mapStyles.stationImage}
            source={currentStation.photo ? currentStation.photo : stationImage}
          />
          <View style={{ paddingTop: 25 }}>
            <Text>Station: {currentStation.title}</Text>
            <Text>Address: {currentStation.address}</Text>
            <Text>Station status: {currentStation.status}</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
});

export default OpenStreetMap;
