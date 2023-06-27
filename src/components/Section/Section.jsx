export const Section = ({ title, children, className }) => {
  return (
    <section>
      <h1 className={className}>{title}</h1>
      {children}
    </section>
  );
};
