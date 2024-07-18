document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize components
    initSearchBar();
    initLearn();
    initQuiz();
    initProgressTracking();
});

function initSearchBar() {
    const searchBar = document.getElementById('question-input');
    const askButton = document.getElementById('ask-button');
    const responseArea = document.getElementById('response-area');

    if (askButton) {
        askButton.addEventListener('click', () => {
            const question = searchBar.value;
            if (question) {
                // Show loading state
                responseArea.innerHTML = 'Thinking...';
                responseArea.classList.remove('hidden');

                // Make API call to the Flask backend
                fetch('/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: question }),
                })
                .then(response => response.json())
                .then(data => {
                    responseArea.innerHTML = data.response;
                })
                .catch((error) => {
                    console.error('Error:', error);
                    responseArea.innerHTML = 'Sorry, an error occurred. Please try again.';
                });
            }
        });
    }
}

function initLearn() {
    const questionBar = document.getElementById('learn-question-input');
    const learnAskButton = document.getElementById('learn-ask-button');
    const learnResponseArea = document.getElementById('learn-response-area');

    if (learnAskButton) {
        learnAskButton.addEventListener('click', () => {
            const lquestion = questionBar.value;
            if (lquestion) {
                // Show loading state
                learnResponseArea.innerHTML = 'Thinking...';
                learnResponseArea.classList.remove('hidden');

                // Make API call to the Flask backend
                fetch('/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: lquestion }),
                })
                .then(response => response.json())
                .then(data => {
                    learnResponseArea.innerHTML = data.response;
                })
                .catch((error) => {
                    console.error('Error:', error);
                    learnResponseArea.innerHTML = 'Sorry, an error occurred. Please try again.';
                });
            }
        });
    }
}



function initQuiz() {
    const startQuizButton = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const submitButton = document.getElementById('submit-answer');
    const resultMessage = document.getElementById('result-message');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-quiz');

    let currentQuestion = 0;
    let score = 0;
    let quizData = [];

    if (startQuizButton) {
        startQuizButton.addEventListener('click', startQuiz);
    }

    if (submitButton) {
        submitButton.addEventListener('click', submitAnswer);
    }

    if (restartButton) {
        restartButton.addEventListener('click', startQuiz);
    }

    function startQuiz() {        
          quizData = [
            {
                question: "Which of these is a renewable energy source?",
                answers: ["Coal", "Natural Gas", "Solar", "Oil"],
                correct: 2
            },
            {
                question: "What does the Paris Agreement primarily address?",
                answers: ["Ocean pollution", "Climate change", "Deforestation", "Air quality"],
                correct: 1
            },
            {
                question: "Which technology is considered a key component of carbon capture and storage?",
                answers: ["Photovoltaic cells", "Amine scrubbing", "Wind turbines", "Hydraulic fracturing"],
                correct: 1
            },
            {
                question: "What does the term 'feed-in tariff' refer to in renewable energy policy?",
                answers: ["A tax on fossil fuels", "A subsidy for renewable energy producers", "A cap on carbon emissions", "An import duty on solar panels"],
                correct: 1
            },
            {
                question: "Which of these is an example of a biofuel?",
                answers: ["Hydrogen", "Natural gas", "Ethanol", "Propane"],
                correct: 2
            },
            {
                question: "What does the acronym 'LEED' stand for in green building practices?",
                answers: ["Low Energy Emission Design", "Leadership in Energy and Environmental Design", "Long-term Ecological and Economic Development", "Local Energy Efficiency Directive"],
                correct: 1
            },
            {
                question: "Which energy storage technology is most commonly used for grid-scale applications?",
                answers: ["Lithium-ion batteries", "Pumped hydro storage", "Flywheel energy storage", "Compressed air energy storage"],
                correct: 1
            },
            {
                question: "What is the primary purpose of a smart grid?",
                answers: ["To increase fossil fuel efficiency", "To improve reliability and efficiency of the electrical system", "To eliminate the need for power plants", "To reduce the cost of electricity for consumers"],
                correct: 1
            },
            {
                question: "Which of these is NOT a greenhouse gas?",
                answers: ["Carbon dioxide", "Methane", "Nitrogen", "Water vapor"],
                correct: 2
            },
            {
                question: "What does 'IPCC' stand for in the context of climate change?",
                answers: ["International Panel on Climate Change", "Intergovernmental Panel on Climate Change", "Institute for Prediction of Climate Change", "International Protocol on Carbon Control"],
                correct: 1
            },
            {
                question: "Which renewable energy source relies on the Earth's internal heat?",
                answers: ["Solar power", "Wind power", "Geothermal energy", "Tidal power"],
                correct: 2
            },
            {
                question: "What is the main purpose of a Renewable Portfolio Standard (RPS)?",
                answers: ["To ban fossil fuels", "To require utilities to source a percentage of their electricity from renewables", "To provide tax credits for solar panel installation", "To regulate the price of renewable energy"],
                correct: 1
            },
            {
                question: "Which of these is a method of energy conservation?",
                answers: ["Fracking", "Insulation", "Coal gasification", "Offshore drilling"],
                correct: 1
            },
            {
                question: "What does 'CAFE standards' refer to in energy policy?",
                answers: ["Carbon Absorption Fuel Efficiency", "Corporate Average Fuel Economy", "Clean Air and Fuel Emissions", "Climate Action for Energy"],
                correct: 1
            },
            {
                question: "Which country announced its intention to phase out nuclear power following the Fukushima disaster?",
                answers: ["France", "United States", "Germany", "Russia"],
                correct: 2
            },
            {
                question: "What is 'net metering' in the context of renewable energy?",
                answers: ["A system to measure total energy consumption", "A billing mechanism that credits solar energy system owners for electricity they add to the grid", "A method to calculate carbon footprint", "A way to measure the efficiency of wind turbines"],
                correct: 1
            },
            {
                question: "Which of these is NOT typically considered a clean energy source?",
                answers: ["Nuclear", "Solar", "Wind", "Coal"],
                correct: 3
            },
            {
                question: "What is the main goal of the '2000 Watt Society' concept?",
                answers: ["To limit per capita energy usage to 2000 watts", "To produce 2000 watts of renewable energy per person", "To reduce energy costs to $2000 per year", "To achieve 2000% growth in renewable energy"],
                correct: 0
            },
            {
                question: "Which international treaty aimed to protect the ozone layer by phasing out the production of ozone-depleting substances?",
                answers: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Rio Declaration"],
                correct: 2
            },
            {
                question: "What does the term 'energy intensity' refer to?",
                answers: ["The strength of solar radiation", "The amount of energy used per unit of GDP", "The concentration of fossil fuels in a region", "The heat generated by nuclear fission"],
                correct: 1
            }
        ];

        currentQuestion = 0;
        score = 0;
        quizContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        const question = quizData[currentQuestion];
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('quiz-option', 'block', 'w-full', 'text-left', 'p-2', 'my-1', 'rounded');
            button.addEventListener('click', () => selectAnswer(index));
            answersElement.appendChild(button);
        });
    }

    function selectAnswer(index) {
        const options = answersElement.children;
        for (let option of options) {
            option.classList.remove('selected');
        }
        options[index].classList.add('selected');
    }

    function submitAnswer() {
        const selectedAnswer = answersElement.querySelector('.selected');
        if (selectedAnswer) {
            const answerIndex = Array.from(answersElement.children).indexOf(selectedAnswer);
            if (answerIndex === quizData[currentQuestion].correct) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        resultMessage.textContent = `You've completed the quiz!`;
        scoreElement.textContent = `Your score: ${score} out of ${quizData.length}`;
        
        // Update progress after completing the quiz
        updateProgress('quiz', 'Energy Quiz', Math.round((score / quizData.length) * 100));
    }
}

function initProgressTracking() {
    if (window.location.pathname === '/progress') {
        fetchProgressData();
    }
}

function fetchProgressData() {
    fetch('/get_progress')
        .then(response => response.json())
        .then(data => {
            displayTopicsCompleted(data.topics_completed);
            displayQuizScores(data.quiz_scores);
            displayCertificates(data.certificates);
            generateRecommendations(data);
        })
        .catch(error => console.error('Error fetching progress data:', error));
}

function displayTopicsCompleted(topics) {
    const topicsList = document.getElementById('topics-completed');
    topicsList.innerHTML = '';
    topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        topicsList.appendChild(li);
    });
}

function displayQuizScores(scores) {
    const scoresList = document.getElementById('quiz-scores');
    scoresList.innerHTML = '';
    for (const [quiz, score] of Object.entries(scores)) {
        const li = document.createElement('li');
        li.textContent = `${quiz}: ${score}%`;
        scoresList.appendChild(li);
    }
}

function displayCertificates(certificates) {
    const certificatesDiv = document.getElementById('certificates');
    certificatesDiv.innerHTML = '';
    certificates.forEach(cert => {
        const p = document.createElement('p');
        p.textContent = cert.name;
        const date = document.createElement('p');
        date.textContent = `Awarded on: ${cert.date}`;
        date.className = 'text-sm text-gray-600';
        certificatesDiv.appendChild(p);
        certificatesDiv.appendChild(date);
    });
}

function generateRecommendations(data) {
    const recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = '';
    
    // This is a simple recommendation system. 
    // we'd want to make this more sophisticated based on user progress later in the future.
    const recommendations = [
        'Complete the Advanced Energy Storage module',
        'Take the Smart Grid Technologies quiz',
        'Start the Carbon Pricing Mechanisms course'
    ];
    
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });
}

// Function to update progress after completing a topic or quiz
function updateProgress(type, name, score = null) {
    let data = {};
    if (type === 'topic') {
        data = { topic: name };
    } else if (type === 'quiz') {
        data = { quiz: name, score: score };
    } else if (type === 'certificate') {
        data = { certificate: name };
    }

    fetch('/update_progress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Progress updated successfully');
            if (window.location.pathname === '/progress') {
                fetchProgressData();  // Refresh the progress page if we're on it
            }
        }
    })
    .catch((error) => {
        console.error('Error updating progress:', error);
    });
}