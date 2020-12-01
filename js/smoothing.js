var width, height, center;
var points = 10;
var smooth = true;
var path = new Path({});

var textPath = path;
var pairtextboundswidth = [];
var mousePos = view.center / 2;
var pathHeight = mousePos.y;
var glyphTexts = [];
var xOffsets = [400];
// var str;
var str = "i want words of important movement to want the pace knowing wanting neurodiversity to question ways the people talk about autism";

initializePath();

console.log(sentence);

// var clickfunc = function(link) {
//   console.log(link);
//   var t = link.innerText || link.textContent;
//   // return t;
//   console.log(t);
//
//
//                 var checker = function(value) { [t].some(function(element)  {value.includes(element)})};
//
//     sentence = arr.filter(checker);
//    // createAlignedText(sentence, path, {fontSize: 18});
//
//    console.log(sentence)
//     palette(sentence);
// }

var createAlignedText = function(str, path, style) {
    if (str && str.length > 0 && path) {
        // create PointText object for each glyph
        // var glyphTexts = [];
        for (var i = 0; i < str.length; i++) {
            glyphTexts[i] = createPointText(str.substring(i, i+1), style);
            glyphTexts[i].justification = "center";
        }
        // for each glyph find center xOffset

        for (var i = 1; i < str.length; i++) {
            var pairText = createPointText(str.substring(i - 1, i + 1), style);
            pairText.remove();
            xOffsets[i] = xOffsets[i - 1] + pairText.bounds.width -
                glyphTexts[i - 1].bounds.width / 2 - glyphTexts[i].bounds.width / 2;
                // pairtextboundswidth.push(pairText.bounds.width);
        }
        // set point for each glyph and rotate glyph aorund the point
        for (var i = 0; i < str.length; i++) {
            var centerOffs = xOffsets[i];
            if (path.length < centerOffs) {
                if (path.closed) {
                    centerOffs = centerOffs % path.length;
                }  else {
                    centerOffs = undefined;
                }
            }
            if (centerOffs === undefined) {
                glyphTexts[i].remove();
            } else {
                var pathPoint = path.getPointAt(centerOffs);
                glyphTexts[i].point = pathPoint;
                var tan = path.getTangentAt(centerOffs);
                glyphTexts[i].rotate(tan.angle, pathPoint);
            }
        }
    }
}

// create a PointText object for a string and a style
var createPointText = function(str, style) {
    var text = new PointText();
    text.content = str;
    if (style) {
        if (style.font) text.font = style.font;
        if (style.fontFamily) text.fontFamily = style.fontFamily;
        if (style.fontSize) text.fontSize = style.fontSize;
        if (style.fontWieght) text.fontWeight = style.fontWeight;
    }
    return text;
}
//same function as createAlignedText but with only the movement of the glyphs
var moveText = function(path, style) {
        // set point for each glyph and rotate glyph aorund the point
        for (var i = 0; i < glyphTexts.length; i++) {
            var centerOffs = xOffsets[i];
            // console.log(centerOffs);
            if (path.length < centerOffs) {
                if (path.closed) {
                    centerOffs = centerOffs % path.length;
                }  else {
                    centerOffs = undefined;
                }
            }
            if (centerOffs === undefined) {
                glyphTexts[i].remove();
            } else {
                var pathPoint = path.getPointAt(centerOffs);
                glyphTexts[i].point = pathPoint;
                var tan = path.getTangentAt(centerOffs);
                // console.log(tan);
                glyphTexts[i].rotation = tan.angle;
            }
        }
}
 globals.lineTo = function(sentence){
  createAlignedText(sentence, path, {fontSize: 18});
}
// globals.lineTo(sentence);
// createAlignedText(globals.sentence, path, {fontSize: 18});
function initializePath() {
    center = view.center;
    width = view.size.width;
    height = view.size.height / 2;
    path.segments = [];
    path.add(view.bounds.bottomLeft);
    for (var i = 1; i < points; i++) {
        var point = new Point(width / points * i, center.y);
        path.add(point);
    }

    path.add(view.bounds.bottomRight);
    // path.fullySelected = true;
    // createAlignedText(sentence, path, {fontSize: 18});

}

function onFrame(event) {
    pathHeight += (center.y - mousePos.y - pathHeight) / 10;

    for (var i = 1; i < points; i++) {
        var sinSeed = event.count + (i + i % 10) * 100;
        var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
        var yPos = Math.sin(sinSeed / 100) * sinHeight + height;

        path.segments[i].point.y = yPos;

    }
    if (smooth)
        path.smooth({ type: 'continuous' });
        moveText(path);

}


function onMouseMove(event) {
    mousePos = event.point;

}



function onMouseDown(event) {
    smooth = !smooth;
    if (!smooth) {
        // If smooth has been turned off, we need to reset
        // the handles of the path:
        for (var i = 0, l = path.segments.length; i < l; i++) {
            var segment = path.segments[i];

            segment.handleIn = segment.handleOut = null;
        }
    }

}


// Reposition the path whenever the window is resized:
function onResize(event) {
    initializePath();
}