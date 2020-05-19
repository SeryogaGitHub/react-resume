import React, {useState} from "react";

const Language = () => {
  let [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return(
    <div className={'language'}>
      <div className="dropdown">
        <button className="toggle" onClick={toggleDropdown}>UA</button>

        {dropdown && <ul className={'dropdown-container'}>
          <li>UA</li>
          <li>RU</li>
          <li>EN</li>
        </ul>}
      </div>
    </div>
  )
};

export default Language;
