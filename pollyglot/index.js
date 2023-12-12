import OpenAI from "openai"
// import 'dotenv/config'


const texttoTranslate = document.getElementById("text-to-translate")
const translatedTextBox = document.getElementById("translated-text")
const translatedOutput = document.getElementById("translated-output")
const french = document.getElementById("french")
const spanish = document.getElementById("spanish")
const japanese = document.getElementById("japanese")
const bigBtn = document.getElementById("bigBtn")
const API_KEY = "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"

bigBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const textInput = texttoTranslate.value;
    if (bigBtn.textContent === "Start over") {
        startOver();
    } else {
        removeLanguageSelection();
        showTranslatedTextBox();
        renderTranslatedText(translateText(textInput));
        bigBtn.textContent = "Start over";
    }
});

texttoTranslate.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        bigBtn.click();
    }
});



function startOver(){
    texttoTranslate.value = ""
    translatedTextBox.style.display = "none"
    document.getElementById("language-select").style.display = "block"
    bigBtn.textContent = "Translate";
}

function showTranslatedTextBox() {
    translatedTextBox.style.display = "block"
}

function removeLanguageSelection() {
    document.getElementById("language-select").style.display = "none"
}

async function renderTranslatedText(translation) {
    const translatedText = await translation;
    translatedOutput.innerHTML = `${translatedText}`
}

function checkLanguage() {
    let language = ""; // Initialize the language variable

    if (french.checked) {
        language = "french";
    } else if (spanish.checked) {
        language = "spanish";
    } else if (japanese.checked) {
        language = "japanese";
    } else {
        console.log("No radio button is checked");
    }

    return language; // Return the selected language
}

async function translateText(textInput) {
    let language = checkLanguage()

    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true
    })

    const messages = [
        {
            role: "system",
            content: `You are an expert ${language} translator. When given a word to translate, 
            please only reply with the translation and nothing else.`
        },
        {   role: "user",
            content: `${textInput}`
        }
    ]

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messages
    })

    const translation = response.choices[0].message.content
    console.log(translation)
    return translation
}







