



AFRAME.registerComponent('auto-init-vr', {

    init: function () {

        var scene = this;

        var hash = location.hash;

        scene.el.addEventListener('loaded', function () {

        if (hash === '#vrmode') {


            setTimeout(function(){
                console.log('Automatically entering VR...');
                scene.el.sceneEl.enterVR();
            },100);


        }

        })

    }
});





