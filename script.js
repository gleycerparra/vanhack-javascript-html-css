'use strict'
const events = [
    {
        id: 1,
        title: "The Present and Future of Technology in Business Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Ohio - EEUU",
        type: "Leap",
        backgroundColor: "#2CF06F",
        color: "#FFFFFF",
        specialStyle: "border: 4px solid #2CF06F",
        imageUrl: "https://www.pcma.org/wp-content/uploads/2017/07/Event-Technology.jpg",
        date: "January 10, 2020"
    },
    {
        id: 2,
        title: "Virtual Hiring Event for Women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Vancouver - Canada",
        type: "Recruiting Mission",
        backgroundColor: "#F07E2C",
        color: "#FFFFFF",
        specialStyle: "border: 4px solid #F07E2C",
        imageUrl: "https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cb0ec66f-0f9f-4821-81b9-27056473c7b3.jpg",
        date: "August 25, 2020"
    },
    {
        id: 3,
        title: "VanHackton 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Online",
        type: "Vanhackton",
        backgroundColor: "#2C98F0",
        color: "#FFFFFF;",
        specialStyle: "border: 4px solid #2C98F0",
        imageUrl: "https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2015/08/Hackaton-Aprendizaje.jpg",
        date: "All October, 2020"
    },
    {
        id: 4,
        title: "Premium Open House Experience - September",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Online",
        type: "Premium-only Webinar",
        backgroundColor: "#9F9B3E;",
        color: "#FFFFFF;",
        imageUrl: "https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/5f6f32fb-81cf-421c-87dc-d55edf33db4c.jpg",
        date: "September 5, 2020"
    },
    {
        id: 5,
        title: "Virtual Hiring Event for Women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Online",
        type: "MeetUp",
        backgroundColor: "#D9FFE3;",
        color: "#455A64",
        imageUrl: "https://www.meetup.com/blog/wp-content/uploads/2020/03/online-meeting-digital-image.jpg",
        date: "September 10, 2020"
    },
    {
        id: 6,
        title: "Virtual Hiring Event for Women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
        location: "Online",
        type: "Open Webinar",
        backgroundColor: "#FCEDC2;",
        color: "#455A64",
        imageUrl: "https://elearningindustry.com/wp-content/uploads/2020/06/webinar-based-training-and-helpful-strategies.jpg",
        date: "October 12, 2020"
    },
];
let appliedEvents = [];

function init() {
    const container = document.getElementById("events-container");
    const eventContainer = document.createElement("events-cards-container");
    eventContainer.setAttribute("events", JSON.stringify(events));
    container.appendChild(eventContainer);

    window.addEventListener("openEvent", (e) => {
        window.showModal(parseInt(e.detail));
    });
}

function showModal(id) {
    const event = events.find(item => item.id === id);
    const body = document.getElementsByTagName("body")[0];
    const dialog = document.createElement("event-card-dialog");
    dialog.setAttribute("events", JSON.stringify(events));
    dialog.setAttribute("selected-event", JSON.stringify(event));
    body.appendChild(dialog);
}

function openAppliedEventsList() {
    const event = new CustomEvent("openAppliedEventsList", {
        bubbles: true,
        cancelable: false
    });
    window.dispatchEvent(event)
}

class EventsCardsContainer extends HTMLElement {
    constructor() {
        super();
        this._events = null;
    }

    get events() {
        return this._events;
    }

    static get observedAttributes() { return ["events"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'events': {
                this._events = JSON.parse(newValue);
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
       .events-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 900px;
        }
        </style>
        `
    }

    render() {
        return /* html */`
        ${this.styles()}
        <div class="events-container">
        ${this.events.map(event => {
            return `<event-card
                id="${event.id}"
                title="${event.title}"
                description="${event.description}"
                location="${event.location}"
                type="${event.type}"
                background-color="${event.backgroundColor}"
                color="${event.color}"
                special-style="${event.specialStyle}"
                image-url="${event.imageUrl}"
                date="${event.date}"
                title="${event.title}"
            >
            </event-card>`
        }).join(' ')}
        </div>
      `
    }

}
class EventCard extends HTMLElement {
    constructor() {
        super();

        this.$title = null;

        this._id = null;
        this._title = null;
        this._description = null;
        this._location = null;
        this._type = null;
        this._backgroundColor = null;
        this._color = null;
        this._specialStyle = null;
        this._sharedIcon = null;
        this._imageUrl = '';
        this._date = null;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    set description(val) {
        this.setAttribute('description', val);
    }

    get location() {
        return this._location;
    }

    set location(val) {
        this.setAttribute('location', val);
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this.setAttribute('type', val);
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(val) {
        this.setAttribute('background-color', val);
    }

    get color() {
        return this._color;
    }

    set color(val) {
        this.setAttribute('color', val);
    }

    get specialStyle() {
        return this._specialStyle;
    }

    set specialStyle(val) {
        this.setAttribute('special-style', val);
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(val) {
        this.setAttribute('image-url', val);
    }

    get date() {
        return this._date;
    }

    set date(val) {
        this.setAttribute('date', val);
    }

    static get observedAttributes() { return ["id", "title", "description", "location", "type", "background-color", "color", "special-style", "image-url", "date"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'id': {
                this._id = newValue;
                break;
            }
            case 'title': {
                this._title = newValue;
                break;
            }
            case 'description': {
                this._description = newValue;
                break;
            }
            case 'location': {
                this._location = newValue;
                break;
            }
            case 'type': {
                this._type = newValue;
                break;
            }
            case 'background-color': {
                this._backgroundColor = newValue;
                break;
            }
            case 'color': {
                this._color = newValue;
                break;
            }
            case 'special-style': {
                this._specialStyle = newValue;
                break;
            }
            case 'image-url': {
                this._imageUrl = newValue;
                break;
            }
            case 'date': {
                this._date = newValue;
                break;
            }
        }
    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = this.render();
        this.$title = this.shadowRoot.querySelector('#title');
        this.$title.addEventListener('click', () => {
            this.showModal(this._id);
        })
    }

    showModal(id) {
        this.openEvent = new CustomEvent("openEvent", {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: id
        });
        this.dispatchEvent(this.openEvent);
    }

    styles() {
        return /*html*/`
        <style>
        .event-card {
            display: flex;
            margin: 16px;
            background: white;
            border-radius: 15px;
            box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            overflow: hidden;
            width: 304px;
            color: #455A64;
        }

        .event-card-header {
            width: 100%;
            margin-right: 12px;
            display: flex;
            position: relative;
        }

        .event-card-header-img {
            width: 100%;
        }

        .event-info {
            position: relative;
            text-align: center;
            padding: 16px;
            font-size: 0.8rem;
        }

        .event-title {
            font-size: 1rem;
            font-weight: bold;
        }

        .event-info-container {
            display: flex;
            justify-content: start;
            margin-bottom: 4px;
        }

        .event-info-icon {
            width: 13px;
            margin-right: 4px;
        }

        .description {
            font-size: 12px;
            opacity: 0.7;
            margin-bottom: 24px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }


        .premium-only-label {
            width: 160px;
            border-bottom-right-radius: 24px;
            background: #9F9B3E;
            color: #FFFFFF;
            position: absolute;
            top: 22px;
            font-weight: bold;
            text-align: center;
        }

        .event-footer {
            position: absolute;
            width: 100%;
            left: 0;
            display: flex;
            justify-content: space-between;
            height: 30px;
            bottom: 0;
            align-items: center;
        }
        </style>
        `
    }

    render() {
        const footer = `
        <div class="event-footer" style="background: ${this.backgroundColor};">
            <span style="margin-left: 16px">
                <slot name="type" style="color: ${this.color}; font-weight: bold; font-size: 16px;">${this.type}</slot>
            </span>
        </div>`;

        const premiumOnly = this.type === "Premium-only Webinar" ? `
        <div class="premium-only-label">
            Premium 
        </div> 
        ` : "";
        return /* html */`
        ${this.styles()}
        <div class="event-card" style="${this.specialStyle}">
          <div class="event-card-header">
              ${premiumOnly}
              <img class="event-card-header-img"
                src="${this.imageUrl}" />
          </div>
          <div class="event-info">
              <div style="margin-bottom: 8px">
                 <a id="title" href="#">
                   ${this.title}
                 </a>
              </div>
              <div class="event-info-container">
                <img src="https://svgshare.com/i/PM8.svg" class="event-info-icon" alt="calendar icon" />
                <div class="event-date">${this.date}</div>
             </div>
             <div class="event-info-container">
                 <img src="https://svgshare.com/i/PPt.svg" class="event-info-icon" alt="location icon" />
                 <div class="event-date">${this.location}</div>
              </div>
             <div class="description">
                <p>${this.description}
                </p>
             </div>
             ${footer}
          </div>
        </div>
      `
    }

}
class EventCardDialog extends HTMLElement {
    constructor() {
        super();

        this.$dialog = null;
        this.$closeBtn = null;
        this.$applyBtn = null;

        this._selectedEvent = null;
        this._events = null;
        this._appliedEvents = [];
    }

    get events() {
        return this._events;
    }

    set events(val) {
        this.setAttribute("events", val)
    }

    get appliedEvents() {
        return this._appliedEvents;
    }

    set appliedEvents(val) {
        this._appliedEvents = val;
    }

    get selectedEvent() {
        return this._selectedEvent;
    }

    set selectedEvent(val) {
        this.setAttribute("selected-event", val)
    }

    static get observedAttributes() { return ["events", "selected-event"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "events": {
                this._events = JSON.parse(newValue);
            } break;
            case "selected-event": {
                this._selectedEvent = JSON.parse(newValue);
            } break;
        }
    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = this.render();
        this.$dialog = this.shadowRoot.querySelector('#dialog');
        this.$closeBtn = this.shadowRoot.querySelector('#close-btn');
        this.$applyBtn = this.shadowRoot.querySelector('#apply-btn');
        this.$dialog.showModal();

        this.$closeBtn.addEventListener('click', () => {
            this.closeModal();
        })

        this.$applyBtn.addEventListener('click', () => {
            this.apply(this.selectedEvent);
        })
    }

    closeModal() {
        this.$dialog.close();
    }

    apply(selectedEvent) {
        this.closeModal();
        event = new CustomEvent("applyEvent", {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {
                selectedEvent: selectedEvent,
            }
        });
        this.dispatchEvent(event);
    }

    styles() {
        return /*html*/`
        <style>
       #dialog {
            position: fixed;
            top: 15%;
            left: 30%;
            margin-left: -100px;
            margin-top: -25px;
            background: #FFFFFF;
            box-shadow: 3px 8px 20px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            border: none;
            z-index: 2;
            width: 50%;
        }

        .dialog-close-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
        }

        .dialog-container {
            display: flex;
            min-height: 400px;
            max-height: 50vh;
        }

        .dialog-img-container {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            width: 100%;
            background-size: cover;
        }

        .dialog-img {
            width: 100%;
        }

        .dialog-img-footer {
            position: absolute;
            width: 100%;
            left: 0;
            display: flex;
            justify-content: space-between;
            height: 40px;
            bottom: 0;
            align-items: center;
        }

        .dialog-info-container {
            margin: 0 24px;
            color: #455A64;
            width: 80%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .dialog-event-type {
            font-weight: 300;
            font-size: 1.2rem;
            line-height: 29px;
        }

        .dialog-event-title {
            margin-top: 8px;
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 35px;
            margin-bottom: 8px;
        }

        .dialog-description {
            font-size: 0.75rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
        }

        #dialog-base {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            visibility: hidden;
        }

        #dialog-base:before {
            content:"";
            background: rgba(0, 0, 0, .8);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
        }

        dialog::backdrop {
            background: black;
            opacity: 0.7;
        }

        .btn {
            background: #2C98F0;
            border-radius: 20px;
            border: none;
            color: white;
            width: 150px;
            height: 40px;
            font-size: 20px;
            line-height: 24px;
            margin-top: auto;
            align-self: center;
            outline: none;
            cursor: pointer;
        }
        
        .event-info-container {
            display: flex;
            justify-content: start;
            margin-bottom: 4px;
        }

        .event-info-icon {
            width: 13px;
            margin-right: 4px;
        }

        .premium-only-label {
            height: 24px;
            width: 160px;
            border-bottom-right-radius: 24px;
            background: #9F9B3E;
            color: #FFFFFF;
            position: absolute;
            top: 22px;
            font-weight: bold;
            text-align: center;
        }

        .twitter-share-button {
            position: relative;
            height: 20px;
            box-sizing: border-box;
            padding: 1px 8px 1px 6px;
            background-color: #1b95e0;
            color: #fff;
            border-radius: 3px;
            font-weight: 500;
            cursor: pointer;
            outline: 0;
            text-decoration: none;
            margin-right: 14px;
            font-size: 14px;
        }

        .twitter-share-button i{
            position: relative;
            top: 2px;
            display: inline-block;
            width: 14px;
            height: 14px;
            background: transparent 0 0 no-repeat;
            background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E);
        }

        @media only screen and (max-device-width: 1024px) {

            #dialog {
                width: 87%;
            }

            .dialog-container {
                width: 100%;
                flex-direction: column;
                align-items: center;
            }
        }

        </style>
        `
    }

    render() {
        const sharedText = `${this.selectedEvent.title} - ${this.selectedEvent.location} (${this.selectedEvent.date})`;
        const premiumOnly = this.selectedEvent.type === "Premium-only Webinar" ? `
        <div class="premium-only-label">
            Premium 
        </div> 
        ` : "";
        return /* html */`
        ${this.styles()}
        <dialog id="dialog">
        <img id="close-btn" src="https://svgshare.com/i/PR5.svg" class="dialog-close-btn" alt="close button" />
      
        <div class="dialog-container">
            <div class="dialog-img-container" style="background: url('${this.selectedEvent.imageUrl}') no-repeat center; background-size: cover">
                ${premiumOnly}
                <div class="dialog-img-footer" style="background: ${this.selectedEvent.backgroundColor}">
                    <span style="margin-left: 16px">
                        <div name="type" style="color: ${this.selectedEvent.color}; font-weight: bold; font-size: 16px;">
                            ${this.selectedEvent.type}</div>
                    </span>
                    <a class="twitter-share-button"
                        href="https://twitter.com/intent/tweet?text=${sharedText}&url=${window.location.href}" 
                        target="_blank">
                      <i></i> Tweet
                    </a>
                </div>
            </div>
            <div class="dialog-info-container">
                <div class="dialog-event-type">${this.selectedEvent.type}</div>
                <div class="dialog-event-title">${this.selectedEvent.title}
                </div>
                <div class="event-info-container">
                    <img src="https://svgshare.com/i/PM8.svg" class="event-info-icon" alt="calendar icon" />
                    <div class="event-date">January 10, 2020</div>
                </div>
                <div class="event-info-container">
                    <img src="https://svgshare.com/i/PPt.svg" class="event-info-icon" alt="location icon" />
                    <div class="event-date">Online</div>
                </div>
                <p class="dialog-description">${this.selectedEvent.description}
                </p>
                <button id="apply-btn" class="btn">
                    Apply
                </button>
            </div>
        </div>
      </dialog>
      `
    }
}
class AppliedEventContainer extends HTMLElement {
    constructor() {
        super();

        this.$container = null;

        this._appliedEvents = [];
        this._event = null;

        window.addEventListener("applyEvent", (e) => {
            this.event = e.detail.selectedEvent;
            this.newEvent();
        });

        window.addEventListener("openAppliedEventsList", (e) => {
            this.showAppliedList();
        })
    }

    get event() {
        return this._event;
    }

    set event(value) {
        this._event = value;
    }

    get appliedEvents() {
        return this._appliedEvents;
    }

    set appliedEvents(value) {
        this._appliedEvents = value;
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    newEvent() {
        const eventProperties = {
            bubbles: true,
            cancelable: false,
            composed: true,
        }
        let notificationEvent = null;
        if (this.appliedEvents.find(item => item.id == this.event.id)) {
            notificationEvent = new CustomEvent("notificationEvent", {
                ...eventProperties,
                detail: {
                    message: `You have already applied to this event, check your applied events list for more information`,
                }
            });
        } else {
            this.appliedEvents = [
                ...this.appliedEvents,
                this.event
            ];
            if (this.event.type === 'Premium-only Webinar') {
                notificationEvent = new CustomEvent("notificationEvent", {
                    ...eventProperties,
                    detail: {
                        message: `To apply to this event, you need to become in a premium user, read more information about it <a href="https://vanhack.com/checkout" target="_blank">here</a>`,
                        type: 'warning'
                    }
                });
            } else {
                notificationEvent = new CustomEvent("notificationEvent", {
                    ...eventProperties,
                    detail: {
                        message: `You have applied to <b>${this.event.title}</b> successfully, remember that you can see your applied events in the panel on top rigth`
                    }
                });
            }
            this.innerHTML = this.render();
        }
        this.dispatchEvent(notificationEvent);
    }

    showAppliedList() {
        this.$container = this.querySelector("#applied-events-container");
        if (this.$container.className !== "show") {
            this.$container.className = "show";
        } else {
            this.$container.className = "hide";
            setTimeout(() => {
                this.$container.className = this.$container.className.replace("hide", "");
            }, 500);
        }
    }

    styles() {
        return /*html*/`
    <style>
    #applied-events-container {
      visibility: hidden;
      display: flex;
      flex-direction: column;
      width: 252px;
      background: white;
      position: absolute;
      border-radius: 16px;
      right: 0;
      top: 10%;
      right: 30px;
      width: 300px;
      position: fixed;
      z-index: 3;
    }

    #applied-events-container.show {
      visibility: visible;
      -webkit-animation: fadein 0.5s;
      animation: fadein 0.5s;
    }

    #applied-events-container.hide {
      visibility: visible;
      -webkit-animation: fadeout 0.5s;
      animation: fadeout 0.5s;
    }
    </style>
    `
    }

    render() {
        return /*html*/`
    ${this.styles()}
    <div id="applied-events-container" class="applied-events-container">
        ${this.appliedEvents.map(event => `
                <applied-event 
                title="${event.title}"
                image-url="${event.imageUrl}"
                date="${event.date}"
                >
                </applied-event>
            `
        ).join(' ')}
    </div>
  `
    }
}
class SnackBar extends HTMLElement {

    constructor() {
        super();

        this.$closeBtn = null;
        this.$snackbar = null;

        this._message = null;
        this._type = null;

        window.addEventListener("notificationEvent", (e) => {
            this.message = e.detail.message;
            this.type = e.detail.type;
            this.showNotification();
        });
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    showNotification() {
        this.innerHTML = this.render();
        this.$closeBtn = this.querySelector('#close-btn');
        this.$closeBtn.addEventListener('click', () => {
            this.hideNotification();
        })
        this.$snackbar = this.querySelector('#snackbar');
        this.$snackbar.className = "show";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 10500);
    }

    hideNotification() {
        this.innerHTML = this.render();
        this.$snackbar = this.querySelector('#snackbar');
        this.$snackbar.className = "hide";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("hide", "");
        }, 500);
    }

    styles() {
        return /*html*/`
        <style>
        #snackbar {
            visibility: hidden;
            margin-left: -125px;
            color: #fff;
            text-align: center;
            border-radius: 2px;
            padding: 16px;
            position: fixed;
            z-index: 3;
            font-size: 17px;
            top: 10%;
            max-width: 41%;
            border-radius: 8px;
            left: 38%;
        }


        #snackbar.show {
            visibility: visible;
            -webkit-animation: fadein 0.5s, fadeout 0.5s 10s;
            animation: fadein 0.5s, fadeout 0.5s 10s;
        }

        #snackbar.hide {
            visibility: visible;
            -webkit-animation: fadeout 0.5s;
            animation: fadeout 0.5s;
        }

        .snackbar-close-btn {
            position: absolute;
            top: 7px;
            right: 7px;
            cursor: pointer;
            width: 19px;
        }

        @media only screen and (max-device-width: 1024px) {
            #snackbar {
            max-width: 80%;
            }
        }
        </style>
        `
    }

    render() {
        return /* html */`
        ${this.styles()}
        <div id="snackbar" style="background-color: ${this.type !== 'warning' ? '#2C98F0;' : '#F0265A'}">
            <span>${this.message}</span>
            <img id="close-btn" src = "https://svgshare.com/i/PR5.svg" class="snackbar-close-btn" alt="close button" />
        </div>`
    }
}
class AppliedEvent extends HTMLElement {
    constructor() {
        super();

        this._imageUrl = null;
        this._title = null;
        this._date = null;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(val) {
        this.setAttribute("image-url", val);
    }

    get title() {
        return this._title;
    }

    set title(val) {
        this.setAttribute("title", val);
    }

    get date() {
        return this._date;
    }

    set date(val) {
        this.setAttribute("date", val);
    }

    static get observedAttributes() { return ["image-url", "title", "date"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "image-url": {
                this._imageUrl = newValue;
            } break;
            case "title": {
                this._title = newValue;
            } break;
            case "date": {
                this._date = newValue;
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
      width: 100%;
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
      <img src="${this.imageUrl}"
        class="applied-event-avatar" alt="Avatar" class="applied event avatar">
      <div class="applied-events-description">
        <div class="applied-event-title">${this.title}</div>
        <small class="applied-event-date">${this.date}</small>
      </div>
      <img class="applied-event-icon" src="https://svgshare.com/i/PTH.svg" />
    </div>
   `
    }
}

customElements.define("events-cards-container", EventsCardsContainer);
customElements.define("event-card", EventCard);
customElements.define("event-card-dialog", EventCardDialog);
customElements.define("event-snackbar", SnackBar);
customElements.define("applied-events-container", AppliedEventContainer);
customElements.define("applied-event", AppliedEvent);

init();