/**
 * @description 全部资源列表（树形）
 */

import { initRequest } from '../../..';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = [];
// 接口地址
export const url = '/resource/listTree';

export async function fetch<T>(params = {}) {
  const request = initRequest();
  const result = await request.get<AjaxResponse<T>>(
    backEndUrl + '/resource/listTree',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
