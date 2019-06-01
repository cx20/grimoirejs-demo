var Vector3 = gr.lib.math.Vector3;
var Quaternion = gr.lib.math.Quaternion;

gr.registerComponent('Rotate', {
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
    // オイラー角による回転
    //this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + 0);
    
    // クォータニオンによる回転
    var axis = new Vector3(1, 1, 1);
    var angle = this.phi * Math.PI / 180;
    var q = Quaternion.angleAxis(angle, axis);
    this.node.setAttribute('rotation', q.normalize());
  },
});

gr(function() {
  var $$ = gr('#canvas');
});
