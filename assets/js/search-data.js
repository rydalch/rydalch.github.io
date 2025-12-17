// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of some of my recent projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/rydalch.net/assets/pdf/Rydalch-CV-25cln.pdf";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Example of teaching to connect theory with the real world.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-ve-never-found-anyone-that-didn-t-want-to-help-me-if-i-asked-them-for-help-steve-jobs",
          title: 'I’ve never found anyone that didn’t want to help me if I asked...',
          description: "",
          section: "News",},{id: "news-the-so-called-little-star-of-bethlehem-was-actually-very-large-in-its-declaration-of-divine-design-it-had-to-have-been-placed-in-its-precise-orbit-long-long-before-it-shone-so-precisely-his-overseeing-precision-pertains-not-only-to-astrophysical-orbits-but-to-human-orbits-as-well-this-is-such-a-stunning-thing-for-us-to-contemplate-as-to-our-obligations-to-shine-as-lights-within-our-own-orbits-and-personal-responsibilities-neal-a-maxwell",
          title: 'The so-called “little star of Bethlehem” was actually very large in its declaration...',
          description: "",
          section: "News",},{id: "news-although-the-world-is-full-of-suffering-it-is-also-full-of-the-overcoming-of-it-helen-keller",
          title: 'Although the world is full of suffering, it is also full of the...',
          description: "",
          section: "News",},{id: "projects-handwritting-transcription",
          title: 'handwritting transcription',
          description: "using ai to transcribe my handwritten journals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-transcription/";
            },},{id: "projects-budget-tracker",
          title: 'budget tracker',
          description: "update a budget automatically",
          section: "Projects",handler: () => {
              window.location.href = "/projects/auto-budget/";
            },},{id: "projects-llm-questionnaire-processing",
          title: 'llm questionnaire processing',
          description: "tool to generate accurate responses to customer security questionnaires using an LLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-answers/";
            },},{id: "projects-prompt-library",
          title: 'prompt library',
          description: "learn with interactive LLM prompts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prompt-library/";
            },},{id: "projects-risk-resources",
          title: 'risk resources',
          description: "knowledgebase of current cyber risk resources",
          section: "Projects",handler: () => {
              window.location.href = "/projects/risk-resources/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%79%64%61%6C%63%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rydalch", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/rydalch_", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rydalch", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
