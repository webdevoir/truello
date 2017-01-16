import { connect } from 'react-redux';
import { updateList, deleteList } from '../../actions/list_actions';
import ListUpdateForm from './list_update_form';

const mapStateToProps = (state, ownProps) => ({
  list: ownProps.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateList: list => dispatch(updateList(list)),
  deleteList: id => dispatch(deleteList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUpdateForm);
