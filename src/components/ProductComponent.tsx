import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/actions";
import { AppState } from "../redux/reducers";
import { StateProduct, StateProducts } from "../redux/reducers/productReducer";
import { Link } from 'react-router-dom';



const ProductComponent : React.FC = () =>{

    
    const state : StateProducts = useSelector<AppState,AppState['allProducts']>((state)=>state.allProducts);
    const products = state.products;
    const dispatch = useDispatch();
   
    const renderList = products.map((el : StateProduct['product'])=>(
        <div className="four wide column " key={el.id}>
            <Link to={`/products/${el.id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={el.image} alt={el.title}/>
                        </div>
                        <div className="content">   
                            <div className="header">{el.title}</div>
                            <div className="meta price">${el.price}</div>
                            <div className="meta">{el.category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ));


    const fetchProducts = async() =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .then(res=>dispatch(setProducts(res.data)))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return(
       <>
        {renderList}
       </>
    )
}

export default ProductComponent;