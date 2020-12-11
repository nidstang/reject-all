// const test = require('tape');
// const Lib = require('../lib/index.js').default;
// const forward = require('../lib/utils/forward.js');
// const { Override } = require('../lib/utils/traits.js');
import test from 'tape';
import Lib from '../lib/index.mjs';
import forward from '../lib/utils/forward.mjs';
import { Override } from '../lib/utils/traits.mjs';

const documentMock = {
    addEventListener(_, cb) {
        cb();
    }
};

const windowMock = {};

const providerMock = (t) => ({
    isThere(window) {
        t.same(window, windowMock, 'Window param must not be undefined');
        return true;
    },

    run() {
        t.pass('provider.run must be called');
    }
});

test('Lib/Index.js tests', t => {
    {
        const rejectAll = forward({}, Lib(documentMock, windowMock), 'registerProvider', 'run');
        rejectAll.registerProvider(providerMock(t));
        rejectAll.run();
    }

    t.end();

});