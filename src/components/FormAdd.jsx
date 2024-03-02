import { useState } from "react"

export default function FormAdd({ onSubmit }) {
    const [item, setItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(item)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="additem">Add Item </label>
            <input id="additem" name="item" value={item} onChange={(e)=> setItem(e.target.value)}/>
        </form>
    )
}