import "./DeliveryInfo.css"

const DeliveryInfo = () => {
   return (
      <>
         <div className="delivery-info">
            <p className="form-heading">Данные о доставке:</p>
            <div className="flex-wrapper-input">
               <input className="form-input" type="text" placeholder="Город *" />
               <input className="form-input" type="text" placeholder="Индекс *" />
               <input className="form-input" type="text" placeholder="Улица, номер дома *" />
               <input className="form-input" type="text" placeholder="Квартира " />
               <textarea className="delivery-textarea form-input" placeholder="Ваш комментарий"></textarea>
            </div>
         </div>
      </>
   );
};

export default DeliveryInfo;