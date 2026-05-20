function Card({ title, children }) {
  return (
    <section className="card">
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </section>
  );
}

export default Card;
