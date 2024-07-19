document.getElementById('upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear existing images

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});
