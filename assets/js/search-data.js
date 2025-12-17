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
          section: "News",},{id: "news-someday-i-hope-to-enjoy-enough-of-what-the-world-calls-success-so-that-someone-will-ask-me-what-s-the-secret-of-it-i-shall-say-simply-this-i-get-up-when-i-fall-down-paul-harvey",
          title: '“Someday I hope to enjoy enough of what the world calls success so...',
          description: "",
          section: "News",},{id: "news-it-s-not-than-i-m-so-smart-it-s-just-that-i-stay-with-problems-longer-albert-einstein",
          title: 'It’s not than I’m so smart, it’s just that I stay with problems...',
          description: "",
          section: "News",},{id: "news-i-ve-learned-over-the-decades-that-people-like-me-better-if-they-ve-met-my-wife-first-dale-g-renlund",
          title: 'I’ve learned over the decades that people like me better if they’ve met...',
          description: "",
          section: "News",},{id: "news-when-love-of-christ-envelops-our-lives-we-approach-disagreements-with-meekness-patience-and-kindness-dale-g-renlund",
          title: 'When love of Christ envelops our lives, we approach disagreements with meekness, patience,...',
          description: "",
          section: "News",},{id: "news-she-would-have-lived-in-the-temple-if-she-could-have-so-she-made-a-temple-of-the-home-in-which-we-lived-jeffrey-r-holland",
          title: 'She would have lived in the temple if she could have, so she...',
          description: "",
          section: "News",},{id: "news-our-greatest-glory-is-not-in-never-failing-but-in-rising-up-every-time-we-fail-ralph-waldo-emerson",
          title: 'Our greatest glory is not in never failing, but in rising up every...',
          description: "",
          section: "News",},{id: "news-our-greatest-weakness-lies-in-giving-up-the-most-certain-way-to-succeed-is-always-to-try-just-one-more-time-thomas-a-edison",
          title: 'Our greatest weakness lies in giving up. The most certain way to succeed...',
          description: "",
          section: "News",},{id: "news-i-am-a-slow-walker-but-i-never-walk-backwards-abraham-lincoln",
          title: 'I am a slow walker, but I never walk backwards. - Abraham Lincoln...',
          description: "",
          section: "News",},{id: "news-any-fool-can-know-the-point-is-to-understand-albert-einstein",
          title: 'Any fool can know… the point is to understand. - Albert Einstein',
          description: "",
          section: "News",},{id: "news-we-don-t-see-things-as-they-are-we-see-them-as-we-are-anaïs-nin",
          title: 'We don’t see things as they are, we see them as we are....',
          description: "",
          section: "News",},{id: "news-my-life-cannot-implement-in-action-the-demands-of-all-the-people-to-whom-my-heart-responds-anne-morrow-lindbergh",
          title: 'My life cannot implement in action the demands of all the people to...',
          description: "",
          section: "News",},{id: "news-the-greatest-good-you-can-do-for-another-is-not-just-to-share-your-riches-but-to-reveal-to-him-his-own-benjamin-disraeli",
          title: 'The greatest good you can do for another is not just to share...',
          description: "",
          section: "News",},{id: "news-the-only-grace-you-can-have-is-the-grace-you-can-imagine-benjamin-zander-rosamund-stone-zander",
          title: 'The only grace you can have is the grace you can imagine. -...',
          description: "",
          section: "News",},{id: "news-good-and-evil-both-increase-at-compound-interest-c-s-lewis",
          title: 'Good and evil both increase at compound interest… - C. S. Lewis',
          description: "",
          section: "News",},{id: "news-exaltation-is-our-goal-discipleship-is-our-journey-dieter-f-uchtdorf",
          title: 'Exaltation is our goal. Discipleship is our journey. - Dieter F. Uchtdorf',
          description: "",
          section: "News",},{id: "news-all-that-is-necessary-for-the-triumph-of-evil-is-that-good-men-do-nothing-edmund-burke",
          title: 'All that is necessary for the triumph of evil is that good men...',
          description: "",
          section: "News",},{id: "news-when-people-talk-listen-completely-ernest-hemingway",
          title: 'When people talk listen completely…. - Ernest Hemingway',
          description: "",
          section: "News",},{id: "news-i-have-no-doubt-that-providence-guided-us-ernest-shackleton",
          title: 'I have no doubt that Providence guided us - Ernest Shackleton',
          description: "",
          section: "News",},{id: "news-i-considered-it-wisdom-to-make-an-attempt-to-build-up-a-city-joseph-smith",
          title: 'I considered it wisdom to make an attempt to build up a city....',
          description: "",
          section: "News",},{id: "news-imitation-is-the-most-acceptable-part-of-worship-marcus-aurelius",
          title: 'Imitation is the most acceptable part of Worship - Marcus Aurelius',
          description: "",
          section: "News",},{id: "news-just-do-it-nike",
          title: 'Just Do It - Nike',
          description: "",
          section: "News",},{id: "news-most-fundamental-harm-we-can-do-is-to-not-have-the-courage-to-look-at-ourselves-honestly-pema-chödrön",
          title: '…most fundamental harm we can do is to not have the courage to...',
          description: "",
          section: "News",},{id: "news-the-best-way-out-is-always-through-robert-frost",
          title: 'The best way out is always through. - Robert Frost',
          description: "",
          section: "News",},{id: "news-i-ve-never-found-anyone-that-didn-t-want-to-help-me-if-i-asked-them-for-help-steve-jobs",
          title: 'I’ve never found anyone that didn’t want to help me if I asked...',
          description: "",
          section: "News",},{id: "news-in-matters-of-style-swim-with-the-current-in-matters-of-principle-stand-like-a-rock-thomas-jefferson",
          title: 'In matters of style, swim with the current; in matters of principle, stand...',
          description: "",
          section: "News",},{id: "news-i-consider-charity-or-the-pure-love-of-christ-to-be-the-opposite-of-criticism-and-judging-thomas-s-monson",
          title: 'I consider charity—or “the pure love of Christ”—to be the opposite of criticism...',
          description: "",
          section: "News",},{id: "news-despite-our-own-imperfections-we-have-a-tendency-to-point-out-those-of-others-thomas-s-monson",
          title: 'Despite our own imperfections, we have a tendency to point out those of...',
          description: "",
          section: "News",},{id: "news-coaching-is-unlocking-a-person-s-potential-to-maximize-their-own-performance-tim-gallwey",
          title: 'Coaching is unlocking a person’s potential to maximize their own performance…. - Tim...',
          description: "",
          section: "News",},{id: "news-anyone-can-count-the-seeds-in-an-apple-but-who-can-count-the-apples-in-a-seed-truman-madsen",
          title: 'Anyone can count the seeds in an apple. But who can count the...',
          description: "",
          section: "News",},{id: "news-you-always-believed-in-me-and-i-always-wanted-you-to-be-right-unknown",
          title: 'You always believed in me and I always wanted you to be right....',
          description: "",
          section: "News",},{id: "news-perfection-is-not-attainable-but-if-we-chase-perfection-we-can-catch-excellence-vinse-lambardi",
          title: 'Perfection is not attainable. But if we chase perfection, we can catch excellence....',
          description: "",
          section: "News",},{id: "news-a-man-who-works-for-the-immediate-present-and-its-immediate-rewards-is-nothing-but-a-fool-wilbur-wright",
          title: 'A man who works for the immediate present and its immediate rewards is...',
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
