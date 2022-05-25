/**
 * @description 根据业务拓展字段查询角色(带分页)
 */
import * as defs from '../../baseClass';
import { initRequest } from '../../../common';
import serverConfig from '../../../server.config';

const backEndUrl = serverConfig()['authorization'];

// 初始值
export const init = new defs.authorization.PagingEntity();
// 接口地址
export const url = '/role/resource/listByBusinessValueListPagination';

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/role/resource/listByBusinessValueListPagination',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
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
