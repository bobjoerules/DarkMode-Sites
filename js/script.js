let allSites = [];
let targetUrl = '';

let basePath = '';
if (window.location.pathname.includes('/categories/')) {
    basePath = '../../';
} else if (window.location.pathname.includes('/form/')) {
    basePath = '../';
}

document.addEventListener('DOMContentLoaded', () => {
    updateYear();
    setupContextMenu();
    setupExternalLinks();
    setupTooltips();
    setupRedirectModal();

    if (typeof SITES_DATA !== 'undefined') {
        allSites = SITES_DATA;
        allSites.forEach(cleanSiteLinks);
        renderSites();
    } else {
        console.error('SITES_DATA not found');
    }
});

function cleanSiteLinks(site) {
    if (!site || !site.links) return;
    const websiteUrl = site.links.website;
    if (websiteUrl) {
        if (websiteUrl.includes('chromewebstore.google.com') || websiteUrl.includes('chrome.google.com/webstore')) {
            if (!site.links.chrome) {
                site.links.chrome = websiteUrl;
            }
            delete site.links.website;
        } else if (websiteUrl.includes('addons.mozilla.org')) {
            if (!site.links.firefox) {
                site.links.firefox = websiteUrl;
            }
            delete site.links.website;
        } else if (websiteUrl.includes('microsoftedge.microsoft.com/addons')) {
            if (!site.links.edge) {
                site.links.edge = websiteUrl;
            }
            delete site.links.website;
        }
    }
}

function updateYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}


function getCategory() {
    const path = window.location.pathname;
    if (path.includes('/categories/Android')) return 'android';
    if (path.includes('/categories/IOS')) return 'ios';
    if (path.includes('/categories/Windows')) return 'windows';
    if (path.includes('/categories/MacOS')) return 'macos';
    if (path.includes('/categories/Linux')) return 'linux';
    if (path.includes('/categories/Wiki')) return 'wiki';
    if (path.includes('/categories/extensions')) return 'extensions';
    if (path.includes('/categories/no-darkmode')) return 'no-darkmode';
    if (path.includes('/categories/open-source')) return 'open-source';
    if (path.includes('/categories/pay-for-darkmode')) return 'pay-for-darkmode';
    if (path.includes('/categories/profile-websites')) return 'profile-websites';
    if (path.includes('/categories/websites')) return 'websites';
    return 'home';
}

function renderSites() {
    const ul = document.getElementById("all");
    if (!ul) return;

    const category = getCategory();
    let filtered = allSites.filter(site => {
        switch (category.toLowerCase()) {
            case 'home': return site.on_home;
            case 'android': return site.categories['Android'];
            case 'ios': return site.categories['IOS'];
            case 'windows': return site.categories['Windows'];
            case 'macos': return site.categories['MacOS'];
            case 'linux': return site.categories['Linux'];
            case 'wiki': return site.categories['Wiki'];
            case 'extensions': return site.categories['extensions'];
            case 'no-darkmode': return site.categories['no-darkmode'];
            case 'open-source': return site.categories['open-source'];
            case 'pay-for-darkmode': return site.categories['pay-for-darkmode'];
            case 'profile-websites': return site.categories['profile-websites'];
            case 'websites': return site.categories['websites'];
            default: return site.categories[category];
        }
    });

    filtered.sort(() => Math.random() - 0.5);

    ul.innerHTML = '';
    filtered.forEach(site => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'booklink';
        a.innerHTML = `<img src="${basePath}${site.logo}" alt="${site.name} Icon">${site.name}`;
        a.addEventListener('click', (e) => { e.preventDefault(); openSitePopup(site); });
        li.appendChild(a);
        ul.appendChild(li);
    });

    const popup = document.getElementById("popupcontent");
    if (popup) {
        let label = ' Apps';
        if (['home', 'no-darkmode', 'open-source'].includes(category)) label = ' Websites/Apps';
        else if (category === 'extensions') label = ' Extensions';
        else if (category === 'websites') label = ' Websites';
        else if (category === 'profile-websites') label = ' About-Me Websites/Pages';
        else if (category === 'wiki') label = ' Websites/Pages';
        else if (category === 'pay-for-darkmode') label = ' App';
        popup.innerHTML = filtered.length + label;
    }
}

function renderStandardItem(site, category) {
    let url = site.links[category] || site.links.website || '#';
    if (category === 'home' || category === 'websites') url = site.links.website || url;

    const isSpecialCategory = ['no-darkmode', 'pay-for-darkmode'].includes(category);
    const lightmodeClass = (site.flags.lightmode && !isSpecialCategory) ? 'lightmode' : '';

    const logoPath = basePath + site.logo;

    return `
        <a href="${url}" class="booklink ${lightmodeClass}" data-title="${site.description}">
            <img src="${logoPath}" alt="${site.name} Icon">
            ${site.name}
        </a>
    `;
}

function renderExtensionItem(site) {
    const logoPath = basePath + site.logo;
    const dropdownLinks = [];

    const types = [
        { key: 'website', label: 'Website', icon: 'website.png' },
        { key: 'github', label: 'GitHub', icon: 'github.png' },
        { key: 'gitlab', label: 'GitLab', icon: 'opensource.png' },
        { key: 'codeberg', label: 'Codeberg', icon: 'opensource.png' },
        { key: 'source', label: 'Source', icon: 'opensource.png' },
        { key: 'ios', label: 'IOS', icon: 'ios.png' },
        { key: 'android', label: 'Android', icon: 'android.png' },
        { key: 'chrome', label: 'Chrome', icon: 'chrome.png' },
        { key: 'firefox', label: 'Firefox', icon: 'firefox.png' },
        { key: 'edge', label: 'Edge', icon: 'edge.png' },
        { key: 'safari', label: 'Safari', icon: 'safari.png' },
        { key: 'opera', label: 'Opera', icon: 'opera.png' },
        { key: 'wikipedia', label: 'Wikipedia', icon: 'wikipedia.png' }
    ];

    types.forEach(t => {
        if (site.links[t.key]) {
            dropdownLinks.push(`<a href="${site.links[t.key]}" data-type="${t.key}"><img src="${basePath}images/icons/${t.icon}" alt="${t.label} Image" style="width:16px;height:16px; vertical-align: middle;"> ${t.label}</a>`);
        }
    });

    return `
        <div class="dropdown">
            <button class="dropbtn booklink">
                ${site.name}
                <img src="${logoPath}" alt="${site.name} Icon" data-title="${site.description}">
            </button>
            <div class="dropdown-content">
                ${dropdownLinks.join('')}
            </div>
        </div>
    `;
}


function searchSite() {
    const input = document.getElementById('searchapp');
    if (!input) return;

    const filter = input.value.toUpperCase();
    let foundCount = 0;
    const ul = document.getElementById("all");
    const liItems = ul.getElementsByTagName('li');

    for (let i = 0; i < liItems.length; i++) {
        let text = '';
        const a = liItems[i].getElementsByTagName("a")[0];
        const btn = liItems[i].getElementsByTagName("button")[0];

        if (a) text = a.textContent || a.innerText;
        else if (btn) text = btn.textContent || btn.innerText;

        if (text.toUpperCase().startsWith(filter) || text.toUpperCase().includes(" " + filter)) {
            liItems[i].style.display = "";
            foundCount++;
        } else {
            liItems[i].style.display = "none";
        }
    }

    const nothingFound = document.getElementById('nothingfound');
    if (nothingFound) {
        nothingFound.style.display = foundCount === 0 ? "" : "none";
    }
}

function setupContextMenu() {
    const image = document.getElementById('homeimage');
    const menu = document.getElementById('homemenu');
    const downloadBtn = document.getElementById('downloadImage');

    if (image && menu) {
        image.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            menu.style.left = '20px';
            menu.style.top = '100px';
            menu.style.display = 'block';
        });

        document.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = `${basePath}images/DarkMode Sites.png`;
            link.download = 'DarkMode Sites.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

function setupExternalLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
        const isExternal = link.hostname && link.hostname !== window.location.hostname;
        if (isExternal) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

function setupTooltips() {
    const toggleButton = document.querySelector("#activateTooltips");
    if (!toggleButton) return;

    let tooltipsActive = false;
    let listeners = [];

    toggleButton.addEventListener("click", () => {
        const elements = document.querySelectorAll("[data-title]");

        if (!tooltipsActive) {
            elements.forEach(el => {
                const enterHandler = (e) => {
                    const tooltip = document.createElement("div");
                    tooltip.textContent = el.getAttribute("data-title");
                    tooltip.className = "dynamic-tooltip";
                    tooltip.style.position = "absolute";
                    tooltip.style.background = "rgba(0,0,0,0.5)";
                    tooltip.style.color = "white";
                    tooltip.style.fontFamily = "verdana";
                    tooltip.style.padding = "4px 8px";
                    tooltip.style.borderRadius = "10px";
                    tooltip.style.pointerEvents = "none";
                    tooltip.style.maxWidth = "400px";
                    tooltip.style.textAlign = "center";
                    tooltip.style.zIndex = "9999";
                    document.body.appendChild(tooltip);

                    const moveTooltip = (e) => {
                        tooltip.style.left = e.pageX + 10 + "px";
                        tooltip.style.top = e.pageY + 10 + "px";
                    };

                    el.addEventListener("mousemove", moveTooltip);
                    el.addEventListener("mouseleave", () => {
                        tooltip.remove();
                        el.removeEventListener("mousemove", moveTooltip);
                    }, { once: true });

                    moveTooltip(e);
                };

                el.addEventListener("mouseenter", enterHandler);
                listeners.push({ el, enterHandler });
            });

            tooltipsActive = true;
            toggleButton.textContent = "Tooltips On";
        } else {
            listeners.forEach(({ el, enterHandler }) => {
                el.removeEventListener("mouseenter", enterHandler);
            });
            listeners = [];
            tooltipsActive = false;
            toggleButton.textContent = "Tooltips Off";
        }
    });
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'none';
    const popup2 = document.getElementById('popup2');
    if (popup2 && (window.location.pathname === '/DarkMode-sheet/' || window.location.pathname === '/')) {
        popup2.style.display = 'none';
    }
}

function isLinkTypeLightmode(site, type) {
    if (!site || !site.lightmode_categories) return false;

    const lightmodeCats = Object.keys(site.lightmode_categories).map(k => k.toLowerCase());
    const typeLower = type.toLowerCase();

    let checkKeys = [];
    if (typeLower === 'website') {
        checkKeys = ['websites'];
    } else if (['chrome', 'firefox', 'edge', 'safari', 'opera', 'brave'].includes(typeLower)) {
        checkKeys = ['extensions'];
    } else if (['wiki', 'wikipedia'].includes(typeLower)) {
        checkKeys = ['wiki'];
    } else {
        checkKeys = [typeLower];
    }

    return checkKeys.some(key => lightmodeCats.includes(key));
}

function isDarkReaderActive() {
    const hasStyleTags = !!document.querySelector('style.darkreader');
    const hasHtmlAttribute = document.documentElement.hasAttribute('data-darkreader-mode') ||
        document.documentElement.hasAttribute('data-darkreader-scheme');
    return hasStyleTags || hasHtmlAttribute;
}

function shouldShowLightmodeStyles() {
    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return false;
    }
    if (isDarkReaderActive()) {
        return false;
    }
    return true;
}

function shouldShowLightmodePopup() {
    if (!shouldShowLightmodeStyles()) {
        return false;
    }
    if (document.cookie.split('; ').some(row => row.startsWith('hideRedirectWarning=true'))) {
        return false;
    }
    return true;
}

function setupRedirectModal() {
    const confirmBtn = document.getElementById('confirm-redirect');
    const cancelBtn = document.getElementById('cancel-redirect');
    const modal = document.getElementById('redirect-modal');

    if (confirmBtn && modal) {
        confirmBtn.addEventListener('click', () => {
            if (targetUrl) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
            modal.style.display = 'none';
        });
    }

    if (cancelBtn && modal) {
        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal && !document.getElementById('never-show-redirect')) {
        const neverBtn = document.createElement('button');
        neverBtn.id = 'never-show-redirect';
        neverBtn.textContent = "Don't Show Again";
        modal.appendChild(neverBtn);

        neverBtn.addEventListener('click', () => {
            document.cookie = "hideRedirectWarning=true; max-age=31536000; path=/";
            if (targetUrl) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
            modal.style.display = 'none';
        });
    }
}

function openSitePopup(site) {
    const overlay = document.getElementById('site-popup-overlay');
    const heroContainer = document.getElementById('site-popup').querySelector('.popup-hero');
    const logo = document.getElementById('popup-logo');
    const heroImg = document.getElementById('popup-hero-img');
    const desc = document.getElementById('popup-description');
    const linksGrid = document.getElementById('popup-links');

    const transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    const logoFileName = site.logo.split('/').pop();
    const newSizeLogoPath = basePath + 'images/new size/' + logoFileName;
    const originalLogoPath = basePath + site.logo;

    logo.onload = null;
    logo.onerror = null;
    logo.src = originalLogoPath;

    const tempLogo = new Image();
    tempLogo.onload = () => {
        logo.src = newSizeLogoPath;
    };
    tempLogo.src = newSizeLogoPath;

    desc.textContent = site.description || "No description available.";

    const previewSrc = site.preview || site.thumbnail || `images/previews/${site.name.replace(/\?/g, '')}.png`;
    const fullPreviewPath = basePath + previewSrc;

    heroImg.onload = null;
    heroImg.onerror = null;
    heroImg.style.filter = 'none';

    const setHeroFallback = (imgEl, containerEl, newSizePath, originalPath) => {
        const tempLogoForHero = new Image();
        tempLogoForHero.onload = () => {
            imgEl.src = newSizePath;
            imgEl.style.filter = 'blur(40px) brightness(0.5)';
            containerEl.classList.add('no-hero');
        };
        tempLogoForHero.onerror = () => {
            imgEl.src = originalPath;
            imgEl.style.filter = 'blur(40px) brightness(0.5)';
            containerEl.classList.add('no-hero');
        };
        tempLogoForHero.src = newSizePath;
    };

    const hasExplicitPreview = !!(site.preview || site.thumbnail);

    if (hasExplicitPreview) {
        heroContainer.classList.remove('no-hero');
        heroImg.src = transparentGif;

        const tempHero = new Image();
        tempHero.onload = () => {
            heroImg.src = fullPreviewPath;
            heroImg.style.filter = 'none';
        };
        tempHero.onerror = () => {
            setHeroFallback(heroImg, heroContainer, newSizeLogoPath, originalLogoPath);
        };
        tempHero.src = fullPreviewPath;
    } else {
        heroContainer.classList.add('no-hero');
        heroImg.src = transparentGif;

        const tempHero = new Image();
        tempHero.onload = () => {
            heroImg.src = fullPreviewPath;
            heroImg.style.filter = 'none';
            heroContainer.classList.remove('no-hero');
        };
        tempHero.onerror = () => {
            setHeroFallback(heroImg, heroContainer, newSizeLogoPath, originalLogoPath);
        };
        tempHero.src = fullPreviewPath;
    }

    linksGrid.innerHTML = '';
    const iconMap = {
        website: 'website.png', android: 'android.png', ios: 'ios.png',
        windows: 'windows.png', macos: 'mac.png', mac: 'mac.png', linux: 'linux.png',
        chrome: 'chrome.png', firefox: 'firefox.png', edge: 'edge.png',
        safari: 'safari.png', opera: 'opera.png', brave: 'brave.png',
        wiki: 'Wiki.png', wikipedia: 'wikipedia.png', github: 'github.png',
        gitlab: 'opensource.png', codeberg: 'opensource.png', source: 'opensource.png',
        'naver whale': 'narver whale.png', 'other browsers': 'extensions.png'
    };

    const entries = Object.entries(site.links);
    const lastKeys = ['website', 'github', 'gitlab', 'codeberg', 'source', 'wiki', 'wikipedia'];
    const appLinks = entries.filter(([key]) => !lastKeys.includes(key));
    const webLinks = [];
    lastKeys.forEach(k => {
        const found = entries.find(([key]) => key === k);
        if (found) webLinks.push(found);
    });
    const sortedEntries = [...appLinks, ...webLinks];

    sortedEntries.forEach(([type, url]) => {
        if (!url || url === '#') return;
        const linkItem = document.createElement('a');
        linkItem.href = url;
        linkItem.target = '_blank';
        linkItem.className = 'popup-link-item';

        const isLightmode = isLinkTypeLightmode(site, type);
        if (isLightmode) {
            if (shouldShowLightmodeStyles()) {
                linkItem.classList.add('link-lightmode');
            }
            linkItem.addEventListener('click', (e) => {
                if (shouldShowLightmodePopup()) {
                    e.preventDefault();
                    targetUrl = url;
                    const modal = document.getElementById('redirect-modal');
                    if (modal) {
                        modal.style.display = 'block';
                    }
                }
            });
        }

        const iconName = iconMap[type] || 'website.png';
        const iconPath = `${basePath}images/icons/${iconName}`;
        linkItem.innerHTML = `<img src="${iconPath}" class="popup-link-icon" alt="${type}"><span class="popup-link-text">${type}</span>`;

        linksGrid.appendChild(linkItem);
    });

    overlay.classList.add('active');
}

function closeSitePopup() {
    const overlay = document.getElementById('site-popup-overlay');
    if (overlay) overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('site-popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeSitePopup();
        });
    }
});