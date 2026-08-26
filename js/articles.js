const articles = [


    {
        title: "Concurrent Employment in SAP SuccessFactors Employee Central",

        category: "Employee Central",

        description:
            "Understand Concurrent Employment, when it is used, and the key concepts SAP consultants should know.",

        url:
            "articles/employee-central/concurrent-employment.html",

        date: "August 2026",

        readTime: "8 min read",

        featured: true
    },


    {
        title: "Effective Dating in SAP SuccessFactors Employee Central",

        category: "Employee Central",

        description:
            "Learn how Effective Dating works in Employee Central, including past, current and future records, real-world scenarios and consultant considerations.",

        url:
            "articles/employee-central/effective-dating.html",

        date: "August 2026",

        readTime: "8 min read",

        featured: false
    },

    {
    title: "What Is SAP and What Is SAP SuccessFactors? A Complete Beginner's Guide",

    description:
        "Learn what SAP and SAP SuccessFactors are, how they support businesses and HR, and explore the basics of SAP SuccessFactors for beginners.",

    category: "Employee Central",

    date: "August 2026",

    readTime: "10 min read",

    featured: false,

    url:
    "articles/employee-central/what-is-sap-and-successfactors.html"
    },

    {
    title: "What Is SAP SuccessFactors Employee Central? A Complete Beginner's Guide",

    description:
        "Learn what SAP SuccessFactors Employee Central is, why it is called Core HR, and understand the key concepts every beginner should know.",

    category: "Employee Central",

    date: "August 2026",

    readTime: "12 min read",

    featured: false,

    url:
        "articles/employee-central/what-is-sap-successfactors-employee-central.html"
}

];



/* =========================================================
   EMPLOYEE CENTRAL ARTICLES
   ========================================================= */

function displayECArticles() {

    const container =
        document.getElementById("ec-articles");

    if (!container) {
        return;
    }


    const ecArticles =
        articles.filter(
            article =>
                article.category === "Employee Central"
        );


    container.innerHTML = "";


    ecArticles.forEach(article => {

        const card =
            document.createElement("article");

        card.className =
            "article-card";


        card.innerHTML = `

            <div class="article-category">
                ${article.category}
            </div>

            <h3>
                ${article.title}
            </h3>

            <p>
                ${article.description}
            </p>

            <div class="article-card-meta">

                <span>
                    ${article.date}
                </span>

                <span>•</span>

                <span>
                    ${article.readTime}
                </span>

            </div>

            <a href="${article.url}">
                Read Article →
            </a>

        `;


        container.appendChild(card);

    });

}


displayECArticles();



/* =========================================================
   HOMEPAGE - LATEST ARTICLES
   ========================================================= */

function displayLatestArticles() {

    const container =
        document.getElementById("latest-articles");

    if (!container) {
        return;
    }


    articles.forEach(article => {

        const card =
            document.createElement("article");

        card.className = "article-card";


        card.innerHTML = `

            <div class="article-category">
                ${article.category}
            </div>

            <h3>
                ${article.title}
            </h3>

            <p>
                ${article.description}
            </p>

            <div class="article-card-meta">

                <span>
                    ${article.date}
                </span>

                <span>•</span>

                <span>
                    ${article.readTime}
                </span>

            </div>

            <a href="${article.url}">
                Read Article →
            </a>

        `;


        container.appendChild(card);

    });

}


displayLatestArticles();



/* =========================================================
   BLOG PAGE
   ========================================================= */

function displayBlogArticles() {

    const container =
        document.getElementById("blog-articles");

    const searchInput =
        document.getElementById("article-search");

    const count =
        document.getElementById("article-count");

    const noResults =
        document.getElementById("no-results");


    if (!container) {
        return;
    }


    let selectedCategory = "All";


    function renderArticles() {

        const searchTerm =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredArticles =
            articles.filter(article => {

                const matchesCategory =
                    selectedCategory === "All" ||
                    article.category === selectedCategory;


                const matchesSearch =
                    article.title
                        .toLowerCase()
                        .includes(searchTerm) ||

                    article.description
                        .toLowerCase()
                        .includes(searchTerm) ||

                    article.category
                        .toLowerCase()
                        .includes(searchTerm);


                return (
                    matchesCategory &&
                    matchesSearch
                );

            });


        container.innerHTML = "";


        filteredArticles.forEach(article => {

            const card =
                document.createElement("article");

            card.className =
                "article-card";


            card.innerHTML = `

                <div class="article-category">
                    ${article.category}
                </div>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

                <div class="article-card-meta">

                    <span>
                        ${article.date}
                    </span>

                    <span>•</span>

                    <span>
                        ${article.readTime}
                    </span>

                </div>

                <a href="${article.url}">
                    Read Article →
                </a>

            `;


            container.appendChild(card);

        });


        count.textContent =
            filteredArticles.length +
            (
                filteredArticles.length === 1
                    ? " Article"
                    : " Articles"
            );


        if (filteredArticles.length === 0) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

    }


    searchInput.addEventListener(
        "input",
        renderArticles
    );


    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
                );


                this.classList.add("active");


                selectedCategory =
                    this.dataset.category;


                renderArticles();

            }
        );

    });


    renderArticles();

}


displayBlogArticles();

function displayFeaturedArticle() {

    const title =
        document.getElementById("featured-title");

    const description =
        document.getElementById("featured-description");

    const meta =
        document.getElementById("featured-meta");

    const link =
        document.getElementById("featured-link");


    if (!title || !description || !meta || !link) {
        return;
    }


    const featuredArticle =
        articles.find(article => article.featured === true);


    if (!featuredArticle) {
        return;
    }


    title.textContent =
        featuredArticle.title;


    description.textContent =
        featuredArticle.description;


    meta.innerHTML = `
        <span>${featuredArticle.date}</span>
        <span>•</span>
        <span>${featuredArticle.readTime}</span>
    `;


    link.href =
        featuredArticle.url;

}


displayFeaturedArticle();