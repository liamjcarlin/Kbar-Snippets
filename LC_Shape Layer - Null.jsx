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