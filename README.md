# AI-Powered Dynamic SQL Query Generator with Node.js, Express, MySQL, React, and OpenAI (Chat-With-Data)

## Introduction
In the era of AI-driven automation, interacting with databases efficiently and intuitively has become essential. Our project harnesses the power of **Node.js, Express, MySQL, React, and OpenAI’s GPT-4** to enable users—both developers and non-technical individuals—to query databases dynamically using natural language. The system intelligently interprets user queries, generates optimized SQL statements, executes them on the database, and returns the results in an intuitive and interactive interface featuring **tables, charts, and chat views**.

## Key Features
1. **Dynamic Database Connection**
   - Users can connect the system with **any relational database** by providing authentication credentials.
   - The system **automatically fetches** the database schema, including tables, columns, and relationships.

2. **Context-Aware Querying**
   - Developers can create and select database contexts manually in real-time.
   - General users benefit from an AI-powered **context prediction system** that suggests relevant database structures.
   - Context selection is presented in an **intuitive UI with dropdowns and visual representations**.

3. **Natural Language to SQL Conversion**
   - Users can input queries in natural language (e.g., *"Show me the top 10 sales by region in the last quarter"*).
   - The backend sends the query, along with the dynamically generated database context, to the **OpenAI API**.
   - GPT-4 processes the request and returns an **optimized SQL query**.

4. **Real-Time Query Execution**
   - The **Node.js Express API** executes the generated SQL query on the connected database.
   - Results are fetched and returned to the React frontend.

5. **Interactive Data Representation**
   - **Table View**: Dynamically generated tables with appropriate rows and columns.
   - **Chart View**: Users can configure and visualize data dynamically using different chart types:
     - **Bar Chart**
     - **Line Chart**
     - **Pie Chart**
     - **Donut Chart**
     - **Scatter & Plot Graphs**

6. **Token Optimization and Pre/Post Processing**
   - Significant work has been done to **optimize output token size**, reducing API costs and improving efficiency.
   - Input token optimization is an ongoing process, focusing on **cleaning up and enhancing user prompts** for accuracy.


## Step-by-Step Data Flow
1. **User inputs query** on the React frontend.
2. **Frontend sends request** to Express API.
3. **API calls OpenAI** to generate SQL query based on user input and database context.
4. **SQL query runs** on the connected database.
5. **Results are returned** to the frontend.
6. **User can view data** in table or chart format, and optionally export to Excel/PDF.

## Setup Instructions

### Prerequisites
- **Node.js** (v14+ recommended)
- **MySQL database**
- **Valid OpenAI API key**


## Future Enhancements
- **Enhanced Input Token Optimization**: Further refining query context for efficiency.
- **More Advanced Context Prediction**: Improving AI-assisted database schema interpretation.
- **Performance Optimization**: Enhancing query execution speed with indexing and caching.
- **Custom Chart Configurations**: Expanding visualization options for user flexibility.

## Conclusion
This project bridges the gap between non-technical users and databases, making SQL query generation and execution seamless and intuitive. By leveraging **AI-driven SQL generation, real-time database execution, and dynamic data visualization**, it transforms the way users interact with databases. As development progresses, **further optimizations in token usage, UI enhancements, and performance improvements** will continue to refine the system.

Stay tuned for video demos showcasing real-world usage and future updates and Open-Source Projects!

