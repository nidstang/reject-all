import { forward } from './lib/utils/forward.js';
import Lib from './lib/index.js';
import DidomiProvider from './providers/didomi.js';

var rejectAll = forward({}, Lib(document, window), 'registerProvider', 'run');

rejectAll.registerProvider(DidomiProvider);

rejectAll.run();