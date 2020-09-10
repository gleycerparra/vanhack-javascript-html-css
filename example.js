class AppliedEventButton extends HTMLElement {
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
        this.innerHTML = this.render();

    }

    styles() {
        return /*html*/`
    <style>
    </style>
    `
    }

    render() {
        return /*html*/`
        ${this.styles()}
        <button type="button" class="btn applied-events-btn" onclick="openAppliedEventsList()">Applied Events</button>
    `
    }
}