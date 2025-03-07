
// Toggle dark/light mode
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      toggleThemeIcons(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      toggleThemeIcons(true);
    }
  }
  
  // Update theme icons based on current theme
  function toggleThemeIcons(isDarkMode) {
    // Update desktop theme toggle icons
    document.getElementById('moon-icon').classList.toggle('hidden', !isDarkMode);
    document.getElementById('sun-icon').classList.toggle('hidden', isDarkMode);
    
    // Update mobile theme toggle icons
    document.getElementById('moon-icon-mobile').classList.toggle('hidden', !isDarkMode);
    document.getElementById('sun-icon-mobile').classList.toggle('hidden', isDarkMode);
  }
  
  // Initialize theme from localStorage or system preference
  function initTheme() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toggleThemeIcons(isDarkMode);
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    const isOpen = mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
  
  // Close mobile menu when clicking on links
  function setupMobileMenuLinks() {
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('menu-icon').classList.remove('hidden');
        document.getElementById('close-icon').classList.add('hidden');
      });
    });
  }
  
  // Handle FAQ toggling
  function setupFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const chevronDown = question.querySelector('.chevron-down');
        const chevronUp = question.querySelector('.chevron-up');
        
        // Toggle answer visibility
        if (answer.classList.contains('hidden')) {
          answer.classList.remove('hidden');
          chevronDown.classList.add('hidden');
          chevronUp.classList.remove('hidden');
        } else {
          answer.classList.add('hidden');
          chevronDown.classList.remove('hidden');
          chevronUp.classList.add('hidden');
        }
      });
    });
  }
  
  // Handle Settings Guide toggling
  function setupGuideAccordion() {
    document.querySelectorAll('.guide-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const chevronDown = question.querySelector('.chevron-down');
        const chevronUp = question.querySelector('.chevron-up');
        
        // Toggle answer visibility
        if (answer.classList.contains('hidden')) {
          answer.classList.remove('hidden');
          chevronDown.classList.add('hidden');
          chevronUp.classList.remove('hidden');
        } else {
          answer.classList.add('hidden');
          chevronDown.classList.remove('hidden');
          chevronUp.classList.add('hidden');
        }
      });
    });
  }
  
  // Handle feedback form submission
  function setupFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackMessage = document.getElementById('feedback-message');
    
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, you would send data to a server here
        // For now, just show the success message
        feedbackForm.reset();
        feedbackMessage.classList.remove('hidden');
        
        // Hide message after 3 seconds
        setTimeout(() => {
          feedbackMessage.classList.add('hidden');
        }, 3000);
      });
    }
  }
  
  // Handle "Explore Features" button click
  function setupExploreButton() {
    const exploreButton = document.getElementById('explore-features');
    if (exploreButton) {
      exploreButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
  
  // Update navigation links based on scroll position
  function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
      header.classList.add('bg-white', 'dark:bg-gray-900', 'shadow-sm');
    } else {
      header.classList.remove('bg-white', 'dark:bg-gray-900', 'shadow-sm');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = null;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });
    
    // Update desktop nav links
    if (currentSectionId) {
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }
  
  // Initialize all functionality when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Theme toggle button listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);
    
    // Setup mobile menu links
    setupMobileMenuLinks();
    
    // Setup FAQ accordions
    setupFaqAccordion();
    
    // Setup Guide accordions
    setupGuideAccordion();
    
    // Setup feedback form
    setupFeedbackForm();
    
    // Setup explore features button
    setupExploreButton();
    
    // Handle scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial scroll event to set header state
    handleScroll();
  });
  