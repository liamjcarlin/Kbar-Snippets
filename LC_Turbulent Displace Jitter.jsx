//Turbulent Displace with Jitter

function turbulentDisplaceEffectJitter() {

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

var effectsProperty = layer[i].property("ADBE Effect Parade"); //This is how you add effects to properties
var turbulentDisplace = effectsProperty.addProperty("ADBE Turbulent Displace");
var turbulentDisplacepIndex = turbulentDisplace.propertyIndex;
//Accessing the effect properties
var turbulentDisplaceAmount = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0002");
var turbulentDisplaceSize = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0003");
var turbulentDisplaceComplexity = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0005");
var turbulentDisplaceRandomSeed = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0010");
var turbulentDisplacePinning = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0012");
var turbulentDisplaceAntialiasing = effectsProperty.property(turbulentDisplacepIndex).property("ADBE Turbulent Displace-0014");
//Setting of the values
turbulentDisplaceAmount.setValue([10]);
turbulentDisplaceSize.setValue([10]);
turbulentDisplaceComplexity.setValue([1]);
turbulentDisplaceRandomSeed.expression = "time*20"; //Jitter Effect
turbulentDisplacePinning.setValue(3);
turbulentDisplaceAntialiasing.setValue(2);
  
}

}

turbulentDisplaceEffectJitter();