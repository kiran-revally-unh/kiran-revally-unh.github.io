import { Projects } from '../types/Project';

export const projects: Projects = {
  'enterprise-frontend-platform': {
    id: 'enterprise-frontend-platform',
    name: 'Enterprise Frontend Platform',
    summary: [
      'Core Angular/TypeScript platform for enterprise-scale, data-intensive applications.',
      'Focus on performance, reliability, and reusable UI components across multiple teams.',
    ],
    tags: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'Enterprise Frontend' },
      { name: 'UI Systems' },
    ],
  },
  'test-automation-suite': {
    id: 'test-automation-suite',
    name: 'Test Automation Suite',
    summary: [
      'End-to-end and regression test automation for complex web applications.',
      'Improves deployment confidence with Playwright/Jest/Cypress coverage integrated into CI/CD.',
    ],
    tags: [
      { name: 'Automation' },
      { name: 'Playwright' },
      { name: 'Jest' },
      { name: 'CI/CD' },
    ],
  },
  'ai-chatbot-llm': {
    id: 'ai-chatbot-llm',
    name: 'AI Chatbot LLM Experiments',
    srcURL: { url: 'https://github.com/kiran-revally-unh/AI-chatbot-LLM' },
    summary: [
      'Experiments with LLM-powered chat experiences, tooling, and integrations.',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'LLM' },
      { name: 'AI' },
      { name: 'Experimentation' },
    ],
  },
  dutyspin: {
    id: 'dutyspin',
    name: 'DutySpin',
    srcURL: { url: 'https://github.com/kiran-revally-unh/DutySpin' },
    summary: [
      'Utility app that helps roommates coordinate shared chores with turn-based responsibilities.',
    ],
    tags: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Mobile' },
    ],
  },
};

export default projects;
    name: '📈 Coronavirus (COVID-19) Dashboard',
    srcURL: { url: 'https://github.com/trekhleb/covid-19/' },
    demoURL: { url: 'https://trekhleb.dev/covid-19/' },
    cover: { srcPath: 'projects/covid-dashboard/cover.png' },
    startDate: '2020-03-01',
    endDate: '2020-04-01',
    summary: [
      'Coronavirus (COVID-19) dashboard to show the dynamics of Сoronavirus distribution per country',
    ],
    tags: [
      { name: 'COVID-19' },
      { name: 'React' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'covid-19',
    },
  },
  'nano-neuron': {
    id: 'nano-neuron',
    name: '🤖 NanoNeuron',
    srcURL: { url: 'https://github.com/trekhleb/nano-neuron' },
    cover: { srcPath: 'projects/nano-neuron/cover.png' },
    startDate: '2019-12-01',
    endDate: '2020-01-01',
    summary: [
      'NanoNeuron is 7 simple JavaScript functions that will give you a feeling of how machines can actually "learn".',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'JavaScript' },
      { name: 'Algorithms' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'nano-neuron',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/nano-neuron/achievements/00-hacker-news-2019-12-06.png' },
        date: '2019-12-06',
        link: { url: 'https://news.ycombinator.com/front?day=2019-12-06', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed in the Hot list of JavaScript subreddit',
        image: { srcPath: 'projects/nano-neuron/achievements/01-reddit-javascript-hot-2021-02-14.png' },
        date: '2021-02-14',
        link: {
          url: 'https://www.reddit.com/r/javascript/comments/ljl416/nanoneuron_7_simple_js_functions_that_explain_how/',
          caption: 'Reddit post',
        },
      },
    ],
  },
  'use-position': {
    id: 'use-position',
    name: '🌍 usePosition: React hook for fetching and following a browser geolocation',
    srcURL: { url: 'https://github.com/trekhleb/use-position' },
    demoURL: { url: 'https://trekhleb.dev/use-position' },
    cover: { srcPath: 'projects/use-position/cover.png' },
    startDate: '2019-01-01',
    endDate: '2019-02-01',
    summary: [
      'React hook usePosition() for fetching and following a browser geolocation',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Geolocation' },
      { name: 'React Hooks' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'use-position',
    },
    achievements: [
      {
        title: '1000+ weekly installs on NPM',
        image: { srcPath: 'projects/use-position/achievements/01-npm-stats-2021-10-26.png' },
        date: '2021-10-26',
        link: { url: 'https://www.npmjs.com/package/use-position', caption: 'Package page on NPM' },
      },
    ],
  },
  'javascript-algorithms-book': {
    id: 'javascript-algorithms-book',
    name: '📘 JavaScript Algorithms Book',
    demoURL: { url: 'https://www.newline.co/javascript-algorithms' },
    cover: { srcPath: 'projects/javascript-algorithms-book/cover-1.png' },
    startDate: '2018-09-01',
    endDate: '2019-09-01',
    summary: [
      'The book about basic algorithms and datastructures implemented in JavaScript',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Algorithms' },
      { name: 'Book' },
    ],
    achievements: [
      {
        title: 'The book is published on GumRoad',
        image: { srcPath: 'projects/javascript-algorithms-book/achievements/00-published-on-gumroad.png' },
        link: { url: 'https://gumroad.com/l/javascript-algorithms-full', caption: 'The book page' },
      },
      {
        title: 'The book is published on NewLine',
        image: { srcPath: 'projects/javascript-algorithms-book/achievements/01-published-on-newline.png' },
        link: { url: 'https://www.newline.co/javascript-algorithms', caption: 'The book page' },
      },
    ],
  },
  'homemade-machine-learning': {
    id: 'homemade-machine-learning',
    name: '🤖 Homemade Machine Learning',
    srcURL: { url: 'https://github.com/trekhleb/homemade-machine-learning' },
    startDate: '2018-12-01',
    endDate: '2019-01-01',
    cover: { srcPath: 'projects/homemade-machine-learning/cover.png' },
    summary: [
      'Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'Algorithms' },
      { name: 'Python' },
      { name: 'Jupyter Notebook' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'homemade-machine-learning',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/00-hacker-news-2019-11-02.png' },
      },
      {
        title: 'Listed on GitHub Explore page',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/01-github-explore-2019-11-02.png' },
      },
      {
        title: 'GitHub trending devs of the day',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/02-github-trending-devs-day-2019-11-02.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/03-github-trending-repo-day-2019-11-02.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/05-github-trending-week-2019-05-09.png' },
        date: '2019-05-09',
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/homemade-machine-learning/achievements/06-github-trending-week-2019-11-02.png' },
      },
    ],
  },
  'promote-your-next-startup': {
    id: 'promote-your-next-startup',
    name: '📣 Promote Your Next Startup',
    srcURL: { url: 'https://github.com/trekhleb/promote-your-next-startup' },
    startDate: '2018-06-11',
    cover: { srcPath: 'projects/promote-your-next-startup/cover-01.jpg' },
    summary: [
      'Curated list of the free web-resources you may want to use to promote your next startup',
    ],
    tags: [
      { name: 'Promotion' },
      { name: 'Links' },
      { name: 'Startup' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'promote-your-next-startup',
    },
    achievements: [
      {
        title: 'Listed on Hacker News',
        image: { srcPath: 'projects/promote-your-next-startup/achievements/00-hacker-news-2021-10-09.png' },
        date: '2021-10-09',
        link: { url: 'https://news.ycombinator.com/front?day=2021-10-09', caption: 'Hacker News archive' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/promote-your-next-startup/achievements/01-github-trending-of-the-day-2021-10-11.png' },
        date: '2021-10-11',
      },
    ],
  },
  'javascript-algorithms': {
    id: 'javascript-algorithms',
    name: '📝 JavaScript Algorithms and Data-Structures',
    srcURL: { url: 'https://github.com/trekhleb/javascript-algorithms' },
    startDate: '2018-02-01',
    cover: { srcPath: 'projects/javascript-algorithms/cover.png' },
    summary: [
      'Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'Jest' },
      { name: 'Algorithms' },
      { name: 'Data Structures' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'javascript-algorithms',
    },
    achievements: [
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-hacker-news-2018-05-23.png' },
        date: '2018-05-23',
        link: { url: 'https://news.ycombinator.com/front?day=2018-05-23', caption: 'Hacker News archive' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-hacker-news-2018-07-20.png' },
        date: '2018-07-20',
        link: { url: 'https://news.ycombinator.com/front?day=2018-07-20', caption: 'Hacker News archive' },
      },
      {
        title: 'Issued in "JavaScript Weekly" newsletter (Top code and tools of 2018)',
        image: { srcPath: 'projects/javascript-algorithms/achievements/25-javascript-weekly-2018-12-21.png' },
        date: '2018-12-21',
        link: { url: 'https://javascriptweekly.com/issues/417', caption: 'JavaScript Weekly (issue #417)' },
      },
      {
        title: 'Ranked as #6 of top JavaScript repositories on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/00-top-js-repos-on-github-2021-04-30.png' },
        date: '2021-04-30',
        link: {
          url: 'https://github.com/search?l=&o=desc&q=stars%3A%3E0+language%3AJavaScript&s=stars&type=Repositories',
          caption: 'GitHub search query example',
        },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/01-github-trending-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/02-github-trending-day-2020-11-19.png' },
        date: '2020-11-19',
      },
      {
        title: 'Trending repository of the month on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/03-github-trending-month.png' },
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/04-github-trending-week-2020-12-13.png' },
        date: '2020-12-13',
      },
      {
        title: 'Trending developer of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/05-github-trending-dev-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/06-github-trending-day-2021-03-29.png' },
        date: '2021-03-29',
      },
      {
        title: 'Trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/07-github-trending-week-2021-04-04.png' },
        date: '2021-04-04',
      },
      {
        title: '2nd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/08-github-trending-day-2021-07-14.png' },
        date: '2021-07-14',
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/09-hacker-news-2021-07-26.png' },
        date: '2021-07-26',
        link: { url: 'https://news.ycombinator.com/front?day=2021-07-26', caption: 'Hacker News archive' },
      },
      {
        title: '3rd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/10-github-trending-day-2021-10-18.png' },
        date: '2021-10-18',
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/11-hacker-news-2021-10-22.png' },
        date: '2021-10-22',
        link: { url: 'https://news.ycombinator.com/front?day=2021-10-22', caption: 'Hacker News archive' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/12-github-trending-day-2021-12-07.png' },
        date: '2021-12-07',
      },
      {
        title: 'Listed on Mozilla MDN Web Docs',
        image: { srcPath: 'projects/javascript-algorithms/achievements/13-mozilla-mdn-web-docs-2022-01-26.png' },
        date: '2022-01-20',
        link: { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', caption: 'MDN Web Docs' },
      },
      {
        title: '3rd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/14-github-trending-day-2022-08-16.png' },
        date: '2022-08-16',
      },
      {
        title: '1st trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/15-github-trending-day-2023-01-25.png' },
        date: '2023-01-25',
      },
      {
        title: 'Issued in "JavaScript Weekly" newsletter',
        image: { srcPath: 'projects/javascript-algorithms/achievements/26-javascript-weekly-2023-04-06.png' },
        date: '2023-04-06',
        link: { url: 'https://javascriptweekly.com/issues/633', caption: 'JavaScript Weekly (issue #633)' },
      },
      {
        title: 'Listed on Hacker News front page',
        image: { srcPath: 'projects/javascript-algorithms/achievements/16-hacker-news-2023-04-07.png' },
        date: '2023-04-07',
        link: { url: 'https://news.ycombinator.com/front?day=2023-04-07', caption: 'Hacker News archive' },
      },
      {
        title: '2nd trending repository of the day on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/17-github-trending-day-2023-04-08.png' },
        date: '2023-04-08',
      },
      {
        title: '5th trending repository of the week on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/18-github-trending-week-2023-04-08.png' },
        date: '2023-04-08',
      },
      {
        title: 'Issued in "JavaScript Weekly" newsletter',
        image: { srcPath: 'projects/javascript-algorithms/achievements/23-javascript-weekly-2023-08-17.png' },
        date: '2023-08-17',
        link: { url: 'https://javascriptweekly.com/issues/652', caption: 'JavaScript Weekly (issue #652)' },
      },
      {
        title: '200+ contributors on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/19-github-contributors-2024-05-05.png' },
        date: '2024-05-05',
      },
      {
        title: '180K+ stars, 29K+ forks on GitHub',
        image: { srcPath: 'projects/javascript-algorithms/achievements/20-github-stats-2024-05-05.png' },
        date: '2024-05-05',
      },
      {
        title: 'Issued in "JavaScript Weekly" newsletter',
        image: { srcPath: 'projects/javascript-algorithms/achievements/24-javascript-weekly-2024-10-17.png' },
        date: '2024-10-17',
        link: { url: 'https://javascriptweekly.com/issues/709', caption: 'JavaScript Weekly (issue #709)' },
      },
      {
        title: 'Top 5 of "BestOfJS" projects list',
        image: { srcPath: 'projects/javascript-algorithms/achievements/21-best-of-js-top-five-2024-11-26.png' },
        date: '2024-11-26',
        link: { url: 'https://bestofjs.org/projects', caption: 'All BestOfJS projects list' },
      },
      {
        title: 'Featured in Top 20 "GitStar Repositories" ranking',
        image: { srcPath: 'projects/javascript-algorithms/achievements/22-gitstars-repository-ranking-2024-11-27.png' },
        date: '2024-11-27',
        link: { url: 'https://gitstar-ranking.com/repositories', caption: 'GitStar Repositories Ranking' },
      },
      {
        title: '7K+ backlinks from 861 unique domains',
        image: { srcPath: 'projects/javascript-algorithms/achievements/27-backlinks-2025-09-12.png' },
        date: '2025-09-12',
        link: { url: 'https://ahrefs.com/backlink-checker/?input=https%3A%2F%2Fgithub.com%2Ftrekhleb%2Fjavascript-algorithms&mode=exact', caption: 'Backlink profile for javascript-algorithms' },
      },
      {
        title: 'Listed on #2 position in global GitHub "Algorithms" topic among 35K+ other resources',
        image: { srcPath: 'projects/javascript-algorithms/achievements/28-github-algorithms-topic-2025-10-15.png' },
        date: '2025-10-15',
        link: { url: 'https://github.com/topics/algorithms', caption: 'GitHub "Algorithms" topic' },
      },
    ],
  },
  'machine-learning-octave': {
    id: 'machine-learning-octave',
    name: '🤖 Machine Learning in MatLab/Octave',
    srcURL: { url: 'https://github.com/trekhleb/machine-learning-octave' },
    startDate: '2018-10-01',
    endDate: '2018-11-01',
    cover: { srcPath: 'projects/machine-learning-octave/cover.png' },
    summary: [
      'MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics being explained',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'MatLab' },
      { name: 'Octave' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'machine-learning-octave',
    },
  },
  'learn-python': {
    id: 'learn-python',
    name: '📚 Playground and cheatsheet for learning Python',
    srcURL: { url: 'https://github.com/trekhleb/learn-python' },
    startDate: '2018-08-01',
    endDate: '2018-09-01',
    cover: { srcPath: 'projects/learn-python/cover-2.jpg' },
    summary: [
      'Playground and cheatsheet for learning Python. Collection of Python scripts that are split by topics and contain code examples with explanations',
    ],
    tags: [
      { name: 'Python' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'learn-python',
    },
    achievements: [
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/00-github-trending-day.png' },
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/01-github-trending-day-2020-11-21.png' },
        date: '2020-11-21',
      },
      {
        title: 'Trending repository of the day on GitHub',
        image: { srcPath: 'projects/learn-python/achievements/02-github-trending-day-2020-11-23.png' },
        date: '2020-11-23',
      },
    ],
  },
  aggregatus: {
    id: 'aggregatus',
    name: '➡️ Aggregatus | Data Aggregation Service',
    demoURL: { url: 'https://aggregatus.io/' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    archived: true,
    cover: { srcPath: 'projects/aggregatus/cover-1.png' },
    summary: [
      'Service that helps you to aggregate information of the same meaning but from the different websites and makes it searchable, filterable, and sortable as if it all was from the one website',
    ],
    tags: [
      { name: 'Nginx' },
      { name: 'React' },
      { name: 'Lumen' },
      { name: 'MySQL' },
      { name: 'Elasticsearch' },
      { name: 'Scrapy' },
      { name: 'Splash' },
      { name: 'Docker Swarm' },
    ],
    links: [
      {
        url: 'https://trekhleb.dev/blog/2018/aggregatus-service-is-live/',
        caption: 'About the service',
      },
    ],
  },
  'angular-library-seed': {
    id: 'angular-library-seed',
    name: '🌾 Angular-library-seed',
    srcURL: { url: 'https://github.com/trekhleb/angular-library-seed' },
    cover: { srcPath: 'projects/angular-library-seed/cover.png' },
    startDate: '2017-01-01',
    endDate: '2018-01-01',
    summary: [
      'Seed project for Angular libraries that are AOT/JIT compatible and that use external SCSS-styles and HTML-templates',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'WebPack' },
      { name: 'Angular' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'angular-library-seed',
    },
  },
  allbible: {
    id: 'allbible',
    name: '📕 AllBible.info',
    demoURL: { url: 'https://allbible.info/' },
    startDate: '2010-02-01',
    endDate: '2017-02-01',
    cover: { srcPath: 'projects/allbible/cover.png' },
    summary: [
      'Online Bible study web-service that gives users possibility to study Bible by reading it in 4 modern translations, comparing verses to theirs Greek and Hebrew originals, investigating cross-linked verses, making a cross-Bible search, listening to audio Bible, using different Bible study plans and more',
    ],
    tags: [
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Bible' },
    ],
    achievements: [
      {
        title: '50K+ registered users',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '5K+ daily active users (Google Analytics)',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: 'Visited from 205 countries and territories (Google Analytics)',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '136K clicks per month from Google search results (Google Search Console)',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '1.52M impressions per month in Google search results (Google Search Console)',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '~1M completed Bible reading plan steps by the readers',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '~120K user-created notes for Bible verses',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
      {
        title: '~50K user-created tags that group Bible verses into categories',
        date: '2024-12-03',
        image: { srcPath: 'projects/allbible/achievements/01-chart.jpg' },
      },
    ],
  },
  'hook-and-thread': {
    id: 'hook-and-thread',
    name: '🧶 Hook&Thread',
    demoURL: { url: 'http://hook-and-thread.com/' },
    cover: { srcPath: 'projects/hook-and-thread/cover-2.png' },
    startDate: '2016-11-01',
    endDate: '2016-12-01',
    archived: true,
    summary: [
      'Web-shop of knitted accessories.',
      'We\'ve launched this project with my wife to get an online selling platform for knitted accessories she was producing at that time.',
      'The project was running on WordPress with the great support of the WooCommerce module.',
    ],
    tags: [
      { name: 'Wordpress' },
      { name: 'WooCommerce' },
    ],
  },
  siteprom: {
    id: 'siteprom',
    name: '🕸 SiteProm Web Studio',
    demoURL: { url: 'http://site-prom.com/' },
    cover: { srcPath: 'projects/siteprom/cover-1.png' },
    startDate: '2008-01-01',
    endDate: '2011-12-01',
    archived: true,
    summary: [
      'The web-studio that was created by my friend and I where we were specialized on providing a full-support during website creation',
    ],
    tags: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
    ],
  },
};
