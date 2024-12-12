// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Dublin",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "",
  openLastVisitedTab: true,
   tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-10.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
             {
              name: "github",
              url: "https://github.com/proxas",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
            {
              name: "netlify",
              url: "https://app.netlify.com/",
              icon: "square-rotated",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://twitter.com",
              icon: "brand-twitter",
              icon_color: palette.sky,
            },
			{
              name: "bluesky",
              url: "https://bsky.app",
              icon: "brand-bluesky",
              icon_color: palette.sky,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
