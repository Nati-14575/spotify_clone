import React from "react";
import "./SidebarOption.css";

function SidebarOption({ optionLabel, Icon }) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? <h4>{optionLabel}</h4> : <p>{optionLabel}</p>}
    </div>
  );
}

export default SidebarOption;
