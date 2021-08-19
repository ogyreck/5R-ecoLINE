import "./BlogTopics.css";
import { NavLink } from "react-router-dom";

const BlogTopics = () => {
   return (
      <div className="blog__topics">
         {/* <button className="blog__topic-active" >Все</button >
         <button >Для дома</button >
         <button >Zero Waste</button>
         <button >Косметика</button >
         <button >Личная гигена</button > */}
         <NavLink exact to="/shop" activeClassName="blog__topic-active" >Все</NavLink >
         <NavLink exact to="/shop/home" activeClassName="blog__topic-active" >Для дома</NavLink >
         <NavLink exact to="/shop/zero-waste" activeClassName="blog__topic-active" >Zero Waste</NavLink>
         <NavLink exact to="/shop/cosmetics" activeClassName="blog__topic-active" >Косметика</NavLink >
         <NavLink exact to="/shop/hygiene" activeClassName="blog__topic-active" >Личная гигена</NavLink >
         <select className="blog__topics-select" >
            <option className="blog__topics-option" >Сортировка</option>
            <option className="blog__topics-option">NEW</option>
            <option className="blog__topics-option">Дешевле</option>
            <option className="blog__topics-option">Дороже</option>
            {/* <option className="blog__topics-option">По скидке</option> */}
         </select>
      </div>
   );
};

export default BlogTopics;