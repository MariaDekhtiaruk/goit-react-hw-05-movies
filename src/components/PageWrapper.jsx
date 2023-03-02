import Header from './Header';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="header">{children}</div>
    </>
  );
};

export default PageWrapper;
