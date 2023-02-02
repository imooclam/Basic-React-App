export const Book = props => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt="imageBook-Amozen " className="img" />
      <h2 className="descrip-text">{title}</h2>
      <h2 className="author"> {author}</h2>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
