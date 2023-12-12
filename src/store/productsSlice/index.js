import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getProducts = createAsyncThunk('productsSlice/getProducts', async (_, { dispatch }) => {
    const response = await axios.get('https://qr-menu.premierlounge.uz/api/products', {
        headers: {
            'Accept-Language': localStorage.getItem('lang')
        }
    })
    dispatch(setProducts(response.data.data))
})



export const getCategory = createAsyncThunk('productsSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://qr-menu.premierlounge.uz/api/categories', {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `${localStorage.getItem('lang')}`
        }
    })
    dispatch(setCategory(response.data.data))
})



export const checkAuth = createAsyncThunk('productsSlice/checkAuth', async (_, { rejectWithValue, dispatch }) => {

    const response = await axios.post(`https://qr-menu.premierlounge.uz/api/verify?uuid=${sessionStorage.getItem('client')}`, {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `${localStorage.getItem('lang')}`
        },
        params: {
            'uuid': sessionStorage.getItem('client')
        }
    })
    if (response.status === 200) {
        dispatch(setIsAuth(response.data.status))
    }

    if (response.status === 404) {
        dispatch(setIsAuth(error.response.data.status))
    }
})







const initialState = {
    category: [],
    products: [],
    product: [],
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : localStorage.setItem('lang', 'ru'),
    isAuth: ''
}


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setProduct: (state, { payload }) => {
            state.product = payload
        },
        setIsAuth: (state, { payload }) => {
            state.isAuth = payload
        },
        setLangg: (state, { payload }) => {
            localStorage.setItem('lang', payload)
            state.lang = localStorage.getItem('lang')
        }
    }
})

export default productsSlice.reducer
export const { setCategory, setProduct, setProducts, setIsAuth, setLangg } = productsSlice.actions
