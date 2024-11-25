# AI-Powered Note Taking App

An AI-powered note-taking application that leverages advanced AI models to provide intelligent and organized note management. This project uses Gemini AI, FastAPI, and database integration to deliver a seamless user experience.

## Features

1. **AI-Generated Notes**: Create concise, meaningful notes from large text inputs.
2. **Database Integration**: Store and retrieve user-generated notes securely.
3. **Customizable**: Update schemas and adapt models as per requirements.
4. **Efficiency**: The app uses optimized APIs to deliver fast and reliable performance.

## Project Structure

- `jsconfig.json`: Configures module resolution and paths.
- `db.js`: Contains database connection and query logic.
- `GeminiAIModel.js`: Includes AI model configuration and interaction methods.
- `schema.js`: Defines the data schema used for note storage and retrieval.

## How It Works

1. **User Interaction**: Users input text or topics for which they want notes.
2. **AI Processing**: The app processes the input using the Gemini AI model to generate structured notes.
3. **Data Management**: Notes are stored in the database based on the schema defined in `schema.js`.
4. **Output Delivery**: Users retrieve their notes efficiently via API endpoints.

### Prerequisites

- Node.js installed
- Database server running
- API keys or configuration for Gemini AI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ai-mock-interview-app.git
   cd ai-mock-interview-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables for database and API connections.

### Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Access the app through the designated URL.

## Contribution

Feel free to contribute by forking the repository, making changes, and submitting a pull request. Suggestions and feature requests are always welcome!

## License

This project is licensed under the MIT License.
