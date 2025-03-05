/**Write function isElementScrolled which detects horizontal and vertical scroll and returns a special object with such data. 
 * This function takes one parameter:
 * element - any DOM element or null or undefined.
 * The function should return a special object with properties:

    let result = {
        scrollTop: 100, // a number in pixels of content scrolled in the top, zero if there is no scroll 
        scrollLeft: 100, // a number in pixels of content scrolled in the left, zero if there is no scroll

        isScrolled: true; //if there is a horizontal or vertical scroll;
                          // 'false': if there are no scroll at all;
    };
*/
export function isElementScrolled(element) {

  if (!element) return({
    scrollTop: null,
    scrollLeft: null,
    isScrolled:  null,
  })

  const scrollTop=  element.scrollTop;
  const scrollLeft=   element.scrollLeft;
  const  isScrolled = !!element.scrollTop || !!element.scrollLeft;

  return ({
    scrollTop,
    scrollLeft,
    isScrolled,
  });
}