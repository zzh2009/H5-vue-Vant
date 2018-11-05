import fetch from '@/common/fetch';
import {baseUrl} from '@/common/const'

//1. 获取商品列表
export const getBbsList= ()  => {
    return fetch.get(baseUrl + '/bbs?page=0')
};