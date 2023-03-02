import { useCallback, useState } from 'react';
import { Descendant } from 'slate';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

interface EditorProps {
  value: Descendant[];
}

export const PayloadEditor = ({ value }: EditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));
  const renderElement = useCallback(({ attributes, children, element }) => {
    console.log('renderElement', element);
    switch (element.type) {
      case 'h2':
        return <h1 {...attributes}>{children}</h1>;
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'link':
        return (
          <a {...attributes} href={element.url}>
            {children}
          </a>
        );
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

  return (
    <Slate value={value} editor={editor}>
      <Editable renderElement={renderElement} readOnly />
    </Slate>
  );
};
