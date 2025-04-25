const PageWrapper = ({ children }) => {
  return (
    <main className="mt-20 w-full">
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </main>
  );
};

export default PageWrapper;
