const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "John Fewell | Full Stack Web Developer", // Navigation and Site Title
  siteTitleAlt: "John Fewell", // Alternative Site title for SEO
  siteUrl: "https://johnfewell.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logos/logo-1024.png", // Used for SEO and manifest
  siteDescription:
    "This is my portfolio site and has links to my blog, github and my recent projects",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "", // Twitter Username
  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
