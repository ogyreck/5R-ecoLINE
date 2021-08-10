import "./PersonalInfo.css"

const PersonalInfo = () => {
   return (
      <>
         <div className="personal-info">
            <p className="form-heading">Ваши данные:</p>
            <div className="flex-wrapper-input">
               <input className="form-input" type="text" placeholder="Имя *" />
               <input className="form-input" type="text" placeholder="Фамилия *" />
               <input className="form-input" type="email" placeholder="E-mail *" />
               <input className="form-input" type="tel" placeholder="Телефон *" />
            </div>
         </div>
      </>
   );
};

export default PersonalInfo;