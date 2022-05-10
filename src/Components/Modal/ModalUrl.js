import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
export default function ModalUrl(props) {
	// const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	const url = props.url;
	// if (url.includes("drive.google")) {
	// 	url += "?pid=explorer&efh=false&a=v&chrome=false&embedded=true";
	// }
	return (
		<Modal
			fullscreen={true}
			{...props}
			backdrop='static'
			keyboard={false}
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<iframe
				id='fred'
				style={{ border: "1px solid #666CCC", height: "100vh" }}
				title='PDF in an i-Frame'
				src={url}
				frameborder='1'
				scrolling='auto'></iframe>
		</Modal>
	);
}
