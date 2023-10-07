import React, { useEffect, useState } from "react";
import BoardService from "../service/BoardService";
import { useNavigate, useParams } from "react-router-dom";
import "../css/read.css";

function ReadBoardComponent(props) {
  const [board, setBoard] = useState({});
  const navigate = useNavigate();
  const { no } = useParams(); // useParams 훅을 사용하여 동적 파라미터 읽기

  useEffect(() => {
    BoardService.getOneBoard(no).then((res) => {
      setBoard(res.data);
    });
  }, [no]); // 동적 파라미터 값이 변경될 때만 useEffect 실행

  const returnBoardType = (typeNo) => {
    let type = null;
    if (typeNo === 1) {
      type = "자유게시판";
    } else if (typeNo === 2) {
      type = "질문과 답변 게시판";
    } else {
      type = "타입 미지정";
    }

    return (
      <div className="row">
        <label> Board Type: {type}</label>
      </div>
    );
  };

  const returnDate = (cTime, uTime) => {
    return (
      <div className="row">
        <label>
          생성일: [{cTime}] / 최종 수정일: [{uTime}]
        </label>
      </div>
    );
  };

  const goToList = () => {
    navigate("/board"); // useNavigate를 사용하여 페이지 이동
  };

  const goToEdit = () => {
    navigate(`/edit/${no}`); // 수정 페이지로 이동
  };

  const deleteView = () => {
    BoardService.deleteBoard(no).then((res) => {
      console.log("delete result => " + JSON.stringify(res));
      navigate("/board"); // 삭제 후 목록 페이지로 이동
    });
  };

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">Read Detail</h3>
        <div className="card-body">
          {returnBoardType(board.type)}
          <div className="row">
            <label>Title</label>: {board.title}
          </div>

          <div className="row">
            <label>Contents</label>: <br></br>
            <textarea value={board.contents} readOnly />
          </div>

          <div className="row">
            <label>MemberNo</label>: {board.memberNo}
          </div>

          {returnDate(board.createdTime, board.updatedTime)}
          <button className="btn btn-primary" onClick={goToList} style={{ marginLeft: "10px" }}>
            글 목록으로 이동
          </button>
          <button className="btn btn-success" onClick={goToEdit} style={{ marginLeft: "10px" }}>
            수정
          </button>
          <button className="btn btn-danger" onClick={deleteView} style={{ marginLeft: "10px" }}>
            글 삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadBoardComponent;
