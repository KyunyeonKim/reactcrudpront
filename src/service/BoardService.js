import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/api/board";
const BOARD_API_DELETE_URL = "http://localhost:8080/api/read-board/";

class BoardService {
  getBoards() {
    return axios.get(BOARD_API_BASE_URL);
  }

  createBoard(board) {
    return axios.post(BOARD_API_BASE_URL, board);
  }

  getOneBoard(no) {
    return axios.get(BOARD_API_BASE_URL + "/" + no);
  }

  updateBoard(no, board) {
    return axios.put(BOARD_API_BASE_URL + "/" + no, board);
  }
  deleteBoard(no) {
    return axios.delete(BOARD_API_DELETE_URL + no);
  }
}

export default new BoardService();
