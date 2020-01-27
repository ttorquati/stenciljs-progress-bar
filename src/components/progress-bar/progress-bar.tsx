import { Component, Prop, h, Watch, Element } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar {
  @Prop({ reflect: true }) progress: number;

  @Element() el: HTMLElement;

  @Watch('progress')
  handleWatchProgress() {
    const progressBarInner = this.$$('.progress-bar-inner');
    progressBarInner['style'].width = `${this.progress}%`;
  }

  // Shadow Root Query Selector
  private $$(el: string) {
    return this.el.shadowRoot.querySelector(el);
  }

  render() {
    return (
      <div class="progress-bar">
        <span><slot name="start-message"/> {this.progress}% <slot name="end-message"/></span>
        <div class="progress-bar-inner"></div>
      </div>
    );
  }
}
