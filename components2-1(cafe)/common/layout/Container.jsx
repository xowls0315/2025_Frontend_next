const Container = ({ children, className = "" }) => {
  return (
    <section
      className={`w-full h-full max-w-5xl mx-auto flex flex-col ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
