const news = [
    {
        title: "Google анонсировала новую модель искусственного интеллекта",
        headerBgSrc:
            "https://i.pinimg.com/1200x/86/24/06/862406e24f3ac505ee10f46dcd6e9000.jpg",
        category: "Technology",
        body: "Компания Google представила обновлённую модель искусственного интеллекта, которая способна обрабатывать сложные запросы быстрее и точнее. Новая система ориентирована на корпоративный сектор и разработчиков.",
        date: "2026-02-22",
    },
    {
        title: "Реал Мадрид выиграл финал Лиги чемпионов",
        headerBgSrc:
            "https://i.pinimg.com/736x/61/a0/a3/61a0a32dfa19d6242cb6acaa9d60f266.jpg",
        category: "Sport",
        body: "Испанский клуб Реал Мадрид одержал победу в финале Лиги чемпионов со счётом 3:2. Решающий гол был забит на 89-й минуте встречи.",
        date: "2026-02-18",
    },
    {
        title: "Tesla открывает новый завод в Европе",
        headerBgSrc:
            "https://i.pinimg.com/736x/19/11/1e/19111e14454a04484035cbf469d29bb5.jpg",
        category: "Business",
        body: "Компания Tesla объявила о строительстве нового завода по производству электромобилей в Восточной Европе. Ожидается создание более 5000 рабочих мест.",
        date: "2026-02-15",
    },
    {
        title: "В Европе зафиксирован рекордный рост туризма",
        headerBgSrc:
            "https://i.pinimg.com/1200x/99/7c/0e/997c0e18314b963fdc50b329c2f5766b.jpg",
        category: "World",
        body: "По данным аналитических агентств, туристический поток в страны Европы вырос на 18% по сравнению с прошлым годом. Эксперты связывают это с восстановлением мировой экономики.",
        date: "2026-02-10",
    },
];

function userNews({ title, headerBgSrc, category, body, date }) {
    const newsEl = document.createElement("div");
    newsEl.classList.add("newsEl");
    document.body.append(newsEl);

    const newsHeader = document.createElement("div");
    newsHeader.classList.add("newsHeader1");
    newsHeader.setAttribute("style", `background-image: url(${headerBgSrc})`);
    newsEl.append(newsHeader);

    const newsTitle = document.createElement("h2");
    newsTitle.classList.add("newsTitle1");
    newsTitle.textContent = title;
    newsHeader.append(newsTitle);

    const likeEl = document.createElement("i");
    likeEl.classList.add("likeEl1");
    likeEl.classList.add("fa-regular");
    likeEl.classList.add("fa-heart");
    newsHeader.append(likeEl);

    likeEl.addEventListener("click", () => {
        likeEl.classList.toggle("likeColor");
        likeEl.classList.toggle("fa-regular");
        likeEl.classList.toggle("fa-solid");
    });

    const newsBottom = document.createElement("div");
    newsBottom.classList.add("newsBottom1");
    newsEl.append(newsBottom);

    const newsCategory = document.createElement("p");
    newsCategory.classList.add("newsCategory1");
    newsCategory.textContent = category;
    newsBottom.append(newsCategory);

    const newsBody = document.createElement("p");
    newsBody.classList.add("newsBody1");
    newsBody.textContent = body;
    newsBottom.append(newsBody);

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("bottomContent1");
    newsBottom.append(bottomContent);

    const trashEl = document.createElement("i");
    trashEl.classList.add("trashEl1");
    trashEl.classList.add("fa-solid");
    trashEl.classList.add("fa-trash");
    bottomContent.append(trashEl);

    const newsDate = document.createElement("p");
    newsDate.classList.add("newsDate1");
    newsDate.textContent = date;
    bottomContent.append(newsDate);

    trashEl.addEventListener("click", () => newsEl.remove());
}

news.map((e) => userNews(e));
