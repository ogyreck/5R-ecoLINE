import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import "./PayMethod.css"
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const PayMethod = () => {
   return (
      <>
         <div className="pay-method">
            <p className="form-heading">Способ оплаты:</p>
            <div className="radio radio-border">
               <form action="#" method="GET">
                  <label>
                     <input type="radio" name="react-tips" value="Оплата картой (Visa, MasterCard, МИР)" defaultChecked className="form-check-input" />
                     Оплата картой (Visa, MasterCard, МИР)
                  </label>
               </form>
            </div>
         </div>
         <PersonalInfo/>
         <DeliveryInfo />
         <p className="offer">Нажимая на кнопку «Оформить заказ», я принимаю условия<a className="offer__link" href="/"> публичной оферты и политики конфиденциальности</a></p>
         <label className="input-checkbox-text">
            <input className="input-checkbox" type="checkbox" defaultChecked />
            Перезвонить мне для уточнения деталей заказа
         </label>
         <div className="button-container">
            <button type="submit" className="form-button">Оформить заказ</button>
         </div>
      </>
   );
};

export default PayMethod;