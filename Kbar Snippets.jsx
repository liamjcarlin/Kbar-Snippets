//Kbar Snippets - Archive

/*

//Contents

• Default Project Folders
• 15fps / Adjustment Layer / Posterize time.
• Scale Transform - Adjustment
• Soryboard pComper
• Shape Layer - Null

*/

//Default Project Folders

//LC_Default Project Folders v1.0.0//

function defaultProjectFolders() {
  
    app.beginUndoGroup("Default Folders");

    // Audio Folders
    var audio = app.project.items.addFolder("00 Audio");
    // Sub Folders
    var vo = app.project.items.addFolder("VO");
    var voArchive = app.project.items.addFolder("_Archive");
    var sfx = app.project.items.addFolder("SFX");
    var sfxArchive = app.project.items.addFolder("_Archive");
    var music = app.project.items.addFolder("Music");
    var musicPreview = app.project.items.addFolder("_Preview");

    // Asset Folders
    var assets = app.project.items.addFolder("01 Assets");
    // Sub Folders
    var assetsArchive = app.project.items.addFolder("_Archive");
    var assetsVideo = app.project.items.addFolder("Videos");
    var assetsAEP = app.project.items.addFolder("AEPs");

    // Graphics Folders
    var graphics = app.project.items.addFolder("02 Graphics");
    // Sub Folders
    var graphicArchive = app.project.items.addFolder("_Archive");
    var storyboardGraphics = app.project.items.addFolder("Storyboard");
    var aiFiles = app.project.items.addFolder("AI");
    var psdFiles = app.project.items.addFolder("PSD");
    var jpegPng = app.project.items.addFolder("JPEGs / PNG");
    var referenceImages = app.project.items.addFolder("_Ref Images");

    // Comps Folders
    var comps = app.project.items.addFolder("03 Comps");
    // Sub Folders
    var compsArchive = app.project.items.addFolder("_Archive");
    var pComps = app.project.items.addFolder("_pComps");
    var tests = app.project.items.addFolder("Tests_");

    // Parenting Comps //

    // Audio Folders
    audio;
    // Sub Folders
    vo.parentFolder = audio;
    voArchive.parentFolder = vo;
    sfx.parentFolder = audio;
    music.parentFolder = audio;
    musicPreview.parentFolder = music;
    sfxArchive.parentFolder = sfx;

    // Asset Folders
    assets;
    // Sub Folders
    assetsArchive.parentFolder = assets;
    assetsVideo.parentFolder = assets;
    assetsAEP.parentFolder = assets;
    
    // Graphics Folders
    graphics;
    // Sub Folders
    graphicArchive.parentFolder = graphics;
    storyboardGraphics.parentFolder = graphics;
    aiFiles.parentFolder = graphics;
    psdFiles.parentFolder = graphics;
    jpegPng.parentFolder = graphics;
    referenceImages.parentFolder = graphics;
    
    // Comps Folders
    comps;
    // Sub Folders
    compsArchive.parentFolder = comps;
    pComps.parentFolder = comps;
    tests.parentFolder = comps;

    app.endUndoGroup();

}

defaultProjectFolders();

//15fps Adjustment Layer Comp

function fifteenFramesPerSecond() {
    if (app.project.activeItem == undefined || app.project.activeItem == null) {
        alert("Please Select a Composition.");
        return false;
    } else {
        app.beginUndoGroup("15fps");
        var comp = app.project.activeItem;
        var solid = comp.layers.addSolid([1, 1, 1], "15 FPS", comp.width, comp.height, comp.pixelAspect);
        solid.label = 5;
        solid.adjustmentLayer = true ;
        var effectsProperty = solid.property("ADBE Effect Parade");
        var posterizeTime = effectsProperty.addProperty("ADBE Posterize Time");
        var posterizeTimeIndex = posterizeTime.propertyIndex;
        var framesPerSecond = effectsProperty.property(posterizeTimeIndex).property("ADBE Posterize Time-0001");
        framesPerSecond.setValue([15]);
        app.endUndoGroup();
    }
}

fifteenFramesPerSecond();

//Scale Transform - Adjustment



//Storyboard pComper

//LC_Storyboard Script v1//

/*
This script will create a Storyboard pComp from selected layers for any size composition.

• Select Layers (any) [x]
• Pre-Compose Layers [x]
• Name "Storyboard pComp [x]
• Apply 'ADBE Tint' Effect [ ]
• Scale to 33.3 [x]
• Position TL of screen [x]
• Opacity to 75% [x]
• Apply Guide Layer [x]
• 33.3% scale to 100% scale and is centered in the comp [x]

Notes:

It would be great to a smaller scipt specifally just for an audio and VO comp. I could create a script for this. Similar but not the same as Universal Audio
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

/*

Shape Layer - Null

This snippet creates a shape layer using a Shape Layer with no contents. Works great instead of a Null as it doesn't clutter the AEP.

*/

function shapeLayerNull() {
    app.beginUndoGroup("Undo Shape Layer NULL");
    if (app.project.activeItem == undefined || app.project.activeItem == null) {
        alert("Please Select a Composition.");
        return false;
    } else {
        var comp = app.project.activeItem;
        var shape = comp.layers.addShape();
        shape.name = "NULL - ";
    }
    app.endUndoGroup();
}


shapeLayerNull();