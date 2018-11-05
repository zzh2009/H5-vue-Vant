import * as mutationTypes from './mutationTypes';
import * as actionTypes from './actionTypes';
import * as https from './http';
import * as common from '@/common/common';

const { handleCallBack } = common;

export default {
    // 获取车辆列表
    [actionTypes.BBS_LIST_DATA]({ commit }, params = {}) {
        return https.getBbsList(params).then((res) => {
            if (handleCallBack(res)) {
                console.log(res);
                commit(mutationTypes.BBS_LIST_DATA, res.data.data_list);
            }
        })
    }
}
