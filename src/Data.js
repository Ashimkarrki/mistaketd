import { useState, useEffect } from "react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { FiArrowRightCircle } from "react-icons/fi";
const Data = ({
  da,
  datacollection,
  setdatacollection,
  data,
  setdata,
  toggle,
  settoggle,
}) => {
  const [togglee, settogglee] = useState(false);
  const [submitedtime, setsubmitedtime] = useState("");
  const deleteitem = () => {
    const newdata = datacollection.filter((d) => {
      return d.id != da.id;
    });
    setdatacollection(newdata);
  };
  useEffect(() => {
    const showdate = new Date();

    setsubmitedtime(showdate.toLocaleTimeString());
  }, []);
  const edithandler = () => {
    settoggle(true);
    setdata({
      title: da.title,
      info: da.info,
      day: da.day,
      hours: da.hours,
      min: da.min,
    });
    if (da.title && da.info && da.day && da.hours && da.min) {
      deleteitem();
    }
  };
  return (
    <div className="main_todo_items" onClick={() => settogglee(!togglee)}>
      <div className="main_todo_item">
        <h2>{da.title}</h2>
        <div className="button_collection">
          <AiTwotoneEdit onClick={edithandler} className="btn green" />
          <MdDeleteForever onClick={deleteitem} className="btn red" />
        </div>
      </div>
      <div className="paragraph_list">
        <p className="dateparagraph">{`Plan at:  ${da.hours}:${da.min} ${da.day}`}</p>
        <p className="dateparagraph">{`submited at: ${submitedtime}`}</p>
      </div>
      <div className="paragraph_height">
        {togglee && (
          <>
            <hr></hr>
            <p className="paragraph_info">{da.info}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Data;
