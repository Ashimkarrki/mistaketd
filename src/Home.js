import react, { useState, useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import Collection from "./Collection";
import Form from "./Form";
export default function Home() {
  const [data, setdata] = useState({
    title: "",
    info: "",
    id: "",
    hours: 0,
    min: 0,
    day: "AM",
    shorttimeform: 0,
  });
  const [toggle, settoggle] = useState(false);
  const [datacollection, setdatacollection] = useState([]);
  const [sortcollection, setsortcollection] = useState([]);
  const changehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value, id: Math.random() });
  };
  const submithandler = (e) => {
    e.preventDefault();
    const showdate = new Date().toLocaleTimeString();
    const array = showdate.split(" ");
    const nextarray = array[0].split(":");
    // const day = array[1];
    const hoursfromlocal = Math.floor(nextarray[0]);
    const minfromlocal = Math.floor(nextarray[1]);
    const global = hoursfromlocal + minfromlocal / 100;
    let shorttimeform =
      Math.floor(data?.hours) + Math.floor(data?.min) / 100 - global;
    console.log(shorttimeform);
    // if (data.title && data.info && data.id) {
    setdata((data) => {
      return { ...data, shorttimeform };
    });
    setdatacollection([...datacollection, data]);
    console.log(datacollection);

    console.log(datacollection);
    settoggle(false);
    setdata({
      title: "",
      info: "",
      hours: 0,
      min: 0,
      day: "AM",
      shorttimeform: 0,
    });
    // }
  };
  return (
    <div className="container">
      <div className="todohead">
        <h1>todo list</h1>
        <GrAdd className="btn" onClick={() => settoggle(true)} />
      </div>
      {toggle && (
        <Form
          data={data}
          setdata={setdata}
          datacollection={datacollection}
          setdatacollection={setdatacollection}
          changehandler={changehandler}
          submithandler={submithandler}
          toggle={toggle}
          settoggle={settoggle}
        />
      )}

      <Collection
        data={data}
        setdata={setdata}
        toggle={toggle}
        settoggle={settoggle}
        datacollection={datacollection}
        setdatacollection={setdatacollection}
      />
    </div>
  );
}
