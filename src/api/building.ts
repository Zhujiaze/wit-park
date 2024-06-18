import request from '@/utils/request'
import type {
  EmptyObject,
  buildingListType,
  postAddbuildingType,
  postback
} from './types/buildingType'

/**
 * @param data
 * @returns
 * 获取列表
 *
 */

export const getbuildingList = (data: buildingListType) => {
  return request<EmptyObject>('/park/building', 'GET', data)
}

/***
 * 新增楼宇
 */
export const postAddbuilding = (data: postAddbuildingType) => {
  return request<postback>('/park/building', 'POST', data)
}
//修改楼宇
export const PUTEditbuilding = (data: postAddbuildingType) => {
  return request<postback>('/park/building', 'PUT', data)
}
export const DELETEEditbuilding = (data: { id: String }) => {
  return request<postback>(`/park/building/${data.id}`, 'DELETE')
}
//删除
