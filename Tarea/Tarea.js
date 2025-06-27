// Animación al hacer scroll
 document.addEventListener('DOMContentLoaded', function() {
      const elementos = document.querySelectorAll('.proyecto-card, .habilidad-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'all 0.5s ease';
        observer.observe(elemento);
      });
      
      // Actualizar año en el footer
      document.getElementById('year').textContent = new Date().getFullYear();
    });