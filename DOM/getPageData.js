/**
 * Write function getPageData which detects horizontal and vertical scroll and returns a special object with such data.
 * This function doesn't take parameters.
 * The function should return a special object with properties:

  let result = {
      windowHeight: 200,
      windowWidth: 100,

      documentHeight: 300,
      documentWidth: 400,
      
      currentScrollFromTop: 100,
      currentScrollFromLeft: 100,
  };
  windowHeight: a number value, the height of the browser window in pixels.
  windowWidth: a number value, the width of the browser window in pixels.
  documentHeight: a number value, full document height.
  documentWidth: a number value, full document width.
  currentScrollFromTop: a number in pixels of content scrolled in the top, zero if there is no scroll.
  currentScrollFromLeft: a number in pixels of content scrolled in the left, zero if there is no scroll.
  Note: You should get width/height of a document taking into account older browsers as well, 
  as described here: Width/height of the document. It will be checked by tests.
 */

  export function getPageData() {
    // the full document height, Width/height of the whole document, with the scrolled out part:
    const documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  
    const documentWidth = Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    );
  
    // Width/height of the visible part of the document (content area width/height):
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;
  
    // 'Current scroll from the top: ' + window.pageYOffset;
    // 'Current scroll from the left: ' + window.pageXOffset;
    const currentScrollFromTop = window.scrollY || window.pageYOffset;
    const currentScrollFromLeft = window.scrollX || window.pageXOffset;
  
    return ({
      windowHeight,
      windowWidth,
      documentHeight,
      documentWidth,
      currentScrollFromTop,
      currentScrollFromLeft,
    });
  }
  