import { connect } from 'react-redux';
import ListIndex from './list_index';
import { selectBoardDetailLists } from '../../reducers/selectors';

const mapStateToProps = state => ({
  lists: selectBoardDetailLists(state)
});

export default connect(
  mapStateToProps,
  null
)(ListIndex);
