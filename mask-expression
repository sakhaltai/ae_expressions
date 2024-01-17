// Make Layers React to a Mask
// Based on knowledge from The Power of Expression Book
// https://aescripts.com/the-power-of-expression/
//
// Requires the new 'Javascript' expressions engine introduced in AE 16.0 (CC2019)
// You can set this in File -> Project Settings: https://drop.aescripts.com/NQurXWmG
// If you replace all "let" to "var" this expression will should work in previous versions
//
// v1 initial version
// v2 added feathering support
// v3 added parenting support

let maskToUse = thisComp.layer("MASK").mask("Mask 1").maskPath.points();
let positionLayer = thisLayer.toComp([transform.anchorPoint[0],transform.anchorPoint[1]]);

let inside = function(point, path) {
    let x = point[0],
        y = point[1];
        let result = 0;
    let inside = false;
    for (let i = 0, j = path.length - 1; i < path.length; j = i++) {
        let xi = path[i][0],
            yi = path[i][1];
        let xj = path[j][0],
            yj = path[j][1];
        let intersect = ((yi > y) != (yj > y)) &&
        (x <
            (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;

                let t1 = length(path[i],point);
                let t2 = length(path[result],point);
                if (t1 < t2){
                        result = i;}


    }
    return [inside,result];
};


let lengthToLine =  function(a, b, c) {
        let line = Math.pow(length(b,c),2);
        if (line === 0) return Math.pow(length(a,b),2);
        let d = ((a[0] - b[0]) * (c[0] - b[0]) + (a[1] - b[1]) * (c[1] - b[1])) / line;
        d = Math.max(0, Math.min(1, d));
        let distance =  Math.pow(length(a, [ b[0] + d * (c[0] - b[0]), b[1] + d * (c[1] - b[1]) ]),2);

        return Math.sqrt(distance);
};

let r = inside(positionLayer, maskToUse);
let final, distance1, distance2, result2;
if (r[0] == true) {
    thisProperty.key(2).value;
} else {
        let closest = r[1];
        let fallOff = thisComp.layer("MASK").mask("Mask 1").maskFeather[0];
        final = thisProperty.key(1).value;

        if (fallOff!=0){

if (closest==0){
        distance1 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[maskToUse.length-1]);
        distance2 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[closest+1]);
} else if ((closest+1)==maskToUse.length){
        distance1 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[closest-1]);
        distance2 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[0]);
} else {
        distance1 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[closest-1]);
        distance2 = lengthToLine (positionLayer, maskToUse[closest], maskToUse[closest+1]);
};


if (distance1 < distance2){
        result2 = distance1;
}else{
        result2 = distance2;
};


        final = linear(result2,0,fallOff,thisProperty.key(2).value,thisProperty.key(1).value);
};

        final;

};
