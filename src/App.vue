<template>
  <b-container id="root-app">
    <b-navbar
      variant="light"
      type="light"
      class="navbar d-flex justify-content-between"
    >
      <b-navbar-brand href="#">Travel Recording</b-navbar-brand>
      <b-nav-text>
        <h3>
          <b-badge pill variant="info">Test Project</b-badge>
        </h3></b-nav-text
      >
    </b-navbar>
    <b-row>
      <b-col cols="12" md="4">
        <side-bar />
      </b-col>
      <b-col cols="12" md="8">
        <google-map
          :config="mapConfig"
          apikey="AIzaSyCXQV4FpKYoFva5dmQkqTBFgZ2Ce81I204"
        >
          <GoogleMapMarkers :markers="mapMarkers" />
        </google-map>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GoogleMap from "./components/gmap/GoogleMap";
import GoogleMapMarkers from "./components/gmap/GoogleMapMarkers";
import SideBar from "./components/SideBar";

export default {
  components: {
    GoogleMap,
    GoogleMapMarkers,
    SideBar,
  },
  data() {
    return {
      mapConfig: {
        zoom: 12,
        center: {
          lat: -6.1753871,
          lng: 106.8249641,
        },
      },
      mapMarkers: [
        {
          name: "GBK",
          lat: -6.218605,
          long: 106.802612,
        },
        {
          name: "Ancol",
          lat: -6.1229209,
          long: 106.8228804,
        },
        {
          name: "Monas",
          lat: -6.1753871,
          long: 106.8249641,
        },
      ],
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
