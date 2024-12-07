const portfolioItems = [
    { classes: "all LINE DE", src: "images/portfolio/1.jpg" },
    { classes: "all VertexAI DE", src: "images/portfolio/2.jpg" },
    { classes: "all LINE", src: "images/portfolio/3.jpg" },
    { classes: "all VertexAI", src: "images/portfolio/4.jpg" },
    { classes: "all LINE DE", src: "images/portfolio/5.jpg" },
    { classes: "all VertexAI DE", src: "images/portfolio/6.jpg" },
    { classes: "all LINE", src: "images/portfolio/7.jpg" },
    { classes: "all DE VertexAI LINE Gemini", src: "images/portfolio/8.jpg" },
    { classes: "all LINE Gemini", src: "images/portfolio/9.jpg" },
    { classes: "all DE Gemini", src: "images/portfolio/10.jpg" },
    { classes: "all VertexAI LINE Gemini", src: "images/portfolio/11.jpg" },
    { classes: "all DE VertexAI LINE Gemini", src: "images/portfolio/12.jpg" },
];

portfolioSection = document.getElementById("my-portfolio");
// Create the container for the section title
const titleContainer = document.createElement("div");
titleContainer.className = "container";

const sectionTitle = document.createElement("div");
sectionTitle.className = "section-title text-center";
const sectionHeading = document.createElement("h2");
sectionHeading.innerText = "My Portfolio";
sectionTitle.appendChild(sectionHeading);

titleContainer.appendChild(sectionTitle);
portfolioSection.appendChild(titleContainer);

// Create the portfolio content container
const contentContainer = document.createElement("div");
contentContainer.className = "container";

const row = document.createElement("div");
row.className = "row";

const col = document.createElement("div");
col.className = "col-md-12";

// Portfolio filter list
const portfolioList = document.createElement("div");
portfolioList.className = "portfolio-list";

const filterList = document.createElement("ul");
filterList.className = "nav list-unstyled";
filterList.id = "portfolio-flters";

const filters = [
  { class: "filter-active", filter: ".all", text: "all" },
  { class: "", filter: ".VertexAI", text: "Vertex AI" },
  { class: "", filter: ".LINE", text: "LINE Messaging API" },
  { class: "", filter: ".DE", text: "Data Engineer" },
  { class: "", filter: ".Gemini", text: "Gemini" },
];

filters.forEach((filter) => {
  const li = document.createElement("li");
  li.className = `filter ${filter.class}`;
  li.setAttribute("data-filter", filter.filter);
  li.innerText = filter.text;
  filterList.appendChild(li);
});

portfolioList.appendChild(filterList);
col.appendChild(portfolioList);

// Portfolio container
const portfolioContainer = document.createElement("div");
portfolioContainer.className = "portfolio-container";

portfolioItems.forEach((item) => {
  const thumbnail = document.createElement("div");
  thumbnail.className = `col-lg-3 col-md-6 portfolio-thumbnail ${item.classes}`;

  const link = document.createElement("a");
  link.className = "popup-img";
  link.href = item.src;

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "img";

  link.appendChild(img);
  thumbnail.appendChild(link);
  portfolioContainer.appendChild(thumbnail);
});

col.appendChild(portfolioContainer);
row.appendChild(col);
contentContainer.appendChild(row);
portfolioSection.appendChild(contentContainer);

