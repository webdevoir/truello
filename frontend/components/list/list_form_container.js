import { connect } from 'react-redux';
import { createList, updateList, deleteList } from
  '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => {
  let list = { name: '', board_id : ownProps.boardId };
  if (ownProps.formType === 'edit') {
    list = ownProps.list;
  }
  return {
    list,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === 'new' ? createList : updateList;
  return {
    action: list => dispatch(action(list)),
    deleteList: id => dispatch(deleteList(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
