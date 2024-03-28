//15fps Adjustment Layer Comp

//Creates an Adjustment Layer and then adds the Posterize Time effect, set to 15fps, but of course, this can be changed.
//Somewhere between 12-15 always looks good for that choppy style.

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
        framesPerSecond.setValue([15]); //Change this '[15]' value to change the FPS.
        app.endUndoGroup();
    }
}

fifteenFramesPerSecond();