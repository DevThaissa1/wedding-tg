document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show'); // Remove a classe se o elemento sair da área visível
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Mensagem de Confirmação
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('success-message').style.display = 'block';
            form.style.display = 'none';
            alert('Registrado! Obrigada!');
        });
    }

    // Menu Mobile
    const mobileMenu = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function () {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Acessibilidade
            const expanded = mobileMenu.classList.contains('active');
            mobileMenu.setAttribute('aria-expanded', expanded);
            mobileMenu.setAttribute('aria-controls', 'nav-list');
        });
    }

    // Adicionar acompanhantes
    let guestCounter = 0;
    const maxGuests = 5;
    const addGuestButton = document.getElementById('add-guest');
    if (addGuestButton) {
        addGuestButton.addEventListener('click', function () {
            if (guestCounter >= maxGuests) {
                alert('Você atingiu o limite de acompanhantes.');
                return;
            }
            guestCounter++;
            const guestList = document.getElementById('guest-list');
            const guestDiv = document.createElement('div');
            guestDiv.className = 'person';
            guestDiv.style.marginBottom = '1rem';

            guestDiv.innerHTML = `
                <label for="guestName${guestCounter}">Nome do Acompanhante ${guestCounter}:</label>
                <input type="text" id="guestName${guestCounter}" name="guestName${guestCounter}" required><br>
                <label for="guestType${guestCounter}">É adulto ou criança?</label>
                <select id="guestType${guestCounter}" name="guestType${guestCounter}">
                    <option value="adulto">Adulto</option>
                    <option value="crianca">Criança</option>
                </select><br><br>
                <button type="button" class="remove-guest">Remover</button><br><br>
            `;
            guestList.appendChild(guestDiv);

            // Remover acompanhante
            guestDiv.querySelector('.remove-guest').addEventListener('click', function () {
                guestDiv.remove();
                guestCounter--;
            });
        });
    }

    // Botões de presente com alternância de estado
    const presentButtons = document.querySelectorAll('#lista-presente button');
    presentButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.innerText === 'Darei esse presente') {
                button.innerText = 'Presente Reservado!';
                button.style.backgroundColor = '#4caf50';
                button.style.color = 'white';
            } else {
                button.innerText = 'Darei esse presente';
                button.style.backgroundColor = ''; // Volta ao padrão
                button.style.color = ''; // Volta à cor padrão
            }
        });
    });
});
