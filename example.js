class AppliedEvent extends HTMLElement {
    constructor() {
        super();

        this._event = null;
    }

    get event() {
        return this._event;
    }

    set event(val) {
        this.setAttribute("event", val);
    }

    static get observedAttributes() { return ["event"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        // name will always be "country" due to observedAttributes
        switch (name) {
            case "event": {
                this._event = newValue;
            }
        }
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.render();
    }

    styles() {
        return /*html*/`
    <style>
    .applied-event {
      display: flex;
      padding: 8px;
      color: #455A64;
      align-items: center;
    }
  
    .applied-events-description {
      display: flex;
      flex-direction: column;
    }
  
    .applied-event-title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  
    .applied-event-avatar {
      vertical-align: middle;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 4px;
    }
  
    .applied-event-date {
      margin-top: 4px;
    }
  
    .applied-event-icon {
      width: 30%;
      cursor: pointer;
    }
    </style>
    `
    }

    render() {
        return /*html*/`
    ${this.styles()}
    <div class="applied-event">
      <img src="https://www.pcma.org/wp-content/uploads/2017/07/Event-Technology.jpg"
        class="applied-event-avatar" alt="Avatar" class="applied event avatar">
      <div class="applied-events-description">
        <div class="applied-event-title">The Present and Future of Technology in Business Events</div>
        <small class="applied-event-date">January 10, 2020</small>
      </div>
      <img class="applied-event-icon" src="https://svgshare.com/i/PTH.svg" />
    </div>
   `
    }
}