const socialLinks = [
    { href: "https://www.facebook.com/beet.mog/", iconClass: "ion-social-facebook" },
    { href: "https://github.com/punsiriboo", iconClass: "ion-social-github" },
    { href: "https://www.linkedin.com/in/punsiri-boonyakiat-13909786/", iconClass: "ion-social-linkedin" },
    { href: "https://medium.com/@punsiriboonyakiat", iconClass: "fa-brands-medium" },
    { href: "https://speakerdeck.com/punsiriboo", iconClass: "speakerdesk-icon" },
    { href: "https://www.credly.com/users/punsiri-boonyakiat", iconClass: "certificate-success-filled" }
];

const socialListHeader = document.createElement("ul");
socialListHeader.className = "list-unstyled list-social";

socialLinks.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.href;
    const icon = document.createElement("i");
    icon.className = link.iconClass;
    anchor.appendChild(icon);
    listItem.appendChild(anchor);
    socialListHeader.appendChild(listItem);
});

const socialListFooter = document.createElement("ul");
socialListFooter.className = "list-unstyled list-social";

socialLinks.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.href;
    const icon = document.createElement("i");
    icon.className = link.iconClass;
    anchor.appendChild(icon);
    listItem.appendChild(anchor);
    socialListFooter.appendChild(listItem);
});

const headerSocialDiv = document.getElementById('header-social-list');
const footerSocialDiv = document.getElementById('footer-social-list');
headerSocialDiv.appendChild(socialListHeader);
footerSocialDiv.appendChild(socialListFooter);
