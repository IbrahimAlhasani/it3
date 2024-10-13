function contactWhatsApp() {
      const phoneNumber = '+967738281401';
      const message = 'Hello, I would like to get in touch!';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('show');
    }

    function toggleNightMode() {
      const body = document.body;
      body.classList.toggle('night-mode');
    }