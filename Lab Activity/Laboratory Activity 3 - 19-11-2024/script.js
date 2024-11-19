const textInput = document.getElementById('text-input');
const wordCountElement = document.getElementById('word-count');
const sentenceCountElement = document.getElementById('sentence-count');

function countWordsAndSentences() {
    const text = textInput.value;
    
    // Count words (improved to handle various whitespace characters)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count sentences (improved to handle various sentence structures)
    const sentenceCount = text.split(/[.!?]+(?=\s+|$)/).filter(sentence => sentence.trim().length > 0).length;

    // Update the display
    wordCountElement.textContent = wordCount;
    sentenceCountElement.textContent = sentenceCount;
}

// Add event listener for input changes
textInput.addEventListener('input', countWordsAndSentences);

// Initial count
countWordsAndSentences();