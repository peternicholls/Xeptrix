/**
 * @package: Xeptrix
 * @module: RTFHeader component
 * @file: src/classes/components/RTFHeader.class.ts
 * @description: This is the RTFHeader component class which is responsible for building the RTF header
 *
 * @todo: refactor for introspection instead of boolean flags
 * @todo: implement the rest of the header elements
 */

import RtfComponent from '../interfaces/RtfComponent.interface';
import RtfElement from '../interfaces/RtfElement.interface';

interface HeaderElement extends RtfElement {}

class RTFHeader implements RtfComponent {
  private elements: HeaderElement[];

  constructor() {
    this.elements = [];
  }

  build(): string {
    let headerString = '{\\rtf1';

    // Conditionally append the string representations of other elements
    this.elements.forEach((element) => {
      if (element.isNotEmpty()) {
        headerString += element.toString();
      }
    });

    return headerString;
  }
}

export default RTFHeader;