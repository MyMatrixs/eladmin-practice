<template>
  <div class="leafletMain">
    <h1>Leaflet</h1>
    <div id='MapContiner'></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
export default {
    name:'LeafletWebgis',
    data(){
        return{
            
        }
    },
    mounted(){
        console.log("开始啦")
        const map = L.map('MapContiner', {
            center: [51.505, -0.09],
            zoom: 13
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}
</script>


<style>
.leafletMain{
    width: 100%;
    height: 100%;
}
#MapContiner{
    width: 100%;
    height: 90%;
    background-color: #ffffff50;
}
</style>