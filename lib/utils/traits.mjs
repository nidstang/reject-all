export const Define = function (behaviour) {
    var instanceKeys = Object.getOwnPropertyNames(behaviour);

    return function define(object) {
        instanceKeys.forEach(function(property) {
            if (!object[property]) {
                Object.defineProperty(object, property, {
                    value: behaviour[property],
                    writable: true
                });
            } else throw new Error('illegal attempt to override ' + property + ', which already exist');
                
        });
        return object;
    };
};

export const Override = function (behaviour) {
    var instanceKeys = Object.getOwnPropertyNames(behaviour);

    return function overrides(object) {
        instanceKeys.forEach(function(property) {
            if (!!object[property]) {
                var overriddedMethodFunction = object[property];

                Object.defineProperty(object, property, {
                    value: function() {
                        return behaviour[property].apply(
                            this,
                            [].concat([].slice.call(arguments), [overriddedMethodFunction.bind(this)])
                        );
                    },
                    writable: true
                });
            } else throw new Error('attemp to override non-existant method ' + property);
                
        });
        return object;
    };
};