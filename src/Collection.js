import React from "react";
import Data from "./Data";
const Collection = ({
  datacollection,
  setdatacollection,
  data,
  setdata,
  toggle,
  settoggle,
}) => {
  return (
    <div className="collection">
      {datacollection.map((da) => {
        return (
          <Data
            key={da.id}
            da={da}
            datacollection={datacollection}
            setdatacollection={setdatacollection}
            data={data}
            setdata={setdata}
            toggle={toggle}
            settoggle={settoggle}
          />
        );
      })}
    </div>
  );
};

export default Collection;
