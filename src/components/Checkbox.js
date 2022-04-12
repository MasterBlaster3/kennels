import React, {useState} from "react";

export const Checkbox = () => {

    const [checkedState, setCheckedState] = useState(false);

    const handleChange = (event) => {
        // if(checkedState){
        //     setCheckedState(false);
        // }else{
        //     setCheckedState(true);
        // }
    
    
    
    //ternary 
    // setCheckedState(checkedState ? false : true);

    setCheckedState(!checkedState);

    }

    return (
        <input type="checkbox" checked={checkedState} onChange={handleChange}/>
    )
}