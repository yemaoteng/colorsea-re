import React from 'react'

const AddColorForm = ({onNewColor}) => {
    let _title,_color
    const submit = e=> {
        
        onNewColor(_title.value,_color.value)
        _title.value = ""
        _color.value = "#000000"
        e.preventDefault()
    }
    
    return (
        <form className="addColorForm">
            <input ref={input => _title=input} type="text" />
            <input ref={input => _color=input} type="color" />
            <input type="button" value="ADD" onClick={submit}/>
        </form>
    )
}

export default AddColorForm
