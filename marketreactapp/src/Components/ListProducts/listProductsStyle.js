import styled from 'styled-components';

//PRODUCT
export const ProductContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    margin: 5px auto;
    border-box: box-sizing;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border: 1px solid #F9F9F9;
    overflow-x: scroll;
    background-color: #FFF;

    @media screen and (max-width: 900px){
        width: 100%;
        border-radius: 0;
    }
`;

export const ProductWrap = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    margin: 10px auto;
    border-box: box-sizing;

`;

export const ProductCard = styled.div`
    position: relative;
    width: 250px;
    max-height: 250px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin: 5px auto;
    border-box: box-sizing;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        cursor: pointer;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`;

export const ProductDetailWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductImage = styled.img`
    height: 100px;
    width: 100%;
    border-radius: 20px;
    object-fit: contain;
`;

// PRODUCT DATA
export const ProductInfo = styled.div`
    height: 50%;
    width: 100%;
`;

export const ProductPrice = styled.p`
    font-size: 15px;
    font-weight: 800;
`;

export const ProductDescription = styled.p`
    font-size: 15px;
    flex-wrap: wrap;

`;

export const ProductQuantity = styled.p`
    font-size: 15px;
`;

export const ProductTitle = styled.h1`
    font-size: 20px;
`;

//BUTTON

export const ButtonContainer = styled.div`
    margin: 5px auto;
    height: 100px;
    width: 65%;
    padding: 10px;
    display: flex;
    border-radius: 20px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    margin-top: 30px;
    
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`;

export const ButtonDelete = styled.button`
    width: 120px;
    height: 32px;
    margin: auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

`;

export const ButtonUpdate = styled.button`
    width: 120px;
    height: 32px;
    margin: auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

`;

export const ButtonAdd = styled.button`
    width: 120px;
    height: 32px;
    margin: auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`;

export const ButtonSubmitAdd = styled.button`
    width: 120px;
    height: 32px;
    margin: auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #FFF;
    color: #000;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`;

export const ButtonSubmitUpdate = styled.button`
    width: 120px;
    height: 32px;
    margin: auto;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #FFF;
    color: #000;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`;

export const ButtonSpan = styled.span`
    @media screen and (max-width: 500px){
        display: none;
    }
`;


// INPUT ADD

export const InputContainerAdd = styled.div`
    margin: 20px auto;
    height: 100px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 15px;
    border-radius: 20px;

`;

export const InputImageAdd = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;    
    }

`;

export const InputTitleAdd = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }


`;

export const InputDescriptionAdd = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;    
    }


`;

export const InputPriceAdd = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }


`;

export const InputQuantityAdd = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;


    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }

`;


//INPUT UPDATE
export const InputContainerUpdate = styled.div`
    margin: 20px auto;
    height: 100px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 15px;
    border-radius: 20px;

`;

export const InputImageUpdate = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;    
    }

`;

export const InputTitleUpdate = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }


`;

export const InputDescriptionUpdate = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;    
    }


`;

export const InputPriceUpdate = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;

    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }


`;

export const InputQuantityUpdate = styled.input`
    height: 32px;
    margin: auto;
    border-radius: 5px;
    padding-left: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    outline: none;


    &:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }

`;


//Modal 
export const ModalInputUpdate = styled.input`
    border-radius: 10px;
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const ModalTextareaUpdate = styled.textarea`
    border-radius: 10px 10px 0 10px; 
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;





