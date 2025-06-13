(() => {
    const imagenes = [
        {
            url: "https://m.media-amazon.com/images/I/81t4Vd1J56L._AC_UF894,1000_QL80_.jpg",
            descripcion: "Batman el caballero de la noche 🦇"
        },
        {
            url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/11/mortal-kombat-x-3230906.jpg",
            descripcion: "Scorpion 🦂"
        },
        {
            url: "https://hips.hearstapps.com/hmg-prod/images/stitch-foto-682ca95602fd6.jpg?crop=0.451xw:1.00xh;0.262xw,0&resize=980:*",
            descripcion: "Stitch"
        }
    ];

    let galeria = document.getElementById('galeria');
    const urlInput = document.getElementById('url-imagen');
    const descripcionInput = document.getElementById('descripcion-imagen');
    const agregarBtn = document.getElementById('agregar-btn');
    const mensajeError = document.getElementById('mensaje-error');

    function crearTarjeta(imagen, index) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';

        const contenedorImagen = document.createElement('div');
        contenedorImagen.className = 'imagen';

        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = `Imagen ${index + 1}`;
        img.loading = 'lazy';

        contenedorImagen.appendChild(img);
        tarjeta.appendChild(contenedorImagen);

        const descripcion = document.createElement('div');
        descripcion.className = 'descripcion';
        descripcion.innerHTML = `<h3>Imagen ${index + 1}</h3><p>${imagen.descripcion}</p>`;

        tarjeta.appendChild(descripcion);

        tarjeta.addEventListener('click', () => {
            img.classList.toggle('rotar');
        });

        return tarjeta;
    }

    function mostrarGaleria() {
        galeria.innerHTML = '';
        imagenes.forEach((img, i) => {
            galeria.appendChild(crearTarjeta(img, i));
        });
    }

    function validarUrl(url) {
        return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    }

    function agregarImagen() {
        const url = urlInput.value.trim();
        const descripcion = descripcionInput.value.trim();

        if (!url || !descripcion) {
            mensajeError.style.display = 'block';
            return;
        }

        if (!validarUrl(url)) {
            mensajeError.textContent = 'Por favor ingresa una URL válida.';
            mensajeError.style.display = 'block';
            return;
        }

        mensajeError.style.display = 'none';

        imagenes.push({ url, descripcion });
        mostrarGaleria();

        urlInput.value = '';
        descripcionInput.value = '';
        urlInput.focus();
    }

    agregarBtn.addEventListener('click', agregarImagen);

    [urlInput, descripcionInput].forEach(input => {
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter') agregarImagen();
        });
    });

    document.addEventListener('DOMContentLoaded', mostrarGaleria);
})();