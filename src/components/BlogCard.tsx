import "../styles/BlogCard.css";

type BlogCardProps = {
  image: string;
  title: string;
  text: string;
};

export const BlogCard = ({ image, title, text }: BlogCardProps) => {
  return (
    <li className="blog-card">
      <figure>
        <img src={image} alt={title} className="blog-card__image" />
      </figure>
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__text">{text}</p>
      </div>
    </li>
  );
};
