// Smooth scroll functionality for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

console.log("Boilerplate JS loaded with animations.");

function enableEditAll(button) {
    const detailItems = document.querySelectorAll('.detail-item');

    detailItems.forEach(item => {
        const span = item.querySelector('span');
        const currentValue = span.innerText;

        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.className = 'edit-input';

        item.replaceChild(input, span);
    });

    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save All';
    saveButton.className = 'save-button';
    saveButton.onclick = function () {
        detailItems.forEach(item => {
            const input = item.querySelector('input');
            const newValue = input.value;

            const span = document.createElement('span');
            span.innerText = newValue;

            item.replaceChild(span, input);
        });

        button.style.display = 'inline';
        saveButton.remove();
    };

    button.style.display = 'none';
    button.parentElement.appendChild(saveButton);
}

function editProfilePicture(button) {
    const profilePicContainer = button.parentElement;
    const img = profilePicContainer.querySelector('img');

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.marginTop = '10px';

    input.onchange = function () {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    profilePicContainer.appendChild(input);
    button.style.display = 'none';
}