import React, { useState } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

const App = () => {
  // 네 가지 Input값에 대한 기록을 상태관리하기 위한 useState
  const [record, setRecord] = useState([]);
  // 국가이름, 금메달, 은메달, 동메달 Input 값을 상태관리하기 위한 useState
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  return (
    <div className="container">
      <Title />
      <Input
        record={record}
        setRecord={setRecord}
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
      />
      <List record={record} setRecord={setRecord} />
    </div>
  );
};

export default App;
