export default (receiver, metaObject, ...methods) => {
    methods.forEach(function (methodName) {
        receiver[methodName] = (...args) => metaObject[methodName](...args);
    });

    return receiver;
};