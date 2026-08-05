function validateForm() {
    const fields = [
        { id: 'name', label: 'Full Name' },
        { id: 'email', label: 'Student / Staff Email' },
        { id: 'category', label: 'Category' },
        { id: 'description', label: 'Item Description' },
        { id: 'location', label: 'Campus Location Lost' },
        { id: 'date_lost', label: 'Date Lost' }
    ];

    let valid = true;
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(`${field.id}Err`);
        error.textContent = '';

        if (!input.value.trim()) {
            error.textContent = `${field.label} is required.`;
            valid = false;
        }
    });

    const email = document.getElementById('email').value.trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailErr').textContent = 'Enter a valid email address.';
        valid = false;
    }

    const dateLost = document.getElementById('date_lost').value.trim();
    if (dateLost && !/^\d{2}\/\d{2}\/\d{4}$/.test(dateLost)) {
        document.getElementById('dateErr').textContent = 'Use MM/DD/YYYY format.';
        valid = false;
    }

    if (valid) {
        showSummary();
    }

    return valid;
}

function showSummary() {
    const summary = document.getElementById('reportSummary');
    const values = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        category: document.getElementById('category').value,
        description: document.getElementById('description').value.trim(),
        location: document.getElementById('location').value.trim(),
        date_lost: document.getElementById('date_lost').value.trim()
    };

    summary.innerHTML = `
        <h3>Report Summary</h3>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Category:</strong> ${values.category}</p>
        <p><strong>Description:</strong> ${values.description}</p>
        <p><strong>Location:</strong> ${values.location}</p>
        <p><strong>Date Lost:</strong> ${values.date_lost}</p>
        <p class="muted">This summary confirms your information before it is sent to campus security.</p>
    `;
}

function updateCharacterCount() {
    const description = document.getElementById('description');
    const counter = document.getElementById('descCount');
    counter.textContent = `${description.value.length}/250 characters`;
}

function setupForm() {
    const description = document.getElementById('description');

    if (description) {
        description.addEventListener('input', updateCharacterCount);
        updateCharacterCount();
    }
}

document.addEventListener('DOMContentLoaded', setupForm);