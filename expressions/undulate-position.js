/// Undulate Position ///
/// Apply to: { Position } ///
// credit to Dan Ebbert

xAmp = 5; //height of undulations (pixels)
xFreq = .7; //undulations per second
xSpeed = 140; //speed of wave (pixels per second)

wl = xSpeed/xFreq; //wavelength (pixels)
phaseOffset = ((position[0]%wl)/wl)*2*Math.PI;
y = xAmp*Math.sin(2*Math.PI*xFreq*time + phaseOffset);
value + [0,y]
