import { connect } from 'react-redux';
import { selectLists } from '../../reducers/selectors';
import { fetchLists } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: selectLists(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLists: boardId => dispatch(fetchLists(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);
