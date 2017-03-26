AFRAME.registerComponent('back', {

    init: function() {

        var history = window.history;

        var el = this.el;

         el.addEventListener("click", function () {

            history.back();
         });
    },
});