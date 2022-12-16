import React, { useEffect, useState } from 'react';
import {

    //ProductData
    ProductPrice,
    ProductDescription,
    ProductImage,
    ProductQuantity,
    ProductTitle,

    //Product
    ProductCard,
    ProductInfo,
    ProductDetailWrap,
    ProductContainer,

    //Button
    ButtonContainer,
    ButtonDelete,
    ButtonUpdate,
    ButtonAdd,
    ProductWrap,
    ButtonSpan,

    //Modal
    ModalInputUpdate,
    ModalTextareaUpdate

} from './listProductsStyle';

import { CloseCircleOutlined, EditOutlined, FolderAddOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    //add

    const [productAdded, setProductAdded] = useState("");
    const [imageAdd, setImageAdd] = useState("");
    const [titleAdd, setTitleAdd] = useState("");
    const [descriptionAdd, setDescriptionAdd] = useState("");
    const [priceAdd, setPriceAdd] = useState("");
    const [quantityAdd, setQuantityAdd] = useState("");

    //Update

    const [imageUpdate, setImageUpdate] = useState("");
    const [titleUpdate, setTitleUpdate] = useState("");
    const [descriptionUpdate, setDescriptionUpdate] = useState("");
    const [priceUpdate, setPriceUpdate] = useState("");
    const [quantityUpdate, setQuantityUpdate] = useState("");
    const [productUpdated, setProductUpdated] = useState("")
    const [idUpdated, setIdUpdated] = useState("");
    const [displayIconUpdate, setDisplayIconUpdate] = useState(false);

    //Delete
    const [productDelete, setProductDelete] = useState(false);
    const [displayIconDelete, setDisplayIconDelete] = useState("")

    //Modal
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);

    //redux
    const status = useSelector((state) => state.user.status)
    const dispatch = useDispatch();

    async function displayProducts() {
        let rawResponse = await fetch('/listProducts');
        let response = await rawResponse.json();
        if (response) {
            setProducts(response.listProducts)
            dispatch({ type: "sendProducts", products: response.listProducts });
        }
    };

    async function addProducts() {

        let rawResponse = await fetch('/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `image=${imageAdd}&title=${titleAdd}&description=${descriptionAdd}&price=${priceAdd}&quantity=${quantityAdd}`
        });
        let response = await rawResponse.json();
        setProductAdded(response)
    };

    async function deleteProduct(i) {
        let rawResponse = await fetch(`/deleteProduct?id=${i}`, {
            method: 'DELETE',
        });

        let response = await rawResponse.json();

        if (response) {
            setProductDelete(!productDelete)
        }
    };

    async function updateProduct() {
        let rawResponse = await fetch(`/updateProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `image=${imageUpdate}&title=${titleUpdate}&description=${descriptionUpdate}&price=${priceUpdate}&quantity=${quantityUpdate}&id=${idUpdated}`
        });
        let response = await rawResponse.json();

        if (response) {
            setProductUpdated(response.result)
        }
    };

    useEffect(() => {

        displayProducts();

    }, [productAdded, productDelete, productUpdated])

    if (modalAdd) {
        var modalAddProduct =

            <Modal
                title="Ajouter un produit"
                centered
                open={modalAdd}
                onOk={() => (addProducts(), setModalAdd(false))}
                onCancel={() => setModalAdd(false)}
                width={500}
            >
                <p><ModalInputUpdate onChange={(arg, i) => setImageAdd(arg.target.value)} placeholder="Image" /></p>
                <p><ModalInputUpdate onChange={(arg, i) => setTitleAdd(arg.target.value)} placeholder="Titre" /></p>
                <p><ModalTextareaUpdate onChange={(arg, i) => setDescriptionAdd(arg.target.value)} placeholder="Description" /></p>
                <p><ModalInputUpdate onChange={(arg, i) => setPriceAdd(arg.target.value)} placeholder="Prix" /></p>
                <p><ModalInputUpdate onChange={(arg, i) => setQuantityAdd(arg.target.value)} placeholder="Quantité" /></p>
            </Modal>
    }

    if (modalUpdate) {
        var modalUpdtProduct =
            <Modal
                title="Modifier un produit"
                centered
                open={modalUpdate}
                onOk={() => (updateProduct(), setModalUpdate(false))}
                onCancel={() => setModalUpdate(false)}
                width={500}
            >
                <p><ModalInputUpdate value={imageUpdate} onChange={(arg, i) => setImageUpdate(arg.target.value)} placeholder="Image" /></p>
                <p><ModalInputUpdate value={titleUpdate} onChange={(arg, i) => setTitleUpdate(arg.target.value)} placeholder="Titre" /></p>
                <p><ModalTextareaUpdate value={descriptionUpdate} onChange={(arg, i) => setDescriptionUpdate(arg.target.value)} placeholder="Description" /></p>
                <p><ModalInputUpdate value={priceUpdate} onChange={(arg, i) => setPriceUpdate(arg.target.value)} placeholder="Prix" /></p>
                <p><ModalInputUpdate value={quantityUpdate} onChange={(arg, i) => setQuantityUpdate(arg.target.value)} placeholder="Quantité" /></p>
            </Modal>
    }

    return (
        <>
            <ProductContainer>
                <ButtonContainer status={status} style={{ display: status == 1 || status === true ? "flex" : "none"}}>
                    <ButtonDelete onClick={() => (setDisplayIconDelete(!displayIconDelete), setDisplayIconUpdate(false))}>
                        <CloseCircleOutlined /> <ButtonSpan>Delete </ButtonSpan>
                    </ButtonDelete>
                    <ButtonUpdate onClick={() => (setDisplayIconUpdate(!displayIconUpdate), setDisplayIconDelete(false), setImageUpdate(""), setTitleUpdate(""), setDescriptionUpdate(""), setPriceUpdate(""), setQuantityUpdate(""))} >
                        <EditOutlined /> <ButtonSpan>Update</ButtonSpan>
                    </ButtonUpdate>
                    <ButtonAdd onClick={() => (setModalAdd(!modalAdd), setDisplayIconDelete(false), setDisplayIconUpdate(false))}>
                        <FolderAddOutlined /> <ButtonSpan>Add</ButtonSpan>
                    </ButtonAdd>
                </ButtonContainer>
                {modalUpdtProduct}
                {modalAddProduct}
                <ProductWrap>
                    {
                        products.reverse().map(function (product, i) {
                            return (

                                <ProductCard key={i}>
                                    <ProductImage src={product.image}></ProductImage>
                                    <ProductInfo>
                                        <ProductTitle>{product.title}</ProductTitle>
                                        <ProductDescription>{product.description}</ProductDescription>
                                        <ProductDetailWrap>
                                            <ProductPrice>{product.price} €</ProductPrice>
                                            <ProductQuantity>Quantity : {product.quantity}</ProductQuantity>
                                        </ProductDetailWrap>
                                    </ProductInfo>
                                    <CloseCircleOutlined style={{
                                        position: "absolute",
                                        right: -10,
                                        top: -8,
                                        fontSize: "20px",
                                        display: displayIconDelete ? "block" : "none",
                                        cursor: "pointer"

                                    }}
                                        onClick={() => (
                                            deleteProduct(product.id)
                                        )}
                                    />
                                    <EditOutlined style={{
                                        position: "absolute",
                                        right: -10,
                                        top: -8,
                                        fontSize: "20px",
                                        display: displayIconUpdate ? "block" : "none",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => (
                                            setIdUpdated(product.id),
                                            setImageUpdate(product.image),
                                            setTitleUpdate(product.title),
                                            setDescriptionUpdate(product.description),
                                            setPriceUpdate(product.price),
                                            setQuantityUpdate(product.quantity),
                                            setDisplayIconUpdate(false),
                                            setModalUpdate(!modalUpdate)
                                        )}
                                    />
                                </ProductCard>

                            )
                        })
                    }
                </ProductWrap>
            </ProductContainer>
        </>

    )
}

export default ListProducts