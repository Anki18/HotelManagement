import React from 'react';

const changeTitle = () =>{

}
const FormComponent = props => {
     return (
         <div>
             {props.hotel.title}
             <button onClick={props.changeTitle}>Change Title</button>
         </div>
     );
}

export default FormComponent;