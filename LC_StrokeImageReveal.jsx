//LC_Stroke Image Stroke Image Reveal 

//Best to have a mask already drawn. The effect will work but once a mask is present it will make strokePath work.


function strokeImageReveal() {

  app.beginUndoGroup("Undo Guide");
  if (app.project.activeItem == undefined || app.project.activeItem == null) {
  alert("Please select a Comp / Layer");
  return false;

} else {
  
  turbulentDisplace(app.project.activeItem.selectedLayers);
  
}

app.endUndoGroup();

  }

function turbulentDisplace(layer) {

for (var i = 0; i < layer.length; i++) {

var comp = app.project.activeItem;
var myLayer = app.project.activeItem.selectedLayers[i];
var effectsProperty = layer[i].property("ADBE Effect Parade"); //This is how you add effects to properties
var strokeEffect = effectsProperty.addProperty("ADBE Stroke");
var strokeEffectIndex = strokeEffect.propertyIndex;
//Accessing the effect properties
var strokePath = effectsProperty.property(strokeEffectIndex).property("ADBE Stroke-0001");
var strokeBrushSize = effectsProperty.property(strokeEffectIndex).property("ADBE Stroke-0003");
var strokeEnd = effectsProperty.property(strokeEffectIndex).property("ADBE Stroke-0009");
var strokePaintStyle = effectsProperty.property(strokeEffectIndex).property("ADBE Stroke-0007");
//Setting the values
strokePath.setValue(1);
strokeBrushSize.setValue([12]);
strokePaintStyle.setValue(3);
//Trim Path Keyframes
var applyEaseIn = new KeyframeEase(0,66);
var applyEaseOut = new KeyframeEase(0,66);
strokeEnd.setValueAtTime(myLayer.inPoint,0);
strokeEnd.setValueAtTime(myLayer.inPoint + 30 * comp.frameDuration,3);
strokeEnd.setValueAtKey(1,0);
strokeEnd.setValueAtKey(2,100);
strokeEnd.setTemporalEaseAtKey(1,[applyEaseIn],[applyEaseOut]);
strokeEnd.setTemporalEaseAtKey(2,[applyEaseIn],[applyEaseOut]);
  
}

}

strokeImageReveal();