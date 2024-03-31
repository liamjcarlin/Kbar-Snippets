//Trim Paths to Shape Layer

/*
This adds a trim path to selected Shape Layers

It animates from 0%-100% on the end path property. Mainly just how I use it. Will look into adding some better interpolation to the keyframes rather than linear

*/

function addTrimPath() {

  app.beginUndoGroup("Undo Guide");
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
  alert("Please select a Comp / Shape Layer");
  return false;

} else {
  
  tp(app.project.activeItem.selectedLayers);
  
}

app.endUndoGroup();

  }
  
function tp(layer) {

for (var i = 0; i < layer.length; i++) {

//Trim Path Property
var effectsProperty = layer[i].property("ADBE Root Vectors Group");
var trimPath = effectsProperty.addProperty("ADBE Vector Filter - Trim");
var trimPathEnd = trimPath.property("ADBE Vector Trim End");
//Trim Path Keyframes
var applyEaseIn = new KeyframeEase(0,66);
var applyEaseOut = new KeyframeEase(0,66);
trimPathEnd.addKey(0);
trimPathEnd.addKey(3);
trimPathEnd.setValueAtKey(1,0);
trimPathEnd.setValueAtKey(2,100);
trimPathEnd.setTemporalEaseAtKey(1,[applyEaseIn],[applyEaseOut]);
trimPathEnd.setTemporalEaseAtKey(2,[applyEaseIn],[applyEaseOut]);

}

}

addTrimPath();