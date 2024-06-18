export type buildingListType = {
  /**
   * 楼宇名称模糊 查询
   */
  name?: string
  /**
   * 当前页
   */
  page: string
  /**
   * 每页大小
   */
  pageSize: string
}

/**
 * empty object
 */
export type EmptyObject = {
  /**
   * 报文code:正常返回1000其他返回错误码
   */
  code: number
  /**
   * 报文数据
   */
  data: Data
  /**
   * 报文信息
   */
  msg: string
  [property: string]: any
}

/**
 * 报文数据
 */
export type Data = {
  /**
   * 分页数据
   */
  rows: Row[]
  /**
   * 总条数
   */
  total: number
  [property: string]: any
}

export type Row = {
  /**
   * 在管面积
   */
  area: number
  /**
   * 是否是演示数据 1是 0 不是 ，演示数据不可以删除和编辑
   */
  demoFlag: number
  /**
   * 层数
   */
  floors: number
  /**
   * 主键
   */
  id?: number
  /**
   * 楼宇名称
   */
  name: string
  /**
   * 物业费单价
   */
  propertyFeePrice: number
  /**
   * 状态0空置中 1租赁中
   */
  status: number
}
//新增body
/**
 * empty object
 */
export type postAddbuildingType = {
  /**
   * 在管面积
   */
  area: number
  /**
   * 层数
   */
  floors: number
  /**
   * 楼宇名称
   */
  name: string
  /**
   * 物业费单价
   */
  propertyFeePrice: number
  id?: number
}
//新增返回
/**
 * empty object
 */
export type postback = {
  /**
   * 报文code:正常返回1000其他返回错误码
   */
  code: number
  /**
   * 报文信息
   */
  msg: string
}
