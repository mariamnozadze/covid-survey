import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_flex">
        <div className="company_name">
          <h3>Redberry</h3>
        </div>
        <div className="page_numbering">1/4</div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
