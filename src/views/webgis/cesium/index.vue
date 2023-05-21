<template>
  <div class="cesiumMain">
    <h1>cesium</h1>
    <div id='MapContiner'></div>
  </div>
</template>

<script>
// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/static/Cesium/';

import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
    name:'CesiumWebgis',
    data(){
        return{
            
        }
    },
    mounted(){
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMWYwNWY2NS02ZDU0LTQ5NGItYTU1YS02ZWViN2Y4YzVlNTEiLCJpZCI6NTY0NjIsImlhdCI6MTY0NjkyODQzOX0.kOwM0SH7SBu1Omknv-QJGxSs6mh6M795wgP0wugWjb8';
      // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
      const viewer = new Cesium.Viewer('MapContiner', {
        terrainProvider: Cesium.createWorldTerrain()
      });    
      // Add Cesium OSM Buildings, a global 3D buildings layer.
      const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation : {
          heading : Cesium.Math.toRadians(0.0),
          pitch : Cesium.Math.toRadians(-15.0),
        }
      });
    }
}
</script>

<style>
.cesiumMain{
    width: 100%;
    height: 100%;
}
#MapContiner{
    width: 100%;
    height: 90%;
    background-color: #ffffff50;
}
</style>