const journalDiv = document.getElementById('div-my-journal');
journalDiv.className = "text-left paddsection";
journalDiv.style = "background-color: #f7f7f7;"

// Create the container for the section title
const titleContainer = document.createElement("div");
titleContainer.className = "container";

const titleDiv = document.createElement("div");
titleDiv.className = "section-title text-center";

const titleH2 = document.createElement("h2");
titleH2.textContent = "MEDIUM";

titleDiv.appendChild(titleH2);
titleContainer.appendChild(titleDiv);

// Append the title container to the journal div
journalDiv.appendChild(titleContainer);

// Create the journal block container
const blockContainer = document.createElement("div");
blockContainer.className = "container";

const journalBlock = document.createElement("div");
journalBlock.className = "journal-block";

const rowDiv = document.createElement("div");
rowDiv.className = "row";

// Articles data
const articles = [
    {
        link: "https://medium.com/linedevth/line-messaging-api-xvertex-ai-search-%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-search-engine-%E0%B8%A1%E0%B8%B2%E0%B9%84%E0%B8%A7%E0%B9%89%E0%B8%9A%E0%B8%99-line-chatbot-6777c3d7746f",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gMzJtFTwvmqCywHrhwDR6w.png",
        title: "LINE Messaging API x Vertex AI Search: ยกระบบ Search Engine มาไว้บน LINE Chatbot"
    },
    {
        link: "https://medium.com/@punsiriboonyakiat/line-messaging-api-x-vertex-ai-agent-builder-%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-ai-agent-%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%84%E0%B8%A2-74fa414af2e9",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*2l6vQ2qjq2dROiatKVidOA.png",
        title: "LINE Messaging API x Vertex AI Agent Builder: ปฏิวัติการสร้าง AI Agent ง่าย และเร็วกว่าที่เคย"
    },
    {
        link: "https://medium.com/cj-express-tech-tildi/%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%82%E0%B8%AD%E0%B8%87-gemini-%E0%B9%81%E0%B8%A5%E0%B8%B0-data-canvas-%E0%B9%83%E0%B8%99-bigquery-b3db5a42acf4",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*I5vTHLPUHlBsHQtRrgmoMg.png",
        title: "สำรวจความสามารถของ Gemini และ Data Canvas ใน BigQuery"
    }
];

// Generate each article
articles.forEach(article => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-4 col-md-6";

    const journalInfo = document.createElement("div");
    journalInfo.className = "journal-info";

    const link = document.createElement("a");
    link.href = article.link;

    const img = document.createElement("img");
    img.src = article.image;
    img.className = "img-responsive";
    img.alt = "img";

    link.appendChild(img);

    const journalTxt = document.createElement("div");
    journalTxt.className = "journal-txt";

    const title = document.createElement("h4");
    const titleLink = document.createElement("a");
    titleLink.href = article.link;
    titleLink.textContent = article.title;

    title.appendChild(titleLink);
    journalTxt.appendChild(title);

    journalInfo.appendChild(link);
    journalInfo.appendChild(journalTxt);

    colDiv.appendChild(journalInfo);
    rowDiv.appendChild(colDiv);
});

// Append all to the journal block
journalBlock.appendChild(rowDiv);
blockContainer.appendChild(journalBlock);
journalDiv.appendChild(blockContainer);
