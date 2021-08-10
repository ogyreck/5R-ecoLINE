import DeliveryMethod from "./Delivery-method/DeliveryMethod";
import "./Delivery.css"
import PayMethod from "./Pay-method/PayMethod"

const Delivery = () => {
   return (
      <div className="delivery">
         <form action="#" className="delivery-form" method="GET">
            <DeliveryMethod/>
            <PayMethod/>
         </form>
      </div>
   );
};

export default Delivery;