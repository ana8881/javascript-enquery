(function(window) {
    // 'use strict'

    var enQuery = function(id) {
        return new Q(id);
    };
    var Q = function(id) {
        this.getAttributes = function() {
            var element = document.getElementById(id);
            var attrs = element.attributes;
            var output = "Attributes: " + '\n';
            for (var i = attrs.length - 1; i >= 0; i--) {
                output += attrs[i].name + " -> " + attrs[i].value + '\n';
            }
            output += '\n';
            console.log(output);
        };
        this.attr = function(attribute) {
            var element = document.getElementById(id);
            var output = "Attribute value: " + element.getAttribute(attribute);
            console.log(output);
        };
        this.getTagName = function() {
            var element = document.getElementById(id);
            var output = "Tag name: " + element.tagName;
            console.log(output);
        };
        return this;
    };
    if (!window.enQuery) {
        window.enQuery = enQuery;
    }

})(window);