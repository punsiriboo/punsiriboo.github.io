
const articles_data = [
    {
        link: "https://medium.com/linedevth/line-messaging-api-xvertex-ai-search-%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-search-engine-%E0%B8%A1%E0%B8%B2%E0%B9%84%E0%B8%A7%E0%B9%89%E0%B8%9A%E0%B8%99-line-chatbot-6777c3d7746f",
        imgSrc: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gMzJtFTwvmqCywHrhwDR6w.png",
        title: "LINE Messaging API x Vertex AI Search: ยกระบบ Search Engine มาไว้บน LINE Chatbot",
    },
    {
        link: "https://medium.com/@punsiriboonyakiat/line-messaging-api-x-vertex-ai-agent-builder-%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-ai-agent-%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%84%E0%B8%A2-74fa414af2e9",
        imgSrc: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*2l6vQ2qjq2dROiatKVidOA.png",
        title: "LINE Messaging API x Vertex AI Agent Builder: ปฏิวัติการสร้าง AI Agent ง่าย และเร็วกว่าที่เคย",
    },
    {
        link: "https://medium.com/cj-express-tech-tildi/%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%82%E0%B8%AD%E0%B8%87-gemini-%E0%B9%81%E0%B8%A5%E0%B8%B0-data-canvas-%E0%B9%83%E0%B8%99-bigquery-b3db5a42acf4",
        imgSrc: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*I5vTHLPUHlBsHQtRrgmoMg.png",
        title: "สำรวจความสามารถของ Gemini และ Data Canvas ใน BigQuery",
    },
    {
        link: "https://medium.com/p/667f0be3fb6c?source=post_stats_page-------------------------------------",
        imgSrc: "https://miro.medium.com/v2/resize:fit:0/1*OlkUoe-fCHPY0tM1UBfz4g.png",
        title: "Gemini Code Assist for Data Engineer — ให้ AI ช่วยสร้าง Data pipeline",
    },
    {
        link: "https://medium.com/@punsiriboonyakiat/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-speaker-%E0%B8%9A%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%B5-line-dev-conference-2024-a3409fc5fd8c",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*C3fC5OxTxcmgZQjtl7BW8w.png",
        title: "เส้นทางสู่การเป็น Speaker บนเวที LINE DEV CONF 2024",
    }
];


// Function to create a service block with a link
function createServiceBlock(imgSrc, title, description, link) {
    const servicesBlock = document.createElement('div');
    servicesBlock.classList.add('services-block');

    const anchor = document.createElement('a');
    anchor.href = link; // Set the link URL
    anchor.target = '_blank'; // Open link in a new tab (optional)

    const ionCard = document.createElement('ion-card');

    const img = document.createElement('img');
    img.alt = 'Silhouette of mountains';
    img.src = imgSrc;
    img.style.height = '200px';

    const ionCardHeader = document.createElement('ion-card-header');
    const ionCardTitle = document.createElement('ion-card-title');
    ionCardTitle.textContent = title;

    ionCardHeader.appendChild(ionCardTitle);

    const ionCardContent = document.createElement('ion-card-content');
    ionCardContent.textContent = description;

    ionCard.appendChild(img);
    ionCard.appendChild(ionCardHeader);
    ionCard.appendChild(ionCardContent);

    // Wrap the card inside the anchor tag
    anchor.appendChild(ionCard);
    servicesBlock.appendChild(anchor);

    return servicesBlock;
}

// Create the main structure
const divMyJournal = document.getElementById('div-my-journal');

var ionContainer = document.createElement('div');
ionContainer.classList.add('ion-container');

var servicesCarousel = document.createElement('div');
servicesCarousel.classList.add('services-carousel', 'owl-theme');

// Iterate over the data array and append service blocks
articles_data.forEach(data => {
    var serviceBlock = createServiceBlock(data.imgSrc, data.title, data.description, data.link);
    servicesCarousel.appendChild(serviceBlock);
});

// Append the carousel to the container and the container to the main div
ionContainer.appendChild(servicesCarousel);
divMyJournal.appendChild(ionContainer);

