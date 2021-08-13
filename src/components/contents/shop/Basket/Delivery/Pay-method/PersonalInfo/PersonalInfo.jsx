import "./PersonalInfo.css"

const PersonalInfo = () => {
   return (
      <>
         <div className="personal-info">
            <p className="form-heading form-heading-info">Ваши данные:</p>
               <div className="wrapper-input">
                  <input className="form-input input-wrapper" type="text" placeholder="Имя *" />
                  <input className="form-input input-wrapper" type="text" placeholder="Фамилия *" />
               </div>
               <div className="wrapper-input">
                  <input className="form-input input-wrapper" type="email" placeholder="E-mail *" />
                  <input className="form-input input-wrapper" type="tel" placeholder="Телефон *" />
               </div>
         </div>
      </>
   );
};

export default PersonalInfo;