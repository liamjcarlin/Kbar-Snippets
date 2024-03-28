//LC_Wave Warp Effect

//These are the settings that I normally use. This can save as an animation preset but it's more for me to learn to hard code it.

function waveWarpEffect() {

  app.beginUndoGroup("Undo Guide");
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
  alert("Please select a Comp / Layer");
  return false;

} else {
  
  waveWarp(app.project.activeItem.selectedLayers);
  
}

app.endUndoGroup();

  }

function waveWarp(layer) {

for (var i = 0; i < layer.length; i++) {

var effectsProperty = layer[i].property("ADBE Effect Parade"); //This is how you add effects to properties
var wWarp = effectsProperty.addProperty("ADBE Wave Warp");
var wWarpIndex = wWarp.propertyIndex;
var waveHeight = effectsProperty.property(wWarpIndex).property("ADBE Wave Warp-0002"); //You have to pass the 'index' var through.
var waveWidth = effectsProperty.property(wWarpIndex).property("ADBE Wave Warp-0003");
var waveSpeed = effectsProperty.property(wWarpIndex).property("ADBE Wave Warp-0005");
var wavePinning = effectsProperty.property(wWarpIndex).property("ADBE Wave Warp-0006");
var waveAntialiasing =effectsProperty.property(wWarpIndex).property("ADBE Wave Warp-0008");
waveHeight.setValue([4]);
waveWidth.setValue([400]);
waveSpeed.setValue([0.25]);
wavePinning.setValue([2]);
waveAntialiasing.setValue(3);
  
}

}

waveWarpEffect();