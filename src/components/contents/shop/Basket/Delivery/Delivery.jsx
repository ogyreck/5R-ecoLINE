import DeliveryMethod from "./Delivery-method/DeliveryMethod";
import "./Delivery.css"
import PayMethod from "./Pay-method/PayMethod"

const Delivery = () => {
   return (
      <div className="delivery">
         <div  className="delivery-form" >
            <DeliveryMethod/>
            <PayMethod/>
         </div>
      </div>
   );
};

export default Delivery;