import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { selectedProduct } from "../redux/actions/actions";
import { AppState } from "../redux/reducers";
import { StateProduct } from "../redux/reducers/productReducer";

const ProductDetails : React.FC = () =>{

    const state : StateProduct  = useSelector<AppState,AppState['product']>(state=>state.product);
    const product  = state.product;
    const { productId } = useParams();
    const dispatch = useDispatch();


    const fetchProduct = async(id : string)=>{
        const response = await axios.get('https://fakestoreapi.com/products/'+id)
        .then(res=>dispatch(selectedProduct(res.data)))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        if(productId && productId !== ''){
            fetchProduct(productId)
        }
        else{
            console.log('Invalid Id!!!!!')
        }
        
    },[productId])

    return(
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={product.image} />
                </div>
                <div className="column rp">
                  <h1>{product.title}</h1>
                  <h2>
                    <a className="ui teal tag label">${product.price}</a>
                  </h2>
                  <h3 className="ui brown block header">{product.category}</h3>
                  <p>{product.description}</p>
                  <div className="ui vertical animated button" tabIndex={0}>
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ProductDetails;