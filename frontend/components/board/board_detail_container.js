import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import BoardDetail from './board_detail';

const mapStateToProps = state => ({
  boardDetail: state.boardDetail
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
