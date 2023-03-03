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
    switch (element.type) {
      case 'h2':
        return <h2 {...attributes}>{children}</h2>;
      case 'h3':
        return <h3 {...attributes}>{children}</h3>;
      case 'h4':
        return <h4 {...attributes}>{children}</h4>;
      case 'h5':
        return <h5 {...attributes}>{children}</h5>;
      case 'h6':
        return <h6 {...attributes}>{children}</h6>;
      case 'hr':
        return (
          <div contentEditable={false}>
            <span {...attributes} className="rich-text-hr">
              <hr className="rich-text-hr" />
              {children}
            </span>
          </div>
        );
      case 'ul':
        return <ul {...attributes}>{children}</ul>;
      case 'ol':
        return <ol {...attributes}>{children}</ol>;
      case 'li':
        return <li {...attributes}>{children}</li>;
      case 'img':
        return <img {...attributes} src={element.url} alt={element.alt} />;
      case 'code':
        return (
          <pre {...attributes}>
            <code>{children}</code>
          </pre>
        );
      case 'indent':
        return (
          <span className="inline-block pl-6" {...attributes}>
            {children}
          </span>
        );
      case 'relationship':
        if (!element.value) return <p {...attributes}>{children}</p>;
        return (
          <a
            className=" inline-block py-8 px-6 bg-white-ish text-brass  not-prose w-full h-full"
            href={`/w/${element.value.slug}`}
          >
            <h1>{element.value.title}</h1>
          </a>
        );
      case 'upload':
        const { url } = element.value;
        const { width } = element.value.sizes.thumbnail;
        return (
          <img
            className="w-5/6 mx-auto"
            src={url}
            alt={element.value.alt}
            width={width}
          />
        );
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'link':
        if (element.linkType === 'custom') {
          return element.newTab ? (
            <a
              {...attributes}
              href={element.url}
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          ) : (
            <a {...attributes} href={element.url}>
              {children}
            </a>
          );
        }
        return element.newTab ? (
          <a
            {...attributes}
            href={`/${element.doc.relationTo}/${element.doc.value.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        ) : (
          <a
            {...attributes}
            href={`/${element.doc.relationTo}/${element.doc.value.id}`}
          >
            {children}
          </a>
        );
      default:
        return (
          <p className="mt-0 mb-0" {...attributes}>
            {children}
          </p>
        );
    }
  }, []);

  const renderLeaf = useCallback(({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
      children = <em>{children}</em>;
    }

    if (leaf.underline) {
      children = <u>{children}</u>;
    }

    if (leaf.strikethrough) {
      children = <s>{children}</s>;
    }

    if (leaf.code) {
      children = <code>{children}</code>;
    }

    return <span {...attributes}>{children}</span>;
  }, []);

  return (
    <Slate value={value} editor={editor}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly
      />
    </Slate>
  );
};
