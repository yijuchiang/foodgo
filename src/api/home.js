import axios from 'axios'

export const homeApi = {
    getFoodData: async() => {
      const { data } = await axios.get('/mock/foodData')
      return data
    },
}