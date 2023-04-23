function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fallbackCopyTextToClipboard(text, callback) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    if (successful && callback) {
      callback();
    }
  } catch (err) {}

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text, callback) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    if (callback) {
      callback();
    }
  });
}
export { Capitalize, copyTextToClipboard };
