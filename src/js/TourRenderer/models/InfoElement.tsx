declare var window: any;

import linkState from 'linkstate';
import anchorme from 'anchorme';
const createDOMPurify = require('dompurify');
import { generateId } from '../helpers';
import { h, render, Component } from 'preact';

const DOMPurify = createDOMPurify();

export default class InfoElement extends Component<object, object> {
	public static EVENTS = {
		UPDATE_INFO_ELEMENT: 'UPDATE_INFO_ELEMENT',
		TOGGLE_INFO_ELEMENT: 'TOGGLE_INFO_ELEMENT',
		DELETE_INFO_ELEMENT: 'DELETE_INFO_ELEMENT'
	};

	public state: {isOpen: boolean, description: string, title: string, _description: string, _title: string};
	public props: {
		id: string,
		isEdit?: boolean,
		title?: string,
		description?: string,
		classPrefix: string
	};
	public dom: Element;

	constructor(props) {
		super();

		props.classPrefix = props.classPrefix ? `${props.classPrefix}-info-element` : 'info-element';

		this.state = {
			isOpen: false,
			title: props.title,
			description: props.description,
			_title: props.title,
			_description: props.description
		};
	}

	public render(props, state) {
		const description = props.isEdit && state.isOpen ? state._description : this.addAnyLink(state._description);

		let headerClass = `${props.classPrefix}-header ` + (state.isOpen ? '' : `${props.classPrefix}-clickable`);
		headerClass += state.isOpen && props.isEdit ? `${props.classPrefix}-editable` : '';

		const closeClass = `${props.classPrefix}-close ${props.classPrefix}-clickable`;

		let bodyClass = `${props.classPrefix}-body `;
		bodyClass += state.isOpen && props.isEdit ? `${props.classPrefix}-editable` : '';

		return (
			<div ref={(dom) => { this.dom = dom; }} class={`${props.classPrefix}`} id={props.id}>
				{state.isOpen && <button class={closeClass} onClick={this._onClose.bind(this)}>x</button>}
				<h4 contentEditable={props.isEdit}
					class={headerClass}
					onInput={linkState(this, '_title', 'target.textContent')}
					onClick={(e) => {!state.isOpen && this._toggleView()}}>

					{state._title}
				</h4>
				{state.isOpen &&
					<p contentEditable={props.isEdit} class={bodyClass}
					onInput={linkState(this, '_description', 'target.textContent')}
					dangerouslySetInnerHTML={!props.isEdit && {__html: this.sanitize(description)}}>
						{props.isEdit && description}
					</p>
				}

				{state.isOpen && props.isEdit &&
					<div class={`${props.classPrefix}-footer `}>
						<button onClick={this._updateContent.bind(this)}><i class='fa fa-disk'></i>Save</button>
						&nbsp;
						<button onClick={this._onDelete.bind(this)}>
							<i class='fa fa-trash'></i>Delete
						</button>
					</div>
				}
			</div>
		);
	}

	public sanitize(text: string) {
		return DOMPurify.sanitize(text, {
			ALLOWED_ATTR: ['href'],
			ALLOWED_TAGS: ['a']
		});
	}

	public addAnyLink(text: string) {
		return anchorme(text);
	}

	private _updateContent(e) {
		this.setState({
			title: this.state._title,
			description: this.state._description
		});
		this._toggleView(false);
		this._dispatchEvent(InfoElement.EVENTS.UPDATE_INFO_ELEMENT);
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

		this._dispatchEvent(InfoElement.EVENTS.TOGGLE_INFO_ELEMENT);
	}

	private _onClose(ev) {
		this.setState({
			_description: this.state.description,
			_title: this.state.title
		});
		this._toggleView(false);
	}

	private _onDelete(evt) {
		this._dispatchEvent(InfoElement.EVENTS.DELETE_INFO_ELEMENT);
	}

	private _dispatchEvent(eventName, info: any = this._getSimpleState()) {
		const event = new CustomEvent(eventName, { bubbles: true, detail: info});
		this.dom.dispatchEvent(event);
	}

	private _getSimpleState() {
		return {
			title: this.state.title,
			description: this.state.description,
			id: this.props.id
		};
	}
}

window.anchorme = anchorme;
window.DOMPurify = DOMPurify;
