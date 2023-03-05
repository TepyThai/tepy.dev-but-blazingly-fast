/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Modal, useModal } from '@faceless-ui/modal';
import { Transforms } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { ElementButton } from 'payload/components/rich-text';
import { Form, Select, Text, Submit } from 'payload/components/forms';
import { MinimalTemplate, Button, X } from 'payload/components';
import CodeIcon from '../Icon';

import './index.scss';

const initialFormData = {
  languages: 'jsx',
};

const languages = [
  {
    label: 'JavaScript',
    value: 'javascript',
  },
  {
    label: 'TypeScript',
    value: 'typescript',
  },
  {
    label: 'HTML',
    value: 'html',
  },
  {
    label: 'CSS',
    value: 'css',
  },
  {
    label: 'JSX',
    value: 'jsx',
  },
];

const baseClass = 'code-rich-text-button';

const insertCode = (editor, { language, snippet }) => {
  const text = { text: ' ' };

  const code = {
    type: 'code',
    language,
    snippet,
    children: [text],
  };

  const nodes = [code, { type: 'p', children: [{ text: '' }] }];

  if (editor.blurSelection) {
    Transforms.select(editor, editor.blurSelection);
  }

  Transforms.insertNodes(editor, nodes);
  ReactEditor.focus(editor);
};

const CodeButton: React.FC<{ path: string }> = ({ path }) => {
  const { openModal, toggleModal } = useModal();
  const editor = useSlate();
  const [renderModal, setRenderModal] = useState(false);
  const modalSlug = `${path}-add-code`;

  const handleAddCode = useCallback(
    (_, { language, snippet }) => {
      insertCode(editor, { language, snippet });
      toggleModal(modalSlug);
      setRenderModal(false);
    },
    [editor, toggleModal]
  );

  useEffect(() => {
    if (renderModal) {
      openModal(modalSlug);
    }
  }, [renderModal, openModal, modalSlug]);

  return (
    <Fragment>
      <ElementButton
        className={baseClass}
        format="code"
        onClick={(e) => {
          e.preventDefault();
          setRenderModal(true);
        }}
      >
        <CodeIcon />
      </ElementButton>
      {renderModal && (
        <Modal slug={modalSlug} className={`${baseClass}__modal`}>
          <MinimalTemplate className={`${baseClass}__template`}>
            <header className={`${baseClass}__header`}>
              <h3>Add Code</h3>
              <Button
                buttonStyle="none"
                onClick={() => {
                  toggleModal(modalSlug);
                  setRenderModal(false);
                }}
              >
                <X />
              </Button>
            </header>
            <Form onSubmit={handleAddCode} initialData={initialFormData}>
              <Select
                required
                label="Choose Language"
                options={languages}
                name="language"
              />
              <Text label="Code Snippet" required name="snippet" />
              <Submit>Add Code</Submit>
            </Form>
          </MinimalTemplate>
        </Modal>
      )}
    </Fragment>
  );
};

export default CodeButton;
