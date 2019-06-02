versionResolve.then(()=>{
var canvas;
var ctx;
var ballSize = 10;

var alpha = 0;
var beta = 0;
var gamma = 0;
var minX = 0;
var minY = 0;
var maxX = 0;
var maxY = 0;
var posX = 0;
var posY = 0;
var cnt = 0;

var Vector2 = gr.lib.math.Vector2;
var Vector3 = gr.lib.math.Vector3;
var Color3 = gr.lib.math.Color3;
var renderCanvas;
var mesh;

function reset() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    maxX = width  - ballSize;
    maxY = height - ballSize;
    minX = ballSize;
    minY = ballSize;
    posX = maxX / 2;
    posY = maxY / 2;
}

function handleOrientation(event) {
    alpha = event.alpha;            //    0 から 360 の範囲で角度を示す（デバイスの回転）
    beta  = event.beta / 180 * 20;  // -180 から 180 の範囲で角度を示す（前後の傾き）
    gamma = event.gamma / 90 * 20;  //  -90 から  90 の範囲で角度を示す（左右の傾き）
    
    posX += gamma;
    posY += beta;
/*
    if ( posX >= maxX ) { posX = maxX; } 
    if ( posX <= minX ) { posX = minX; }
    if ( posY >= maxY ) { posY = maxY; }
    if ( posY <= minY ) { posY = minY; }
*/    
    var mouse = new Vector2(posX/maxX, posY/maxY);
    renderCanvas.setAttribute('mouse', mouse);
}

function onmousemove(event) {
    posX = event.clientX;
    posY = event.clientY;
    if ( posX >= maxX ) { posX = maxX; } 
    if ( posX <= minX ) { posX = minX; }
    if ( posY >= maxY ) { posY = maxY; }
    if ( posY <= minY ) { posY = minY; }
    
    var mouse = new Vector2(posX/maxX, posY/maxY);
    renderCanvas.setAttribute('mouse', mouse);
}

var getDevice = function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
};

gr(function() {
    reset();

    renderCanvas = gr('#canvas')('#renderCanvas');

    if (getDevice() == 'sp') {
        window.addEventListener('deviceorientation', handleOrientation);
    }
    else {
        window.addEventListener('mousemove', onmousemove);
    }
});
});
