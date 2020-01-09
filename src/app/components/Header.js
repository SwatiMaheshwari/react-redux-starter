import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">MoneyIn</IndexLink>
      {" | "}
      <Link to="/moneyout" activeClassName="active">MoneyOut</Link>
      {" | "}
      <Link to="/summary" activeClassName="active">summary</Link>
    </nav>
  );
};

export default Header;
