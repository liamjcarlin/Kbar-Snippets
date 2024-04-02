//Mesh Warp Settings I use. This can also just be saved as an animation preset.

function meshWarp() {

  app.beginUndoGroup("Undo Guide");
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
  alert("Please select a Comp / Layer");
  return false;

} else {
  
  meshWarpDisplace(app.project.activeItem.selectedLayers);
  
}

app.endUndoGroup();

  }

function meshWarpDisplace(layer) {

for (var i = 0; i < layer.length; i++) {

var effectsProperty = layer[i].property("ADBE Effect Parade"); //This is how you add effects to properties
var meshWarp = effectsProperty.addProperty("ADBE MESH WARP");
var meshWarpIndex = meshWarp.propertyIndex;
//Accessing the effect properties
var rows = effectsProperty.property(meshWarpIndex).property("ADBE MESH WARP-0001");
var columns = effectsProperty.property(meshWarpIndex).property("ADBE MESH WARP-0002");
var quality = effectsProperty.property(meshWarpIndex).property("ADBE MESH WARP-0005");
//Setting of the values
rows.setValue([1]);
columns.setValue([1]);
quality.setValue([10]);
  
}

}

meshWarp();