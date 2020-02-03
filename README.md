## Burlak React Modal

```
npm i --save burlak-react-modal
```

```
import Modal from 'burlak-react-modal';
<Modal
	className={'my-modal'}
	theme="some-unique-id-for-customize"
	dark
	centered
	title={'Hi!'}
	opened={this.state.bool}
	maxWidth={400}
	beforeSHow={(instance) => {}}
	beforeHide={(instance) => {}}
	onShow={(instance) => {}}
	onHide={(instance) => {
		this.setState({
			bool: false
		});
	}}
	buttons={[{
		text: 'Cancel',
		type: 'error',
		onClick: (e, instance) => {
			console.log(e, instance);
		}
	},{
		text: 'Send',
		type: 'success',
		onClick: (e, instance) => {
			console.log(e, instance);
		}
	},{
		text: 'One more button',
		hidden: true
	}]}
>
	Test modal
</Modal>
```
