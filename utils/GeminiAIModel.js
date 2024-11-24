const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
 
 export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "job position: Full stack developer, job description: react, NodeJS, Years of Experience: 6. Depends on this information please give me 5 interview question with answers in json format . Give question and answers as field in JSON "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"question\": \"Describe your experience with React.js, including specific projects where you utilized its features and overcame challenges.  Focus on your experience with state management, component lifecycle, and optimization techniques.\",\n    \"answer\": \"In my six years of experience, I've extensively used React.js in various projects, from small single-page applications to large-scale e-commerce platforms.  For instance, in a recent project involving a dynamic dashboard, I leveraged Redux for state management, handling complex data updates and user interactions efficiently.  I tackled performance issues by implementing techniques like memoization and code splitting using React.lazy and Suspense, resulting in a significant improvement in load times.  I am also familiar with various state management libraries like Context API and Zustand, choosing the best fit for different project needs. My experience with component lifecycle methods allows me to optimize components for specific situations and improve performance. I'm also proficient in using React Hooks which simplifies state management in functional components.\"\n  },\n  {\n    \"question\": \"Explain your understanding of Node.js and its application in building scalable backend systems.  Provide an example of a project where you leveraged Node.js for a specific purpose.\",\n    \"answer\": \"Node.js's non-blocking, event-driven architecture makes it ideal for building scalable and high-performance backend systems. Its use of JavaScript allows for full-stack JavaScript development which is a significant advantage.  In one project, we used Node.js with Express.js to create a RESTful API for a real-time chat application.  This allowed us to handle thousands of concurrent connections efficiently, leveraging WebSockets for real-time updates. We utilized a message queue like RabbitMQ to handle asynchronous tasks and improve performance further.  We also incorporated monitoring and logging tools to ensure system stability and identify potential bottlenecks.\"\n  },\n  {\n    \"question\": \"How do you approach debugging complex issues in a full-stack application involving both front-end (React) and back-end (Node.js) components?  Walk me through your debugging process.\",\n    \"answer\": \"My approach to debugging begins with reproducing the issue consistently.  I then use the browser's developer tools (Network, Console, Sources) to identify potential front-end problems in React, checking for errors in the console, network requests, and component behavior. For the back-end (Node.js), I leverage debugging tools like Node Inspector or utilize logging statements strategically placed throughout the code to pinpoint the source of the error. If needed, I use tools like PM2 to monitor the Node.js application and analyze performance metrics.  I also utilize version control systems effectively to compare changes and track down issues introduced by recent code modifications.  If the issue is related to data flow, I closely examine database queries and interactions to identify inconsistencies or errors.  Collaboration is key; I communicate effectively with other developers to share insights and efficiently resolve complex problems.\"\n  },\n  {\n    \"question\": \"Describe your experience with database technologies used alongside Node.js.  Discuss your familiarity with different database models (e.g., relational, NoSQL) and your experience with ORMs or ODMs.\",\n    \"answer\": \"I have experience working with both relational databases like PostgreSQL and MySQL, and NoSQL databases like MongoDB. My choice of database depends heavily on the project requirements. For example, I've used PostgreSQL for projects needing strong data integrity and relational structures, leveraging its features for complex queries and transactions.  In projects requiring flexibility and scalability, such as those involving large volumes of unstructured data, I've utilized MongoDB. I'm also proficient in using ORMs like Sequelize (for relational databases) and Mongoose (for MongoDB), which simplify database interactions and improve developer productivity. I understand the trade-offs between different database choices and can make informed decisions based on project needs.\"\n  },\n  {\n    \"question\": \"How do you ensure the security of your full-stack applications? Discuss specific techniques you use to protect against common vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).\",\n    \"answer\": \"Security is a paramount concern in all my projects. I employ several techniques to mitigate common vulnerabilities. To prevent SQL injection, I always use parameterized queries or prepared statements instead of directly embedding user inputs into SQL queries.  For XSS protection, I use appropriate output encoding and sanitization techniques on user-supplied data displayed on the front-end.  I also implement appropriate HTTP headers (like Content-Security-Policy) and follow secure coding practices to prevent XSS attacks.  CSRF protection is typically handled using techniques like Synchronizer Tokens Pattern, ensuring that only legitimate requests originating from the application are processed.  I also regularly update dependencies to patch known vulnerabilities and utilize security scanners and linters to detect potential issues early in the development process.  For authentication and authorization, I use proven strategies like JWT (JSON Web Tokens) and OAuth 2.0.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
