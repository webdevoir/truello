import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { selectBoards, selectSharedBoards } from '../../reducers/selectors';

const mapStateToProps = state => ({
  boards: selectBoards(state),
  sharedBoards: selectSharedBoards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
