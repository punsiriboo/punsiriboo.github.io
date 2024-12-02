// Activity Data
const activities = [
    {
        imgSrc: 'images/favicon.png',
        title: '[Data เบ็ดเตล็ด (965 followers) and DataHungry (5.1 K followers)] Data & AI Bootcamp 2024',
        date: '31 Nov - 1 Dec 2024',
        description:
            'As an instructor, hosted a 2-day offline hands-on class focusing on modern Data and AI technologies. Tools included Docker, Apache Airflow, Google Cloud Storage, BigQuery, Gemini Code Assist, Vertex AI Agent Builder, and LINE Messaging API. The bootcamp emphasized building modern data pipelines, accelerating development with GenAI tools, and creating AI agents for seamless data interaction.',
        links: [
            { text: 'Facebook Link', href: '#' },
            { text: 'GitHub', href: '#' },
            { text: 'Speakerdeck', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'GDG DevFest Bangkok 2024 - The Future of Retail E-commerce with Gemini AI',
        date: '17 Nov 2024',
        description:
            'Showcased how Vertex AI and Gemini enhance retail e-commerce using Retrieval-Augmented Generation (RAG). Demonstrated LINE Chatbot features including general product inquiries, text-based product search, and image-based product search.',
        links: [
            { text: 'Facebook Link', href: '#' },
            { text: 'Speakerdeck', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'LINE Dev Conference 2024 - The Future of Retail E-commerce with Gemini AI',
        date: '2 Nov 2024',
        description:
            'Similar to GDG DevFest, demonstrated Vertex AI and Gemini’s capabilities for retail e-commerce, focusing on enhancing user experience through RAG and interactive chatbot features.',
        links: [
            { text: 'Speakerdeck', href: '#' },
            { text: 'Facebook Link', href: '#' },
            { text: 'YouTube Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'Data TH - Data Science ชิลชิล (65K followers) - Special Live: Data Quality Assurance in Apache Airflow',
        date: '29 Oct 2024',
        description:
            'Live session on ensuring data quality using Apache Airflow. Topics included key metrics, testing, validation, and reconciliation techniques.',
        links: [
            { text: 'LinkedIn Post', href: '#' },
            { text: 'Speakerdeck', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'Technologistra - Gemini Code Assisted for Developer Productivity',
        date: '26 Oct 2024',
        description:
            'Demonstrated Gemini Code Assist to accelerate development, automate workflows, and create projects like a Hogwarts-themed prompt integrated with the LINE Messaging API.',
        links: [
            { text: 'Event Link', href: '#' },
            { text: 'Facebook Live Link', href: '#' },
            { text: 'Speakerdeck', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'Skooldio Special Class - Gemini Code Assist for Data Engineering',
        date: '8 Oct 2024',
        description:
            'Hands-on workshop showcasing Gemini Code Assist for automating data engineering tasks, setting up BigQuery, Docker, and Airflow workflows.',
        links: [
            { text: 'Skooldio Course Link', href: '#' },
            { text: 'Poster Link', href: '#' },
            { text: 'Facebook Post', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'Data เบ็ดเตล็ด Live (965 followers) - Apache Airflow Zero to One',
        date: '5 Sep 2024',
        description:
            'Live session demonstrating Apache Airflow’s workflow orchestration capabilities for automating ETL processes.',
        links: [{ text: 'Facebook Live Link', href: '#' }],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'Data เบ็ดเตล็ด Live (965 followers) - Gemini in BigQuery and BigQuery Data Canvas',
        date: '13 Aug 2024',
        description:
            'Demonstrated Gemini in BigQuery for query automation and BigQuery Data Canvas for visual data modeling.',
        links: [{ text: 'Facebook Live Link', href: '#' }],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[Data TH - Data Science ชิลชิล 65K followers] Spacial Class - Gemini Code Assist for Data Engineering - Road to Data Engineer',
        date: '23 June 2024',
        description:
            'The workshop introduced Gemini Code Assist, an AI-powered tool designed to automate data engineering tasks. During the session, I guided participants through setting up Gemini Code Assist in VS Code, BigQuery, Docker to create and manage Airflow DAGs effectively. Additionally, I demonstrated how to craft prompts for generating code, writing unit tests, creating diagrams/documentation, and validating data using Great Expectations. The session featured live demonstrations and provided hands-on practice on Gemini Code Assist.',
        links: [
            { text: 'Link to Poster for DATA TH', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[Chaiyo GCP - Online Code Along Session] - Gemini for Data Scientist [Running Codelab]',
        date: '28 May 2024',
        description:
            'The lab session at the Chaiyo GCP Event in Thailand focuses on using Gemini in BigQuery as an assistant to build a K-means clustering model. As a speaker, I guided participants through segmenting customers based on their order behaviors by writing prompts for Data Scientists’s workflow.',
        links: [
            { text: 'Chaiyo GCP Cloud Bangkok Event Link', href: '#' },
            { text: 'YouTube Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[Road to Data Engineer DataTH] - How to be a Data Engineer in 2024',
        date: '27 April 2024',
        description:
            'This event will guide aspiring and current professionals on becoming a Data Engineer in 2024. Participants will learn about the essential skills, tools, and best practices needed in the evolving field of data engineering. The session will cover key industry trends, practical tips for career advancement, and insights into the future landscape of data engineering roles.',
        links: [
            { text: 'Facebook Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: 'National Telecom Data & AI Hackathon',
        date: '23 April 2024',
        description:
            'NT Academy arranged an internal hackathon about Data, AI, and ML. As a Hackathon mentor, I had a chance to teach ML unsupervised techniques and also generative AI. The GenAI is based on Gemini Multimodal. The session included hands-on teaching on multimodal prompts, best practices in prompt design, and techniques to write efficient prompts using Gemini AI for maximum effectiveness.',
        links: [
            { text: 'Facebook Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[Women Techmaker 2024] - When a Senior Data Engineer Becomes a Politician and Mother',
        date: '16 March 2024',
        description:
            'The talk inspires women in various roles to manage their responsibilities effectively. As a mother, data engineer, and former political candidate in Thailand, I share how technology can be leveraged to balance multiple roles and optimize time management. This includes using data-driven strategies and digital tools to streamline tasks, prioritize goals, and enhance productivity in both personal and professional settings.',
        links: [
            { text: 'GDG Cloud Bangkok: WTM International Women\'s Day Bangkok 2024', href: '#' },
            { text: 'YouTube Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[Data Rockie Talk - 170K followers] - Data Pipeline with Airflow 101',
        date: '25 February 2024',
        description:
            'The session demos Apache Airflow, an open-source tool for orchestrating workflows. It allows you to create and manage complex data pipelines with scheduling and monitoring features. Airflow uses Directed Acyclic Graphs (DAGs) to define the sequence of tasks. Each task in a DAG represents a step in the workflow. This makes it ideal for automating ETL processes and data engineering tasks.',
        links: [
            { text: 'YouTube Link', href: '#' },
            { text: 'Facebook Live Link', href: '#' },
        ],
    },
    {
        imgSrc: 'images/favicon.png',
        title: '[LINE DEV CONFERENCE 2021] - Applied Machine Learning in Running Assistance Bot',
        date: 'November 2021',
        description:
            'The talk explains applying ML technology to the LINE chatbot. The Running Assistant chatbot is used as an example use-case. The solution is built on the Google Cloud Platform (GCP) for ease of use and machine learning capabilities. Key components include LINE Messaging API for webhook interactions, Google Cloud Functions for event handling, Dialogflow for conversational flow, Cloud Vision API for OCR, Firestore for data storage, Cloud Logging for log management, BigQuery for data analytics, and Data Studio for visualization. These tools work together to create a robust chatbot experience for virtual running events.',
        links: [
            { text: 'Facebook Event Link', href: '#' },
            { text: 'Facebook Live Link', href: '#' },
            { text: 'YouTube Link', href: '#' },
            { text: 'Medium Link', href: '#' },
        ],
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
    title.textContent = 'ACTIVITY';
    sectionTitle.appendChild(title);

    // Entry Comments List
    const entryComments = document.createElement('div');
    entryComments.classList.add('entry-comments');
    const commentsList = document.createElement('ul');
    commentsList.classList.add('entry-comments-list', 'list-unstyled');

    // Generate List Items
    activities.forEach((activity) => {
        const listItem = document.createElement('li');
        const commentItem = document.createElement('div');
        commentItem.classList.add('entry-comments-item');

        const img = document.createElement('img');
        img.src = activity.imgSrc;
        img.classList.add('entry-comments-avatar');
        img.alt = '';

        const body = document.createElement('div');
        body.classList.add('entry-comments-body');

        const title = document.createElement('span');
        title.classList.add('entry-comments-title', 'mr-2');
        const titleLink = document.createElement('a');
        titleLink.href = activity.links[0]?.href || '#';
        titleLink.textContent = activity.title;
        title.appendChild(titleLink);

        const date = document.createElement('span');
        date.textContent = activity.date;

        const description = document.createElement('p');
        description.classList.add('mb-2', 'fs-act');
        description.textContent = activity.description;

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

        commentItem.appendChild(img);
        commentItem.appendChild(body);
        listItem.appendChild(commentItem);

        commentsList.appendChild(listItem);
    });

    entryComments.appendChild(commentsList);
    comments.appendChild(sectionTitle);
    comments.appendChild(entryComments);

    col.appendChild(comments);
    row.appendChild(col);
    container.appendChild(row);
}
