import React from "react";

const Userinput = () => {
  return (
    <section>
      <div className="flex flex-row gap-6 justify-center">
        <p>
          <label htmlFor="">Initial Investment:-</label>
          <input type="number" required/>
        </p>
        <p>
          <label htmlFor="">Annual Investment:-</label>
          <input type="number" required/>
        </p>
      </div>
      <div className="flex gap-6 py-10 justify-center">
        <p>
          <label htmlFor="">Expected Return:-</label>
          <input type="number" required/>
        </p>
        <p>
          <label htmlFor="">Duration:-</label>
          <input type="number" required/>
        </p>
      </div>
    </section>
  );
};

export default Userinput;
