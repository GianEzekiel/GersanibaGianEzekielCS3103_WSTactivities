const textInput = document.getElementById('text-input');
const wordCountElement = document.getElementById('word-count');
const sentenceCountElement = document.getElementById('sentence-count');

function countWordsAndSentences() {
    const text = textInput.value.trim();
    
    // Count words
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    // Update the display
    wordCountElement.textContent = wordCount;
    sentenceCountElement.textContent = sentenceCount;
}

// Add event listener for input changes
textInput.addEventListener('input', countWordsAndSentences);

// Initial count (in case there's some text already in the textarea)
countWordsAndSentences();