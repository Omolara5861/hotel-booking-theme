import React from 'react';

const Sidebar = () => {
    const sidebarStyles = {
        borderTopRightRadius: '20px', // Adjust the radius as needed
        borderBottomRightRadius: '20px', // Adjust the radius as needed
      };
  return (
    <div className="flex-none w-[250px] bg-white h-screen" style={sidebarStyles}>
      <p>Sidebar Works!</p>
    </div>
  );
};

export default Sidebar;
