import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodosItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.propsTodosItem.completed
        ? 'line-through'
        : 'none',
    };
  };

  render() {
    // pull out the value of id and title jadi kita nggk pakai kata props lagi nantinya
    const { id, title } = this.props.propsTodosItem;
    return (
      <div style={this.getStyle()}>
        <h3>
          <input
            type='checkbox'
            onChange={this.props.propsMarkCompleteTodos.bind(this, id)}
          />{' '}
          {/* nah karena dia atas udah di bikinin variabel { id, title } jadi disini kita tinggal manggil langsung tanpa harus pake props lagi */}
          {title}
          <button
            onClick={this.props.propsDelTodosJs.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </h3>
      </div>
    );
  }
}

TodosItem.propTypes = {
  propsTodosItem: PropTypes.object.isRequired,
};

// variabel
const btnStyle = {
  background: 'red',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};
