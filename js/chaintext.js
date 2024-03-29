// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
    // strokeColor: '#E4141B',
    strokeWidth: 20,
    strokeCap: 'round'
});
// var width, height, center;
// var points = 10;
// var smooth = true;
var textPath = path;
var pairtextboundswidth = [];
var mousePos = view.center / 2;
// var pathHeight = mousePos.y;
var glyphTexts = [];
var xOffsets = [0];
var str = "Snailing the tendriled paths to somewhere ";

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
    path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
    path.firstSegment.point = event.point;
    for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        var nextSegment = segment.next;
        var vector = segment.point - nextSegment.point;
        vector.length = length;
        nextSegment.point = segment.point - vector;
    }
    path.smooth({ type: 'continuous' });
    moveText(path);

}

// function onMouseDown(event) {
    // path.fullySelected = true;
    // path.strokeColor = '#e08285';
// }

// function onMouseUp(event) {
    // path.fullySelected = false;
    // path.strokeColor = '#e4141b';
// }
//textPath

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
        createAlignedText(str, path, {fontSize: 18});
        var createAlignedText = function(str, path, style) {
            if (str && str.length > 0 && path) {
                // create PointText object for each glyph
                var glyphTexts = [];
                for (var i = 0; i < str.length; i++) {
                    glyphTexts[i] = createPointText(str.substring(i, i+1), style);
                    glyphTexts[i].justification = "center";
                }
                // for each glyph find center xOffset
                var xOffsets = [0];
                for (var i = 1; i < str.length; i++) {
                    var pairText = createPointText(str.substring(i - 1, i + 1), style);
                    pairText.remove();
                    xOffsets[i] = xOffsets[i - 1] + pairText.bounds.width -
                        glyphTexts[i - 1].bounds.width / 2 - glyphTexts[i].bounds.width / 2;
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

        // Path Example
        // var curve = new Curve(new Point(50, 30),  new Point(80, 50), new Point(-100, -70), new Point(270, 320));
        // var path = new Path({segments: [curve.segment1, curve.segment2], strokeColor: 'red'});
        // pathfullySelected = true;
        // createAlignedText("I laugh at watering words", path, {fontSize: 18});
        // tool.minDistance = 10;
        // tool.maxDistance = 45;

        var path;

        function onMouseDown(event) {
          path = new Path();
          path.fillColor = {
            hue: Math.random() * 360,
            saturation: 0.5,
            brightness: 1
          };

          path.add(event.point);
        }

        function onMouseDrag(event) {
          var step = event.delta / 2;
          step.angle += 90;

          var top = event.middlePoint + step;
          var bottom = event.middlePoint - step;

          path.add(top);
          path.insert(0, bottom);
          path.smooth();

        }

        function onMouseUp(event) {
          path.add(event.point);
          path.closed = true;
          path.smooth();
          var fillText = nextItem();
          createAlignedText(fillText, path, {fontSize: 18});

        }
        //for
        var arr = ['Ball of thinking about the rugged capability places learning to be neurodiversely pacing the easy way I answer openly toward the thinking about facing the world as I am. ', 'The world as we are is pacing', 'ease in the invitation toward', "pacing open facing each  but not really facing… joining and dis-jointing", "a ball of thinking"];
        var i = 0;
        var search = document.getElementById('search');
        function nextItem() {
            i = i + 1; // increase i by one
            i = i % arr.length; // if we've gone too high, start from `0` again
            return arr[i]; // give us back the item of where we are now
        }
