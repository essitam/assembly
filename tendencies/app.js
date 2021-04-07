
const mapContainer = document.querySelector('.map-container');
const map = document.querySelector('.map');
const mapWidth = map.clientWidth;
const mapHeight = map.clientHeight;

const zoomBtn = document.querySelector('.zoom-button');

const indexBtn = document.querySelector('.index-button');

const index = document.querySelector('.index');

const pins = document.querySelectorAll('.pin');
const captions = document.querySelectorAll('.caption');

const typeUl = document.querySelector('.type-ul')

const solidBtn = document.querySelector('.solid-button');
const softBtn = document.querySelector('.soft-button');
const denseBtn = document.querySelector('.dense-button');
const openBtn = document.querySelector('.open-button');
const dynamicBtn = document.querySelector('.dynamic-button');
const staticBtn = document.querySelector('.static-button');

const solidBtnMobile = document.querySelector('.solid-button-mobile');
const softBtnMobile = document.querySelector('.soft-button-mobile');
const denseBtnMobile = document.querySelector('.dense-button-mobile');
const openBtnMobile = document.querySelector('.open-button-mobile');
const dynamicBtnMobile = document.querySelector('.dynamic-button-mobile');
const staticBtnMobile = document.querySelector('.static-button-mobile');

const solidPath = document.querySelector('.solid-path');
const softPath = document.querySelector('.soft-path');
const densePath = document.querySelector('.dense-path');
const openPath = document.querySelector('.open-path');
const dynamicPath = document.querySelector('.dynamic-path');
const staticPath = document.querySelector('.static-path');

const solidPathMobile = document.querySelector('.solid-path-mobile');
const softPathMobile = document.querySelector('.soft-path-mobile');
const densePathMobile = document.querySelector('.dense-path-mobile');
const openPathMobile = document.querySelector('.open-path-mobile');
const dynamicPathMobile = document.querySelector('.dynamic-path-mobile');
const staticPathMobile = document.querySelector('.static-path-mobile');

let solidActive = false;
let softActive = false;
let denseActive = false;
let openActive = false;
let dynamicActive = false;
let staticActive = false;

let solidMobileActive = false;
let softMobileActive = false;
let denseMobileActive = false;
let openMobileActive = false;
let dynamicMobileActive = false;
let staticMobileActive = false;

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


var pathDataDynamic;
var pathDynamic;

var pathDataOpen;
var pathOpen;

var pathDense;

var pathDataSoft;
var pathSoft;

var pathSolid;

var pathDataStatic;
var pathStatic;

const formStrokeWidth = 1.5;
const formStrokeWidthZoomedOut = 2.5;

const gridStrokeWidthZoomedOut = 1.2;
const gridStrokeWidth = .5;

const linesArr = [];
const strokesArr = [];

const zoom = {

    min: 0.5,
    max: 1.0,
    scale: 1,
    stepScale: 0.3,
};

const randomX = -1*(getRandomArbitrary(0,4000 - vw));
const randomY = -1*(getRandomArbitrary(0,2500 - vh));



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

$(document).ready(function () {

    Draggable.create('.map', {
        bounds: mapContainer,
        edgeResistance:1,
        type:"x,y",
    });

    const windowHeight = window.innerHeight;

    $('.mobile-wrapper').css('height', windowHeight)

    gsap.set(map, { x: randomX, y: randomY, force3D: true, transformOrigin: "left top" });

    if(!$('body').hasClass('mobile')){
        initCanvas();
    }



    map.addEventListener("click", showCoordinates);
    zoomBtn.addEventListener("click", toggleZoom);
    indexBtn.addEventListener("click", showIndex);

    window.addEventListener('resize', () => {
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    });

    pins.forEach(pin => {
        pin.addEventListener('mouseenter', e => {
            e.currentTarget.nextSibling.nextSibling.style.display = "block";
        });
        pin.addEventListener('mouseleave', e => {
            e.currentTarget.nextSibling.nextSibling.style.display = "none";
        })
    });


    $('.index-button-mobile').click(() => {
        window.location.replace("https://tendencies2020.de/about");
    });

    dynamicBtn.addEventListener("click", () => {
        toggleForm("dynamic");
    }, false
    );

    solidBtn.addEventListener("click", () => {
        toggleForm("solid");
    }, false
    );
    softBtn.addEventListener("click", () => {
        toggleForm("soft");
    }, false
    );
    denseBtn.addEventListener("click", () => {
        toggleForm("dense");
    }, false
    );
    openBtn.addEventListener("click", () => {
        toggleForm("open");
    }, false
    );
    staticBtn.addEventListener("click", () => {
        toggleForm("static");
    }, false
    );




    dynamicBtnMobile.addEventListener("click", () => {
        toggleFormMobile("dynamic");
    }, false
    );

    solidBtnMobile.addEventListener("click", () => {
        toggleFormMobile("solid");
    }, false
    );
    softBtnMobile.addEventListener("click", () => {
        toggleFormMobile("soft");
    }, false
    );
    denseBtnMobile.addEventListener("click", () => {
        toggleFormMobile("dense");
    }, false
    );
    openBtnMobile.addEventListener("click", () => {
        toggleFormMobile("open");
    }, false
    );
    staticBtnMobile.addEventListener("click", () => {
        toggleFormMobile("static");
    }, false
    );


    const tendenciesTypo = document.querySelector('.typo-tendencies-fixed');
    const hgbOverlay = document.querySelector('.hgb-overlay');

    setTimeout(() => {
        gsap.to(tendenciesTypo, {opacity: 0, duration: 0.4});
        gsap.to(hgbOverlay, {opacity: 1, duration: 0.4, delay: 0.4});
    }, 1500)
});

function initCanvas() {
    var canvas = document.querySelector('.map-canvas');
    paper.install(window);
    paper.setup(canvas);

    var drawGridLines = function(num_rectangles_wide, num_rectangles_tall, boundingRect) {
        var width_per_rectangle = boundingRect.width / num_rectangles_wide;
        var height_per_rectangle = boundingRect.height / num_rectangles_tall;
        for (var i = 0; i <= num_rectangles_wide; i++) {
            var xPos = boundingRect.left + i * width_per_rectangle;
            var topPoint = new paper.Point(xPos, boundingRect.top);
            var bottomPoint = new paper.Point(xPos, boundingRect.bottom);
            var aLine = new paper.Path.Line(topPoint, bottomPoint);
            aLine.strokeWidth = .5;
            aLine.strokeColor = 'black';
            aLine.blendMode = 'overlay';
            linesArr.push(aLine);
        }
        for (var i = 0; i <= num_rectangles_tall; i++) {
            var yPos = boundingRect.top + i * height_per_rectangle;
            var leftPoint = new paper.Point(boundingRect.left, yPos);
            var rightPoint = new paper.Point(boundingRect.right, yPos);
            var aLine = new paper.Path.Line(leftPoint, rightPoint);
            aLine.strokeWidth = .5;
            aLine.strokeColor = 'black';
            aLine.blendMode = 'overlay';
            linesArr.push(aLine);
        }
    }

    pathDense = new paper.Path.Circle(new paper.Point(1951.6, 1249.6), 1003.4);
    pathDenseStroke = new paper.Path.Circle(new paper.Point(1951.6, 1249.6), 1003.4);
    strokesArr.push(pathDenseStroke);

    pathDataDynamic = 'M3959.7,574.9c-299.1,54.8-299,542.7-299.5,772.5c-1,460.5-129.3,951.9-343.7,1119.8c196.2-453.1,3.6-747.4-218-885.5c-156.2-105.4-337.3,59.8,29.1,363.4c-188.9-138.1-583.5-495.1-952-481.5c-570.1,21.1-1283.9,1205-2134.2,907C888,2337.9-865.5-443.5,1405.5,602.5c-1555.5-355.5-893.8,836.2-133,566C2908.7,526,3326.3,502.5,3959.7,574.9z';
    pathDynamic = new paper.Path(pathDataDynamic);
    pathDynamicStroke = new paper.Path(pathDataDynamic);
    strokesArr.push(pathDynamicStroke);

    pathDataOpen = 'M3607.8,2359.5c527.8-345.4-334.9-1570,192.5-2343.5C3170.1,474.9,2567-14.7,1951.6,297.5c237.7,52.1,707.4,132,698.3,352.6c-54.5,754.1-801.7,1069.8-995.3,1604.2c193.8-409.1,858.4-29.4,1085.9,56.9C3122.7,2490.5,3474.3,2440.7,3607.8,2359.5z'
    pathOpen = new paper.Path(pathDataOpen);
    pathOpenStroke = new paper.Path(pathDataOpen);
    strokesArr.push(pathOpenStroke);

    pathDataSoft = 'M2707.5,348.5c366-25,665.5,159.5,518.5,282.5c-65.8,55-140.3,102.2-426.5-17.5c-128.1-53.6-186.7,7.7-203,52c-35,95,60.1,395.8,199.6,316.2c181.2-126.5,224.1,41.8,173.7,154.7c-42.2,96.2-86.2,147.9-62.3,225.9c11.1,36.3,73.5,234.4,23.4,298.8c-46,59.1-200.6-195.3-371.3-198.9c-102.4-2.2-141.7,152.6-40.1,545.7c155.4,601-599.4,43-855.1,292.1c-52.7,51.4-122.1,206.1-122.6,150.2c-0.6-61.3,93-370.9,12.7-501c-50.5-81.8-297-237-497.9,148.7c-74,142-52.1,232.8-74,192.8c-82.7-151.5,303.2-595.6,277.5-729.2c-18.8-97.8-18.6-183.7-203.4-153.9c-87,14-347,107-436,21c-216.6-209.3,858.4-404,371.5-791.1c-274.7-238.1,279.7-336.5,797-260.2C2137.6,428.6,2499.3,362.7,2707.5,348.5z';
    pathSoft = new paper.Path(pathDataSoft);
    pathSoftStroke = new paper.Path(pathDataSoft);
    strokesArr.push(pathSoftStroke);

    pathDataSolid = 'M3662.2,1375H307.6c-96.9,0-175.5,78.6-175.5,175.5v757.4c0,96.9,78.6,175.5,175.5,175.5h3354.5c96.9,0,175.5-78.6,175.5-175.5v-757.4C3837.6,1453.6,3759.1,1375,3662.2,1375z'
    pathSolid = new paper.Path(pathDataSolid);
    pathSolidStroke = new paper.Path(pathDataSolid);
    strokesArr.push(pathSolidStroke);

    pathDataStatic = 'M3025.2,1475.4l-383.4,10.5c-467,56.5-401.8,424.6-458.3,891.6l-4.1,33.6c-5,41.2-39.9,72.1-81.4,72.1h-431.7c-41.5,0-76.4-31-81.4-72.1l-4.1-33.6c-56.5-467-1.2-835.1-468.3-891.6l-383.4-10.5c-46.7-1.3-82.9-41.2-79.5-87.8l22.2-308.9c2.7-37.3,30.2-68.1,66.9-74.7c443.3-80.1,848.1-436,902.1-882.3l1.6-13.6c6.4-52.6,51-92.1,104-92.1h261.3c53,0,97.6,39.6,104,92.1l1.6,13.6c54,446.2,458.8,802.1,902.1,882.3c36.8,6.6,64.3,37.5,66.9,74.7l22.2,308.9C3108,1434.2,3071.8,1474.2,3025.2,1475.4z';
    pathStatic = new paper.Path(pathDataStatic);
    pathStaticStroke = new paper.Path(pathDataStatic);
    strokesArr.push(pathStaticStroke);

    drawGridLines(15,9.375, paper.view.bounds);

    pathDynamic.opacity = 0;
    pathDynamic.fillColor = '#F9BCBC';
    pathDynamic.blendMode = 'multiply';
    pathDynamicStroke.strokeColor = 'black';

    pathOpen.fillColor = '#FFD1A6';
    pathOpen.opacity = 0;
    pathOpen.blendMode = 'multiply';
    pathOpenStroke.strokeColor = 'black';

    pathDense.fillColor = '#B1C7F6';
    pathDense.opacity = 0;
    pathDense.blendMode = 'multiply';
    pathDenseStroke.strokeColor = 'black';

    pathSoft.fillColor = '#CEFFD2';
    pathSoft.opacity = 0;
    pathSoft.blendMode = 'multiply';
    pathSoftStroke.strokeColor = 'black';

    pathSolid.fillColor = '#FCFFBD';
    pathSolid.opacity = 0;
    pathSolid.blendMode = 'multiply';
    pathSolidStroke.strokeColor = 'black';

    pathStatic.fillColor = '#FFA2FF';
    pathStatic.opacity = 0;
    pathStatic.blendMode = 'multiply';
    pathStaticStroke.strokeColor = 'black';

    pathSolidStroke.strokeWidth = formStrokeWidth;
    pathSoftStroke.strokeWidth = formStrokeWidth;
    pathDenseStroke.strokeWidth = formStrokeWidth;
    pathOpenStroke.strokeWidth = formStrokeWidth;
    pathDynamicStroke.strokeWidth = formStrokeWidth;
    pathStaticStroke.strokeWidth = formStrokeWidth;

    paper.view.draw();


}

function showIndex() {
    gsap.to(index, {x: 0});
    gsap.to(indexBtn, {x: 0});
    gsap.to('.index-button-arrow', {x: '-97vw'});
}

function toggleCanvasForm() {

    gsap.to(pathOpen, {opacity: 1, duration: .5});
    gsap.to(pathDense, {opacity: 1, duration: .5});
    gsap.to(pathSoft, {opacity: 1, duration: .5});
    gsap.to(pathSolid, {opacity: 1, duration: .5});
}

function toggleForm(form) {
    switch(form){

        case "solid":
            if(!solidActive){
                gsap.to(pathSolid, {opacity: 1, duration: .5});
                solidBtn.classList.add("active");
                solidActive = true;
            } else {
                gsap.to(pathSolid, {opacity: 0, duration: .5});
                solidBtn.classList.remove("active");
                solidActive = false;
            }
        break;
        case "soft":
            if(!softActive){
                gsap.to(pathSoft, {opacity: 1, duration: .5});
                softBtn.classList.add("active");
                softActive = true;
            } else {
                gsap.to(pathSoft, {opacity: 0, duration: .5});
                softBtn.classList.remove("active");
                softActive = false;
            }
        break;
        case "dense":
            if(!denseActive){
                gsap.to(pathDense, {opacity: 1, duration: .5});
                denseBtn.classList.add("active");
                denseActive = true;
            } else {
                gsap.to(pathDense, {opacity: 0, duration: .5});
                denseBtn.classList.remove("active");
                denseActive = false;
            }
        break;
        case "open":
            if(!openActive){
                gsap.to(pathOpen, {opacity: 1, duration: .5});
                openBtn.classList.add("active");
                openActive = true;
            } else {
                gsap.to(pathOpen, {opacity: 0, duration: .5});
                openBtn.classList.remove("active");
                openActive = false;
            }
        break;
        case "dynamic":
            if(!dynamicActive){
                dynamicBtn.classList.add("active");
                gsap.to(pathDynamic, {opacity: 1, duration: .5});
                dynamicActive = true;
            } else {
                dynamicBtn.classList.remove("active");
                gsap.to(pathDynamic, {opacity: 0, duration: .5});
                dynamicActive = false;
            }
        break;
        case "static":
            if(!staticActive){
                gsap.to(pathStatic, {opacity: 1, duration: .5});
                staticBtn.classList.add("active");
                staticActive = true;
            } else {
                gsap.to(pathStatic, {opacity: 0, duration: .5});
                staticBtn.classList.remove("active");
                staticActive = false;
            }
        break;
    }
}

function toggleFormMobile(form) {
    switch(form){

        case "solid":
            if(!solidMobileActive){
                gsap.to(solidPathMobile, {"fill-opacity": 1, duration: .5});
                solidBtnMobile.classList.add("active");
                solidMobileActive = true;
            } else {
                gsap.to(solidPathMobile, {"fill-opacity": 0, duration: .5});
                solidBtnMobile.classList.remove("active");
                solidMobileActive = false;
            }
        break;
        case "soft":
            if(!softMobileActive){
                gsap.to(softPathMobile, {"fill-opacity": 1, duration: .5});
                softBtnMobile.classList.add("active");
                softMobileActive = true;
            } else {
                gsap.to(softPathMobile, {"fill-opacity": 0, duration: .5});
                softBtnMobile.classList.remove("active");
                softMobileActive = false;
            }
        break;
        case "dense":
            if(!denseMobileActive){
                gsap.to(densePathMobile, {"fill-opacity": 1, duration: .5});
                denseBtnMobile.classList.add("active");
                denseMobileActive = true;
            } else {
                gsap.to(densePathMobile, {"fill-opacity": 0, duration: .5});
                denseBtnMobile.classList.remove("active");
                denseMobileActive = false;
            }
        break;
        case "open":
            if(!openMobileActive){
                gsap.to(openPathMobile, {"fill-opacity": 1, duration: .5});
                openBtnMobile.classList.add("active");
                openMobileActive = true;
            } else {
                gsap.to(openPathMobile, {"fill-opacity": 0, duration: .5});
                openBtnMobile.classList.remove("active");
                openMobileActive = false;
            }
        break;
        case "dynamic":
            if(!dynamicMobileActive){
                gsap.to(dynamicPathMobile, {"fill-opacity": 1, duration: .5});
                dynamicBtnMobile.classList.add("active");
                dynamicMobileActive = true;
            } else {
                gsap.to(dynamicPathMobile, {"fill-opacity": 0, duration: .5});
                dynamicBtnMobile.classList.remove("active");
                dynamicMobileActive = false;
            }
        break;
        case "static":
            if(!staticMobileActive){
                gsap.to(staticPathMobile, {"fill-opacity": 1, duration: .5});
                staticBtnMobile.classList.add("active");
                staticMobileActive = true;
            } else {
                gsap.to(staticPathMobile, {"fill-opacity": 0, duration: .5});
                staticBtnMobile.classList.remove("active");
                staticMobileActive = false;
            }
        break;
    }
}

function getTransform(element) {
    const values = element.style.transform.split(/\w+\(|\);?/);
    const transform = values[1].split(/,\s?/g).map(parseFloat);

    return {
      x: transform[0],
      y: transform[1],
      z: transform[2]
    };
}

function toggleZoom() {
    if(!map.classList.contains('zoomedOut')){
        let zoomScale = 1.0;



        if(vw > vh * 1.5) {
            while(mapHeight*zoomScale > vh){
                zoomScale -= 0.0001;
            }

            const left = (vw - mapWidth*zoomScale) / 2;
            console.log(left);

            gsap.set(map, {
                scale: zoomScale,
                x: left - vw*0.016,
                y: 0,
            })

        } else {
            while(mapWidth*zoomScale > vw && mapHeight*zoomScale > vh){
                zoomScale -= 0.0001;
            }

            gsap.set(map, {
                scale: zoomScale,
                x: 0,
                y: 0,
            })
        }




        zoomBtn.children[0].src = "assets/img/plus.svg";
        map.classList.add('zoomedOut');
        captions.forEach(element => {
            element.classList.add('caption-zoomedOut');
        });

        for(let i = 0; i < linesArr.length; i++) {
            linesArr[i].strokeWidth = gridStrokeWidthZoomedOut;
        }
        for(let i = 0; i < strokesArr.length; i++) {
            strokesArr[i].strokeWidth = gridStrokeWidthZoomedOut;
        }

        pathSolidStroke.strokeWidth = formStrokeWidthZoomedOut;
        pathSoftStroke.strokeWidth = formStrokeWidthZoomedOut;
        pathDenseStroke.strokeWidth = formStrokeWidthZoomedOut;
        pathOpenStroke.strokeWidth = formStrokeWidthZoomedOut;
        pathDynamicStroke.strokeWidth = formStrokeWidthZoomedOut;
        pathStaticStroke.strokeWidth = formStrokeWidthZoomedOut;

    } else {
        gsap.set(map, {
            scale: 1.0,
            x: -1190,
            y: -715,
        })
        zoomBtn.children[0].src = "assets/img/minus.svg";
        map.classList.remove('zoomedOut');
        captions.forEach(element => {
            element.classList.remove('caption-zoomedOut');
        });

        for(let i = 0; i < linesArr.length; i++) {
            linesArr[i].strokeWidth = gridStrokeWidth;
        }
        for(let i = 0; i < strokesArr.length; i++) {
            strokesArr[i].strokeWidth = gridStrokeWidth;
        }

        pathSolidStroke.strokeWidth = formStrokeWidth;
        pathSoftStroke.strokeWidth = formStrokeWidth;
        pathDenseStroke.strokeWidth = formStrokeWidth;
        pathOpenStroke.strokeWidth = formStrokeWidth;
        pathDynamicStroke.strokeWidth = formStrokeWidth;
        pathStaticStroke.strokeWidth = formStrokeWidth;
    }

}


function showCoordinates(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = x/mapWidth * 100;
    const yPercent = y/mapHeight * 100;

    // console.log(xPercent.toFixed(2));
    // console.log(yPercent.toFixed(2));

    coordinates = {
        x: xPercent.toFixed(2) + "%",
        y: yPercent.toFixed(2) + "%",
    }
    console.log(event.target);
    console.table(coordinates);
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function clamp(value, min, max) {
    return value < min ? min : (value > max ? max : value);
}
