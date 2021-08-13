import "./DeliveryInfo.css"

const DeliveryInfo = () => {
   return (
      <>
         <div className="delivery-info">
            <p className="form-heading">Данные о доставке:</p>
            <div className="wrapper-input">
               <input className="form-input input-wrapper" type="text" placeholder="Город *" />
               <input className="form-input input-wrapper" type="text" placeholder="Индекс *" />
            </div>
            <div className="wrapper-input">
               <input className="form-input input-wrapper" type="text" placeholder="Улица, номер дома *" />
               <input className="form-input input-wrapper" type="text" placeholder="Квартира " />
            </div>
            <textarea className="delivery-textarea form-input" placeholder="Ваш комментарий"></textarea>
         </div>
      </>
   );
};

export default DeliveryInfo;