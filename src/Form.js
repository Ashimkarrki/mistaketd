import React, { useState } from "react";
import { MdOutlineSend } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const Form = ({ data, changehandler, submithandler, toggle, settoggle }) => {
  const toggleeffectwithdivfordarpan = (e) => {
    const classname = e.target.className;
    if (classname == "formpart") {
      settoggle(false);
    }
  };
  return (
    <div className="formpart" onClick={(e) => toggleeffectwithdivfordarpan(e)}>
      <div className="smallform">
        <div className="time_header">
          <div className="separting">
            <h4>Set time</h4>
            <div className="inputt">
              <div>
                <label></label>
                <input
                  className="smallinput"
                  value={data.hours}
                  name="hours"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="hours"
                  onChange={(e) => changehandler(e)}
                />
              </div>
              <div>
                <label></label>
                <input
                  className="smallinput"
                  value={data.min}
                  name="min"
                  type="number"
                  placeholder="mins"
                  min="0"
                  max="60"
                  onChange={(e) => changehandler(e)}
                />
              </div>
              <div>
                <select
                  className="selection"
                  onChange={(e) => changehandler(e)}
                  name="day"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={submithandler}>
            <div>
              <input
                className="input"
                name="title"
                value={data.title}
                text="type"
                placeholder="Title"
                onChange={(e) => changehandler(e)}
              />
            </div>
            <div>
              <div>
                <textarea
                  className="input"
                  name="info"
                  value={data.info}
                  placeholder="info..."
                  onChange={(e) => changehandler(e)}
                />
              </div>
              <button className="btm">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
