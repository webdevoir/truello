import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListCreateForm from './list_create_form';

const mapStateToProps = (state, ownProps) => ({
  list: { name: '', board_id : ownProps.boardId }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createList: list => dispatch(createList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreateForm);
