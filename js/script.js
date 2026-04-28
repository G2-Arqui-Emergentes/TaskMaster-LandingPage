document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const faqQuestions = document.querySelectorAll('.faq-question');
  const sections = document.querySelectorAll('section');
  const contactForm = document.querySelector('.contact-form');
  const newsletterForm = document.querySelector('.newsletter-form');
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  const featureSlides = document.querySelectorAll('.feature-slide');
  const featureDots = document.querySelectorAll('.feature-dot');
  const featurePrev = document.querySelector('.feature-prev');
  const featureNext = document.querySelector('.feature-next');
  let currentFeatureSlide = 0;

  // Traducciones
  const translations = {
    es: {
      nav: {
        features: "Características",
        benefits: "Beneficios",
        about: "Nosotros",
        faq: "FAQ",
        contact: "Contáctanos",
        downloadApp: "Descargar App",
      },
      hero: {
        title: "Transforma la gestión de tus proyectos con <span class=\"highlight\">TaskMaster</span>",
        description: "Acelera la colaboración y mantén el control total de los proyectos.",
        cta: "Descargar Aplicación"
      },
      features: {
        kicker: "Potencia tu equipo",
        title: "Características principales",
        sprint_stats: {
          title: "Gestión de Proyectos y Tareas",
          description: "Organiza tus proyectos y tareas en un solo lugar. Asigna responsabilidades, define plazos y prioridades, y permite a los miembros del equipo actualizar su progreso en tiempo real. Asegura un flujo de trabajo ordenado y eficiente, sin duplicidad de esfuerzos.",
          point_1: "Asignación inteligente",
          point_2: "Flujo sin duplicidad"
        },
        team_management: {
          title: "Colaboración en Tiempo Real",
          description: "Facilita la comunicación entre los miembros del equipo mediante notificaciones instantáneas. Los cambios en las tareas y proyectos se reflejan en tiempo real, asegurando que todos los miembros estén siempre alineados y actualizados.",
          point_1: "Notificaciones instantáneas",
          point_2: "Equipo siempre alineado"
        },
        backlog_management: {
          title: "Visualización y Seguimiento del Progreso",
          description: "Visualiza el estado de los proyectos y tareas a través de tableros y calendarios interactivos. Permite un seguimiento claro y efectivo del avance, ayudando a los líderes de proyecto a identificar rápidamente posibles retrasos o áreas que requieren atención.",
          point_1: "Tableros interactivos",
          point_2: "Detección de retrasos"
        }
      },
      benefits: {
        title: "Beneficios",
        work_environment: {
          title: "Mejora el ambiente laboral",
          description: "Mejora la gestión del trabajo con TaskMaster y reduce así la incertidumbre, generando un ambiente más organizado y menos conflictivo.",
          link: "Descubre cómo <span>&rarr;</span>"
        },
        transparency: {
          title: "Aumenta la transparencia",
          description: "Proporciona visibilidad total del progreso y los problemas del proyecto a todos los interesados, mejorando la confianza y la responsabilidad.",
          link: "Explora más <span>&rarr;</span>"
        },
        decision_making: {
          title: "Mejora la toma de decisiones",
          description: "Proporciona datos en tiempo real y análisis predictivos que permiten tomar decisiones informadas y reducir el riesgo de fracaso.",
          link: "Conoce más <span>&rarr;</span>"
        }
      },
      about: {
        title: "Nosotros",
        description: "Apex Cybernetics es una startup dedicada a desarrollar soluciones innovadoras para optimizar la gestión de proyectos en las empresas. Nos enfocamos en crear herramientas que mejoren la eficiencia, fomenten la colaboración y ayuden a los equipos a alcanzar sus objetivos de manera efectiva.",
        mission: "Nuestra misión es elevar la eficiencia y calidad de los proyectos en startups de software, optimizando flujos de trabajo y facilitando la toma de decisiones basadas en datos.",
        vision: "Aspiramos a ser líderes en la gestión de proyectos de software, ofreciendo soluciones que impulsen el éxito y el crecimiento sostenible de las empresas emergentes."
      },
      about_team: {
        title: "Sobre el equipo",
        description: "Conoce al equipo detrás de TaskMaster y cómo trabajamos para crear soluciones innovadoras para la gestión de proyectos."
      },
      about_product: {
        title: "Sobre el producto",
        description: "Descubre cómo TaskMaster puede transformar la gestión de tus proyectos y potenciar la colaboración de tu equipo."
      },
      faq: {
        title: "Preguntas Frecuentes",
        what_is: {
          question: "¿Qué es TaskMaster?",
          answer: "TaskMaster es una plataforma diseñada para optimizar la gestión de proyectos en las empresas, facilitando la colaboración y el seguimiento del progreso del equipo."
        },
        how_to_register: {
          question: "¿Cómo puedo registrarme?",
          answer: "Puedes registrarte haciendo clic en el botón \"Registrarse\" en la parte superior de la página y siguiendo las instrucciones."
        },
        benefits: {
          question: "¿Qué beneficios ofrece TaskMaster?",
          answer: "TaskMaster ofrece mejoras en la transparencia, la toma de decisiones y el ambiente laboral, entre otros beneficios que optimizan la gestión de proyectos."
        },
        easy_to_use: {
          question: "¿Es fácil de usar?",
          answer: "Sí, TaskMaster es fácil de usar para cualquier usuario que quiera gestionar un proyecto usando método SCRUM."
        }
      },
      contact: {
        title: "Estamos aquí para <span class=\"highlight\">ayudarte</span>",
        description: "¿Tienes preguntas o necesitas más información? Nuestro equipo está listo para responder a tus consultas y ayudarte a descubrir cómo TaskMaster puede transformar la gestión de tus proyectos.",
        email: {
          label: "Correo electrónico"
        },
        phone: {
          label: "Teléfono"
        },
        location: {
          label: "Ubicación",
          value: "Lima, Perú"
        },
        form: {
          title: "Envíanos un mensaje",
          subtitle: "Completa el formulario y te responderemos a la brevedad.",
          name: "Nombre completo",
          name_placeholder: "Ej. Juan Pérez",
          email: "Correo electrónico",
          email_placeholder: "Ej. juan@ejemplo.com",
          company: "Empresa",
          company_placeholder: "Ej. Tu Empresa S.A.",
          message: "Mensaje",
          message_placeholder: "¿En qué podemos ayudarte?",
          submit: "Enviar mensaje"
        },
        newsletter: {
          placeholder: "Tu correo electrónico",
          button: "Suscribirse"
        }
      },
      footer: {
        description: "Optimizando la gestión de proyectos de software con soluciones innovadoras que impulsan la eficiencia y colaboración.",
        quick_links: "Enlaces rápidos",
        resources: "Recursos",
        blog: "Blog",
        guides: "Guías",
        documentation: "Documentación",
        privacy_policy: "Políticas de privacidad",
        terms_service: "Términos de servicio",
        newsletter: {
          title: "Mantente informado",
          description: "Suscríbete a nuestro boletín para recibir noticias y actualizaciones."
        },
        copyright: "&copy; 2026 Apex Cybernetics. Todos los derechos reservados.",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies"
      }
    },
    en: {
      nav: {
        features: "Features",
        benefits: "Benefits",
        about: "About Us",
        faq: "FAQ",
        contact: "Contact",
        downloadApp: "Download App",
      },
      hero: {
        title: "Optimize development and lead with <span class=\"highlight\">TaskMaster</span>",
        description: "Accelerate collaboration and maintain total control of the projects.",
        cta: "Download App"
      },
      features: {
        kicker: "Boost your team",
        title: "Key Features",
        sprint_stats: {
          title: "Project and Task Management",
          description: "Organize your projects and tasks in one place. Assign responsibilities, set deadlines and priorities, and allow team members to update their progress in real-time. Ensure a smooth and efficient workflow without duplicated efforts.",
          point_1: "Smart assignment",
          point_2: "No duplicated workflow"
        },
        team_management: {
          title: "Real-Time Collaboration",
          description: "Facilitate communication among team members through instant notifications. Changes in tasks and projects are reflected in real-time, ensuring all members are always aligned and updated.",
          point_1: "Instant notifications",
          point_2: "Team always aligned"
        },
        backlog_management: {
          title: "Progress Visualization and Tracking",
          description: "Visualize the status of projects and tasks through interactive boards and calendars. Allow for clear and effective tracking of progress, helping project leaders quickly identify potential delays or areas needing attention.",
          point_1: "Interactive boards",
          point_2: "Delay detection"
        }
      },
      benefits: {
        title: "Benefits",
        work_environment: {
          title: "Improves Work Environment",
          description: "Improve work management with TaskMaster and reduce uncertainty, generating a more organized and less conflictive environment.",
          link: "Discover how <span>&rarr;</span>"
        },
        transparency: {
          title: "Increases Transparency",
          description: "Provides total visibility of project progress and issues to all stakeholders, improving trust and accountability.",
          link: "Explore more <span>&rarr;</span>"
        },
        decision_making: {
          title: "Improves Decision Making",
          description: "Provides real-time data and predictive analytics that enable informed decisions and reduce the risk of failure.",
          link: "Learn more <span>&rarr;</span>"
        }
      },
      about: {
        title: "About Us",
        description: "Apex Cybernetics is a startup dedicated to developing innovative solutions to optimize project management in companies. We focus on creating tools that improve efficiency, foster collaboration, and help teams achieve their goals effectively.",
        mission: "Our mission is to elevate the efficiency and quality of projects in software startups, optimizing workflows and facilitating data-driven decision making.",
        vision: "We aspire to be leaders in software project management, offering solutions that drive success and sustainable growth of emerging companies."
      },
      about_team: {
        title: "About the Team",
        description: "Meet the team behind TaskMaster and how we work to create innovative solutions for project management."
      },
      about_product: {
        title: "About the Product",
        description: "Discover how TaskMaster can transform your project management and empower your team's collaboration."
      },
      faq: {
        title: "Frequently Asked Questions",
        what_is: {
          question: "What is TaskMaster?",
          answer: "TaskMaster is a platform designed to optimize project management in companies, facilitating collaboration and team progress tracking."
        },
        how_to_register: {
          question: "How can I register?",
          answer: "You can register by clicking the \"Sign Up\" button at the top of the page and following the instructions."
        },
        benefits: {
          question: "What benefits does TaskMaster offer?",
          answer: "TaskMaster offers improvements in transparency, decision making, and work environment, among other benefits that optimize project management."
        },
        easy_to_use: {
          question: "Is it easy to use?",
          answer: "Yes, TaskMaster is easy to use for any user who wants to manage a project using the SCRUM methodology."
        }
      },
      contact: {
        title: "We're here to <span class=\"highlight\">help you</span>",
        description: "Do you have questions or need more information? Our team is ready to answer your queries and help you discover how TaskMaster can transform your project management.",
        email: {
          label: "Email"
        },
        phone: {
          label: "Phone"
        },
        location: {
          label: "Location",
          value: "Lima, Peru"
        },
        form: {
          title: "Send us a message",
          subtitle: "Fill out the form and we'll get back to you shortly.",
          name: "Full Name",
          name_placeholder: "e.g. John Doe",
          email: "Email",
          email_placeholder: "e.g. john@example.com",
          company: "Company",
          company_placeholder: "e.g. Your Company Inc.",
          message: "Message",
          message_placeholder: "How can we help you?",
          submit: "Send Message"
        },
        newsletter: {
          placeholder: "Your email address",
          button: "Subscribe"
        }
      },
      footer: {
        description: "Optimizing software project management with innovative solutions that drive efficiency and collaboration.",
        quick_links: "Quick Links",
        resources: "Resources",
        blog: "Blog",
        guides: "Guides",
        documentation: "Documentation",
        privacy_policy: "Privacy Policy",
        terms_service: "Terms of Service",
        newsletter: {
          title: "Stay Informed",
          description: "Subscribe to our newsletter to receive news and updates."
        },
        copyright: "&copy; 2026 Apex Cybernetics. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies"
      }
    }
  };

  // Función para el tema oscuro
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Función para cambio de idioma
  function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'es';
    document.documentElement.setAttribute('lang', savedLanguage);
    updateLanguage(savedLanguage);
  }

  function toggleLanguage() {
    const currentLanguage = document.documentElement.getAttribute('lang');
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    document.documentElement.setAttribute('lang', newLanguage);
    localStorage.setItem('language', newLanguage);
    updateLanguage(newLanguage);
  }

  function updateLanguage(language) {
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = language === 'es' ? 'EN' : 'ES';
    }

    // Actualizar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedTranslation(translations[language], key);
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Actualizar placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = getNestedTranslation(translations[language], key);
      if (translation) {
        element.setAttribute('placeholder', translation);
      }
    });
  }

  function updateFeatureSlider(index) {
    if (!featureSlides.length) {
      return;
    }

    currentFeatureSlide = (index + featureSlides.length) % featureSlides.length;

    featureSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === currentFeatureSlide);
    });

    featureDots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentFeatureSlide;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function changeFeatureSlide(direction) {
    updateFeatureSlider(currentFeatureSlide + direction);
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }

  // Inicializar tema e idioma
  initTheme();
  initLanguage();

  // Event listeners
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }

  if (featurePrev) {
    featurePrev.addEventListener('click', () => changeFeatureSlide(-1));
  }

  if (featureNext) {
    featureNext.addEventListener('click', () => changeFeatureSlide(1));
  }

  featureDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetSlide = Number(dot.getAttribute('data-slide'));
      if (!Number.isNaN(targetSlide)) {
        updateFeatureSlider(targetSlide);
      }
    });
  });

  updateFeatureSlider(0);

  // Función para el menú móvil
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
  }

  // Cerrar el menú cuando se hace clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Navegación suave al hacer clic en los enlaces del menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Solo para enlaces internos
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calcular la posición de desplazamiento con un pequeño offset
          const offset = 80; // Ajustar según la altura de la barra de navegación
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Resaltar el enlace activo durante el desplazamiento
  function highlightActiveLink() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Comprobar si estamos en la parte superior de la página
    if (window.scrollY < 100) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
  }
  
  // Verificar la posición del scroll al cargar la página
  highlightActiveLink();
  
  // Añadir evento de scroll para actualizar los enlaces activos
  window.addEventListener('scroll', highlightActiveLink);

  // Funcionalidad para las FAQ
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Cerrar todas las demás FAQ
      faqQuestions.forEach(item => {
        if (item !== question) {
          item.setAttribute('aria-expanded', 'false');
          item.parentElement.classList.remove('active');
        }
      });
      
      // Toggle actual FAQ
      question.setAttribute('aria-expanded', !isExpanded);
      faqItem.classList.toggle('active');
    });
  });

  // Validación del formulario de contacto
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validar campos
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const mensaje = document.getElementById('mensaje');
      const empresa = document.getElementById('empresa');
      let isValid = true;
      
      if (!nombre.value.trim()) {
        showError(nombre, 'Por favor ingrese su nombre');
        isValid = false;
      } else {
        removeError(nombre);
      }
      
      if (!email.value.trim()) {
        showError(email, 'Por favor ingrese su correo electrónico');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Por favor ingrese un correo electrónico válido');
        isValid = false;
      } else {
        removeError(email);
      }
      
      if (!mensaje.value.trim()) {
        showError(mensaje, 'Por favor ingrese su mensaje');
        isValid = false;
      } else {
        removeError(mensaje);
      }
      
      // Si el formulario es válido, enviar datos
      if (isValid) {
        // Simulación de envío exitoso
        const submitButton = contactForm.querySelector('.submit-button');
        const originalButtonText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="button-text">Enviando...</span>';
        
        // Simular una petición con un retraso
        setTimeout(() => {
          // Mostrar mensaje de éxito
          const formCard = document.querySelector('.form-card');
          formCard.innerHTML = `
            <div class="success-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>¡Mensaje enviado correctamente!</h3>
              <p>Gracias por contactarnos. Nuestro equipo te responderá lo antes posible.</p>
            </div>
          `;
        }, 1500);
      }
    });
  }

  // Validación del formulario de newsletter
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitButton = newsletterForm.querySelector('button');
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        emailInput.style.borderColor = '#dc3545';
        return;
      }
      
      // Simular suscripción exitosa
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      
      setTimeout(() => {
        submitButton.textContent = '¡Suscrito!';
        submitButton.style.backgroundColor = '#28a745';
        emailInput.value = '';
        
        // Restablecer el botón después de un tiempo
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
          submitButton.style.backgroundColor = '';
        }, 3000);
      }, 1500);
    });
  }

  // Funciones de utilidad para la validación de formularios
  function showError(input, message) {
    const formGroup = input.parentElement;
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    formGroup.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
  }
  
  function removeError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      formGroup.removeChild(errorElement);
    }
    
    formGroup.classList.remove('error');
    input.setAttribute('aria-invalid', 'false');
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Animación de aparecer elementos al hacer scroll
  const animatedElements = document.querySelectorAll('.feature-item, .benefit-card, .section-title, .form-card, .contact-info');
  
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('animate');
      }
    });
  };
  
  // Ejecutar la función al cargar la página
  animateOnScroll();
  
  // Y cada vez que se hace scroll
  window.addEventListener('scroll', animateOnScroll);

  // Contador de estadísticas para la sección de beneficios (opcional)
  const startCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // duración en ms
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        counter.textContent = Math.round(current);
        
        if (current < target) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  };
  
  // Iniciar contadores cuando la sección de beneficios está en el viewport
  const benefitsSection = document.getElementById('benefits');
  
  if (benefitsSection) {
    const checkScrollPosition = () => {
      const sectionPosition = benefitsSection.getBoundingClientRect();
      
      if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
        startCounters();
        window.removeEventListener('scroll', checkScrollPosition);
      }
    };
    
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Verificar al cargar la página
  }
});


