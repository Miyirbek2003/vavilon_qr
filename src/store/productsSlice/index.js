import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getProducts = createAsyncThunk('productsSlice/getProducts', async (_, { dispatch }) => {
    const response = await axios.get('https://admin-vavilon.webclub.uz/api/products', {

    })
    dispatch(setProducts(response.data.data))
})



export const getCategory = createAsyncThunk('productsSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://admin-vavilon.webclub.uz/api/categories', {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'ru'
        }
    })
    dispatch(setCategory(response.data.data))
})






const initialState = {
    category: [],
    products: [],
    product: [],
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : localStorage.setItem('lang', 'ru'),
    isAuth: '',
    loading: false,
    itemLoading: false
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

        setLangg: (state, { payload }) => {
            localStorage.setItem('lang', payload)
            state.lang = localStorage.getItem('lang')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(getProducts.pending, (state, action) => {
                state.itemLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.itemLoading = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.itemLoading = false;
            })
    }
})

export default productsSlice.reducer
export const { setCategory, setProduct, setProducts, setLangg } = productsSlice.actions
