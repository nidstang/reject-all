import compose from './utils/compose.mjs';
import Provider from './specs/Provider.mjs';
import { Override } from './utils/traits.mjs';

export default (document, window) => ({
    providers: [],
    registerProvider(provider) {
        this.providers.push(compose(Override(provider), Provider)({}));
    },

    run() {
        document.addEventListener('ready', () => {
            const provider = this.providers
                .filter(provider => provider.isThere(window));

            provider.map(p => p.run());
        });
    }
});