<script>
export default {
  props: {
    markers: Array,
  },
  computed: {
    map() {
      return this.$parent.map;
    },
    google() {
      return this.$parent.google;
    },
  },
  mounted() {
    this.markers.forEach(marker => {
      const { Marker, LatLng } = this.google.maps;
      new Marker({
        title: marker.name,
        position: new LatLng(marker.lat, marker.long),
        map: this.map,
      });
    });
  },
  render() {
    return null;
  },
}
</script>
