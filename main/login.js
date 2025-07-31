document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("reg").addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassw").value;
        const response = await fetch('http://localhost:3000/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        alert("Данные" + JSON.stringify(data, null, 2));
        document.getElementById("name").value = "";
        document.getElementById("regEmail").value = "";
        document.getElementById("regPassw").value = "";
    });
    document.getElementById("in").addEventListener('submit', async (event) => {
        event.preventDefault(); // Останавливаем стандартную отправку формы!
        const email = document.getElementById("inEmail").value;
        const password = document.getElementById("inPassw").value;
        const response = await fetch('http://localhost:3000/existUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        if (data.rows[0] === undefined){
            alert("Такого аккаунта не существует!");
        }
        else if (email === data.rows[0].email && data.rows[0].password !== password) {
            alert("Пароль введён неверно! Попробуйте ещё.");
        }
        else {
            alert("Вход выполнен!")
        }
    });
});
