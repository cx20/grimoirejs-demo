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
    // �I�C���[�p�ɂ���]
    //this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + 0);
    
    // �N�H�[�^�j�I���ɂ���]
    var axis = new Vector3(1, 1, 1);
    var angle = this.phi * Math.PI / 180;
    var q = Quaternion.angleAxis(angle, axis);
    this.node.setAttribute('rotation', q.normalize());
  },
});

gr(function() {
  var $$ = gr('#canvas');
});
