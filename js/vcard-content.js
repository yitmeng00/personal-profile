// modules
import socialMediaLinks from "./social-media-links.js";
import personalBio from "./personal-bio.js";
import certifications from "./certifications.js";
import experiences from "./experiences.js";
import educations from "./education.js";
import skills from "./skills.js";

// selectors
const socialListSection = document.getElementById(
    "vcard__sidebar-social-section"
);
const personalBioSection = document.getElementById(
    "vcard__personal-bio-section"
);
const certificationSection = document.getElementById(
    "vcard__certification-section"
);
const experiencesSection = document.getElementById("vcard__experience-section");
const educationSection = document.getElementById("vcard__education-section");
const skillSection = document.getElementById("vcard__skill-section");

/*
Social Media Links Section
*/
// loop through the social media links array and render the html for each link
socialMediaLinks.forEach((socialMediaLink) => {
    const { href, iconName } = socialMediaLink;

    const socialItem = document.createElement("li");
    socialItem.classList.add("vcard__sidebar-social-item");

    const socialLink = document.createElement("a");
    socialLink.href = href;
    socialLink.target = "_blank";
    socialLink.classList.add("vcard__sidebar-social-link");

    const icon = document.createElement("ion-icon");
    icon.name = iconName;

    socialLink.appendChild(icon);
    socialItem.appendChild(socialLink);
    socialListSection.appendChild(socialItem);
});

/*
Personal Bio Section
*/
// loop through the personal bio array and render each paragraph
personalBio.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = paragraph;

    personalBioSection.appendChild(paragraphElement);
});

/*
Licenses and Certifications Section
*/
// loop through the license and certification array and render the html for each item
certifications.forEach((certification) => {
    const { url, imgSrc, title, issuer } = certification;

    const li = document.createElement("li");
    li.classList.add("vcard__certification-item");

    const iconBox = document.createElement("div");
    iconBox.classList.add("vcard__certification-icon-box");

    const imgLink = document.createElement("a");
    imgLink.href = url;
    imgLink.target = "_blank";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Certification Badge";
    img.width = "100";

    const contentBox = document.createElement("div");
    contentBox.classList.add("vcard__certification-content-box");

    const h4 = document.createElement("h4");
    h4.classList.add("h4", "vcard__certification-item-title");
    h4.textContent = title;

    const p = document.createElement("p");
    p.classList.add("vcard__certification-item-text");
    p.textContent = issuer;

    iconBox.appendChild(imgLink);
    imgLink.appendChild(img);
    contentBox.appendChild(h4);
    contentBox.appendChild(p);
    li.appendChild(iconBox);
    li.appendChild(contentBox);
    certificationSection.appendChild(li);
});

/*
Experiences Section
*/
// loop through the experiences array and create HTML elements for each item
experiences.forEach((experience) => {
    const { company, jobTitle, date, description } = experience;

    const li = document.createElement("li");
    li.classList.add("timeline-item");

    const h4 = document.createElement("h4");
    h4.classList.add("h4", "timeline-item-title");
    h4.textContent = company;

    const p = document.createElement("p");
    p.classList.add("timeline-job-title");
    p.textContent = jobTitle;

    const span = document.createElement("span");
    span.textContent = date;

    const descContainer = document.createElement("div");
    descContainer.classList.add("timeline-text-container");

    // loop through the description array and create HTML element for each item
    description.forEach((desc) => {
        const descElement = document.createElement("p");
        descElement.classList.add("timeline-text");
        descElement.textContent = desc;
        descContainer.appendChild(descElement);
    });

    li.appendChild(h4);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(descContainer);
    experiencesSection.appendChild(li);
});

/*
Education Section
*/
// loop through the education array and create HTML elements for each item
function renderEducationItem(education) {
    const educationItem = document.createElement("li");
    educationItem.classList.add("timeline-item");

    const school = document.createElement("h4");
    school.classList.add("h4", "timeline-item-title");
    school.textContent = education.school;

    const date = document.createElement("span");
    date.textContent = education.date;

    educationItem.appendChild(school);
    educationItem.appendChild(date);

    education.description.forEach((description) => {
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("timeline-text");
        descriptionElement.textContent = description;
        educationItem.appendChild(descriptionElement);
    });

    return educationItem;
}

educations.forEach((education) => {
    const renderedEducationItem = renderEducationItem(education);
    educationSection.appendChild(renderedEducationItem);
});

/*
Skills Section
*/
// loop through the skills array and create HTML elements for each item
skills.forEach((skill) => {
    const { skillName, percentage } = skill;

    const skillsItem = document.createElement("li");
    skillsItem.setAttribute("class", "vcard__skills-item");

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("class", "title-wrapper");

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "h5");
    h5.textContent = skillName;

    const dataElement = document.createElement("data");
    dataElement.setAttribute("value", percentage);
    dataElement.textContent = percentage + "%";

    const skillProgressBg = document.createElement("div");
    skillProgressBg.classList.add("vcard__skills-progress-bg");

    const skillProgressFill = document.createElement("div");
    skillProgressFill.classList.add("vcard__skills-progress-fill");
    skillProgressFill.style.width = percentage + "%";

    skillsItem.appendChild(titleContainer);
    titleContainer.appendChild(h5);
    titleContainer.appendChild(dataElement);
    skillsItem.appendChild(skillProgressBg);
    skillProgressBg.appendChild(skillProgressFill);
    skillSection.appendChild(skillsItem);
});
