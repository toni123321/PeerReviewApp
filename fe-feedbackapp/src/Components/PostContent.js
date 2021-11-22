import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import { Accordion } from 'react-bootstrap';

function PostContent({post}) {
    return (
        <div>
            <h6>Description</h6>
            <TextareaAutosize className="w-100 p-3 border rounded" disabled>{post.description}</TextareaAutosize>
            <br/>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Attached file(s)</Accordion.Header>
                <Accordion.Body>
                <iframe src="https://ihatetomatoes.net/wp-content/uploads/2017/01/react-cheat-sheet.pdf" width="100%" height="400vh"/>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

        </div>
    );
}

export default PostContent;