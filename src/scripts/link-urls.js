// Define your URLs here
const urls = {
    website: "",
    // website: "http://127.0.0.1:5500/",
    linkedin: "https://www.linkedin.com/in/nomihsa965/",
    resume: "https://yourwebsite.com/resume.pdf",
    instagram: "https://instagram.com/nomihsa965",
    github: "https://github.com/NaumanHSA",
    fiverr: "https://www.fiverr.com/naumanhsa965",
    email: "mailto:naumanhsa@gmail.com"
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.dynamic-link').forEach(link => {
        const id = link.dataset.urlid;
        const url = urls[id]
        const originalHref = link.getAttribute('href');
        if (originalHref && originalHref.startsWith('#')) {
            link.setAttribute('href', url + originalHref);
        } else {
            link.href = url;
        }
    });
});