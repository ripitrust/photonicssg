AFRAME.registerComponent('route', {

    schema: {

        href: {type: "string"},
        hash: {type: "string"}

    },

    init: function() {

            var href = this.data.href;
            var el = this.el;


            var hash = (location.hash === '#vrmode'? 'vrmode': null);

             el.addEventListener("click", function () {

                location.assign( "/" + href + "#" + hash );


             });

    },



});