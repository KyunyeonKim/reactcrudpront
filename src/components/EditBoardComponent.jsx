// EditBoardComponent.js
import React, { useEffect, useState } from "react";
import BoardService from "../service/BoardService";
import { useNavigate, useParams } from "react-router-dom";

function EditBoardComponent() {
  const navigate = useNavigate();
  const { no } = useParams(); // 동적 파라미터 읽기

  const [state, setState] = useState({
    type: "",
    title: "",
    contents: "",
    memberNo: "",
  });

  const { type, title, contents, memberNo } = state;

  const changeTypeHandler = (event) => {
    setState({ ...state, type: event.target.value });
  };

  const changeTitleHandler = (event) => {
    setState({ ...state, title: event.target.value });
  };

  const changeContentsHandler = (event) => {
    setState({ ...state, contents: event.target.value });
  };

  const changeMemberNoHandler = (event) => {
    setState({ ...state, memberNo: event.target.value });
  };

  const updateBoard = (event) => {
    event.preventDefault();
    let board = {
      type,
      title,
      contents,
      memberNo,
    };
    console.log("board => " + JSON.stringify(board));

    BoardService.updateBoard(no, board).then((res) => {
      navigate("/board");
    });
  };

  const cancel = () => {
    navigate("/board");
  };

  // useEffect를 사용하여 컴포넌트가 마운트될 때와 파라미터가 변경될 때 데이터를 가져오게 수정
  useEffect(() => {
    BoardService.getOneBoard(no).then((res) => {
      let board = res.data;
      console.log("board => " + JSON.stringify(board));

      setState({
        type: board.type,
        title: board.title,
        contents: board.contents,
        memberNo: board.memberNo,
      });
    });
  }, [no]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Edit Board</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Type </label>
                  <select
                    placeholder="type"
                    name="type"
                    className="form-control"
                    value={type}
                    onChange={changeTypeHandler}
                  >
                    <option value="1">자유게시판</option>
                    <option value="2">질문과 답변</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Title </label>
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={changeTitleHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Contents </label>
                  <textarea
                    placeholder="contents"
                    name="contents"
                    className="form-control"
                    value={contents}
                    onChange={changeContentsHandler}
                  />
                </div>
                <div className="form-group">
                  <label> MemberNo </label>
                  <input
                    placeholder="memberNo"
                    name="memberNo"
                    className="form-control"
                    value={memberNo}
                    onChange={changeMemberNoHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={updateBoard}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBoardComponent;
