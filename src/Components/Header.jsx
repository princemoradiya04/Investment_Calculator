import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="text-center">
        <div className="flex justify-center">
          <img src="../calc.png" alt="calc image" className="" />
        </div>
        <h2 className="text-3xl text-red-500 mt-4">Investment Calculator</h2>
      </header>
    </div>
  );
};

export default Header;
