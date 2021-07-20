import React from 'react';

function Conditions() {

    const age = 23;
    const age1 = 19;
    return (
        <div>
                {age>20 ? 
                    <div>You are older than 20, your Age : {age}</div> 
                    : 
                    <div>You are smaller than 20, your Age : {age}</div>
                }

                {age>30 /** age > 20 */ ? 
                    <div>You are older than 20, your Age : {age}</div> 
                    : 
                    null
                }    

                {age1>20 ? 
                    <div>You are older than 20, your Age1 : {age1}</div> 
                    : 
                    <div>You are smaller than 20, your Age1 : {age1}</div>
                }    
        </div>
    )
}

export default Conditions;
