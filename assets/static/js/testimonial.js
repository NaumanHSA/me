const testimonial = document.getElementById("testimonials")
const track = document.getElementById("testimonial-track");
const wrapper = document.getElementById("testimonial-wrapper");
const modal = document.getElementById("modal-box");
const modalContent = document.getElementById("modal-content");
const testimonials = [
    {
        message: "I had the pleasure of working with and directly managing Nouman at iENGINEERING and was consistently impressed by his ownership, critical thinking, and problem-solving skills. Nouman consistently took ownership of his work, always striving to deliver the highest quality results. He was not afraid to take on new challenges and was always willing to go the extra mile to ensure that his projects were completed to the best of his ability. In addition to his strong work ethic, Nouman has a natural ability to think critically and is skilled at finding creative solutions to even the most complex challenges. Nouman is a valuable asset to any team, and I highly recommend him for any opportunity.",
        name: "Ammar Waqar",
        designation: "Product Leader",
        image: "/assets/media/recommendations/ammar-waqar.jpg",
        linkedin: "https://www.linkedin.com/in/ammarwaqar/"
    },
    {
        message: "One of the values on our engineering team is “constant improvement,” and I’ve never seen anyone embrace and embody that philosophy like Muhammad Nouman. During the past year we’ve worked together, I’ve watched him constantly looking for new challenges to tackle. He’s also always the first to jump in if newer members of the team run into issues. Almost everything I learned about managing a team, I learned from him. He led the AI Engineering team at iEngineering (PVT) Ltd. In an industry known for being hard-charging, he broke the mold and created an environment where everyone felt supported and heard. Anyone would be lucky to work with a true leader like Nouman. I’ve loved my experience working with him, and I know that anyone looking to hire or work with him will, too.",
        name: "Fida Muhammad",
        designation: "Machine Learning Engineer",
        image: "/assets/media/recommendations/fida-muhammad.jpg",
        linkedin: "https://www.linkedin.com/in/fida-m/"
    },
    {
        message: "Nauman and I worked together on several projects, and I was lucky to call him my coworker. He consistently gave 100 per cent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and a knack for keeping everyone calm and productive on the team. Any team would be lucky to have Nauman, and I couldn't recommend him more for any business looking for new talent.",
        name: "Nabeeha Khattak",
        designation: "Project Manager",
        image: "/assets/media/recommendations/nabeeha-khattak.jpg",
        linkedin: "https://www.linkedin.com/in/nabeeha-khattak/"
    },
    {
        message: "Nouman and i worked together in iENGINEERING PTV as a Machine Learning Engineer. Nouman is very talented, knowledgeable, extremely hard working, and very conscientious with regard to deadlines, project completion and high quality work. He is a highly valued team member, Lead and a total professional that we can always rely on. He is a wonderful person too and always ready to help and guide others. I recommend that everyone can assign any task to him with full of confidence.",
        name: "Faizan Afzal",
        designation: "Machine Learning Engineer @ Transconomy",
        image: "/assets/media/recommendations/faizan-afzal.jpg",
        linkedin: "https://www.linkedin.com/in/faizanafzal-fa/"
    },
    {
        message: "Nouman is a smart and hardworking person. He is an intelligent, logical thinker and knows how to make a way out of any problem. I recommend Nouman to anyone who needs a smart thinker around them!",
        name: "Fauzan Azam",
        designation: "Microsoft Dynamics 365: NAV and Business Central Developer",
        image: "/assets/media/recommendations/fauzan-azam.jpg",
        linkedin: "https://www.linkedin.com/in/fauzan-azam/"
    },
];

function createTestimonialCard(t) {
    return `
    <div class="testimonial-card whitespace-normal break-words bg-white/10 backdrop-blur-xl border border-[#333] rounded-2xl shadow-2xl text-white p-4 sm:p-6 flex flex-col justify-between w-[340px] shrink-0 h-full llm-section">
      <div>
        <p class="read-more-text text-sm text-neutral-300 mb-2 line-clamp-4 render-llm-text">${t.message}</p>
        <button class="read-more-toggle-2 text-cyan mt-2 text-sm hover:underline">Read more</button>
      </div>
      <div class="flex items-center gap-4 mt-6">
        <a href="${t.linkedin}" target="_blank">
          <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" />
        </a>
        <div>
          <p class="font-semibold text-white text-sm">${t.name}</p>
          <p class="text-neutral-400 text-xs">${t.designation}</p>
        </div>
      </div>
    </div>`;
}

function renderTestimonials() {
    // Clear the track first
    track.innerHTML = "";

    // Append original set
    testimonials.forEach((t) => {
        track.insertAdjacentHTML("beforeend", createTestimonialCard(t));
    });

    // Duplicate to simulate infinite loop
    testimonials.forEach((t) => {
        track.insertAdjacentHTML("beforeend", createTestimonialCard(t));
    });
}

renderTestimonials();

// Clone cards for infinite loop
track.innerHTML += track.innerHTML;
let justOpened = false;


// Handle Read More Click (Position Modal)
document.querySelectorAll(".read-more-toggle-2").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = btn.closest(".testimonial-card");
        const cloned = card.cloneNode(true);

        // Remove Read More button from modal
        cloned.classList.remove("bg-white/10")
        cloned.classList.add("bg-black/60")
        cloned.classList.remove("w-[340px]")
        cloned.classList.add("max-w-[50%]")
        cloned.querySelector(".read-more-toggle-2")?.remove();
        cloned.querySelector(".read-more-text")?.classList.remove("line-clamp-4");

        // Set modal content
        modalContent.innerHTML = "";
        modalContent.appendChild(cloned);

        // Show modal
        modal.classList.remove("hidden");

        // Position modal box near the button
        const rect = btn.getBoundingClientRect();
        console.log(rect)
        modal.style.top = `${rect.top + window.scrollY}px`;
        modal.style.left = `${rect.left + window.scrollX}px`;

        // Set flag
        justOpened = true;

        // Reset flag after short delay
        setTimeout(() => {
            justOpened = false;
        }, 100);
    });
});

// Close Modal (Outside Click)
document.addEventListener("click", function (e) {
    if (justOpened) return; // Skip if modal just opened

    if (
        modal &&
        !modal.classList.contains("hidden") &&
        !modal.contains(e.target)
    ) {
        modal.classList.add("hidden");
        track.style.animationPlayState = "running";
    }
});

// Pause on hover
wrapper.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});
wrapper.addEventListener("mouseleave", () => {
    if (modal.classList.contains("hidden")) {
        track.style.animationPlayState = "running";
    }
});


// Optional: drag scroll
let isDown = false;
let startX, scrollLeft;
wrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
    wrapper.classList.add("cursor-grabbing");
});
wrapper.addEventListener("mouseleave", () => {
    isDown = false;
    wrapper.classList.remove("cursor-grabbing");
});
wrapper.addEventListener("mouseup", () => {
    isDown = false;
    wrapper.classList.remove("cursor-grabbing");
});
wrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 2;
    wrapper.scrollLeft = scrollLeft - walk;
});
