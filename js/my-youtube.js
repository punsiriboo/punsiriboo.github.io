
const youtube_data = [
    {
        link: "https://www.youtube.com/watch?v=Saw5M6UuSzg&t=797s",
        imgSrc: "https://i.ytimg.com/vi/Saw5M6UuSzg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjw4g4E4c6DBaS8yD7Yt3L_acAqw",
        title: "[LINE DEV CONF 2024] The Future of LINE Retail Chatbot using Gemini AI",
    },
    {
        link: "https://youtu.be/fJAV7nURmQk?si=nXfSnvDoTeQmoF28",
        imgSrc: "https://i.ytimg.com/vi/fJAV7nURmQk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZIsvADeG622jTLdPFS7-N4ky6NA",
        title: "[LINE DEV CONF 2021] Applied Machine Learning in Running Assistance Bot",
    },
    {
        link: "https://www.youtube.com/live/zQSjgStNzIw?si=Qjxvw3h3Of27yVhr",
        imgSrc: "https://i.ytimg.com/vi/zQSjgStNzIw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvSEJkgX8lBo9oUCrGGDeRKVru4Q",
        title: "[Data Rockie] Before Bed - Data Pipeline with Airflow 101",
    },
    {
        link: "https://www.youtube.com/live/NUFVP-bAi_s?si=FtMlXrY55d7zx0zc",
        title: "ChaiyoGCP Season 4 - Code Along Session",
        imgSrc: "https://i.ytimg.com/vi/NUFVP-bAi_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDErI2USTeNur-B2irrdc3uRKw5Jg"
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
const divMyYoutube = document.getElementById('div-my-youtube');

var ionContainer = document.createElement('div');
ionContainer.classList.add('ion-container');

var servicesCarousel = document.createElement('div');
servicesCarousel.classList.add('services-carousel', 'owl-theme');

// Iterate over the data array and append service blocks
youtube_data.forEach(data => {
    var serviceBlock = createServiceBlock(data.imgSrc, data.title, data.description, data.link);
    servicesCarousel.appendChild(serviceBlock);
});

// Append the carousel to the container and the container to the main div
ionContainer.appendChild(servicesCarousel);
divMyYoutube.appendChild(ionContainer);

