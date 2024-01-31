// Create a ScriptUI window
var win = new Window("palette", "Apply Slider Control", undefined);
win.orientation = "column";

var applyButton = win.add("button", undefined, "Apply Slider and Update Expression");
win.show();

applyButton.onClick = function() {
    // Check if there are any layers selected
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem) || comp.selectedLayers.length === 0) {
        alert("Please select at least one layer.");
        return;
    }

    app.beginUndoGroup("Apply Slider Control");

    // Iterate over selected layers
    for (var i = 0; i < comp.selectedLayers.length; i++) {
        var layer = comp.selectedLayers[i];

        // Add a Slider Control to the layer
        var sliderEffect = layer.Effects.addProperty("Slider Control");
        sliderEffect.name = "Intensity Control";

        // Example: Updating the position property expression
        // You might want to extend this to other properties and add checks
        var expression = 'var slider = effect("Intensity Control")("Slider");\n' +
                         'var intensity = linear(slider, 0, 100, 0, 1);\n' +
                         '// Your original expression here, modified to include intensity\n' +
                         'value;';
        layer.position.expression = expression;
    }

    app.endUndoGroup();
};
