// Toggle Mobile Menu
const mobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Form Validation
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Image Upload Preview
const imagePreview = (input, previewId) => {
    const preview = document.getElementById(previewId);
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
        preview.style.backgroundImage = `url(${reader.result})`;
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Delete Confirmation
const confirmDelete = (id, type) => {
    if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
        // AJAX request untuk hapus data
        fetch(`crud.php?action=delete&type=${type}&id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    location.reload();
                }
            });
    }
}