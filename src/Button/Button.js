import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './styles.scss';


class Button extends React.Component {
  constructor(props) {
    super(props);

    this.setInitialState({
      className: props.className,
    });
  }

  render() {
    return (
      <a className={classNames('btn', this.props.className)} role="button">
        {this.props.children}
      </a>
    );
  }
}


Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};


export default Button;
