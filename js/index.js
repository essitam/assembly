$(function(){
    //variable for rotation degree of the letters
    var rotate = -45;
    var rotatedangling = 90;
    $("#slanting a").lettering('lines').children("span").css({'display':'inline-block', '-webkit-transform':'rotate('+rotate+'deg)'});

     // jQuery methods go here...
     $(document).mousemove(function(event){
       //convert the range of the mouse X to -90 , 90 slant
       //words only
        rotate = convertToRange(event.pageX,  [0, $( document ).width()], [120, 0]);
        console.log(rotate);
        $("#slanting a").lettering('lines').children("span").css({'display':'inline-block', '-webkit-transform':'rotate('+rotate+'deg)'});
        //sentences
        // rotatedangling = convertToRange(event.pageX,  [0, $( document ).width()], [50, 150]);
        // $(".dangling").lettering('lines').children("span").css({ 'display':'inline-block', '-webkit-transform':'rotate('+rotatedangling+'deg)'});
      });

  //function to convert range
      function convertToRange(value, srcRange, dstRange){
        // value is outside source range return
        if (value < srcRange[0] || value > srcRange[1]){
          return NaN;
        }
        var srcMax = srcRange[1] - srcRange[0],
            dstMax = dstRange[1] - dstRange[0],
            adjValue = value - srcRange[0];
        return (adjValue * dstMax / srcMax) + dstRange[0];

      }


  });
