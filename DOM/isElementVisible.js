export function isElementVisible(element) {
  if (!element || element===undefined) return false;
  if( element.offsetWidth || element.offsetHeight) return true;
 }
 