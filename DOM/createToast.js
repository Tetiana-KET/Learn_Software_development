/**
 * Write the function createToast which creates an HTML element for a toast message. Toast message - it is a small pop-up message often at the top of the screen.
 * It should create an empty <div> element with a toast CSS class name.
 * To this element it should add CSS styles: position: fixed; top: 20px; right: 20px;.
 * These styles must be applied by the style property of an element.
 * An element passed as an element parameter to the function, should be inserted in created <div> element as an only child.
 * The createToast function must return created div element.
 * The function should not append any element to the page. If you do it another way, your solution may not pass the tests.
 */
export function createToast(element) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.right = '20px'
  toast.appendChild(element);
  return toast;
}
