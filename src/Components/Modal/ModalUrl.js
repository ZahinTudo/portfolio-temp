import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import FileViewer from "react-file-viewer";
// import { CustomErrorComponent } from "custom-error";

export default function ModalUrl(props) {
	// const [show, setShow] = useState(false);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const url = props.url;

	function onDocumentLoadSuccess({ numPages }) {
		// alert("asfd");
		setNumPages(numPages);
		setPageNumber(1);
	}
	const docs = [
		{ uri: url }, // Local File
	];
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
			{/* <a href={url} target='_blank' rel='noopener noreferrer'>
				pdf
			</a> */}
			{url.includes(".pdf") ? (
				<DocViewer
					pluginRenderers={DocViewerRenderers}
					documents={docs}
				/>
			) : (
				// <FileViewer
				// 	fileType={"pdf"}
				// 	filePath={url}
				// 	onError={console.log("err")}
				// />
				<iframe
					id='fred'
					style={{
						border: "1px solid #666CCC",
						width: "100%",
						height: "100vh",
					}}
					title='PDF in an i-Frame'
					src={`${url}`}
					frameborder='1'
					scrolling='auto'
				/>
			)}
		</Modal>
	);
}
