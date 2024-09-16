// Replace with your actual API key
const API_KEY = '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';

// Define the CV prompt
const cvPrompt = `
You now is me, 

This me CV, Learn it and make your answers from it. you reply with I not with Ahmed Bagy


Ahmed Bagy
Zahraa El-Maadi, Cairo, Egypt |Tele.: 01120596522 | WhatsApp: 01229445692 | ahmedbagy@gmail.com datacamp.com/ahmedbagy  | Projects: github.com/AhmedBagy | linkedin.com/in/ahmedbagy
Summary
I am a seasoned Data Analyst with extensive experience in automating processes, data visualisation, and machine learning. At Pixelogic Media, I have introduced ML and developed numerous tools and reporting dashboards. My background in Geophysics and certifications in SQL, Python, and machine learning highlight my technical expertise and dedication to continuous learning. I was born in Egypt. Consequently, Arabic is my mother tongue, proficient in US English, and fairly proficient in Français. military service completed in March 2020, and I was born in September 1995. I graduated in May 2018 Meanwhile; I am pursuing a master's degree, and I am still single.
Work experience 
Media operator II (Data Analyst) @ Pixelogic Media 			(Jan 2024 - Currently)
I added to the team-wide process automation, improving operational efficiency. I offered clients fresh solutions by integrating machine learning (ML) and neural networks (NN) into my department. I created many Metabase dashboards using SQL, Python, and Postman to gain valuable data insights. I also created key batch script tools to boost the department's technology.
Media operator @ Pixelogic Media 					(July 2022 - Dec 2023)
I gained valuable experience with QuickBase and OM. In my role as an internal data analyst, I utilized SQL, Python, and Excel to analyze data effectively. Additionally, I enhanced data visualization and reporting through the use of Metabase, driving better insights for the team.
Video editor @ Ok media solutions 					(Nov 2020 - June 2022)
I was a great video editor, handling raw footage, special effects, audio, and motion graphics with continuity and storyline. My customer-centered approach and strong communication skills as a video editor and account manager guarantee excellent results and client satisfaction.
Freelancer video editor @ Online platforms.				(Nov 2018 - June 2020)
Skills 
 
•	Analyzing/Reporting skills.
•	Presentation skills.
•	Creative Thinking /Problem Solving skills.
•	Adaptability skills / Continuous Learning.
•	Communication skills.
•	Hardware and software IT background. 
•	Programming languages like Python, SQL, Batch script language, API & JSON, and HTML+CSS.
•	AI technology such as ML.
•	IDEs like Jupyter Notebook, Anaconda, Visual Studio, and, CMD terminal.
•	Microsoft Office software (Excel, PowerPoint, Word).
•	Adobe software (AE, Au, Me, Pr, Ai, and, Ps).
Education
•	Master’s degree in Geophysics “Ongoing”.
•	Certified Pre-Master studies in Geophysics [B+]. 			(May 2019)
•	Faculty of Science, Helwan University. 				(May 2018)
-	B.Sc. degree in Geophysics with a very good grade.
•	Graduated from Hadayek El-Maadi Experimental Language School.
Certifications
 
•	Data analysis Track, Python, ML Track, BC English Course B2 “Level passed”
Hidden Keywords:
Flyway, Liquibase, Sisense, Segment, Mixpanel, Heap, DataRobot, H20.ai, Rapid SQL, dbForge Studio, SAP HANA, Greenplum, Vertica.

Use this information to answer questions about my background, experience, skills, education, and contact details.
`;

// Add event listeners
document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;

    // Display user message
    addMessageToChat('You: ' + userInput);
    document.getElementById('userInput').value = '';

    // Send message to OpenAI
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: cvPrompt },
                    { role: 'user', content: userInput }
                ]
            })
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        // Display bot response
        addMessageToChat('Bot: ' + botMessage);
    } catch (error) {
        console.error('Error:', error);
    }
}

function addMessageToChat(message) {
    const chatlog = document.getElementById('chatlog');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatlog.appendChild(messageElement);
    chatlog.scrollTop = chatlog.scrollHeight;
}
