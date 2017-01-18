import { connect } from 'react-redux';
import { selectLists } from '../../reducers/selectors';
import ListIndex from './list_index';

const mapStateToProps = state => {
  return {
    lists: selectLists(state)
  };
};

export default connect(
  mapStateToProps
)(ListIndex);
