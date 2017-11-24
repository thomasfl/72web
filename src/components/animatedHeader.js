import React, {Component} from 'react';
import SVG  from 'react-inlinesvg';

class AnimatedHeader extends Component {

	render() {
		return (
			<div className="photo_background">
				<div className="logo">
					<SVG className="72web-svg" src="logo.svg"/>
				</div>
			</div>
		);
	}
}

export default AnimatedHeader;
