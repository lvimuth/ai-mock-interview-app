# AI Mock Interview App

An advanced AI-powered application designed to simulate mock interviews, provide real-time feedback, and enhance your interview preparation experience. Built with cutting-edge tools and frameworks to deliver a seamless and effective user experience.

## Features

1. **AI-Driven Mock Interviews**: Get personalized, intelligent interview simulations tailored to your needs.
2. **Real-Time Feedback**: Receive actionable insights to improve your responses.
3. **Speech-to-Text Integration**: Transcribe and analyze your verbal responses in real-time.
4. **Customizable Themes**: Choose themes and styles that suit your preferences.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.0.3)
- **AI Integration**: [Google Generative AI](https://ai.google/)
- **Database**: Serverless database with [Neon Database](https://neon.tech/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) and Tailwind CSS
- **State Management**: React (v18)

## Project Structure

- **`package.json`**: Lists dependencies and scripts to run, build, and deploy the app.
- **AI Tools**: Powered by generative AI for personalized responses.
- **Styling**: Tailwind CSS with animation extensions for a modern UI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ai-mock-interview-app.git
   cd ai-mock-interview-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file at the root of the project.
   - Add the required keys for API access and database configuration.

## Scripts

- **Development**: Start the development server:

  ```bash
  npm run dev
  ```

- **Build**: Generate a production-ready build:

  ```bash
  npm run build
  ```

- **Start**: Launch the production server:

  ```bash
  npm start
  ```

- **Linting**: Check for code quality and linting errors:
  ```bash
  npm run lint
  ```

## How It Works

1. **User Input**: Users answer questions verbally or through text inputs.
2. **AI Analysis**: Responses are analyzed using Google Generative AI.
3. **Feedback**: Tailored feedback is provided to enhance interview skills.

## Contribution

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License.

---

Start preparing smarter for your interviews with the AI Mock Interview App today!
