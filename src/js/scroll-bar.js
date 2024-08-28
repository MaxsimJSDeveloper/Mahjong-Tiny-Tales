// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault(); // Запобігання стандартному поведінці

//     const targetId = this.getAttribute('href'); // Отримуємо id цільового елементу

//     console.log(targetId);
//     const targetElement = document.querySelector(targetId); // Знаходимо цільовий елемент

//     // Прокручуємо сторінку до цільового елементу з обмеженням
//     const offset = 100; // Відступ (в пікселях) від верху
//     const elementPosition = targetElement.getBoundingClientRect().top; // Положення елемента відпочатку
//     const offsetPosition = elementPosition + window.pageYOffset - offset; // Позиція прокрутки з урахуванням відступу

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth', // Додаємо плавну прокрутку
//     });
//   });
// });
