import { Button, Form, Input } from 'antd';
import React from 'react';

let ReactQuill = (p: any) => null;
if (process.browser) {
  ReactQuill = require('react-quill').default;
}
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  // [{ direction: 'rtl' }], // text direction

  // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  // [{ font: [] }],
  // [{ align: [] }],

  ['clean'], // remove formatting button
];
export default function PostForm({ initialValues, onFinish }) {
  return (
    <Form initialValues={initialValues} onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Post title" rules={[{ required: true }]}>
        <Input type="text" placeholder="Post title" size="large" />
      </Form.Item>
      <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
        <Input type="text" placeholder="Slug" size="large" />
      </Form.Item>
      <Form.Item
        name="content"
        label="Content"
        rules={[{ required: true }]}
        // rules={[
        //   {
        //     validator: () => {
        //       // @ts-ignoreh-32 mb-12 text-xl
        //       // console.log(reactQuillRef.current.getEditor().getContents());
        //       return Promise.resolve();
        //     },
        //   },
        // ]}
        getValueFromEvent={content => {
          return content;
        }}
      >
        <ReactQuill
          theme="bubble"
          preserveWhitespace
          modules={{
            syntax: true, // Include syntax module
            toolbar: toolbarOptions,
          }}
        />
      </Form.Item>
      <Button.Group size="large">
        <Button type="link" href="/admin">
          Cancel
        </Button>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        {/* <Button onClick={handleDraftSave}>Save Draft</Button> */}
      </Button.Group>
    </Form>
  );
}
