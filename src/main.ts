import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";

import "@arcgis/core/assets/esri/themes/light/main.css";
import "./index.css";

const view = new SceneView({
  container: document.querySelector("#viewDiv") as HTMLDivElement,
  map: new Map({
    basemap: "topo-vector",
    ground: "world-elevation"
  }),
  qualityProfile: "high"
});

view.when(async () => {
  console.log("View is ready");
});
