import "./BlogTopics.css";

const BlogTopics = () => {
   return (
      <div className="blog__topics">
         <button>Все товары</button>
         <button>Zero Waste</button>
         <button className="blog__topic-active">Для дома</button>
         <button>Косметика</button>
         <button>Личная гигена</button>
      </div>
   );
};

export default BlogTopics;