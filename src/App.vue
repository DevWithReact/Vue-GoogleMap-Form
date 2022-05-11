<template>
  <div id="root-app">
    <google-map
      :config="mapConfig"
      apikey="AIzaSyCXQV4FpKYoFva5dmQkqTBFgZ2Ce81I204">
      <GoogleMapMarkers :markers="mapMarkers"/>
    </google-map>
  </div>
</template>

<script>
import GoogleMap from './components/gmap/GoogleMap';
import GoogleMapMarkers from './components/gmap/GoogleMapMarkers';

export default {
  components: {
    GoogleMap,
    GoogleMapMarkers,
  },
  data() {
    return {
      mapConfig: {
        zoom: 12,
        center: {
          lat: -6.1753871,
          lng: 106.8249641
        },
      },
      mapMarkers: [
        {
          name: 'GBK',
          lat: -6.218605,
          long: 106.802612,
        },
        {
          name: 'Ancol',
          lat: -6.1229209,
          long: 106.8228804,
        },
        {
          name: 'Monas',
          lat: -6.1753871,
          long: 106.8249641,
        }
      ],
    };
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
