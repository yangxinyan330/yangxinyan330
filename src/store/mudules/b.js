export default {
    state: {
        stateText: 'hello',
    },
    getters: {
        gettersText(state) {
            return state.stateText;
        },
    },
    mutations: {
        setText(state) {
            state.stateText += ' world';
        },
    },
    actions: {
        // asyncSetText({ commit }, data) {
        //     commit('setText', data);
        // },
        asyncSetText({ commit }, data) {
            return new Promise(resolve => {
                commit('setText', data);
                resolve();
            });
        },
    }
};
