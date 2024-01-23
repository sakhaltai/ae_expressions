// A hilarious intensity-build-decay expression
// Like when a person is starting to lift a heavy weight,
// And then BOOM they thrust it overhead
// And then the wiggles subside.
// I'm very clever.
// Apply to { Position }

// Parameters
var startIntensity = 2; // Initial intensity of the wiggle
var maxIntensity = 20; // Maximum intensity of the wiggle
var endIntensity = .5; // Final intensity of the wiggle
var stopIntensity = 0; // Intensity after stopping (no wiggle)

var startTime = .75; // Time when the wiggle starts increasing
var intenseTime = 1.7; // Time when the wiggle is most intense
var endTime = 2.5; // Time when the wiggle dwindles
var stopTime = 4.5; // Time when the wiggle stops completely

// Calculate intensity based on time
var intensity;
if (time < startTime) {
    intensity = linear(time, 0, startTime, startIntensity, startIntensity);
} else if (time < intenseTime) {
    intensity = linear(time, startTime, intenseTime, startIntensity, maxIntensity);
} else if (time < endTime) {
    intensity = linear(time, intenseTime, endTime, maxIntensity, endIntensity);
} else if (time < stopTime) {
    intensity = linear(time, endTime, stopTime, endIntensity, stopIntensity);
} else {
    intensity = stopIntensity;
}

// Apply the wiggle
wiggle(50, intensity);
