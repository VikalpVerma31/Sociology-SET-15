const questions = [
    {
        question:"भारतीय जनजातियों की प्रमुख समस्याएँ निम्न में से कौन है ?",
        answers: [
            { text: "सामाजिक और आर्थिक", correct: true},
            { text: "धार्मिक", correct: false},
            { text: "राजनीतिक", correct: false},
            { text: "सामाजिक", correct: false},
        ] 
    },

    {
        question:"'ट्राइबल सेचुएशन इन इंडिया' किसकी रचना है?",
        answers: [
            { text: "के. एस. सिंह", correct: true},
            { text: "एल्विन", correct: false},
            { text: "फुक्स", correct: false},
            { text: "व्यास", correct: false},
        ] 
    },

    {
        question:"हिंसा को कितनी श्रेणी में बाँटा गया है ?",
        answers: [
            { text: "चार", correct: false},
            { text: "पाँच", correct: true},
            { text: "तीन", correct: false},
            { text: "एक", correct: false},
        ] 
    },

    {
        question:"मैक्स मूलर ने किस सिद्धान्त का प्रतिपादन किया है ?",
        answers: [
            { text: "मानवतावाद", correct: false},
            { text: "आत्मावाद", correct: false},
            { text: "प्रकृतिवाद", correct: true},
            { text: "भय", correct: false},
        ] 
    },

    {
        question:"दहेज के लिए स्त्रियों को दी जाती हैं",
        answers: [
            { text: "तलाक", correct: false},
            { text: "यातनाएँ", correct: true},
            { text: "धमकी", correct: false},
            { text: "चुनौती", correct: false},
        ] 
    },

    {
        question:"हिन्दुओं में पत्नी को माना जाता है",
        answers: [
            { text: "अर्धांगिनी", correct: false},
            { text: "सहधर्मचारिणी", correct: false},
            { text: "धर्मपत्नी", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"भारत में चिकित्सकीय गर्भपात अधिनियम किस वर्ष पारित किया गया था ?",
        answers: [
            { text: "1982", correct: false},
            { text: "1971", correct: true},
            { text: "1985", correct: false},
            { text: "1975", correct: false},
        ] 
    },

    {
        question:"धार्मिक दृष्टि से किसको अधिक महत्वपूर्ण माना गया है ?",
        answers: [
            { text: "पुत्र", correct: true},
            { text: "पुत्री", correct: false},
            { text: "पत्नी", correct: false},
            { text: "माँ", correct: false},
        ] 
    },

    {
        question:"पारसंस के अनुसार क्रिया के तत्व हैं ?",
        answers: [
            { text: "कर्ता", correct: false},
            { text: "लक्ष्य", correct: false},
            { text: "दशाओं का समूह", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"धर्म के साथ गहराई से कौन सा तत्व जुड़ा है ?",
        answers: [
            { text: "भय", correct: true},
            { text: "मूल्य", correct: false},
            { text: "सार्वभौमिकता", correct: false},
            { text: "विश्वास", correct: false},
        ] 
    },

    {
        question:"मात्रात्मक परिवर्तन पाया जाता है ?",
        answers: [
            { text: "प्रगति में", correct: true},
            { text: "उद्भव में", correct: false},
            { text: "व्यवस्थापना में", correct: false},
            { text: "वृद्धि में", correct: false},
        ] 
    },

    {
        question:"अवकाश वर्ग के सिद्धांत का प्रस्ताव किया है",
        answers: [
            { text: "ममफोर्ड", correct: true},
            { text: "आगबर्न", correct: false},
            { text: "वेबलेन", correct: false},
            { text: "मार्क्स", correct: false},
        ] 
    },

    {
        question:"सामाजिक स्तरीकरण में महिलाओं को कौन-सा स्थान प्राप्त है ?",
        answers: [
            { text: "उच्च", correct: false},
            { text: "निम्न", correct: true},
            { text: "सर्वोतम", correct: false},
            { text: "क्षीण", correct: false},
        ] 
    },

    {
        question:"बच्चे को लिंगानुपात व्यवहार सिखाता है",
        answers: [
            { text: "परिवार", correct: true},
            { text: "समाज", correct: false},
            { text: "समिति", correct: false},
            { text: "समुदाय", correct: false},
        ] 
    },

    {
        question:"प्राधिकार शब्द किसे सम्बोधित करता है ?",
        answers: [
            { text: "अधिकार", correct: true},
            { text: "कर्तव्य", correct: false},
            { text: "नियम", correct: false},
            { text: "परम्परा", correct: false},
        ] 
    },

    {
        question:"रेडीकल नारीवाद संगठन का निर्माण कहाँ हुआ",
        answers: [
            { text: "जापान", correct: false},
            { text: "अमेरिका", correct: true},
            { text: "इटली", correct: false},
            { text: "लन्दन", correct: false},
        ] 
    },

    {
        question:"भारतीय समाज में उच्च स्थिति किसे प्राप्त है ?",
        answers: [
            { text: "पुरूषों को", correct: true},
            { text: "महिलाओं को", correct: false},
            { text: "युवा को", correct: false},
            { text: "बयस्क को", correct: false},
        ] 
    },

    {
        question:"हिन्दु उत्तराधिकार अधिनियम पारित हुआ",
        answers: [
            { text: "वर्ष 1952 में", correct: false},
            { text: "वर्ष 1953 में", correct: false},
            { text: "वर्ष 1955 में", correct: false},
            { text: "वर्ष 1956 में", correct: true},
        ] 
    },

    {
        question:"अधिकतर महिलाओं के लिए चलायी गई विभिन्न योजनाएँ होती है -",
        answers: [
            { text: "पूर्ण", correct: false},
            { text: "अपूर्ण", correct: false},
            { text: "असफल", correct: true},
            { text: "सफल", correct: false},
        ] 
    },

    {
        question:"पिता की सम्पत्ति का प्रथम उत्तराधिकारी होता है?",
        answers: [
            { text: "भाई", correct: false},
            { text: "बहन", correct: false},
            { text: "सन्तान", correct: true},
            { text: "माँ", correct: false},
        ] 
    },

    {
        question:"किस अवस्था में उत्तेजना अधिक होती है ?",
        answers: [
            { text: "बाल्यावस्था", correct: false},
            { text: "युवावस्था", correct: true},
            { text: "वयस्कावस्था", correct: false},
            { text: "प्रौढ़ावस्था", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन लैंगिक व्यवहार के प्रमुख अंग हैं ?",
        answers: [
            { text: "स्पर्श करना", correct: false},
            { text: "आलिंगन करना", correct: false},
            { text: "कल्पना करना", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"देखभाल से तात्पर्य है -",
        answers: [
            { text: "निगरानी", correct: true},
            { text: "चौकसी", correct: false},
            { text: "ध्यान", correct: false},
            { text: "तत्परता", correct: false},
        ] 
    },

    {
        question:"श्रम विभाजन के कारण हस्तान्तरण का उल्लेख किसने किया है ?",
        answers: [
            { text: "सारोकिन", correct: false},
            { text: "वेबर", correct: false},
            { text: "स्पेन्सर", correct: false},
            { text: "मार्क्स", correct: true},
        ] 
    },

    {
        question:"सामान्य और विकृत प्रकार्य में किसने मतभेद किया?",
        answers: [
            { text: "ब्राउन", correct: false},
            { text: "पारसन्स", correct: false},
            { text: "दुर्खीम", correct: true},
            { text: "वेवर", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सा सामाजिक तथ्य नहीं है ?",
        answers: [
            { text: "विवाह", correct: false},
            { text: "धर्म", correct: false},
            { text: "जनश्रुति", correct: true},
            { text: "अधर्म", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सी अवधारणा ऑगस्ट कॉस्ट ने दी -",
        answers: [
            { text: "सापेक्षवाद", correct: false},
            { text: "प्रत्यक्षवाद", correct: true},
            { text: "अनुभववाद", correct: false},
            { text: "आदर्शवाद", correct: false},
        ] 
    },

    {
        question:"राज्य समिति नहीं है बल्कि एक संस्था है -",
        answers: [
            { text: "सत्य", correct: true},
            { text: "असत्य", correct: false},
            { text: "धर्म", correct: false},
            { text: "अधर्म", correct: false},
        ] 
    },

    {
        question:"जाति निर्योग्यता अधिनियम पारित किया गया था-",
        answers: [
            { text: "1812 में", correct: false},
            { text: "1833 में", correct: false},
            { text: "1850 में", correct: true},
            { text: "1856 में", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्र सामूहिक प्रतिनिधित्व का विज्ञान है",
        answers: [
            { text: "सत्य", correct: true},
            { text: "असत्य", correct: false},
            { text: "ज्ञात नहीं", correct: false},
            { text: "समूह", correct: false},
        ] 
    },

    {
        question:"अलौकिक को धर्म किसने माना है ?",
        answers: [
            { text: "दुखर्खीम", correct: false},
            { text: "मैकाइवर", correct: false},
            { text: "टायलर", correct: true},
            { text: "फ्रेजर", correct: false},
        ] 
    },

    {
        question:"निम्न में से गेमाइनशाफ्ट का परिचय देता है",
        answers: [
            { text: "समुदाय", correct: false},
            { text: "समूह", correct: false},
            { text: "समाज", correct: false},
            { text: "समिति", correct: true},
        ] 
    },

    {
        question:"नगरों के चारों ओर घेरने वाले ग्रामीण क्षेत्रों को कहा जाता है -",
        answers: [
            { text: "उपनगर", correct: true},
            { text: "प्रदेश", correct: false},
            { text: "नगरीय", correct: false},
            { text: "बस्ती", correct: false},
        ] 
    },

    {
        question:"निम्न धर्मों में से कौन सा धर्म बहुबंधवाद में विश्व।श करता है ?",
        answers: [
            { text: "ईसाई", correct: false},
            { text: "हिन्दू", correct: false},
            { text: "इस्लाम", correct: true},
            { text: "बौद्ध", correct: false},
        ] 
    },

    {
        question:"विशेष विवाह अधिनियम पारित किया गया था-",
        answers: [
            { text: "1950", correct: true},
            { text: "1955", correct: false},
            { text: "1954", correct: false},
            { text: "1956", correct: false},
        ] 
    },

    {
        question:"भ्राता संबंधी बहुपति विवाह होते हैं -",
        answers: [
            { text: "भीलों में", correct: false},
            { text: "गोर्डों में", correct: true},
            { text: "नायरों में", correct: false},
            { text: "यादवों में", correct: false},
        ] 
    },

    {
        question:"एक मानदण्ड होता है -",
        answers: [
            { text: "मूल्य", correct: false},
            { text: "विश्वास", correct: false},
            { text: "उपयोगिता", correct: false},
            { text: "माप", correct: true},
        ] 
    },

    {
        question:"आधुनिक समाज में बल दिया जाता है",
        answers: [
            { text: "जाति पर", correct: false},
            { text: "अर्जित पद पर", correct: true},
            { text: "प्रदत्त पद पर", correct: false},
            { text: "वर्ग पर", correct: false},
        ] 
    },

    {
        question:"सामाजिक असमानता का जन्म होता है -",
        answers: [
            { text: "त्वरित रूप में", correct: false},
            { text: "क्रमिक रूप में", correct: true},
            { text: "प्रवाह रूप में", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"सामाजिक स्तरीकरण के प्रदत्त आधार कौ से हैं ?",
        answers: [
            { text: "लिंग", correct: false},
            { text: "आयु", correct: false},
            { text: "जन्म आदि", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"जाति है एक",
        answers: [
            { text: "वर्ग", correct: false},
            { text: "समुदाय", correct: false},
            { text: "सामाजिक व्यवस्था", correct: true},
            { text: "कानून", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन-से सामाजिक संरचना के स्तर हैं ?",
        answers: [
            { text: "समूह", correct: false},
            { text: "समुदाय", correct: false},
            { text: "सामाजिक संबंध", correct: false},
            { text: "उपर्युक्त तीनों", correct: true},
        ] 
    },

    {
        question:"स्तरीकरण का प्रभाव निम्न में से किस पर पड़ता है ?",
        answers: [
            { text: "जीवन अवसर", correct: false},
            { text: "जीवन शैली", correct: false},
            { text: "उपर्युक्त दोनों", correct: true},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन सी जनजाति नहीं है ?",
        answers: [
            { text: "भील", correct: false},
            { text: "भोटिया", correct: false},
            { text: "गुप्ता", correct: true},
            { text: "कादर", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन शब्द संरचना से संबंधित नहीं है?",
        answers: [
            { text: "संगठन", correct: false},
            { text: "व्यवस्था", correct: false},
            { text: "क्रमबद्धता", correct: false},
            { text: "विघटन", correct: true},
        ] 
    },

    {
        question:"सामाजिक परिवर्तन इनमें से किसमें नहीं आता है?",
        answers: [
            { text: "प्रगति", correct: false},
            { text: "उद्विकास", correct: true},
            { text: "नियंत्रण", correct: false},
            { text: "उपरोक्त सभी", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सी संस्था नहीं है ?",
        answers: [
            { text: "विवाह", correct: false},
            { text: "थियेटर", correct: true},
            { text: "सम्पत्ति", correct: false},
            { text: "उत्तराधिकार", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सामाजिक प्रतिमान के अंतर्गत आते हैं ?",
        answers: [
            { text: "कानून", correct: false},
            { text: "रूढ़ियाँ", correct: false},
            { text: "प्रथा", correct: false},
            { text: "सभी", correct: true},
        ] 
    },

    {
        question:"निम्न में से 'प्रवर' का अर्थ है",
        answers: [
            { text: "गोत्र", correct: false},
            { text: "दूसरा वर", correct: false},
            { text: "श्रेष्ठ ब्राह्मण", correct: false},
            { text: "समान ऋषियों और पूर्वजों के नाम", correct: true},
        ] 
    },

    {
        question:"प्रशासन में प्रबन्धकीय कार्यों की कुंजी किसे माना जाता है ?",
        answers: [
            { text: "लोगों को", correct: false},
            { text: "कानून को", correct: false},
            { text: "सत्ता को", correct: true},
            { text: "अधिकारी को", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 