import React from "react";
import "./Delivery.css"
import PayMethod from "./Pay-method/PayMethod"
import { useHistory } from "react-router-dom";

const Delivery = () => {
   let history = useHistory();
   const Form = () => { 
      history.push("/thanks"); 
   }
   return (
      <div className="delivery">
         <form onSubmit={Form} className="delivery-form" >
            <PayMethod/>
         </form>
      </div>
   );
};

export default Delivery;