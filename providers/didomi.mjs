export default {
    isThere(window) {
        return !!window.Didomi;
    },

    run() {
        Didomi.setUserDisagreeToAll();
        Didomi.preferences.hide();
    }
};