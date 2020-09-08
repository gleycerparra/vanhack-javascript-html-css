const events = [
  {
    id: 1,
    title: "The Present and Future of Technology in Business Events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Ohio - EEUU",
    type: "Leap",
    backgroundColor: "#2CF06F",
    color: "#FFFFFF",
    specialStyle: 'border: 4px solid #2CF06F',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://www.pcma.org/wp-content/uploads/2017/07/Event-Technology.jpg',
    date: 'January 10, 2020'
  },
  {
    id: 2,
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Vancouver - Canada",
    type: "Recruiting Mission",
    backgroundColor: "#F07E2C",
    color: "#FFFFFF",
    specialStyle: 'border: 4px solid #F07E2C',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cb0ec66f-0f9f-4821-81b9-27056473c7b3.jpg',
    date: 'August 25, 2020'
  },
  {
    id: 3,
    title: "VanHackton 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "Vanhackton",
    backgroundColor: "#2C98F0",
    color: "#FFFFFF;",
    specialStyle: 'border: 4px solid #2C98F0',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2015/08/Hackaton-Aprendizaje.jpg',
    date: 'All October, 2020'
  },
  {
    id: 4,
    title: "Premium Open House Experience - September",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "Premium-only Webinar",
    backgroundColor: "#9F9B3E;",
    color: "#FFFFFF;",
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/5f6f32fb-81cf-421c-87dc-d55edf33db4c.jpg',
    date: 'September 5, 2020'
  },
  {
    id: 5,
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "MeetUp",
    backgroundColor: "#D9FFE3;",
    color: "#455A64",
    sharedIcon: 'https://svgshare.com/i/PLq.svg',
    imageUrl: 'https://www.meetup.com/blog/wp-content/uploads/2020/03/online-meeting-digital-image.jpg',
    date: 'September 10, 2020'
  },
  {
    id: 6,
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "Open Webinar",
    backgroundColor: "#FCEDC2;",
    color: "#455A64",
    sharedIcon: 'https://svgshare.com/i/PLq.svg',
    imageUrl: 'https://elearningindustry.com/wp-content/uploads/2020/06/webinar-based-training-and-helpful-strategies.jpg',
    date: 'October 12, 2020'
  },
];
let appliedEvents = [];

const eventCardTemplate = document.createElement("template");
eventCardTemplate.innerHTML = `<slot name="card-content"></slot>`;
class EventCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const clone = document.importNode(eventCardTemplate.content, true);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clone);
  }

}
customElements.define("event-card", EventCard);


const eventCardDialogTemplate = document.createElement("template");
eventCardDialogTemplate.innerHTML = `<slot name="dialog-content"></slot>`;
class EventCardDialog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const clone = document.importNode(eventCardDialogTemplate.content, true);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clone);
  }
}
customElements.define("event-card-dialog", EventCardDialog);



const container = document.getElementById("events-container");
events.forEach((event, index) => {
  container.appendChild(new EventCard());
  var eventCard = document.getElementsByTagName("event-card")[index];

  const footer = `
            <div class="event-footer" style="background: ${event.backgroundColor};">
                <span style="margin-left: 16px">
                    <slot name="type" style="color: ${event.color}; font-weight: bold; font-size: 16px;">${event.type}</slot>
                </span>
                <img src="${event.sharedIcon}" alt="shared" style="margin-right: 12px; cursor: pointer"/>
            </div>`;

  const premiumOnly = event.type === 'Premium-only Webinar' ? `
            <div class="premium-only-label">
                Premium 
            </div> 
  ` : '';

  eventCard.innerHTML = `
    <div slot="card-content">
    <div class="event-card" onclick="showModal(${event.id})" style="${event.specialStyle}">
      <div class="event-card-header">
          ${premiumOnly}
          <img class="event-card-header-img"
            src="${event.imageUrl}" />
      </div>
      <div class="event-info">
          <div style="margin-bottom: 8px">
              <a href="#">
                ${event.title}
              </a>
          </div>
          <div class="event-info-container">
            <img src="https://svgshare.com/i/PM8.svg" class="event-info-icon" alt="calendar icon" />
            <div class="event-date">${event.date}</div>
          </div>
          <div class="event-info-container">
              <img src="https://svgshare.com/i/PPt.svg" class="event-info-icon" alt="location icon" />
              <div class="event-date">${event.location}</div>
          </div>
          <div class="description">
              <p>${event.description}
              </p>
          </div>
          ${footer}
      </div>
      </div>
    </div>`;
});

function showModal(id) {
  const event = events.find(item => item.id === id);
  const body = document.getElementsByTagName('body')[0];
  const dialog = body.appendChild(new EventCardDialog());

  dialog.innerHTML = `
  <dialog slot="dialog-content" id="dialog">
  <img src="https://svgshare.com/i/PR5.svg" onclick="closeModal()" class="dialog-close-btn" alt="close button" />

  <div class="dialog-container">
      <div class="dialog-img-container" style="background: url('${event.imageUrl}') no-repeat; background-size: cover">
          <div class="dialog-img-footer" style="background: #2CF06F">
              <span style="margin-left: 16px">
                  <div name="type" style="color: ${event.color}; font-weight: bold; font-size: 16px;">
                      ${event.type}</div>
              </span>
              <img src="${event.sharedIcon}" alt="shared"
                  style="margin-right: 12px; cursor: pointer" />
          </div>
      </div>
      <div class="dialog-info-container">
          <div class="dialog-event-type">The event</div>
          <div class="dialog-event-title">${event.title}
          </div>
          <div class="event-info-container">
              <img src="https://svgshare.com/i/PM8.svg" class="event-info-icon" alt="calendar icon" />
              <div class="event-date">January 10, 2020</div>
          </div>
          <div class="event-info-container">
              <img src="https://svgshare.com/i/PPt.svg" class="event-info-icon" alt="location icon" />
              <div class="event-date">Online</div>
          </div>
          <p class="dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean ut
              libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis
              iaculis.
              Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam
              molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac
              iaculis. Ut
              sollicitudin malesuada aliquet.
          </p>
          <button id="apply-button" onclick="applyButton(${event.id})" class="btn">
              Apply
          </button>
      </div>
  </div>
</dialog>
  `

  /* const event = events.find(item => item.id === id);
  console.log(event); */
  window.dialog.showModal();

}

function closeModal() {
  const currentDialog = document.getElementById("dialog");
  currentDialog.remove();
}

function applyButton(id) {
  const event = events.find(event => event.id === id);
  if (!appliedEvents.find(appliedEvent => appliedEvent.id === id)) {
    appliedEvents = [
      ...appliedEvents,
      event
    ]
  }
  showNotification(event);
  this.closeModal();
}

function showNotification(event) {
  const body = document.getElementsByTagName('body')[0];
  const snackbar = document.createElement('div');
  snackbar.setAttribute('id', 'snackbar');
  snackbar.innerHTML = `You have applied to <b>${event.title}</b> successfully, remember that you can see your applied events in the panel on top rigth
  <img src="https://svgshare.com/i/PR5.svg" onclick="closeSnackbar()" class="snackbar-close-btn" alt="close button" />
  `;
  snackbar.className = 'show';
  body.appendChild(snackbar);
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 10500);
}

function closeSnackbar() {
  const snackbar = document.getElementById('snackbar');
  snackbar.remove();
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    if (typeof dialog !== 'undefined') {
      this.closeModal();
    }
  }
};

