const projectsData = [ // Slide 1
    {
        title: "codemind",
        time: "February 24, 2022 - Now",
        datetime: "2022-02-24",
        overview: `A full-stack system combining a FastAPI backend and Streamlit frontend to help developers analyze, explore, and understand codebases using LLMs. Features agentic workflows powered by ReactAgent, semantic vector search, and multi-model backend support including OpenAI, vLLM, llama.cpp, Transformers, and more..`,
        techTags: ["python", "fastapi", "openai", "vllm", "llama", "huggingface"],
        moreLink: "assets/projects/codemind.html"
    },
    {
        title: "OCR Data Toolkit",
        time: "Jan 10, 2021 - Dec 2021",
        datetime: "2021-01-10",
        overview: `A powerful Python toolkit for generating high-quality synthetic datasets for Optical Character Recognition (OCR) model training and evaluation. It enables generating realistic text images with configurable backgrounds, fonts, augmentations, and corresponding ground-truth labels—ideal for both academic research and production training pipelines.`,
        techTags: ["python", "tensorflow", "opencv"],
        moreLink: "assets/projects/ocr_data_toolkit.html"
    },
    {
        title: "😎 Face Recognition - MERN Stack Application",
        time: "Jan 10, 2021 - Dec 2021",
        datetime: "2021-01-10",
        overview: `The Face Recognition MERN Stack Application is a full-stack web application that enables users to register, recognize, and manage identities through facial images. Designed to demonstrate the power of deep learning integrated with modern web technologies, it seamlessly connects a React front-end with a Node.js backend and MongoDB database.`,
        techTags: ["tensorflow", "opencv", "react", "nodejs"],
        moreLink: "assets/projects/MERN_stack_FR.html"
    },
    {
        title: "🎥 Face Stream Worker",
        time: "Aug 2023 - Present",
        datetime: "2023-08-01",
        overview: `Face Stream Worker is a robust, production-ready backend system built with FastAPI for managing and processing real-time video streams from IP cameras capable of detecting and tracking faces. Designed with scalability and efficiency in mind, it provides asynchronous operations, multiprocessing for handling multiple video streams concurrently, and optional Redis integration for event broadcasting.`,
        techTags: ["python", "fastapi", "opencv", "pytorch"],
        moreLink: "assets/projects/face_stream_worker.html"
    },
    {
        title: "Document Capture SDK",
        time: "Jan 10, 2021 - Dec 2021",
        datetime: "2021-01-10",
        overview: `Document Capture SDK is a lightweight, high-performance JavaScript library built for capturing high-quality images of physical documents directly in the browser. The solution ensures documents are precisely detected, cropped, aligned, and classified in real time, enabling smooth digital onboarding and document analysis workflows.`,
        techTags: ["opencv", "tensorflow", "nodejs"],
        moreLink: "assets/projects/document_capture.html"
    },
    {
        title: "📸 Live Face Capture",
        time: "February 24, 2022 - Now",
        datetime: "2022-02-24",
        overview: `Live Face Capture is a lightweight JavaScript library designed to reliably capture high-quality, front-facing facial images, optimized for scenarios where precise face alignment and authenticity are crucial. The library ensures that captured photos are properly aligned and feature real human faces by combining pose estimation with liveness detection.`,
        techTags: ["python", "opencv", "tensorflowjs"],
        moreLink: "assets/projects/live_face_capture.html"
    },
    {
        title: "Real-Time Detection of a Suspicious Person",
        time: "Jan 10, 2021 - Dec 2021",
        datetime: "2021-01-10",
        overview: `Real-Time Detection of a Suspicious Person in CCTV Footage is a cutting-edge computer vision system designed to automatically detect potentially dangerous individuals in live CCTV streams. The system focuses on identifying persons holding weapons—a critical sign of potential threats—thus reducing reliance on human operators and enabling proactive security measures in real-time.`,
        techTags: ["python", "tensorflow", "opencv"],
        moreLink: "assets/projects/SPD.html"
    },
    {
        title: "🔐 Enigma — Enigma Machine Simulator",
        time: "Mar 5, 2020 - Jul 2020",
        datetime: "2020-03-05",
        overview: `Enigma is a Python package and CLI tool that simulates the iconic World War II Enigma machine. With customizable settings for rotors, ring positions, reflectors, and plugboard wiring, Enigma offers an authentic simulation experience for cryptography enthusiasts, educators, and developers.`,
        techTags: ["python"],
        moreLink: "assets/projects/enigma.html"
    },
    {
        title: "🚦Road Traffic Monitoring System using YOLOv5",
        time: "Jan 10, 2021 - Dec 2021",
        datetime: "2021-01-10",
        overview: `The Real-Time Road Traffic Monitoring System is an advanced computer vision platform designed to analyze live road traffic footage with remarkable precision and speed. It integrates deep learning models to detect, classify, and track vehicles while extracting rich details like vehicle brand and color in real time.`,
        techTags: ["python", "tensorflow", "opencv"],
        moreLink: "assets/projects/traffic_monitoring.html"
    }
];


function renderProjects(projects, projectsPerSlide = 4) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    for (let i = 0; i < projects.length; i += projectsPerSlide) {
        const slideProjects = projects.slice(i, i + projectsPerSlide);

        const slideDiv = document.createElement("div");
        slideDiv.className = "swiper-slide";

        const gridDiv = document.createElement("div");
        gridDiv.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 p-0";

        slideProjects.forEach((project) => {
            const card = `
        <div class="bg-gradient-white-to-black backdrop-blur-md rounded-3xl p-4 sm:p-8 border border-[#333] rounded-xl bg-[#111111] text-white shadow-2xl flex flex-col h-full llm-section">
          <h3 class="text-xl font-semibold mb-1 render-llm-text">${project.title}</h3>
          <p class="text-sm text-neutral-300 mb-2 render-llm-text">${project.overview}</p>
          <div class="tech-tags mt-6 flex flex-wrap gap-2 render-llm-text" data-tags="${project.techTags.join(',')}" data-theme="dark"></div>
          <div class="mt-6 flex flex-wrap gap-4">
            <a href="${project.moreLink}" target="_blank" class="project-more-link group flex w-fit items-center rounded-md px-4 py-2 font-medium bg-cyan text-black hover:bg-cyan-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-link mr-2 size-5 stroke-2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              More Details
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>`;
            gridDiv.innerHTML += card;
        });

        slideDiv.appendChild(gridDiv);
        container.appendChild(slideDiv);
    }

    // Re-init swiper
    if (window.mySwiper) {
        window.mySwiper.destroy(true, true);
    }

    window.mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
        },
    });
}

let currentMode = window.innerWidth < 640 ? "mobile" : "desktop";

function getMode() {
    return window.innerWidth < 640 ? "mobile" : "desktop";
}

function getProjectsPerSlide() {
    return getMode() === "mobile" ? 1 : 4;
}

window.addEventListener("resize", () => {
    const newMode = getMode();
    if (newMode !== currentMode) {
        currentMode = newMode;
        renderProjects(projectsData, getProjectsPerSlide());
    }
});


// Call it once DOM is ready
renderProjects(projectsData, getProjectsPerSlide());

