    <script>
        // Menambahkan event listener untuk login dan daftar
        const loginLink = document.getElementById('loginLink');
        const daftarLink = document.getElementById('daftarLink');

        loginLink.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default
            window.location.href = "https://www.google.com/"; // URL untuk login
        });

        daftarLink.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default
            window.location.href = "https://www.google.com/"; // URL untuk daftar
        });
    </script>
