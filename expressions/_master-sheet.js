/// Ticking Clock Hands ///
/// Apply to: { Rotation } ///
// Define the interval in seconds for each tick
var interval = 1; // Number of ticks per second

// Calculate the number of ticks based on the current time
var ticks = Math.floor(time / interval);

// Rotate one degree per tick
var degreesPerTick = 5;
rotation = ticks * degreesPerTick;


/// Muted Bounce ///
/// Apply to: { Scale } ///
amp = .04;
freq = 1.75;
decay = 5;
n = 0;
time_max = 4;
if (numKeys > 0) {
    n = nearestKey(time).index;
    if (key(n).time > time) {
        n--;
    }
}
if (n == 0) {
    t = 0;
} else {
    t = time - key(n).time;
}
if (n > 0 && t < time_max) {
    v = velocityAtTime(key(n).time - thisComp.frameDuration / 10);
    value + v * amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t);
} else { value }

