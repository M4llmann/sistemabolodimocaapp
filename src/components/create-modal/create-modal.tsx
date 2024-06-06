import React, { useState, useEffect } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import "./modal.css";


interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any) : void
}
interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const { mutate, isSuccess} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image,
            description
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])
    
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                    <Input label="Descrição" value={description} updateValue={setDescription} />
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
                <button onClick={closeModal} className="btn-secondary">Fechar</button>
            </div>
        </div>
    );
}