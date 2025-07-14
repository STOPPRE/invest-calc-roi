# FinCast: Your Financial Forecast Calculator

FinCast is a modern, responsive web application built with React that allows users to compare two different investment scenarios side-by-side. It provides a clear, visual forecast of how initial investments, monthly contributions, and different interest rates can impact savings over time, with an optional adjustment for inflation.

![FinCast Screenshot](<./screenshot.png>) <!-- Add a screenshot of the app here -->

## ✨ Features

-   **Dual Scenario Comparison**: Input two different annual interest rates to compare their long-term growth.
-   **Inflation Adjustment**: Toggle between nominal (future dollar) and real (present day dollar) values to see the true impact of inflation.
-   **Dynamic Calculations**: All results, including the chart and table, update instantly when you change the inputs.
-   **Interactive Growth Chart**: A line chart visualizes the growth of both scenarios year-over-year.
-   **Detailed Amortization Table**: A month-by-month breakdown shows the balance of each scenario over the entire investment term.
-   **Mobile-First Design**: The interface is fully responsive and designed to be easily usable on any device, from mobile phones to desktops.
-   **Customizable Scenario Names**: Personalize the names of your investment scenarios (e.g., "401k", "Robinhood").

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Charts**: [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/)
-   **Design System**: Adheres to the specifications in `designsystem.md`.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need [Node.js](https://nodejs.org/en/) (version 16+ recommended) and `npm` installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/fincast.git
    cd fincast
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📂 Project Structure

The project follows a standard React application structure:

```
/
├── public/
├── src/
│   ├── components/   # Reusable React components
│   ├── utils/        # Shared utility functions (e.g., calculations.js)
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles and Tailwind directives
│   └── main.jsx      # Application entry point
├── designsystem.md   # Project design system specifications
├── package.json
└── README.md
```

This project was built to showcase a modern, component-based approach to building interactive web applications.
