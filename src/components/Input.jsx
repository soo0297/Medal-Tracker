import React from "react";
import Button from "./Button";

const Input = ({
  record,
  setRecord,
  country,
  setCountry,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
}) => {
  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  };

  const inputCountryHandler = (e) => {
    setCountry(e.target.value);
  };
  const inputGoldHandler = (e) => {
    setGold(e.target.value);
  };
  const inputSilverHandler = (e) => {
    setSilver(e.target.value);
  };
  const inputBronzeHandler = (e) => {
    setBronze(e.target.value);
  };

  // record 배열 안에 유저가 입력한 country가 포함된 object(객체)가 있는지 find
  // checkExistance 함수로 add함수 위에 하나로 묶어서 표현해줌
  const checkExistance = record.find((item) => {
    if (item.country === country) {
      return true;
    } else {
      return false;
    }
  });

  // 기록 추가: 국가별 메달 갯수를 입력하는 로직
  const addCountyHandler = (e) => {
    e.preventDefault();

    // 유효성 검사: 국가명 미입력시 alert
    if (!country) {
      alert("국가명을 입력해주세요");
      return;
    }

    // 유효성검사: 입력한 국가명이 리스트에 있으면 이미 등록되어 있다고 알려주기
    if (checkExistance) {
      alert("이미 등록된 국가입니다.");
      //console.log(checkExistance);
    } else {
      const newRecord = {
        id: new Date().getTime(),
        country: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setRecord([...record, newRecord].sort((a, b) => b.gold - a.gold));
    }

    setCountry("");
    setGold("0");
    setSilver("0");
    setBronze("0");
  };

  // 업데이트로직: find
  const handleUpdateCountry = (e) => {
    e.preventDefault();
    // 유저가 입력한 country가 포함된 object(객체)가 있다면 업데이트 / 없으면 item 그대로 반환
    // map을 돌려 객체 속 country와 입력한 country가 같으면 새로 입력한 객체 반환
    // 같지 않으면 alert
    if (!checkExistance) {
      alert("등록되지 않은 국가입니다.");
      return;
    }

    // if (checkExistance) {
    setRecord(
      record
        .map((item) => {
          if (item.country === country) {
            return {
              country: item.country,
              gold: gold,
              silver: silver,
              bronze: bronze,
            };
          } else {
            return item;
          }
        })
        .sort((a, b) => b.gold - a.gold)
    );

    // } else {
    //   alert("등록되지 않은 국가입니다.");
    // }

    setCountry("");
    setGold("0");
    setSilver("0");
    setBronze("0");
  };

  return (
    <form className="inputGroup">
      <div style={inputStyle}>
        <label>국가명</label>
        <input type="text" value={country} onChange={inputCountryHandler} />
      </div>
      <div style={inputStyle}>
        <label>금메달</label>
        <input type="text" value={gold} onChange={inputGoldHandler} />
      </div>
      <div style={inputStyle}>
        <label>은메달</label>
        <input type="text" value={silver} onChange={inputSilverHandler} />
      </div>
      <div style={inputStyle}>
        <label>동메달</label>
        <input type="text" value={bronze} onChange={inputBronzeHandler} />
      </div>
      <div className="buttonGroup">
        <Button color="rgb(50, 95, 246)" onClick={addCountyHandler}>
          국가 추가
        </Button>
        <Button color="rgb(50, 95, 246)" onClick={handleUpdateCountry}>
          업데이트
        </Button>
      </div>
    </form>
  );
};

export default Input;
