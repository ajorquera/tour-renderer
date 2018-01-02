import anchorme from 'anchorme';
import { generateId } from '../helpers';

import { h, render, Component } from 'preact';

export default class InfoElement extends Component<object, object> {
	public state: {isOpen: boolean};
	public props: {title: string, description: string};

	constructor(props) {
		super();

		props.title = props.title || 'Title';
		props.description = props.description || 'Description';

		this.state = {
			isOpen: false
		};
	}

	public render(props, state) {
		return (
			<div class={state.isOpen && 'hide'}>
				<div class='info-element-header' onClick={(e) => this._toggleView()}>
					<input value={props.title}/>
				</div>
				<div class='info-element-body'>
					<input value='{props.description}' />
				</div>
				{ props.isEdit &&
					<div class='info-element-footer'>
						 <button onClick={this._onDelete}>Delete</button>
					</div>
				}
			</div>
		);
	}

	private _toggleView(show?: boolean) {
		let isOpen: boolean;

		if (typeof show !== 'boolean') {
			isOpen = !this.state.isOpen;
		} else {
			isOpen = show;
		}

		this.setState({
			isOpen
		});
	}

	private _onDelete(evt) {
		evt.dispatchEvent(new CustomEvent('click-delete', evt));
	}
}
