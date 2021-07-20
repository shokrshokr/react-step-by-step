import React from 'react';

function Lists() {

    const fruits = ["apple", "orenge", "banana"];
    return (
        <div>
            <ul>
                {fruits.map(
                    item => 
                        <li key={item}>{item}</li>
                )}
            </ul>
      
        </div>
    )
}

export default Lists;
