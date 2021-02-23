import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
        key: 'feel-good',
        storage: window.localStorage,
        // reducer: state => ({ global: state.global }),
    }).plugin(store);
  });
};