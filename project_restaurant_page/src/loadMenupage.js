export default function loadPage() {
    const page_content = document.getElementById('content');
    page_content.innerHTML = '';

    const title = document.createElement('div');
    title.classList.add('title')
    title.textContent = "Menu";

    const card1 = document.createElement('div');
    card1.classList.add('card');

    const card1_title = document.createElement('div');
    card1_title.classList.add('card-title');
    card1_title.textContent = "Plain eggs";

    const card1_content = document.createElement('div');
    card1_content.classList.add('card-content');
    card1_content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod magna in nisi ultrices elementum. Etiam est quam, blandit in augue eu, tincidunt sagittis mi. Suspendisse id dui nunc.";

    // Bar
    const bar1 = document.createElement('div');
    bar1.classList.add('bar');

    const emptyBar1 = document.createElement('div');
    emptyBar1.classList.add('emptybar');

    const filledBar1 = document.createElement('div');
    filledBar1.classList.add('filledbar');

    bar1.appendChild(emptyBar1);
    bar1.appendChild(filledBar1);

    card1.append(card1_title, card1_content, bar1);

    const card2 = document.createElement('div');
    card2.classList.add('card');

    const card2_title = document.createElement('div');
    card2_title.classList.add('card-title');
    card2_title.textContent = "Space Cockroaches";

    const card2content = document.createElement('div');
    card2content.classList.add('card-content');
    card2content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod magna in nisi ultrices elementum. Etiam est quam, blandit in augue eu, tincidunt sagittis mi. Suspendisse id dui nunc.";
    
    // Bar
    const bar2 = document.createElement('div');
    bar2.classList.add('bar');

    const emptyBar2 = document.createElement('div');
    emptyBar2.classList.add('emptybar');

    const filledBar2 = document.createElement('div');
    filledBar2.classList.add('filledbar');

    bar2.appendChild(emptyBar2);
    bar2.appendChild(filledBar2);
    card2.append(card2_title, card2content, bar2);

    const card_grid = document.createElement('div');
    card_grid.classList.add('card-grid');
    card_grid.append(card1);
    card_grid.append(card2);

    const footer = document.createElement('div');
    footer.textContent = "As you see, we have a very exotic menu. We are currently upgrading to serve you better in the future."
    footer.style.textAlign = "center";

    page_content.appendChild(title);
    page_content.appendChild(card_grid);
    page_content.appendChild(footer);

}