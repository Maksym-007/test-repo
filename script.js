let age = +prompt('Сколько вам лет?');
if (age >= 18) {
    alert('Доступ к материалам открыт!');
} else if (age <= 12) {
    alert('В доступе отказано!');
} else if (age > 12 || age < 18) {
    alert('Вам доступна ознакомительнав версия!');
}
else {
    alert('чтото пошло не так! Попробуйте снова!');
}

