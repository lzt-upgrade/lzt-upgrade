function clearHTML(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true,
        html: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}

function clearSVG(element) {
  return DOMPurify.sanitize(element, {
    USE_PROFILES: {
        svg: true
    },
    FORBID_TAGS: [
        "style"
    ]
  });
}

export {
  clearHTML,
  clearSVG
}