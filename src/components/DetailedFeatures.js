// filepath: /Users/hin/Desktop/chat-w-data/chatwdata-portfolio/src/components/DetailedFeatures.js
import React from 'react';
import { Container,Card } from 'react-bootstrap';
import { FaSearch, FaLightbulb, FaChartBar, FaDesktop, FaKeyboard, FaExclamationTriangle, FaSync, FaComments, FaPalette, FaTools, FaChartLine, FaFolderOpen, FaSave, FaFilter, FaFileAlt, FaSort, FaSearchPlus, FaEdit, FaRuler, FaFolder, FaUpload, FaMobileAlt, FaCommentDots, FaCheck, FaColumns } from 'react-icons/fa';
import '../styles/DetailedFeatures.css';

const features = [
  { title: "AI‑Powered Query Generation", points: ["Automatically generate SQL queries based on user input.", "Reduce errors with intelligent query suggestions."], icon: <FaSearch /> },
  { title: "Dynamic Suggestions", points: ["Real‑time query suggestions to keep you ahead of the curve.", "Access the most relevant data instantly."], icon: <FaLightbulb /> },
  { title: "Multiple Report Formats", points: ["Export reports in JSON, Excel, PDF, and CSV formats.", "Choose the format that best fits your needs."], icon: <FaChartBar /> },
  { title: "User‑Friendly Interface", points: ["Clean and professional UI accessible to all users."], icon: <FaDesktop /> },
  { title: "Debounced Input Handling", points: ["Smooth, responsive typing with optimized suggestion rendering."], icon: <FaKeyboard /> },
  { title: "Error Handling", points: ["Detailed error messages to ensure a smooth experience."], icon: <FaExclamationTriangle /> },
  { title: "AI Query Toggle", points: ["Easily switch between AI‑generated and manual queries for flexibility."], icon: <FaSync /> },
  { title: "Real‑Time Feedback", points: ["Provide feedback on generated queries to continuously improve the system."], icon: <FaComments /> },
  { title: "Customizable Themes", points: ["Personalize your experience with multiple theme options."], icon: <FaPalette /> },
  { title: "User Mode Toggle", points: ["Switch between different user modes with dynamic icons and themes."], icon: <FaTools /> },
  { title: "Interactive Charts", points: ["Visualize data with various chart types and smooth animated transitions."], icon: <FaChartLine /> },
  { title: "Sidebar Navigation", points: ["Quickly navigate between sections with a responsive sidebar."], icon: <FaFolderOpen /> },
  { title: "Saved Chats and Reports", points: ["Access past reports and saved chats for reference and analysis."], icon: <FaSave /> },
  { title: "Advanced Filtering", points: ["Apply dynamic filters across data for precise insights."], icon: <FaFilter /> },
  { title: "Pagination", points: ["Efficiently handle large datasets with pagination or infinite scrolling."], icon: <FaFileAlt /> },
  { title: "Sorting", points: ["Sort data by various columns for an organized view."], icon: <FaSort /> },
  { title: "Search Functionality", points: ["Quickly find specific data within tables."], icon: <FaSearchPlus /> },
  { title: "Editable Cells", points: ["Edit data directly within the table and save changes in real‑time."], icon: <FaEdit /> },
  { title: "Column Resizing", points: ["Adjust column widths effortlessly to fit content."], icon: <FaRuler /> },
  { title: "Row Selection", points: ["Select multiple rows for bulk actions and enhanced data management."], icon: <FaFolder /> },
  { title: "Export Options", points: ["Export your table data in multiple formats for external analysis."], icon: <FaUpload /> },
  { title: "Responsive Design", points: ["Optimized for desktops, tablets, and mobiles for a consistent experience."], icon: <FaMobileAlt /> },
  { title: "Tooltips and Annotations", points: ["Add context to your data points with detailed tooltips."], icon: <FaCommentDots /> },
  { title: "Data Validation", points: ["Ensure the integrity of your data with robust validation rules."], icon: <FaCheck /> },
  { title: "Customizable Columns", points: ["Show or hide columns to tailor your data view to your preferences."], icon: <FaColumns /> }
];

const useCases = [
  "E‑commerce Analytics: Detailed sales reports, customer insights, and product performance metrics.",
  "Inventory Management: Track stock levels, monitor turnover, and optimize operations.",
  "Financial Reporting: Create comprehensive financial statements and revenue analyses.",
  "Customer Relationship Management: Analyze customer behavior and engagement for improved retention.",
  "Operational Efficiency: Monitor order processing and shipping status for performance tracking.",
  "Marketing Analysis: Evaluate campaign performance and ROI with interactive charts.",
  "Human Resources: Generate employee performance and attendance reports.",
  "Healthcare: Analyze patient data and treatment outcomes efficiently."
];

function DetailedFeatures() {
return (
    <section id="detailed-features" className="detailed-features py-5">
        <Container>
            <h1 className="text-center mb-5">Chat-W-Data: Enhanced Data Interaction</h1>
            <p className="text-center mb-5">
                Unlock the full potential of your data with advanced dynamic charts and tables.
                Our platform offers a wealth of features for real‑time insights,
                interactive filtering, and customizable reporting formats.
            </p>
            <div className="features-cards-wrapper">
                <div className="features-cards d-flex">
                    {features.map((feature, index) => (
                        <Card key={index} className="feature-card mx-2">
                            <Card.Body>
                                <div className="feature-icon mb-3">
                                    {feature.icon}
                                </div>
                                <Card.Title>{feature.title}</Card.Title>
                                <ul>
                                    {feature.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <div className=" text-center use-cases-section mt-5">
                <h1 className="text-center mb-4">Diverse Use Cases:</h1>
                <ul className="list-unstyled">
                    {useCases.map((useCase, idx) => (
                        <li key={idx} className="mb-2">{useCase}</li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
);
}

export default DetailedFeatures;