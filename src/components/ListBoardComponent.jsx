import React, { useEffect, useState } from "react";
import BoardService from "../service/BoardService";
import { useNavigate } from "react-router-dom";
import "../css/list.css";

function ListBoardComponent() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    loadBoards(); // 페이지가 로드될 때 데이터를 로드하기 위해 함수 호출
  }, []);

  const loadBoards = () => {
    BoardService.getBoards().then((res) => {
      setBoards(res.data);
    });
  };

  const createBoard = () => {
    navigate("/create-board");
  };

  const readBoard = (no) => {
    navigate(`/read-board/${no}`);
  };

  return (
    <div>
      <h2 className="text-center">Board List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={createBoard}>
          글쓰기
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>글번호</th>
              <th>타이틀</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((board) => (
              <tr key={board.no}>
                <td>{board.no}</td>
                <td>
                  <a onClick={() => readBoard(board.no)}>{board.title}</a>
                </td>
                <td>{board.memberNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBoardComponent;
