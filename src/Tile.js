import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
	border: PropTypes.bool,
	hoverColors: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
	className: PropTypes.string,
	children: PropTypes.oneOfType([
				PropTypes.element,
				PropTypes.object,
				PropTypes.node
		])
};
const defaultProps = {
	clsPrefix: 'u-tile',
	border: true
};

class Tile extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		const {border,className,clsPrefix,children,hoverColors, ...others} = this.props;
		let classes = {};
		if(border) {
			classes[`${clsPrefix}-bordered`] = true;
		}
		if(hoverColors) {
			classes[`${clsPrefix}-hover-${hoverColors}`] = true;
		}
		let classNames = classnames(clsPrefix,classes);
		return(<div {...others} className={classnames(className,classNames)}>{children}</div> )
	}
};
Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
export default Tile;