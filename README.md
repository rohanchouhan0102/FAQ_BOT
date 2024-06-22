# FAQ Bot

FAQ Bot is a simple Node.js application that serves as a FAQ chatbot for an e-commerce platform. It handles common customer queries related to shipping policies, return policies, and payment methods using Express as the server framework and EJS for rendering dynamic content.

## Features

- **Greeting and Farewell:** The chatbot greets users at the start and bids them farewell at the end of the conversation.
  
- **FAQ Handling:**
  - Answers predefined FAQs related to shipping policies, return policies, and payment methods.
  - Users can input their questions through an interactive interface.

- **Simple Database Integration:** Uses a JSON file to store and retrieve FAQs.

- **Error Handling:** Manages unexpected inputs and guides users to ask valid questions.

- **Deployment:** Easily deployable on cloud services like Heroku or local hosting.

## Installation

To run the FAQ Bot locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/faq-bot.git
   cd faq-bot

2. **Install dependencies::**

   ```bash
   npm install


3. **Set up environment variables:**

   ```bash
   PORT=3001



 4. **Clone the repository:**

   ```bash
   npm start
```

 5. **Access the application::**

Open your web browser and go to http://localhost:3001 to view the FAQ Bot.
 

##Usage
* Navigate to the homepage and click on the "Start" button to enter the FAQ chat interface.
* Type your question in the input box or choose from the list of suggested questions that 
  appear when you click on the input box.
* Click the arrow button to submit your question and view the answer.

##Folder Structure

```bash
faq-bot/
│
├── data/
│   └── faqs.json         # JSON file containing FAQs and answers
│
├── public/
│   └── css/
│       └── styles.css    # CSS styles for the application
│
├── views/
│   ├── chat.ejs         # EJS template for the chat interface
│   └── index.ejs        # EJS template for the homepage
│
├── .env                  # Environment variables configuration file (not included in the repository)
├── .env.example          # Example .env file for reference
├── app.js                # Main application file
├── package.json          # npm package configuration
└── README.md             # This README file

```
##Credits

Developed by ROHAN CHOUHAN

## License
This project is licensed under the MIT License - see the LICENSE file for details.

