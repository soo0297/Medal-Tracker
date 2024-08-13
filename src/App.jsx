import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const titleStyle = {
    color: "rgb(50, 95, 246)",
    display: "flex",
    flexDirection: "column",
    alignText: "center",
  }

  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  }

  // 국가 이름을 입력하는 Input 값을 상태관리하기 위한 useState
  const [record, setRecord] = useState([]);
  // 금메달, 은메달, 동메달이 추가로 필요하겠죠?
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  const inputCountryHandler = (e) => {
    setCountry(e.target.value);
  }
  const inputGoldHandler = (e) => {
    setGold(e.target.value);
  }
  const inputSilverHandler = (e) => {
    setSilver(e.target.value);
  }
  const inputBronzeHandler = (e) => {
    setBronze(e.target.value);
  }

  // 기록 추가: 국가별 메달 갯수를 입력하는 로직
  const addCountyHandler = (e) => {
    e.preventDefault();
    const newRecord = {
      id: new Date().getTime(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    }
    setRecord([...record, newRecord]);
    console.log(record);
  }

  // 업데이트로직: find
  const handleUpdateCountry = (e) => {
    e.preventDefault();
    // 1. record 배열 안에 유저가 입력한 country가 포함된 object(객체)가 있는지 find 
    const existCountry = record.find((item) => item.country === country)
      // 있다면 업데이트 / 없으면 item 그대로 반환
      // 2. 업데이트: 
      // map을 돌려 객체 속 country와 입력한 country가 같으면 새로 입력한 객체 반환
      // 같지 않으면 alert
    if(existCountry) {
      setRecord(
        record.map((item)=>{
          if(item.country === country) {
            return {country: item.country, gold: gold, silver: silver, bronze: bronze}
            } else {
              return item;
            }
          })
      )
    } else {
      alert("국가가 존재하지 않습니다.")
    }
  };

  // 삭제로직: filter
  const handleDeleteCountry = (id) => {
    //유저가 클릭한 버튼의 id !== record의 id filter
    //유저가 누른 것만 빼고 새 배열을 만들어 주는 것
    // const deletedRecord = record.filter(()=>return 조건문)
    //setRecord(deletedRecord)
    const deletedRecord = record.filter((record) => {
      return record.id !== id
    });
    setRecord(deletedRecord);
  };

  return (
      <div className='container'>
        <h1 style={titleStyle}>2024 파리 올림픽 메달 트래커</h1>
        <form className='inputGroup'>
          <div style={inputStyle}>
            <label>국가명</label>
            <input type="text" value={country} onChange={inputCountryHandler}/>
          </div>
          <div style={inputStyle}>
            <label>금메달</label>
            <input type="text" value={gold} onChange={inputGoldHandler}/>
          </div>
          <div style={inputStyle}>
            <label>은메달</label>
            <input type="text" value={silver} onChange={inputSilverHandler}/>
          </div>
          <div style={inputStyle}>
            <label>동메달</label>
            <input type="text" value={bronze} onChange={inputBronzeHandler}/>
          </div>
          <div className="buttonGroup">
            <Button color="rgb(50, 95, 246)" onClick={addCountyHandler}>국가 추가</Button>
            <Button color="rgb(50, 95, 246)" onClick={handleUpdateCountry}>업데이트</Button>
          </div>
        </form>
        <table className='medalListTable'>
          <thead className='medalListHead'>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody className='medalListBody'>
          {record.map((record, index) => (
            <tr key={index}>
              <td>{record.country}</td>
              <td>{record.gold}</td>
              <td>{record.silver}</td>
              <td>{record.bronze}</td>
              <td><Button color="red" onClick={()=>handleDeleteCountry(record.id)}>삭제</Button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
  )};

  const Button = ({ children, onClick, color }) => {

    if (color) {
      return (
        <button 
          style={{
            backgroundColor: color,
            color: "white",
          }}
        onClick={onClick}>{children}</button>
      )
    }

    return <button onClick={onClick}>{children}</button>;
  };

export default App;
