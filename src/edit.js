import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<form{ ...useBlockProps() }>
			<input type="text" name="text" id="firstInp" placeholder='I dare you..'/>
			<button>weeee!</button>
		</form>
	);
}
