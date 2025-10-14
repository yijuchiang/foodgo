import { homeApi } from '@/api/home'
import { useState, useEffect } from 'react'

export const useFoodData = () => {
    const [foodData, setFoodData] = useState([])

    useEffect(() => {
        const getFoodData = async() => {
            const { data } = await homeApi.getFoodData()
            setFoodData(data)
        }
        getFoodData()
        
    }, [])

    return { foodData }
}