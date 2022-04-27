export default {
    state: {
        stateCount: 10000,
    },
    getters: {
        gettersCount(state) {
            return state.stateCount + 100;
        },
    },
    mutations: {
        setCount(state) {
            state.stateCount++;
        },
    },
    actions: {
        // asyncSetCount({ commit }, data) {
        //     commit('setCount', data);
        // },
        asyncSetCount({ commit }, data) {
            return new Promise(resolve => {
                commit('setCount', data);
                resolve();
            });
        },
    }
};
