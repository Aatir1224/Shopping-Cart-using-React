import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {random, commerce} from 'faker';
import {Container, Row, Col} from 'reactstrap';
import CartItem from './CartItem';

// const apiKey = "INSERT_YOUR_KEY_HERE";
// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
// const localURL = "https://www.jsonware.com/json/810832bc3acc8fae3fb8ea04df64ed34.json"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get('url',{
    //         header:{
    //             Authorization:apiKey
    //         }
    //     });

    const fetchPhotos = async () => {
        const {data} = await Axios.get("https://www.jsonware.com/json/810832bc3acc8fae3fb8ea04df64ed34.json",{});
        console.log(data);
        const {photos} = data;
        console.log(photos)

        
    const allProducts = photos.map(photo => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: random.word(),
        productPrice: commerce.price(),
        id:random.uuid() 
    }));

    setProduct(allProducts)
};

    useEffect(() => {
        fetchPhotos()
    }, []);

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    // <span key={product.id}>{product.productName}</span>
                    <Col md={4} key={product.id}>
                        <CartItem product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;