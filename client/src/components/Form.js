import React from 'react'

const Form = (props) => {
    const {selected, setSelected} = props

    return(

        <form>
            <label>Select Cat Breed:</label>
            <select onChange= {(e)=> setSelected(e.target.value)}>
                <option value="selected" selected="selected">Please choose...</option>
                <option value="option1">OPTION 1</option>
                <option value="option2">OPTION 2</option>
            </select>
        </form>
    )
}

export default Form