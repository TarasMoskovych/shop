import { ProductsActionTypes, ProductsActions } from './products.actions';
import { ProductsState, initialProductsState } from './products.state';
import { Product } from 'src/app/product/models';

export function productsReducer(state = initialProductsState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      return { ...state, loading: true };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const data = [...action.payload as Array<Product>];
      return { ...state, data, loading: false, loaded: true, selectedProduct: null };
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return { ...state, loading: false, loaded: false, error };
    }

    case ProductsActionTypes.GET_PRODUCT: {
      return { ...state, loading: true };
    }

    case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
      const selectedProduct = { ...action.payload as Product };
      return { ...state, loading: false, loaded: true, selectedProduct };
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return { ...state, loading: false, loaded: false, error };
    }

    case ProductsActionTypes.CREATE_PRODUCT: {
      return { ...state };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const product = { ...action.payload as Product };
      const data = [...state.data, product];
      return { ...state, data };
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    case ProductsActionTypes.UPDATE_PRODUCT: {
      return { ...state };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product = { ...action.payload as Product };
      const data = [...state.data];
      const index = data.findIndex(p => p.id === product.id);

      data[index] = product;

      return { ...state, data };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    case ProductsActionTypes.DELETE_PRODUCT: {
      return { ...state };
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const product = { ...action.payload as Product };
      const data = state.data.filter(p => p.id !== product.id);
      return { ...state, data };
    }

    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }

    default: {
      return state;
    }
  }
}
