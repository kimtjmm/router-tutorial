import React from "react";
import { HiArrowCircleRight } from 'react-icons/hi2'
import './TodoInsert.sass'

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력"/>
            <button type="submit">
                <HiArrowCircleRight/>
            </button>
        </form>
    )
}

export default TodoInsert;
