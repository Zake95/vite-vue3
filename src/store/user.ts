import { defineStore } from 'pinia'

export interface IUserInfoProps {
  name?: string
  age?: number
  contactInfo?: IContactInfo
}
export interface IUserInfoParams {
  name?: string
  age?: number
  contactInfo?: IContactInfo
}
export interface IContactInfo {
  phone?: string
  address?: string
}
export interface IUserState {
  userInfo: IUserInfoProps | null
}

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    userInfo: {
      name: 'zake',
      age: 28,
      contactInfo: {
        phone: '18062901236',
        address: '湖北武汉'
      }
    }
  }),

  getters: {
    dobuleAge: (state) => {
      if (state?.userInfo?.age) return state?.userInfo?.age * 2
      return 0
    }
  },

  actions: {
    setUserInfo(userInfo: IUserInfoParams = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    }
  },

  //数据持久化，默认存在sessionStorage中，可在strategies中修改Key值和缓存类型
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'ydy_user',
        storage: localStorage
      }
    ]
  }
})
