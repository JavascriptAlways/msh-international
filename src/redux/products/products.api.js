import axios from 'axios';
import { productCategoryUrl } from '../api-constants';
export const productCategoryApi = () => {
        axios.get(productCategoryUrl)
                .then(res => { return res.data })
                .catch(error => console.log(error));
}