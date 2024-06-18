//菜单类型
export type MenuDataType = {
  /**
   * 报文code:正常返回1000其他返回错误码
   */
  code?: number
  /**
   * 报文数据
   */
  data?: Datum[]
  /**
   * 报文信息
   */
  msg?: string
  [property: string]: any
}

export type Datum =
  | {
      /**
       * 包含子路由标志，true表示嵌套子路由，false表示没有
       */
      alwaysShow?: boolean
      /**
       * 子路由
       */
      children?: DatumChild[]
      /**
       * 路由组件地址
       */
      component: string
      /**
       * 路由图标，只有目录有图标，#表示没有图标
       */
      icon: string
      /**
       * 路由id
       */
      id: number
      /**
       * 路由名称
       */
      name: string
      /**
       * 路由显示信息
       */
      title: string
    }
  | DatumChild

export type DatumChild = {
  /**
   * 包含子路由标志，true表示嵌套子路由，false表示没有
   */
  alwaysShow?: boolean
  /**
   * 按钮
   */
  children?: ChildChild[]
  /**
   * 组件路径
   */
  component: string
  /**
   * 路由图标，只有目录有图标，#表示没有图标
   */
  icon: string
  /**
   * 路由名称
   */
  name: string
  /**
   * 路由显示信息
   */
  title: string
}

export type ChildChild = {
  /**
   * 组件路径
   */
  component: string
  /**
   * 路由图标，只有目录有图标，#表示没有图标
   */
  icon: string
  /**
   * 路由名称
   */
  name: string
  /**
   * 路由地址
   */
  path: string
  /**
   * 路由显示信息
   */
  title: string
}

//用户类型
/**
 * empty object
 */
export type EmptyObject = {
  /**
   * 报文code:正常返回1000其他返回错误码
   */
  code: number
  data: Data
  /**
   * 报文提示信息
   */
  msg: string
  [property: string]: any
}

export type Data = {
  /**
   * 主键
   */
  id: number
  menus: string[]
  /**
   * 员工姓名
   */
  name: string
  /**
   * 用户权限集合
   */
  permissions: string[]
  /**
   * 用户的角色id
   */
  roleId: number
  /**
   * 用户角色名称
   */
  roleName: string
  [property: string]: any
}
