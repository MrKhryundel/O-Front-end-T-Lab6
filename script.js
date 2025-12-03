// Отримуємо кнопку та контейнер для карток
const btn = document.getElementById("loadBtn");
const usersContainer = document.getElementById("users");

// Натискання кнопки запускає завантаження з API
btn.addEventListener("click", () => {

    // Виконання 5 запитів до API для отримання 5 користувачів
    fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json()) // Перетворення відповіді у JSON
        .then(data => {
            const users = data.results;

            // Очищення старих даних перед новим завантаженням
            usersContainer.innerHTML = "";

            // Перебір кожного користувача з масиву
            users.forEach(user => {

                // Отримання необхідних полів згідно варіанта №5
                const photo = user.picture.large;
                const cell = user.cell;
                const country = user.location.country;
                const email = user.email;
                const coords = `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`;

                // Створення HTML-картки користувача
                const card = document.createElement("div");
                card.classList.add("user-card");

                // Формування внутрішнього HTML картки
                card.innerHTML = `
                    <img src="${photo}" alt="User photo">
                    <p><b>Cell:</b> ${cell}</p>
                    <p><b>Country:</b> ${country}</p>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Coordinates:</b> ${coords}</p>
                `;

                // Додавання картки у контейнер
                usersContainer.appendChild(card);
            });
        })
        .catch(err => {
            // Вивід помилки у консоль, якщо API не відповідає
            console.error("Помилка завантаження:", err);
        });
});