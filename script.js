const events = [
  {
    title: "The Present and Future of Technology in Business Events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Ohio - EEUU",
    type: "Leap",
    backgroundColor: "#2CF06F",
    color: "#FFFFFF",
    specialStyle: 'border: 4px solid #2CF06F',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://www.pcma.org/wp-content/uploads/2017/07/Event-Technology.jpg'
  },
  {
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Vancouver - Canada",
    type: "Recruiting Mission",
    backgroundColor: "#F07E2C",
    color: "#FFFFFF",
    specialStyle: 'border: 4px solid #F07E2C',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cb0ec66f-0f9f-4821-81b9-27056473c7b3.jpg'
  },
  {
    title: "VanHackton 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "Vanhackton",
    backgroundColor: "#2C98F0",
    color: "#FFFFFF;",
    specialStyle: 'border: 4px solid #2C98F0',
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2015/08/Hackaton-Aprendizaje.jpg'
  },
  {
    title: "Premium Open House Experience - September",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Online",
    type: "Premium-only Webinar",
    backgroundColor: "#9F9B3E;",
    color: "#FFFFFF;",
    sharedIcon: 'https://svgshare.com/i/PQj.svg',
    imageUrl: 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/5f6f32fb-81cf-421c-87dc-d55edf33db4c.jpg'
  },
  {
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Madrid - Spain",
    type: "MeetUp",
    backgroundColor: "#D9FFE3;",
    color: "#455A64",
    sharedIcon: 'https://svgshare.com/i/PLq.svg',
    imageUrl: 'https://miro.medium.com/max/1000/0*Qfd9LKC5xvOTAXzd.png'
  },
  {
    title: "Virtual Hiring Event for Women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut libero odio. Nam pulvinar euismod erat eu rutrum. Ut porta risus non erat convallis iaculis. Ut ac ultricies est. Sed maximus sem augue, ut convallis dui pretium eu. Ut in quam molestie, tincidunt sapien in, gravida quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat sit amet sapien ac iaculis. Ut sollicitudin malesuada aliquet. Fusce pharetra feugiat nisl. Donec laoreet, sem mollis interdum congue, urna est ornare sapien, eu cursus ante massa sed lorem. Vestibulum sit amet mauris tempor, aliquam tellus et, cursus mauris. Maecenas eu ultrices augue. Duis pellentesque ultricies elit ut luctus.",
    location: "Madrid - Spain",
    type: "Open Webinar",
    backgroundColor: "#FCEDC2;",
    color: "#455A64",
    sharedIcon: 'https://svgshare.com/i/PLq.svg'
  },
];

const eventCardTemplate = document.createElement("template");
eventCardTemplate.innerHTML = `
                <style>
                :root {
                    --indigo-dye: hsla(216, 39%, 28%, 1);
                    --melon: hsla(10, 76%, 80%, 1);
                    --cambridge-blue: hsla(122, 18%, 68%, 1);
                    --international-orange-golden-gate-bridge: hsla(6, 71%, 44%, 1);
                    --spanish-bistre: hsla(49, 51%, 34%, 1);
                    --leap-event: lavender;
                }
                         
                * {
                    margin: 0;
                }
                    
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
                
                
                </style>
                <div class="event-card">
                    <slot name="card-content"></slot>
                </div>
`;

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
      <div class="event-card-header">
          ${premiumOnly}
          <img class="event-card-header-img"
            src="${event.imageUrl}" />
      </div>
      <div class="event-info" style="${event.specialStyle}">
          <div style="margin-bottom: 8px">
              <a href="#">
                ${event.title}
              </a>
          </div>
          <div class="event-info-container">
            <img src="https://svgshare.com/i/PM8.svg" class="event-info-icon" alt="calendar icon" />
            <slot name="date" class="event-date">Thursday, January 10th, 4:00 am</slot>
          </div>
          <div class="event-info-container">
              <img src="https://svgshare.com/i/PPY.svg" class="event-info-icon" alt="location icon" />
              <div name="location" class="event-date">${event.location}</div>
          </div>
          <div class="description">
              <p>${event.description}
              </p>
          </div>
          ${footer}
      </div>
    </div>`;
});
