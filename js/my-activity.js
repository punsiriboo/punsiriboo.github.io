// Activity Data
const activities = [
    {
        title: '[Data เบ็ดเตล็ด (965 followers) and DataHungry (5.1 K followers)] Data & AI Bootcamp 2024',
        date: '31 Nov - 1 Dec 2024',
        description:
            'As an instructor, hosted a 2-day offline hands-on class focusing on modern Data and AI technologies. Tools included <b>Docker, Apache Airflow, Google Cloud Storage, BigQuery, Gemini Code Assist, Vertex AI Agent Builder, and LINE Messaging API.</b> The bootcamp emphasized building modern data pipelines, accelerating development with GenAI tools, and creating AI agents for seamless data interaction.',
        links: [
            { text: 'Event Link', href: 'https://www.eventpop.me/e/60322/data-ai-boostcamp?fbclid=IwY2xjawHAvbdleHRuA2FlbQIxMAABHXtBmKaHBoWCanh4i-nLvL7aOiunjejYTOQ5KpXeUC9knRkKjsufynu5vA_aem_Ip4B2w9f6_8F0hG7Y79wtQ' },
            { text: 'GitHub', href: 'https://github.com/wuttichai-hung/data-ai-bootcamp' },
        ],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/0667ef6003cc425aaf957772659adab9' title='[Data เบ็ดเตล็ด x DataHungry] Data &amp; AI Bootcamp 2024' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {
        title: 'GDG DevFest Bangkok 2024 - The Future of Retail E-commerce with Gemini AI',
        date: '17 Nov 2024',
        description:
            'Showcased how <b>Vertex AI Agent Builder, Vertex AI Search and Gemini Multimodal</b> enhance retail e-commerce using <b>Retrieval-Augmented Generation (RAG)</b>. Demonstrated LINE Chatbot features including general product inquiries, text-based product search, and image-based product search.',
        links: [
            { text: 'Event Link', href: 'https://shop.line.me/@apppi/product/1006936241' },
        ],
        embedResource:"<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/a3d0876c197846ba8ed1965f372dcd1c' title='[GDG DevFest Bangkok 2024] - The Future of Retail E-commerce with Gemini AI' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio'1.7777777777777777'></iframe>"
    },
    {
        title: '[LINE THAILAND DEVELOPER CONFERENCE 2024] - The Future of Retail E-commerce with Gemini AI',
        date: '2 Nov 2024',
        description:
            'Similar to GDG DevFest, demonstrated <b>Vertex AI Agent Builder, Vertex AI Search and Gemini</b>’s capabilities for retail e-commerce, focusing on enhancing user experience through <b>Retrieval-Augmented Generation (RAG)</b> and interactive chatbot features.',
        links: [
            { text: 'Speakerdeck', href: 'https://speakerdeck.com/linedevth/the-future-of-line-retail-chatbot-using-gemini-ai' },
        ],
        embedResource: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Saw5M6UuSzg?si=wQjnq2kIBjjJK8ob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        title: '[Data TH - Data Science ชิลชิล (65K followers)] - Special Live: Data Quality Assurance in Apache Airflow',
        date: '29 Oct 2024',
        description:
            'Live session on ensuring data quality using Apache Airflow. Topics included key metrics, testing, validation, and reconciliation techniques.',
        links: [
            { text: 'LinkedIn Post', href: '#' },
        ],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/ac07d8c6dedc48dbbd5adb260f59e609' title='[DATA TH - Bonus Class] Data Quality in Apache Airflow' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {
        title: '[GDG Cloud Bangkok 2024] - Gemini Code Assisted for Developer Productivity',
        date: '26 Oct 2024',
        description:
            'Demonstrated Gemini Code Assist to accelerate development, automate workflows, and create projects like a Hogwarts-themed prompt integrated with the LINE Messaging API.',
        links: [
            { text: 'Event Link', href: '#' },
            { text: 'Facebook Live Link', href: '#' },
        ],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/872f5fb856ef4ddb8e381800576c6a7b' title='[Technologistra] Gemini Code Assist for Developer Productivity' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {
        title: '[Skooldio Special Class] - Gemini Code Assist for Data Engineering',
        date: '8 Oct 2024',
        description:
            'Hands-on workshop showcasing Gemini Code Assist for automating data engineering tasks, setting up BigQuery, Docker, and Airflow workflows.',
        links: [
            { text: 'Skooldio Course Link', href: 'https://landing.skooldio.com/data-engineering-bootcamp' },
            { text: 'Poster Link', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7243211508212506626/' },
            { text: 'Facebook Post', href: 'https://www.facebook.com/share/p/1MPgqDZsQE/' },
        ],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/29151caf1e354f12b08d70fde5667c34' title='[DEB] Gemini Code Assist for Data Engineer' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {
        title: 'Data เบ็ดเตล็ด Live (965 followers) - Apache Airflow Zero to One',
        date: '5 Sep 2024',
        description:
            'Live session demonstrating Apache Airflow’s workflow orchestration capabilities for automating ETL processes.',
        links: [{ text: 'Facebook Live Link', href: '#' }],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/17349a9cf2bd46c4960022faba86e9f1' title='Building Data Pipeline with Apache Airflow (101)' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {
        title: 'Data เบ็ดเตล็ด Live (965 followers) - Gemini in BigQuery and BigQuery Data Canvas',
        date: '13 Aug 2024',
        description:
            'Demonstrated <b>Gemini in BigQuery</b> for query generation and completio. I also demonstrate <b>BigQuery Data Canvas</b> for data explository analysis.',
        links: [{ text: 'Facebook Live Link', href: '#' }],
        embedResource: "<img src='images/portfolio/data-bed-1.png' alt='img'>",
    },
    {
        title: '[Data TH - Data Science ชิลชิล 65K followers] Spacial Class - Gemini Code Assist for Data Engineering - Road to Data Engineer',
        date: '23 June 2024',
        description:
            'The workshop introduced <b>Gemini Code Assist</b>, an AI-powered tool designed to automate data engineering tasks. During the session, I guided participants through setting up Gemini Code Assist in VS Code, BigQuery, Docker to create and manage Airflow DAGs effectively. Additionally, I demonstrated how to craft prompts for generating code, writing unit tests, creating diagrams/documentation, and validating data using Great Expectations. The session featured live demonstrations and provided hands-on practice on Gemini Code Assist.',
        links: [
            { text: 'Linkedin Post', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7210490174567325696/' },
        ],
        embedResource: "<img src='images/portfolio/r2de-2.jpg' alt='img'>",
    },
    {
        title: '[Cloud AI Study Jam 2024 - Chaiyo GCP - Online Code Along Session] - Gemini for Data Scientist [Running Codelab]',
        date: '28 May 2024',
        description:
            'The lab session at the Chaiyo GCP Event in Thailand focuses on using <b>Gemini in BigQuery</b> as an assistant to build a K-means clustering model. As a speaker, I guided participants through segmenting customers based on their order behaviors by writing prompts for Data Scientists’s workflow.',
        links: [
            { text: 'GCP Cloud Bangkok Event Link', href: ' https://gdg.community.dev/events/details/google-gdg-cloud-bangkok-presents-chaiyogcp-season-4-code-along-session-online/' },
        ],
        embedResource: "<iframe width='560' height='315' src='https://www.youtube.com/embed/NUFVP-bAi_s?si=nnR645IJ47m69UCL' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
    },
    {

        title: '[Road to Data Engineer DataTH] - How to be a Data Engineer in 2024',
        date: '27 April 2024',
        description:
            'This event will guide aspiring and current professionals on becoming a Data Engineer in 2024. Participants will learn about the essential skills, tools, and best practices needed in the evolving field of data engineering. The session will cover key industry trends, practical tips for career advancement, and insights into the future landscape of data engineering roles.',
        links: [
            { text: 'Facebook Link', href: '#' },
        ],
        embedResource: "<img src='images/portfolio/r2de-1.jpg' alt='img'>",
    },
    {

        title: '[National Telecom Data & AI Hackathon] - Generative AI with Gemini',
        date: '23 April 2024',
        description:
            'As a Hackathon mentor, I had a chance to teach ML unsupervised techniques and also generative AI. The Generative AI is based on <b>Gemini Multimodal</b>. The session included hands-on teaching on multimodal prompts, best practices in <b>Prompt design, and techniques to write efficient prompts using Gemini</b> AI for maximum effectiveness.',
        links: [
            { text: 'Linkedin Post', href: '#' },
        ],
        embedResource: "<iframe class='speakerdeck-iframe' frameborder='0' src='https://speakerdeck.com/player/f4ea599b819d4f66b9b4f38acf907f29' title='National Telecom Data &amp; AI Hackathon ' allowfullscreen='true' style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;' data-ratio='1.7777777777777777'></iframe>",
    },
    {

        title: '[Women Techmaker 2024] - When a Senior Data Engineer Becomes a Politician and Mother',
        date: '16 March 2024',
        description:
            'The talk inspires women in various roles to manage their responsibilities effectively. As a mother, data engineer, and former political candidate in Thailand, I share how technology can be leveraged to balance multiple roles and optimize time management. This includes using data-driven strategies and digital tools to streamline tasks, prioritize goals, and enhance productivity in both personal and professional settings.',
        links: [
            { text: 'GDG Cloud Bangkok: WTM International Women\'s Day Bangkok 2024', href: '#' },
        ],
        embedResource: "<iframe width='560' height='315' src='https://www.youtube.com/embed/t2HHVRu4RE0?si=L257TQw2DpGY2QIV' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
    },
    {

        title: '[Data Rockie Talk - 170K followers] - Data Pipeline with Airflow 101',
        date: '25 February 2024',
        description:
            'The session demos Apache Airflow, an open-source tool for orchestrating workflows. It allows you to create and manage complex data pipelines with scheduling and monitoring features. Airflow uses Directed Acyclic Graphs (DAGs) to define the sequence of tasks. Each task in a DAG represents a step in the workflow. This makes it ideal for automating ETL processes and data engineering tasks.',
        links: [
            { text: 'Facebook Live Link', href: '#' },
        ],
        embedResource: "<iframe width='560' height='315' src='https://www.youtube.com/embed/zQSjgStNzIw?si=ISc6oWFepRabbBRb' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
    },
    {

        title: '[LINE DEV CONFERENCE 2021] - Applied Machine Learning in Running Assistance Bot',
        date: 'November 2021',
        description:
            'The talk explains applying ML technology to the LINE chatbot. The Running Assistant chatbot is used as an example use-case. The solution is built on the Google Cloud Platform (GCP) for ease of use and machine learning capabilities. Key components include LINE Messaging API for webhook interactions, Google Cloud Functions for event handling, <b>Dialogflow</b> for conversational flow, <b>Cloud Vision API</b> for OCR, <b>Firestore</b> for data storage, <b>Cloud Logging</b> for log management, BigQuery for data analytics, and <b>Data Studio</b> for visualization. These tools work together to create a robust chatbot experience for virtual running events.',
        links: [
            { text: 'Speakerdeck', href: 'https://speakerdeck.com/linedevth/applied-machine-learning-in-running-assistance-bot' },
            { text: 'Facebook Event Link', href: 'https://www.facebook.com/events/d41d8cd9/line-thailand-developer-conference-2021/3146377905633688/' },
            { text: 'Facebook Live Link', href: 'https://www.facebook.com/LINEDEVTH/videos/903319493611003' },
            { text: 'Medium Link', href: 'https://medium.com/linedevth/running-assistance-chatbot-%E0%B8%8A%E0%B8%A7%E0%B8%99%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%AD%E0%B8%97-virtual-run-%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87-1e3a2aa7d210' },
        ],
        embedResource: "<iframe width='560' height='315' src='https://www.youtube.com/embed/fJAV7nURmQk?si=x7hb0JKHmk7rKzxL' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
    },
];


const container = document.getElementById('div-my-activity');

// Ensure the container exists before proceeding
if (container) {
    const row = document.createElement('div');
    row.classList.add('row', 'justify-content-center');

    const col = document.createElement('div');
    col.classList.add('col-md-10', 'col-md-offset-2');

    const comments = document.createElement('div');
    comments.classList.add('comments', 'text-left', 'padDiv', 'mb-30');

    // Section Title
    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('section-title', 'text-center');
    const title = document.createElement('h2');
    title.textContent = 'Technical Talks & Workshops';
    sectionTitle.appendChild(title);

    // Entry Comments List
    const entryComments = document.createElement('div');
    entryComments.classList.add('entry-comments');
    const commentsList = document.createElement('ul');
    commentsList.classList.add('entry-comments-list', 'list-unstyled');

    // Generate List Items
    activities.forEach((activity) => {
        const listItem = document.createElement('li');
        const HrItem = document.createElement('hr');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        const commentItem = document.createElement('div');
        commentItem.classList.add('entry-comments-item');

        const divSlide = document.createElement('div');
        divSlide.classList.add('col-sm-5');
        divSlide.innerHTML = activity.embedResource;

        const divContent = document.createElement('div');
        divContent.classList.add('col-sm-7');



        const body = document.createElement('div');
        body.classList.add('entry-comments-body');

        const title = document.createElement('span');
        title.classList.add('entry-comments-title', 'mr-2');
        const titleLink = document.createElement('a');
        titleLink.href = activity.links[0]?.href || '#';
        titleLink.textContent = activity.title;
        title.appendChild(titleLink);

        const date = document.createElement('span');
        date.classList.add('entry-activity-date');
        date.textContent = "Date: " + activity.date;

        const description = document.createElement('p');
        description.classList.add('mb-2', 'fs-act');
        description.innerHTML = activity.description;

        // Multiple Links
        const linksContainer = document.createElement('div');
        activity.links.forEach((link) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.href;
            linkElement.textContent = link.text;
            linkElement.classList.add('activity-link', 'fs-act', 'activity-link');
            linkElement.style.marginRight = '10px'; // Optional: add spacing between links
            linksContainer.appendChild(linkElement);
        });

        body.appendChild(title);
        body.appendChild(date);
        body.appendChild(description);
        body.appendChild(linksContainer);

        commentItem.appendChild(body);
        divContent.appendChild(commentItem)

        rowDiv.appendChild(divSlide);
        rowDiv.appendChild(divContent);
        listItem.appendChild(rowDiv);
        commentsList.appendChild(listItem);
        commentsList.appendChild(HrItem);
    });

    entryComments.appendChild(commentsList);
    comments.appendChild(sectionTitle);
    comments.appendChild(entryComments);

    col.appendChild(comments);
    row.appendChild(col);
    container.appendChild(row);
}
