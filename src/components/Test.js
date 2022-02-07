import React, {useState} from 'react';

export const Test = () => {
    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count+1)
        count = 1;
    }

  return (
    <div>
        {count}
        <button onClick={sumar}></button>
        <button onClick={restar}></button>
    </div>  

  ) ;
};
