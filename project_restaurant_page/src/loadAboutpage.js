export default function loadPage() {
    const page_content = document.getElementById('content');
    page_content.innerHTML = '';

    const title = document.createElement('div');
    title.classList.add('title')
    title.textContent = "About Modern Restaurant";

    const card = document.createElement('div');
    card.classList.add('card');

    const card_title = document.createElement('div');
    card_title.classList.add('card-title');
    card_title.textContent = "Welcome";

    const content = document.createElement('div');
    content.classList.add('card-content');
    content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod magna in nisi ultrices elementum. Etiam est quam, blandit in augue eu, tincidunt sagittis mi. Suspendisse id dui nunc.";

    // Bar
    const bar = document.createElement('div');
    bar.classList.add('bar');

    const emptyBar = document.createElement('div');
    emptyBar.classList.add('emptybar');

    const filledBar = document.createElement('div');
    filledBar.classList.add('filledbar');

    bar.appendChild(emptyBar);
    bar.appendChild(filledBar);

    card.append(card_title, content, bar);

    const card_grid = document.createElement('div');
    card_grid.classList.add('card-grid');
    card_grid.append(card);

    page_content.appendChild(title);
    page_content.appendChild(card_grid);

}