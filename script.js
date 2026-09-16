// AdvancePranjal Portfolio & Educational Platform - Dynamic Logic Script

document.addEventListener('DOMContentLoaded', () => {
  const config = window.AP_CONFIG;
  if (!config) {
    console.error("Central configuration AP_CONFIG not loaded.");
    return;
  }

  // 1. Preloader Logic
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }
    }, 400);
  });

  // 2. Sticky Navbar Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 4. Scroll Active Navigation Link Highlight
  const sections = document.querySelectorAll('section, header');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (current && href && href.includes('#' + current)) {
        item.classList.add('active');
      }
    });
  });

  // 5. Render Quick Stats Section
  const statsGrid = document.getElementById('statsGrid');
  if (statsGrid && config.stats) {
    statsGrid.innerHTML = config.stats.map(s => `
      <div class="stat-card">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // 6. Render Skills Section
  const renderPills = (containerId, items) => {
    const el = document.getElementById(containerId);
    if (el && items) {
      el.innerHTML = items.map(item => `<span class="skill-pill"><i class="fa-solid fa-check"></i> ${item}</span>`).join('');
    }
  };

  renderPills('skillsProgramming', config.skills.programming);
  renderPills('skillsHardware', config.skills.hardware);
  renderPills('skillsAI', config.skills.ai);
  renderPills('skillsCreative', config.skills.creative);

  // 7. Render Projects Portfolio Section & Filter Logic
  const projectsGrid = document.getElementById('projectsGrid');
  const renderProjects = (filterCategory = 'all') => {
    if (!projectsGrid || !config.projects) return;

    const filtered = filterCategory === 'all' 
      ? config.projects 
      : config.projects.filter(p => p.category === filterCategory);

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card" style="box-shadow: var(--shadow-md);">
        <div>
          <div style="height: 180px; width: 100%; overflow: hidden; border-radius: 12px; border: 2px solid #0f172a; margin-bottom: 20px; position: relative;">
            <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <span class="tech-tag" style="position: absolute; top: 10px; right: 10px; background: var(--accent-orange); color: #fff; margin:0; border: 2px solid #0f172a;">${p.category}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
        </div>
        <div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;">
            ${p.technologies.map(t => `<span class="tech-tag" style="font-size: 0.75rem; padding: 2px 10px;">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <a href="${p.github}" target="_blank" rel="noopener" class="project-link">
              GitHub Repo <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  };

  renderProjects('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // 8. Render Achievements Vertical Timeline Section
  const timelineContainer = document.getElementById('timelineContainer');
  if (timelineContainer && config.achievements) {
    timelineContainer.innerHTML = config.achievements.map((ach, idx) => `
      <div class="timeline-item ${idx % 2 === 0 ? 'left' : 'right'}">
        <div class="timeline-dot"><i class="fa-solid fa-trophy"></i></div>
        <div class="timeline-card">
          <span class="timeline-year">${ach.year}</span>
          <h3 class="timeline-title">${ach.title}</h3>
          <div class="timeline-venue"><i class="fa-solid fa-location-dot"></i> ${ach.venue} | <strong style="color: var(--accent-orange);">${ach.result}</strong></div>
          <p class="timeline-desc">${ach.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 9. Render Learn Section Articles & Filter
  const learnArticlesGrid = document.getElementById('learnArticlesGrid');
  const renderLearnArticles = (category = 'all') => {
    if (!learnArticlesGrid || !config.learnArticles) return;

    const filtered = category === 'all'
      ? config.learnArticles
      : config.learnArticles.filter(a => a.category === category);

    learnArticlesGrid.innerHTML = filtered.map(a => `
      <div class="learn-article-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <span class="tech-tag" style="margin:0; background: rgba(255, 85, 0, 0.1); color: var(--accent-orange); border: 2px solid var(--accent-orange);">${a.category}</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${a.readTime} | ${a.difficulty}</span>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.35rem; margin-bottom: 12px; color: var(--border-dark); font-weight: 900;">${a.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">${a.summary}</p>
        
        <div style="background: #f8fafc; border: 2px solid #cbd5e1; border-radius: var(--radius-sm); padding: 14px; margin-bottom: 20px;">
          <h5 style="font-family: var(--font-heading); font-size: 0.85rem; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 8px;"><i class="fa-solid fa-screwdriver-wrench"></i> Required Components</h5>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${a.components.map(c => `<span class="tech-tag" style="font-size: 0.75rem; padding: 2px 8px;">${c}</span>`).join('')}
          </div>
        </div>

        <div style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 0.8rem; padding: 12px; border-radius: 8px; margin-bottom: 20px; overflow-x: auto;">
          <code>${a.codeSnippet}</code>
        </div>

        <a href="https://www.youtube.com/@AdvancePranjal" target="_blank" rel="noopener" class="btn-secondary" style="width: 100%; justify-content: center; padding: 10px; font-size: 0.88rem;">
          Watch Video Tutorial <i class="fa-brands fa-youtube" style="color: red;"></i>
        </a>
      </div>
    `).join('');
  };

  renderLearnArticles('all');

  const learnFilterBtns = document.querySelectorAll('.learn-filter-btn');
  learnFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      learnFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-learn-filter');
      renderLearnArticles(cat);
    });
  });

  // 10. Render Sensor Library Cards
  const sensorLibraryGrid = document.getElementById('sensorLibraryGrid');
  if (sensorLibraryGrid && config.sensorLibrary) {
    sensorLibraryGrid.innerHTML = config.sensorLibrary.map(s => `
      <div class="sensor-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span class="tech-tag" style="margin:0; font-size: 0.75rem;">${s.category}</span>
          <i class="fa-solid fa-microchip" style="color: var(--accent-orange); font-size: 1.2rem;"></i>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 900; margin-bottom: 8px; color: var(--border-dark);">${s.name}</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 14px; line-height: 1.5;">${s.desc}</p>
        
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan); background: #f0f9ff; padding: 8px 12px; border-radius: 6px; border: 1px solid #bae6fd; margin-bottom: 14px;">
          <i class="fa-solid fa-sliders"></i> ${s.specs}
        </div>

        <div style="background: #0f172a; color: #4ade80; font-family: monospace; font-size: 0.78rem; padding: 10px; border-radius: 6px; overflow-x: auto;">
          <code>${s.codeSnippet}</code>
        </div>
      </div>
    `).join('');
  }

  // 11. Copy Email Helper
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = config.brand.email;
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }
});
