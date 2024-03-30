//LC_Storyboard pComper v1.0.0//

/*
This script will create a Storyboard pComp from selected layers for any size composition.

The order of operation is below.

• Select Layers (any)
• Pre-Compose Layers
• Name "Storyboard pComp
• Apply 'ADBE Tint' Effect
• Scale to 33.3
• Position TL of screen
• Opacity to 75%
• Apply Guide Layer
• 33.3% scale to 100% scale and is centered in the comp

*/

var comp, compTwo, pComp; 
var effectsProperty, tint, tintIndex, slider, sliderIndex, sliderProperty;
var checkBoxOne, checkBoxIndexOne, checkBoxPropertyOne;
var checkBoxTwo, checkBoxIndexTwo, checkBoxPropertyTwo;

app.beginUndoGroup("Storyboard preComp");

function storyboardComp() {
  var layerArray = [];
  var lays = app.project.activeItem.selectedLayers;
  for(var i = 0; i < lays.length; i++){
    layerArray.push(lays[i].index);
  }
  //Returns the Layer Array
  return layerArray;
}

storyboardComp();

// Post Function Code
comp = app.project.activeItem;
pComp = app.project.activeItem.layers.precompose(storyboardComp(), comp.name + " - Storyboard pComp", true);
compTwo = app.project.activeItem.selectedLayers[0]; //This [0] refers to the first layer in the index. 
compTwo.guideLayer = true;

// Adding the Tint Effect
effectsProperty = compTwo.property("ADBE Effect Parade"); //This is how you add effects to properties
tint = effectsProperty.addProperty("ADBE Tint");
tintIndex = tint.propertyIndex;
tint.property("ADBE Tint-0003").expression = "effect(\"Tint On / Off\")(\"Checkbox\")*100";

// Adding slider for pComp Opacity
slider = effectsProperty.addProperty("ADBE Slider Control");
sliderIndex = slider.propertyIndex; // Store 'slider' effect index so it can be reused later
sliderProperty = effectsProperty.property(sliderIndex).property("ADBE Slider Control-0001");
slider.name = "Opacity Slider";
sliderProperty.setValue([75]);
compTwo.property("ADBE Transform Group").property("ADBE Opacity").expression = "effect(\"Opacity Slider\")(\"Slider\")";

// Adding Checkbox Controller for Tint Opacity
checkBoxOne = effectsProperty.addProperty("ADBE Checkbox Control");
checkBoxIndexOne = checkBoxOne.propertyIndex;
checkBoxPropertyOne = effectsProperty.property(checkBoxIndexOne).property("ADBE Checkbox Control-0001");
checkBoxOne.name = "Tint On / Off";
checkBoxPropertyOne.setValue(1);

// Adding Checkbox Controller for Scale
checkBoxTwo = effectsProperty.addProperty("ADBE Checkbox Control");
checkBoxIndexTwo = checkBoxTwo.propertyIndex;
checkBoxPropertyTwo = effectsProperty.property(checkBoxIndexTwo).property("ADBE Checkbox Control-0001");
checkBoxTwo.name = "Scale 33% / 100%";
checkBoxPropertyTwo.setValue(0);

// Transform Value
compTwo.scale.setValue([33.3, 33.3, 33.3]);
compTwo.scale.expression = "var temp = effect(\"Scale 33% / 100%\")(\"Checkbox\").value;\
                            if(temp == false){\
                            [33, 33];\
                            }else{\
                              [100,100];\
                            }"
compTwo.anchorPoint.setValue([0,0]);
compTwo.position.setValue([0,0]);

// This opens the pComp in the viewer
pComp.openInViewer();

app.endUndoGroup();