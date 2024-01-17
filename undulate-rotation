/// Undulate Rotation ///
/// Apply to: { Rotation } ///
// credit to Dan Ebbert

xFreq = .43; //undulations per second
xSpeed = 140; //speed of wave (pixels per second)
damping = 25; //undulation damping factor

wl = xSpeed/xFreq; //wavelength (pixels)
phaseOffset = ((position[0]%wl)/wl)*2*Math.PI;
theta = Math.atan(Math.cos(2*Math.PI*xFreq*time + phaseOffset));
radiansToDegrees(theta)/damping;
