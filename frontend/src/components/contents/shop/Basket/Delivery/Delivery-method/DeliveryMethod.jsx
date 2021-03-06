import "./DeliveryMethod.css"

const DeliveryMethod = () => {
   return (
      <div className="delivery-method">
         <p className="form-heading form-heading-delivery">Выберите способ доставки:</p>
         <div className="radio">
            <label>
               <input type="radio" name="react-tips" value="Почта России до пункта выдачи" defaultChecked className="form-check-input" />
               Почта России до пункта выдачи
            </label>
            <p className="radio__price">300 ₽</p>
         </div>
         <div className="radio">
            <label>
               <input type="radio" name="react-tips" value="Почта России до двери" defaultChecked className="form-check-input" />
               Почта России до двери
            </label>
            <p className="radio__price">300 ₽</p>
         </div>
         <div className="radio">
            <label>
               <input type="radio" name="react-tips" value="СДЭК до пункта выдачи (по России)"  defaultChecked className="form-check-input" />
               СДЭК до пункта выдачи (по России)
            </label>
            <p className="radio__price">300 ₽</p>
         </div>
         <div className="radio">
            <label>
               <input type="radio" name="react-tips" value="СДЭК до двери (по России)"  defaultChecked className="form-check-input" />
               СДЭК до двери (по России)
            </label>
            <p className="radio__price">300 ₽</p>
         </div>
         <div className="radio ">
            <label>
               <input type="radio" name="react-tips" value="Самовывоз (г. Ижевск)" defaultChecked className="form-check-input" />
               Самовывоз (г. Ижевск)
            </label>
            <p className="radio__price">300 ₽</p>
         </div>
         <div className="delivery__price">
            <p>Сумма к оплате: <span>1 800 ₽</span></p>
         </div>
      </div>
   );
};

export default DeliveryMethod;