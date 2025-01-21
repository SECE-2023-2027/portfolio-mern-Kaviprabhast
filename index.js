document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
});

function openProject(event) {
    const repositoryUrl = event.currentTarget.getAttribute('data-repository');
    window.open(repositoryUrl, '_blank');
}