import "./ContactsForm.css"


const ContactsForm = () => {
   return (
      <>
         <div className="contacts__form">
            <p>Есть вопросы? <br /> Свяжитесь с нами:</p>
            <form action="#" method="GET">
               <div className="contacts__form-wrapper">
                  <div className="contacts-input-wrapper">
                     <div className="no-flex">
                        <input className="contacts-input" type="text" placeholder="Имя" />
                     </div>
                     <div className="no-flex">
                        <input className="contacts-input" type="email" placeholder="E-mail *" />
                     </div>
                  </div>
                  <textarea className=" contacts-input contacts-textarea" placeholder="Сообщение"></textarea>
               </div>
               <div className="button-container">
                  <button className="contacts-button" type="submit">Отправить</button>
               </div>
            </form>
         </div>
      </>
   );
};

export default ContactsForm;