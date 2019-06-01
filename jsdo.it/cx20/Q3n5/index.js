
gr.registerComponent("Rotate",{
  attributes:{
    speed:
    {
      default:1,
      converter:"Number"
    }
  },
  $mount:function(){
    this.phi = 0;
  },
  $update:function(){
    this.phi += this.getAttribute("speed");
    this.node.setAttribute("rotation",this.phi + "," + this.phi + "," + this.phi);
  }
});
gr.registerNode("rotated-mesh",["Rotate"],{},"mesh");

gr.registerComponent('Rotate2', {
  attributes: {
    speed: {
      default: '1',
      converter: 'Number',
    },
  },
  $mount: function () {
    this.phi = 0;
  },
  $update: function () {
    this.phi += this.getAttribute('speed');
    this.node.setAttribute('rotation', 0 + ',' + this.phi + ',' + 0);
  },
});

gr.registerComponent("EffekseerRenderer",{
  effects:{},
  attributes:{
  },
  $awake:function(){
    this._gl = this.companion.get("gl");
    this._canvas = this.companion.get("canvasElement");
    effekseer.init(this._gl);
  },
  $mount:function(){
  },
  $update:function(){
  },
  $render:function(args){
    this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
    
    effekseer.update();
    effekseer.setProjectionMatrix(args.camera.ProjectionMatrix.rawElements);
    effekseer.setCameraMatrix(args.camera.ViewMatrix.rawElements);
    effekseer.draw();
  }
});
gr.registerNode("render-effekseer",["EffekseerRenderer"],{},"");

gr.registerComponent("EffekseerEmitter",{
  attributes:{
    id: {converter: "String", default: null},
    src: {converter: "String", default: null},
    play: {converter: "Boolean", default: null},
  },
  $mount:function() {
    this.counter = 0;
    id = this.getAttribute("id");
    src = this.getAttribute("src");
    if (src) {
      this.effect = effekseer.loadEffect(src);
    }
  },
  $update:function() {
    this.counter++;
    play = this.getAttribute("play");
    if (play) {
      effekseer.play(this.effect);
      this.setAttribute("play", false);
    }
  },
});
gr.registerNode("efk",["EffekseerEmitter"],{},"");

var Base64 = {
  encode: function(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
};

var shader = document.getElementById("shader").textContent;
var encodeString = Base64.encode(shader);
var ASSETS = {};
ASSETS['index.sort'] = "data:;base64," + encodeString; // シェーダを DataURI として格納

gr(function() {
  var $$ = gr('#canvas1');
  $$('goml').addChildByName('import-material', {typeName:'lambert', src:ASSETS['index.sort']});
  $$('#group').addComponent('Rotate2');


  setInterval(function() {
    $$('#Laser01').setAttribute('play', false);
    $$('#Laser02').setAttribute('play', false);
    $$('#Simple_Ring_Shape1').setAttribute('play', false);
    $$('#block').setAttribute('play', false);

    var id = Math.floor(Math.random() * 4);
    switch (id) {
      case 0:
        $$('#Laser01').setAttribute('play', true);
        break;
      case 1:
        $$('#Laser02').setAttribute('play', true);
        break;
      case 2:
        $$('#Simple_Ring_Shape1').setAttribute('play', true);
        break;
      case 3:
        $$('#block').setAttribute('play', true);
        break;
    }
  }, 1500);    
});
