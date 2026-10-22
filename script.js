
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    });
  });
}


// AEXON Website Preview — Customization Engine

function setText(id, value) {
  const element = document.getElementById(id);

  if (element && typeof value === "string") {
    element.textContent = value;
  }
}


function applySiteConfig(config) {
  setText("business-logo", config.logoText);
  setText("hero-eyebrow", config.heroEyebrow);
  setText("hero-title", config.heroTitle);
  setText("hero-description", config.heroDescription);
  setText("primary-cta", config.primaryCTA);

  document.title = `${config.businessName} | Website Concept`;

  // Populate services
  const servicesGrid = document.getElementById("services-grid");

  if (servicesGrid && Array.isArray(config.services)) {
    servicesGrid.replaceChildren();

    config.services.forEach((service) => {
      const card = document.createElement("article");
      card.className = "service-card";

      const heading = document.createElement("h3");
      heading.textContent = service.title;

      const description = document.createElement("p");
      description.textContent = service.description;

      card.append(heading, description);
      servicesGrid.appendChild(card);
    });
  }

  // Configure images independently of services
  if (config.images) {
    const hero = document.getElementById("home");

    if (hero && config.images.hero) {
      hero.style.backgroundImage = `
        linear-gradient(
          90deg,
          rgba(16,29,44,.96),
          rgba(16,29,44,.45)
        ),
        url("${config.images.hero}")
      `;
    }

    if (Array.isArray(config.images.projects)) {
      config.images.projects.forEach((path, index) => {
        const image = document.getElementById(
          `project-image-${index + 1}`
        );

        if (image && path) {
          image.src = path;
        }
      });
    }
  }

  // Control the optional hero disclaimer
  const conceptNote = document.getElementById("concept-note");

  if (conceptNote) {
    conceptNote.hidden = !config.isDemo;
  }
}

if (typeof siteConfig !== "undefined") {
  applySiteConfig(siteConfig);
}

if (typeof siteConfig !== "undefined") {
  applySiteConfig(siteConfig);
}
