const Section = ({ children }) => {
  return (
    <section className="h-full">
      <div className="h-full max-w-7xl mx-auto px-[2em]">{children}</div>
    </section>
  );
};
export default Section;
