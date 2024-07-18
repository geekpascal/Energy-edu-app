# EnergyEdu

EnergyEdu is a web application designed to educate students about energy policies and transition technologies. It provides an interactive platform for learning, quizzing, and tracking progress in understanding these crucial topics.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Pages](#pages)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Development setup](#devsetup)
7. [Deployed Site]()


## Overview

EnergyEdu aims to empower students with knowledge about energy policies and transition technologies. The application offers a user-friendly interface with various features to enhance the learning experience.

## Features

- Interactive learning modules
- Quizzes to test knowledge
- Progress tracking
- AI-powered Q&A system using Gemini

## Pages

### Home Page (index.html)

The home page serves as the main entry point for users. It includes:

- A welcome message
- An AI-powered question input field for asking about energy policies or technologies
- A grid of clickable cards leading to the Learn, Quiz, and Progress sections

### Learn Page (learn.html)

The Learn page provides comprehensive guides on energy policies and technologies. It may include:

- Detailed articles on various energy topics
- Infographics and visual aids
- Links to external resources for further reading

### Quiz Page (quiz.html)

The Quiz page allows users to test their knowledge through interactive quizzes. Features include:

- Multiple-choice questions on energy policies and technologies
- Immediate feedback on answers
- Score tracking

### Progress Page (progress.html)

The Progress page helps users track their learning journey. It may show:

- Completed modules and quizzes
- Scores and performance metrics
- Certificates or badges earned

## Setup

1. Clone the repository
2. Install the required dependencies (Flask, etc.)
3. Set up your environment variables
4. Run the Flask application

## Usage

1. Navigate to the home page
2. Use the AI-powered input to ask questions about energy topics
3. Click on 'Learn' to access educational materials
4. Take quizzes to test your knowledge
5. Track your progress in the 'Progress' section

## Development Setup 
1. **Download the project starter code locally**
```
git clone https://github.com/geekpascal/Energy-edu-app.git

cd Energy-edu-app/ 
```

2. **Initialize and activate a virtualenv using:**

```
python -m venv env
source env/bin/activate 
```
>**Note** - In Windows, the `env` does not have a `bin` directory. Therefore, you would use the analogous command shown below:
```
. env/Scripts/activate
```

3. **Install the dependencies:** 
```
pip install -r requirements.txt
```
4. **Create a .env file and add these :** 
```
FLASK_SECRET_KEY=replace with your secret key
GEMINI_API_KEY=replace with you gemini api key
```

5. **Run the development server:**
```
python run.py
```

6. **Verify on the Browser**<br>
Navigate to project homepage [http://127.0.0.1:5000/](http://127.0.0.1:5000/) or [http://localhost:5000](http://localhost:5000)

7. **Deployed Site:**
```
https://energyeduapp.vercel.app/
```

