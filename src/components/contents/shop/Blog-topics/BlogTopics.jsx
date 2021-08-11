import "./BlogTopics.css";

const BlogTopics = () => {
   return (
      <div className="blog__topics">
         <button className="blog__topic-active">Все</button>
         <button>Для дома</button>
         <button>Zero Waste</button>
         <button>Косметика</button>
         <button>Личная гигена</button>
         <select className="blog__topics-select">
            <option className="blog__topics-option" disabled>Сортировка</option>
            <option className="blog__topics-option">NEW</option>
            <option className="blog__topics-option">Дешевле</option>
            <option className="blog__topics-option">Дороже</option>
            <option className="blog__topics-option">По скидке</option>
         </select>
      </div>
   );
};

export default BlogTopics;