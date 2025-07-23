// techTags.js
const techStack = {
    python: { name: "Python", logo: "src/media/tech/python.svg", href: "https://python.org/" },
    pytorch: { name: "PyTorch", logo: "src/media/tech/pytorch.svg", href: "https://pytorch.org/" },
    tensorflow: { name: "TensorFlow", logo: "src/media/tech/tensorflow.svg", href: "https://www.tensorflow.org/" },
    huggingface: { name: "Hugging Face", logo: "src/media/tech/huggingface.svg", href: "https://huggingface.co/" },
    vllm: { name: "vllm", logo: "src/media/tech/vllm.svg", href: "https://github.com/vllm-project/vllm/" },
    llama: { name: "llama.cpp", logo: "src/media/tech/llama-cpp.svg", href: "https://github.com/ggml-org/llama.cpp/" },
    unsloth: { name: "unsloth", logo: "src/media/tech/unsloth.png", href: "https://unsloth.ai/" },
    openai: { name: "OpenAI", logo: "src/media/tech/openai.svg", href: "https://platform.openai.com/" },
    langchain: { name: "LangChain", logo: "src/media/tech/langchain.svg", href: "https://www.langchain.com/" },
    scikitlearn: { name: "scikit-learn", logo: "src/media/tech/scikit-learn.svg", href: "https://scikit-learn.org/" },
    numpy: { name: "NumPy", logo: "src/media/tech/numpy.svg", href: "https://numpy.org/" },
    pandas: { name: "Pandas", logo: "src/media/tech/pandas.svg", href: "https://pandas.pydata.org/" },
    jupyter: { name: "Jupyter", logo: "src/media/tech/jupyter.svg", href: "https://jupyter.org/" },
    opencv: { name: "OpenCV", logo: "src/media/tech/opencv.svg", href: "https://opencv.org/" },
    tensorflowjs: { name: "TensorFlow.js", logo: "src/media/tech/tensorflow.svg", href: "https://www.tensorflow.org/js" },
    cuda: { name: "CUDA", logo: "src/media/tech/cuda.svg", href: "#" },
    fastapi: { name: "FastAPI", logo: "src/media/tech/fastapi.svg", href: "https://fastapi.tiangolo.com/" },
    flask: { name: "Flask", logo: "src/media/tech/flask.svg", href: "https://flask.palletsprojects.com/" },
    nodejs: { name: "Node.js", logo: "src/media/tech/nodejs.svg", href: "https://nodejs.org/" },
    react: { name: "React", logo: "src/media/tech/react.svg", href: "https://reactjs.org/" },
    androidstudio: { name: "Android Studio", logo: "src/media/tech/android-studio.svg", href: "https://developer.android.com/studio" },
    docker: { name: "Docker", logo: "src/media/tech/docker.svg", href: "https://www.docker.com/" },
    git: { name: "Git", logo: "src/media/tech/git.svg", href: "https://git-scm.com/" },
    github: { name: "GitHub", logo: "src/media/tech/github.svg", href: "https://github.com/" },
    postman: { name: "Postman", logo: "src/media/tech/postman.svg", href: "https://postman.com/" },
    ubuntu: { name: "Ubuntu", logo: "src/media/tech/ubuntu.svg", href: "https://ubuntu.com/" },
};

// Renders a single set of tech tags
function renderTechTags(container, keys, theme) {
    if (!container || !keys?.length) return;

    const stack = typeof container === "string" ? document.getElementById(container) : container;

    keys.forEach(key => {
        const item = techStack[key.trim()];
        if (!item) return;

        const wrapper = document.createElement("div");
        wrapper.className =
            "flex cursor-default items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono text-sm font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5";

        const img = document.createElement("img");
        img.src = item.logo;
        img.alt = item.name;
        img.width = 20;
        img.height = 20;
        img.className = "size-5";

        wrapper.appendChild(img);
        wrapper.appendChild(document.createTextNode(` ${item.name}`));

        if (item.href) {
            const link = document.createElement("a");
            link.href = item.href;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.appendChild(wrapper);
            stack.appendChild(link);
        } else {
            stack.appendChild(wrapper);
        }
    });
}

// Auto-render all .tech-tags divs with data-tags
document.querySelectorAll(".tech-tags[data-tags]").forEach(el => {
    const tags = el.dataset.tags?.split(",") || [];
    const theme = el.dataset.theme || null;
    renderTechTags(el, tags, theme);
});


