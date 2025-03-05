/**
 * It should create an empty <div> element (cover-element) with a cover CSS class name.
 * The cover element should be positioned absolutely. All positioning styles must be added to the style property.
 * The cover element should have the same width/height as the elementToCover. Width and height should be set in style property.
 * It should be positioned covering the elementToCover using top, left CSS properties.
 * Its positioning should work correctly when a document has a scroll of any kind.
 * The createBlurredCoverElement function must return created div element.
 * The function should not append any element to the page. If you do it another way, your solution may not pass the tests.} elementToCover 
 */
export function createBlurredCoverElement(elementToCover) {
  const coordinates = elementToCover.getBoundingClientRect()

  const coverElement = document.createElement('div');
  coverElement.classList.add('cover');
  coverElement.style.position = 'absolute';
  coverElement.style.width = `${coordinates.width}px`;
  coverElement.style.height = `${coordinates.height}px`;
  coverElement.style.top = `${coordinates.top + window.scrollY}px`;
  coverElement.style.left = `${coordinates.left + window.scrollX}px`;

  return coverElement;

}
