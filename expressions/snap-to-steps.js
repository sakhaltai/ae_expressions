/// Snap to steps ///
/// Apply to: { Position, Rotation, Scale, etc }
// credit to...probably goodboyninja? //

// properties you can edit
var stepSize = 20; // Will stick to 20 pixels increments

// run
var x = Math.round(value[0] / stepSize) * stepSize;
var y = Math.round(value[1] / stepSize) * stepSize;
[x, y];
