const navLinks = [
    {
        id: 1,
        name: "Work",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Dec, 2022 - June, 2026",
        title:
            "Sber is Russia’s largest bank, a key lender to the national economy, and one of the most stable companies on the market in terms of dividend payments and profit growth.",
        image: "/images/sber.png",
        link: "https://www.sberbank.ru/",
    },
    {
        id: 2,
        date: "Feb, 2022 - Sep, 2022",
        title: "Sitronics Group is a diversified Russian IT company that is part of the AFK Sistema structure. It implements digital projects for the government and businesses, and is engaged in the implementation of solutions for “smart cities,” security, and the digitalization of strategic industries.",
        image: "/images/sitronics.png",
        link: "https://www.sitronics.com/",
    },
    {
        id: 3,
        date: "Apr, 2021 - Feb, 2022",
        title: "Fabuza is a cloud-based platform for conducting qualitative and quantitative UX research, tests and surveys.",
        image: "/images/fabuza.png",
        link: "https://www.fabuza.ru/",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "JavaScript", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "BitBucket", "RTK Query"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/SergeyX",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/sergey-kharitonov-494832b3/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/photo.png",
    },
    {
        id: 2,
        img: "/images/photo1.png",
    },
    {
        id: 3,
        img: "/images/photo3.jpg",
    },
    {
        id: 4,
        img: "/images/photo2.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "React JS",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "React JS.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-7",
                    description: [
                        "React.js (commonly called React) is a popular open-source JavaScript library for building user interfaces, especially for web applications. It was created by Facebook (now Meta) in 2013 and is maintained by Meta along with a large community of developers",
                        "It is maintained by a community of individual developers and companies and governed by the React Foundation, an independent foundation hosted by the Linux Foundation. According to the 2025 Stack Overflow Developer Survey, React is one of the most commonly used web technologies.",
                        "React adheres to the declarative programming paradigm. Developers design views for each state of an application, and React updates and renders components when data changes. This is in contrast with imperative programming.",
                    ],
                },
                {
                    id: 2,
                    name: "react.dev",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://react.dev/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "react.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/react.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "JavaScript",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "JavaScript.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "JavaScript (JS) is a high-level, interpreted programming language that powers the interactive web. It was created by Brendan Eich in 1995 and is now one of the most widely used programming languages in the world",
                        "Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.",
                        "JavaScript is a high-level, often just-in-time–compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)",
                    ],
                },
                {
                    id: 2,
                    name: "learn.javascript.ru",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://learn.javascript.ru/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "javascript.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/js.png",
                },
            ],
        },

        {
            id: 7,
            name: "TypeScript",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-62 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "TypeScript.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "TypeScript (TS) is a statically typed superset of JavaScript created by Microsoft in 2012. It adds optional types on top of JavaScript, then compiles down to plain JavaScript that runs anywhere JS runs — browsers, Node.js, etc.",
                        "TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with React.js, Node.js, Deno or Bun). Multiple options are available for transpiling. The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.",
                        "TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. ",
                    ],
                },
                {
                    id: 2,
                    name: "typescriptlang.org",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://www.typescriptlang.org/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "typescript.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/ts.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 8,
            name: "Git",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[47vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Git.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Git is a distributed version control system created by Linus Torvalds in 2005 (the same person who created Linux). It tracks changes in your code over time, lets you collaborate with others, and helps you revert to previous versions when things go wrong.",
                        "Design goals of Git include speed, data integrity, and support for distributed, non-linear workflows—thousands of parallel branches running on different computers",
                        "As with most other distributed version control systems, and unlike most client–server systems, Git maintains a local copy of the entire repository, also known as the repo, with history and version-tracking abilities, independent of network access or a central server. A repository is stored on each computer in a standard directory with additional, hidden files to provide version control capabilities.",
                    ],
                },
                {
                    id: 2,
                    name: "git-scm.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://git-scm.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "git.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/git.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/photo.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/photo2.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            imageUrl: "/images/photo.png",
            description: [
                "Hey! I’m Sergey 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-10 right-20",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };