import axios from 'axios'

export const homeApi = {
    getFoodData: async() => {
      const { data } = await axios.get('/mock/foodData')
      return data
    },
    login: async(username, password) => {
      const { data } = await axios.post('https://dummyjson.com/auth/login', { username, password })
      return data
    }
}