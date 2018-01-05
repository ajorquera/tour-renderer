import anchorme from 'anchorme';
const createDOMPurify = require('dompurify');
import { generateId } from '../helpers';

import { h, render, Component } from 'preact';

const DOMPurify = createDOMPurify();

export default class InfoElement extends Component<object, object> {
	public state: {isOpen: boolean, description: string, title: string};
	public props: {title?: string, description?: string, class?: string, id: string};
	public dom: Element;

	constructor(props) {
		super();

		props.title = props.title || 'Title';
		props.description = props.description || 'Description';
		props.class = props.class || '';
		props.isEdit = typeof props.isEdit === 'boolean' ? props.isEdit : false;

		this.state = {
			isOpen: false,
			description: this.sanitize(props.description),
			title: props.title
		};
	}

	public render(props, state) {
		return (
			<div ref={(dom) => {this.dom = dom; }} class={props.class + ' tr-info-element'} >
				<h5 class='tr-info-element-header'  onClick={(e) => this._toggleView()}>
					<div class='info-element-header' contentEditable={props.isEdit}>
						{state.title}
					</div>
				</h5>
				{state.isOpen &&
					<div contentEditable={props.isEdit} class='tr-info-element-body'
					     dangerouslySetInnerHTML={{__html: state.description}} />
				}

			</div>
		);
	}

	public sanitize(text: string) {
		return DOMPurify.sanitize(anchorme(text), {
			ALLOWED_ATTR: ['href'],
			ALLOWED_TAGS: ['a']
		});
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

		const event = new CustomEvent('toggle-info', {bubbles: true, detail: {isOpen}});
		this.dom.dispatchEvent(event);
	}

	private _onDelete(evt) {
		evt.dispatchEvent(new CustomEvent('click-delete', evt));
	}
}
