import {useEffect, useState} from "react";
import spinner from "react-bootstrap/esm/Spinner";
import {useParams} from "react-router-dom";

const API_DETAIL_PRODUCT = "https://dummyjson.com/products";

const DetailPage = () => {
    const {idCar} = useParams();
    const [dataDetailProduct, setDataDetailProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log({dataDetailProduct});

    useEffect(() => {
        if (idCar) {
            setLoading(true);
            fetch('${API_DETAIL_PRODUCT}/${idCar}')
            .then ((res) => res.json())
            .then((response) => {
                setDataDetailProduct(response);
                setLoading(false);
            })
        }
    }, [idCar]);

    if(loading && !dataDetailProduct) return <spinner/>;

    return(
        <div>
            <p>{dataDetailProduct?.title}</p>
            <p>{dataDetailProduct?.description}</p>
            <p>{dataDetailProduct?.price}</p>
            <p>{dataDetailProduct?.rating}</p>
            <p>{dataDetailProduct?.brand}</p>
            <p>{dataDetailProduct?.category}</p>
        </div>
    )
}

export default DetailPage;