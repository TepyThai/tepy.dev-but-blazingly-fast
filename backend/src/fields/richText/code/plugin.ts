const withVideo = (incomingEditor) => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) =>
    element.type === 'code' ? true : isVoid(element);

  return editor;
};

export default withVideo;
