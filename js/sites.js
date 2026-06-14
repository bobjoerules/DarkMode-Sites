const SITES_DATA = [
  {
    "name": "3072",
    "description": "A challenging puzzle game inspired by 2048, where you slide tiles to combine them and reach the 3072 tile.",
    "logo": "images/logos/3072.png",
    "links": {
      "website": "https://3072.vercel.app/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "adblock",
    "description": "The Adblock extension blocks intrusive advertisements on websites, providing users with a cleaner and faster browsing experience by eliminating distractions and protecting privacy.",
    "logo": "images/logos/Adblock.png",
    "links": {
      "website": "https://getadblock.com/",
      "ios": "https://apps.apple.com/us/app/adblock-for-mobile/id1036484810",
      "android": "https://play.google.com/store/apps/details?id=com.betafish.adblocksbrowser&pli=1",
      "chrome": "https://chromewebstore.google.com/detail/adblock-%E2%80%94-block-ads-acros/gighmmpiobklfepjocnamgkkbiglidom",
      "firefox": "https://addons.mozilla.org/firefox/addon/adblock-for-firefox/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/adblock-%E2%80%94-block-ads-acros/ndcileolkflehcjpmjnfbnaibdcgglog",
      "safari": "https://apps.apple.com/us/app/adblock-for-safari/id1402042596?ls=1&mt=12",
      "wikipedia": "https://en.wikipedia.org/wiki/AdBlock"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "adblock pro",
    "description": "A high-performance ad blocker for Safari on macOS and iOS, designed to speed up browsing and protect privacy.",
    "logo": "images/logos/adblockpro.png",
    "links": {
      "website": "https://adblockpro.com/",
      "ios": "https://apps.apple.com/us/app/adblock-pro-for-safari/id1018301773",
      "macos": "https://apps.apple.com/us/app/adblock-pro-for-safari/id1018301773"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Adobe Creative Cloud",
    "description": "Adobe Creative Cloud is a subscription-based platform that provides access to a comprehensive suite of professional software tools for graphic design, photo and video editing, web development, and creative content creation, offering seamless integration and cloud-based collaboration features.",
    "logo": "images/logos/adobe creative cloud.png",
    "links": {
      "website": "https://www.adobe.com/creativecloud.html",
      "macos": "https://www.adobe.com/creativecloud.html",
      "windows": "https://www.adobe.com/creativecloud.html",
      "wikipedia": "https://en.wikipedia.org/wiki/Adobe_Creative_Cloud"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Android Studio Google",
    "description": "Android Studio is an integrated development environment (IDE) for creating Android applications, featuring a comprehensive suite of tools for coding, debugging, and testing mobile apps.",
    "logo": "images/logos/androidstudio.png",
    "links": {
      "website": "https://developer.android.com/studio",
      "linux": "https://developer.android.com/studio",
      "macos": "https://developer.android.com/studio",
      "windows": "https://developer.android.com/studio",
      "wikipedia": "https://en.wikipedia.org/wiki/Android_Studio"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Altimeter Plus",
    "description": "A precise altitude tracking app for hikers and adventurers, providing real-time elevation and location data.",
    "logo": "images/logos/Altimeter.png",
    "links": {
      "website": "https://www.altimeter-app.com/altimeter-plus",
      "ios": "https://apps.apple.com/us/app/altimeter/id417204570"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AmbientCG",
    "description": "A massive public domain library of high-quality PBR textures, HDRIs, and 3D assets for artists and developers.",
    "logo": "images/logos/AmbientCG.png",
    "links": {
      "website": "https://ambientcg.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "aternos",
    "description": "Aternos is a free online platform that allows users to create and manage their own Minecraft servers, offering customization and mod support without the need for technical expertise.",
    "logo": "images/logos/aternos.png",
    "links": {
      "website": "https://aternos.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Badlion Minecraft Client",
    "description": "The Badlion Client app provides Minecraft players with an enhanced gaming environment, featuring optimized performance, customizable settings, and a range of additional gaming tools and features.",
    "logo": "images/logos/badlion.png",
    "links": {
      "website": "https://www.badlion.net/",
      "linux": "https://www.badlion.net/minecraft-client",
      "macos": "https://www.badlion.net/minecraft-client",
      "windows": "https://www.badlion.net/minecraft-client"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Birdflop",
    "description": "Minecraft server hosting and also includes useful minecraft resources like text gradient generator",
    "logo": "images/logos/birdflop.png",
    "links": {
      "website": "https://www.birdflop.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Blender",
    "description": "Blender is a powerful open-source 3D creation software that enables users to design and render 3D models, animations, and visual effects for various purposes, including gaming, filmmaking, and architectural visualization.",
    "logo": "images/logos/blender.png",
    "links": {
      "website": "https://www.blender.org/",
      "linux": "https://www.blender.org/download/",
      "macos": "https://www.blender.org/",
      "windows": "https://www.blender.org/",
      "wikipedia": "https://en.wikipedia.org/wiki/Blender_(software)"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "capcut",
    "description": "An all-in-one video editing tool from ByteDance that makes it easy for anyone to create professional-looking videos.",
    "logo": "images/logos/capcut.png",
    "links": {
      "website": "https://www.capcut.com/",
      "linux": "https://apps.microsoft.com/detail/xp9kn75rrb9nhs",
      "macos": "https://www.capcut.com/",
      "windows": "https://apps.microsoft.com/detail/xp9kn75rrb9nhs",
      "wikipedia": "https://en.wikipedia.org/wiki/CapCut"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "google chrome",
    "description": "Chrome is a web browser developed by Google, known for its speed, simplicity, and integration with Google services, offering a user-friendly interface, extensive customization options, and robust security features for browsing the internet efficiently and securely.",
    "logo": "images/logos/Chrome.png",
    "links": {
      "website": "https://www.google.com/chrome/",
      "android": "https://play.google.com/store/apps/details?id=com.android.chrome",
      "ios": "https://apps.apple.com/us/app/google-chrome/id535886823",
      "linux": "https://www.google.com/chrome/",
      "macos": "https://www.google.com/chrome/",
      "windows": "https://www.google.com/chrome/",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Chrome"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Davinci Resolve",
    "description": "DaVinci Resolve is a professional-grade video editing software offering comprehensive editing, color correction, visual effects, and audio post-production capabilities, all in a single application.",
    "logo": "images/logos/davinci resolve.png",
    "links": {
      "website": "https://www.blackmagicdesign.com/products/davinciresolve",
      "linux": "https://www.blackmagicdesign.com/products/davinciresolve",
      "macos": "https://www.blackmagicdesign.com/products/davinciresolve",
      "windows": "https://www.blackmagicdesign.com/products/davinciresolve",
      "wikipedia": "https://en.wikipedia.org/wiki/DaVinci_Resolve"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "discord",
    "description": "Discord is a communication app designed for creating communities, offering voice, video, and text chat functionalities for gamers, educators, and various groups.",
    "logo": "images/logos/discord.png",
    "links": {
      "website": "https://discord.com/",
      "android": "https://play.google.com/store/apps/details?id=com.discord",
      "ios": "https://apps.apple.com/us/app/discord-talk-play-hang-out/id985746746",
      "linux": "https://discord.com/download",
      "macos": "https://discord.com/download",
      "windows": "https://discord.com/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Discord"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Duolingo",
    "description": "Duolingo is a popular language-learning app that offers interactive lessons, gamification features, and personalized learning paths to help users acquire new languages.",
    "logo": "images/logos/duolingo.png",
    "links": {
      "website": "https://Duolingo.com",
      "android": "https://play.google.com/store/apps/details?id=com.duolingo",
      "ios": "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128",
      "wikipedia": "https://en.wikipedia.org/wiki/Duolingo"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Epic Games",
    "description": "The Epic Games Store is a digital distribution platform developed by Epic Games, providing access to a wide range of video games, exclusive titles, and free game giveaways, alongside features such as cloud saves and a curated storefront.",
    "logo": "images/logos/epicgames.png",
    "links": {
      "website": "https://epicgames.com",
      "macos": "https://store.epicgames.com/download",
      "windows": "https://store.epicgames.com/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Epic_Games"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "facebook",
    "description": "Facebook is a social media platform that allows users to connect with friends and family, share updates, photos, and videos, join groups, and follow pages of interest.",
    "logo": "images/logos/facebook.png",
    "links": {
      "website": "https://facebook.com",
      "android": "https://play.google.com/store/apps/details?id=com.facebook.katana",
      "ios": "https://apps.apple.com/us/app/facebook/id284882215",
      "windows": "https://apps.microsoft.com/detail/9wzdncrfj2wl",
      "wikipedia": "https://en.wikipedia.org/wiki/Facebook"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "firefox",
    "description": "Firefox is an open-source web browser developed by Mozilla, known for its privacy features, customization options, and commitment to an open internet, offering fast and secure browsing experiences across various platforms.",
    "logo": "images/logos/firefox.png",
    "links": {
      "website": "https://www.mozilla.org/en-US/firefox/new/",
      "android": "https://play.google.com/store/apps/details?id=org.mozilla.firefox",
      "ios": "https://apps.apple.com/us/app/firefox-private-web-browser/id989804926",
      "linux": "https://www.mozilla.org/en-US/firefox/linux/",
      "macos": "https://www.mozilla.org/firefox",
      "windows": "https://www.mozilla.org/firefox",
      "wikipedia": "https://en.wikipedia.org/wiki/Firefox"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "GitHub",
    "description": "GitHub is a web-based platform for version control using Git, facilitating collaborative software development by allowing users to host, review, and manage code repositories, as well as track issues and collaborate with others through pull requests and discussions.",
    "logo": "images/logos/github.png",
    "links": {
      "website": "https://github.com",
      "android": "https://play.google.com/store/apps/details?id=com.github.android",
      "ios": "https://apps.apple.com/us/app/github/id1477376905",
      "macos": "https://github.com/apps/desktop",
      "windows": "https://github.com/apps/desktop",
      "wikipedia": "https://en.wikipedia.org/wiki/GitHub"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "google",
    "description": "Google is a multinational technology company that offers a wide range of internet-related services and products, including search engines, cloud computing, software, hardware, and online advertising technologies, aiming to organize the world's information and make it universally accessible and useful.",
    "logo": "images/logos/google.png",
    "links": {
      "website": "https://google.com",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
      "ios": "https://apps.apple.com/us/app/google/id284815942",
      "wikipedia": "https://en.wikipedia.org/wiki/Google"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Authenticator",
    "description": "An open source authenticator app owned by Google",
    "logo": "images/logos/googleauthenticator.png",
    "links": {
      "website": "https://github.com/google/google-authenticator",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
      "ios": "https://apps.apple.com/us/app/google-authenticator/id388497605",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Authenticator"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "google docs",
    "description": "Google Docs is a cloud-based word processing software developed by Google, enabling users to create, edit, and collaborate on documents online, with features such as real-time collaboration, version history tracking, and seamless integration with other Google services for efficient document management and sharing.",
    "logo": "images/logos/googledocslogo.png",
    "links": {
      "website": "https://workspace.google.com/products/docs/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs",
      "ios": "https://apps.apple.com/us/app/google-docs/id842842640",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Docs"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "google drive",
    "description": "Google Drive is a cloud-based storage and collaboration platform developed by Google, allowing users to store, access, and share files, documents, and multimedia content across devices, with features such as real-time collaboration, file synchronization, and integration with other Google services like Google Docs, Sheets, and Slides.",
    "logo": "images/logos/googledrive.png",
    "links": {
      "website": "https://drive.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.docs",
      "ios": "https://apps.apple.com/us/app/google-drive/id507874739",
      "macos": "https://ipv4.google.com/intl/en_zm/drive/download/",
      "windows": "https://ipv4.google.com/intl/en_zm/drive/download/",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Drive"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true
    },
    "on_home": true
  },
  {
    "name": "google forms",
    "description": "Google Forms is a versatile tool for creating customizable surveys, quizzes, and forms, enabling easy data collection and analysis with real-time response tracking.",
    "logo": "images/logos/googleforms.png",
    "links": {
      "website": "https://workspace.google.com/products/forms/",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Forms"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "google slides",
    "description": "Google Slides is a cloud-based presentation software that enables users to create, edit, and collaborate on dynamic slideshows online, offering customizable templates and real-time collaboration features.",
    "logo": "images/logos/googleslides.png",
    "links": {
      "website": "https://workspace.google.com/products/slides/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.slides",
      "ios": "https://apps.apple.com/us/app/google-slides/id879478102",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Slides"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "google sheets",
    "description": "Google Sheets is a cloud-based spreadsheet software that allows users to create, edit, and collaborate on spreadsheets online, offering powerful data analysis tools and seamless integration with other Google services.",
    "logo": "images/logos/googlesheets.png",
    "links": {
      "website": "https://workspace.google.com/products/sheets/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets",
      "ios": "https://apps.apple.com/us/app/google-sheets/id842849113",
      "wikipedia": "https://en.wikipedia.org/wiki/Google_Sheets"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Infinite Craft",
    "description": "An addictive AI-powered crafting game where you combine elements like Fire and Water to discover thousands of unique items.",
    "logo": "images/logos/InfiniteCraft.png",
    "links": {
      "website": "https://neal.fun/infinite-craft/",
      "android": "https://play.google.com/store/apps/details?id=fun.neal.infinite.craft",
      "ios": "https://apps.apple.com/us/app/infinite-craft-by-neal/id6499235533"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "instagram",
    "description": "Instagram is a social media platform for sharing photos and videos, featuring filters, stories, and a variety of interactive features for engaging with followers and discovering new content.",
    "logo": "images/logos/instagram.png",
    "links": {
      "website": "https://instagram.com",
      "android": "https://play.google.com/store/apps/details?id=com.instagram.android",
      "ios": "https://apps.apple.com/us/app/instagram/id389801252",
      "windows": "https://apps.microsoft.com/detail/9nblggh5l9xt",
      "wikipedia": "https://en.wikipedia.org/wiki/Instagram"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lunar Client Minecraft",
    "description": "The Lunar Client app enhances gaming experiences with optimized performance, customizable settings, and additional features for Minecraft players.",
    "logo": "images/logos/lunar client.png",
    "links": {
      "website": "https://www.lunarclient.com/",
      "linux": "https://www.lunarclient.com/download",
      "windows": "https://www.lunarclient.com/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mini Metro",
    "description": "Mini Metro is a minimalist strategy simulation game where players design and manage a subway system to efficiently transport passengers across various cities worldwide.",
    "logo": "images/logos/minimetro.png",
    "links": {
      "website": "https://dinopoloclub.com/games/mini-metro/",
      "android": "https://play.google.com/store/apps/details?id=nz.co.codepoint.minimetro",
      "ios": "https://apps.apple.com/us/app/mini-metro/id837860959",
      "macos": "https://store.steampowered.com/app/287980/Mini_Metro/",
      "windows": "https://store.steampowered.com/app/287980/Mini_Metro/",
      "wikipedia": "https://en.wikipedia.org/wiki/Mini_Metro"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "netflix",
    "description": "Netflix is a subscription-based streaming service offering a vast library of movies, TV shows, documentaries, and original content across various genres, accessible on multiple devices for on-demand entertainment.",
    "logo": "images/logos/netflix.png",
    "links": {
      "website": "https://www.netflix.com/",
      "android": "https://play.google.com/store/apps/details?id=com.netflix.mediaclient",
      "ios": "https://apps.apple.com/us/app/netflix/id363590051",
      "windows": "https://apps.microsoft.com/detail/9wzdncrfj3tj",
      "wikipedia": "https://en.wikipedia.org/wiki/Netflix"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Photoshop",
    "description": "Adobe Photoshop is a powerful image editing software used for creating, enhancing, and manipulating photos and graphics with a wide range of advanced tools and features.",
    "logo": "images/logos/photoshop.png",
    "links": {
      "website": "https://www.adobe.com/products/photoshop.html",
      "wikipedia": "https://en.wikipedia.org/wiki/Adobe_Photoshop"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Premiere Pro",
    "description": "Adobe's industry-leading video editing software for film, TV, and the web, featuring advanced creative tools and AI features.",
    "logo": "images/logos/Premiere Pro.png",
    "links": {
      "website": "https://www.adobe.com/products/premiere.html"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "pixlr",
    "description": "Pixlr is a cloud-based photo editing tool that offers a range of features similar to professional software, allowing users to edit, enhance, and create images with ease through its intuitive interface and various editing options.",
    "logo": "images/logos/pixlr1.png",
    "links": {
      "website": "https://pixlr.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Pixlr"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "reddit",
    "description": "Reddit is a social news aggregation, web content rating, and discussion platform where users submit, vote, and comment on content within community-specific forums called subreddits.",
    "logo": "images/logos/reddit.png",
    "links": {
      "website": "https://reddit.com",
      "android": "https://play.google.com/store/apps/details?id=com.reddit.frontpage",
      "ios": "https://apps.apple.com/us/app/reddit/id1064216828",
      "windows": "https://apps.microsoft.com/detail/9ns3rbq5hv5f",
      "wikipedia": "https://en.wikipedia.org/wiki/Reddit"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "youtube return dislike button",
    "description": "The &quot;Return Dislike Button&quot; extension reinstates the dislike functionality on YouTube, allowing users to express their disapproval of videos by bringing back the dislike count visible to both creators and viewers.",
    "logo": "images/logos/REturn youtube dislike.png",
    "links": {
      "website": "https://returnyoutubedislike.com/",
      "github": "https://github.com/Anarios/return-youtube-dislike",
      "chrome": "https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi",
      "firefox": "https://addons.mozilla.org/firefox/addon/return-youtube-dislikes/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "roblox",
    "description": "Roblox is a gaming platform and creation system that allows users to design and play a wide variety of games created by other users, providing tools for game development, social interaction, and immersive experiences within a virtual environment.",
    "logo": "images/logos/roblox.png",
    "links": {
      "website": "https://roblox.com/",
      "android": "https://play.google.com/store/apps/details?id=com.roblox.client",
      "ios": "https://apps.apple.com/us/app/roblox/id431946152",
      "macos": "https://www.roblox.com/download",
      "windows": "https://www.roblox.com/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Roblox"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "scratch",
    "description": "The Scratch Addons extension enhances the functionality of the Scratch programming platform by providing additional features and tools for users to create and share projects more efficiently.",
    "logo": "images/logos/scartchaddons.png",
    "links": {
      "website": "https://scratchaddons.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Scratch_(programming_language)"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Snapchat",
    "description": "Snapchat is a multimedia messaging app where users can send photos and videos that disappear after a short period, along with various filters, lenses, and augmented reality features.",
    "logo": "images/logos/snapchat.png",
    "links": {
      "website": "https://www.snapchat.com",
      "android": "https://play.google.com/store/apps/details?id=com.snapchat.android",
      "ios": "https://apps.apple.com/us/app/snapchat/id447188370",
      "wikipedia": "https://en.wikipedia.org/wiki/Snapchat"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Soundcloud",
    "description": "SoundCloud is a platform for discovering and streaming music, podcasts, and other audio content from a diverse range of creators worldwide.",
    "logo": "images/logos/soundcloud.png",
    "links": {
      "website": "https://soundcloud.com",
      "android": "https://play.google.com/store/apps/details?id=com.soundcloud.android",
      "ios": "https://apps.apple.com/us/app/soundcloud-discover-new-music/id336353151",
      "wikipedia": "https://en.wikipedia.org/wiki/SoundCloud"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "spotify",
    "description": "Spotify is a digital music streaming service that provides access to a vast library of songs, podcasts, and playlists from various artists and genres.",
    "logo": "images/logos/spotify.png",
    "links": {
      "website": "https://spotify.com",
      "android": "https://play.google.com/store/apps/details?id=com.spotify.music",
      "ios": "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580",
      "linux": "https://www.spotify.com/de-en/download/linux/",
      "macos": "https://www.spotify.com/us/download/mac/",
      "windows": "https://www.spotify.com/us/download/windows/",
      "wikipedia": "https://en.wikipedia.org/wiki/Spotify"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "Linux": true
    },
    "on_home": true
  },
  {
    "name": "Steam",
    "description": "Steam is a digital distribution platform developed by Valve Corporation offering video games, software, and related content for purchase and download, as well as social networking features and digital rights management.",
    "logo": "images/logos/steam.png",
    "links": {
      "website": "https://steampowered.com",
      "android": "https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community",
      "ios": "https://apps.apple.com/us/app/steam-mobile/id495369748",
      "macos": "https://store.steampowered.com/about/",
      "windows": "https://store.steampowered.com/about/",
      "wikipedia": "https://en.wikipedia.org/wiki/Steam_(service)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tiktok",
    "description": "TikTok is a social media app where users can create, share, and discover short-form videos set to music, featuring a wide range of content including lip-syncing, comedy skits, dance challenges, and educational tutorials, fostering creativity and community engagement through its algorithm-driven feed.",
    "logo": "images/logos/tiktok.png",
    "links": {
      "website": "https://www.tiktok.com/",
      "android": "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically",
      "ios": "https://apps.apple.com/us/app/tiktok/id835599320",
      "wikipedia": "https://en.wikipedia.org/wiki/TikTok"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "to stories",
    "description": "IOS only instagram content creator tool app",
    "logo": "images/logos/tostories.png",
    "links": {
      "website": "https://tostories.app/",
      "ios": "https://apps.apple.com/us/app/to-stories/id1487373067"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "VSC visual studio code",
    "description": "Visual Studio Code (VSC) is a free, open-source code editor developed by Microsoft, renowned for its lightweight design, extensive language support, and rich ecosystem of extensions, catering to developers' diverse needs for coding, debugging, and collaboration.",
    "logo": "images/logos/vsc2.png",
    "links": {
      "website": "https://visualstudio.microsoft.com/",
      "linux": "https://code.visualstudio.com/download",
      "macos": "https://code.visualstudio.com/download",
      "windows": "https://code.visualstudio.com/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Visual_Studio_Code"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "twitter x",
    "description": "X (formerly Twitter) is a social media platform where users post and interact with short messages known as tweets, sharing news, opinions, and multimedia content in real-time.",
    "logo": "images/logos/twitter1.png",
    "links": {
      "website": "https://x.com",
      "android": "https://play.google.com/store/apps/details?id=com.twitter.android",
      "ios": "https://apps.apple.com/us/app/x/id333903271",
      "macos": "https://apps.apple.com/us/app/x/id333903271",
      "windows": "https://apps.microsoft.com/detail/9wzdncrfj140"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "youtube",
    "description": "YouTube is a video-sharing platform where users can upload, watch, and interact with a wide range of content including music videos, vlogs, tutorials, and more, fostering a global community of creators and viewers.",
    "logo": "images/logos/Youtube1.png",
    "links": {
      "website": "https://youtube.com",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.youtube",
      "ios": "https://apps.apple.com/us/app/youtube/id544007664",
      "wikipedia": "https://en.wikipedia.org/wiki/YouTube"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "YouTube Studio",
    "description": "YouTube Studio is a useful page for creators on youtube",
    "logo": "images/logos/youtubestudio.png",
    "links": {
      "website": "https://studio.youtube.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.creator",
      "ios": "https://apps.apple.com/us/app/youtube-studio/id888530356"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "youtube sponsor block",
    "description": "The SponsorBlock extension automatically skips sponsored segments and other non-content sections in YouTube videos, enhancing user experience by saving time and improving content consumption.",
    "logo": "images/logos/sponsorblock.png",
    "links": {
      "website": "https://sponsor.ajay.app/",
      "github": "https://github.com/ajayyy/SponsorBlock",
      "chrome": "https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone",
      "firefox": "https://addons.mozilla.org/firefox/addon/sponsorblock/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-youtube-/mbmgnelfcpoecdepckhlhegpcehmpmji",
      "safari": "https://apps.apple.com/ca/app/sponsorblock-for-youtube/id1573461917"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "YouTube Sub Widget",
    "description": "App to add youtube subscriber/view widget ",
    "logo": "images/logos/subwidget.png",
    "links": {
      "website": "https://apps.apple.com/us/app/subwidget-widget-for-youtube/id1534958933",
      "ios": "https://apps.apple.com/us/app/subwidget-widget-for-youtube/id1534958933"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "zoom",
    "description": "Zoom is a video conferencing app that allows users to conduct virtual meetings, webinars, and collaborative online sessions with high-quality video, audio, and interactive features.",
    "logo": "images/logos/zoom.png",
    "links": {
      "website": "https://www.zoom.com/",
      "android": "https://play.google.com/store/apps/details?id=us.zoom.videomeetings",
      "ios": "https://apps.apple.com/us/app/zoom-workplace/id546505307",
      "linux": "https://zoom.us/download?os=linux",
      "macos": "https://zoom.us/download",
      "windows": "https://zoom.us/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Zoom_Video_Communications"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "BeReal",
    "description": "A social media app that encourages authenticity by prompting users to share a real-time photo once a day.",
    "logo": "images/logos/BeReal.png",
    "links": {
      "website": "https://bereal.com/",
      "android": "https://play.google.com/store/apps/details?id=com.bereal.ft",
      "ios": "https://apps.apple.com/us/app/bereal-your-friends-for-real/id1459645446",
      "wikipedia": "https://en.wikipedia.org/wiki/BeReal"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Better Discord",
    "description": "A modding software for Discord (against TOS)",
    "logo": "images/logos/Better Discord.png",
    "links": {
      "website": "https://betterdiscord.app/",
      "linux": "https://betterdiscord.app/",
      "macos": "https://betterdiscord.app/",
      "windows": "https://betterdiscord.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Youtube Subscriber Counter",
    "description": "See Subscriber Count and other info for a youtube channel",
    "logo": "images/logos/subscriber counter.png",
    "links": {
      "website": "https://subscribercounter.com"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Letterboxed",
    "description": "A social platform for film lovers to track movies they've watched, write reviews, and share lists with friends.",
    "logo": "images/logos/Letterboxed.png",
    "links": {
      "website": "https://letterboxd.com/",
      "android": "https://play.google.com/store/apps/details/Letterboxd?id=com.letterboxd.letterboxd&hl=en_GB&gl=US",
      "ios": "https://apps.apple.com/ml/app/letterboxd/id1054271011",
      "wikipedia": "https://en.wikipedia.org/wiki/Letterboxd"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Minecraft",
    "description": "3D Open Sandbox Video Game ",
    "logo": "images/logos/Minecraft.png",
    "links": {
      "website": "https://www.minecraft.net/",
      "linux": "https://www.minecraft.net/en-us/download",
      "macos": "https://www.minecraft.net/en-us/download",
      "windows": "https://www.minecraft.net/en-us/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Minecraft"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Playcover",
    "description": "Play IOS games/apps on Mac",
    "logo": "images/logos/playcover.png",
    "links": {
      "website": "https://playcover.io/",
      "macos": "https://playcover.io/download/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "decrypt.day",
    "description": "Decrypted ipas (ios apps)",
    "logo": "images/logos/decrypt.day.png",
    "links": {
      "website": "https://decrypt.day/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Curseforge Minecraft",
    "description": "Mods for minecraft and also a modded client",
    "logo": "images/logos/curseforge.png",
    "links": {
      "website": "https://www.curseforge.com/",
      "linux": "https://www.curseforge.com/download/app",
      "macos": "https://www.curseforge.com/download/app",
      "windows": "https://www.curseforge.com/download/app"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Heroic",
    "description": "Run Games on Any Device (window only games work on mac)",
    "logo": "images/logos/Heroic.png",
    "links": {
      "website": "https://heroicgameslauncher.com/",
      "macos": "https://heroicgameslauncher.com/downloads"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Roblox Studio",
    "description": "Game Editor/Creator for Roblox",
    "logo": "images/logos/Roblox Studio.png",
    "links": {
      "website": "https://create.roblox.com/",
      "linux": "https://create.roblox.com/",
      "macos": "https://create.roblox.com/",
      "windows": "https://create.roblox.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Roblox"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rokoko Studio",
    "description": "Capture movement and import into 3d animations",
    "logo": "images/logos/rokoko.png",
    "links": {
      "website": "https://www.rokoko.com/",
      "macos": "https://www.rokoko.com/products/studio",
      "windows": "https://www.rokoko.com/products/studio"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Xbox Cloud Gaming",
    "description": "Play Xbox games on the cloud",
    "logo": "images/logos/xbox cloud gaming.png",
    "links": {
      "website": "https://xbox.com/play",
      "wikipedia": "https://en.wikipedia.org/wiki/Xbox_Cloud_Gaming"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Gmail Email",
    "description": "Google Owned Email Service",
    "logo": "images/logos/Gmail.png",
    "links": {
      "website": "https://www.google.com/gmail/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.gm",
      "ios": "https://apps.apple.com/us/app/gmail-email-by-google/id422689480",
      "wikipedia": "https://en.wikipedia.org/wiki/Gmail"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Shazam music",
    "description": "Find song name/artist that is playing (Owned by Apple)",
    "logo": "images/logos/Shazam.png",
    "links": {
      "website": "https://www.shazam.com/apps",
      "android": "https://play.google.com/store/apps/details?id=com.shazam.android",
      "ios": "https://apps.apple.com/us/app/shazam-find-music-concerts/id284993459",
      "wikipedia": "https://en.wikipedia.org/wiki/Shazam_(application)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Black Magic Cam",
    "description": "Camera app for mobile with more tools",
    "logo": "images/logos/Black Magic Cam.png",
    "links": {
      "website": "https://www.blackmagicdesign.com/products/blackmagiccamera",
      "wikipedia": "https://en.wikipedia.org/wiki/Blackmagic_Design"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Chat GTP Ai",
    "description": "OpenAI's advanced conversational AI that can answer questions, write code, and assist with creative tasks.",
    "logo": "images/logos/Chatgtp.png",
    "links": {
      "website": "https://chatgpt.com/",
      "android": "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
      "ios": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "macos": "https://openai.com/chatgpt/download/",
      "windows": "https://apps.microsoft.com/detail/9nt1r1c2hh7j",
      "wikipedia": "https://en.wikipedia.org/wiki/ChatGPT"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Darkomizer Minecraft",
    "description": "DarkMode minecraft ui maker",
    "logo": "images/logos/darkomizer.png",
    "links": {
      "website": "https://darkomizer.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Js Guide",
    "description": "Guide to learning/using discord.js",
    "logo": "images/logos/Discord Js Guide.png",
    "links": {
      "website": "https://discordjs.guide/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Emojipedia",
    "description": "Lists emojis form different operating systems and their unicodes",
    "logo": "images/logos/emojipedia.png",
    "links": {
      "website": "https://emojipedia.org/",
      "wikipedia": "https://en.wikipedia.org/wiki/Emojipedia"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Findmcserver Minecraft",
    "description": "Minecraft server lister which the Minecraft company supports as the official",
    "logo": "images/logos/findmcserver.png",
    "links": {
      "website": "https://findmcserver.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Makeuseof",
    "description": "Tips/guides on technology use",
    "logo": "images/logos/Makeuseof.png",
    "links": {
      "website": "https://www.makeuseof.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mozilla Developer Network MDN",
    "description": "Open source with web development resources for developers",
    "logo": "images/logos/mdn.png",
    "links": {
      "website": "https://developer.mozilla.org/",
      "wikipedia": "https://en.wikipedia.org/wiki/MDN_Web_Docs"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nickgen",
    "description": "Nick name custom colors generator for minecraft",
    "logo": "images/logos/Nickgen.png",
    "links": {
      "website": "https://nickgen.netlify.app/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pickerwheel",
    "description": "A wheel picker (picks a random item listed by spinning a wheel)",
    "logo": "images/logos/PickerWheel.png",
    "links": {
      "website": "https://pickerwheel.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Planet Minecraft",
    "description": "Place to find and submit community made minecraft content(maps, resource/data packs, mods, etc)",
    "logo": "images/logos/planetmc.png",
    "links": {
      "website": "https://www.planetminecraft.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "w3schools",
    "description": "Dictionary/guide for different coding languages",
    "logo": "images/logos/w3school.png",
    "links": {
      "website": "https://www.w3schools.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/W3Schools"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Duckduckgo",
    "description": "Browser/Search Engine Focused on Privacy",
    "logo": "images/logos/Duckduckgo.png",
    "links": {
      "website": "https://duckduckgo.com",
      "android": "https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=utm_campaign%3Dhome-atb-home%26origin%3Dfunnel_home",
      "ios": "https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?platform=iphone",
      "macos": "https://duckduckgo.com/mac",
      "windows": "https://duckduckgo.com/windows",
      "wikipedia": "https://en.wikipedia.org/wiki/DuckDuckGo"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fandom",
    "description": "Wikipedia for games and other things (front page does not have darkmode)",
    "logo": "images/logos/Fandom.png",
    "links": {
      "website": "https://www.fandom.com",
      "android": "https://play.google.com/store/apps/details?id=com.fandom.app",
      "ios": "https://apps.apple.com/us/app/fandom-news-stories/id1230063803",
      "wikipedia": "https://en.wikipedia.org/wiki/Fandom_(website)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FlipaClip",
    "description": "2D animation software",
    "logo": "images/logos/FlippaGrid.png",
    "links": {
      "website": "https://flipaclip.com",
      "android": "https://play.google.com/store/apps/details?id=com.vblast.flipaclip",
      "ios": "https://apps.apple.com/us/app/flipaclip-create-2d-animation/id1101848914",
      "wikipedia": "https://en.wikipedia.org/wiki/FlipaClip"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hoyolab",
    "description": "Social Media focused on MiHoYo games",
    "logo": "images/logos/hoyolab.png",
    "links": {
      "website": "https://www.hoyolab.com/",
      "android": "https://play.google.com/store/apps/details?id=com.mihoyo.hoyolab",
      "ios": "https://apps.apple.com/us/app/hoyolab/id1559483982"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Little Alchemy",
    "description": "Video game focused on adding things together to make new things",
    "logo": "images/logos/littlealchemy.png",
    "links": {
      "website": "https://littlealchemy2.com/",
      "android": "https://play.google.com/store/apps/details?id=com.recloak.littlealchemy2",
      "ios": "https://apps.apple.com/us/app/little-alchemy-2/id1214190989",
      "macos": "https://apps.apple.com/us/app/little-alchemy-2/id1214190989",
      "wikipedia": "https://en.wikipedia.org/wiki/Little_Alchemy"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Musixmatch",
    "description": "Lyrics for songs (home page does not have darkmode)",
    "logo": "images/logos/musixmatch.png",
    "links": {
      "website": "https://www.musixmatch.com/discover",
      "android": "https://play.google.com/store/apps/details?id=com.musixmatch.android.lyrify",
      "ios": "https://apps.apple.com/us/app/musixmatch-lyrics-finder/id448278467",
      "wikipedia": "https://en.wikipedia.org/wiki/Musixmatch"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Replit",
    "description": "A collaborative cloud-based IDE that lets you build and deploy projects in any programming language directly from your browser.",
    "logo": "images/logos/replit.png",
    "links": {
      "website": "https://replit.com/",
      "android": "https://play.google.com/store/apps/details?id=com.replit.app",
      "ios": "https://apps.apple.com/us/app/replit-idea-to-software-fast/id1614022293",
      "linux": "https://replit.com/desktop",
      "macos": "https://replit.com/desktop",
      "windows": "https://replit.com/desktop",
      "wikipedia": "https://en.wikipedia.org/wiki/Replit"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Threads",
    "description": "Social Media like twitter but made by meta",
    "logo": "images/logos/Threads.png",
    "links": {
      "website": "https://threads.net",
      "android": "https://play.google.com/store/apps/details?id=com.instagram.barcelona",
      "ios": "https://apps.apple.com/us/app/threads/id6446901002",
      "windows": "https://apps.microsoft.com/detail/9mxbp1fb84cq",
      "wikipedia": "https://en.wikipedia.org/wiki/Threads_(social_network)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Twitch",
    "description": "Live streaming service",
    "logo": "images/logos/twitch.png",
    "links": {
      "website": "https://www.twitch.tv/",
      "android": "https://play.google.com/store/apps/details?id=tv.twitch.android.app",
      "ios": "https://apps.apple.com/us/app/twitch-live-streaming/id460177396?pt=325952&ct=app_downloads&mt=8",
      "windows": "https://www.microsoft.com/en-us/p/twitch/9pfjp1q9r4fk?activetab=pivot:overviewtab",
      "wikipedia": "https://en.wikipedia.org/wiki/Twitch_(service)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Unreal Engine",
    "description": "Videogame/3d render/creating software",
    "logo": "images/logos/unreal engine.png",
    "links": {
      "website": "https://www.unrealengine.com/en-US",
      "linux": "https://www.unrealengine.com/en-US/linux",
      "macos": "https://www.unrealengine.com/en-US/download",
      "windows": "https://www.unrealengine.com/en-US/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Unreal_Engine"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wikipedia",
    "description": "Wikipedia is a wiki of most things (the home page for the website does not have darkmode)",
    "logo": "images/logos/Wikipedia1.png",
    "links": {
      "website": "https://www.wikipedia.org/",
      "android": "https://play.google.com/store/apps/details?id=org.wikipedia",
      "ios": "https://apps.apple.com/us/app/wikipedia/id324715238",
      "windows": "https://apps.microsoft.com/detail/9wzdncrfhwm4",
      "wikipedia": "https://en.wikipedia.org/wiki/Wikipedia"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Wiki": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Word Reference",
    "description": "Translation Dictionary",
    "logo": "images/logos/Wordref.png",
    "links": {
      "website": "https://www.wordreference.com/",
      "android": "https://play.google.com/store/apps/details?id=com.wordreference",
      "ios": "https://apps.apple.com/us/app/wordreference-dictionary/id515127233"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Xbox",
    "description": "A console made/owned by Microsoft",
    "logo": "images/logos/xboxapp.png",
    "links": {
      "website": "https://www.xbox.com/xbox-app",
      "android": "https://play.google.com/store/apps/details?id=com.microsoft.xboxone.smartglass&hl",
      "ios": "https://apps.apple.com/us/app/xbox/id736179781",
      "windows": "https://www.xbox.com/en-US/apps/xbox-app-on-pc",
      "wikipedia": "https://en.wikipedia.org/wiki/Xbox"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Poliigon",
    "description": "A professional-grade library of high-resolution textures, models, and HDRIs for 3D artists and architects.",
    "logo": "images/logos/poliigon.png",
    "links": {
      "website": "https://www.poliigon.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Polyhaven",
    "description": "Free 3D Asset Library",
    "logo": "images/logos/polyhaven.png",
    "links": {
      "website": "https://polyhaven.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Poly_Haven"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Share Textures",
    "description": "A community-driven platform offering free CC0 textures and 3D assets for architectural visualization and game development.",
    "logo": "images/logos/sharetextures.png",
    "links": {
      "website": "https://www.sharetextures.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "texture.ninja",
    "description": "A dedicated resource for free, high-resolution textures and reference photos for digital artists and designers.",
    "logo": "images/logos/texture.ninja.png",
    "links": {
      "website": "https://texture.ninja/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Texture Box",
    "description": "An online library providing a wide variety of free and premium textures for 3D modeling and rendering projects.",
    "logo": "images/logos/Texture Box.png",
    "links": {
      "website": "https://texturebox.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Texture Max",
    "description": "Free 3D Asset Library",
    "logo": "images/logos/Texture Max.png",
    "links": {
      "website": "https://www.texturemax.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Textures.com",
    "description": "One of the world's largest websites for digital textures, offering thousands of photos of fabrics, metals, bricks, and more.",
    "logo": "images/logos/textures.com.png",
    "links": {
      "website": "https://www.textures.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fortnite",
    "description": "Fortnite is a gaming platform, creation system, and video game that allows users to design and play a wide variety of games created by other users but it's main mode is a battle royale",
    "logo": "images/logos/fortnite.png",
    "links": {
      "website": "https://www.fortnite.com/",
      "android": "https://store.epicgames.com/en-US/download/android",
      "ios": "https://store.epicgames.com/en-US/download/fortnite",
      "windows": "https://store.epicgames.com/en-US/p/fortnite?lang=en-US",
      "wikipedia": "https://en.wikipedia.org/wiki/Fortnite"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Prism Launcher Minecraft",
    "description": "Open Source Minecraft launcher with the ability to manage multiple instances, accounts and mods. Customized version of MultiMC",
    "logo": "images/logos/prisim launcher.png",
    "links": {
      "website": "https://prismlauncher.org/",
      "linux": "https://prismlauncher.org/download/",
      "macos": "https://prismlauncher.org/download/mac/",
      "windows": "https://prismlauncher.org/download/windows/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MultiMC Launcher Minecraft",
    "description": "MultiMC is an alternative launcher for Minecraft.",
    "logo": "images/logos/multimc.png",
    "links": {
      "website": "https://multimc.org/",
      "linux": "https://multimc.org/#Download",
      "macos": "https://multimc.org/#Download",
      "windows": "https://multimc.org/#Download",
      "wikipedia": "https://en.wikipedia.org/wiki/MultiMC"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "VideoLAN Client VLC",
    "description": "VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.",
    "logo": "images/logos/vlc.png",
    "links": {
      "website": "https://www.videolan.org/vlc/",
      "android": "https://www.videolan.org/vlc/download-android.html",
      "ios": "https://www.videolan.org/vlc/download-ios.html",
      "linux": "https://www.videolan.org/vlc/#download",
      "macos": "https://www.videolan.org/vlc/download-macosx.html",
      "windows": "https://www.videolan.org/vlc/download-windows.html",
      "wikipedia": "https://en.wikipedia.org/wiki/VLC_media_player"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Spicetify Spotify",
    "description": "An open source modder for Spotify that gives more customization with themes and plugins",
    "logo": "images/logos/spice.png",
    "links": {
      "website": "https://spicetify.app/",
      "linux": "https://spicetify.app/docs/getting-started",
      "macos": "https://spicetify.app/docs/getting-started",
      "windows": "https://spicetify.app/docs/getting-started",
      "wikipedia": "https://en.wikipedia.org/wiki/Spicetify"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AdBlock uBlock Origin",
    "description": "Free, open-source ad content blocker.",
    "logo": "images/logos/ublock origin.png",
    "links": {
      "website": "https://ublockorigin.com/",
      "chrome": "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
      "firefox": "https://addons.mozilla.org/firefox/addon/ublock-origin/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak",
      "opera": "https://addons.opera.com/en/extensions/details/ublock/",
      "wikipedia": "https://en.wikipedia.org/wiki/Opera_(web_browser)"
    },
    "flags": {
      "no_darkmode": true,
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "no-darkmode": true,
      "open-source": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Truffle Youtube",
    "description": "Make streaming and interacting with streamers better on YouTube and Twitch",
    "logo": "images/logos/truffle.png",
    "links": {
      "website": "https://truffle.vip/",
      "github": "https://github.com/trufflehq",
      "ios": "https://apps.apple.com/us/app/truffle-livestreams-enhanced/id1659938519",
      "android": "https://play.google.com/store/apps/details?id=vip.truffle.app",
      "chrome": "https://chromewebstore.google.com/detail/truffle/bkkjeefjfjcfdfifddmkdmcpmaakmelp",
      "other browsers": "https://web.archive.org/web/20250222024009/https://truffle.vip/extension"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wayback Machine Internet Archive",
    "description": "Explore more than 916 billion web pages saved over time",
    "logo": "images/logos/wayback.png",
    "links": {
      "website": "https://web.archive.org/",
      "ios": "https://apps.apple.com/us/app/wayback-machine/id1201888313",
      "android": "https://play.google.com/store/apps/details?id=com.internetarchive.waybackmachine",
      "chrome": "https://chromewebstore.google.com/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak?hl=en-US",
      "firefox": "https://addons.mozilla.org/firefox/addon/wayback-machine_new/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/wayback-machine/kjmickeoogghaimmomagaghnogelpcpn?hl=en-US",
      "safari": "https://apps.apple.com/us/app/wayback-machine/id1472432422",
      "wikipedia": "https://en.wikipedia.org/wiki/Wayback_Machine"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Advanced Profanity Filter",
    "description": "Helps to clean up bad language on the websites you and your family visit.",
    "logo": "images/logos/Advanced Profanity Filter.png",
    "links": {
      "website": "https://frostco.github.io/AdvancedProfanityFilter/",
      "github": "https://github.com/FrostCo/AdvancedProfanityFilter",
      "chrome": "https://chromewebstore.google.com/detail/advanced-profanity-filter/piajkpdbaniagacofgklljacgjhefjeh",
      "firefox": "https://addons.mozilla.org/firefox/addon/advanced_profanity_filter/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/advanced-profanity-filter/lhnbdlbhcokmgpjenkjolnhdnkphnkam",
      "safari": "https://apps.apple.com/us/app/advanced-profanity-filter/id1593810102",
      "opera": "https://addons.opera.com/en/extensions/details/advanced-profanity-filter/"
    },
    "flags": {
      "no_darkmode": true,
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "no-darkmode": true,
      "open-source": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "DeArrow Youtube",
    "description": "An open source browser extension for crowd sourcing better titles and thumbnails on YouTube.",
    "logo": "images/logos/dearrow.png",
    "links": {
      "website": "https://dearrow.ajay.app/",
      "github": "https://github.com/ajayyy/DeArrow",
      "chrome": "https://chromewebstore.google.com/detail/dearrow-better-titles-and/enamippconapkdmgfgjchkhakpfinmaj",
      "firefox": "https://addons.mozilla.org/firefox/addon/dearrow/",
      "safari": "https://apps.apple.com/us/app/dearrow-for-youtube/id6451469297"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Grammarly",
    "description": "Responsible AI that ensures your writing and reputation shine",
    "logo": "images/logos/Grammarlyapp.png",
    "links": {
      "website": "https://www.grammarly.com/",
      "android": "https://www.grammarly.com/mobile/android",
      "ios": "https://www.grammarly.com/mobile/iphone",
      "wikipedia": "https://en.wikipedia.org/wiki/Grammarly"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    },
    "on_home": true
  },
  {
    "name": "AirConsole",
    "description": "Transforms smartphones into game controllers and allows you to play games directly on a web browser or other compatible devices.",
    "logo": "images/logos/Airconsole.png",
    "links": {
      "website": "https://www.airconsole.com/",
      "android": "https://play.google.com/store/apps/details?id=com.airconsole.controller",
      "ios": "https://apps.apple.com/us/app/airconsole/id1017688554",
      "wikipedia": "https://en.wikipedia.org/wiki/AirConsole"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CnCNet",
    "description": "An online platform dedicated to preserving and enhancing the multiplayer experience for classic Command & Conquer (C&C) real-time strategy games.",
    "logo": "images/logos/cncnet.png",
    "links": {
      "website": "https://cncnet.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mastercomfig",
    "description": "A modern customization framework for games",
    "logo": "images/logos/mastercomfig.png",
    "links": {
      "website": "https://comfig.app/",
      "wikipedia": "https://en.wikipedia.org/wiki/Mastercomfig"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Giphy",
    "description": "Gif creator and sharing platform",
    "logo": "images/logos/Giphy.png",
    "links": {
      "website": "https://giphy.com/",
      "android": "https://play.google.com/store/apps/details?id=com.giphy.messenger",
      "ios": "https://apps.apple.com/us/app/giphy-the-gif-search-engine/id974748812",
      "wikipedia": "https://en.wikipedia.org/wiki/Giphy"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "payday 3",
    "description": "A open world shooter game",
    "logo": "images/logos/payday3.png",
    "links": {
      "website": "https://www.paydaythegame.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fur Affinity",
    "description": "The largest online community for furry and anthropomorphic art, stories, and music.",
    "logo": "images/logos/furaffinity.png",
    "links": {
      "website": "https://www.furaffinity.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "New Grounds",
    "description": "A social media and entertainment website where users can share and discuss games, movies, art, and audio",
    "logo": "images/logos/newgrounds.png",
    "links": {
      "website": "https://www.newgrounds.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Newgrounds"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Please Fix",
    "description": "Player driven, socially engaged bug reporting & resolution platform",
    "logo": "images/logos/pleasefix.png",
    "links": {
      "website": "https://pleasefix.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sapphire Discord Bot",
    "description": "Multi-purpose Discord Bot (free?)",
    "logo": "images/logos/sapphire.png",
    "links": {
      "website": "https://sapph.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Starbreeze Entertainment",
    "description": "A prominent Swedish video game developer and publisher known for the PAYDAY series and Brothers: A Tale of Two Sons.",
    "logo": "images/logos/Starbreeze.png",
    "links": {
      "website": "https://www.starbreeze.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Starbreeze_Studios"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Suyu Emulator Nintendo Switch Emulator",
    "description": "Open source, and powerful Nintendo Switch emulator.",
    "logo": "images/logos/suyu.png",
    "links": {
      "website": "https://suyu.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ticket Tool Discord Bot",
    "description": "Ticket Tool for Discord servers",
    "logo": "images/logos/TicketToolBot.png",
    "links": {
      "website": "https://tickettool.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "øbin.net obin.net",
    "description": "A client side encrypted PasteBin",
    "logo": "images/logos/øbinnet.png",
    "links": {
      "website": "https://0bin.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "0x00sec",
    "description": "Platform for individuals who are passionate about ethical hacking. reverse engineering, penetration testing, malware analysis",
    "logo": "images/logos/0x00sec.png",
    "links": {
      "website": "https://0x00sec.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "12bytes.org",
    "description": "Resource-rich website offering guides and insights on privacy, security, open-source software, and digital self-reliance",
    "logo": "images/logos/12bytesorg.png",
    "links": {
      "website": "https://12bytes.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "1377x",
    "description": "Torrent indexing site for sharing movies, TV shows, games, and more via the BitTorrent protocol",
    "logo": "images/logos/1337x.png",
    "links": {
      "website": "https://www.1337x.to/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Thirteenth Willow",
    "description": "Apps developed under the name Thirteenth Willow",
    "logo": "images/logos/Thirteenth Willow.png",
    "links": {
      "website": "https://13willow.com/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lighty's Better Discord stuff",
    "description": "Better Discord Themes/Plugins made by Lighty",
    "logo": "images/logos/Lighty's Better Discord stuff.png",
    "links": {
      "website": "https://1lighty.github.io/BetterDiscordStuff/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Hacker Quarterly 2600",
    "description": "A magazine and community that focuses on hacking, technology, and digital exploration",
    "logo": "images/logos/2600.png",
    "links": {
      "website": "https://2600.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Five Star Data",
    "description": "A resource that explains the 5-star data model, which is a framework for improving the openness, accessibility, and interoperability of linked open data on the web.",
    "logo": "images/logos/5star.png",
    "links": {
      "website": "https://5stardata.info/en/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pie adblock",
    "description": "An adblock that pays you when you don't block an ad",
    "logo": "images/logos/Pie.png",
    "links": {
      "website": "https://www.pie.org/",
      "ios": "https://apps.apple.com/us/app/pie-adblock-for-safari/id6499055690",
      "chrome": "https://chromewebstore.google.com/detail/pie-adblock-the-ad-blocke/jpkfgepcmmchgfbjblnodjhldacghenp",
      "safari": "https://apps.apple.com/us/app/pie-adblock-for-safari/id6499055690"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Airbuds Widget",
    "description": "See and react to what music your friends are listing to",
    "logo": "images/logos/airbuds.png",
    "links": {
      "website": "https://airbuds-fm.webflow.io/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HackTheBox Academy HTB",
    "description": "Develop your skills with guided training and prove your expertise with industry certifications. Become a market-ready cybersecurity professional.",
    "logo": "images/logos/htbacademy.png",
    "links": {
      "website": "https://academy.hackthebox.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Behaviour Account",
    "description": "Behaviour games synced between devices",
    "logo": "images/logos/BEHAVIOUR ACCOUNT.png",
    "links": {
      "website": "https://account.bhvr.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AceSpace Love",
    "description": "AceSpace is a free and open social network designed for those that seek romantic attraction, not sexual attraction.",
    "logo": "images/logos/acespace.png",
    "links": {
      "website": "https://acespace.love/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Addicting Games",
    "description": "A long-standing portal for thousands of free online games across every genre, from action to puzzles.",
    "logo": "images/logos/Addicting Games.png",
    "links": {
      "website": "https://www.addictinggames.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Advent Of Code",
    "description": "Advent calendar of small programming puzzles for a variety of skill levels that can be solved in any programming language you like.",
    "logo": "images/logos/Advent Of Code.png",
    "links": {
      "website": "https://adventofcode.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Advent_of_Code"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Agent Stats",
    "description": "Agent Stats is a website showing your progression in Ingress.",
    "logo": "images/logos/Agent Stats.png",
    "links": {
      "website": "https://www.agent-stats.com/",
      "android": "https://play.google.com/store/apps/details?id=com.agent_stats.app.android",
      "ios": "https://apps.apple.com/us/app/agent-stats/id944221057"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Age of Empires",
    "description": "Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios.",
    "logo": "images/logos/Age of Empires.png",
    "links": {
      "website": "https://www.ageofempires.com/",
      "windows": "https://www.ageofempires.com/buy-now",
      "wikipedia": "https://en.wikipedia.org/wiki/Age_of_Empires"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ameliorated AME Wizard",
    "description": "A tool for modifying Windows.",
    "logo": "images/logos/ame.png",
    "links": {
      "website": "https://ameliorated.io/",
      "windows": "https://ameliorated.io/"
    },
    "flags": {},
    "categories": {
      "Windows": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AmogOs",
    "description": "A sus OS for a SUS computers",
    "logo": "images/logos/AmogOS.png",
    "links": {
      "website": "https://amog-os.github.io/",
      "windows": "https://amog-os.github.io/downloads.html"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Amp What",
    "description": "AmpWhat is the place to explore the characters and icons underlying your browser, computer and phone.",
    "logo": "images/logos/amp what.png",
    "links": {
      "website": "https://www.amp-what.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AniMK",
    "description": "AniMK is a website that provides access to anime content through XDCC, a file-sharing method that utilizes the Internet Relay Chat (IRC) protocol.",
    "logo": "images/logos/animk.png",
    "links": {
      "website": "https://www.animk.info/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fortnite.gg",
    "description": "Fortnite.gg is a fan-made website dedicated to Fortnite. It provides interactive maps, item shop tracking, cosmetics database, and other tools for Fortnite players.",
    "logo": "images/logos/Fortnite.gg.png",
    "links": {
      "website": "https://fortnite.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tracker Network",
    "description": "Tracker.gg is a website that provides real-time stat tracking for various games, including Fortnite, Valorant, Apex Legends, Call of Duty, and more.",
    "logo": "images/logos/tracker network.png",
    "links": {
      "website": "https://tracker.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AniTrack",
    "description": "Discord Bot for notifying new Anime episode and upcoming releases within your own Discord server!",
    "logo": "images/logos/AniTrack.png",
    "links": {
      "website": "https://anitrack.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Answer Overflow",
    "description": "Answer Overflow is a platform that helps index and archive Discord server questions and answers, making them publicly searchable on Google.",
    "logo": "images/logos/Answer Overflow.png",
    "links": {
      "website": "https://www.answeroverflow.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Archives of Nethys",
    "description": "a website that serves as a comprehensive Pathfinder RPG rules database. It provides detailed information on classes, spells, feats, items, creatures, and mechanics for both Pathfinder 1st Edition and 2nd Edition.",
    "logo": "images/logos/Archives of Nethys.png",
    "links": {
      "website": "https://aonprd.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "APB Database",
    "description": "APB Database is a website dedicated to APB Reloaded, an online multiplayer third-person shooter. The site provides detailed information on weapons, vehicles, modifications, maps, and other in-game data.",
    "logo": "images/logos/APB database.png",
    "links": {
      "website": "https://apbdb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Destiny Item Manager",
    "description": "A powerful inventory management tool for Destiny 2.",
    "logo": "images/logos/DIM.png",
    "links": {
      "website": "https://destinyitemmanager.com/",
      "android": "https://play.google.com/store/apps/details?id=com.destinyitemmanager.app",
      "ios": "https://apps.apple.com/us/app/destiny-item-manager/id1600203128",
      "windows": "https://apps.microsoft.com/detail/9p8q2xrw9cv7"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KeeWeb",
    "description": "Free cross-platform password manager compatible with KeePass",
    "logo": "images/logos/KeeWeb.png",
    "links": {
      "website": "https://keeweb.info/",
      "linux": "https://keeweb.info/",
      "macos": "https://keeweb.info/",
      "windows": "https://keeweb.info/"
    },
    "flags": {
      "no_darkmode": true,
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "no-darkmode": true,
      "open-source": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "MobAlytics",
    "description": "Mobalytics is a gaming analytics platform designed to help players improve their performance in games like League of Legends, TFT (Teamfight Tactics), and Legends of Runeterra.",
    "logo": "images/logos/MobAlytics.png",
    "links": {
      "website": "https://mobalytics.gg/",
      "windows": "https://mobalytics.gg/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Minecraft Enchantment Ordering Tool",
    "description": "This tool helps you plan the optimal order of combining and applying books, to give you the cheapest possible xp cost.",
    "logo": "images/logos/Minecraft Enchantment Ordering Tool.png",
    "links": {
      "website": "https://iamcal.github.io/enchant-order/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Price Charting",
    "description": "PriceCharting is a website and app that provides average prices for video games. It also allows users to filter and sort sales by condition. ",
    "logo": "images/logos/Price Charting.png",
    "links": {
      "website": "https://www.pricecharting.com/",
      "ios": "https://apps.apple.com/us/app/pricecharting-tcg-games/id6452190948"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AniList",
    "description": "AniList is a website and app that allows users to track, share, and discover anime and manga.",
    "logo": "images/logos/AniList.png",
    "links": {
      "website": "https://anilist.co/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Jikan API",
    "description": "An open-source project that serves as an unofficial MyAnimeList API, providing access to a wealth of anime and manga data.",
    "logo": "images/logos/JikanAPI.png",
    "links": {
      "website": "https://jikan.moe/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EverythingMoe",
    "description": "EverythingMoe is a directory of otaku-related websites, including anime, manga, novels, and games.",
    "logo": "images/logos/EverythingMoe.png",
    "links": {
      "website": "https://everythingmoe.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hidive",
    "description": "HIDIVE is an anime streaming service offering simulcasts, dubs, uncensored titles, and deep cuts.",
    "logo": "images/logos/Hidive.png",
    "links": {
      "website": "https://hidive.com/",
      "android": "https://play.google.com/store/apps/details?id=com.hidive.android&pli=1",
      "ios": "https://apps.apple.com/us/app/hidive/id1233367570"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Crunchyroll",
    "description": "Crunchyroll is a streaming service specializing in anime, manga, and Asian dramas.",
    "logo": "images/logos/Crunchroll.png",
    "links": {
      "website": "https://www.crunchyroll.com/",
      "android": "https://play.google.com/store/apps/details?id=com.crunchyroll.crunchyroid",
      "ios": "https://apps.apple.com/us/app/crunchyroll/id329913454"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "chiaki.site",
    "description": "chiaki.site is a set of services based on aggregated anime data.",
    "logo": "images/logos/chiaki.site.png",
    "links": {
      "website": "https://chiaki.site/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SqlDBM",
    "description": "SQLDBM is an online database modeling tool that allows users to design, visualize, and manage database schemas without writing SQL code.",
    "logo": "images/logos/sqldbm.png",
    "links": {
      "website": "https://sqldbm.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Star Asciimation Wars",
    "description": "Asciimation is a website that features animations created using ASCII art, which is a graphic design technique that uses printable characters from the ASCII standard to create images and animations.",
    "logo": "images/logos/Star Asciimation Wars.png",
    "links": {
      "website": "https://asciimation.co.nz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BRLight",
    "description": "BRlight is a Bluetooth-controlled LED lighting system that allows users to manage their lights via a dedicated mobile application.",
    "logo": "images/logos/BRLight.png",
    "links": {
      "website": "https://mybrlight.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Artlist",
    "description": "Artlist.io is a platform that provides royalty-free music, sound effects, and stock footage for content creators.",
    "logo": "images/logos/Artlist.png",
    "links": {
      "website": "https://artlist.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Arweave Wallet",
    "description": "Arweave.app is a community-developed, open-source web wallet for the Arweave network. It allows users to create, manage, and interact with Arweave wallets directly from a web browser.",
    "logo": "images/logos/Arweave Wallet.png",
    "links": {
      "website": "https://arweave.app/",
      "chrome": "https://chromewebstore.google.com/detail/arweaveapp/hloekinecmafifaghekdjepphlabepkl",
      "firefox": "https://addons.mozilla.org/firefox/addon/arweave-app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ar.io",
    "description": "​AR.IO is a decentralized, permanent cloud network built on the Arweave blockchain",
    "logo": "images/logos/ar.io.png",
    "links": {
      "website": "https://ar.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Canvas school",
    "description": "A website/app that allows teachers, students, and parents to access online learning materials and communicate.",
    "logo": "images/logos/newcanvas.png",
    "links": {
      "website": "https://www.instructure.com/canvas",
      "android": "https://play.google.com/store/apps/details?id=com.instructure.candroid",
      "ios": "https://apps.apple.com/us/app/canvas-student/id480883488"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Disney Plus Disney+",
    "description": "A streaming platform created/run by Disney where you can stream Disney movies/shows.",
    "logo": "images/logos/disneyplus.png",
    "links": {
      "website": "https://www.disneyplus.com/",
      "android": "https://play.google.com/store/apps/details?id=com.disney.disneyplus",
      "ios": "https://apps.apple.com/us/app/disney/id1446075923",
      "windows": "https://apps.microsoft.com/detail/9nxqxxlfst89"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Prime Video Amazon",
    "description": "A streaming platform created/run by Amazon where you can watch the latest movies/tv shows.",
    "logo": "images/logos/primevideo.png",
    "links": {
      "website": "https://www.primevideo.com/",
      "android": "https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient",
      "ios": "https://apps.apple.com/us/app/amazon-prime-video/id545519333",
      "windows": "https://apps.microsoft.com/detail/9p6rc76msmmj"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Slack",
    "description": "Slack is a cloud-based messaging app that helps teams communicate and collaborate.",
    "logo": "images/logos/slack.png",
    "links": {
      "website": "https://slack.com/",
      "android": "https://play.google.com/store/apps/details?id=com.Slack",
      "ios": "https://apps.apple.com/us/app/slack/id618783545",
      "linux": "https://slack.com/downloads/linux",
      "macos": "https://slack.com/downloads/mac",
      "windows": "https://slack.com/downloads/windows"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "WhatsApp",
    "description": "WhatsApp is a free app that lets you send messages, photos, videos, and more to other people around the world.",
    "logo": "images/logos/Whatsapp.png",
    "links": {
      "website": "https://www.whatsapp.com/",
      "android": "https://play.google.com/store/apps/details?id=com.whatsapp",
      "ios": "https://apps.apple.com/us/app/whatsapp-messenger/id310633997",
      "macos": "https://apps.apple.com/us/app/whatsapp-messenger/id310633997",
      "windows": "https://apps.microsoft.com/detail/9nksqgp7f2nh",
      "wikipedia": "https://en.wikipedia.org/wiki/WhatsApp"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Apple Silicon Games",
    "description": "All about Gaming on Apple Silicon by Mac Gamers for Mac Gamers.",
    "logo": "images/logos/Apple Silicon Games.png",
    "links": {
      "website": "https://applesilicongames.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Apple Developer",
    "description": "Apple's website for software developers, offering resources, tools, and access to the Apple Developer Program, enabling them to create and distribute apps for Apple platforms.",
    "logo": "images/logos/Apple Developer.png",
    "links": {
      "website": "https://developer.apple.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Developer Portal",
    "description": "The Discord Developer Portal is a platform where developers can create, manage, and integrate applications with Discord. It provides tools and APIs for building bots, webhooks, and other applications that interact with Discord servers, users, and messages.",
    "logo": "images/logos/Discorddev.png",
    "links": {
      "website": "https://discord.com/developers/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DeepSeek Ai",
    "description": "A cutting-edge AI assistant capable of deep reasoning, coding assistance, and natural language understanding.",
    "logo": "images/logos/deepseek.png",
    "links": {
      "website": "https://chat.deepseek.com/",
      "android": "https://play.google.com/store/apps/details?id=com.deepseek.chat",
      "ios": "https://apps.apple.com/in/app/deepseek-ai-assistant/id6737597349"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dark Mode List",
    "description": "Another darkmode list like this one but you must pay to add your app/website.",
    "logo": "images/logos/Dark Mode List.png",
    "links": {
      "website": "https://darkmodelist.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Decky Loader Steam Deck",
    "description": "Decky Loader is an open-source plugin launcher designed to enhance the functionality of the Steam Deck.",
    "logo": "images/logos/Decky Loader.png",
    "links": {
      "website": "https://decky.xyz/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vanilla Tweaks",
    "description": "Vanilla Tweaks is a collection of small, customizable modifications for Minecraft: Java Edition that enhance gameplay without drastically altering the vanilla experience.",
    "logo": "images/logos/Vanilla Tweaks.png",
    "links": {
      "website": "https://vanillatweaks.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Top.gg Discord",
    "description": "A list of Discord bots (applications) that you can add to your Discord servers.",
    "logo": "images/logos/Topgg.png",
    "links": {
      "website": "https://top.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Bot List",
    "description": "A list of Discord bots (applications) and Discord Servers.",
    "logo": "images/logos/discordbotlist.png",
    "links": {
      "website": "https://discordbotlist.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discords.com",
    "description": "A list of Discord bots (applications) and Discord Servers.",
    "logo": "images/logos/discords.png",
    "links": {
      "website": "https://discords.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Bots",
    "description": "A list of Discord bots (applications) that you can add to your Discord servers.",
    "logo": "images/logos/Discord.bots.png",
    "links": {
      "website": "https://discord.bots.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord servers",
    "description": "A list of Discord Servers that you can join.",
    "logo": "images/logos/discordservers.png",
    "links": {
      "website": "https://discordservers.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Disboard",
    "description": "A list of Discord Servers that you can join.",
    "logo": "images/logos/disboard.png",
    "links": {
      "website": "https://disboard.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discadia",
    "description": "A list of Discord Servers that you can join.",
    "logo": "images/logos/Discadia.png",
    "links": {
      "website": "https://discadia.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Timestamp Generator",
    "description": "Generate Discord Time Stamps.",
    "logo": "images/logos/Discord Timestamp Generator.png",
    "links": {
      "website": "https://discordtimestamp.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Dates Timestamp Generator v1",
    "description": "Generate Discord Time Stamps.",
    "logo": "images/logos/ddp1.png",
    "links": {
      "website": "https://discord-date.shyked.fr/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Dates Timestamp Generator v2",
    "description": "Generate Discord Time Stamps.",
    "logo": "images/logos/ddp2.png",
    "links": {
      "website": "https://discord-date-2.shyked.fr/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discohook",
    "description": "Generate Discord Webhooks and send.",
    "logo": "images/logos/Discohook.png",
    "links": {
      "website": "https://discohook.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Package",
    "description": "An Open Source Discord Package Explorer and Viewer.",
    "logo": "images/logos/discordpackage.png",
    "links": {
      "website": "https://discordpackage.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord.id",
    "description": "Search up a discord user with their id",
    "logo": "images/logos/discord.id.png",
    "links": {
      "website": "https://discord.id/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Fonts",
    "description": "Google Fonts is a free online service by Google that provides a large collection of open-source fonts for web and print use.",
    "logo": "images/logos/Googlefonts.png",
    "links": {
      "website": "https://fonts.google.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Paimon.moe",
    "description": "Paimon.moe is a fan-made website for Genshin Impact that provides various tools and resources to help players track their in-game progress.",
    "logo": "images/logos/Paimon.moe.png",
    "links": {
      "website": "https://paimon.moe/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PianoRhythm",
    "description": "PianoRhythm is an online multiplayer piano game where players can play the piano in real-time, either solo or with others.",
    "logo": "images/logos/pianorhythm.png",
    "links": {
      "website": "https://pianorhythm.io/",
      "linux": "https://pianorhythm.io/",
      "macos": "https://pianorhythm.io/",
      "windows": "https://pianorhythm.io/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "YouTube Music",
    "description": "YouTube Music is a music streaming service by YouTube, designed for discovering, streaming, and listening to music.",
    "logo": "images/logos/youtubemusic.png",
    "links": {
      "website": "https://music.youtube.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music",
      "ios": "https://apps.apple.com/us/app/youtube-music/id1017492454"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Carl Discord Bot",
    "description": "Discord Server Utility Bot",
    "logo": "images/logos/Carl.gg.png",
    "links": {
      "website": "https://carl.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dyno Discord Bot",
    "description": "Discord Server Utility Bot",
    "logo": "images/logos/dyno.png",
    "links": {
      "website": "https://dyno.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vencord Discord Mod",
    "description": "A modding software for Discord (against TOS)",
    "logo": "images/logos/Vencord.png",
    "links": {
      "website": "https://vencord.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Plex Tv",
    "description": "Plex is a free streaming app that offers movies, TV shows, and music (with ads). It also allows users to stream their own media collections.",
    "logo": "images/logos/plex.png",
    "links": {
      "website": "https://www.plex.tv/",
      "android": "https://play.google.com/store/apps/details?id=com.plexapp.android",
      "ios": "https://apps.apple.com/us/app/plex-watch-live-tv-and-movies/id383457673",
      "linux": "https://www.plex.tv/media-server-downloads/?cat=plex+desktop&plat=linux",
      "macos": "https://www.plex.tv/media-server-downloads/?cat=plex+desktop&plat=macos#plex-app",
      "windows": "https://www.plex.tv/media-server-downloads/?cat=plex+desktop&plat=windows#plex-app",
      "wikipedia": "https://en.wikipedia.org/wiki/Plex_(software)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Revolt",
    "description": "Revolt is a free, open-source chat app that allows users to create communities and communicate with each other. (Open source discord)",
    "logo": "images/logos/revolt.png",
    "links": {
      "website": "https://revolt.chat/",
      "android": "https://play.google.com/store/apps/details?id=chat.revolt",
      "ios": "https://revolt.chat/download",
      "linux": "https://revolt.chat/download",
      "macos": "https://revolt.chat/download",
      "windows": "https://revolt.chat/download",
      "wikipedia": "https://en.wikipedia.org/wiki/Revolt_(chat_application)"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KONTRA",
    "description": "Accelerating Application Security Training and Software Security Education through Interactive Learning.",
    "logo": "images/logos/kontra.png",
    "links": {
      "website": "https://application.security/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AQTION",
    "description": "AQtion is a free, open source, multiplayer first-person shooter (FPS) that revives the classic gameplay of Action Quake 2, a mod that significantly influenced the development of games like Counter-Strike.",
    "logo": "images/logos/AQtion.png",
    "links": {
      "website": "https://www.aqtiongame.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ragtag Archive",
    "description": "Ragtag Archive is a website dedicated to preserving Virtual YouTuber (VTuber) content, primarily focusing on Hololive productions.",
    "logo": "images/logos/Ragtag Archive.png",
    "links": {
      "website": "https://archive.ragtag.moe/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lumon Game",
    "description": "Step into the enigmatic world of &quot;Lumon,&quot; inspired by the critically acclaimed AppleTV series &quot;Severance.&quot; In this unique puzzle game, you'll take on the role of an employee at Lumon Industries, where your primary task is to refine the ever-elusive macrodata.",
    "logo": "images/logos/Lumon Game.png",
    "links": {
      "website": "https://apps.apple.com/us/app/lumon/id6511254300",
      "ios": "https://apps.apple.com/us/app/lumon/id6511254300"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Archon",
    "description": "Archon.gg is a platform dedicated to enhancing the Massively Multiplayer Online (MMO) gaming experience by offering cutting-edge tools and resources.",
    "logo": "images/logos/archon.png",
    "links": {
      "website": "https://www.archon.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ArmaForces",
    "description": "ArmaForces is a Polish community centered around the military simulation game Arma 3.",
    "logo": "images/logos/ArmaForces.png",
    "links": {
      "website": "https://armaforces.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "artixlinux",
    "description": "Artix Linux is a rolling-release distribution based on Arch Linux that distinguishes itself by not using the systemd init system.",
    "logo": "images/logos/artixlinux.png",
    "links": {
      "website": "https://artixlinux.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AstroNvim",
    "description": "AstroNvim is an aesthetically pleasing and feature-rich Neovim configuration that focuses on extensibility and usability.",
    "logo": "images/logos/astronvim.png",
    "links": {
      "website": "https://astronvim.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Atelier 801",
    "description": "Atelier 801 is a French independent video game development company founded in October 2011 by Jean-Baptiste Le Marchand and Mélanie Christin.",
    "logo": "images/logos/atelier801.png",
    "links": {
      "website": "https://atelier801.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Atlas OS",
    "description": "A modification of Windows, designed for enthusiasts.",
    "logo": "images/logos/atlasos.png",
    "links": {
      "website": "https://atlasos.net/",
      "wikipedia": "https://en.wikipedia.org/wiki/AtlasOS"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AugmentedSteam Steam",
    "description": "Free browser extension based on the Enhanced Steam.",
    "logo": "images/logos/AugmentedSteam.png",
    "links": {
      "website": "https://augmentedsteam.com/",
      "github": "https://github.com/IsThereAnyDeal/AugmentedSteam",
      "chrome": "https://chromewebstore.google.com/detail/augmented-steam/dnhpnfgdlenaccegplpojghhmaamnnfp",
      "firefox": "https://addons.mozilla.org/firefox/addon/augmented-steam/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/augmented-steam/dnpjkgmekpilchdgolfifobohlohlioc"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fandango At Home",
    "description": "Fandango at Home is a streaming service that offers movies and TV shows for rent or purchase.",
    "logo": "images/logos/Fandango At Home.png",
    "links": {
      "website": "https://athome.fandango.com/",
      "android": "https://play.google.com/store/apps/details?id=air.com.vudu.air.DownloaderTablet",
      "ios": "https://apps.apple.com/us/app/fandango-at-home/id487285735"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fandango",
    "description": "Fandango Media, LLC is an American company that operates a digital network for movies and TV, primarily known for its movie ticketing service and streaming service, Fandango at Home (formerly Vudu), and also owns Rotten Tomatoes. ",
    "logo": "images/logos/Fandango.png",
    "links": {
      "website": "https://www.fandango.com/",
      "android": "https://play.google.com/store/apps/details?id=com.fandango",
      "ios": "https://apps.apple.com/us/app/fandango-get-movie-tickets/id307906541",
      "wikipedia": "https://en.wikipedia.org/wiki/Fandango_Media"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bedrock Linux",
    "description": "Bedrock Linux is a meta Linux distribution which allows users to mix-and-match components from other, typically incompatible distributions.",
    "logo": "images/logos/bedrock linux.png",
    "links": {
      "website": "https://bedrocklinux.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Homebrew",
    "description": "Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux.",
    "logo": "images/logos/Homebrew.png",
    "links": {
      "website": "https://brew.sh/",
      "wikipedia": "https://en.wikipedia.org/wiki/Homebrew_(package_manager)"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Chess.com",
    "description": "Chess.com is the world's largest online chess platform, a website and social networking hub for chess players, offering free and paid features to play, learn, and engage with the chess community.",
    "logo": "images/logos/chess.com.png",
    "links": {
      "website": "https://www.chess.com/",
      "android": "https://play.google.com/store/apps/details?id=com.chess",
      "ios": "https://apps.apple.com/us/app/chess-play-learn/id329218549",
      "wikipedia": "https://en.wikipedia.org/wiki/Chess.com"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SpaceX Space Exploration Technologies Corp",
    "description": "Space Exploration Technologies Corp., commonly referred to as SpaceX, is an American space technology company headquartered at the Starbase development site near Brownsville, Texas. Elon owned",
    "logo": "images/logos/spacex.png",
    "links": {
      "website": "https://www.spacex.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/SpaceX"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Starlink",
    "description": "Starlink is a satellite internet constellation and service developed by SpaceX, aiming to provide high-speed internet access to underserved and remote areas, using a network of low Earth orbit (LEO) satellites. Elon owned",
    "logo": "images/logos/Starlink.png",
    "links": {
      "website": "https://www.starlink.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Canva",
    "description": "Canva is a user-friendly, online graphic design platform that empowers individuals and businesses to create a wide array of visual content, from social media graphics to presentations and websites, with minimal design experience required.",
    "logo": "images/logos/canva.png",
    "links": {
      "website": "https://www.canva.com/",
      "android": "https://play.google.com/store/apps/details?id=com.canva.editor",
      "ios": "https://apps.apple.com/us/app/canva-ai-photo-video-editor/id897446215?platform=iphone",
      "macos": "https://apps.apple.com/us/app/canva-ai-photo-video-editor/id897446215?pt=39291802&ct=desktop-app-page",
      "windows": "https://www.canva.com/download/windows/",
      "wikipedia": "https://en.wikipedia.org/wiki/Canva"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SkinMC",
    "description": "SkinMC is a website that serves as a platform for Minecraft skin viewing, editing, and exploration, offering features like a skin viewer, editor, avatar maker, and a list of Minecraft servers",
    "logo": "images/logos/SkinMC.png",
    "links": {
      "website": "https://skinmc.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "skindex",
    "description": "The Skindex is a popular online platform where users can create, share and download custom skins for Minecraft.",
    "logo": "images/logos/the skindex.png",
    "links": {
      "website": "https://www.minecraftskins.com/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Midnight Alarm Clock",
    "description": "Midnight Alarm Clock is an iOS app designed to be a feature-rich alternative to the stock Clock app, offering features like alarm folders, calendar integration, and more.",
    "logo": "images/logos/Midnight Alarm Clock.png",
    "links": {
      "website": "https://midnight.day/",
      "ios": "https://apps.apple.com/ua/app/midnight-alarm-clock/id6449077015"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cool Math Games",
    "description": "Coolmath Games is an online web portal operated by Coolmath LLC that hosts HTML and Flash web browser games, primarily targeting children and young adults.",
    "logo": "images/logos/cool math games.png",
    "links": {
      "website": "https://www.coolmathgames.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Coolmath_Games"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Azeria Labs",
    "description": "Azeria Labs is a platform offering high-quality tutorials, research, and training on ARM assembly, binary exploitation, and reverse engineering.",
    "logo": "images/logos/azeria.png",
    "links": {
      "website": "https://azeria-labs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BLUEFIRE STUDIOS LLC",
    "description": "Bluefire Studios is the company that manages PowerOutage.com, a website that tracks power outages across the globe in real-time.",
    "logo": "images/logos/Bluefire.png",
    "links": {
      "website": "https://bluefirestudios.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PowerOutage.com",
    "description": "PowerOutage.com is a system created to track, record, and aggregate power outages across the World.",
    "logo": "images/logos/PowerOutage.com.png",
    "links": {
      "website": "https://poweroutage.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Beatsaver",
    "description": "BeatSaver is a website where Beat Saber players can download and share custom songs.",
    "logo": "images/logos/Beatsaver.png",
    "links": {
      "website": "https://beatsaver.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Comedy Central",
    "description": "Comedy Central is an American cable television channel known for airing stand-up comedy, sitcoms, and satirical shows like The Daily Show and South Park.",
    "logo": "images/logos/Comedy Central.png",
    "links": {
      "website": "https://www.cc.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cobalt.tools",
    "description": "Cobalt is a tool that makes downloading public content easier.",
    "logo": "images/logos/cobalt.png",
    "links": {
      "website": "https://cobalt.tools/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "bdeditor.dev",
    "description": "The Easiest Way To Edit Discord Themes.",
    "logo": "images/logos/bdeditor.dev.png",
    "links": {
      "website": "https://bdeditor.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Beatleader",
    "description": "Beat Saber leaderboard.",
    "logo": "images/logos/Beatleader.png",
    "links": {
      "website": "https://beatleader.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AccSaber",
    "description": "AccSaber is a website that provides performance statistics and rankings for players of the rhythm-based VR game Beat Saber.",
    "logo": "images/logos/accsaber.com.png",
    "links": {
      "website": "https://accsaber.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cube Community",
    "description": "Cube Communityis an online hub for Beat Saber enthusiasts, offering forums, discussions, and resources for mappers, modders, and players.",
    "logo": "images/logos/CUBE COMMUNITY.png",
    "links": {
      "website": "https://cube.community/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Volta",
    "description": "Work in real-time with your team on open-source and private repositories from GitHub, all in one place.",
    "logo": "images/logos/Volta.png",
    "links": {
      "website": "https://volta.net/",
      "chrome": "https://chromewebstore.google.com/detail/volta/dbegojmfekcfbclcgocceflbklfoomjo/related"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OBS Studio",
    "description": "Free and open source software for video recording and live streaming.",
    "logo": "images/logos/OBS Studio.png",
    "links": {
      "website": "https://obsproject.com/",
      "linux": "https://obsproject.com/download",
      "macos": "https://obsproject.com/download",
      "windows": "https://obsproject.com/download",
      "wikipedia": "https://en.wikipedia.org/wiki/OBS_Studio"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TopStats Discord",
    "description": "In-depth analytics on over 45,669+ Top.gg bots",
    "logo": "images/logos/TopStats.png",
    "links": {
      "website": "https://topstats.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Discord Data Package Explorer",
    "description": "Discord Data Package Explorer",
    "logo": "images/logos/Discord Data Package Explorer.png",
    "links": {
      "website": "https://ddpe.androz2091.fr/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SteamDB",
    "description": "This third-party website gives you better insight into the Steam platform and everything in its database.",
    "logo": "images/logos/SteamDB.png",
    "links": {
      "website": "https://steamdb.info/",
      "wikipedia": "https://en.wikipedia.org/wiki/SteamDB"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Steam Status",
    "description": "Unofficial Steam Status.",
    "logo": "images/logos/Steam Status.png",
    "links": {
      "website": "https://steamstat.us/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Does It Arm?",
    "description": "List of Apps that are reported to support Apple Silicon.",
    "logo": "images/logos/dia.png",
    "links": {
      "website": "https://doesitarm.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fox",
    "description": "Fox Corporation is an American multinational mass media company.",
    "logo": "images/logos/fox.png",
    "links": {
      "website": "https://www.fox.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Piskel",
    "description": "Piskel is a free online editor for animated sprites & pixel art.",
    "logo": "images/logos/piskel.png",
    "links": {
      "website": "https://www.piskelapp.com/",
      "linux": "https://www.piskelapp.com/download",
      "macos": "https://www.piskelapp.com/download",
      "windows": "https://www.piskelapp.com/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pylon",
    "description": "Build and deploy Discord bots in minutes using a simple online studio.",
    "logo": "images/logos/Pylon.png",
    "links": {
      "website": "https://pylon.bot/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Emoji Kitchen Browser",
    "description": "A page that lets you browse the thousands of delightful combinations of Emoji Kitchen, available in Gboard for Android.",
    "logo": "images/logos/emojikitchenbrowser.png",
    "links": {
      "website": "https://emoji.supply/kitchen/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Emoji Wallpaper",
    "description": "A page that lets you create wallpapers using emojis.",
    "logo": "images/logos/EmojiWallpaper.png",
    "links": {
      "website": "https://emoji.supply/wallpaper/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GOG GALAXY",
    "description": "Organize your games across platforms into one functional and beautiful library.",
    "logo": "images/logos/GOG GALAXY.png",
    "links": {
      "website": "https://www.gogalaxy.com/",
      "macos": "https://www.gogalaxy.com/",
      "windows": "https://www.gogalaxy.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/GOG_Galaxy"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BetterTTV",
    "description": "BetterTTV is a browser extension for Twitch and YouTube that adds new features, emotes, and more.",
    "logo": "images/logos/BetterTTV.png",
    "links": {
      "website": "https://betterttv.com/",
      "chrome": "https://chromewebstore.google.com/detail/betterttv/ajopnjidmegmdimjlfnijceegpefgped",
      "firefox": "https://addons.mozilla.org/firefox/addon/betterttv/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/betterttv/icllegkipkooaicfmdfaloehobmglglb"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LiveSplit",
    "description": "A sleek, highly customizable timer for speedrunners.",
    "logo": "images/logos/livesplit 2.png",
    "links": {
      "website": "https://livesplit.org/",
      "windows": "https://livesplit.org/downloads/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RotomLabs",
    "description": "RotomLabs is a website that provides tools and resources for Pokémon trainers, particularly for games like Omega Ruby, Alpha Sapphire, and Pokemon Legends: Arceus.",
    "logo": "images/logos/RotomLabs.png",
    "links": {
      "website": "https://rotomlabs.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Unscreen",
    "description": "Unscreen.com is a free online AI tool that allows users to automatically remove video backgrounds without the need for a green screen or complex editing. It's part of Canva.",
    "logo": "images/logos/Unscreen.png",
    "links": {
      "website": "https://www.unscreen.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Blink Shell",
    "description": "Blink Shell is a powerful, modern terminal app designed primarily for iOS, iPadOS, and macOS. It's popular among developers and system administrators who need secure and efficient SSH (Secure Shell) connections to remote servers.",
    "logo": "images/logos/blinkshell.png",
    "links": {
      "website": "https://blink.sh/",
      "ios": "https://apps.apple.com/us/app/blink-shell-build-code/id1594898306"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Clash Of Stats",
    "description": "Clash of Stats is a popular website and mobile app that provides detailed statistics and insights for Clash of Clans players, clans, and war leagues.",
    "logo": "images/logos/clash of stats.png",
    "links": {
      "website": "https://www.clashofstats.com/",
      "android": "https://play.google.com/store/apps/details?id=com.clashofstats",
      "ios": "https://apps.apple.com/us/app/clash-of-stats/id1546458325"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MTV",
    "description": "MTV, initially standing for Music Television, is an American cable television channel owned by Paramount Global, known for its focus on music videos and youth-oriented programming, though it has evolved to include reality shows, documentaries, and other entertainment formats.",
    "logo": "images/logos/mtv.png",
    "links": {
      "website": "https://www.mtv.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/MTV"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Max HBO Max",
    "description": "Max is a streaming service that replaced HBO Max and offers a wide library of content, including HBO series and movies, Max Originals, and content from Warner Bros., DC, Cartoon Network, and more.",
    "logo": "images/logos/max.png",
    "links": {
      "website": "https://www.max.com/",
      "android": "https://play.google.com/store/apps/details?id=com.wbd.stream",
      "ios": "https://apps.apple.com/us/app/max-stream-hbo-tv-movies/id1666653815",
      "wikipedia": "https://en.wikipedia.org/wiki/Max_(streaming_service)"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "free code camp",
    "description": "Learn to code — for free. Build projects. Earn certifications.",
    "logo": "images/logos/freecodecamp.png",
    "links": {
      "website": "https://www.freecodecamp.org/",
      "wikipedia": "https://en.wikipedia.org/wiki/FreeCodeCamp"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DeepSwap",
    "description": "DeepSwap.ai is an AI-powered deepfake tool that allows users to swap faces in videos, images, and GIFs",
    "logo": "images/logos/DeepSwap.png",
    "links": {
      "website": "https://www.deepswap.ai/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kingdom Blazon Generator",
    "description": "Generate your custom blazon for Kingdom New Lands and Kingdom Two Crowns (including Shogun Edition)!",
    "logo": "images/logos/Kingdom Blazon Generator.png",
    "links": {
      "website": "https://cl00e9ment.gitlab.io/kingdom-blazon-generator/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "open-source": true
    },
    "on_home": true
  },
  {
    "name": "Prime Gaming",
    "description": "Prime Gaming is a gaming service included with an Amazon Prime or Prime Video membership, offering free games, in-game content, and a monthly Twitch channel subscription.",
    "logo": "images/logos/Prime Gaming.png",
    "links": {
      "website": "https://gaming.amazon.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/Prime_Gaming"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Crazy Games",
    "description": "CrazyGames is a website and platform that offers a wide variety of free, browser-based games for users aged 13 and older, focusing on HTML5 and JavaScript technologies for fast and interactive gameplay.",
    "logo": "images/logos/Crazygames.png",
    "links": {
      "website": "https://www.crazygames.com/",
      "wikipedia": "https://en.wikipedia.org/wiki/CrazyGames"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Extreme Music",
    "description": "An international production/library music business that is part of Sony Music Publishing, known for creating and licensing music for use in television, film, advertising, and online media.",
    "logo": "images/logos/extrememusic.png",
    "links": {
      "website": "https://www.extrememusic.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Imgur",
    "description": "Imgur is a popular image hosting website where users can upload, share, and browse images, primarily known for its ease of use and integration with platforms like Reddit.",
    "logo": "images/logos/imgur.png",
    "links": {
      "website": "https://imgur.com/",
      "android": "https://play.google.com/store/apps/details?id=com.imgur.mobile",
      "ios": "https://apps.apple.com/us/app/imgur-funny-memes-gif-maker/id639881495",
      "wikipedia": "https://en.wikipedia.org/wiki/Imgur"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Knockout!",
    "description": "​Knockout.chat is an online community forum that originated during the 2018 Facepunch forums shutdown crisis.",
    "logo": "images/logos/Knockout.png",
    "links": {
      "website": "https://knockout.chat/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Flavibot Discord Bot",
    "description": "Free High-Quality - Discord Music Bot",
    "logo": "images/logos/Flavibot.png",
    "links": {
      "website": "https://flavibot.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fireship",
    "description": "Fireship.io is an online learning platform that provides concise, high-quality programming tutorials and courses.",
    "logo": "images/logos/Fireship.png",
    "links": {
      "website": "https://fireship.io/",
      "wikipedia": "https://en.wikipedia.org/wiki/Fireship_(YouTube_channel)"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Splashin",
    "description": "This is a mobile application designed for organizing and playing real-life water-based elimination games, such as Senior Assassin or Water Wars.",
    "logo": "images/logos/Splashin.png",
    "links": {
      "website": "https://splashin.app/",
      "android": "https://play.google.com/store/apps/details?id=com.joshuamdunning.splashinassassin",
      "ios": "https://apps.apple.com/us/app/splashin/id6449144532"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Night Eye",
    "description": "Enable dark mode on any website.",
    "logo": "images/logos/Night Eye.png",
    "links": {
      "website": "https://nighteye.app/",
      "chrome": "https://chromewebstore.google.com/detail/dark-mode-night-eye/alncdjedloppbablonallfbkeiknmkdi",
      "firefox": "https://addons.mozilla.org/firefox/addon/night-eye-dark-mode/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/dark-mode-night-eye/gijhmcgnnbcpigflkfoimbnfjnbcphah",
      "safari": "https://apps.apple.com/us/app/dark-mode-for-safari-nighteye/id1450504903",
      "naver whale": "https://store.whale.naver.com/detail/fhaccehanjelhpfbgdpaamjnpjppbgcb"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Naver Whale",
    "description": "Naver Whale is a freeware web browser developed by the South Korean technology company Naver Corporation.",
    "logo": "images/logos/Naver Whale.png",
    "links": {
      "website": "https://whale.naver.com/",
      "android": "https://play.google.com/store/apps/details?id=com.naver.whale",
      "ios": "https://apps.apple.com/us/app/whale-naver-whale-browser/id1374073304",
      "linux": "https://whale.naver.com/en/download/linux/",
      "macos": "https://whale.naver.com/en/download/mac/",
      "windows": "https://whale.naver.com/en/download/win/",
      "wikipedia": "https://en.wikipedia.org/wiki/Naver_Whale"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RoGold",
    "description": "RoGold is a Roblox extension that enhances the user experience on the Roblox platform, offering features like profile customization, a refreshed user interface, and tools for both players and developers, and it is available as a free version and a premium version called RoGold Ultimate.",
    "logo": "images/logos/RoGold.png",
    "links": {
      "website": "https://rogold.live/",
      "chrome": "https://chromewebstore.google.com/detail/rogold-level-up-roblox/mafcicncghogpdpaieifglifaagndbni",
      "safari": "https://apps.apple.com/us/app/rogold/id1618599725",
      "mac": "https://rogold.live/downloads",
      "windows": "https://rogold.live/downloads"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Video Speed Up Controller for Chrome ⏩",
    "description": "Video speed controller for online videos. Speed up, slow down playback on any website.",
    "logo": "images/logos/Video Speed Up Controller for Chrome.png",
    "links": {
      "website": "https://chromewebstore.google.com/detail/video-speed-up-controller/blfehknobghonbjigahfbmmjecooeeja",
      "chrome": "https://chromewebstore.google.com/detail/video-speed-up-controller/blfehknobghonbjigahfbmmjecooeeja"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Classic Dark Theme - Night Mode",
    "description": "Dark Mode for websites: protect your eyes with a dark theme for night or daily browsing, ideal for work and reading.",
    "logo": "images/logos/Classic Dark Theme - Night Mode.png",
    "links": {
      "website": "https://chromewebstore.google.com/detail/classic-dark-theme-night/pdpfhanekfkeijhemmfbnnjffiblgefi",
      "chrome": "https://chromewebstore.google.com/detail/classic-dark-theme-night/pdpfhanekfkeijhemmfbnnjffiblgefi"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ropro",
    "description": "RoPro adds dozens of useful features to Roblox.",
    "logo": "images/logos/ropro.png",
    "links": {
      "website": "https://ropro.io/",
      "chrome": "https://chromewebstore.google.com/detail/ropro-enhance-your-roblox/adbacgifemdbhdkfppmeilbgppmhaobf"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Requestly",
    "description": "A Powerful HTTP Interception and Mocking Tool",
    "logo": "images/logos/Requestly.png",
    "links": {
      "website": "https://requestly.com/",
      "linux": "https://requestly.com/downloads/",
      "macos": "https://requestly.com/downloads/",
      "windows": "https://requestly.com/downloads/",
      "github": "https://github.com/requestly/",
      "chrome": "https://chromewebstore.google.com/detail/requestly-free-api-testin/mdnleldcmiljblolnjhpnblkcekpdkpa",
      "firefox": "https://requestly.com/downloads/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/requestly-free-api-test/ehghoapnlpepjmfbgaomdiilchcjemak"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Responsive Viewer",
    "description": "Test and preview your website on multiple screens with built-in screenshot and annotation tools",
    "logo": "images/logos/Responsive Viewer.png",
    "links": {
      "website": "https://responsiveviewer.org/",
      "chrome": "https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Firebase",
    "description": "Firebase is a comprehensive backend platform offered by Google that helps developers build and manage apps with minimal infrastructure and code.",
    "logo": "images/logos/Firebase.png",
    "links": {
      "website": "https://firebase.google.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Trancy",
    "description": "​Trancy.org is an AI-powered language learning platform designed to enhance your skills through immersive experiences with real-world content.",
    "logo": "images/logos/Trancy.png",
    "links": {
      "website": "https://www.trancy.org/",
      "chrome": "https://chromewebstore.google.com/detail/ai-subtitles-immersive-tr/mjdbhokoopacimoekfgkcoogikbfgngb",
      "firefox": "https://addons.mozilla.org/firefox/addon/trancyfordesktop/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/ai-subtitles-immersive-/aepdhbcjfkpncgbmlllcaloniioihlma",
      "safari": "https://apps.apple.com/us/app/trancy-et-ai-translator/id6475386403"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Linkedin",
    "description": "LinkedIn is a professional networking platform designed to help individuals and businesses connect and grow their professional networks.",
    "logo": "images/logos/Linkedin.png",
    "links": {
      "website": "https://www.linkedin.com/",
      "android": "https://play.google.com/store/apps/details?id=com.linkedin.android",
      "ios": "https://apps.apple.com/us/app/linkedin-network-job-finder/id288429040",
      "wikipedia": "https://en.wikipedia.org/wiki/LinkedIn"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Calendar",
    "description": "Calendar created by Google and works across their system",
    "logo": "images/logos/Google Calendar.png",
    "links": {
      "website": "https://calendar.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.calendar",
      "ios": "https://apps.apple.com/us/app/google-calendar-get-organized/id909319292"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Android Developer",
    "description": "Modern tools and resources to help you build experiences that people love, faster and easier, across every Android device.",
    "logo": "images/logos/Android Developers.png",
    "links": {
      "website": "https://developer.android.com/",
      "linux": "https://developer.android.com/studio",
      "macos": "https://developer.android.com/studio",
      "windows": "https://developer.android.com/studio"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google AI for Developers",
    "description": "Unlock AI models to build innovative apps and transform development workflows with tools across platforms.",
    "logo": "images/logos/Google Ai Developers.png",
    "links": {
      "website": "https://ai.google.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Shopping",
    "description": "Shopping with Google.",
    "logo": "images/logos/Google Shopping.png",
    "links": {
      "website": "https://www.google.com/shopping"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NotebookLM",
    "description": "NotebookLM is an AI-powered research and writing assistant",
    "logo": "images/logos/NotebookLM.png",
    "links": {
      "website": "https://notebooklm.google.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google TV",
    "description": "Everything you stream, all on one screen.",
    "logo": "images/logos/GoogleTV.png",
    "links": {
      "website": "https://tv.google/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.videos",
      "ios": "https://apps.apple.com/us/app/google-tv-watch-movies-tv/id746894884"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Tasks",
    "description": "Manage, capture, and edit your tasks from anywhere, at anytime, with to-dos that sync across all your devices. Integrations with Gmail and Google Calendar help you get tasks done—faster.",
    "logo": "images/logos/Tasks.png",
    "links": {
      "website": "https://tasks.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.tasks",
      "ios": "https://apps.apple.com/us/app/google-tasks-get-things-done/id1353634006"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Translate",
    "description": "Translate languages to other languages.",
    "logo": "images/logos/Google Translate.png",
    "links": {
      "website": "https://translate.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.translate",
      "ios": "https://apps.apple.com/us/app/google-translate/id414706506"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Google Help Google Support",
    "description": "Support for all things google.",
    "logo": "images/logos/Google Help.png",
    "links": {
      "website": "https://support.google.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google play games",
    "description": "Play games across your devices.",
    "logo": "images/logos/Google Play Games.png",
    "links": {
      "website": "https://play.google.com/googleplaygames/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Chat",
    "description": "Google Chat is a messaging app within Google Workspace designed for business communication and team collaboration.",
    "logo": "images/logos/Google Chat.png",
    "links": {
      "website": "https://mail.google.com/chat/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Keep",
    "description": "Google Keep is a simple, free note-taking app that allows users to capture notes, to-dos, and inspiration.",
    "logo": "images/logos/Google Keep.png",
    "links": {
      "website": "https://keep.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.keep",
      "ios": "https://apps.apple.com/us/app/google-keep-notes-and-lists/id1029207872"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google News",
    "description": "Google News is a personalized news aggregator that organizes and highlights what’s happening in the world so you can quickly catch up and discover more about the stories that matter to you.",
    "logo": "images/logos/Google New.png",
    "links": {
      "website": "https://news.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.magazines",
      "ios": "https://apps.apple.com/us/app/google-news/id459182288"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Google Fit",
    "description": "It's hard to know how much or what kind of activity you need to stay healthy. That's why Google Fit collaborated with the World Health Organization (WHO) and the American Heart Association (AHA) to bring you Heart Points, an activity goal that can help improve your health.",
    "logo": "images/logos/Google Fit.png",
    "links": {
      "website": "https://www.google.com/fit/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.fitness",
      "ios": "https://apps.apple.com/us/app/google-fit-activity-tracker/id1433864494"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Google Messages",
    "description": "Google Messages is Google's official messaging application for Android devices.",
    "logo": "images/logos/Google Messages.png",
    "links": {
      "website": "https://messages.google.com/",
      "android": "https://play.google.com/store/apps/details?id=com.google.android.apps.messaging"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pixiv",
    "description": "Pixiv is a Japanese online community and social networking service for artists to share and showcase their illustrations, manga, and novels.",
    "logo": "images/logos/pixiv.png",
    "links": {
      "website": "https://www.pixiv.net/",
      "android": "https://play.google.com/store/apps/details?id=jp.pxv.android",
      "ios": "https://apps.apple.com/us/app/pixiv/id337248563"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MEMORY TOYS",
    "description": "Games that help practice your memory",
    "logo": "images/logos/MEMORY TOYS.png",
    "links": {
      "website": "https://memory.toys/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Based Cooking",
    "description": "A website with recipes",
    "logo": "images/logos/Based Cooking.png",
    "links": {
      "website": "https://based.cooking/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bithatch",
    "description": "A collection of open source libraries and applications.",
    "logo": "images/logos/Bithatch.png",
    "links": {
      "website": "http://bithatch.co.uk/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PixelExperience",
    "description": "Pixel Experience is a discontinued, community-developed, open-source Android-based operating system designed to emulate the &quot;stock Android&quot; experience found on Google Pixel devices.",
    "logo": "images/logos/PixelExperience.png",
    "links": {
      "website": "https://pixelexperience.org"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gumroad",
    "description": "Gumroad is an e-commerce platform designed to make it easy for creators to sell digital products directly to their audience.",
    "logo": "images/logos/gumroad.png",
    "links": {
      "website": "https://gumroad.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Simple Analytics",
    "description": "The privacy-first Google Analytics alternative.",
    "logo": "images/logos/Simple Analytics.png",
    "links": {
      "website": "https://www.simpleanalytics.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fathom Analytics",
    "description": "A Google Analytics alternative that’s simple & privacy-first.",
    "logo": "images/logos/fathom analytics.png",
    "links": {
      "website": "https://usefathom.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bluesky",
    "description": "Bluesky is a social media platform, designed as an open and decentralized alternative to traditional social networks like X (formerly Twitter).",
    "logo": "images/logos/bluesky.png",
    "links": {
      "website": "https://bsky.app/",
      "android": "https://play.google.com/store/apps/details?id=xyz.blueskyweb.app",
      "ios": "https://apps.apple.com/us/app/bluesky-social/id6444370199"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Transistor",
    "description": "Transistor.fm is a podcast hosting platform.",
    "logo": "images/logos/Transistor.png",
    "links": {
      "website": "https://transistor.fm/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Raycast",
    "description": "Raycast is a powerful productivity tool and launcher app for macOS that provides quick access to applications, files, snippets, and more.",
    "logo": "images/logos/Raycast.png",
    "links": {
      "website": "https://www.raycast.com/",
      "ios": "https://apps.apple.com/us/app/raycast-ai-notes-and-more/id6503428327",
      "macos": "https://www.raycast.com/"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Codepen",
    "description": "CodePen is a social development environment for front-end designers and developers.",
    "logo": "images/logos/codeen.png",
    "links": {
      "website": "https://codepen.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pinterest",
    "description": "Pinterest is a visual discovery platform where users can find, save, and organize images and videos.",
    "logo": "images/logos/Pinterest.png",
    "links": {
      "website": "https://www.pinterest.com/",
      "android": "https://play.google.com/store/apps/details?id=com.pinterest",
      "ios": "https://apps.apple.com/us/app/pinterest/id429047995"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Patreon",
    "description": "Patreon is a monetization platform operated by Patreon, Inc., that provides business tools for content creators to run a subscription service and sell digital products.",
    "logo": "images/logos/patreon.png",
    "links": {
      "website": "https://www.patreon.com/",
      "android": "https://play.google.com/store/apps/details?id=com.patreon.android",
      "ios": "https://apps.apple.com/us/app/patreon/id1044456188"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vimeo",
    "description": "Video sharing platform.",
    "logo": "images/logos/Vimeo.png",
    "links": {
      "website": "https://vimeo.com/",
      "android": "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp",
      "ios": "https://apps.apple.com/us/app/vimeo/id425194759"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Instagram Edits",
    "description": "Edits is the new video creation app by Instagram that helps creators make great videos on their phones.",
    "logo": "images/logos/edits.png",
    "links": {
      "website": "https://creators.instagram.com/edits",
      "android": "https://play.google.com/store/apps/details?id=com.instagram.basel",
      "ios": "https://apps.apple.com/us/app/edits-an-instagram-app/id6738967378"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Wormate.io io games",
    "description": "An io game where you are a worm/snake.",
    "logo": "images/logos/Wormate.io.png",
    "links": {
      "website": "https://wormate.io/",
      "android": "https://play.google.com/store/apps/details?id=io.wormate",
      "ios": "https://apps.apple.com/us/app/wormate-io/id1135523852"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Aether",
    "description": "Peer-to-peer ephemeral public communities.",
    "logo": "images/logos/aether.png",
    "links": {
      "website": "https://getaether.net/",
      "linux": "https://getaether.net/download",
      "macos": "https://getaether.net/download",
      "windows": "https://getaether.net/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fiber docs",
    "description": "Documentary on Fiber.",
    "logo": "images/logos/Fiberdocs.png",
    "links": {
      "website": "https://docs.gofiber.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Luna Cloud Gaming Amazon Cloud Gaming",
    "description": "Play games for free with Amazon Prime.",
    "logo": "images/logos/Luna.png",
    "links": {
      "website": "https://luna.amazon.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bloxlink Roblox Discord Bot",
    "description": "Connect roblox account to discord to verify who you really are, sync your group to your server, and more.",
    "logo": "images/logos/Bloxlink.png",
    "links": {
      "website": "https://blox.link/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Science News",
    "description": "Interesting News About Science, Technology, Space, UFOs, Extraterrestrial Life and More!",
    "logo": "images/logos/Science News.png",
    "links": {
      "website": "https://science-news.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Chess Tempo Online Chess Training",
    "description": "Train. Learn. Play. Improve your chess.",
    "logo": "images/logos/Online Chess Training.png",
    "links": {
      "website": "https://chesstempo.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Chat.vote",
    "description": "Create twitch chat polls and vote through chat commands easily and quickly using chat.vote.",
    "logo": "images/logos/chat.vote.png",
    "links": {
      "website": "https://chat.vote/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Duo Security",
    "description": "A cybersecurity company that provides identity security and multi-factor authentication (MFA) solutions.",
    "logo": "images/logos/duo.png",
    "links": {
      "website": "https://duo.com/",
      "android": "https://play.google.com/store/apps/details?id=com.duosecurity.duomobile",
      "ios": "https://apps.apple.com/us/app/duo-mobile/id422663827"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Keyboard Maestro",
    "description": "Automate applications or web sites, text or images, simple or complex, on command or scheduled. You can automate virtually anything.",
    "logo": "images/logos/keyboardmaestro.png",
    "links": {
      "website": "https://www.keyboardmaestro.com/",
      "macos": "https://www.keyboardmaestro.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "IsThereAnyDeal",
    "description": "Shows deals that are ongoing on steam",
    "logo": "images/logos/Isthereanydeal.png",
    "links": {
      "website": "https://isthereanydeal.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Inker",
    "description": "Inker lets you draw logos, typography, simplifies sketch inking.",
    "logo": "images/logos/inker.png",
    "links": {
      "website": "https://inker.app/",
      "android": "https://play.google.com/store/apps/details?id=co.inker",
      "macos": "https://apps.apple.com/by/app/inker/id1543687686"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sober Roblox",
    "description": "No emulators. Double the performance. Sober's an unofficial native port of Roblox to Linux.",
    "logo": "images/logos/Sober.png",
    "links": {
      "website": "https://sober.vinegarhq.org/",
      "linux": "https://sober.vinegarhq.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "VinegarHQ Project Roblox",
    "description": "Vinegar is a fast and robust bootstrapper for Roblox Studio that has many ease-of-use features.",
    "logo": "images/logos/VinegarHQ.png",
    "links": {
      "website": "https://vinegarhq.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Grapejuice",
    "description": "Roblox on Linux, made easy.",
    "logo": "images/logos/Grapejuice.png",
    "links": {
      "website": "https://brinkervii.gitlab.io/grapejuice/",
      "linux": "https://brinkervii.gitlab.io/grapejuice/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "open-source": true
    },
    "on_home": true
  },
  {
    "name": "Be Quiet",
    "description": "Silent PSUs, cases and PC cooling products.",
    "logo": "images/logos/be quiet.png",
    "links": {
      "website": "https://www.bequiet.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Io Center Be Quiet",
    "description": "Personalize your setup seamlessly. Adjust RGB lighting, fine-tune settings, and configure keybindings with just a few clicks. Take control of your gear anytime, anywhere. For Be Quiet Software.",
    "logo": "images/logos/io center.png",
    "links": {
      "website": "https://iocenter.bequiet.com/",
      "windows": "https://www.bequiet.com/en/software"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bootstrap",
    "description": "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
    "logo": "images/logos/Bootstrap.png",
    "links": {
      "website": "https://getbootstrap.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Speed Test By Ookla",
    "description": "Check the speed of your internet.",
    "logo": "images/logos/Speed Test.png",
    "links": {
      "website": "https://www.speedtest.net/",
      "android": "https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest",
      "ios": "https://apps.apple.com/us/app/speedtest-by-ookla/id300704847",
      "macos": "https://apps.apple.com/us/app/speedtest-by-ookla/id1153157709",
      "windows": "https://apps.microsoft.com/detail/9nblggh4z1jc"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Outlook Microsoft",
    "description": "Email service by Microsoft",
    "logo": "images/logos/outlook.png",
    "links": {
      "website": "https://outlook.office.com/",
      "android": "https://play.google.com/store/apps/details?id=com.microsoft.office.outlook",
      "ios": "https://apps.apple.com/us/app/microsoft-outlook/id951937596",
      "macos": "https://apps.apple.com/us/app/microsoft-outlook/id985367838",
      "windows": "https://apps.microsoft.com/detail/9nrx63209r7b"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Copilot Microsoft",
    "description": "Ai Chat Bot by Microsoft",
    "logo": "images/logos/copilot.png",
    "links": {
      "website": "https://copilot.microsoft.com/",
      "android": "https://play.google.com/store/apps/details?id=com.microsoft.copilot",
      "ios": "https://apps.apple.com/us/app/microsoft-copilot/id6472538445",
      "macos": "https://apps.apple.com/us/app/microsoft-copilot/id6738511300",
      "windows": "https://apps.microsoft.com/detail/9nht9rb2f4hd"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Copilot M365 Microsoft",
    "description": "Business User Version of Ai Chat Bot by Microsoft",
    "logo": "images/logos/Copilot M365.png",
    "links": {
      "website": "https://m365.cloud.microsoft/",
      "android": "https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow",
      "ios": "https://apps.apple.com/us/app/microsoft-365-copilot/id541164041",
      "windows": "https://apps.microsoft.com/detail/9wzdncrd29v9"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "One Drive Microsoft",
    "description": "Storage by Microsoft",
    "logo": "images/logos/One Drive.png",
    "links": {
      "website": "https://onedrive.live.com/",
      "android": "https://play.google.com/store/apps/details?id=com.microsoft.skydrive",
      "ios": "https://apps.apple.com/us/app/microsoft-onedrive/id477537958",
      "macos": "https://apps.apple.com/us/app/onedrive/id823766827"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Passes",
    "description": "Monetize Your Brand. Earn through content subscriptions, merchandise, DMs, livestreaming, and more.",
    "logo": "images/logos/passes.png",
    "links": {
      "website": "https://www.passes.com/",
      "android": "https://play.google.com/store/apps/details?id=com.passes.app",
      "ios": "https://apps.apple.com/us/app/passes/id6736365906"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Baldur's Gate 3",
    "description": "Baldur's Gate 3 is a 2023 role-playing video game developed and published by Larian Studios.",
    "logo": "images/logos/baldursgate3.png",
    "links": {
      "website": "https://baldursgate3.game/",
      "macos": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
      "windows": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BeepBox",
    "description": "BeepBox is an online tool for sketching and sharing instrumental music.",
    "logo": "images/logos/BeepBox.png",
    "links": {
      "website": "https://www.beepbox.co/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Swipe",
    "description": "Bidet company by YouTuber Ludwig.",
    "logo": "images/logos/swipe.png",
    "links": {
      "website": "https://bidet.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Black Arch Linux",
    "description": "BlackArch Linux is an Arch Linux-based penetration testing distribution for penetration testers and security researchers.",
    "logo": "images/logos/BlackArchLinux.png",
    "links": {
      "website": "https://blackarch.org/",
      "linux": "https://blackarch.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Blackle",
    "description": "A website, created in 2007, that functions as a Google Custom Search Engine with a black background and white text.",
    "logo": "images/logos/blackle.png",
    "links": {
      "website": "http://blackle.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Blast Tv",
    "description": "An ad-supported streaming e sports platform.",
    "logo": "images/logos/blasttv.png",
    "links": {
      "website": "https://blast.tv/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Blizzard Entertainment",
    "description": "The legendary game developer behind iconic franchises like World of Warcraft, Overwatch, Diablo, and StarCraft.",
    "logo": "images/logos/Blizzard.png",
    "links": {
      "website": "https://www.blizzard.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Battle Net",
    "description": "An internet-based gaming platform and social networking service developed by Blizzard Entertainment.",
    "logo": "images/logos/battle net.png",
    "links": {
      "website": "https://battle.net/",
      "android": "https://play.google.com/store/apps/details?id=com.blizzard.messenger",
      "ios": "https://apps.apple.com/us/app/battle-net/id1241040030",
      "macos": "https://download.battle.net/desktop",
      "windows": "https://download.battle.net/desktop"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Counter Strike",
    "description": "Counter-Strike is a series of multiplayer tactical first-person shooter video games, in which opposing teams attempt to complete various objectives.",
    "logo": "images/logos/counterstrike.png",
    "links": {
      "website": "https://www.counter-strike.net/",
      "windows": "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CounterMail",
    "description": "CounterMail is a secure and easy to use online email service, designed to provide maximum security and privacy without any unnecessary complexity.",
    "logo": "images/logos/CounterMail.png",
    "links": {
      "website": "https://countermail.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Contexto",
    "description": "A unique daily word game where you find a secret word based on its contextual similarity to other words.",
    "logo": "images/logos/Contexto.png",
    "links": {
      "website": "https://contexto.me/",
      "android": "https://play.google.com/store/apps/details?id=ws.jogo.contexto",
      "ios": "https://apps.apple.com/us/app/contexto-official/id6444917886"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Conexo",
    "description": "A simple word game like connections.",
    "logo": "images/logos/conexo.png",
    "links": {
      "website": "https://conexo.ws/",
      "android": "https://play.google.com/store/apps/details?id=ws.jogo.conexo",
      "ios": "https://apps.apple.com/us/app/conexo/id6468810031"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Letroso",
    "description": "A simple word game like wordle.",
    "logo": "images/logos/Letroso.png",
    "links": {
      "website": "https://letroso.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "InShot",
    "description": "Powerful all-in-one Video Editor and Video Maker with professional features.",
    "logo": "images/logos/InShot.png",
    "links": {
      "website": "https://inshot.com/",
      "android": "https://play.google.com/store/apps/details?id=com.camerasideas.instashot",
      "ios": "https://apps.apple.com/us/app/inshot-video-editor/id997362197"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bonfire",
    "description": "Bonfire is a commons–a place to gather, co-create, and build something lasting–beyond products to be sold or services that use, abuse, or extract from you.",
    "logo": "images/logos/Bonfire.png",
    "links": {
      "website": "https://bonfirenetworks.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BotBoy",
    "description": "A discord bot that can provide rich information from multiple sources.",
    "logo": "images/logos/BotBoy.png",
    "links": {
      "website": "https://botboy.snaz.in/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bungie",
    "description": "A game developer company which has made games such as Destiny.",
    "logo": "images/logos/Bungie.png",
    "links": {
      "website": "https://www.bungie.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "caniuse",
    "description": "A website that provides information about browser compatibility for various web technologies, including HTML, CSS, and JavaScript.",
    "logo": "images/logos/caniuse.png",
    "links": {
      "website": "https://caniuse.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wordle",
    "description": "A simple guess the 4 letter word game.",
    "logo": "images/logos/Wordle.png",
    "links": {
      "website": "https://www.nytimes.com/games/wordle/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Can you block it?",
    "description": "A simple Ad Block Tester.",
    "logo": "images/logos/Can you block it.png",
    "links": {
      "website": "https://canyoublockit.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Caracal",
    "description": "A shared browser experience where you can do everything you'd normally do, but together!",
    "logo": "images/logos/Caracal.png",
    "links": {
      "website": "https://caracal.club/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Carbon",
    "description": "Create and share beautiful images of your source code.",
    "logo": "images/logos/carbon.png",
    "links": {
      "website": "https://carbon.now.sh/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vercel",
    "description": "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    "logo": "images/logos/Vercel.png",
    "links": {
      "website": "https://vercel.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "casaos",
    "description": "Community-based open source software focused on delivering simple personal cloud experience around Docker ecosystem.",
    "logo": "images/logos/casaos.png",
    "links": {
      "website": "https://casaos.zimaspace.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ZimaSpace",
    "description": "ZimaSpace is a company focused on providing personal cloud solutions, primarily through their ZimaBoard and ZimaCube series.",
    "logo": "images/logos/ZimaSpace.png",
    "links": {
      "website": "https://www.zimaspace.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cascadr",
    "description": "Cascadr is a Tumblr image viewer.",
    "logo": "images/logos/cascadr.png",
    "links": {
      "website": "https://cascadr.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CCU Game",
    "description": "CCU Game helps you manage your hangar/buybacks and helps you reach your dream fleet.",
    "logo": "images/logos/CCU Game.png",
    "links": {
      "website": "https://ccugame.app/",
      "chrome": "https://chromewebstore.google.com/detail/star-citizen-ccu-game/efkaeodcipbmkhbbfmiagjcnnlhdkdlf",
      "firefox": "https://addons.mozilla.org/firefox/addon/star-citizen-ccu-game/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/star-citizen-ccu-game/lmobfijnfglbmhcblkfhmhdfmicffice"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "cdnnow",
    "description": "A content delivery network (CDN) provider.",
    "logo": "images/logos/cdnnow.png",
    "links": {
      "website": "https://cdnnow.pro/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cider Collective",
    "description": "Cider is a new cross-platform Apple Music experience built on Vue.js and written from the ground up with performance in mind.",
    "logo": "images/logos/Cider Collective.png",
    "links": {
      "website": "https://cider.sh/",
      "linux": "https://cider.sh/downloads/client",
      "macos": "https://cider.sh/downloads/client",
      "windows": "https://cider.sh/downloads/client"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CLEO Library",
    "description": "CLEO Library is a must-have tool powering thousands of modifications for GTA 3D era games.",
    "logo": "images/logos/CLEO Library.png",
    "links": {
      "website": "https://cleo.li/",
      "windows": "https://cleo.li/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Command & Conquer Communications Center",
    "description": "Large image galleries with rare images, rare downloads and game information related to Westwood Studio's classic RTS games.",
    "logo": "images/logos/Command & Conquer Communications Center.png",
    "links": {
      "website": "https://cnc-comm.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Windsurf",
    "description": "Windsurf (formerly Codeium) is an AI Code Editor.",
    "logo": "images/logos/Windsurf.png",
    "links": {
      "website": "https://windsurf.com/",
      "linux": "https://windsurf.com/editor/download-linux",
      "macos": "https://windsurf.com/editor/download-mac",
      "windows": "https://windsurf.com/editor/download-windows"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Coder",
    "description": "Coder is the open-source platform that brings developers and AI together in context-rich environments on your infrastructure.",
    "logo": "images/logos/Coder.png",
    "links": {
      "website": "https://coder.com/",
      "linux": "https://coder.com/docs/install",
      "macos": "https://coder.com/docs/install",
      "windows": "https://coder.com/docs/install"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CodeSandbox",
    "description": "Programmatically spin up isolated sandboxes for instant code execution in your AI agents and code playgrounds.",
    "logo": "images/logos/CodeSandbox.png",
    "links": {
      "website": "https://codesandbox.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CodeStackr",
    "description": "Blog and courses about coding.",
    "logo": "images/logos/codestackr.png",
    "links": {
      "website": "https://www.codestackr.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "codewars",
    "description": "Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice.",
    "logo": "images/logos/codewars.png",
    "links": {
      "website": "https://www.codewars.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "crontab guru",
    "description": "The quick and simple editor for cron schedule expressions by Cronitor",
    "logo": "images/logos/crontab guru.png",
    "links": {
      "website": "https://crontab.guru/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Craiyon",
    "description": "Create AI Art with our free AI image generator.",
    "logo": "images/logos/craiyon.png",
    "links": {
      "website": "https://www.craiyon.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "cssbattle",
    "description": "The funnest multiplayer game with 300K+ web designers & developers. Replicate the target images using CSS - the shorter your code, the higher your score! Happy coding!",
    "logo": "images/logos/cssbattle.png",
    "links": {
      "website": "https://cssbattle.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Couleur Tweak Tips",
    "description": "A comprehensive aggregation of useful resources for enthusiasts looking to expand their toolchain of programs and adopt good practices to enhance the quality of life in daily computer use and video production.",
    "logo": "images/logos/Couleur Tweak Tips.png",
    "links": {
      "website": "https://ctt.cx/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ZEE5",
    "description": "An Indian subscription video-on-demand and over-the-top streaming service owned by Zee Entertainment Enterprises.",
    "logo": "images/logos/zee5.png",
    "links": {
      "website": "https://www.zee5.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Curiosity Stream",
    "description": "A subscription-based streaming service focused on documentary programming.",
    "logo": "images/logos/curiosity stream.png",
    "links": {
      "website": "https://curiositystream.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "umbrel",
    "description": "Umbrel is a plug-and-play home cloud server that allows users to host their own cloud storage, media server, VPN, home automation, Bitcoin node, and more.",
    "logo": "images/logos/umbrel.png",
    "links": {
      "website": "https://umbrel.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dashy",
    "description": "Dashy is an open source, highly customizable, easy to use, privacy-respecting dashboard app.",
    "logo": "images/logos/Dashy.png",
    "links": {
      "website": "https://dashy.to/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CyberCode Online",
    "description": "A text-based massively multiplayer online role-playing game.",
    "logo": "images/logos/CyberCode Online.png",
    "links": {
      "website": "https://cybercodeonline.com/",
      "android": "https://play.google.com/store/apps/details?id=com.cybercodeonline.cybercode",
      "ios": "https://apps.apple.com/us/app/cybercode-online-text-rpg/id1541691332",
      "windows": "https://apps.microsoft.com/detail/9n9xc0hl2tsp"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Space Selfie by Crunch Labs Mark Rober",
    "description": "Take a selfie in space for free.",
    "logo": "images/logos/space selfie.png",
    "links": {
      "website": "https://space.crunchlabs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Have I Been Pwned?",
    "description": "Check if your email address is in a data breach.",
    "logo": "images/logos/Have I Been Pwned.png",
    "links": {
      "website": "https://haveibeenpwned.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SmugMug",
    "description": "A premium platform designed for photographers to host, share, and sell their photos",
    "logo": "images/logos/SmugMug.png",
    "links": {
      "website": "https://www.smugmug.com/",
      "android": "https://play.google.com/store/apps/details?id=com.snapwood.smugfolio",
      "ios": "https://apps.apple.com/us/app/smugmug-store-share-photos/id364894061",
      "macos": "https://www.smugmug.com/features/apps",
      "windows": "https://www.smugmug.com/features/apps"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OnlyFans",
    "description": "OnlyFans is the 18 + subscription platform empowering creators to own their full potential, monetize their content, and develop authentic connections with their fans.",
    "logo": "images/logos/onlyfans.png",
    "links": {
      "website": "https://onlyfans.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fansly",
    "description": "Fansly is a platform where creators can share exclusive content with their fans in exchange for a subscription fee.",
    "logo": "images/logos/fansly.png",
    "links": {
      "website": "https://fansly.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ZUnivers",
    "description": "A collectible card game revolving around the ZeratoR universe.",
    "logo": "images/logos/ZUnivers.png",
    "links": {
      "website": "https://zunivers.zerator.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "seximal",
    "description": "seximal is a positional notation numbering system that uses base six.",
    "logo": "images/logos/seximal.png",
    "links": {
      "website": "https://www.seximal.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wargaming",
    "description": "Wargaming, a game developer and publisher.",
    "logo": "images/logos/wargaming.net.png",
    "links": {
      "website": "https://wargaming.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Teamspeak",
    "description": "A proprietary Voice over IP (VoIP) application used for voice communication between users, similar to a conference call.",
    "logo": "images/logos/teamspeak.png",
    "links": {
      "website": "https://www.teamspeak.com/",
      "linux": "https://www.teamspeak.com/downloads",
      "macos": "https://www.teamspeak.com/downloads",
      "windows": "https://www.teamspeak.com/downloads"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pastebin",
    "description": "Pastebin is a website where you can store any text online for easy sharing.",
    "logo": "images/logos/Pastebin.png",
    "links": {
      "website": "https://pastebin.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Matkap",
    "description": "Matkap is a powerful tool designed to infiltrate and monitor Telegram bots by utilizing the Telegram Bot API and Telethon. It automates the process of capturing messages from malicious bots and forwarding them to your own account.",
    "logo": "images/logos/Matkap.png",
    "links": {
      "website": "https://matkap.cti.monster/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Proton Drive",
    "description": "End-to-end encrypted cloud storage.",
    "logo": "images/logos/protondrive.png",
    "links": {
      "website": "https://drive.proton.me/",
      "android": "https://play.google.com/store/apps/details?id=me.proton.android.drive",
      "ios": "https://apps.apple.com/us/app/proton-drive-cloud-storage/id1509667851",
      "macos": "https://proton.me/drive/download",
      "windows": "https://proton.me/drive/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Itch.io",
    "description": "itch.io is an open marketplace for independent digital creators with a focus on independent video games.",
    "logo": "images/logos/itch.io.png",
    "links": {
      "website": "https://itch.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Atom",
    "description": "A coding text editor created by GitHub that is now discontinued and archived.",
    "logo": "images/logos/Atom.png",
    "links": {
      "website": "https://atom-editor.cc/",
      "macos": "https://github.com/atom/atom/releases/tag/v1.60.0",
      "windows": "https://github.com/atom/atom/releases/tag/v1.60.0"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AMD Advanced Micro Devices",
    "description": "Advanced Micro Devices, Inc. is an American multinational corporation and technology company headquartered in Santa Clara, California and maintains significant operations in Austin, Texas.",
    "logo": "images/logos/AMD.png",
    "links": {
      "website": "https://www.amd.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sublime Text",
    "description": "The sophisticated text editor for code, markup and prose.",
    "logo": "images/logos/Sublime Text.png",
    "links": {
      "website": "https://www.sublimetext.com/",
      "linux": "https://www.sublimetext.com/download",
      "macos": "https://www.sublimetext.com/download",
      "windows": "https://www.sublimetext.com/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Phoenix Code",
    "description": "The text editor designed to make coding as simple and fun as playing a video game",
    "logo": "images/logos/Phoenix Code.png",
    "links": {
      "website": "https://phcode.dev/",
      "linux": "https://phcode.io/",
      "macos": "https://phcode.io/",
      "windows": "https://phcode.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "LMMS",
    "description": "LMMS formerly known as Linux MultiMedia Studio, is a free and open-source digital audio workstation (DAW).",
    "logo": "images/logos/LMMS.png",
    "links": {
      "website": "https://lmms.io/",
      "linux": "https://lmms.io/download#linux",
      "macos": "https://lmms.io/download#mac",
      "windows": "https://lmms.io/download#windows"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Aftership Package Tracker",
    "description": "Get real-time delivery updates with the free AfterShip app.",
    "logo": "images/logos/aftership.png",
    "links": {
      "website": "https://www.aftership.com/mobile-app",
      "android": "https://play.google.com/store/apps/details?id=com.aftership.AfterShip&utm_source=www.aftership.com",
      "ios": "https://apps.apple.com/us/app/aftership-package-tracker/id507014023"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Anycode Wallet",
    "description": "Add any barcode to your wallet by simply scanning them.",
    "logo": "images/logos/Anycode Wallet.png",
    "links": {
      "website": "https://anycodewallet.com/",
      "android": "https://play.google.com/store/apps/details?id=com.samirthapa.anycodewallet",
      "ios": "https://apps.apple.com/us/app/anycode-wallet/id1538232377"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pestle",
    "description": "Pestle is a recipe management app primarily designed for iPhone and iPad users.",
    "logo": "images/logos/Pestle.png",
    "links": {
      "website": "https://pestlechef.app/",
      "ios": "https://apps.apple.com/us/app/pestle-recipe-manager/id1574776971"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "OnyX",
    "description": "OnyX is a multifunction utility that you can use to verify the structure of the system files; perform cleaning and computer maintenance tasks; configure parameters in the Finder, Dock, Safari, and some Apple applications; delete caches; remove certain problematic folders and files; rebuild various databases and indexes; and more.",
    "logo": "images/logos/OnyX.png",
    "links": {
      "website": "https://www.titanium-software.fr/en/onyx.html",
      "macos": "https://www.titanium-software.fr/en/onyx.html"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Titanium Software",
    "description": "This website provides operating system utilities for macOS.",
    "logo": "images/logos/Titanium Software.png",
    "links": {
      "website": "https://www.titanium-software.fr/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Photopea",
    "description": "Transform your photos with professional-grade tools in a free online photo editor that works right in your browser.",
    "logo": "images/logos/Photopea.png",
    "links": {
      "website": "https://www.photopea.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gimp",
    "description": "Free & Open Source Image Editor",
    "logo": "images/logos/GIMP.png",
    "links": {
      "website": "https://www.gimp.org/",
      "linux": "https://www.gimp.org/downloads/",
      "macos": "https://www.gimp.org/downloads/",
      "windows": "https://www.gimp.org/downloads/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Krita",
    "description": "Krita is a professional FREE and open source painting program.",
    "logo": "images/logos/Krita.png",
    "links": {
      "website": "https://krita.org/",
      "linux": "https://krita.org/en/download/",
      "macos": "https://krita.org/en/download/",
      "windows": "https://krita.org/en/download/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Affinity Designer",
    "description": "Illustration & graphic design software",
    "logo": "images/logos/Affinity Designer.png",
    "links": {
      "website": "https://affinity.serif.com/designer/",
      "macos": "https://affinity.serif.com/designer/",
      "windows": "https://affinity.serif.com/designer/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Affinity Photo",
    "description": "Photo editing software",
    "logo": "images/logos/Affinity Photo.png",
    "links": {
      "website": "https://affinity.serif.com/photo/",
      "macos": "https://affinity.serif.com/photo/",
      "windows": "https://affinity.serif.com/photo/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Affinity Publisher",
    "description": "Page layout & design powerhouse",
    "logo": "images/logos/Affinity Publisher.png",
    "links": {
      "website": "https://affinity.serif.com/publisher/",
      "macos": "https://affinity.serif.com/publisher/",
      "windows": "https://affinity.serif.com/publisher/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Pixelmator Pro",
    "description": "Professional image editing tools that anyone can use.",
    "logo": "images/logos/pixelmator.png",
    "links": {
      "website": "https://www.pixelmator.com/pro/",
      "macos": "https://apps.apple.com/us/app/pixelmator-pro/id1289583905"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Photomator",
    "description": "The ultimate photo editor for Mac, iPhone, iPad, and Vision Pro.",
    "logo": "images/logos/Photomator.png",
    "links": {
      "website": "https://www.pixelmator.com/photomator/",
      "ios": "https://apps.apple.com/us/app/photomator-photo-editor/id1444636541",
      "macos": "https://apps.apple.com/us/app/photomator-photo-editor/id1444636541"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Pixelmator for iOS",
    "description": "Powerful, full‑featured image editor for iOS.",
    "logo": "images/logos/Pixelmator for iOS.png",
    "links": {
      "website": "https://www.pixelmator.com/ios/",
      "ios": "https://apps.apple.com/us/app/pixelmator/id924695435"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Boxy SVG",
    "description": "Scalable Vector Graphics editor",
    "logo": "images/logos/Boxy SVG.png",
    "links": {
      "website": "https://boxy-svg.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CorelDraw",
    "description": "Professional graphic design software",
    "logo": "images/logos/CorelDraw.png",
    "links": {
      "website": "https://www.coreldraw.com/",
      "macos": "https://www.coreldraw.com/",
      "windows": "https://www.coreldraw.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Figma",
    "description": "Figma helps design and development teams build great products, together.",
    "logo": "images/logos/Figma.png",
    "links": {
      "website": "https://www.figma.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Sketch",
    "description": "Sketch is a toolkit made by designers, for designers, that puts the focus on you and your work.",
    "logo": "images/logos/Sketch.png",
    "links": {
      "website": "https://www.sketch.com/signin",
      "ios": "https://apps.apple.com/us/app/sketch-view-and-mirror/id1609224699",
      "macos": "https://apps.apple.com/us/app/sketch-digital-design-toolkit/id1667260533"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Spline",
    "description": "Spline, a place to design and collaborate in 3D.",
    "logo": "images/logos/Spline.png",
    "links": {
      "website": "https://spline.design/",
      "macos": "https://spline.design/download",
      "windows": "https://spline.design/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pencil2D Animation",
    "description": "An easy, intuitive tool to make 2D hand-drawn animations.",
    "logo": "images/logos/Pencil2D Animation.png",
    "links": {
      "website": "https://www.pencil2d.org/",
      "linux": "https://www.pencil2d.org/download",
      "macos": "https://www.pencil2d.org/download",
      "windows": "https://www.pencil2d.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Audacity",
    "description": "Audio editing and recording app",
    "logo": "images/logos/Audacity.png",
    "links": {
      "website": "https://www.audacityteam.org/",
      "linux": "https://www.audacityteam.org/download/linux/",
      "macos": "https://www.audacityteam.org/download/mac/",
      "windows": "https://www.audacityteam.org/download/windows/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Overtune",
    "description": "Create Your Own Beats.",
    "logo": "images/logos/overtune.png",
    "links": {
      "website": "https://www.overtune.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Musehub",
    "description": "MuseHub is a comprehensive online platform designed to provide musicians, from aspiring hobbyists to professional composers, with the essential tools and resources needed to bring their musical ideas to life.",
    "logo": "images/logos/Musehub.png",
    "links": {
      "website": "https://www.musehub.com/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Musescore Studio",
    "description": "The world's most popular open-source music notation software for creating, playing, and printing beautiful sheet music.",
    "logo": "images/logos/musescore studio.png",
    "links": {
      "website": "https://musescore.org/",
      "linux": "https://musescore.org/download",
      "macos": "https://musescore.org/download",
      "windows": "https://musescore.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Cloudflare Dashboard",
    "description": "Cloudflare is a global network designed to make everything connected to the internet more secure, private, fast, and reliable.",
    "logo": "images/logos/Cloudflare Dashboard.png",
    "links": {
      "website": "https://dash.cloudflare.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Dark Mode Design",
    "description": "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
    "logo": "images/logos/Dark Mode Design.png",
    "links": {
      "website": "https://www.darkmodedesign.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "xAi/",
    "description": "xAI is an American public-benefit corporation focused on artificial intelligence, founded by Elon Musk in March 2023.",
    "logo": "images/logos/xai.png",
    "links": {
      "website": "https://x.ai/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Grok/",
    "description": "Grok is an AI-powered assistant, developed by xAI which is owned by Elon Musk.",
    "logo": "images/logos/Grok.png",
    "links": {
      "website": "https://grok.com/",
      "android": "https://play.google.com/store/apps/details?id=ai.x.grok",
      "ios": "https://apps.apple.com/us/app/grok/id6670324846"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Orbi/",
    "description": "Orbi is an agent that finds freelance leads for you.",
    "logo": "images/logos/Orbi.png",
    "links": {
      "website": "https://heyorbi.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Slash/",
    "description": "Slash is a financial technology company focused on providing banking and expense management solutions for online businesses, particularly those in the e-commerce and performance marketing spaces.",
    "logo": "images/logos/Slash.png",
    "links": {
      "website": "https://www.slash.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lovable/",
    "description": "Create apps and websites by chatting with AI",
    "logo": "images/logos/Lovable.png",
    "links": {
      "website": "https://lovable.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fey",
    "description": "Fey turns complex data, gated tools, and noisy news into instant earnings alerts, clear summaries.",
    "logo": "images/logos/Fey.png",
    "links": {
      "website": "https://fey.com/",
      "macos": "https://fey.com/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tiempo",
    "description": "A workout tracker for Apple Watch.",
    "logo": "images/logos/Tiempo.png",
    "links": {
      "website": "https://www.tiempo.fitness/",
      "ios": "https://apps.apple.com/us/app/tiempo-fitness/id6475314273"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Osmo",
    "description": "A platform created by Dennis Snellenberg and Ilja van Eck, focused on providing resources and tools for creative web developers.",
    "logo": "images/logos/osmo.png",
    "links": {
      "website": "https://www.osmo.supply/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cursor",
    "description": "A next-generation AI code editor designed for pair programming with an integrated large language model.",
    "logo": "images/logos/cursor.png",
    "links": {
      "website": "https://cursor.com/",
      "linux": "https://cursor.com/downloads",
      "macos": "https://cursor.com/downloads",
      "windows": "https://cursor.com/downloads"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Better Stack",
    "description": "A platform focused on infrastructure monitoring and incident response.",
    "logo": "images/logos/betterstack.png",
    "links": {
      "website": "https://betterstack.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Modal",
    "description": "Bring your own code, and run CPU, GPU, and data-intensive compute at scale.",
    "logo": "images/logos/modal.png",
    "links": {
      "website": "https://modal.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dark Design",
    "description": "List of websites that have DarkMode and are good quality",
    "logo": "images/logos/dark-design.png",
    "links": {
      "website": "https://www.dark.design/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Framer",
    "description": "A website builder software",
    "logo": "images/logos/framer.png",
    "links": {
      "website": "https://www.framer.com/",
      "macos": "https://www.framer.com/downloads",
      "windows": "https://www.framer.com/downloads"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Proton VPN",
    "description": "Gain unrestricted access to global content, block annoying ads, and safeguard your privacy with a fast and secure VPN.",
    "logo": "images/logos/Proton VPN.png",
    "links": {
      "website": "https://protonvpn.com/",
      "android": "https://play.google.com/store/apps/details?id=ch.protonvpn.android",
      "ios": "https://apps.apple.com/us/app/proton-vpn-fast-secure/id1437005085",
      "linux": "https://protonvpn.com/download-linux",
      "macos": "https://protonvpn.com/download-macos",
      "windows": "https://protonvpn.com/download-windows",
      "chrome": "https://chromewebstore.google.com/detail/proton-vpn-fast-secure/jplgfhpmjnbigmhklmmbgecoobifkmpa",
      "firefox": "https://addons.mozilla.org/en-US/firefox/addon/proton-vpn-firefox-extension/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Mac Mouse Fix",
    "description": "An app to fix the mouse on Mac",
    "logo": "images/logos/mac mouse fix.png",
    "links": {
      "website": "https://macmousefix.com/",
      "macos": "https://macmousefix.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Dropover",
    "description": "Dropover is a drag and drop utility that makes it simple to collect, organize, share, and process files with floating shelves.",
    "logo": "images/logos/Dropover.png",
    "links": {
      "website": "https://dropoverapp.com/",
      "macos": "https://apps.apple.com/us/app/dropover-easier-drag-drop/id1355679052"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TinkerTool",
    "description": "TinkerTool is an application that gives you access to additional preference settings Apple has built into macOS.",
    "logo": "images/logos/TinkerTool.png",
    "links": {
      "website": "https://www.bresink.com/osx/TinkerTool.html",
      "macos": "https://www.bresink.com/osx/0TinkerTool/download.php"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MBS",
    "description": "Cool software for the Mac System created by Marcel Bresink Software-Systeme.",
    "logo": "images/logos/MBS.png",
    "links": {
      "website": "https://www.bresink.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ulysses",
    "description": "Writing App for Mac, iPad and iPhone.",
    "logo": "images/logos/Ulysses.png",
    "links": {
      "website": "https://ulysses.app/",
      "ios": "https://apps.apple.com/us/app/ulysses-writing-app/id1225570693",
      "macos": "https://apps.apple.com/us/app/ulysses-writing-app/id1225570693"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Screen Studio",
    "description": "Screen Recorder producing high-impact videos automatically.",
    "logo": "images/logos/Screen Studio.png",
    "links": {
      "website": "https://screen.studio/",
      "macos": "https://screen.studio/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LookAway",
    "description": "LookAway is a smart break reminder that helps reduce eye strain, digital fatigue, and maintain better posture—so you can end your day feeling fresh.",
    "logo": "images/logos/LookAway.png",
    "links": {
      "website": "https://lookaway.app/",
      "macos": "https://lookaway.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LinearMouse",
    "description": "Customize mouse features on Macs",
    "logo": "images/logos/LinearMouse.png",
    "links": {
      "website": "https://linearmouse.app/",
      "macos": "https://linearmouse.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Latest",
    "description": "Latest is a free and open source app for macOS that checks if all your apps are up to date.",
    "logo": "images/logos/latest.png",
    "links": {
      "website": "https://max.codes/latest/",
      "macos": "https://max.codes/latest/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BetterDisplay",
    "description": "Mac app that lets you customize your displays better.",
    "logo": "images/logos/BetterDisplay.png",
    "links": {
      "website": "https://github.com/waydabber/BetterDisplay/",
      "macos": "https://github.com/waydabber/BetterDisplay/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Obsidian",
    "description": "The free and flexible app for your private thoughts.",
    "logo": "images/logos/Obsidian.png",
    "links": {
      "website": "https://obsidian.md/",
      "android": "https://play.google.com/store/apps/details?id=md.obsidian",
      "ios": "https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442",
      "linux": "https://obsidian.md/download",
      "macos": "https://obsidian.md/download",
      "windows": "https://obsidian.md/download",
      "chrome": "https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf",
      "firefox": "https://addons.mozilla.org/en-US/firefox/addon/web-clipper-obsidian/",
      "safari": "https://apps.apple.com/us/app/obsidian-web-clipper/id6720708363"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bartender",
    "description": "Bartender, a popular macOS utility app that helps you clean up and organize your menu bar.",
    "logo": "images/logos/Bartender.png",
    "links": {
      "website": "https://www.macbartender.com/",
      "macos": "https://www.macbartender.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Orion",
    "description": "Free mac/ios browser",
    "logo": "images/logos/Orion.png",
    "links": {
      "website": "https://kagi.com/orion/",
      "ios": "https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200",
      "macos": "https://kagi.com/orion/#download_sec"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Arc",
    "description": "A revolutionary web browser from The Browser Company designed to change how you interact with the internet.",
    "logo": "images/logos/arc.png",
    "links": {
      "website": "https://arc.net/",
      "android": "https://play.google.com/store/apps/details?id=company.thebrowser.arc",
      "ios": "https://apps.apple.com/us/app/arc-search-find-it-faster/id6472513080",
      "macos": "https://arc.net/",
      "windows": "https://arc.net/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Heptabase",
    "description": "Explore your notes through whiteboards, mindmaps, tables, and kanban boards to see how everything connects at a glance.",
    "logo": "images/logos/Heptabase.png",
    "links": {
      "website": "https://heptabase.com/",
      "android": "https://play.google.com/store/apps/details?id=com.heptabase.heptabase",
      "ios": "https://apps.apple.com/tw/app/heptabase/id6445801508",
      "linux": "https://heptabase.com/download",
      "macos": "https://heptabase.com/download",
      "windows": "https://heptabase.com/download"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "anytype",
    "description": "A privacy-focused, local-first platform for notes, tasks, and knowledge management using a graph-based structure.",
    "logo": "images/logos/anytype.png",
    "links": {
      "website": "http://anytype.io/",
      "linux": "https://download.anytype.io/",
      "macos": "https://download.anytype.io/",
      "windows": "https://download.anytype.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Twos",
    "description": "One app for everything.",
    "logo": "images/logos/Twos.png",
    "links": {
      "website": "https://www.twosapp.com/",
      "android": "https://play.google.com/store/apps/details?id=com.twosnativev3",
      "ios": "https://apps.apple.com/us/app/twos-one-app-for-every-thing/id1097350934",
      "linux": "https://www.twosapp.com/",
      "macos": "https://www.twosapp.com/",
      "windows": "https://www.twosapp.com/",
      "chrome": "https://chromewebstore.google.com/detail/twos-the-best-place-to-wr/lgkfjdlfhjdjcmkdgmciobikpjakpgjn"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Timestripe",
    "description": "Manage all your tasks, knowledge and time with a all-in-one tool.",
    "logo": "images/logos/Timestripe.png",
    "links": {
      "website": "https://timestripe.com/",
      "android": "https://play.google.com/store/apps/details?id=com.application.timestripe",
      "ios": "https://apps.apple.com/us/app/timestripe-goal-manager/id1529499962"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WebCatalog",
    "description": "Turn websites into desktop apps.",
    "logo": "images/logos/WebCatalog.png",
    "links": {
      "website": "https://webcatalog.io/",
      "linux": "https://webcatalog.io/downloads",
      "macos": "https://webcatalog.io/downloads",
      "windows": "https://webcatalog.io/downloads"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Flighty",
    "description": "Flight information app.",
    "logo": "images/logos/flighty.png",
    "links": {
      "website": "https://flighty.com/",
      "ios": "https://apps.apple.com/us/app/flighty-live-flight-tracker/id1358823008"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Transit",
    "description": "Transit information app.",
    "logo": "images/logos/transit.png",
    "links": {
      "website": "https://transitapp.com/",
      "android": "https://play.google.com/store/apps/details?id=com.thetransitapp.droid",
      "ios": "https://apps.apple.com/us/app/transit-subway-bus-times/id498151501"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Dazz",
    "description": "A vintage camera app that recreates the look and feel of classic film cameras and VHS tapes on your smartphone.",
    "logo": "images/logos/Dazz.png",
    "links": {
      "website": "http://dazz.ltd/",
      "ios": "https://apps.apple.com/us/app/dazz-cam-vintage-camera/id1422471180"
    },
    "flags": {},
    "categories": {
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HabitKit",
    "description": "Track your habits with ease and view your daily progress in a clear, intuitive way. Stay motivated and consistent as you work towards your goals.",
    "logo": "images/logos/HabitKit.png",
    "links": {
      "website": "https://www.habitkit.app/",
      "android": "https://play.google.com/store/apps/details?id=com.roehl.habitkit",
      "ios": "https://apps.apple.com/us/app/habit-tracker-habitkit/id6443918070"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nostr Apps",
    "description": "A directory of apps built for Nostr.",
    "logo": "images/logos/nostrapps.png",
    "links": {
      "website": "https://nostrapps.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nostr",
    "description": "Nostr is an apolitical communication commons. A simple standard that defines a scalable architecture of clients and servers that can be used to spread information freely. Not controlled by any corporation or government, anyone can build on Nostr and anyone can use it.",
    "logo": "images/logos/nostr.png",
    "links": {
      "website": "https://nostr.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mastodon",
    "description": "Decentralized social media that is also open source.",
    "logo": "images/logos/mastodon.png",
    "links": {
      "website": "https://mastodon.social/",
      "android": "https://play.google.com/store/apps/details?id=org.joinmastodon.android",
      "ios": "https://apps.apple.com/us/app/mastodon/id1571998974"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Openvibe",
    "description": "One App For The Open Social Web",
    "logo": "images/logos/openvibe.png",
    "links": {
      "website": "https://openvibe.social/",
      "android": "https://play.google.com/store/apps/details?id=com.plebstr.client",
      "ios": "https://apps.apple.com/cz/app/openvibe-bluesky-mastodon/id1666230916"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Sofa",
    "description": "Create lists of things to watch, read, play, listen to, and more.",
    "logo": "images/logos/sofa.png",
    "links": {
      "website": "https://www.sofahq.com/",
      "ios": "https://apps.apple.com/us/app/sofa-downtime-organizer/id1276554886",
      "macos": "https://apps.apple.com/us/app/sofa-downtime-organizer/id1276554886"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Shareshot",
    "description": "Promote, share and present screenshots.",
    "logo": "images/logos/Shareshot.png",
    "links": {
      "website": "https://shareshot.app/",
      "ios": "https://apps.apple.com/us/app/frame-screenshots-shareshot/id6474271573",
      "macos": "https://apps.apple.com/us/app/frame-screenshots-shareshot/id6474271573"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "AnyList",
    "description": "One app for stress-free shopping, cooking, and meal planning.",
    "logo": "images/logos/AnyList.png",
    "links": {
      "website": "https://www.anylist.com/",
      "android": "https://play.google.com/store/apps/details?id=com.purplecover.anylist",
      "ios": "https://apps.apple.com/us/app/anylist-grocery-shopping-list/id522167641",
      "macos": "https://www.anylist.com/mac",
      "chrome": "https://chromewebstore.google.com/detail/anylist-recipe-import/jebljoacamdppgjiachpgaighglhkgpe",
      "firefox": "https://www.anylist.com/recipes/browser-extensions/firefox",
      "safari": "https://www.anylist.com/recipes/browser-extensions/safari",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/anylist-recipe-import/cbglbildkmpgeicchihcdkigjebbhgna"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "extensions": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Wetransfer",
    "description": "A cloud-based service designed for sending large files over the internet.",
    "logo": "images/logos/wetransfer.png",
    "links": {
      "website": "https://wetransfer.com/",
      "android": "https://play.google.com/store/apps/details?id=com.wetransfer.transfer",
      "ios": "https://apps.apple.com/us/app/wetransfer-transfer-files/id1569379048"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Cheatsheet Notes",
    "description": "Write once, recall anywhere.",
    "logo": "images/logos/Cheatsheet Notes.png",
    "links": {
      "website": "https://overdesigned.net/cheatsheet/",
      "ios": "https://apps.apple.com/us/app/cheatsheet-sticky-note-widget/id914665829",
      "macos": "https://apps.apple.com/us/app/cheatsheet-sticky-notes/id1468213484"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Mac Stats",
    "description": "Monitor your Mac with ease.",
    "logo": "images/logos/Stats.png",
    "links": {
      "website": "https://mac-stats.com/",
      "macos": "https://mac-stats.com/downloads"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Numi",
    "description": "Beautiful calculator.",
    "logo": "images/logos/numi.png",
    "links": {
      "website": "https://numi.app/",
      "linux": "https://numi.app/",
      "macos": "https://numi.app/",
      "windows": "https://numi.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Karabiner Elements",
    "description": "A powerful and stable keyboard customizer for macOS.",
    "logo": "images/logos/Karabiner Elements.png",
    "links": {
      "website": "https://karabiner-elements.pqrs.org/",
      "macos": "https://karabiner-elements.pqrs.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Modrinth Minecraft",
    "description": "Discover, play, and share Minecraft content through a open-source platform built for the community.",
    "logo": "images/logos/Modrinth.png",
    "links": {
      "website": "https://modrinth.com/",
      "linux": "https://modrinth.com/app",
      "macos": "https://modrinth.com/app",
      "windows": "https://modrinth.com/app"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Inceptum Minecraft",
    "description": "Inceptum is advanced FOSS Launcher for Minecraft written in Java.",
    "logo": "images/logos/Inceptum.png",
    "links": {
      "website": "https://pages.frohnmeyer-wds.de/JfMods/Inceptum/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "X Minecraft Launcher",
    "description": "An Open Source Minecraft Launcher with Modern UX.",
    "logo": "images/logos/X Minecraft Launcher.png",
    "links": {
      "website": "https://xmcl.app/",
      "linux": "https://xmcl.app/",
      "macos": "https://xmcl.app/",
      "windows": "https://xmcl.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Pudding",
    "description": "a creative digital publication specializing in data journalism and visual essays.",
    "logo": "images/logos/The Pudding.png",
    "links": {
      "website": "https://pudding.cool/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Meshy.ai",
    "description": "AI 3D Model Generator",
    "logo": "images/logos/Meshy.png",
    "links": {
      "website": "https://www.meshy.ai/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Glenn Explore",
    "description": "A 3D Multiplayer Driving Adventure",
    "logo": "images/logos/Glenn Explore.png",
    "links": {
      "website": "https://playglenn.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Magic Resume",
    "description": "Magic Resume uses AI technology to help you quickly create professional resumes.",
    "logo": "images/logos/Magic Resume.png",
    "links": {
      "website": "https://magicv.art/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "File Unzip",
    "description": "Unzip ZIP, RAR, TAR, TGZ, 7Z and other files.",
    "logo": "images/logos/FileUNZIP.png",
    "links": {
      "website": "https://www.fileunzip.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Online QR Code Scanner",
    "description": "A convenient web-based tool for scanning and decoding QR codes instantly using your camera or an image file.",
    "logo": "images/logos/QR Code Scanner.png",
    "links": {
      "website": "https://www.online-qr-scanner.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Online Reader",
    "description": "Online File Reader and Viewer.",
    "logo": "images/logos/Online Reader.png",
    "links": {
      "website": "https://www.online-reader.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Build Cores",
    "description": "Interactive PC Building in 3D",
    "logo": "images/logos/Build Cores.png",
    "links": {
      "website": "https://buildcores.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "x-minus.pro",
    "description": "Karaoke Tracks in All Keys",
    "logo": "images/logos/x-minus.pro.png",
    "links": {
      "website": "https://x-minus.pro/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Millennium",
    "description": "An open source gateway to a better Steam® client experience.",
    "logo": "images/logos/Millennium.png",
    "links": {
      "website": "https://steambrew.app/",
      "linux": "https://docs.steambrew.app/users/getting-started/installation",
      "windows": "https://docs.steambrew.app/users/getting-started/installation"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ImageMagick",
    "description": "A free, open-source software suite, used for editing and manipulating digital images.",
    "logo": "images/logos/ImageMagick.png",
    "links": {
      "website": "https://imagemagick.org/",
      "linux": "https://imagemagick.org/script/download.php#linux",
      "macos": "https://imagemagick.org/script/download.php#macos",
      "windows": "https://imagemagick.org/script/download.php#windows"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ezgif",
    "description": "Online GIF maker and image editor.",
    "logo": "images/logos/Ezgif.png",
    "links": {
      "website": "https://ezgif.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tidal",
    "description": "TIDAL is an artist-first, fan-centered music streaming platform.",
    "logo": "images/logos/Tidal.png",
    "links": {
      "website": "https://tidal.com/",
      "android": "https://play.google.com/store/apps/details?id=com.aspiro.tidal",
      "ios": "https://apps.apple.com/us/app/tidal-music-hifi-sound/id913943275",
      "macos": "https://offer.tidal.com/download",
      "windows": "https://offer.tidal.com/download"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RaidProtect Discord Bot",
    "description": "Prevent malicious users from damaging your Discord server.",
    "logo": "images/logos/RaidProtect.png",
    "links": {
      "website": "https://raidprotect.bot/en"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Docusaurus",
    "description": "Build optimized websites quickly, focus on your content.",
    "logo": "images/logos/Docusaurus.png",
    "links": {
      "website": "https://docusaurus.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KDE",
    "description": "KDE is a free and open-source software community that develops a wide range of applications.",
    "logo": "images/logos/KDE.png",
    "links": {
      "website": "https://kde.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MCreator Minecraft",
    "description": "MCreator is an open-source software used to make Minecraft Java Edition mods, Bedrock Edition Add-Ons, resource packs, and data packs using an intuitive easy-to-learn interface or with an integrated code editor.",
    "logo": "images/logos/MCreator.png",
    "links": {
      "website": "https://mcreator.net/",
      "linux": "https://mcreator.net/download",
      "macos": "https://mcreator.net/download",
      "windows": "https://mcreator.net/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Plyo",
    "description": "A tech company based in Slovenia.",
    "logo": "images/logos/Pylo.png",
    "links": {
      "website": "https://www.pylo.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cyberdrop",
    "description": "An Uncensored Filehosting Service.",
    "logo": "images/logos/Cyberdrop.png",
    "links": {
      "website": "https://cyberdrop.me/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cyberpunk 2077",
    "description": "Cyberpunk 2077 is a 2020 action role-playing game.",
    "logo": "images/logos/Cyberpunk.png",
    "links": {
      "website": "https://www.cyberpunk.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "cybersole",
    "description": "A Windows-based application designed for automated checkouts.",
    "logo": "images/logos/Cybersole.png",
    "links": {
      "website": "https://cybersole.io/",
      "android": "https://play.google.com/store/apps/details?id=com.cyberaio",
      "ios": "https://apps.apple.com/gb/app/cybersole/id1453327449"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "CyTube",
    "description": "a free, open-source, web-based platform that enables synchronized media watching and group chat across custom &quot;channels&quot;.",
    "logo": "images/logos/CyTube.png",
    "links": {
      "website": "https://cytu.be/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Damn Vulnerable DeFi",
    "description": "The smart contract security training ground for developers, security researchers and educators.",
    "logo": "images/logos/DVD.png",
    "links": {
      "website": "https://www.damnvulnerabledefi.xyz/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DartPad",
    "description": "A free, open-source, online code editor and playground created by the Dart team (part of Google). It allows you to write, run, edit, and share Dart and Flutter code entirely within your web browser—no installation needed.",
    "logo": "images/logos/DartPad.png",
    "links": {
      "website": "https://dartpad.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "No Intro",
    "description": "No-Intro catalogs the best available copies of ROMs and digital games, providing DAT files for ROM managers, and an online database.",
    "logo": "images/logos/no-intro.png",
    "links": {
      "website": "https://no-intro.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DD-WRT",
    "description": "DD-WRT is a Linux based alternative OpenSource firmware suitable for a great variety of WLAN routers and embedded systems.",
    "logo": "images/logos/dd-wrt.png",
    "links": {
      "website": "https://dd-wrt.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dead By Daylight",
    "description": "Dead by Daylight is an online asymmetric multiplayer survival horror video game developed and published by Canadian studio Behaviour Interactive.",
    "logo": "images/logos/Dead By Daylight.png",
    "links": {
      "website": "https://deadbydaylight.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Deltarune",
    "description": "Deltarune is an episodic role-playing video game by Toby Fox as a follow-up to his 2015 video game Undertale.",
    "logo": "images/logos/Deltarune.png",
    "links": {
      "website": "https://deltarune.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DemonForums",
    "description": "DemonForums is a community forum.",
    "logo": "images/logos/Demon Forums.png",
    "links": {
      "website": "https://demonforums.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Destiny 2 Stats",
    "description": "Check Detailed Destiny 2 Stats and Leaderboards.",
    "logo": "images/logos/Destiny 2 Stats.png",
    "links": {
      "website": "https://destinytracker.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Developer Insider",
    "description": "Developer Insider is a community for software developers with articles on different topics and programming languages such as Mobile Application Development, C, C++, Java, Tech News, and other topics.",
    "logo": "images/logos/Developer Insider.png",
    "links": {
      "website": "https://developerinsider.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cloudflare Docs",
    "description": "Explore guides and tutorials to start building on Cloudflare's platform.",
    "logo": "images/logos/Cloudflare docs.png",
    "links": {
      "website": "https://developers.cloudflare.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DI.FM",
    "description": "Addictive electronic music created by humans.",
    "logo": "images/logos/DI-FM.png",
    "links": {
      "website": "https://www.di.fm/",
      "android": "https://play.google.com/store/apps/details?id=com.audioaddict.di",
      "ios": "https://apps.apple.com/us/app/di-fm-electronic-music-radio/id375242617"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dice Bear",
    "description": "Create avatars for your profiles, designs, websites or apps. Piece by piece or based on a seed.",
    "logo": "images/logos/Dice Bear.png",
    "links": {
      "website": "https://www.dicebear.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "digiKam",
    "description": "Dynamic open-source digital asset manager and image editor",
    "logo": "images/logos/digiKam.png",
    "links": {
      "website": "https://www.digikam.org/",
      "linux": "https://www.digikam.org/download/",
      "macos": "https://www.digikam.org/download/",
      "windows": "https://www.digikam.org/download/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Automation",
    "description": "Design and Manufacture Cars for your Automotive Empire.",
    "logo": "images/logos/AutoMation.png",
    "links": {
      "website": "https://www.automationgame.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Logseq",
    "description": "Logseq is a privacy-first, open-source platform for knowledge management and collaboration.",
    "logo": "images/logos/Logseq.png",
    "links": {
      "website": "https://logseq.com/",
      "android": "https://logseq.com/downloads",
      "ios": "https://apps.apple.com/us/app/logseq/id1601013908",
      "linux": "https://logseq.com/downloads",
      "macos": "https://logseq.com/downloads",
      "windows": "https://logseq.com/downloads"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DJFLAME",
    "description": "DJFlame is an end-to-end solution for controlling the DJ playlist of your party.",
    "logo": "images/logos/DJFLAME.png",
    "links": {
      "website": "https://djflame.tech/",
      "ios": "https://apps.apple.com/us/app/djflame-guest-companion-app/id1562605955",
      "linux": "https://djflame.tech/download",
      "macos": "https://djflame.tech/download",
      "windows": "https://djflame.tech/download"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DLive",
    "description": "DLive is an American blockchain-based live streaming service.",
    "logo": "images/logos/dlive.png",
    "links": {
      "website": "https://dlive.tv/",
      "android": "https://play.google.com/store/apps/details?id=io.dlive",
      "ios": "https://apps.apple.com/us/app/dlive-your-stream-your-rules/id1446969385"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AdonisJS",
    "description": "AdonisJS is a TypeScript-first web framework for building web apps and API servers.",
    "logo": "images/logos/adonis.png",
    "links": {
      "website": "https://adonisjs.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AdonisJS Docs",
    "description": "AdonisJS is a TypeScript-first web framework for Node.js. You can use it to create a full-stack web application or a JSON API server.",
    "logo": "images/logos/Adonis Docs.png",
    "links": {
      "website": "https://docs.adonisjs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Quad9",
    "description": "An open DNS recursive service for free security and high privacy.",
    "logo": "images/logos/quad9.png",
    "links": {
      "website": "https://quad9.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Quad9 Docs",
    "description": "Quad9 is a Swiss-based, non-profit organization which operates a privacy-and-security focused, open DNS recursive service for the masses.",
    "logo": "images/logos/quad9 docs.png",
    "links": {
      "website": "https://docs.quad9.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DODI Repacks",
    "description": "DODI Repacks is a well-known group that specializes in creating highly compressed versions of PC games.",
    "logo": "images/logos/DODI Repacks.png",
    "links": {
      "website": "https://dodi-repacks.site/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "donk.link",
    "description": "A donk social media landing page service.",
    "logo": "images/logos/donklink.png",
    "links": {
      "website": "https://donklink.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dood Stream",
    "description": "Upload & share your videos to make real money online.",
    "logo": "images/logos/DoodStream.png",
    "links": {
      "website": "https://doodstream.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dota 2",
    "description": "Dota 2 is a 2013 multiplayer online battle arena video game by Valve.",
    "logo": "images/logos/Dota 2.png",
    "links": {
      "website": "https://www.dota2.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DOTABUFF",
    "description": "The leading statistics and community website for Dota 2 players, providing deep insights into matches and heroes.",
    "logo": "images/logos/DOTABUFF.png",
    "links": {
      "website": "https://www.dotabuff.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dracula Theme",
    "description": "Dracula Theme is a popular open-source dark color scheme created by Zeno Rocha, designed to work across a wide array of software applications.",
    "logo": "images/logos/Dracula Theme.png",
    "links": {
      "website": "https://draculatheme.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Drake Wars",
    "description": "Drake Wars is a free-to-play collectible strategy game that centers around breeding, crafting, arena battles, and a player-owned economy, where nearly every in-game asset has tangible value.",
    "logo": "images/logos/Drake Wars.png",
    "links": {
      "website": "https://drakewars.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Droid-ify",
    "description": "Minimal F-droid client for design and performance.",
    "logo": "images/logos/Droid-ify.png",
    "links": {
      "website": "https://droidify.eu.org/",
      "android": "https://droidify.eu.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "dsc.gg",
    "description": "Shorten your Discord links.",
    "logo": "images/logos/dsc.gg.png",
    "links": {
      "website": "https://dsc.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DualSHOCKERS",
    "description": "Covering Gaming News, Trending Anime, and more.",
    "logo": "images/logos/DualSHOCKERS.png",
    "links": {
      "website": "https://www.dualshockers.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ducky",
    "description": "A Taiwan-based manufacturer and part of the mechanical keyboard industry.",
    "logo": "images/logos/Ducky.png",
    "links": {
      "website": "https://ducky.global/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dueling Nexus",
    "description": "Dueling Nexus is a free to play Yu-Gi-Oh! Online game.",
    "logo": "images/logos/Dueling Nexus.png",
    "links": {
      "website": "https://duelingnexus.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dumpus",
    "description": "Stats for your Discord.",
    "logo": "images/logos/Dumpus.png",
    "links": {
      "website": "https://dumpus.app/",
      "android": "https://play.google.com/store/apps/details?id=app.dumpus.app",
      "ios": "https://apps.apple.com/us/app/dumpus-stats-for-discord/id6450952260"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EZ.Bio",
    "description": "Mark your digital presence with ease.",
    "logo": "images/logos/EZ Bio.png",
    "links": {
      "website": "https://e-z.bio/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EZ.Host",
    "description": "Media sharing made easy.",
    "logo": "images/logos/EZ Host.png",
    "links": {
      "website": "https://e-z.host/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EZ.gg",
    "description": "A platform providing various web services, utilities, and developer tools in a clean, accessible interface.",
    "logo": "images/logos/EZ.png",
    "links": {
      "website": "https://e-z.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ecosia",
    "description": "Ecosia is a search engine that prioritizes environmental sustainability by using its profits to plant trees.",
    "logo": "images/logos/Ecosia.png",
    "links": {
      "website": "https://www.ecosia.org/",
      "android": "https://play.google.com/store/apps/details?id=com.ecosia.android",
      "ios": "https://apps.apple.com/us/app/ecosia-search-to-plant-trees/id670881887",
      "macos": "https://www.ecosia.org/browser",
      "windows": "https://www.ecosia.org/browser",
      "chrome": "https://chromewebstore.google.com/detail/ecosia-the-search-engine/eedlgdlajadkbbjoobobefphmfkcchfk",
      "firefox": "https://addons.mozilla.org/en-US/firefox/addon/ecosia-the-green-search/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/ecosia-the-search-engin/fhfidmlnclkepgapcephbaciajegheco",
      "mac": "https://www.ecosia.org/browser"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "IconBrew",
    "description": "A free and open source icon pack. With hundreds of icons and new ones being added weekly.",
    "logo": "images/logos/IconBrew.png",
    "links": {
      "website": "https://iconbrew.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Method Of Action",
    "description": "Method of Action creates tools, toys and games to help you learn design, for free.",
    "logo": "images/logos/Method Of Action.png",
    "links": {
      "website": "https://method.ac/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Method Draw Vector",
    "description": "Method Draw is a simple and easy vector editor for the web.",
    "logo": "images/logos/Method Draw Vector.png",
    "links": {
      "website": "https://editor.method.ac/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Apps.Deals",
    "description": "Paid macOS apps that are on sale or are free at the moment.",
    "logo": "images/logos/Apps-Deals.png",
    "links": {
      "website": "https://www.apps.deals/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sidebar",
    "description": "Customizable Dock replacement for your Mac",
    "logo": "images/logos/Sidebar.png",
    "links": {
      "website": "https://sidebarapp.net/",
      "macos": "https://sidebarapp.net/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FridayGPT",
    "description": "FridayGPT gives you instant access to ChatGPT, voice-to-text and quick AI actions",
    "logo": "images/logos/FridayGPT.png",
    "links": {
      "website": "https://www.fridaygpt.app/",
      "macos": "https://www.fridaygpt.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sensei",
    "description": "The All-in-One Mac System Performance Monitoring Tool.",
    "logo": "images/logos/Sensei.png",
    "links": {
      "website": "https://cindori.com/sensei",
      "macos": "https://cindori.com/sensei"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DisplayBuddy",
    "description": "Control the brightness of monitors directly from your Mac",
    "logo": "images/logos/DisplayBuddy.png",
    "links": {
      "website": "https://displaybuddy.app/",
      "macos": "https://displaybuddy.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RunJS",
    "description": "The JavaScript playground for your desktop",
    "logo": "images/logos/RunJs.png",
    "links": {
      "website": "https://runjs.app/",
      "linux": "https://runjs.app/",
      "macos": "https://runjs.app/",
      "windows": "https://runjs.app/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Zen Mode",
    "description": "Avoid those awkward moments in public places or in presentation meetings in 1-click",
    "logo": "images/logos/Zen Mode.png",
    "links": {
      "website": "https://zenmode.app/",
      "macos": "https://zenmode.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Apptorium",
    "description": "Mac productivity apps that make your work faster and easier.",
    "logo": "images/logos/Apptorium.png",
    "links": {
      "website": "https://www.apptorium.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Badgeify",
    "description": "Add App Icons & Notifications to Your Mac Menu Bar",
    "logo": "images/logos/Badgeify.png",
    "links": {
      "website": "https://badgeify.app/",
      "macos": "https://badgeify.app/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Zipic",
    "description": "A fast and efficient image compression tool that helps you reduce file sizes without sacrificing visual quality.",
    "logo": "images/logos/Zipic.png",
    "links": {
      "website": "https://zipic.app/",
      "macos": "https://zipic.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Bezel",
    "description": "Mirror any iPhone on your Mac",
    "logo": "images/logos/Bezel.png",
    "links": {
      "website": "https://nonstrict.eu/bezel/",
      "macos": "https://nonstrict.eu/bezel/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pixen",
    "description": "pixel art editor for macOS and iOS",
    "logo": "images/logos/Pixen.png",
    "links": {
      "website": "https://pixenapp.com/",
      "ios": "https://apps.apple.com/us/app/pixen-pixel-art-editor/id1161880215",
      "macos": "https://apps.apple.com/us/app/pixen/id525180431"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Clockzones",
    "description": "Menubar app for macOS that helps you keep track of time across different zones",
    "logo": "images/logos/Clockzones.png",
    "links": {
      "website": "https://clockzones.app/",
      "macos": "https://apps.apple.com/us/app/clock-zones-world-time/id6737234391"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Superlist",
    "description": "Superlist generates your meeting notes, tracks follow-ups, and lets you manage all your tasks and notes in one place.",
    "logo": "images/logos/Superlist.png",
    "links": {
      "website": "https://www.superlist.com/",
      "android": "https://play.google.com/store/apps/details?id=com.superlist.superlist",
      "ios": "https://apps.apple.com/us/app/superlist-tasks-lists/id1547585270",
      "macos": "https://www.superlist.com/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TypingMind",
    "description": "TypingMind is a user interface (UI) that provides a more customizable and feature-rich way to interact with AI assistants.",
    "logo": "images/logos/TypingMind.png",
    "links": {
      "website": "https://www.typingmind.com/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PaletteBrain",
    "description": "Powerful and Customizable ChatGPT App for macOS",
    "logo": "images/logos/PaletteBrain.png",
    "links": {
      "website": "https://www.palettebrain.com/",
      "macos": "https://www.palettebrain.com/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Picasso",
    "description": "Design mockups for App Store.",
    "logo": "images/logos/Picasso.png",
    "links": {
      "website": "https://getpicasso.com/",
      "ios": "https://apps.apple.com/us/app/picasso-app-screenshot-studio/id6472062986",
      "macos": "https://apps.apple.com/us/app/picasso-app-screenshot-studio/id6472062986"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mercury Weather",
    "description": "Local Forecasts & Live Widgets",
    "logo": "images/logos/Mercury Weather.png",
    "links": {
      "website": "https://mercuryweather.app/",
      "ios": "https://apps.apple.com/us/app/mercury-weather/id1621800675",
      "macos": "https://apps.apple.com/us/app/mercury-weather/id1621800675"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Raena Ai",
    "description": "Transform your notes into your AI Tutor",
    "logo": "images/logos/Raena Ai.png",
    "links": {
      "website": "https://raena.ai/",
      "android": "https://play.google.com/store/apps/details?id=ai.raena.ai",
      "ios": "https://apps.apple.com/us/app/raena-ai/id6746026925"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SubManager",
    "description": "Track subscriptions in one place",
    "logo": "images/logos/SubManager.png",
    "links": {
      "website": "https://submanager.app/",
      "ios": "https://apps.apple.com/us/app/submanager-subscription-list/id1632853914",
      "macos": "https://apps.apple.com/us/app/submanager-subscription-list/id1632853914"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Parachute Apps",
    "description": "Helpful Apps for Mac, iPhone and iPad",
    "logo": "images/logos/Parachute Apps.png",
    "links": {
      "website": "https://www.parachuteapps.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "app.loshadki",
    "description": "Native applications, written in Swift, supporting Apple Silicon and Intel architectures",
    "logo": "images/logos/app.loshadki.png",
    "links": {
      "website": "https://loshadki.app/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wifilicious",
    "description": "Wifilicious transforms your Mac's menu bar into a powerful network monitoring station.",
    "logo": "images/logos/Wifilicious.png",
    "links": {
      "website": "https://wifilicious.app/",
      "macos": "https://apps.apple.com/us/app/wifilicious/id6563147813"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cosmil",
    "description": "A Refined MacOS File Explorer",
    "logo": "images/logos/Cosmil.png",
    "links": {
      "website": "https://cosmil.app/",
      "macos": "https://cosmil.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MeetingMenu",
    "description": "Manage, organize, and execute perfect meetings effortlessly, right from your Mac menu bar.",
    "logo": "images/logos/MeetingMenu.png",
    "links": {
      "website": "https://www.meetingmenu.app/",
      "macos": "https://apps.apple.com/us/app/meetingmenu/id6538714770"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pimosa",
    "description": "Simple Video, Photo & Music Editing Tools in one app",
    "logo": "images/logos/Pimosa.png",
    "links": {
      "website": "https://pimosa.app/",
      "macos": "https://pimosa.app/download",
      "windows": "https://pimosa.app/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Indie Goodies",
    "description": "We are a small, passionate indie team dedicated to crafting exceptional iOS and macOS apps that enrich lives and boost productivity.",
    "logo": "images/logos/Indie Goodies.png",
    "links": {
      "website": "https://indiegoodies.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Brilliant",
    "description": "Professional Visuals Everywhere You Work",
    "logo": "images/logos/Brilliant.png",
    "links": {
      "website": "https://brilliant.design/",
      "macos": "https://brilliant.design/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tower",
    "description": "Git client for Mac and Windows",
    "logo": "images/logos/Tower.png",
    "links": {
      "website": "https://www.git-tower.com/",
      "macos": "https://www.git-tower.com/mac",
      "windows": "https://www.git-tower.com/windows"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Link Unshortener",
    "description": "Link Unshortener is a Mac app that expands shortened web links, following redirects until it reveals the destination URL.",
    "logo": "images/logos/Link Unshortener.png",
    "links": {
      "website": "https://underpassapp.com/LinkUnshortener/",
      "macos": "https://underpassapp.com/LinkUnshortener/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EnConvo",
    "description": "A powerful AI-driven launcher and productivity tool that brings intelligence to your desktop workflow.",
    "logo": "images/logos/EnConvo.png",
    "links": {
      "website": "https://www.enconvo.com/",
      "macos": "https://www.enconvo.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "QuickWhisper",
    "description": "Transcribe audio, video, meetings, podcasts, any speech in seconds.",
    "logo": "images/logos/QuickWhisper.png",
    "links": {
      "website": "https://quickwhisper.app/",
      "macos": "https://quickwhisper.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Protego",
    "description": "A spell shield for your Reddit feed",
    "logo": "images/logos/Protego.png",
    "links": {
      "website": "https://getprotego.app/",
      "macos": "https://apps.apple.com/us/app/protego-for-reddit/id6737959724"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Spaces",
    "description": "Declutter & organize your workspace on macOS in one single click.",
    "logo": "images/logos/Spaces.png",
    "links": {
      "website": "https://spacesformac.xyz/",
      "macos": "https://spacesformac.xyz/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DevUtils",
    "description": "All-in-one Toolbox for Developers",
    "logo": "images/logos/DevUtils.png",
    "links": {
      "website": "https://devutils.com/",
      "macos": "https://devutils.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Xnapper",
    "description": "Snap Beautiful Screenshots Instantly.",
    "logo": "images/logos/Xnapper.png",
    "links": {
      "website": "https://xnapper.com/",
      "ios": "https://apps.apple.com/us/app/xnapper-beautiful-screenshot/id1630178233",
      "macos": "https://xnapper.com/"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hand Mirror",
    "description": "A one-click camera check, right from the menu bar",
    "logo": "images/logos/Hand Mirror.png",
    "links": {
      "website": "https://handmirror.app/",
      "macos": "https://apps.apple.com/us/app/hand-mirror/id1502839586"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tripsy",
    "description": "Tripsy is an all-in-one travel planning tool that simplifies the journey from start to finish. ",
    "logo": "images/logos/Tripsy.png",
    "links": {
      "website": "https://tripsy.app/",
      "ios": "https://apps.apple.com/br/app/tripsy-planejar-viagens-voos/id1429967544",
      "macos": "https://apps.apple.com/br/app/tripsy-planejar-viagens-voos/id1429967544"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Snippety",
    "description": "PRODUCTIVITY APP FOR macOS and iOS",
    "logo": "images/logos/Snippety.png",
    "links": {
      "website": "https://snippety.app/",
      "ios": "https://apps.apple.com/us/app/snippety-snippets-manager/id1530751461",
      "macos": "https://apps.apple.com/us/app/snippety-snippets-manager/id1530751461"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "BuhoCleaner",
    "description": "Mac cleaner app made for freeing up disk space and boosting your Mac performance.",
    "logo": "images/logos/BuhoCleaner.png",
    "links": {
      "website": "https://www.drbuho.com/buhocleaner",
      "macos": "https://www.drbuho.com/buhocleaner/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "kompressor",
    "description": "macOS Image Converter",
    "logo": "images/logos/kompressor.png",
    "links": {
      "website": "https://kompressor.app/",
      "macos": "https://apps.apple.com/us/app/image-converter-kompressor/id6468196574"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "File Garden",
    "description": "File Garden lets you upload any type of file to link elsewhere, forever for free.",
    "logo": "images/logos/File Garden.png",
    "links": {
      "website": "https://filegarden.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FediDB",
    "description": "A website that provides network statistics and insights into the Fediverse, a decentralized network of social media platforms.",
    "logo": "images/logos/FediDB.png",
    "links": {
      "website": "https://fedidb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FactorioBin",
    "description": "FactorioBin is a fast, simple way to share blueprints from the game Factorio with other players. ",
    "logo": "images/logos/FactorioBin.png",
    "links": {
      "website": "https://factoriobin.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Factorio",
    "description": "Factorio is a game in which you build and maintain factories.",
    "logo": "images/logos/Factorio.png",
    "links": {
      "website": "https://factorio.com/",
      "linux": "https://factorio.com/download",
      "macos": "https://factorio.com/download",
      "windows": "https://factorio.com/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FaceIt",
    "description": "The leading competitive platform for online multiplayer games, featuring advanced matchmaking and anti-cheat technology.",
    "logo": "images/logos/FaceIt.png",
    "links": {
      "website": "https://www.faceit.com/",
      "android": "https://play.google.com/store/apps/details?id=com.faceit.mobile",
      "ios": "https://apps.apple.com/gb/app/faceit-cs2-command-centre/id1105879914",
      "windows": "https://www.faceit.com/client"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Repeek",
    "description": "The browser extension that boosts you to the next level on FACEIT",
    "logo": "images/logos/Repeek.png",
    "links": {
      "website": "https://repeek.gg/",
      "chrome": "https://chromewebstore.google.com/detail/repeek-formerly-faceit-en/mokknliiomknodkdmpcellamkopbdmao",
      "firefox": "https://repeek.gg/",
      "edge": "https://repeek.gg/",
      "opera": "https://repeek.gg/"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Excel-DNA",
    "description": "Excel-DNA is an independent project that integrates .NET into Microsoft Excel to extend its native capabilities.",
    "logo": "images/logos/Excel-DNA.png",
    "links": {
      "website": "https://excel-dna.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Evowars",
    "description": "A fast-paced .io battle arena game where you evolve your warrior and dominate the leaderboard.",
    "logo": "images/logos/Evowars.png",
    "links": {
      "website": "https://evowars.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "EVE Online",
    "description": "Eve Online is a space-based, persistent-world massively-multiplayer online role-playing game developed and published by CCP Games.",
    "logo": "images/logos/EVEonline.png",
    "links": {
      "website": "https://www.eveonline.com/",
      "macos": "https://www.eveonline.com/",
      "windows": "https://www.eveonline.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ET: Legacy",
    "description": "An open source project that aims to create a fully compatible client and server for the popular online FPS game Wolfenstein: Enemy Territory ",
    "logo": "images/logos/etLegacy.png",
    "links": {
      "website": "https://www.etlegacy.com/",
      "android": "https://www.etlegacy.com/download",
      "linux": "https://www.etlegacy.com/download",
      "macos": "https://www.etlegacy.com/download",
      "windows": "https://www.etlegacy.com/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "etke.cc",
    "description": "Host your own Matrix chat server.",
    "logo": "images/logos/etke.cc.png",
    "links": {
      "website": "https://etke.cc/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "esportal",
    "description": "Esports competitions",
    "logo": "images/logos/esportal.png",
    "links": {
      "website": "https://esportal.com"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Escape from Tarkov",
    "description": "Escape from Tarkov is a multiplayer tactical first-person shooter video game in development by Battlestate Games for Microsoft Windows.",
    "logo": "images/logos/escapefromtarkov.png",
    "links": {
      "website": "https://www.escapefromtarkov.com/",
      "windows": "https://www.escapefromtarkov.com/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Epilogue",
    "description": "A software development team",
    "logo": "images/logos/Epilogue.png",
    "links": {
      "website": "https://epilogue.team/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Enlisted",
    "description": "Enlisted is a free squad-based multiplayer tactical first-person shooter developed by Darkflow Software and published by Gaijin Entertainment.",
    "logo": "images/logos/Enlisted.png",
    "links": {
      "website": "https://enlisted.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Enlightment",
    "description": "Enlightenment is a Window Manager, Compositor and Minimal Desktop for Linux (the primary platform), BSD and any other compatible UNIX system.",
    "logo": "images/logos/Enlightment.png",
    "links": {
      "website": "https://www.enlightenment.org/",
      "linux": "https://www.enlightenment.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Elite Dangerous",
    "description": "Elite Dangerous is an online space flight simulation game developed and published by Frontier Developments.",
    "logo": "images/logos/Elite Dangerous.png",
    "links": {
      "website": "https://www.elitedangerous.com/",
      "windows": "https://www.elitedangerous.com/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Apaxy V2",
    "description": "Apaxy is a customisable theme built to enhance the experience of browsing web directories. It uses the mod_autoindex Apache module—and some CSS—to override the default style of a directory listing.",
    "logo": "images/logos/Apaxy V2.png",
    "links": {
      "website": "https://fusengine.github.io/apaxy-v2"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FreeIPA",
    "description": "FreeIPA is an open-source, integrated identity management solution for Linux/UNIX networks.",
    "logo": "images/logos/FreeIPA.png",
    "links": {
      "website": "https://www.freeipa.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FrankerFaceZ",
    "description": "The Twitch enhancement suite",
    "logo": "images/logos/FrankerFaceZ.png",
    "links": {
      "website": "https://www.frankerfacez.com/",
      "chrome": "https://chromewebstore.google.com/detail/frankerfacez/fadndhdgpmmaapbmfcknlfgcflmmmieb",
      "firefox": "https://addons.mozilla.org/en-US/firefox/addon/frankerfacez/",
      "edge": "https://www.frankerfacez.com/",
      "opera": "https://repeek.gg/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LaunchBox",
    "description": "A free Windows and Android application that functions as a gaming frontend.",
    "logo": "images/logos/LaunchBox.png",
    "links": {
      "website": "https://launchbox-app.com/",
      "android": "https://launchbox-app.com/android-download",
      "windows": "https://launchbox-app.com/download"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "XDA Forums",
    "description": "The official forum for XDA Developers, a global community for developers and tech enthusiasts, primarily focused on Android and Windows mobile devices, where members discuss, share, and collaborate on operating systems, device development, custom ROMs, and other mobile technology topics",
    "logo": "images/logos/XDA.png",
    "links": {
      "website": "https://xdaforums.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tribler",
    "description": "Privacy using our Tor-inspired onion routing",
    "logo": "images/logos/Tribler.png",
    "links": {
      "website": "https://www.tribler.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LastOS",
    "description": "a Linux distribution based on Linux Mint and designed to provide a familiar Windows-like experience for users transitioning from Windows to Linux.",
    "logo": "images/logos/LastOS.png",
    "links": {
      "website": "https://home.lastos.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Forgejo",
    "description": "Forgejo is a self-hosted lightweight software forge.",
    "logo": "images/logos/Forgejo.png",
    "links": {
      "website": "https://forgejo.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Codeberg",
    "description": "Codeberg is a non-profit, community-led effort that provides Git hosting and other services for free and open source projects.",
    "logo": "images/logos/Codeberg.png",
    "links": {
      "website": "https://codeberg.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FlightlessMango",
    "description": "A website where users can upload performance benchmark logs generated by MangoHud, a popular open-source Linux tool that monitors and displays in-game performance metrics like FPS, CPU/GPU load, and temperatures.",
    "logo": "images/logos/FlightlessMango.png",
    "links": {
      "website": "https://flightlessmango.com"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FishShell",
    "description": "A command line shell for the 90s",
    "logo": "images/logos/FishShell.png",
    "links": {
      "website": "https://fishshell.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Filterlists",
    "description": "FilterLists is the independent, comprehensive directory of filter and host lists for advertisements, trackers, malware, and annoyances.",
    "logo": "images/logos/Filterlists.png",
    "links": {
      "website": "https://filterlists.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FilterBlade",
    "description": "FilterBlade is a popular web-based tool for creating and customizing loot filters for the video game Path of Exile (PoE) and its sequel, PoE 2",
    "logo": "images/logos/FilterBlade.png",
    "links": {
      "website": "https://www.filterblade.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Filmmaker Mode",
    "description": "Filmmaker Mode enables a more cinematic experience on UHD TV's by disabling all post-processing so the movie or television show is displayed as it was intended by the filmmaker.",
    "logo": "images/logos/Filmmaker mode.png",
    "links": {
      "website": "https://filmmakermode.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "sendvid",
    "description": "Upload and share videos fast, easily, and free",
    "logo": "images/logos/sendvid.png",
    "links": {
      "website": "https://sendvid.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "indiexpo",
    "description": "A platform for creators to distribute and gamers to discover, watch, and share indie games.",
    "logo": "images/logos/indiexpo.png",
    "links": {
      "website": "https://www.indiexpo.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "imgbox",
    "description": "Host JPG, GIF and PNG images up to 10MB each.",
    "logo": "images/logos/imgbox.png",
    "links": {
      "website": "https://imgbox.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "i3wm",
    "description": "i3 is a tiling window manager.",
    "logo": "images/logos/i3wm.png",
    "links": {
      "website": "https://i3wm.org/",
      "linux": "https://i3wm.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ImageGlass",
    "description": "A free, open-source, and lightweight image viewer for Windows that supports a wide range of image formats and offers extensive customization options for themes, languages, and app layout.",
    "logo": "images/logos/ImageGlass.png",
    "links": {
      "website": "https://imageglass.org/",
      "windows": "https://imageglass.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Game8",
    "description": "A website and media company that provides detailed video game walkthroughs, guides, tips, and reviews for various games, operating as a top gaming portal in Japan with a global presence.",
    "logo": "images/logos/Game8.png",
    "links": {
      "website": "https://game8.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Oxide 0xide",
    "description": "Oxide Computer is an efficient, rack-scale computing system complete with hardware and software.",
    "logo": "images/logos/0xide.png",
    "links": {
      "website": "https://oxide.computer/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ShadowFox",
    "description": "Goodbye sore eyes. Hello dark theme for FireFox.",
    "logo": "images/logos/ShadowFox.png",
    "links": {
      "website": "https://overdodactyl.github.io/ShadowFox/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Orbstack",
    "description": "Run Docker containers and Linux on mac",
    "logo": "images/logos/orbstack.png",
    "links": {
      "website": "https://orbstack.dev/",
      "macos": "https://orbstack.dev/download"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OpenRGB",
    "description": "Open source RGB lighting control that doesn't depend on manufacturer software.",
    "logo": "images/logos/OpenRGB.png",
    "links": {
      "website": "https://openrgb.org/",
      "linux": "https://openrgb.org/",
      "macos": "https://openrgb.org/",
      "windows": "https://openrgb.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OpenRazer",
    "description": "A community-led effort to support Razer peripherals on Linux.",
    "logo": "images/logos/OpenRazer.png",
    "links": {
      "website": "https://openrazer.github.io/",
      "linux": "https://openrazer.github.io/#download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OpenEmu",
    "description": "OpenEmu is an open-source multi-system video game emulator designed for macOS.",
    "logo": "images/logos/OpenEmu.png",
    "links": {
      "website": "https://openemu.org/",
      "macos": "https://openemu.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OpenDota",
    "description": "Open source Dota 2 data platform.",
    "logo": "images/logos/OpenDota.png",
    "links": {
      "website": "https://www.opendota.com/",
      "ios": "https://apps.apple.com/us/app/opendota/id1354762555"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "netlify",
    "description": "Deploy any modern frontend stack, from marketing sites to AI apps.",
    "logo": "images/logos/netlify.png",
    "links": {
      "website": "https://www.netlify.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Oldfag",
    "description": "A long-running Minecraft anarchy server known for its lawless environment and dedicated community.",
    "logo": "images/logos/Oldfag.png",
    "links": {
      "website": "https://oldfag.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OkayegBOT",
    "description": "A Twitch chat bot that lets people collect egs.",
    "logo": "images/logos/OkayegBOT.png",
    "links": {
      "website": "https://okayeg.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "UserDiag",
    "description": "UserDiag is a PC diagnostic tool that allows you to explore detailed information about your device.",
    "logo": "images/logos/UserDiag.png",
    "links": {
      "website": "https://userdiag.com/",
      "windows": "https://userdiag.com/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Urban Linker",
    "description": "Urban Linker is a French recruitment and headhunting firm specializing in the digital and tech sectors.",
    "logo": "images/logos/Urban Linker.png",
    "links": {
      "website": "https://urbanlinker.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Undertale",
    "description": "Undertale is a 2015 role-playing video game created by American indie developer Toby Fox.",
    "logo": "images/logos/Undertale.png",
    "links": {
      "website": "https://undertale.com/",
      "linux": "https://undertale.com/",
      "macos": "https://undertale.com/",
      "windows": "https://undertale.com/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The New Underground Cellar",
    "description": "Feel the thrill of your bottles being swapped out with rare cult wines on every purchase.",
    "logo": "images/logos/The New Underground Cellar.png",
    "links": {
      "website": "https://undergroundcellar.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ultra",
    "description": "Ultra is an all ESM React/Deno framework that is built for Suspense Server Side Rendering.",
    "logo": "images/logos/Ultra.png",
    "links": {
      "website": "https://ultrajs.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The United Federation Of Planets",
    "description": "A large, international online community founded in 2002 that celebrates the Star Trek universe, originally focusing on Star Trek games and now supporting a variety of other games and activities.",
    "logo": "images/logos/unfop.png",
    "links": {
      "website": "https://ufplanets.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vogons",
    "description": "A popular online forum and community for PC retrocomputing.",
    "logo": "images/logos/vogons.png",
    "links": {
      "website": "https://www.vogons.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vleer",
    "description": "Explore high-quality music with Vleer.",
    "logo": "images/logos/Vleer.png",
    "links": {
      "website": "https://vleer.app/",
      "macos": "https://vleer.app/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vixeny",
    "description": "Vixeny is a multi-paradigm web development framework.",
    "logo": "images/logos/Vixeny.png",
    "links": {
      "website": "https://vixeny.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "reveddit",
    "description": "A tool that allows users to view content removed from Reddit by moderators or automated filters, making otherwise hidden posts, comments, and user activities visible again.",
    "logo": "images/logos/reveddit.png",
    "links": {
      "website": "https://www.reveddit.com/",
      "chrome": "https://chrome.google.com/webstore/detail/reveddit-real-time/ickfhlplfbipnfahjbeongebnmojbnhm",
      "firefox": "https://addons.mozilla.org/en-US/firefox/addon/reveddit-real-time/"
    },
    "flags": {},
    "categories": {
      "extensions": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ReVanced",
    "description": "Customize your mobile experience through ReVanced by applying patches to your applications.",
    "logo": "images/logos/ReVanced.png",
    "links": {
      "website": "https://revanced.app/",
      "android": "https://revanced.app/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Retro Music Player",
    "description": "Offlibe Music Player for Android",
    "logo": "images/logos/Retro Music Player.png",
    "links": {
      "website": "https://retromusic.app/",
      "android": "https://play.google.com/store/apps/details?id=code.name.monkey.retromusic"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Restream4ME",
    "description": "An application, to take an existing video stream, and copy it to another web server.",
    "logo": "images/logos/Restream4ME.png",
    "links": {
      "website": "https://restream4me.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Reposilite",
    "description": "Lightweight and easy-to-use repository manager for Maven-based artifacts in the JVM ecosystem.",
    "logo": "images/logos/Reposilite.png",
    "links": {
      "website": "https://reposilite.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Replugged",
    "description": "A powerful and lightweight client mod for Discord that allows for deep customization through plugins and themes.",
    "logo": "images/logos/Replugged.png",
    "links": {
      "website": "https://replugged.dev/",
      "linux": "https://replugged.dev/download",
      "macos": "https://replugged.dev/",
      "windows": "https://replugged.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Reni's Guide",
    "description": "Reni's Guide on how to set up Penumbra, Glamourer and more!",
    "logo": "images/logos/Reni's Guide.png",
    "links": {
      "website": "https://reniguide.carrd.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Reelgood",
    "description": "Combines all the content that is available on over 150 streaming services in a single app, so you don't have to search through streaming services to find that one show or movie you want to watch.",
    "logo": "images/logos/Reelgood.png",
    "links": {
      "website": "https://reelgood.com/",
      "android": "https://play.google.com/store/apps/details?id=com.reelgoodapp.reelgood",
      "ios": "https://apps.apple.com/us/app/reelgood-streaming-guide/id1031391869"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Red Eclipse",
    "description": "A free arena shooter",
    "logo": "images/logos/Red Eclipse.png",
    "links": {
      "website": "https://www.redeclipse.net/",
      "linux": "https://www.redeclipse.net/download",
      "macos": "https://www.redeclipse.net/download",
      "windows": "https://www.redeclipse.net/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "REDasm",
    "description": "A cross platform disassembler with a modern codebase",
    "logo": "images/logos/REDasm.png",
    "links": {
      "website": "https://redasm.io/",
      "linux": "https://redasm.io/download",
      "windows": "https://redasm.io/downloads"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RazorSecure",
    "description": "Independent Rail Cyber Security Specialists",
    "logo": "images/logos/RazorSecure.png",
    "links": {
      "website": "https://www.razorsecure.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Razer",
    "description": "Gaming electronics company",
    "logo": "images/logos/Razer.png",
    "links": {
      "website": "https://www.razer.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ray.so",
    "description": "Turn your code into beautiful images",
    "logo": "images/logos/ray.so.png",
    "links": {
      "website": "https://ray.so/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rate House",
    "description": "Rate and track all your media in one place.",
    "logo": "images/logos/rate house.png",
    "links": {
      "website": "https://rate.house/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RaidPlan.io",
    "description": "A simple way for you to visualize and share your plan for raid encounters in World of Warcraft.",
    "logo": "images/logos/RaidPlan.io.png",
    "links": {
      "website": "https://raidplan.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Raider.io",
    "description": "Raider.IO is a World of Warcraft (WoW) Mythic+ and Raid Progression rankings site.",
    "logo": "images/logos/Raider.io.png",
    "links": {
      "website": "https://raider.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Raidbots",
    "description": "Run SimulationCraft in the cloud to optimize your World of Warcraft character.",
    "logo": "images/logos/Raidbots.png",
    "links": {
      "website": "https://www.raidbots.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "JustWatch",
    "description": "Find where to stream new, popular & upcoming entertainment with JustWatch.",
    "logo": "images/logos/JustWatch.png",
    "links": {
      "website": "https://www.justwatch.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Speedrun.com",
    "description": "The leading online platform for the speedrunning community, offering leaderboards, forums, guides, and a database to organize and track world records for completing video games as quickly as possible.",
    "logo": "images/logos/Speedrun.com.png",
    "links": {
      "website": "https://www.speedrun.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Replay",
    "description": "A tiny studio making apps for your Mac.",
    "logo": "images/logos/Replay.png",
    "links": {
      "website": "https://replay.software/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sleeve 2",
    "description": "Sleeve sits on the desktop, displaying and controlling the music you’re currently playing.",
    "logo": "images/logos/Sleeve 2.png",
    "links": {
      "website": "https://replay.software/sleeve",
      "macos": "https://replay.software/sleeve"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Umbra",
    "description": "Umbra is a simple menu bar app that lets you specify desktop wallpapers for both light & dark appearances in macOS.",
    "logo": "images/logos/Umbra.png",
    "links": {
      "website": "https://replay.software/umbra",
      "macos": "https://replaysoftware.gumroad.com/l/umbra-app"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {
      "MacOS": true
    },
    "on_home": true
  },
  {
    "name": "Upscayl",
    "description": "Upscayl lets you enhance your images using AI.",
    "logo": "images/logos/Upscayl.png",
    "links": {
      "website": "https://upscayl.org/",
      "linux": "https://upscayl.org/download",
      "macos": "https://upscayl.org/download",
      "windows": "https://upscayl.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Warp",
    "description": "Code with Al agents. Prompt, review, edit, and ship.",
    "logo": "images/logos/Warp.png",
    "links": {
      "website": "https://www.warp.dev/",
      "linux": "https://www.warp.dev/download",
      "macos": "https://www.warp.dev/download",
      "windows": "https://www.warp.dev/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sidebar Calendar",
    "description": "Sidebar Calendar lives on your screen's edge and menu bar.",
    "logo": "images/logos/Sidebar Calendar.png",
    "links": {
      "website": "https://sidebarcalendar.com/",
      "macos": "https://apps.apple.com/us/app/sidebar-calendar/id6744621424"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "DockFlow",
    "description": "Custom docks for diffrent workflows",
    "logo": "images/logos/DockFlow.png",
    "links": {
      "website": "https://dockflow.appitstudio.com/",
      "macos": "https://dockflow.appitstudio.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Maccy",
    "description": "Clipboard manager for macOS which does one job - keep your copy history at hand.",
    "logo": "images/logos/Maccy.png",
    "links": {
      "website": "https://maccy.app/",
      "macos": "https://github.com/p0deje/Maccy?tab=readme-ov-file#install"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "MacWhisper",
    "description": "Quickly and easily transcribe audio files into text with OpenAI's state-of-the-art transcription technology Whisper as well as Nvidia Parakeet.",
    "logo": "images/logos/MacWhisper.png",
    "links": {
      "website": "https://goodsnooze.gumroad.com/l/macwhisper",
      "macos": "https://goodsnooze.gumroad.com/l/macwhisper"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "monocle",
    "description": "Blur other windows while focused on one to stay focused.",
    "logo": "images/logos/monocle.png",
    "links": {
      "website": "https://monocle.heyiam.dk/",
      "macos": "https://iamdk.gumroad.com/l/monocle-elegant-macos-window-blur-focus"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {
      "MacOS": true
    },
    "on_home": true
  },
  {
    "name": "DockDoor",
    "description": "Effortless Alt+Tab switching and dock previews that respect your privacy.",
    "logo": "images/logos/DockDoor.png",
    "links": {
      "website": "https://dockdoor.net/",
      "macos": "https://dockdoor.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "open-source": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Substage",
    "description": "Convert, organize and more: control your Mac and its files with natural language.",
    "logo": "images/logos/Substage.png",
    "links": {
      "website": "https://selkie.design/substage/",
      "macos": "https://selkie.design/substage/"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Folder Preview",
    "description": "Quick look extension for folders.",
    "logo": "images/logos/Folder Preview.png",
    "links": {
      "website": "https://anybox.ltd/folder-preview",
      "macos": "https://apps.apple.com/us/app/folder-preview/id6698876601"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Anybox Ltd",
    "description": "Useful apple apps that boost productivity.",
    "logo": "images/logos/Anybox Ltd.png",
    "links": {
      "website": "https://anybox.ltd/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Antinote",
    "description": "Beautiful productivity scratchpad.",
    "logo": "images/logos/Antinote.png",
    "links": {
      "website": "https://antinote.io/",
      "macos": "https://antinote.io/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Game Rant GameRant",
    "description": "Game Rant delivers content written by gamers for gamers with an emphasis on news, reviews, unique features, and interviews.",
    "logo": "images/logos/GameRant.png",
    "links": {
      "website": "https://gamerant.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Just 5 News",
    "description": "Just 5 latest headlines you need right now.",
    "logo": "images/logos/Just 5 News.png",
    "links": {
      "website": "https://justfive.news/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Json Diff",
    "description": "A web-based tool that compares two JSON documents and highlights the differences in a visual format, making it easier to identify additions, deletions, and modifications to the data.",
    "logo": "images/logos/Json Diff.png",
    "links": {
      "website": "https://json-diff.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Jsitor",
    "description": "Online JS, CSS and HTML editor.",
    "logo": "images/logos/Jsitor.png",
    "links": {
      "website": "https://jsitor.com/",
      "ios": "https://apps.apple.com/us/app/jsitor-js-html-css-editor/id1455784773"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "JSBEN.CH",
    "description": "JSBEN.CH is an online performance benchmarking tool for JavaScript.",
    "logo": "images/logos/JSBEN.CH.png",
    "links": {
      "website": "https://jsben.ch/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lemmy",
    "description": "A forum and link aggregator for the fediverse.",
    "logo": "images/logos/Lemmy.png",
    "links": {
      "website": "https://join-lemmy.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Joey Drew Studios",
    "description": "The creators behind the Bendy franchise.",
    "logo": "images/logos/Joey Drew Studios.png",
    "links": {
      "website": "https://joeydrewstudios.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "jigsawpuzzles.io",
    "description": "Solve jigsaw puzzles online with other people.",
    "logo": "images/logos/jigsawpuzzles.io.png",
    "links": {
      "website": "https://jigsawpuzzles.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Jetify",
    "description": "Autonomous End to End Testing With AI",
    "logo": "images/logos/jetify.png",
    "links": {
      "website": "https://www.jetify.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Jekyllrb",
    "description": "Transform your plain text into static websites and blogs.",
    "logo": "images/logos/jekyllrb.png",
    "links": {
      "website": "https://jekyllrb.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "JaxCore",
    "description": "JaxCore is a beautiful, functional, customizable set of tools and widgets to spice up your desktop.",
    "logo": "images/logos/JaxCore.png",
    "links": {
      "website": "https://jaxcore.app/",
      "windows": "https://jaxcore.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kyun",
    "description": "Kyun.host is a private, next-generation cloud computing service based in Bucharest, Romania.",
    "logo": "images/logos/kyun.png",
    "links": {
      "website": "https://kyun.host/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "kuik.li",
    "description": "A minimalist and efficient URL shortener for creating clean, trackable links for social media and sharing.",
    "logo": "images/logos/kuik.li.png",
    "links": {
      "website": "https://kuik.li/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kristal",
    "description": "Kristal is a powerful DELTARUNE fangame and battle engine.",
    "logo": "images/logos/Kristal.png",
    "links": {
      "website": "https://kristal.cc/",
      "windows": "https://kristal.cc/wiki/downloading"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KodeNames.io",
    "description": "Kodenames is a free online multiplayer (4,6,8 players) word game you can play against & with your friends in teams of 2",
    "logo": "images/logos/KodeNames.io.png",
    "links": {
      "website": "https://kodenames.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kocowa",
    "description": "Stream the largest collection of Korean content with multi-language subtitles.",
    "logo": "images/logos/kocowa.png",
    "links": {
      "website": "https://www.kocowa.com/",
      "android": "https://play.google.com/store/apps/details?id=com.kocowa.android.mobile",
      "ios": "https://apps.apple.com/au/app/kocowa-k-dramas-movies-tv/id1222389576"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KittyBot",
    "description": "A versatile Discord bot designed to enhance community engagement with fun commands, moderation, and utilities.",
    "logo": "images/logos/Kittybot.png",
    "links": {
      "website": "https://kittybot.de/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "khor",
    "description": "USB cables and keyboard accessories store in Italy",
    "logo": "images/logos/khor.png",
    "links": {
      "website": "https://khor.store/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kubuntu Focus",
    "description": "A company that develops and sells computers with a highly customized and integrated Kubuntu Linux operating system.",
    "logo": "images/logos/Kubuntu Focus.png",
    "links": {
      "website": "https://kfocus.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kestra",
    "description": "Unify orchestration for all engineers. Build and govern all your workflows — Everything-as-Code, and from the UI.",
    "logo": "images/logos/Kestra.png",
    "links": {
      "website": "https://kestra.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kernel",
    "description": "The mod loader for Electron",
    "logo": "images/logos/Kernel.png",
    "links": {
      "website": "https://kernel.fish/",
      "windows": "https://kernel.fish/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KBH Games",
    "description": "A website that adds new games every day to create the best and largest collection of online games.",
    "logo": "images/logos/KBH Games.png",
    "links": {
      "website": "https://kbhgames.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kazi",
    "description": "KAZI Magazine is the heartbeat of modern hip-hop, delivering fresh, daily content on the latest trends, artists, and tracks shaping the scene.",
    "logo": "images/logos/Kazi.png",
    "links": {
      "website": "https://kazimagazine.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kalence",
    "description": "Mass Effect 3 Character Builder.",
    "logo": "images/logos/Kalence.png",
    "links": {
      "website": "https://kalence2.github.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kiru",
    "description": "A batteries-included, easy-to-use rendering library with a tiny footprint",
    "logo": "images/logos/Kiru.png",
    "links": {
      "website": "https://kirujs.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "KAD",
    "description": "Block websites that extort money and data.",
    "logo": "images/logos/KAD.png",
    "links": {
      "website": "https://kadantiscam.netlify.app/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lainchan",
    "description": "Lainchan, a cyberpunk-themed image board that is based off the show Serial Experiments Lain.",
    "logo": "images/logos/lainchan.png",
    "links": {
      "website": "https://lainchan.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LandChad.net",
    "description": "This is LandChad.net, a site dedicated to turning internet peasants into Internet Landlords by showing them how to setup websites, email servers, chat servers and everything in between.",
    "logo": "images/logos/LandChad.net.png",
    "links": {
      "website": "https://landchad.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LARBS",
    "description": "LARBS is an efficient shell script that will install a fully-featured tiling window manager-based system on any Arch or Artix Linux-based system, without any of the routine of manual post-install processes and configuration.",
    "logo": "images/logos/LARBS.png",
    "links": {
      "website": "https://larbs.xyz/",
      "linux": "https://larbs.xyz/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "OSU!",
    "description": "free-to-win rhythm game",
    "logo": "images/logos/OSU.png",
    "links": {
      "website": "https://osu.ppy.sh/",
      "linux": "https://osu.ppy.sh/home/download",
      "macos": "https://osu.ppy.sh/home/download",
      "windows": "https://osu.ppy.sh/home/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lemmy.World",
    "description": "A popular instance, of Lemmy, a free and open-source social media platform that is a decentralized alternative to Reddit.",
    "logo": "images/logos/Lemmy.World.png",
    "links": {
      "website": "https://lemmy.world/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lemmy Explorer",
    "description": "Instance and Community Explorer for Lemmy.",
    "logo": "images/logos/Lemmy Explorer.png",
    "links": {
      "website": "https://lemmyverse.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lichess",
    "description": "Lichess is a free, libre, no-ads, open source chess server.",
    "logo": "images/logos/lichess.org.png",
    "links": {
      "website": "https://lichess.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lightweight PDF 2",
    "description": "A PDF compressor for Mac.",
    "logo": "images/logos/Lightweight PDF 2.png",
    "links": {
      "website": "https://lightweightpdf.com/",
      "macos": "https://apps.apple.com/us/app/lightweight-pdf-2/id6737913061"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Linear",
    "description": "Linear is a purpose-built tool for planning and building products.",
    "logo": "images/logos/Linear.png",
    "links": {
      "website": "https://linear.app/",
      "android": "https://play.google.com/store/apps/details?id=app.linear",
      "ios": "https://apps.apple.com/us/app/linear-mobile/id1645587184",
      "macos": "https://linear.app/download",
      "windows": "https://linear.app/download"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lingva Translate",
    "description": "Alternative front-end for Google Translate",
    "logo": "images/logos/Lingva.png",
    "links": {
      "website": "https://lingva.ml/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "lipu Linku",
    "description": "Linku is a dataset with many translations, a Discord bot, a website, and an annual survey created by kala Asi and contributed to by jan Ke Tami, jan Telesi, jan Kekan San, and many others for the purpose of collecting and displaying toki pona dictionary information accurate to current use.",
    "logo": "images/logos/lipu Linku.png",
    "links": {
      "website": "https://linku.la/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Team Liquid",
    "description": "An Esports organization",
    "logo": "images/logos/Team Liquid.png",
    "links": {
      "website": "https://teamliquid.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lishogi",
    "description": "Lishogi is a free, libre, no-ads, open source shogi server.",
    "logo": "images/logos/lishogi.org.png",
    "links": {
      "website": "https://lishogi.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Listen.moe",
    "description": "Listen.moe is a website and app that streams Japanese music, with a focus on anime opening and ending themes.",
    "logo": "images/logos/Listen.moe.png",
    "links": {
      "website": "https://listen.moe/",
      "macos": "https://listen.moe/",
      "windows": "https://listen.moe/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Liveweave",
    "description": "Liveweave is a HTML, CSS & JavaScript editor with real-time (live) preview.",
    "logo": "images/logos/Liveweave.png",
    "links": {
      "website": "https://liveweave.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LoLdle",
    "description": "Guess League of Legends champions",
    "logo": "images/logos/LoLdle.png",
    "links": {
      "website": "https://loldle.net/",
      "android": "https://play.google.com/store/apps/details?id=com.benjaminwidawski.loldle",
      "ios": "https://apps.apple.com/us/app/loldle-official/id6449491946"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "lolesports League Of Lengends",
    "description": "The official hub for professional competitions of the video game League of Legends.",
    "logo": "images/logos/lolesports.png",
    "links": {
      "website": "https://lolesports.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lutris",
    "description": "Lutris is a video game preservation platform aiming to keep your video game collection up and running for the years to come.",
    "logo": "images/logos/Lutris.png",
    "links": {
      "website": "https://lutris.net/",
      "linux": "https://lutris.net/downloads"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lospec",
    "description": "A home for digitally restrictive art. A place that creates online tools for people creating pixel art and other restrictive digital art.",
    "logo": "images/logos/Lospec.png",
    "links": {
      "website": "https://lospec.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Lumina",
    "description": "Lightweight Desktop Environment",
    "logo": "images/logos/lumina.png",
    "links": {
      "website": "https://lumina-desktop.org/",
      "linux": "https://lumina-desktop.org/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "richup.io",
    "description": "A web-based Monopoly alternative.",
    "logo": "images/logos/richup.io.png",
    "links": {
      "website": "https://richup.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "6Mans Rocket League",
    "description": "The only competitive Rocket League PUG platform, used by over 75,000 players.",
    "logo": "images/logos/6Mans.png",
    "links": {
      "website": "https://www.rl6mans.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Robinhood",
    "description": "Robinhood is a financial services company offering commission-free trading of stocks, options, ETFs, and cryptocurrencies through a mobile app and website.",
    "logo": "images/logos/Robinhood.png",
    "links": {
      "website": "https://robinhood.com/",
      "android": "https://play.google.com/store/apps/details?id=com.robinhood.android",
      "ios": "https://apps.apple.com/us/app/robinhood-trading-investing/id938003185"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Roleypoly",
    "description": "A Discord bot to make self-assignable roles better.",
    "logo": "images/logos/Roleypoly.png",
    "links": {
      "website": "https://roleypoly.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vue Router",
    "description": "The official Router for Vue.js",
    "logo": "images/logos/Vue Router.png",
    "links": {
      "website": "https://router.vuejs.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vue.js",
    "description": "An approachable, performant and versatile framework for building web user interfaces.",
    "logo": "images/logos/Vue.js.png",
    "links": {
      "website": "https://vuejs.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rtbyte",
    "description": "Your one-stop-shop for Discord server moderation.",
    "logo": "images/logos/Rtbyte.png",
    "links": {
      "website": "https://rtbyte.xyz/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "rTS Wiki r/Techsupport",
    "description": "The official documentation site for r/Techsupport, built by the community for the community.",
    "logo": "images/logos/rTS Wiki.png",
    "links": {
      "website": "https://rtech.support/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ruffle",
    "description": "An open source Flash Player emulator",
    "logo": "images/logos/ruffle.png",
    "links": {
      "website": "https://ruffle.rs/",
      "linux": "https://ruffle.rs/downloads",
      "macos": "https://ruffle.rs/downloads",
      "windows": "https://ruffle.rs/downloads",
      "chrome": "https://chromewebstore.google.com/detail/ruffle-flash-emulator/donbcfbmhbcapadipfkeojnmajbakjdc",
      "firefox": "https://addons.mozilla.org/firefox/addon/ruffle_rs",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/ruffle/pipjjbgofgieknlpefmcckdmgaaegban",
      "mac": "https://ruffle.rs/downloads"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "extensions": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rune Changer",
    "description": "Runechanger is a open source league of legends toolkit designed to streamline certain elements of the game including but not limited to making and picking your runes, accepting the queue and providing extra storage space for your self-made runes.",
    "logo": "images/logos/Rune Changer.png",
    "links": {
      "website": "https://runechanger.stirante.com/",
      "windows": "https://runechanger.stirante.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Runic Games",
    "description": "The acclaimed indie studio behind the Torchlight series and the artistic puzzle-adventure game Hob.",
    "logo": "images/logos/Runic Games.png",
    "links": {
      "website": "https://www.runicgames.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "RusherHack",
    "description": "RusherHack is a Player Assistance Utility Mod with features designed specifically for anarchy servers like 2b2t,",
    "logo": "images/logos/RusherHack.png",
    "links": {
      "website": "https://rusherhack.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rust",
    "description": "Survival/open world video game.",
    "logo": "images/logos/Rust.png",
    "links": {
      "website": "https://rust.facepunch.com/",
      "macos": "https://store.steampowered.com/app/252490/Rust/",
      "windows": "https://store.steampowered.com/app/252490/Rust/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Rythm",
    "description": "A Discord music bot and full-featured streaming platform.",
    "logo": "images/logos/Rythm.png",
    "links": {
      "website": "https://rythm.fm/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "redlib. safereddit",
    "description": "A public instance of Redlib, a privacy-focused, open-source front end for browsing Reddit. It allows users to view content from Reddit without being tracked by the platform's ads or trackers",
    "logo": "images/logos/redlib..png",
    "links": {
      "website": "https://safereddit.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Saints Row",
    "description": "Saints Row is a series of action-adventure video games created by Volition and published by THQ and Deep Silver.",
    "logo": "images/logos/Saints Row.png",
    "links": {
      "website": "https://www.deepsilver.com/games/saints-row",
      "windows": "https://www.deepsilver.com/games/saints-row"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Satisfactory Factories",
    "description": "Satisfactory Factories is a web-based tool for planning and managing factories and logistics in the game Satisfactory.",
    "logo": "images/logos/Satisfactory Factories.png",
    "links": {
      "website": "https://satisfactory-factories.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SchildiChat",
    "description": "SchildiChat is a feature-rich messenger for Matrix based on Element with some extras and tweaks.",
    "logo": "images/logos/SchildiChat.png",
    "links": {
      "website": "https://schildi.chat/",
      "android": "https://play.google.com/store/apps/details?id=de.spiritcroc.riotx",
      "linux": "https://schildi.chat/desktop/",
      "macos": "https://schildi.chat/desktop/",
      "windows": "https://schildi.chat/desktop/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Deep Silver",
    "description": "A global video game publisher and developer known for franchises like Metro, Saints Row, and Dead Island.",
    "logo": "images/logos/Deep Silver.png",
    "links": {
      "website": "https://www.deepsilver.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "facepunch",
    "description": "The creative studio behind massive hits like Garry's Mod and the survival game Rust.",
    "logo": "images/logos/facepunch.png",
    "links": {
      "website": "https://facepunch.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PS2Alerts",
    "description": "A community-run website that tracks and displays detailed statistics for the massively multiplayer online first-person shooter game, PlanetSide 2.",
    "logo": "images/logos/PS2Alerts.png",
    "links": {
      "website": "https://ps2alerts.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Odysee",
    "description": "Odysee is an American decentralized video hosting platform, built on the LBRY blockchain.",
    "logo": "images/logos/odysee.png",
    "links": {
      "website": "https://odysee.com/",
      "android": "https://play.google.com/store/apps/details?id=com.odysee.app",
      "ios": "https://apps.apple.com/us/app/odysee/id1539444143"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NVSTly",
    "description": "Track and Share Trades",
    "logo": "images/logos/NVSTly.png",
    "links": {
      "website": "https://nvstly.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NowPlaying",
    "description": "A web-based music visualizer and mini-player that provides real-time Spotify song information for streaming purposes.",
    "logo": "images/logos/NowPlaying.png",
    "links": {
      "website": "https://nowplayi.ng/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Notesnook",
    "description": "A fully open source & end-to-end encrypted note taking alternative to Evernote.",
    "logo": "images/logos/Notesnook.png",
    "links": {
      "website": "https://notesnook.com/",
      "android": "https://play.google.com/store/apps/details?id=com.streetwriters.notesnook",
      "ios": "https://apps.apple.com/us/app/notesnook-private-note-taking/id1544027013",
      "linux": "https://notesnook.com/downloads/",
      "macos": "https://notesnook.com/downloads/",
      "windows": "https://notesnook.com/downloads/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "No Man's Sky",
    "description": "No Man's Sky is an action-adventure survival game developed and published by Hello Games.",
    "logo": "images/logos/No Mans Sky.png",
    "links": {
      "website": "https://www.nomanssky.com/",
      "macos": "https://www.nomanssky.com/",
      "windows": "https://www.nomanssky.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NixOS & Flakes Book",
    "description": "An unofficial book for beginners.",
    "logo": "images/logos/NixOS & Flakes Book.png",
    "links": {
      "website": "https://nixos-and-flakes.thiscute.world/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nikse.dk",
    "description": "Subtitle Edit is a free (open source) editor for video subtitles.",
    "logo": "images/logos/Nikse.dk.png",
    "links": {
      "website": "https://nikse.dk/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NightLight",
    "description": "Track Your Dead by Daylight Stats.",
    "logo": "images/logos/NightLight.png",
    "links": {
      "website": "https://nightlight.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "nheko",
    "description": "A native desktop app for Matrix that feels more like a mainstream chat app.",
    "logo": "images/logos/nheko.png",
    "links": {
      "website": "https://nheko-reborn.github.io/",
      "linux": "https://nheko-reborn.github.io/",
      "macos": "https://nheko-reborn.github.io/",
      "windows": "https://nheko-reborn.github.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NH Switch Guide",
    "description": "A collaboration from Nintendo Homebrew's Discord community, getting you from a stock Switch to Atmosphère.",
    "logo": "images/logos/NH Switch Guide.png",
    "links": {
      "website": "https://switch.hacks.guide/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hacks.Guide",
    "description": "Complete guides to homebrew and custom firmware for various devices.",
    "logo": "images/logos/Hacks.Guide.png",
    "links": {
      "website": "https://hacks.guide/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "New Game Plus",
    "description": "A website and online community focused on video game mods and discussions.",
    "logo": "images/logos/newgameplus.png",
    "links": {
      "website": "http://ngplus.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NFSMods Need For Speed",
    "description": "The Need for Speed modding community.",
    "logo": "images/logos/NFSMods.png",
    "links": {
      "website": "https://nfsmods.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NexusMods",
    "description": "The world's largest community for video game mods, supporting thousands of games and millions of users.",
    "logo": "images/logos/NexusMods.png",
    "links": {
      "website": "https://www.nexusmods.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hero",
    "description": "Make beautiful websites regardless of your design experience.",
    "logo": "images/logos/hero.png",
    "links": {
      "website": "https://www.heroui.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Next.js",
    "description": "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    "logo": "images/logos/Next.js.png",
    "links": {
      "website": "https://nextjs.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Next.ts",
    "description": "Learn how to add TypeScript to your Next.js project.",
    "logo": "images/logos/Next.ts.png",
    "links": {
      "website": "https://nextts.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nextron Minecraft",
    "description": "Nextron is a Minecraft plugin which is meant to replace any other plugins you use at the moment.",
    "logo": "images/logos/Nextron.png",
    "links": {
      "website": "https://nextron.pandadev.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nerimity",
    "description": "A modern and sleek chat app.",
    "logo": "images/logos/Nerimity.png",
    "links": {
      "website": "https://nerimity.com/",
      "linux": "https://nerimity.com/",
      "windows": "https://nerimity.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NationsGlory",
    "description": "A French modded Minecraft server established in 2013 that focuses on geopolitics with players forming countries and alliances on a reconstructed Earth map.",
    "logo": "images/logos/NationsGlory.png",
    "links": {
      "website": "https://nationsglory.fr/",
      "linux": "https://nationsglory.fr/",
      "macos": "https://nationsglory.fr/",
      "windows": "https://nationsglory.fr/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NamesLoL",
    "description": "Find your next League of Legends name.",
    "logo": "images/logos/NamesLoL.png",
    "links": {
      "website": "https://www.nameslol.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "N7 HQ",
    "description": "A BioWare website featuring stat-tracking and gameplay data for Mass Effect 3.",
    "logo": "images/logos/N7 HQ.png",
    "links": {
      "website": "https://n7hq.masseffect.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hyper",
    "description": "Hyper is an Electron-based terminal.",
    "logo": "images/logos/Hyper.png",
    "links": {
      "website": "https://hyper.is/",
      "linux": "https://hyper.is/",
      "macos": "https://hyper.is/",
      "windows": "https://hyper.is/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Humble Games",
    "description": "Humble Games is an indie video games publisher owned by Humble Bundle.",
    "logo": "images/logos/Humble Games.png",
    "links": {
      "website": "https://www.humblegames.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Humble Bundle",
    "description": "Humble Bundle sells games, ebooks, software, and other digital content.",
    "logo": "images/logos/Humble.png",
    "links": {
      "website": "https://www.humblebundle.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Warframe Hub",
    "description": "A fan-created hub that collects and displays real-time data from the game Warframe's public API. ",
    "logo": "images/logos/Warframe Hub.png",
    "links": {
      "website": "https://hub.warframestat.us/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HQ Apps",
    "description": "The website for a developer who creates &quot;broken&quot; and parody apps.",
    "logo": "images/logos/HQ Apps.png",
    "links": {
      "website": "https://hqapps.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "How Long To Beat",
    "description": "Track what you're playing, discover new games.",
    "logo": "images/logos/How Long To Beat.png",
    "links": {
      "website": "https://howlongtobeat.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HostBalls",
    "description": "An online forum and community for web hosting industry veterans and tech enthusiasts.",
    "logo": "images/logos/HostBalls.png",
    "links": {
      "website": "https://hostballs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hit N Mix",
    "description": "The World’s First AI DAW",
    "logo": "images/logos/Hit Mix.png",
    "links": {
      "website": "https://hitnmix.com/",
      "macos": "https://hitnmix.com/",
      "windows": "https://hitnmix.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hero Damage",
    "description": "See the latest World of Warcraft simulations results for every class.",
    "logo": "images/logos/Hero Damage.png",
    "links": {
      "website": "https://www.herodamage.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hedge Wars",
    "description": "A free, open-source, turn-based artillery game featuring fighting hedgehogs.",
    "logo": "images/logos/Hedge Wars.png",
    "links": {
      "website": "https://hedgewars.org/",
      "linux": "https://hedgewars.org/download.html",
      "macos": "https://hedgewars.org/download.html",
      "windows": "https://hedgewars.org/download.html"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Heckerbot",
    "description": "Heckerbot keeps your discord community secure and entertained.",
    "logo": "images/logos/Heckerbot.png",
    "links": {
      "website": "https://heckerbot.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Heavybit",
    "description": "The Leading Investor in Enterprise Infrastructure.",
    "logo": "images/logos/Heavybit.png",
    "links": {
      "website": "https://www.heavybit.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hardware Times",
    "description": "Hardware Times is an Indian-based online tech publication founded in 2019 that specializes in computer hardware and PC gaming, covering news, reviews, and analysis, particularly for audiences in North America, Europe, and India. ",
    "logo": "images/logos/HardwareTimes.png",
    "links": {
      "website": "https://hardwaretimes.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HardStuck",
    "description": "A website and a social community centered around the game Guild Wars 2 that provides resources and tools to help players learn, improve, and engage with the game. ",
    "logo": "images/logos/HardStuck.png",
    "links": {
      "website": "https://hardstuck.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "HardForum",
    "description": "An online community where people can discuss technology-related topics, ask questions, and share their experiences.",
    "logo": "images/logos/HardForum.png",
    "links": {
      "website": "https://hardforum.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Halo Waypoint",
    "description": "Halo is a military science fiction video game series and media franchise, originally developed by Bungie and currently managed and developed by Halo Studios, part of Microsoft's Xbox Game Studios.",
    "logo": "images/logos/Halo Waypoint.png",
    "links": {
      "website": "https://www.halowaypoint.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hacktoberfest",
    "description": "A place for developers to find open-source GitHub projects to contribute to in Hacktoberfest.",
    "logo": "images/logos/Hacktoberfest.png",
    "links": {
      "website": "https://finder.usmans.me/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hackthissite",
    "description": "A free, safe and legal training ground for hackers to test and expand their ethical hacking skills with challenges, CTFs, and more.",
    "logo": "images/logos/Hackthissite.png",
    "links": {
      "website": "https://hackthissite.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hack The Box",
    "description": "Build and sustain high-performing cyber teams keeping your organization protected against real world threats.",
    "logo": "images/logos/Hack The Box.png",
    "links": {
      "website": "https://www.hackthebox.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hack Forums",
    "description": "Hack Forums (often shortened to 'HF') is an Internet forum dedicated to discussions related to hacker culture and computer security.",
    "logo": "images/logos/Hack Forums.png",
    "links": {
      "website": "https://hackforums.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hacker Typer",
    "description": "A joke website that simulates a hacking scene by displaying a terminal window where any key press results in code appearing on the screen.",
    "logo": "images/logos/Hacker Typer.png",
    "links": {
      "website": "https://hackertyper.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hackaday.io",
    "description": "Hackaday.io is the world's largest collaborative hardware development community.",
    "logo": "images/logos/Hackaday.io.png",
    "links": {
      "website": "https://hackaday.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Hackaday",
    "description": "a website and community focused on &quot;hacking,&quot; which involves the creative and collaborative process of building, repairing, and modifying technology, electronics, and hardware.",
    "logo": "images/logos/Hackaday.png",
    "links": {
      "website": "https://hackaday.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Zero Day Initiative",
    "description": "Rewarding security researchers for privately disclosing vulnerabilities",
    "logo": "images/logos/Zero Day Initiative.png",
    "links": {
      "website": "https://www.zerodayinitiative.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "your.gg",
    "description": "Analytics/AI to help players win.",
    "logo": "images/logos/your.gg.png",
    "links": {
      "website": "https://your.gg/en"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "youdj dj",
    "description": "The easiest DJ software",
    "logo": "images/logos/youdj.png",
    "links": {
      "website": "https://you.dj/",
      "android": "https://play.google.com/store/apps/details?id=you.dj",
      "ios": "https://apps.apple.com/us/app/youdj-mixer-easy-dj-app/id1459666155",
      "linux": "https://you.dj/download-dj-software",
      "macos": "https://you.dj/download-dj-software",
      "windows": "https://you.dj/download-dj-software"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Xonotic",
    "description": "Xonotic is an addictive arena-style first person shooter with crisp movement and a wide array of weapons.",
    "logo": "images/logos/xonotic.png",
    "links": {
      "website": "https://xonotic.org/",
      "linux": "https://xonotic.org/download",
      "macos": "https://xonotic.org/download",
      "windows": "https://xonotic.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "XMission",
    "description": "Shared Hosting, Managed Cloud, and Colocation include everything required to build and maintain a successful website or web application—from.",
    "logo": "images/logos/xmission.png",
    "links": {
      "website": "https://xmission.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "XeroLinux",
    "description": "Discover a Distro Fueled by Passion for GNU/Linux.",
    "logo": "images/logos/XeroLinux.png",
    "links": {
      "website": "https://xerolinux.xyz/",
      "linux": "https://xerolinux.xyz/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "xelA",
    "description": "Discord Moderation Bot",
    "logo": "images/logos/xelA.png",
    "links": {
      "website": "https://xela.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Xbins",
    "description": "A central repository and distribution point for XBOX modding software, including homebrew and utilities for the original Xbox console.",
    "logo": "images/logos/Xbins.png",
    "links": {
      "website": "https://xbins.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "x64dbg",
    "description": "An open-source x64/x32 debugger for windows.",
    "logo": "images/logos/x64dbg.png",
    "links": {
      "website": "https://x64dbg.com/",
      "windows": "https://sourceforge.net/projects/x64dbg/files/snapshots/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "Windows": true
    },
    "on_home": true
  },
  {
    "name": "wtfast",
    "description": "A service known as a Gamers Private Network (GPN) that is designed to reduce lag, lower ping, and minimize packet loss for online gamers.",
    "logo": "images/logos/wtfast.png",
    "links": {
      "website": "https://www.wtfast.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WoWInterface",
    "description": "World of Warcraft Addons, Interfaces, Skins, Mods & Community.",
    "logo": "images/logos/wow interface.png",
    "links": {
      "website": "https://wowinterface.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wowhead",
    "description": "A website that provides a searchable database, internet forum, guides and player character services for the popular massively multiplayer online role-playing game World of Warcraft.",
    "logo": "images/logos/Wowhead.png",
    "links": {
      "website": "https://www.wowhead.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "wowaudit",
    "description": "A web-based tool and desktop client that helps World of Warcraft guilds manage and track their raid and character data, including gear, raid kills, attendance, and loot needs.",
    "logo": "images/logos/wowaudit.png",
    "links": {
      "website": "https://wowaudit.com/",
      "macos": "https://wowaudit.com/desktop",
      "windows": "https://wowaudit.com/desktop"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wormhole",
    "description": "Simple, private file sharing",
    "logo": "images/logos/Wormhole.png",
    "links": {
      "website": "https://wormhole.app/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Socket",
    "description": "Socket is a developer-first security platform that protects your code from both vulnerable and malicious dependencies.",
    "logo": "images/logos/Socket.png",
    "links": {
      "website": "https://socket.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "World Of Tanks",
    "description": "Take control of vehicles from World War II and the mid-20th century, competing against players around the world.",
    "logo": "images/logos/World Of Tanks.png",
    "links": {
      "website": "https://worldoftanks.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wise Hosting",
    "description": "Minecraft Server Hosting Made Easy!",
    "logo": "images/logos/Wise Hosting.png",
    "links": {
      "website": "https://wisehosting.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "winget.run",
    "description": "A web application and API that provides a user-friendly way to browse and discover packages available through the Windows Package Manager (WinGet).",
    "logo": "images/logos/winget.run.png",
    "links": {
      "website": "https://winget.run/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Windows Terminal Themes",
    "description": "A website offering a large collection of pre-designed themes for the Windows Terminal application.",
    "logo": "images/logos/Windows Terminal Themes.png",
    "links": {
      "website": "https://windowsterminalthemes.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Widget Bot",
    "description": "Pixel perfect Discord widgets for your website.",
    "logo": "images/logos/Widget Bot.png",
    "links": {
      "website": "https://widgetbot.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wick Editor",
    "description": "A free and open-source tool for creating games, animations and everything in-between!",
    "logo": "images/logos/Wick Editor.png",
    "links": {
      "website": "https://www.wickeditor.com/editor/",
      "linux": "https://www.wickeditor.com/#/download/",
      "macos": "https://www.wickeditor.com/#/download/",
      "windows": "https://www.wickeditor.com/#/download/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "on_home": true
  },
  {
    "name": "Weave Silk",
    "description": "Interactive generative art.",
    "logo": "images/logos/Weave Silk.png",
    "links": {
      "website": "http://weavesilk.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WebCheck",
    "description": "A X-Ray Vision for your Website.",
    "logo": "images/logos/WebCheck.png",
    "links": {
      "website": "https://web-check.xyz/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "War Thunder",
    "description": "War Thunder is a 2013 free-to-play vehicular combat multiplayer video game produced by Gaijin Entertainment for Microsoft Windows, macOS, Linux, PlayStation 4, Xbox One, PlayStation 5, Xbox Series X/S, Oculus, and Vive.",
    "logo": "images/logos/War Thunder.png",
    "links": {
      "website": "https://warthunder.com/",
      "linux": "https://warthunder.com/",
      "macos": "https://warthunder.com/",
      "windows": "https://warthunder.com/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "War Sow",
    "description": "Set in a futuristic cartoonish world, Warsow is a completely free fast-paced first-person shooter (FPS) for Windows, Linux and macOS.",
    "logo": "images/logos/War Sow.png",
    "links": {
      "website": "https://warsow.net/",
      "linux": "https://warsow.net/download",
      "macos": "https://warsow.net/download",
      "windows": "https://warsow.net/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Warcraft Logs",
    "description": "A Web site that provides combat analysis for Blizzard's World of Warcraft MMO.",
    "logo": "images/logos/Warcraft Logs.png",
    "links": {
      "website": "https://www.warcraftlogs.com/",
      "linux": "https://www.warcraftlogs.com/client/download",
      "macos": "https://www.warcraftlogs.com/client/download",
      "windows": "https://www.warcraftlogs.com/client/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wallhaven",
    "description": "A premier destination for high-quality desktop wallpapers, featuring a massive, community-curated collection.",
    "logo": "images/logos/Wallhaven.png",
    "links": {
      "website": "https://wallhaven.cc/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "wago.io",
    "description": "Database of sharable World of Warcraft addon elements.",
    "logo": "images/logos/wago.io.png",
    "links": {
      "website": "https://wago.io/",
      "linux": "https://wago.io/app",
      "windows": "https://wago.io/app"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "World of Walker",
    "description": "Worldofwalker.com is the official website for Alan Walker's &quot;World of Walker,&quot; a creative universe encompassing his music, videos, and lore.",
    "logo": "images/logos/world of walker.png",
    "links": {
      "website": "https://www.worldofwalker.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "My Podfic Academia",
    "description": "We're a non-profit organization run by fans of Boku no Hero Academia / My Hero Academia. We produce, voice, edit and distribute podfics for free with the express permission of each author whose fanfiction we transform.",
    "logo": "images/logos/MPA.png",
    "links": {
      "website": "https://mypodficacademia.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "myNoise",
    "description": "Custom Soundscapes to Focus, Relax & Sleep.",
    "logo": "images/logos/myNoise.png",
    "links": {
      "website": "https://mynoise.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mechwarrior Online Egends",
    "description": "A tactical, online multiplayer game set in the BattleTech Universe where players pilot large mechanized war machines called BattleMechs.",
    "logo": "images/logos/mechwarrior online egends.png",
    "links": {
      "website": "https://mwomercs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mutual Aid Disaster Relief",
    "description": "Mutual Aid Disaster Relief is a grassroots disaster relief network based on the principles of solidarity, mutual aid, and autonomous direct action.",
    "logo": "images/logos/Mutual Aid Disaster Relief.png",
    "links": {
      "website": "https://mutualaiddisasterrelief.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mutt Wizard",
    "description": "Muttwizard is a tool that automatically sets up a neomutt-based minimal email system.",
    "logo": "images/logos/Muttwizard.png",
    "links": {
      "website": "https://muttwizard.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "musedash.moe",
    "description": "An unofficial, fan-made website that tracks player rankings for the rhythm game Muse Dash.",
    "logo": "images/logos/musedash.moe.png",
    "links": {
      "website": "https://musedash.moe/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MS Paint IDE",
    "description": "MS Paint IDE is a program that can read a normal image file saved with MS Paint, and can then translate it to text with the ability to highlight the text in the image, parse the code, compile and execute it.",
    "logo": "images/logos/MS Paint IDE.png",
    "links": {
      "website": "https://ms-paint-i.de/",
      "windows": "https://ms-paint-i.de/downloads"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Otzdarva Recommended Builds Dead By Daylight",
    "description": "Otzdarva Recommended Builds For Dead By Daylight",
    "logo": "images/logos/Otzdarva Recommended Builds.png",
    "links": {
      "website": "https://mrtipson.github.io/otz-builds/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mouse Sensitivity",
    "description": "Mouse Sensitivity Calculator and Converter",
    "logo": "images/logos/Mouse Sensitivity.png",
    "links": {
      "website": "https://www.mouse-sensitivity.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Motion Canvas",
    "description": "A TypeScript library for creating animated videos using the Canvas API.",
    "logo": "images/logos/Motion Canvas.png",
    "links": {
      "website": "https://motioncanvas.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "More Than Tech",
    "description": "MoreThanTech is an Italian-language media channel and website focused on PC gaming and technology.",
    "logo": "images/logos/More Than Tech.png",
    "links": {
      "website": "https://morethantech.it/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MonkeyType",
    "description": "OpenSource Typing Website",
    "logo": "images/logos/monkeytype.png",
    "links": {
      "website": "https://monkeytype.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Monitoror",
    "description": "Monitoror is a unified, self-hosted wallboard application for monitoring server status, continuous integration (CI) build progress, and other critical values.",
    "logo": "images/logos/Monitoror.png",
    "links": {
      "website": "https://monitoror.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ModWorkshop",
    "description": "A platform for sharing and downloading mods for various games. Working together as a community to create tools, guides and more.",
    "logo": "images/logos/ModWorkshop.png",
    "links": {
      "website": "https://modworkshop.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mmorpg",
    "description": "We also provide the latest news and exclusive coverage of the MMO gaming genre.",
    "logo": "images/logos/mmorpg.png",
    "links": {
      "website": "https://www.mmorpg.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mixxx",
    "description": "Free and open source DJ software for Windows, macOS, and Linux.",
    "logo": "images/logos/Mixxx.png",
    "links": {
      "website": "https://mixxx.org/",
      "linux": "https://mixxx.org/download",
      "macos": "https://mixxx.org/download",
      "windows": "https://mixxx.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Data Pack Generators Minecraft",
    "description": "Data Pack Generators for Minecraft.",
    "logo": "images/logos/Data Pack Generators.png",
    "links": {
      "website": "https://misode.github.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Game Backup Monitor",
    "description": "Automatically backup your saved games with optional cloud support.",
    "logo": "images/logos/Game Backup Monitor.png",
    "links": {
      "website": "https://mikemaximus.github.io/gbm-web/",
      "windows": "https://mikemaximus.github.io/gbm-web/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Metronom",
    "description": "Online metronome. Tempo (bpm), time signature, lots of rhythm patterns. Mouse, keyboard and touch controls.",
    "logo": "images/logos/Metronom.png",
    "links": {
      "website": "https://metronom.us/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Merged",
    "description": "All Minecraft servers Merged.",
    "logo": "images/logos/Merged.png",
    "links": {
      "website": "https://merged.games/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "mempool.space",
    "description": "Explore the full Bitcoin ecosystem.",
    "logo": "images/logos/mempool.space.png",
    "links": {
      "website": "https://mempool.space/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "melonDS",
    "description": "melonDS aims at providing fast and accurate Nintendo DS emulation.",
    "logo": "images/logos/melonDS.png",
    "links": {
      "website": "https://melonds.kuribo64.net/",
      "linux": "https://melonds.kuribo64.net/downloads.php",
      "macos": "https://melonds.kuribo64.net/downloads.php",
      "windows": "https://melonds.kuribo64.net/downloads.php"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Melody ml",
    "description": "Separate music tracks using machine learning.",
    "logo": "images/logos/Melody ml.png",
    "links": {
      "website": "https://melody.ml/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mednafen",
    "description": "Mednafen is a portable, utilizing OpenGL and SDL, argument(command-line)-driven multi-system emulator. ",
    "logo": "images/logos/mednafen.png",
    "links": {
      "website": "https://mednafen.github.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mastofeed",
    "description": "Embedded Mastodon feeds for blogs etc.",
    "logo": "images/logos/Mastofeed.png",
    "links": {
      "website": "https://mastofeed.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Maskbox",
    "description": "Maskbox protects your real email addresses from internet strangers and automatically forwards messages to your inbox.",
    "logo": "images/logos/Maskbox.png",
    "links": {
      "website": "https://maskbox.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Talent Brick",
    "description": "Say hello to the Open-Source education model. Learning made easy without any disturbance, Clear concepts at a glance.",
    "logo": "images/logos/Talent Brick.png",
    "links": {
      "website": "https://www.talentbrick.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TYT",
    "description": "The Young Turks (TYT) is a progressive news and commentary network founded by Cenk Uygur.",
    "logo": "images/logos/TYT.png",
    "links": {
      "website": "https://tyt.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tynker",
    "description": "Tynker is the fun way to learn programming and develop problem-solving & critical thinking skills.",
    "logo": "images/logos/Tynker.png",
    "links": {
      "website": "https://www.tynker.com/ide/v3"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TwNFT",
    "description": "Mint your tweets as NFTs and sell them on OpenSea.",
    "logo": "images/logos/TwNFT.png",
    "links": {
      "website": "https://twnft.vercel.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TVNZ",
    "description": "Television New Zealand, more commonly referred to as TVNZ, is a New Zealand state-owned media company and Crown entity.",
    "logo": "images/logos/tvnz.png",
    "links": {
      "website": "https://www.tvnz.co.nz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tukui",
    "description": "A community, providing custom user interface (UI) add-ons, primarily Tukui and ElvUI, for World of Warcraft..",
    "logo": "images/logos/Tukui.png",
    "links": {
      "website": "https://tukui.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TruckersMP",
    "description": "A popular, free, third-party multiplayer modification for the games Euro Truck Simulator 2 (ETS2) and American Truck Simulator (ATS).",
    "logo": "images/logos/TruckersMP.png",
    "links": {
      "website": "https://truckersmp.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Trovo",
    "description": "Trovo is a video game live streaming service owned by Tencent.",
    "logo": "images/logos/trovo.png",
    "links": {
      "website": "https://trovo.live/",
      "android": "https://play.google.com/store/apps/details?id=com.tlive.madcat",
      "ios": "https://apps.apple.com/us/app/trovo-live-stream-games/id1498583637"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Trojan Source",
    "description": "A website created by security researchers to document a vulnerability they named &quot;Trojan Source&quot;.",
    "logo": "images/logos/Trojan Source.png",
    "links": {
      "website": "https://trojansource.codes/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Triple Aught Design",
    "description": "Triple Aught Design (TAD) is a San Francisco-based company that designs and manufactures high-quality, durable tactical outdoor and urban apparel and gear, with a strong focus on engineering, performance, and meticulous design details like strict tolerances.",
    "logo": "images/logos/Triple Aught Design.png",
    "links": {
      "website": "https://tripleaughtdesign.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Trilon",
    "description": "Open Source Fanatics & Key Contributors",
    "logo": "images/logos/Trilon.png",
    "links": {
      "website": "https://trilon.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Trigger.dev",
    "description": "Build and deploy fully‑managed AI agents and workflows.",
    "logo": "images/logos/Trigger.dev.png",
    "links": {
      "website": "https://trigger.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "totems.me",
    "description": "Custom Minecraft Totem Maker.",
    "logo": "images/logos/totems.me.png",
    "links": {
      "website": "https://totems.me/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Toolscord",
    "description": "View & Download Discord Profile Picture (PFP)",
    "logo": "images/logos/Toolscord.png",
    "links": {
      "website": "https://toolscord.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Toneden",
    "description": "ToneDen is a friendly social marketing platform that gives you the power to reach and sell to the people who matter.",
    "logo": "images/logos/Toneden.png",
    "links": {
      "website": "https://www.toneden.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Title Case Converter",
    "description": "Convert any text into a title case format.",
    "logo": "images/logos/Title Case Converter.png",
    "links": {
      "website": "https://title-case-converter.vercel.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tio.run",
    "description": "TIO.run, which stands for Try It Online, is a free online code interpreter that supports a wide array of programming languages, both practical and esoteric.",
    "logo": "images/logos/Tio.png",
    "links": {
      "website": "https://tio.run/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tildeverse.org",
    "description": "The hub for a &quot;tildeverse,&quot; a network of online communities that provides users with shell accounts on shared, non-commercial Unix-based servers.",
    "logo": "images/logos/tildeverse.org.png",
    "links": {
      "website": "https://tildeverse.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tilde.town",
    "description": "We are a community of around 3000 users making art, socializing, and learning on a linux server.",
    "logo": "images/logos/tilde.town.png",
    "links": {
      "website": "https://tilde.town/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gitea",
    "description": "A painless, self-hosted Git service.",
    "logo": "images/logos/Gitea.png",
    "links": {
      "website": "https://git.tilde.town/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tilde.team",
    "description": "A digital community for socializing, learning, and making cool stuff.",
    "logo": "images/logos/tilde.team.png",
    "links": {
      "website": "https://tilde.team/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tildegit",
    "description": "git hosting for the tildeverse.",
    "logo": "images/logos/tildegit.png",
    "links": {
      "website": "https://tildegit.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "tilde.club",
    "description": "Resources and tools for running Unix servers for social purposes",
    "logo": "images/logos/tilde.club.png",
    "links": {
      "website": "https://tilde.club/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Theta",
    "description": "The Decentralized Cloud for AI, Media & Entertainment.",
    "logo": "images/logos/Theta.png",
    "links": {
      "website": "https://thetatoken.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Space Devs",
    "description": "The Space Devs is a group of space enthusiast developers working on a range of services, united in a common goal to improve public knowledge and accessibility of spaceflight information.",
    "logo": "images/logos/The Space Devs.png",
    "links": {
      "website": "https://thespacedevs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Theme Studio for VS Code",
    "description": "Create Your Own VS Code Themes.",
    "logo": "images/logos/Theme Studio for VS Code.png",
    "links": {
      "website": "https://themes.vscode.one/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "theme park",
    "description": "Custom themes for your favorite apps!",
    "logo": "images/logos/theme park.png",
    "links": {
      "website": "https://theme-park.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Homelab Wiki",
    "description": "Thehomelab.wiki is a comprehensive online resource, guide, and blog focused on the practice of building and managing a homelab.",
    "logo": "images/logos/The Homelab Wiki.png",
    "links": {
      "website": "https://thehomelab.wiki/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Team Fortress 2 Mart",
    "description": "A dedicated marketplace for trading, buying, and selling TF2 items, hats, and skins.",
    "logo": "images/logos/Team Fortress 2 Mart.png",
    "links": {
      "website": "https://tf2mart.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "TEXTFILES.com",
    "description": "Textfiles.com is a digital archive run by technology historian Jason Scott that preserves text-based files from the 1980s and 1990s.",
    "logo": "images/logos/TEXTFILES.COM.png",
    "links": {
      "website": "http://textfiles.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tetr.io",
    "description": "Puzzle together in this modern yet familiar online stacker. ",
    "logo": "images/logos/Tetr.io.png",
    "links": {
      "website": "https://tetr.io/",
      "linux": "https://tetr.io/about/desktop/",
      "macos": "https://tetr.io/about/desktop/",
      "windows": "https://tetr.io/about/desktop/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Terminal Root",
    "description": "A little much about C++, Game Development, Programming and Web.",
    "logo": "images/logos/Terminal Root.png",
    "links": {
      "website": "https://terminalroot.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "terminal.sexy",
    "description": "Create, view and edit terminal colorschemes.",
    "logo": "images/logos/terminal.sexy.png",
    "links": {
      "website": "https://terminal.sexy/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "telescope.org",
    "description": "Telescope.org is a remote observing platform run by The Open University, giving users remote access to robotic telescopes located in Tenerife.",
    "logo": "images/logos/telescope.org.png",
    "links": {
      "website": "https://telescope.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tautulli",
    "description": "Monitor your Plex Media Server.",
    "logo": "images/logos/Tautulli.png",
    "links": {
      "website": "https://tautulli.com/",
      "android": "https://play.google.com/store/apps/details?id=com.tautulli.tautulli_remote",
      "ios": "https://apps.apple.com/us/app/tautulli-remote/id1570909086"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tarkov Market",
    "description": "A third-party website and app that assists players of Escape from Tarkov by providing information about item prices on the in-game Flea Market and from traders.",
    "logo": "images/logos/Tarkov Market.png",
    "links": {
      "website": "https://tarkov-market.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "hack.chat",
    "description": "A minimal, distraction-free chat application.",
    "logo": "images/logos/hack.chat.png",
    "links": {
      "website": "https://hack.chat/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Yahoo! Finance",
    "description": "Yahoo! Finance is a media property that is part of the Yahoo! network. It provides financial news, data and commentary including stock quotes.",
    "logo": "images/logos/yahoo finance.png",
    "links": {
      "website": "https://finance.yahoo.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gaijin",
    "description": "Gaijin Entertainment is a Hungarian video game developer headquartered in Budapest.",
    "logo": "images/logos/Gaijin.png",
    "links": {
      "website": "https://gaijin.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "galactica bot",
    "description": "A free bot to get your Discord™ server up and running!",
    "logo": "images/logos/galactica-bot.png",
    "links": {
      "website": "https://galacticabot.vercel.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gamebanana",
    "description": "Mods, Tutorials, Sprays, Works In Progress, Sound Mods and more for video games.",
    "logo": "images/logos/Gamebanana.png",
    "links": {
      "website": "https://gamebanana.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gamedle",
    "description": "Gamedle is a game made for gamers, created by a single developer. Inspired by Wordle, Framed and the other spin-offs.",
    "logo": "images/logos/GAMEDLE.png",
    "links": {
      "website": "https://www.gamedle.wtf/",
      "android": "https://play.google.com/store/apps/details?id=wtf.gamedle.www.twa"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Game Jolt",
    "description": "Art, Videos & Chat for Gamers!",
    "logo": "images/logos/game jolt.png",
    "links": {
      "website": "https://gamejolt.com/",
      "android": "https://play.google.com/store/apps/details?id=com.gamejolt.app",
      "ios": "https://apps.apple.com/us/app/game-jolt-social/id1546759412"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gamers Nexus",
    "description": "Gamers Nexus is a popular YouTube channel and website focused on providing in-depth, data-driven reviews, benchmarks, and analysis of PC hardware, founded by Steve Burke.",
    "logo": "images/logos/gamersnexus.png",
    "links": {
      "website": "https://gamersnexus.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Garuda Linux",
    "description": "Garuda Linux is an opinionated Linux distribution based on Arch Linux.",
    "logo": "images/logos/Garuda Linux.png",
    "links": {
      "website": "https://garudalinux.org/",
      "linux": "https://garudalinux.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GeekTyper",
    "description": "Have you ever wanted to look cool in front of your friends and pretend you know programming?",
    "logo": "images/logos/image geek_typer.png",
    "links": {
      "website": "https://geektyper.com/",
      "android": "https://play.google.com/store/apps/details?id=com.blumont.geektyper2",
      "windows": "https://geektyper.com/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Geocities Gallery",
    "description": "A restored visual gallery of the archived Geocities sites, sorted by neighborhood.",
    "logo": "images/logos/The Geocities Gallery.png",
    "links": {
      "website": "https://geocities.restorativland.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "restorativland",
    "description": "A project to excavate shut down, abandoned web ruins and restore them to surfable, visually accessible, searchable, remixable condition.",
    "logo": "images/logos/restorativland.png",
    "links": {
      "website": "https://restorativland.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DWeb",
    "description": "Connecting people, projects and protocols to build a decentralized web.",
    "logo": "images/logos/DWeb.png",
    "links": {
      "website": "https://getdweb.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "halfmoon",
    "description": "Highly customizable, drop-in Bootstrap replacement.",
    "logo": "images/logos/halfmoon.png",
    "links": {
      "website": "https://www.gethalfmoon.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ShareX",
    "description": "Screen capture, file sharing and productivity tool.",
    "logo": "images/logos/ShareX.png",
    "links": {
      "website": "https://getsharex.com/",
      "windows": "https://getsharex.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WACUP",
    "description": "A media player that's made to emulate some of your favourite media players from the past & bring them into the future.",
    "logo": "images/logos/WACUP.png",
    "links": {
      "website": "https://getwacup.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GFVerse.info",
    "description": "GFVerse.info is a fan-made website that provides guides, wikis, and lore for the mobile game Girls' Frontline and its sequel, Girls' Frontline 2: Exilium.",
    "logo": "images/logos/GFVerse.info.png",
    "links": {
      "website": "https://gfverse.info/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GG",
    "description": "Discover new games, keep track of the ones you want to play, and connect with friends.",
    "logo": "images/logos/GG.png",
    "links": {
      "website": "https://ggapp.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Giant Bomb",
    "description": "Giant Bomb is an independently owned video game website known for its personality-driven podcasts, video series, and comprehensive community-edited video game database.",
    "logo": "images/logos/Giant Bomb.png",
    "links": {
      "website": "https://www.giantbomb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gibber",
    "description": "Gibber is a live coding environment for audiovisual performance.",
    "logo": "images/logos/Gibber.png",
    "links": {
      "website": "https://gibber.cc/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gif Run",
    "description": "Create high-def GIFs and WebP images from YouTube, uploads, and many other video sites. ",
    "logo": "images/logos/Gif Run.png",
    "links": {
      "website": "https://gifrun.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "gif your game",
    "description": "Render full quality clips on our remote GPUs with zero impact to gameplay.",
    "logo": "images/logos/gif your game.png",
    "links": {
      "website": "https://www.gifyourgame.com/",
      "windows": "https://www.gifyourgame.com/"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GnousEU",
    "description": "French-speaking free software community since 2017.",
    "logo": "images/logos/GnousEU.png",
    "links": {
      "website": "https://gnous.eu/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GitKraken",
    "description": "GitKraken AI works for you to seamlessly orchestrate your workflows.",
    "logo": "images/logos/GitKraken.png",
    "links": {
      "website": "https://www.gitkraken.com/",
      "linux": "https://www.gitkraken.com/download",
      "macos": "https://www.gitkraken.com/download",
      "windows": "https://www.gitkraken.com/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "gitmoji",
    "description": "An emoji guide for your commit messages.",
    "logo": "images/logos/gitmoji.png",
    "links": {
      "website": "https://gitmoji.dev/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "phoesion Glow",
    "description": "Cloud microservice development for human beings.",
    "logo": "images/logos/phoesion Glow.png",
    "links": {
      "website": "https://glow.phoesion.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Glowing Bear",
    "description": "WeeChat web frontend.",
    "logo": "images/logos/Glowing Bear.png",
    "links": {
      "website": "https://glowing-bear.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GLSL Sandbox",
    "description": "Shader editor and gallery.",
    "logo": "images/logos/GLSL Sandbox.png",
    "links": {
      "website": "https://glslsandbox.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Go4Liftoff",
    "description": "Welcome to Go4Liftoff; your one stop app for keeping track of and keeping up to date with both upcoming and past events in the world of spaceflight.",
    "logo": "images/logos/go4liftoff.png",
    "links": {
      "website": "https://go4liftoff.com/",
      "android": "https://play.google.com/store/apps/details?id=com.go4liftoff.go4liftoffapplication"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "good first issue",
    "description": "Good First Issue curates easy pickings from popular open-source projects, and helps you make your first contribution to open-source.",
    "logo": "images/logos/good first issue.png",
    "links": {
      "website": "https://goodfirstissue.dev/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Grayjay",
    "description": "Grayjay enables you to create and watch video content in your own terms, fully retaining ownership and having control over what you watch. Your content on your terms.",
    "logo": "images/logos/Grayjay.png",
    "links": {
      "website": "https://grayjay.app/",
      "android": "https://grayjay.app/",
      "linux": "https://grayjay.app/desktop/",
      "macos": "https://grayjay.app/desktop/",
      "windows": "https://grayjay.app/desktop/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Great View",
    "description": "GreatView is a website. People make videos and post them here.",
    "logo": "images/logos/Great View.png",
    "links": {
      "website": "https://greatview.video/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GreyNoise",
    "description": "GreyNoise empowers defenders to work on the most urgent and critical threats without being overwhelmed by noisy, low-priority alerts.",
    "logo": "images/logos/Grey Noise.png",
    "links": {
      "website": "https://www.greynoise.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GrimAC Minecraft Anticheat",
    "description": "Minecraft Anticheat.",
    "logo": "images/logos/GrimAC.png",
    "links": {
      "website": "https://grim.ac/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GTAForums",
    "description": "GTAForums is the largest and ever-growing fan forum dedicated to the Grand Theft Auto series and Rockstar Games.",
    "logo": "images/logos/GTAForums.png",
    "links": {
      "website": "https://gtaforums.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Guessr.tv",
    "description": "Twitch stream view count guessing game.",
    "logo": "images/logos/Guessr.tv.png",
    "links": {
      "website": "https://guessr.tv/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gunship music",
    "description": "The official website and hub for the British synthwave band Gunship, known for their 1980s-inspired sound, cinematic vocals, and cyberpunk aesthetic.",
    "logo": "images/logos/Gunship.png",
    "links": {
      "website": "https://www.gunshipmusic.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "pages.gay",
    "description": "Host static sites with pages.gay.",
    "logo": "images/logos/pages.gay.png",
    "links": {
      "website": "https://pages.gay/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Git Gay",
    "description": "Offering Git hosting, CI, and static site hosting, git.gay is a platform made to empower queer developers to create, collaborate, and share their projects with the world.",
    "logo": "images/logos/Git Gay.png",
    "links": {
      "website": "https://git.gay/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pally.gg",
    "description": "Setup a page, invite your team, and start receiving support payments in minutes.",
    "logo": "images/logos/pally.gg.png",
    "links": {
      "website": "https://pally.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PVP Legacy",
    "description": "PvP Legacy strives for excellence to bring you one of the most incredible 1.18.2-1.21 Minecraft servers for combat training to date!",
    "logo": "images/logos/PVP Legacy.png",
    "links": {
      "website": "https://pvplegacy.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Proxx",
    "description": "A game of proximity.",
    "logo": "images/logos/Proxx.png",
    "links": {
      "website": "https://proxx.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "protondb",
    "description": "Welcome to your home for crowdsourced Linux and Steam Deck game compatibility reports!",
    "logo": "images/logos/protondb.png",
    "links": {
      "website": "https://www.protondb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ProjectDiscovery",
    "description": "Nuclei detects exploitable vulnerabilities across every asset, so you can fix what matters without the noise.",
    "logo": "images/logos/ProjectDiscovery.png",
    "links": {
      "website": "https://projectdiscovery.io/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "progetto snaps",
    "description": "A resource site for the Multiple Arcade Machine Emulator (MAME) community.",
    "logo": "images/logos/progetto snaps.png",
    "links": {
      "website": "https://www.progettosnaps.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Privacy Tools",
    "description": "Privacy Tools Guide: Website for Encrypted Software & Apps.",
    "logo": "images/logos/Privacy Tools.png",
    "links": {
      "website": "https://www.privacytools.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "PreMiD",
    "description": "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status.",
    "logo": "images/logos/Premid.png",
    "links": {
      "website": "https://premid.app/",
      "github": "https://github.com/PreMiD/",
      "chrome": "https://chromewebstore.google.com/detail/premid/agjnjboanicjcpenljmaaigopkgdnihi",
      "firefox": "https://premid.app/downloads",
      "safari": "https://apps.apple.com/us/app/premid/id6739778076",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/premid/hkchpjlnddoppadcbefbpgmgaeidkkkm"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ParrotSEC",
    "description": "The ultimate framework for your Cyber Security operations.",
    "logo": "images/logos/ParrotSEC.png",
    "links": {
      "website": "https://parrotsec.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Phind",
    "description": "Phind is an AI-powered search engine specifically designed for developers and technical professionals.",
    "logo": "images/logos/phind.png",
    "links": {
      "website": "https://www.phind.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Mosh",
    "description": "Unlimited creative real-time effects for image + video.",
    "logo": "images/logos/Mosh.png",
    "links": {
      "website": "https://moshpro.app/",
      "macos": "https://moshpro.app/",
      "windows": "https://moshpro.app/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Physgun",
    "description": "Game server hosting.",
    "logo": "images/logos/Physgun.png",
    "links": {
      "website": "https://physgun.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ping.pe",
    "description": "Ping.pe is a web-based network diagnostics tool offering ping, mtr, and dig tests from multiple global locations to troubleshoot IP transit level connectivity issues.",
    "logo": "images/logos/ping.pe.png",
    "links": {
      "website": "https://ping.pe/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pinia",
    "description": "The intuitive store for Vue.js.",
    "logo": "images/logos/Pinia.png",
    "links": {
      "website": "https://pinia.vuejs.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Piped",
    "description": "An alternative privacy-friendly YouTube frontend which is efficient by design.",
    "logo": "images/logos/Piped.png",
    "links": {
      "website": "https://piped.video/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nvidia Geforce Now",
    "description": "Connect to top PC game stores like Steam, Epic, and Xbox to play the games you already own with GeForce RTX performance in the cloud.",
    "logo": "images/logos/geforce.png",
    "links": {
      "website": "https://www.nvidia.com/geforce-now/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Play Classic Games",
    "description": "Play CLASSIC games online, in a web browser!",
    "logo": "images/logos/Play Classic.png",
    "links": {
      "website": "https://playclassic.games/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pluto TV",
    "description": "Pluto TV is an American free ad-supported streaming television service owned and operated by the Paramount Skydance Direct-to-Consumer division of Paramount Skydance",
    "logo": "images/logos/pluto.png",
    "links": {
      "website": "https://pluto.tv/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Poal",
    "description": "Poal is an online forum / social site with many user‐subreddits (“subs”) similar to Reddit. Users can post content (links, images, text), vote, comment, etc.",
    "logo": "images/logos/poal.png",
    "links": {
      "website": "https://poal.co/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Path of Exile Racing",
    "description": "A website that provided a tracker and leaderboards for Path of Exile races.",
    "logo": "images/logos/poe-racing.png",
    "links": {
      "website": "https://poe-racing.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "poe.ninja Path of Exile",
    "description": "A site dedicated to helping you enjoy the complexities of the games Path of Exile and Path of Exile 2 from Grinding Gear Games through statistics, data and tools.",
    "logo": "images/logos/poe.ninja.png",
    "links": {
      "website": "https://poe.ninja/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "POE LAB Path of Exile",
    "description": "PoELab.com is a fan/community site for Path of Exile (PoE), focused especially on the Labyrinth (often called “Lab”) content.",
    "logo": "images/logos/POE LAB.png",
    "links": {
      "website": "https://www.poelab.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "polychromatic",
    "description": "Polychromatic is a frontend for OpenRazer that enables Razer devices to control lighting effects and more on GNU/Linux.",
    "logo": "images/logos/polychromatic.png",
    "links": {
      "website": "https://polychromatic.app/",
      "linux": "https://polychromatic.app/download/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Pony Tube",
    "description": "Pony.Tube is a PeerTube-enabled video streaming platform using P2P (Pony-to-Pony) technology to deliver the best pony videos directly to you.",
    "logo": "images/logos/Pony Tube.png",
    "links": {
      "website": "https://pony.tube/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Worldith",
    "description": "Even more game mechanics and adventures with that amazing classic feel of Minecraft.",
    "logo": "images/logos/Worldith.png",
    "links": {
      "website": "https://www.worldith.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "NEOLUMINUM",
    "description": "An electronic music label.",
    "logo": "images/logos/NEOLUMINUM.png",
    "links": {
      "website": "https://neoluminum.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Experienced Discord Bot",
    "description": "Set up custom cards for free, import MEE6 levels, and level up to the stars with Experienced!",
    "logo": "images/logos/Experienced.png",
    "links": {
      "website": "https://xp.valk.sh/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Wynem",
    "description": "Wynem is a multipurpose Discord bot that has a vast array of features for all sorts of purposes. From Moderation, to Fun, to Image Editing!",
    "logo": "images/logos/Wynem.png",
    "links": {
      "website": "https://wynem.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Tabby",
    "description": "Tabby is an infinitely customizable cross-platform terminal app for local shells, serial, SSH and Telnet connections.",
    "logo": "images/logos/Tabby.png",
    "links": {
      "website": "https://tabby.sh/",
      "linux": "https://tabby.sh/",
      "macos": "https://tabby.sh/",
      "windows": "https://tabby.sh/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Sync Tube",
    "description": "A simple platform where you can watch YouTube videos together.",
    "logo": "images/logos/Sync Tube.png",
    "links": {
      "website": "https://sync-tube.de/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SurrealDB",
    "description": "A scalable, distributed, collaborative, document-graph database, for the realtime web.",
    "logo": "images/logos/SurrealDB.png",
    "links": {
      "website": "https://surrealdb.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SunXDCC",
    "description": "SunXDCC is a search engine for finding files distributed using the XDCC file-sharing protocol on the Internet Relay Chat (IRC) network.",
    "logo": "images/logos/SunXDCC.png",
    "links": {
      "website": "https://sunxdcc.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Stylus",
    "description": "An expressive, robust, feature-rich CSS language built for Node.js",
    "logo": "images/logos/Stylus.png",
    "links": {
      "website": "https://stylus-lang.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "STUDIO MAERTENS",
    "description": "A Berlin based design studio.",
    "logo": "images/logos/STUDIO MAERTENS.png",
    "links": {
      "website": "https://studiomaertens.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Annapurna Interactive",
    "description": "An American video game publisher and developer.",
    "logo": "images/logos/Annapurana.png",
    "links": {
      "website": "https://annapurnainteractive.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "IdleSteam.com",
    "description": "Increase the hours played on your Steam games using our 24/7 online servers.",
    "logo": "images/logos/IdleSteam.com.png",
    "links": {
      "website": "https://idlesteam.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Steam Hunters",
    "description": "Steam Hunters is a third-party website for tracking, scoring, and comparing achievements on the Steam gaming platform.",
    "logo": "images/logos/steam hunters.png",
    "links": {
      "website": "https://steamhunters.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Steam Deck HQ",
    "description": "SteamDeckHQ is a fan-made website and media outlet that focuses on providing detailed game performance reviews, tips, and tutorials specifically for the Steam Deck.",
    "logo": "images/logos/SDHQ.png",
    "links": {
      "website": "https://steamdeckhq.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "STEAMCHARTS",
    "description": "An ongoing analysis of Steam's concurrent players.",
    "logo": "images/logos/STEAMCHARTS.png",
    "links": {
      "website": "https://steamcharts.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Kyun Status",
    "description": "Status page for kyun",
    "logo": "images/logos/Kyun Status.png",
    "links": {
      "website": "https://status.kyun.host/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "State Of JavaScript",
    "description": "The annual developer survey of the JavaScript ecosystem.",
    "logo": "images/logos/State Of JavaScript.png",
    "links": {
      "website": "https://stateofjs.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "StatBot Discord Bot",
    "description": "Discord Server Stats",
    "logo": "images/logos/Stat Bot.png",
    "links": {
      "website": "https://statbot.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "STARMADE DOCK",
    "description": "Starmadedock.net is the official community forum and blueprint repository for the indie sandbox space game StarMade.",
    "logo": "images/logos/STARMADE DOCK.png",
    "links": {
      "website": "https://starmadedock.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "StarMade",
    "description": "StarMade is a voxel-based 3D sandbox space shooter.",
    "logo": "images/logos/StarMade.png",
    "links": {
      "website": "https://www.star-made.org/",
      "linux": "https://www.star-made.org/download",
      "macos": "https://www.star-made.org/download",
      "windows": "https://www.star-made.org/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "srrDB",
    "description": "srrDB is a database of SRR metadata files used to verify and reconstruct original scene release archives, but it does not host the actual copyrighted content.",
    "logo": "images/logos/srrDB.png",
    "links": {
      "website": "https://www.srrdb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Online Spyware Watchdog",
    "description": "The goal of this website is to classify spyware programs, so that users can be more aware that they are installing spyware.",
    "logo": "images/logos/Online Spyware Watchdog.png",
    "links": {
      "website": "https://spyware.neocities.org/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Spoticord",
    "description": "A new way to listen Spotify Music on Discord",
    "logo": "images/logos/Spoticord.png",
    "links": {
      "website": "https://spoticord.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Splatoon3.ink",
    "description": "This site is a fan-made, unofficial source of information for Nintendo's Splatoon 3.",
    "logo": "images/logos/Splatoon 3.png",
    "links": {
      "website": "https://splatoon3.ink/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Splatoon",
    "description": "Official site for splatoon",
    "logo": "images/logos/Splatoon.png",
    "links": {
      "website": "https://splatoon.nintendo.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Spark Minecraft",
    "description": "A performance profiler for Minecraft clients, servers, and proxies.",
    "logo": "images/logos/spark.png",
    "links": {
      "website": "https://spark.lucko.me/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Space Station Gaming",
    "description": "Spacestation Gaming is a multi-regional professional esports organization based in Utah, founded and owned by social media influencer Shaun &quot;Shonduras&quot; McBride",
    "logo": "images/logos/Space Station Gaming.png",
    "links": {
      "website": "https://www.spacestationgaming.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "soma fm",
    "description": "SomaFM is an independent Internet-only streaming multi-channel radio station, supported entirely with donations from listeners.",
    "logo": "images/logos/soma fm.png",
    "links": {
      "website": "https://somafm.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Snowflake Discord",
    "description": "Discord Snowflake to Timestamp Converter",
    "logo": "images/logos/Snowflake.png",
    "links": {
      "website": "https://snowsta.mp/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Smithed Minecraft",
    "description": "Smithed is an open-source platform for exploring, sharing and supercharging minecraft data & resource packs.",
    "logo": "images/logos/Smithed.png",
    "links": {
      "website": "https://smithed.net/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Project Slippi",
    "description": "Project Slippi is an ongoing project designed for emulators like Dolphin that aims to give Super Smash Bros. Melee several major quality of life features.",
    "logo": "images/logos/slippi.gg.png",
    "links": {
      "website": "https://slippi.gg/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "skylab music",
    "description": "Skylab Music is an independent digital record label founded in 2000 by M. Selmer with the philosophy that smaller labels add better variety to the scene.",
    "logo": "images/logos/skylab music.png",
    "links": {
      "website": "https://skylabmusic.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SkyCrypt",
    "description": "SkyCrypt is a free, open-source stats viewer for Hypixel SkyBlock.",
    "logo": "images/logos/SkyCrypt.png",
    "links": {
      "website": "https://sky.shiiyu.moe/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Skinport",
    "description": "Skinport is the easy-to-use skin marketplace for Counter-Strike 2 items that allows you to buy and sell Counter-Strike 2 skins for real money.",
    "logo": "images/logos/Skin Port.png",
    "links": {
      "website": "https://skinport.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "skiftOS",
    "description": "skiftOS is a hobby OS built from scratch using C/C++ for ARM, x86, and RISC-V.",
    "logo": "images/logos/skift OS.png",
    "links": {
      "website": "https://skiftos.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "skeld.net",
    "description": "Skeld.net is afree to play public modded Among Us server.",
    "logo": "images/logos/skeld.net.png",
    "links": {
      "website": "https://skeld.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Simkl",
    "description": "Simkl automatically tracks what you're watching, tells you how many episodes you've missed, and connects you to what your friends are into.",
    "logo": "images/logos/Simkl.png",
    "links": {
      "website": "https://simkl.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Shattered Pixel",
    "description": "The indie developer behind Shattered Pixel Dungeon, a popular traditional roguelike dungeon crawler.",
    "logo": "images/logos/Shattered Pixel.png",
    "links": {
      "website": "https://shatteredpixel.com/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SETTINGS.GG",
    "description": "Upload & share your game settings.",
    "logo": "images/logos/SETTINGS.GG.png",
    "links": {
      "website": "https://settings.gg/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Eve Online Store",
    "description": "Store for eve online",
    "logo": "images/logos/Eve Online Store.png",
    "links": {
      "website": "https://store.eveonline.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Brave",
    "description": "A privacy-focused search engine from the makers of the Brave browser that doesn't track your searches or clicks.",
    "logo": "images/logos/Brave.png",
    "links": {
      "website": "https://search.brave.com/",
      "android": "https://play.google.com/store/apps/details?id=com.brave.browser",
      "ios": "https://apps.apple.com/us/app/brave-browser-search-engine/id1052879175",
      "linux": "https://brave.com/download/",
      "macos": "https://brave.com/download/",
      "windows": "https://brave.com/download/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SearXNG",
    "description": "SearXNG is a Metasearch engine that aggregates results from other search engines while not storing any information about its users.",
    "logo": "images/logos/SearXNG.png",
    "links": {
      "website": "https://github.com/searxng/searx-instances"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "biboumail",
    "description": "Site that hosts free software.",
    "logo": "images/logos/biboumail.png",
    "links": {
      "website": "https://www.biboumail.fr/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Script Kit",
    "description": "Script Kit. Automate Anything.",
    "logo": "images/logos/Script Kit.png",
    "links": {
      "website": "https://www.scriptkit.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Keys.Band",
    "description": "This extension allows you to sign Nostr events on web-apps without having to give them your keys.",
    "logo": "images/logos/keys.band.png",
    "links": {
      "website": "https://keys.band/",
      "linux": "https://keys.band/",
      "github": "https://github.com/toastr-space/keys-band",
      "chrome": "https://chromewebstore.google.com/detail/keysband/jdencabhccnfhedpfoojbbdlgmecnlkm"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "nostrudel.ninja",
    "description": "A sandbox for exploring nostr.",
    "logo": "images/logos/nostrudel.ninja.png",
    "links": {
      "website": "https://nostrudel.ninja/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "nostrnests",
    "description": "Nostr Nests is an audio space for chatting, jamming, micro-conferences, live podcast recordings, etc. that's powered by Nostr.",
    "logo": "images/logos/nostrnests.png",
    "links": {
      "website": "https://nostrnests.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nostree",
    "description": "A Nostr-based application to create, manage and discover link lists, show notes and other stuff.",
    "logo": "images/logos/Nostree.png",
    "links": {
      "website": "https://nostree.me/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Slidestr",
    "description": "Immersive media browsing.",
    "logo": "images/logos/slidestr.png",
    "links": {
      "website": "https://slidestr.net/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nostr Rocket",
    "description": "A nostr client that implements the nostrocket NIPS.",
    "logo": "images/logos/Nostr Rocket.png",
    "links": {
      "website": "https://nostrocket.org/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "coolr.chat",
    "description": "Coolr is a simple, open-source, ephemeral group chat built on Nostr.",
    "logo": "images/logos/coolr.chat.png",
    "links": {
      "website": "https://www.coolr.chat/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Yondar",
    "description": "Yondar (go.yondar.me) is a browser-based decentralized XR/metaverse platform for sharing locations, places, and friends using its “Cyberspace Meta-Protocol.”",
    "logo": "images/logos/Yondar.png",
    "links": {
      "website": "https://go.yondar.me/",
      "linux": "https://go.yondar.me/"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Oxchat",
    "description": "0xchat is a secure chat app built on the Nostr protocol. ",
    "logo": "images/logos/Oxchat.png",
    "links": {
      "website": "https://0xchat.com/",
      "android": "https://play.google.com/store/apps/details?id=com.oxchat.nostr",
      "ios": "https://apps.apple.com/us/app/0xchat/id1637607169",
      "macos": "https://apps.apple.com/us/app/0xchat/id1637607169"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "open-source": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Habla News",
    "description": "Habla.news is a decentralized platform built on the Nostr protocol that allows users to write, read, and curate long-form content while earning from their contributions.",
    "logo": "images/logos/Habla.png",
    "links": {
      "website": "http://habla.news/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Flotilla",
    "description": "Experience a new way to connect with your people online. Join an existing community space or launch your very own branded platform tailored to your audience.",
    "logo": "images/logos/Flotilla.png",
    "links": {
      "website": "https://flotilla.social/",
      "android": "https://play.google.com/store/apps/details?id=social.flotilla",
      "ios": "https://apps.apple.com/us/app/flotilla-chat/id6741344107",
      "macos": "https://apps.apple.com/us/app/flotilla-chat/id6741344107"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Listr",
    "description": "Curate, Organize, and Discover everything Nostr has to offer.",
    "logo": "images/logos/Listr.png",
    "links": {
      "website": "https://listr.lol/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "lumilumi",
    "description": "A modern and user-friendly web client for the Nostr protocol, focusing on a seamless social experience.",
    "logo": "images/logos/lumilumi.png",
    "links": {
      "website": "https://lumilumi.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "nostter",
    "description": "Nostter is a minimalist web-based Nostr client designed for a calm and distraction-free user experience.",
    "logo": "images/logos/nostter.png",
    "links": {
      "website": "https://nostter.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "The Wired",
    "description": "The Wired is an anon agora, built upon the NOSTR protocol.",
    "logo": "images/logos/wired.png",
    "links": {
      "website": "https://www.getwired.app/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Emojito",
    "description": "Stir up your reactions with custom emoji.",
    "logo": "images/logos/Emojito.png",
    "links": {
      "website": "https://emojito.meme/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "GIF Buddy",
    "description": "A gif companion app for nostr clients.",
    "logo": "images/logos/GIF Buddy.png",
    "links": {
      "website": "https://www.gifbuddy.lol/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Coracle",
    "description": "A Nostr client for feeds that puts relays first.",
    "logo": "images/logos/Coracle.png",
    "links": {
      "website": "https://coracle.social/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "rcmd",
    "description": "Instant app switching with a rarely used key.",
    "logo": "images/logos/rcmd.png",
    "links": {
      "website": "https://lowtechguys.com/rcmd/",
      "macos": "https://apps.apple.com/us/app/rcmd-app-switcher/id1596283165"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "JetBrains",
    "description": "A rich suite of tools that provide an exceptional developer experience.",
    "logo": "images/logos/Jetbrains.png",
    "links": {
      "website": "https://www.jetbrains.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WikiFreedia",
    "description": "WikiFreedia is a proof-of-concept for a Nostr-based alternative to Wikipedia.",
    "logo": "images/logos/wikifreedia.png",
    "links": {
      "website": "https://wikifreedia.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Speediness",
    "description": "Quickly check your internet connection speed.",
    "logo": "images/logos/Speediness.png",
    "links": {
      "website": "https://sindresorhus.com/speediness",
      "macos": "https://apps.apple.com/us/app/speediness/id1596706466"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "voices",
    "description": "Text to Speech with OpenAI, ElevenLabs, PlayAI and Kokoro.",
    "logo": "images/logos/voices.png",
    "links": {
      "website": "https://goodsnooze.gumroad.com/l/voices",
      "macos": "https://goodsnooze.gumroad.com/l/voices"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Dot Esports",
    "description": "Dot Esports is a premier global destination for coverage of competitive gaming and esports.",
    "logo": "images/logos/dotesports.png",
    "links": {
      "website": "https://dotesports.com/",
      "ios": "https://apps.apple.com/us/app/dot-esports/id1393791463",
      "macos": "https://apps.apple.com/us/app/dot-esports/id1393791463"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Render",
    "description": "Render is a unified cloud platform for deploying and managing applications, databases, and static sites.",
    "logo": "images/logos/render.png",
    "links": {
      "website": "https://render.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Cookie Clicker Bobjoerules",
    "description": "Click cookies, build your empire! A modern recreation of the classic Cookie Clicker game.",
    "logo": "images/logos/bobjoerulescookieclicker.png",
    "links": {
      "website": "https://cookieclicker.bobjoerules.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nos",
    "description": "Nos (nos.social) is an iOS social media app built on the decentralized Nostr protocol.",
    "logo": "images/logos/nos.png",
    "links": {
      "website": "https://www.nos.social/",
      "ios": "https://apps.apple.com/us/app/nos-social/id1670125746"
    },
    "flags": {},
    "categories": {
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fountain.fm",
    "description": "Fountain.fm is a modern podcast app that integrates Bitcoin and social features.",
    "logo": "images/logos/fountain.png",
    "links": {
      "website": "https://www.fountain.fm/",
      "android": "https://play.google.com/store/apps/details?id=fm.fountain.apps",
      "ios": "https://apps.apple.com/us/app/fountain-podcast-player/id1576394424"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Shopstr",
    "description": "Buy and sell anything, anywhere, anytime.",
    "logo": "images/logos/shopstr.png",
    "links": {
      "website": "https://shopstr.store/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ollama",
    "description": "Ollama is a free, open-source tool that simplifies running powerful Large Language Models (LLMs) like Llama 3, Mistral, and Gemma directly on your local computer.",
    "logo": "images/logos/ollama.png",
    "links": {
      "website": "https://ollama.com/",
      "linux": "https://ollama.com/download/linux",
      "macos": "https://ollama.com/download/mac",
      "windows": "https://ollama.com/download/windows"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Excalidraw",
    "description": "Virtual whiteboard for sketching hand-drawn like diagrams.",
    "logo": "images/logos/excalidraw.png",
    "links": {
      "website": "https://excalidraw.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Shots.so",
    "description": "Create Amazing Mockups, Product demos & Videos.",
    "logo": "images/logos/Shots.so.png",
    "links": {
      "website": "https://shots.so/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "macOSicons",
    "description": "Replacement icons for popular apps in the style of macOS",
    "logo": "images/logos/macOSicons.png",
    "links": {
      "website": "https://macosicons.com/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "WebBites",
    "description": "Save anything with one click and let AI do the organising for you.",
    "logo": "images/logos/WebBites.png",
    "links": {
      "website": "https://www.webbites.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Yandex",
    "description": "Yandex is a major Russian multinational tech company, often called the &quot;Google of Russia,&quot; known for its dominant search engine but also offering a vast ecosystem of internet services like email, maps, cloud storage, ride-hailing (Yandex.Taxi), e-commerce, and AI-driven products.",
    "logo": "images/logos/Yandex.png",
    "links": {
      "website": "https://yandex.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "rabbit",
    "description": "An AI startup known for its AI-native devices like the Rabbit R1, which uses an AI operating system.",
    "logo": "images/logos/rabbit.png",
    "links": {
      "website": "https://www.rabbit.tech/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ArtStation",
    "description": "ArtStation is a leading online platform for digital artists in games, film, and entertainment to showcase professional portfolios, find jobs, sell art/assets, and learn new skills.",
    "logo": "images/logos/ArtStation.png",
    "links": {
      "website": "https://www.artstation.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ComfyUi",
    "description": "ComfyUI is a powerful, free, open-source visual interface for AI image/video generation.",
    "logo": "images/logos/Comfy.png",
    "links": {
      "website": "https://www.comfy.org",
      "macos": "https://www.comfy.org/download",
      "windows": "https://www.comfy.org/download"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "MacOS": true,
      "Windows": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "IntelliJ IDEA",
    "description": "An IDE for Professional Development in Java and Kotlin",
    "logo": "images/logos/IntelliJ IDEA.png",
    "links": {
      "website": "https://www.jetbrains.com/idea/download/",
      "linux": "https://www.jetbrains.com/idea/download/?section=linux",
      "macos": "https://www.jetbrains.com/idea/download/?section=mac",
      "windows": "https://www.jetbrains.com/idea/download/?section=windows"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "ChatGPT Atlas",
    "description": "Bring ChatGPT with you across the web for instant answers, smarter suggestions, and help with tasks—all with privacy settings you can control.",
    "logo": "images/logos/Atlas.png",
    "links": {
      "website": "https://chatgpt.com/atlas/",
      "macos": "https://chatgpt.com/atlas/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Suno",
    "description": "AI song/music creator",
    "logo": "images/logos/suno.png",
    "links": {
      "website": "https://suno.com/home"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Starforge Systems",
    "description": "Starforge Systems is a US-based company that builds and sells custom pre-built gaming PCs, founded by members of the popular streamer organization OTK.",
    "logo": "images/logos/Starforge Systems.png",
    "links": {
      "website": "https://starforgesystems.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Fedora Linux",
    "description": "Fedora Linux is a free, community-driven, open-source operating system.",
    "logo": "images/logos/Fedora.png",
    "links": {
      "website": "https://www.fedoraproject.org/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "FreeStuff",
    "description": "A discord bot that sends notifications when games are made free on places like Steam and Epic Games.",
    "logo": "images/logos/freestuff.png",
    "links": {
      "website": "https://freestuffbot.xyz/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Floatplane",
    "description": "Floatplane is a streaming service that offers a wide variety of content from shows to reviews and more.",
    "logo": "images/logos/floatplane.png",
    "links": {
      "website": "https://www.floatplane.com/",
      "android": "https://play.google.com/store/apps/details?id=com.floatplane.floatplane",
      "ios": "https://apps.apple.com/us/app/floatplane/id1472071280"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "MCSR Ranked Minecraft Ranked Speedrunning",
    "description": "Race an opponent head-to-head in a Minecraft speedrun in separate worlds but on the same seed.",
    "logo": "images/logos/Minecraft Speedrunning ranked.png",
    "links": {
      "website": "https://mcsrranked.com/",
      "linux": "https://mcsrranked.com/download",
      "macos": "https://mcsrranked.com/download",
      "windows": "https://mcsrranked.com/download"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Series Graph",
    "description": "Explore episodes through ratings graphs.",
    "logo": "images/logos/series graphs.png",
    "links": {
      "website": "https://seriesgraph.com/",
      "android": "https://play.google.com/store/apps/details?id=com.henri.seriesgraph",
      "ios": "https://apps.apple.com/us/app/series-graph-episode-ratings/id6755393713"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "SteamGridDB",
    "description": "Download and share custom video game assets and personalize your gaming library.",
    "logo": "images/logos/SteamGridDB.png",
    "links": {
      "website": "https://www.steamgriddb.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Essential Mod Minecraft Mod",
    "description": "The Essential Mod is a popular, free client-side mod for Minecraft Java Edition that enables easy multiplayer world hosting, friend management, and cosmetic skins without needing a dedicated server.",
    "logo": "images/logos/Essential.png",
    "links": {
      "website": "https://essential.gg/",
      "macos": "https://essential.gg/",
      "windows": "https://essential.gg/"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "ElevenLabs",
    "description": "AI voice models and products.",
    "logo": "images/logos/elevenlabs.png",
    "links": {
      "website": "https://elevenlabs.io/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "CanYouRunIt",
    "description": "CanYouRunIt is a website that allows users to check if their computer can run a specific game.",
    "logo": "images/logos/CanYouRunIt.png",
    "links": {
      "website": "https://can-you-run-it.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Olympics",
    "description": "See information about the Olympic Games.",
    "logo": "images/logos/olympics.png",
    "links": {
      "website": "https://www.olympics.com/",
      "android": "https://play.google.com/store/apps/details?id=org.olympic.app.mobile",
      "ios": "https://apps.apple.com/us/app/olympic-games/id808794344"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {
      "websites": true
    },
    "on_home": true
  },
  {
    "name": "Bellingcat Challenges",
    "description": "Test your open source research skills with these challenges. Unlock challenges by completing the previous challenge in the series or wait for them to unlock over time.",
    "logo": "images/logos/bellingcat.png",
    "links": {
      "website": "https://challenge.bellingcat.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Minecraft Legacy Launcher",
    "description": "A custom-built, authentic launcher for playing Minecraft Legacy Console Edition.",
    "logo": "images/logos/Legacy Launcher.png",
    "links": {
      "website": "https://gradengnostic.github.io/legacylauncherweb/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Epstein Exposed",
    "description": "Search the public record fast: people, flights, documents, emails, and the relationship map behind them. Built for journalists, researchers, and anyone trying to verify what is actually in the files.",
    "logo": "images/logos/Epstein Exposed.png",
    "links": {
      "website": "https://epsteinexposed.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Minecraft Speedrunning MCSR PaceMane",
    "description": "The best Minecraft Speedrunning pace in real-time",
    "logo": "images/logos/MCSR.png",
    "links": {
      "website": "https://paceman.gg/"
    },
    "flags": {},
    "categories": {},
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Vivaldi",
    "description": "Vivaldi is a Norwegian freeware, cross-platform web browser with a built-in email client developed by Vivaldi Technologies.",
    "logo": "images/logos/vivaldi.png",
    "links": {
      "website": "https://vivaldi.com/",
      "android": "https://play.google.com/store/apps/details?id=com.vivaldi.browser",
      "ios": "https://apps.apple.com/us/app/vivaldi-powerful-web-browser/id1633234600",
      "linux": "https://vivaldi.com/download/",
      "macos": "https://vivaldi.com/download/",
      "windows": "https://vivaldi.com/download/"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true,
      "Linux": true,
      "MacOS": true,
      "Windows": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Airbuds",
    "description": "See and react to what music your friends are listing to",
    "logo": "images/logos/airbuds.png",
    "links": {
      "android": "https://play.google.com/store/apps/details?id=com.capp.poplive",
      "ios": "https://apps.apple.com/us/app/airbuds-widget/id1638906106"
    },
    "flags": {},
    "categories": {
      "Android": true,
      "IOS": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Itch",
    "description": "itch.io is an open marketplace for independent digital creators with a focus on independent video games.",
    "logo": "images/logos/itch.png",
    "links": {
      "linux": "https://itch.io/app",
      "macos": "https://itch.io/app",
      "windows": "https://itch.io/app"
    },
    "flags": {},
    "categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "Linux": true,
      "MacOS": true,
      "Windows": true
    }
  },
  {
    "name": "Lunar Client",
    "description": "The Lunar Client app enhances gaming experiences with optimized performance, customizable settings, and additional features for Minecraft players.",
    "logo": "images/logos/lunar client.png",
    "links": {
      "macos": "https://www.lunarclient.com/"
    },
    "flags": {},
    "categories": {
      "MacOS": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Adobe Photoshop",
    "description": "Adobe Photoshop is a powerful image editing software used for creating, enhancing, and manipulating photos and graphics with a wide range of advanced tools and features.",
    "logo": "images/logos/photoshop.png",
    "links": {
      "macos": "https://www.adobe.com/products/photoshop.html",
      "windows": "https://www.adobe.com/products/photoshop.html"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true
    }
  },
  {
    "name": "Adobe Premiere Pro",
    "description": "The industry-standard professional video editing software used by filmmakers and content creators worldwide.",
    "logo": "images/logos/Premiere Pro.png",
    "links": {
      "macos": "https://www.adobe.com/products/premiere.html",
      "windows": "https://www.adobe.com/products/premiere.html"
    },
    "flags": {},
    "categories": {
      "MacOS": true,
      "Windows": true
    },
    "lightmode_categories": {
      "MacOS": true,
      "Windows": true
    }
  },
  {
    "name": "Minecraft Wiki",
    "description": "The Minecraft Wiki is an extensive online resource providing comprehensive guides, tutorials, and information on gameplay mechanics, crafting recipes, mobs, blocks, and all aspects of the Minecraft video game.",
    "logo": "images/logos/minecraftwiki.png",
    "links": {
      "wiki": "https://minecraft.wiki/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Wotaku Wiki",
    "description": "Wotaku.wiki is a comprehensive index of otaku-related resources, offering links to websites, software, and guides for anime, manga, light novels, music, games, and more. ",
    "logo": "images/logos/Wotaku.png",
    "links": {
      "wiki": "https://wotaku.wiki/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Wiki": true,
      "open-source": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Attack On Titans Wiki",
    "description": "Attack On Titan Wiki On Fandom",
    "logo": "images/logos/attack on titan wiki.png",
    "links": {
      "wiki": "https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Genshin Impact Wiki",
    "description": "Genshin Impact On Fandom",
    "logo": "images/logos/Genshin Impact.png",
    "links": {
      "wiki": "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Baldur's Gate 3 Wiki",
    "description": "Baldur's Gate 3 Wiki",
    "logo": "images/logos/bg3wiki.png",
    "links": {
      "wiki": "https://bg3.wiki/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Wikitubia",
    "description": "The definitive Wikipedia-style resource for everything related to YouTube creators, history, and trends.",
    "logo": "images/logos/wikitubia.png",
    "links": {
      "wiki": "https://youtube.fandom.com/wiki/YouTube_Wiki"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Genshin.gg",
    "description": "GENSHIN.GG is a Database and Tier List website for Genshin Impact, Honkai: Star Rail, Zenless Zone Zero, and Wuthering Waves.",
    "logo": "images/logos/Genshin.gg.png",
    "links": {
      "wiki": "https://genshin.gg/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "PixelExperience Wiki",
    "description": "PixelExperience Wiki",
    "logo": "images/logos/pixelexperience wiki.png",
    "links": {
      "wiki": "https://wiki.pixelexperience.org/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Dead By Deadlight Wiki",
    "description": "Dead By Deadlight Wiki",
    "logo": "images/logos/Dead By Deadlight wiki.png",
    "links": {
      "wiki": "https://deadbydaylight.wiki.gg/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Rhythm Heaven Wiki",
    "description": "This wiki is about the popular Rhythm Heaven series created by Tsunku♂.",
    "logo": "images/logos/Rythm Heaven Wiki.png",
    "links": {
      "wiki": "https://rhwiki.net/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Escape from Tarkov Wiki",
    "description": "The Escape from Tarkov manual is a trusted guide for both current and former PMC operators fighting in Norvinsk and the surrounding environments, maintained by PMCs themselves.",
    "logo": "images/logos/escapefromtarkov wiki.png",
    "links": {
      "wiki": "https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "Wiki": true,
      "profile-websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Eve University Wiki",
    "description": "A comprehensive educational resource for EVE Online players, maintained by the EVE University community.",
    "logo": "images/logos/Eve University  Wiki.png",
    "links": {
      "wiki": "https://wiki.eveuniversity.org/"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Memory Alpha Star Trek Wiki",
    "description": "The ultimate collaborative encyclopedia for everything within the official Star Trek fictional universe.",
    "logo": "images/logos/memory-alpha.png",
    "links": {
      "wiki": "https://memory-alpha.fandom.com/wiki/Portal:Main"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Mass Effect Wiki",
    "description": "A detailed and community-driven guide to the characters, planets, and lore of the Mass Effect franchise.",
    "logo": "images/logos/Mass Effect Wiki.png",
    "links": {
      "wiki": "https://masseffect.fandom.com/wiki/Mass_Effect_Wiki"
    },
    "flags": {},
    "categories": {
      "Wiki": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Dark Reader",
    "description": "Dark Reader is a browser extension that transforms website colors to a dark mode theme, reducing eye strain and improving readability during nighttime browsing.",
    "logo": "images/logos/Dark Reader.png",
    "links": {
      "website": "https://darkreader.org/",
      "github": "https://github.com/darkreader/",
      "ios": "https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180?platform=iphone",
      "android": "https://www.microsoft.com/edge/emmx/darkreadercollaboration",
      "chrome": "https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh",
      "firefox": "https://addons.mozilla.org/firefox/addon/darkreader/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofWindows",
      "safari": "https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "extensions": true,
      "open-source": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Scratch Addons",
    "description": "The Scratch Addons extension enhances the functionality of the Scratch programming platform by providing additional features and tools for users to create and share projects more efficiently.",
    "logo": "images/logos/scartchaddons.png",
    "links": {
      "website": "https://scratchaddons.com/",
      "github": "https://github.com/ScratchAddons/",
      "chrome": "https://chrome.google.com/webstore/detail/scratch-addons/fbeffbjdlemaoicjdapfpikkikjoneco",
      "firefox": "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",
      "edge": "https://microsoftedge.microsoft.com/addons/detail/scratch-addons/iliepgjnemckemgnledoipfiilhajdjj"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "DarkMode for Chrome",
    "description": "Dark mode for all websites. Use dark theme for night and daily browsing with dark reader. Night shift mode.",
    "logo": "images/logos/DarkMode for Chrome.png",
    "links": {
      "website": "https://darkmodepro.com/",
      "chrome": "https://chromewebstore.google.com/detail/dark-mode-for-chrome/epbpdmalnhhoggbcckpffgacohbmpapb"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "DarkMode Google Docs",
    "description": "Dark mode for all websites.",
    "logo": "images/logos/Dark Mode Google Docs.png",
    "links": {
      "chrome": "https://chromewebstore.google.com/detail/dark-mode-google-docs/iabnclnclchijjckhdljmocghgmgnnii"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "YouDJ YouTube Dj",
    "description": "This extension brings DJ tools such Equalizer, Volume Booster, Sound Effects, to YouTube but also any other website!",
    "logo": "images/logos/youdj.png",
    "links": {
      "website": "https://you.dj/free-dj-software",
      "chrome": "https://chromewebstore.google.com/detail/youtube-dj-effects-eq-vol/defekohaofmambflfpfoojkmfdpcbgko",
      "windows": "https://you.dj/download-dj-software",
      "mac": "https://you.dj/download-dj-software",
      "linux": "https://you.dj/download-dj-software",
      "ios": "https://apps.apple.com/us/app/youdj-mixer-easy-dj-app/id1459666155",
      "android": "https://play.google.com/store/apps/details?id=you.dj"
    },
    "flags": {},
    "categories": {
      "extensions": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Shop.app",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/shop-app.png",
    "links": {
      "website": "https://shop.app/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Amazon Photos",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/amazonphotos.png",
    "links": {
      "website": "https://www.amazon.com/Amazon-Photos/b?ie=UTF8&node=13234696011"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Beli",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/beli.png",
    "links": {
      "website": "https://beliapp.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Student View",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/studentview.png",
    "links": {
      "website": "https://edupoint.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Internet Archive",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/internetarchive.png",
    "links": {
      "website": "https://web.archive.org/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Xfinity",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/xfinity.png",
    "links": {
      "website": "https://www.xfinity.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "American Red Cross Blood Donor",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/redcross.png",
    "links": {
      "website": "https://www.redcrossblood.org/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "King Candy Crush",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/candycrush_king.png",
    "links": {
      "website": "https://www.king.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Hilton Honors",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/hilton.png",
    "links": {
      "website": "https://www.hilton.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Delta Fly Delta",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/Delta.png",
    "links": {
      "website": "https://www.delta.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "First Tech Credit Union",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/first tech.png",
    "links": {
      "website": "https://www.firsttechfed.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Common App",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/commonapp.png",
    "links": {
      "website": "https://www.commonapp.org/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Clover",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/clover.png",
    "links": {
      "website": "https://www.clover.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Meta Business Suite",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/Meta Business suite.png",
    "links": {
      "website": "https://business.facebook.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Pokémon Trading Card Game Pocket",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/pokemon tccp.png",
    "links": {
      "website": "https://tcgpocket.pokemon.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "New York Times Games",
    "description": "Phone app nor website has darkmode",
    "logo": "images/logos/nytgames.png",
    "links": {
      "website": "https://www.nytimes.com/games/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Scratch Mit",
    "description": "App nor website has darkmode",
    "logo": "images/logos/scratch.png",
    "links": {
      "website": "https://scratch.mit.edu/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Indie Wiki Buddy",
    "description": "Website and browser extension doesn't have darkmode",
    "logo": "images/logos/Indie Wiki Buddy.png",
    "links": {
      "website": "https://getindie.wiki/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "CDC",
    "description": "Website and browser extension doesn't have darkmode",
    "logo": "images/logos/cdc.png",
    "links": {
      "website": "https://www.cdc.gov/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "PrivateBin",
    "description": "PrivateBin is a minimalist, open source online pastebin where the server has zero knowledge of pasted data.",
    "logo": "images/logos/PrivateBin.png",
    "links": {
      "website": "https://privatebin.info/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "Dockey",
    "description": "Make your macOS Dock faster.",
    "logo": "images/logos/Dockey.png",
    "links": {
      "website": "https://familiasi.gumroad.com/l/dockey"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "New Seasons Market",
    "description": "Website doesn't have darkmode",
    "logo": "images/logos/new seasons market.png",
    "links": {
      "website": "https://www.newseasonsmarket.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {
      "no-darkmode": true
    }
  },
  {
    "name": "BRmesh",
    "description": "BRmesh is a mobile application designed to control Bluetooth-enabled smart lighting devices, offering both daily and ambient lighting solutions.",
    "logo": "images/logos/BRmesh.png",
    "links": {
      "website": "https://mybrlight.com/"
    },
    "flags": {
      "no_darkmode": true
    },
    "categories": {
      "no-darkmode": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "HeroUI",
    "description": "Make beautiful websites regardless of your design experience.",
    "logo": "images/logos/hero.png",
    "links": {
      "github": "https://github.com/heroui-inc/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Bitlife",
    "description": "A popular text-based life simulator where you make choices that shape your digital avatar's entire life story.",
    "logo": "images/logos/bitlife.png",
    "links": {
      "ios": "https://apps.apple.com/us/app/bitlife-life-simulator/id1374403536",
      "android": "https://play.google.com/store/apps/details?id=com.candywriter.bitlife&hl=en_US&gl=US"
    },
    "flags": {
      "pay_for_darkmode": true
    },
    "categories": {
      "pay-for-darkmode": true
    },
    "lightmode_categories": {
      "pay-for-darkmode": true
    }
  },
  {
    "name": "bobjoerules",
    "description": "Bobjoerules about-me site",
    "logo": "images/logos/bobjoerulesws.png",
    "links": {
      "website": "https://bobjoerules.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "1nf evwltrs",
    "description": "1nf/evwltrs site",
    "logo": "images/logos/1nf.png",
    "links": {
      "website": "https://1nf.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "aa gaming",
    "description": "Aagaming about-me site",
    "logo": "images/logos/aagaming.png",
    "links": {
      "website": "https://aagaming.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Abhiyan Dhakal",
    "description": "About-me site for Abhiyan Dhakal",
    "logo": "images/logos/Abhiyan Dhakal.png",
    "links": {
      "website": "https://abhiyan.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Absolucy",
    "description": "Absolucy about-me site",
    "logo": "images/logos/absolucy.png",
    "links": {
      "website": "https://absolucy.moe/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "AdriDoesThings",
    "description": "AdriDoesThings about-me site",
    "logo": "images/logos/adridoesthings.png",
    "links": {
      "website": "https://adridoesthings.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ajay Ramachandran",
    "description": "Ajay Ramachandran about-me site",
    "logo": "images/logos/Ajay Ramachandran.png",
    "links": {
      "website": "https://ajay.app/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Alicia Sykes",
    "description": "Alicia Sykes about-me site",
    "logo": "images/logos/Alicia Sykes.png",
    "links": {
      "website": "https://www.aliciasykes.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ashish Panigrahi",
    "description": "Ashish Panigrahi about-me site",
    "logo": "images/logos/Ashish Panigrahi.png",
    "links": {
      "website": "https://ashishpanigrahi.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Alecks",
    "description": "Alecks about-me site",
    "logo": "images/logos/Alecks.png",
    "links": {
      "website": "https://alecks.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Andrew Leguay",
    "description": "Andrew Leguay about-me site",
    "logo": "images/logos/Andrew Leguay.png",
    "links": {
      "website": "https://www.andrewleguay.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Andrew Larson",
    "description": "Andrew Larson about-me site",
    "logo": "images/logos/Andrew Larson.png",
    "links": {
      "website": "https://drewj.la/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Andrew Jones",
    "description": "Andrew Jones about-me site",
    "logo": "images/logos/Andrew Jones.png",
    "links": {
      "website": "https://www.andrewthedev.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Accursed Farms Ross Scott",
    "description": "Ross Scott's YouTube site",
    "logo": "images/logos/accursed farms.png",
    "links": {
      "website": "https://www.accursedfarms.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Eric Wastl",
    "description": "Eric Wastl about-me site",
    "logo": "images/logos/Eric Wastl.png",
    "links": {
      "website": "https://was.tl/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Shrirang Kahale",
    "description": "Shrirang Kahale about-me site",
    "logo": "images/logos/Shrirang Kahale.png",
    "links": {
      "website": "https://shrirangkahale.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Abdulrahman Alfawal",
    "description": "Abdulrahman Alfawal about-me site",
    "logo": "images/logos/Alfawal.png",
    "links": {
      "website": "https://www.alfawal.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Anish De",
    "description": "Anish De about-me site",
    "logo": "images/logos/anish de.png",
    "links": {
      "website": "https://anishde.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "AshCam",
    "description": "AshCam about-me site",
    "logo": "images/logos/AshCam.png",
    "links": {
      "website": "https://ashcam.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Alexey Ardov",
    "description": "Alexey Ardov about-me site",
    "logo": "images/logos/Alexey Ardov.png",
    "links": {
      "website": "https://ardov.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ari Archer",
    "description": "Ari Archer about-me site",
    "logo": "images/logos/Ari Archer.png",
    "links": {
      "website": "https://ari.lt/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "arialfx",
    "description": "Arialfx about-me site",
    "logo": "images/logos/arialfx.png",
    "links": {
      "website": "https://arialfx.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "AnnikaV9",
    "description": "AnnikaV9 about-me site",
    "logo": "images/logos/AnnikaV9.png",
    "links": {
      "website": "https://av9.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Daksh P. Jain",
    "description": "Daksh P. Jain about-me site",
    "logo": "images/logos/Daksh P. Jain.png",
    "links": {
      "website": "https://daksh.eu.org/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Catvibers DanKGooGLy Vapourium",
    "description": "DanKGooGLy about-me site",
    "logo": "images/logos/DanKGooGLy.png",
    "links": {
      "website": "https://catvibers.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Cadence",
    "description": "Cadence about-me site",
    "logo": "images/logos/Cadence.png",
    "links": {
      "website": "https://cadence.moe/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Elliot Négrel-Jerzy",
    "description": "Elliot Négrek-Jerzy about-me site",
    "logo": "images/logos/elliotnegrekjerzy.png",
    "links": {
      "website": "https://www.bsodium.fr/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ben Herila",
    "description": "Ben Herila about-me site",
    "logo": "images/logos/Ben Herila.png",
    "links": {
      "website": "https://bherila.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Brian Maher",
    "description": "Brian Maher about-me site",
    "logo": "images/logos/Brian Maher.png",
    "links": {
      "website": "https://brianpmaher.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Brian Lovin",
    "description": "Brian Lovin about-me site",
    "logo": "images/logos/Brian Lovin.png",
    "links": {
      "website": "https://brianlovin.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Brian Takita",
    "description": "Brian Takita about-me site",
    "logo": "images/logos/Brian Takita.png",
    "links": {
      "website": "https://briantakita.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Devil Bro",
    "description": "DevilBro about-me site",
    "logo": "images/logos/DevilBro.png",
    "links": {
      "website": "https://mwittrien.github.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "seyi",
    "description": "Seyi about-me site",
    "logo": "images/logos/seyi.png",
    "links": {
      "website": "https://www.seyi.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Miguel de Moura",
    "description": "Miguel de Moura about-me site",
    "logo": "images/logos/Miguel de Moura.png",
    "links": {
      "website": "https://migueldemoura.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Andrea Doimo",
    "description": "Andrea Doimo about-me site",
    "logo": "images/logos/Andrea Doimo.png",
    "links": {
      "website": "https://www.omiod.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Bryce Bostwick",
    "description": "Bryce Bostwick about-me site",
    "logo": "images/logos/Bryce Bostwick.png",
    "links": {
      "website": "https://bryce.co/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Daniel",
    "description": "Dani about-me site",
    "logo": "images/logos/dani.png",
    "links": {
      "website": "https://danidev.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jakeler",
    "description": "Jakeler about-me site",
    "logo": "images/logos/Jakeler.png",
    "links": {
      "website": "https://blog.ja-ke.tech/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Brodie Robertson",
    "description": "Brodie Robertson about-me site",
    "logo": "images/logos/Brodie Robertson.png",
    "links": {
      "website": "https://brodierobertson.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Xander",
    "description": "Xander about-me site",
    "logo": "images/logos/Xander.png",
    "links": {
      "website": "https://www.isxander.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Tommy Tran",
    "description": "Tommy Tran about-me site",
    "logo": "images/logos/Tommy Tran.png",
    "links": {
      "website": "https://tommytran.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jonah Snider",
    "description": "Jonah Snider about-me site",
    "logo": "images/logos/Jonah Snider.png",
    "links": {
      "website": "https://jonahsnider.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Baptiste Boulongne",
    "description": "Baptiste Boulongne about-me site",
    "logo": "images/logos/Baptiste Boulongne.png",
    "links": {
      "website": "https://blgn.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Blueagle",
    "description": "Blueagle about-me site",
    "logo": "images/logos/Blueeagle.png",
    "links": {
      "website": "https://blueagle.top/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Lorenzo Bocchi",
    "description": "Lorenzo Bocchi about-me site",
    "logo": "images/logos/Lorenzo Bocchi.png",
    "links": {
      "website": "https://bocchilorenzo.github.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Pierre Bondoerffer",
    "description": "Pierre Bondoerffer about-me site",
    "logo": "images/logos/Pierre Bondoerffer.png",
    "links": {
      "website": "https://bondoer.fr/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Brian Seymour",
    "description": "Brian Seymour about-me site",
    "logo": "images/logos/brian seymour.png",
    "links": {
      "website": "https://bri.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Clément Saccoccio",
    "description": "Clément Saccoccio about-me site",
    "logo": "images/logos/clementsaccoccio.png",
    "links": {
      "website": "https://c-saccoccio.fr/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Cj Ratliff",
    "description": "Cj Ratliff about-me site",
    "logo": "images/logos/Cj Ratliff.png",
    "links": {
      "website": "https://www.cjratliff.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Bruno Tomé",
    "description": "Bruno Tomé about-me site",
    "logo": "images/logos/Bruno Tomé.png",
    "links": {
      "website": "https://brunotome.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "CookiePLMonster",
    "description": "CookiePLMonster about-me site",
    "logo": "images/logos/CookiePLMonster.png",
    "links": {
      "website": "https://cookieplmonster.github.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Snazzah",
    "description": "Snazzah about-me site",
    "logo": "images/logos/snazzah.png",
    "links": {
      "website": "https://snazzah.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "cuibonobo",
    "description": "Cuibonobo about-me site",
    "logo": "images/logos/cuibonobo.png",
    "links": {
      "website": "https://cuibonobo.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "zyrenth",
    "description": "Zyrenth about-me site",
    "logo": "images/logos/zyrenth.png",
    "links": {
      "website": "https://zyrenth.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "zerator",
    "description": "Zerator about-me site",
    "logo": "images/logos/Zerator.png",
    "links": {
      "website": "https://zerator.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "0x6rss",
    "description": "0x6rss about-me site",
    "logo": "images/logos/0x6rss.png",
    "links": {
      "website": "https://cti.monster/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Max Langer",
    "description": "Max Langer about-me site",
    "logo": "images/logos/Max Langer.png",
    "links": {
      "website": "https://max.codes/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "wiktrek",
    "description": "Wiktrek about-me site",
    "logo": "images/logos/wiktrek.png",
    "links": {
      "website": "https://wiktrek.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "MKBHD",
    "description": "MKBHD about-me site",
    "logo": "images/logos/MKBHD.png",
    "links": {
      "website": "https://mkbhd.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Darling fireball",
    "description": "A technology-focused blog and podcast platform created and solely maintained by John Gruber.",
    "logo": "images/logos/Daring Fireball.png",
    "links": {
      "website": "https://daringfireball.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Denims",
    "description": "Denims about-me site",
    "logo": "images/logos/Denims.png",
    "links": {
      "website": "https://www.denims.tv/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Destiny Steven Bonnell II",
    "description": "Destiny about-me site",
    "logo": "images/logos/Destiny.png",
    "links": {
      "website": "https://www.destiny.gg/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Devan",
    "description": "Devan about-me site",
    "logo": "images/logos/Devan.png",
    "links": {
      "website": "https://devanbuggay.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Warith AL Maawali",
    "description": "Warith AL Maawali about-me site",
    "logo": "images/logos/Warith AL Maawali.png",
    "links": {
      "website": "https://www.digi77.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "DistroTube Derek Taylor",
    "description": "DistroTube about-me site",
    "logo": "images/logos/DistroTube.png",
    "links": {
      "website": "https://distro.tube/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ecys",
    "description": "Ecys about-me site",
    "logo": "images/logos/Ecys.png",
    "links": {
      "website": "https://ecys.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jacob Parker",
    "description": "Jacob Parker about-me site",
    "logo": "images/logos/Jacob does code.png",
    "links": {
      "website": "https://jacobdoescode.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Elybeatmaker",
    "description": "Elybeatmaker about-me site",
    "logo": "images/logos/Elybeatmaker.png",
    "links": {
      "website": "https://elybeatmaker.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Framp Federico Rampazzo",
    "description": "Framp about-me site",
    "logo": "images/logos/Framp.png",
    "links": {
      "website": "https://framp.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "ForumPlayer",
    "description": "ForumPlayer about-me site",
    "logo": "images/logos/ForumPlayer.png",
    "links": {
      "website": "https://forumplayer.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Forsle",
    "description": "Games Created by Twitch Streamer Forsle",
    "logo": "images/logos/FORSLE.png",
    "links": {
      "website": "https://forsen.horse/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Fluxpoint Development",
    "description": "Fluxpoint Development about-me site",
    "logo": "images/logos/Fluxpoint Development.png",
    "links": {
      "website": "https://fluxpoint.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Fleepy",
    "description": "Fleepy about-me site",
    "logo": "images/logos/Fleepy.png",
    "links": {
      "website": "https://fleepy.tv/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "IMXNOOBX",
    "description": "IMXNOOBX about-me site",
    "logo": "images/logos/IMXNOOBX.png",
    "links": {
      "website": "https://imxnoobx.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Kashiful Haque",
    "description": "Kashiful Haque about-me site",
    "logo": "images/logos/Kashiful Haque.png",
    "links": {
      "website": "https://ifkash.vercel.app/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Benjamin O'Brian",
    "description": "Benjamin O'Brian about-me site",
    "logo": "images/logos/Benjamin obrian.png",
    "links": {
      "website": "https://iipython.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Otzdarva",
    "description": "Otzdarva about-me site",
    "logo": "images/logos/Otzdarva.png",
    "links": {
      "website": "https://otzdarva.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "oSumAtrIX",
    "description": "oSumAtrIX about-me site",
    "logo": "images/logos/osumatrix.png",
    "links": {
      "website": "https://osumatrix.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Razeen Faruque",
    "description": "Razeen Faruque about-me site",
    "logo": "images/logos/Razeen Faruque.png",
    "links": {
      "website": "https://www.razeenf.ca/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Raunak Sitoula",
    "description": "Raunak Sitoula about-me site",
    "logo": "images/logos/Raunak Sitoula.png",
    "links": {
      "website": "https://www.raunaksitoula.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Gabriel Catalfo",
    "description": "Gabriel Catalfo about-me site",
    "logo": "images/logos/Gabriel Catalfo.png",
    "links": {
      "website": "https://gabecatalfo.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Joseph CHATAIGNON",
    "description": "Joseph CHATAIGNON about-me site",
    "logo": "images/logos/Joseph CHATAIGNON.png",
    "links": {
      "website": "https://josephchataignon.github.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jhey Tompkins",
    "description": "Jhey Tompkins about-me site",
    "logo": "images/logos/Jhey Tompkins.png",
    "links": {
      "website": "https://www.jhey.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jeusto",
    "description": "Jeusto about-me site",
    "logo": "images/logos/Jeusto.png",
    "links": {
      "website": "https://www.jeusto.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Jakob Neumann",
    "description": "Jakob Neumann about-me site",
    "logo": "images/logos/Jakob Neumann.png",
    "links": {
      "website": "https://jakobneumann.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "JAKE ROMAN",
    "description": "JAKE ROMAN about-me site",
    "logo": "images/logos/JAKE ROMAN.png",
    "links": {
      "website": "https://jakeroman.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "kyleggiero",
    "description": "kyleggiero about-me site",
    "logo": "images/logos/kyleggiero.png",
    "links": {
      "website": "https://kyleggiero.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "X3NO",
    "description": "X3NO about-me site",
    "logo": "images/logos/X3NO.png",
    "links": {
      "website": "https://www.ksenon.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "korino Ender",
    "description": "korino about-me site",
    "logo": "images/logos/korino.png",
    "links": {
      "website": "https://korino.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ilya Kulbachny",
    "description": "Ilya Kulbachny about-me site",
    "logo": "images/logos/Ilya kulbachny.png",
    "links": {
      "website": "https://kulbachny.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "ppy",
    "description": "ppy about-me site",
    "logo": "images/logos/ppy.png",
    "links": {
      "website": "https://ppy.sh/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Luke Smith",
    "description": "Luke Smith about-me site",
    "logo": "images/logos/Luke Smith.png",
    "links": {
      "website": "https://lukesmith.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Cody Miller",
    "description": "Cody Miller about-me site",
    "logo": "images/logos/Cody Miller.png",
    "links": {
      "website": "https://looskie.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Lemmino",
    "description": "Lemmino about-me site",
    "logo": "images/logos/lemmino.png",
    "links": {
      "website": "https://www.lemmi.no/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Schlep.Tv",
    "description": "Schlep about-me site",
    "logo": "images/logos/SCHLEP.TV.png",
    "links": {
      "website": "https://schlep.tv/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Hectorlizard",
    "description": "Hectorlizard about-me site",
    "logo": "images/logos/Hectorlizard.png",
    "links": {
      "website": "https://hectorlizard.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Adam Smith",
    "description": "Adam Smith about-me site",
    "logo": "images/logos/Adam Smith.png",
    "links": {
      "website": "https://burkybang.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Sander van der Burg's blog",
    "description": "Sander van der Burg's blog",
    "logo": "images/logos/Sander van der Burg.png",
    "links": {
      "website": "https://sandervanderburg.blogspot.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "SammCheese",
    "description": "SammCheese about-me site",
    "logo": "images/logos/SammCheese.png",
    "links": {
      "website": "https://sammcheese.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Saliven",
    "description": "Saliven about-me site",
    "logo": "images/logos/Saliven.png",
    "links": {
      "website": "https://saliven.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ruben Panzich",
    "description": "Ruben Panzich about-me site",
    "logo": "images/logos/Ruben Panzich.png",
    "links": {
      "website": "https://www.ruben-p.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Kagurazaka. Ritsuka (晏雲杉)",
    "description": "Kagurazaka. Ritsuka (晏雲杉) about-me site",
    "logo": "images/logos/Kagurazaka Ritsuka.png",
    "links": {
      "website": "https://ritsuka.moe/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Piotr Brzozowski",
    "description": "Piotr Brzozowski about-me site",
    "logo": "images/logos/Piotr Brzozowski.png",
    "links": {
      "website": "https://stirante.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Pandadev",
    "description": "Pandadev about-me site",
    "logo": "images/logos/Pandadev.png",
    "links": {
      "website": "https://pandadev.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Nicholas Johnson",
    "description": "Nicholas Johnson about-me site",
    "logo": "images/logos/nicholasjohnson.png",
    "links": {
      "website": "https://nicholasjohnson.ch/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Neurocore",
    "description": "Neurocore about-me site",
    "logo": "images/logos/Neurocore.png",
    "links": {
      "website": "https://neurocore.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Nemanja Dragun",
    "description": "Nemanja Dragun about-me site",
    "logo": "images/logos/Nemanja Dragun.png",
    "links": {
      "website": "https://nemanjadragun.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "NanoBunTV",
    "description": "NanoBunTV about-me site",
    "logo": "images/logos/NanoBunTV.png",
    "links": {
      "website": "https://nanobun.tv/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Node",
    "description": "Node about-me site",
    "logo": "images/logos/node.png",
    "links": {
      "website": "https://n-o-d-e.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ryan Yin",
    "description": "Ryan Yin about-me site",
    "logo": "images/logos/Ryan Yin.png",
    "links": {
      "website": "https://thiscute.world/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "H. Kamran",
    "description": "H. Kamran about-me site",
    "logo": "images/logos/H. Kamran.png",
    "links": {
      "website": "https://hkamran.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Immanuel Hise",
    "description": "Immanuel Hise about-me site",
    "logo": "images/logos/Immanuel Hise.png",
    "links": {
      "website": "https://hiserod.github.io/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Nathan Lodge",
    "description": "Nathan Lodge about-me site",
    "logo": "images/logos/Nathan Lodge.png",
    "links": {
      "website": "https://hexiro.me/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Yarmo",
    "description": "Yarmo about-me site",
    "logo": "images/logos/Yarmo.png",
    "links": {
      "website": "https://yarmo.eu/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "w0rp zone",
    "description": "w0rp zone blog",
    "logo": "images/logos/w0rp zone.png",
    "links": {
      "website": "https://w0rp.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "MrQuantumOFF",
    "description": "Demir about-me site",
    "logo": "images/logos/MrQuantumOFF.png",
    "links": {
      "website": "https://mrquantumoff.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Dylan MidnightSlicer",
    "description": "Dylan (MidnightSlicer) about-me site",
    "logo": "images/logos/Dylan.png",
    "links": {
      "website": "https://mnsr.win/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Marián Mižik",
    "description": "Marián Mižik about-me site",
    "logo": "images/logos/Marian Mizik.png",
    "links": {
      "website": "https://mizik.eu/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Mitch Siegel",
    "description": "Mitch Siegel about-me site",
    "logo": "images/logos/Mitch Siegel.png",
    "links": {
      "website": "https://mit.gg/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Maxime Pinot",
    "description": "Maxime Pinot about-me site",
    "logo": "images/logos/Maxime Pinot.png",
    "links": {
      "website": "https://www.maximepinot.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "marvil",
    "description": "marvil about-me site",
    "logo": "images/logos/marvil.png",
    "links": {
      "website": "https://marvil.co/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Marte Montipo'",
    "description": "Marte Montipo' about-me site",
    "logo": "images/logos/Marte Montipo.png",
    "links": {
      "website": "https://marte.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Alex mango.pdf.zone",
    "description": "Alex about-me site",
    "logo": "images/logos/mango.pdf.zone.png",
    "links": {
      "website": "https://mango.pdf.zone/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Tarballwalf",
    "description": "Tarballwalf about-me site",
    "logo": "images/logos/Tarballwalf.png",
    "links": {
      "website": "https://trblwlf.net/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Sylvie Fox",
    "description": "Sylvie about-me site",
    "logo": "images/logos/sylvie fox.png",
    "links": {
      "website": "https://sylviefox.ca/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "The Linux Cast",
    "description": "A dedicated YouTube channel and community focusing on Linux news, tutorials, and desktop environment reviews.",
    "logo": "images/logos/The Linux Cast.png",
    "links": {
      "website": "https://thelinuxcast.org/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "tube.Kody",
    "description": "tube.Kody site",
    "logo": "images/logos/tube.Kody.png",
    "links": {
      "website": "https://tube.kdy.ch/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Pirate Software",
    "description": "Pirate Software about-me site",
    "logo": "images/logos/Pirate Software.png",
    "links": {
      "website": "https://gopiratesoftware.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Kuba pxseu",
    "description": "Kuba/pxseu about-me site",
    "logo": "images/logos/pxseu.png",
    "links": {
      "website": "https://pxseu.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Philipp",
    "description": "Philipp about-me site",
    "logo": "images/logos/Philipp.png",
    "links": {
      "website": "https://ppluss.de/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "plasticuproject",
    "description": "plasticuproject about-me site",
    "logo": "images/logos/plasticuproject.png",
    "links": {
      "website": "https://plasticuproject.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Peter Lindbergh",
    "description": "Peter Lindbergh about-me site",
    "logo": "images/logos/peter lin.png",
    "links": {
      "website": "https://peterlindbergh.obys.agency/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Pedro Lucas",
    "description": "Pedro Lucas about-me site",
    "logo": "images/logos/Pedro Lucas.png",
    "links": {
      "website": "https://pedrorok.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Maximilian Dorn",
    "description": "Maximilian Dorn about-me site",
    "logo": "images/logos/Maximilian Dorn.png",
    "links": {
      "website": "https://cerus.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "valkyrie_pilot",
    "description": "valkyrie_pilot about-me site",
    "logo": "images/logos/valkyrie_pilot.png",
    "links": {
      "website": "https://www.randomairborne.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Ewan Howell",
    "description": "Ewan Howell about-me site",
    "logo": "images/logos/Ewan Howell.png",
    "links": {
      "website": "https://ewanhowell.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Supinic",
    "description": "Supinic about-me site",
    "logo": "images/logos/Supinic.png",
    "links": {
      "website": "https://supinic.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Just Still",
    "description": " about-me site",
    "logo": "images/logos/Just Still.png",
    "links": {
      "website": "https://stillu.cc/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "sleeplessbeastie's notes",
    "description": "sleeplessbeastie's blog",
    "logo": "images/logos/sleeplessbeastie.png",
    "links": {
      "website": "https://sleeplessbeastie.eu/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Derek Sivers",
    "description": "Derek Sivers about-me site",
    "logo": "images/logos/Derek Sivers.png",
    "links": {
      "website": "https://sive.rs/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "siddharth.ray()",
    "description": "siddharth.ray() about-me site",
    "logo": "images/logos/siddharth.ray.png",
    "links": {
      "website": "https://www.siddharthray.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "shubham",
    "description": "shubham about-me site",
    "logo": "images/logos/shubham.png",
    "links": {
      "website": "https://www.shubhamprasad.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Shriram Balaji",
    "description": "Shriram Balaji about-me site",
    "logo": "images/logos/Shriram Balaji.png",
    "links": {
      "website": "https://www.shrirambalaji.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Siderite",
    "description": "A personal blog and resource site focusing on software development, technology, and philosophical musings.",
    "logo": "images/logos/Siderite.png",
    "links": {
      "website": "https://siderite.dev/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Elías",
    "description": "Elías about-me site",
    "logo": "images/logos/Elias.png",
    "links": {
      "website": "https://eliasruiz.com/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "1337x",
    "description": "Torrent indexing site for sharing movies, TV shows, games, and more via the BitTorrent protocol",
    "logo": "images/logos/1337x.png",
    "links": {
      "website": "https://www.1337x.to/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "the skindex",
    "description": "The Skindex is a popular online platform where users can create, share and download custom skins for Minecraft.",
    "logo": "images/logos/the skindex.png",
    "links": {
      "website": "https://www.minecraftskins.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Beast Saber",
    "description": "Beast Saber is a community-driven site for downloading, reviewing, and sharing custom songs for Beat Saber.",
    "logo": "images/logos/beast saber.png",
    "links": {
      "website": "https://bsaber.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "Dotapicker",
    "description": "Browser-based tool for Dota 2 drafting and counter-picking",
    "logo": "images/logos/dotapicker.png",
    "links": {
      "website": "https://dotapicker.com/"
    },
    "flags": {},
    "categories": {
      "websites": true
    },
    "lightmode_categories": {}
  },
  {
    "name": "lollilol01",
    "description": "lollilol01 about-me site",
    "logo": "images/logos/lollilol01.png",
    "links": {
      "website": "https://lollilol.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Gusted",
    "description": "Gusted about-me site",
    "logo": "images/logos/Gusted.png",
    "links": {
      "website": "https://gusted.xyz/"
    },
    "flags": {
      "profile": true
    },
    "categories": {
      "profile-websites": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Transmissionbt Transmission BitTorrent",
    "description": "A Fast, Easy and Free Bittorrent Client for macOS, Windows and Linux",
    "logo": "images/logos/transmissionbt.png",
    "links": {
      "website": "https://transmissionbt.com/",
      "macos": "https://transmissionbt.com/download/",
      "windows": "https://transmissionbt.com/download/",
      "linux": "https://transmissionbt.com/download/",
      "source": "https://github.com/transmission/"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true,
      "macos": true,
      "windows": true,
      "linux": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Uptime Kuma",
    "description": "Self-hosted monitoring tool",
    "logo": "images/logos/uptimekuma.png",
    "links": {
      "website": "https://uptime.kuma.pet/",
      "source": "https://github.com/louislam/uptime-kuma"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "VueTorrent",
    "description": "WEBUI for qBittorrent made with Vuejs!",
    "logo": "images/logos/vuetorrent.png",
    "links": {
      "website": "https://vuetorrent.github.io/demo/",
      "source": "https://github.com/VueTorrent"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Unraid",
    "description": "Operating system for self-hosted servers and network-attached storage.",
    "logo": "images/logos/unraid.png",
    "links": {
      "website": "https://unraid.net/",
      "windows": "https://unraid.net/getting-started",
      "macos": "https://unraid.net/getting-started",
      "linux": "https://unraid.net/getting-started"
    },
    "flags": {},
    "categories": {
      "Windows": true,
      "MacOS": true,
      "Linux": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Seerr",
    "description": "Seerr is a free, open-source request management and media discovery tool that works seamlessly with your Jellyfin, Plex, or Emby server.",
    "logo": "images/logos/seerr.png",
    "links": {
      "website": "https://seerr.dev/",
      "source": "https://github.com/seerr-team"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Nginx Proxy Manager",
    "description": "Docker container for managing Nginx proxy hosts with a simple, powerful interface.",
    "logo": "images/logos/nginxproxymanager.png",
    "links": {
      "website": "https://nginxproxymanager.com/",
      "source": "https://github.com/NginxProxyManager"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Netdata",
    "description": "Netdata Cloud is a real-time infrastructure monitoring and full-stack observability platform. It allows developers, sysadmins, and DevOps teams to track the health and performance of their entire IT infrastructure—including bare metal, virtual machines, containers, networks, and applications.",
    "logo": "images/logos/netdata.png",
    "links": {
      "website": "https://www.netdata.cloud/",
      "source": "https://github.com/netdata"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Ombi",
    "description": "A self-hosted web application that acts as a centralized request and discovery portal for home media servers like Plex, Emby, and Jellyfin.",
    "logo": "images/logos/ombi.png",
    "links": {
      "website": "https://ombi.io/",
      "source": "https://github.com/Ombi-app",
      "ios": "https://apps.apple.com/us/app/ombi/id1335260043",
      "android": "https://play.google.com/store/apps/details?id=com.tidusjar.Ombi",
      "windows": "https://github.com/Ombi-app/Ombi/releases",
      "macos": "https://github.com/Ombi-app/Ombi/releases",
      "linux": "https://github.com/Ombi-app/Ombi/releases"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "MacOS": true,
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Apache Guacamole",
    "description": "Apache Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH.",
    "logo": "images/logos/apacheguacamole.png",
    "links": {
      "website": "https://guacamole.apache.org/",
      "source": "https://github.com/apache/guacamole-server",
      "wikipedia": "https://en.wikipedia.org/wiki/Apache_Guacamole"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Jellyfin",
    "description": "Jellyfin is a free, open-source media server software that lets you collect, manage, and stream your personal digital media (movies, TV shows, music, and photos) to any device.",
    "logo": "images/logos/Jellyfin.png",
    "links": {
      "website": "https://jellyfin.org/",
      "source": "https://github.com/jellyfin",
      "ios": "https://apps.apple.com/us/app/jellyfin-mobile/id1480192618",
      "android": "https://play.google.com/store/apps/details?id=org.jellyfin.mobile&hl=en_US",
      "windows": "https://jellyfin.org/downloads/windows",
      "macos": "https://jellyfin.org/downloads/macos",
      "linux": "https://jellyfin.org/downloads/linux"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "MacOS": true,
      "Linux": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "LibreSpeed Speedtest",
    "description": "Self-hosted Speed Test for HTML5 and more. Easy setup, examples, configurable, mobile friendly. Supports PHP, Node, Multiple servers, and more",
    "logo": "images/logos/librespeedspeedtest.png",
    "links": {
      "website": "https://librespeed.org/",
      "source": "https://github.com/librespeed"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Authelia",
    "description": "Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. Authelia is an OpenID Connect 1.0 Provider which is OpenID Certified™ allowing comprehensive integrations, and acts as a companion for common reverse proxies.",
    "logo": "images/logos/authelia.png",
    "links": {
      "website": "https://www.authelia.com/",
      "source": "https://github.com/authelia"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "Dozzle",
    "description": "Realtime log viewer for containers. Supports Docker, Swarm and K8s.",
    "logo": "images/logos/dozzle.png",
    "links": {
      "website": "https://dozzle.dev/",
      "source": "https://github.com/amir20/dozzle"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "audiobookshelf",
    "description": "Self-hosted audiobook and podcast server.",
    "logo": "images/logos/audiobookshelf.png",
    "links": {
      "website": "https://www.audiobookshelf.org/",
      "source": "https://github.com/advplyr/audiobookshelf",
      "android": "https://play.google.com/store/apps/details?id=com.audiobookshelf.app"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": "AdGuard",
    "description": "AdGuard is a comprehensive privacy and security ecosystem primarily focused on blocking ads, preventing web tracking, and shielding users from malware.",
    "logo": "images/logos/adguard.png",
    "links": {
      "website": "https://adguard.com/",
      "source": "https://github.com/AdguardTeam",
      "wikipedia": "https://en.wikipedia.org/wiki/AdGuard",
      "ios": "https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1047223162",
      "android": "https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker",
      "windows": "https://adguard.com/",
      "macos": "https://adguard.com/",
      "chrome": "https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "Android": true,
      "IOS": true,
      "Windows": true,
      "MacOS": true,
      "Wiki": true,
      "extensions": true,
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  },
  {
    "name": " Portainer.io",
    "description": "Operational control for Kubernetes, Docker, and Podman; without the specialist overhead.",
    "logo": "images/logos/portainerio.png",
    "links": {
      "website": "https://www.portainer.io/",
      "source": "https://github.com/portainer"
    },
    "flags": {
      "open_source": true
    },
    "categories": {
      "open-source": true,
      "websites": true
    },
    "lightmode_categories": {},
    "on_home": true
  }
];
