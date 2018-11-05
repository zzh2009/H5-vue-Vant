import * as mutationTypes from './mutationTypes'
export default {
    [mutationTypes.BBS_LIST_DATA] (state, payload){
        state.bbsList= payload;
    },
}
