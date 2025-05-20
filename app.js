//::::::::::::::::::::::::::::::::::::::::::::::::::
//Animation scroll to anchor
//::::::::::::::::::::::::::::::::::::::::::::::::::

function scroll_part0(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part0 = document.querySelector('.part0');
    part0.scrollIntoView(options);
}

function scroll_part1(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part1 = document.querySelector('.part1');
    part1.scrollIntoView(options);
}

function scroll_part2(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part2 = document.querySelector('.part2');
    part2.scrollIntoView(options);
}

function scroll_part3(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part3 = document.querySelector('.part3');
    part3.scrollIntoView(options);
}

function scroll_part4(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part4 = document.querySelector('.part4');
    part4.scrollIntoView(options);
}

function scroll_part5(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part5 = document.querySelector('.part5');
    part5.scrollIntoView(options);
}

function scroll_part6(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part6 = document.querySelector('.part6');
    part6.scrollIntoView(options);
}

function scroll_part7(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part7 = document.querySelector('.part7');
    part7.scrollIntoView(options);
}



document.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', () => {
		const feedbackText = document.getElementById('feedback-text');
		const answer = option.getAttribute('data-answer');

		// Сброс стилей кнопок
		document.querySelectorAll('.option').forEach(btn => {
			btn.classList.remove('correct', 'wrong');
		});

		// Добавление стиля для выбранной кнопки
		if (answer === 'correct') {
			option.classList.add('correct');
			feedbackText.textContent = 'Этого духа звали Nickel — «озорник» на немецком. Он «подбрасывал» искателям меди минерал красного цвета, похожий на медную руду. И, кстати, Джефферсона звали не Ник, а Томас';
		} else {
			option.classList.add('wrong');
			feedbackText.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.querySelectorAll('.option2').forEach(option2 => {
	option2.addEventListener('click', () => {
		const feedbackText2 = document.getElementById('feedback-text2');
		const answer2 = option2.getAttribute('data-answer2');

		// Сброс стилей кнопок
		document.querySelectorAll('.option2').forEach(btn => {
			btn.classList.remove('correct2', 'wrong2');
		});

		// Добавление стиля для выбранной кнопки
		if (answer2 === 'correct2') {
			option2.classList.add('correct2');
			feedbackText2.textContent = 'Никель — микроэлемент, который необходим всем живым организмам. Роль этого металла в организме изучена не до конца, но известно, что он участвует в ферментативных реакциях и влияет на окислительные процессы. Его среднее содержание в растениях — 0,00005 %, в морских животных чуть меньше — 0,00016 % массы тела, в организме человека 0,0000012 %, а в наземных животных всего 0,000001 %.';
		} else {
			option2.classList.add('wrong2');
			feedbackText2.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.querySelectorAll('.option3').forEach(option3 => {
	option3.addEventListener('click', () => {
		const feedbackText3 = document.getElementById('feedback-text3');
		const answer3 = option3.getAttribute('data-answer3');

		// Сброс стилей кнопок
		document.querySelectorAll('.option3').forEach(btn => {
			btn.classList.remove('correct3', 'wrong3');
		});

		// Добавление стиля для выбранной кнопки
		if (answer3 === 'correct3') {
			option3.classList.add('correct3');
			feedbackText3.textContent = 'Золото 585 пробы содержит 58,5 % золота, а остальные 41,5 % — это добавки других металлов, таких как медь, серебро или никель, мельхион — сплав меди с никелем, нейзильбер — сплав меди, никеля и цинка, а вот баббит — это сплав из олова, сурьмы и меди.';
		} else {
			option3.classList.add('wrong3');
			feedbackText3.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const contents = document.querySelectorAll('.content'); // Находим все блоки
  
	if (!contents.length) return; // Если нет ни одного блока, выходим
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('animate'); // Добавляем класс анимации
		  observer.unobserve(entry.target); // Останавливаем наблюдение для этого блока
		}
	  });
	}, { threshold: 0.3 });
  
	contents.forEach(content => observer.observe(content)); // Наблюдаем за каждым блоком
  });
  

  // Функция для отслеживания, когда карточка попадает в область видимости
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible'); // Добавляем класс для анимации
		observer.unobserve(entry.target); // Останавливаем отслеживание, когда карточка появилась
	  }
	});
  }, { threshold: 0.5 }); // 50% карточки должно быть видно
  
  // Наблюдаем за всеми карточками
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
	observer.observe(card);
  });
  



// аккрдеон
const buttons = [
  { btn: "btn1", cnt: "cnt1", arr: "arr1" },
  { btn: "btn2", cnt: "cnt2", arr: "arr2" },
  { btn: "btn3", cnt: "cnt3", arr: "arr3" }
];

buttons.forEach(({ btn, cnt, arr }, index) => {
  document.getElementById(btn).addEventListener("click", () => {
    buttons.forEach(({ btn: b, cnt: c, arr: a }, i) => {
      const content = document.getElementById(c);
      const arrow = document.getElementById(a);

      if (i === index) {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        arrow.innerText = isVisible ? "⯆" : "⯅";
      } else {
        content.style.display = "none";
        document.getElementById(a).innerText = "⯆";
      }
    });
  });
});



// слайдер дат


const galeriaHistContainer = document.querySelector('.galeriaHist-container');
const listaSlides = document.querySelector('.galeriaHist-lista-slides');
const botoesCronograma = document.querySelectorAll('.galeriaHist-cronograma-item');
const botaoEsquerdo = document.querySelector('.seta-esquerda');
const botaoDireito = document.querySelector('.seta-direita');

let indiceAtual = 0;
const totalSlides = listaSlides.children.length;

function mostrarSlide(novoIndice) {
  if (novoIndice < 0) novoIndice = totalSlides - 1;
  if (novoIndice >= totalSlides) novoIndice = 0;
  indiceAtual = novoIndice;
  
  const deslocamento = -indiceAtual * 100;
  listaSlides.style.transform = `translateX(${deslocamento}%)`;
  
  botoesCronograma.forEach(btn => btn.classList.remove('active'));
  botoesCronograma[indiceAtual].classList.add('active');
}

// стрелки
botaoEsquerdo.addEventListener('click', () => {
  mostrarSlide(indiceAtual - 1);
});
botaoDireito.addEventListener('click', () => {
  mostrarSlide(indiceAtual + 1);
});

// клик по дате
botoesCronograma.forEach(botao => {
  botao.addEventListener('click', () => {
    const idx = parseInt(botao.dataset.indice, 10);
    mostrarSlide(idx);
  });
});

// инициализация
mostrarSlide(0);

  



function switchTab(tabId) {
  // Снять активность со всех вкладок
  document.querySelectorAll('.ziwunbke').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.azkqwrny').forEach(content => content.classList.remove('active'));

  // Назначить активную вкладку и контент
  const index = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'].indexOf(tabId);
  document.querySelectorAll('.ziwunbke')[index].classList.add('active');
  document.getElementById(tabId).classList.add('active');
}





// слайдер 3 фото 

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".ucmnrtba-track");
  const slides = document.querySelectorAll(".ucmnrtba-slide");
  const prev = document.querySelector(".ucmnrtba-prev");
  const next = document.querySelector(".ucmnrtba-next");
  const dotsContainer = document.querySelector(".ucmnrtba-dots");

  const slidesToShow = 3;
  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / slidesToShow);
  let currentPage = 0;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    const offset = slideWidth * slidesToShow * currentPage;
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll(".ucmnrtba-dots span").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentPage);
    });
  }

  function createDots() {
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.classList.toggle("active", i === 0);
      dot.addEventListener("click", () => {
        currentPage = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  prev.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateSlider();
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);

  createDots();
  updateSlider();
});





// ебаный слайдер 2
const cards3 = document.querySelectorAll('.xmqoefha');
const sections = document.querySelectorAll('.kjdhxowq');

cards3.forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-tab');

    // Сброс активных карточек
    cards3.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Показ нужного блока
    sections.forEach(section => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });
  });
});