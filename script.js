const chapters = [
    {
        title: "Chapter 1: The Beginning",
        content: "This is the first chapter of the book. It introduces the main characters and sets the stage for the adventure."
    },
    {
        title: "Chapter 2: The Journey",
        content: "In this chapter, the characters embark on their journey, facing challenges and discovering new places."
    },
    {
        title: "Chapter 3: The Climax",
        content: "The story reaches its peak as the characters face their greatest challenge yet."
    }
];

let currentChapter = 0;
const contentDiv = document.getElementById('content');
const nextBtn = document.getElementById('nextChapter');

function displayChapter() {
    contentDiv.innerHTML = `
        <h3 class="text-xl font-semibold">${chapters[currentChapter].title}</h3>
        <p>${chapters[currentChapter].content}</p>
    `;
    nextBtn.textContent = currentChapter === chapters.length - 1 ? 
        "The End" : "Next Chapter";
}

nextBtn.addEventListener('click', () => {
    if (currentChapter < chapters.length - 1) {
        currentChapter++;
        displayChapter();
    } else {
        alert("You've reached the end of the book!");
    }
});

// Initialize with first chapter
displayChapter();
