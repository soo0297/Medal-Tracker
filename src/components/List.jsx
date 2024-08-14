import React from "react";
import Button from "./Button";

const List = ({ record, setRecord }) => {
  // 삭제로직: filter
  const handleDeleteCountry = (id) => {
    //유저가 클릭한 버튼의 id !== record의 id filter
    //유저가 누른 것만 빼고 새 배열을 만들어 주는 것
    // const deletedRecord = record.filter(()=>return 조건문)
    //setRecord(deletedRecord)
    const userConfirm = confirm("정말로 삭제하시겠습니까?");
    if (!userConfirm) {
      return;
    }
    const deletedRecord = record.filter((record) => {
      return record.id !== id;
    });
    setRecord(deletedRecord);
  };

  return (
    <table className="medalListTable">
      <thead className="medalListHead">
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody className="medalListBody">
        {record.map((record, index) => (
          <tr key={index}>
            <td>{record.country}</td>
            <td>{record.gold}</td>
            <td>{record.silver}</td>
            <td>{record.bronze}</td>
            <td>
              <Button
                color="red"
                onClick={() => handleDeleteCountry(record.id)}
              >
                삭제
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
