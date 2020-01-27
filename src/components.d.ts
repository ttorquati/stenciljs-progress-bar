/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ProgressBar {
    'progress': number;
  }
}

declare global {


  interface HTMLProgressBarElement extends Components.ProgressBar, HTMLStencilElement {}
  var HTMLProgressBarElement: {
    prototype: HTMLProgressBarElement;
    new (): HTMLProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    'progress-bar': HTMLProgressBarElement;
  }
}

declare namespace LocalJSX {
  interface ProgressBar {
    'progress'?: number;
  }

  interface IntrinsicElements {
    'progress-bar': ProgressBar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'progress-bar': LocalJSX.ProgressBar & JSXBase.HTMLAttributes<HTMLProgressBarElement>;
    }
  }
}


