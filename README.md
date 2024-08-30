# TradeRoom

TradeRoom is a landing page built using React, Vite, and Tailwind CSS. It features a responsive design and navigation menu optimized for all devices.

## Live URL

The site is live at (https://traderoom-ndm.vercel.app/)

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/traderoom.git
    ```

2. Navigate to the project directory:
    ```bash
    cd traderoom
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to see the app.

## Assumptions and Decisions

- Used React with Vite for faster builds and better development experience.
- Tailwind CSS was chosen for its utility-first approach, enabling rapid styling and responsive design.
- Assumed users have basic knowledge of React and Tailwind CSS.

## Implemented Features

- **Responsive Navigation Menu**: A navigation menu that adapts to different screen sizes, ensuring accessibility on all devices.
- **Services Section**: A dedicated section showcasing the services offered, styled with Tailwind CSS for clarity and impact.
- **Courses Section**: Displays available courses with details and buttons, using responsive design principles.
- **Frequently Asked Questions (FAQ) Section**: An accordion-based FAQ section for user inquiries, with smooth transitions and expandable answers.
- **Responsive Components**: All components are styled with Tailwind CSS, making the site fully responsive and visually consistent across devices.
- **Footer**: A footer that includes essential links and information, displayed consistently across all pages.

## Challenges Faced

- **Challenge**: Implementing an accordion for the Frequently Asked Questions (FAQ) section.
  - **Solution**: The challenge involved managing the open/close state for each question in the FAQ section. I solved this by using a React hook (`useState`) to track which question is currently active. Tailwind CSS classes were used for transitions and conditional styling, ensuring a smooth user experience.

- **Challenge**: Ensuring consistent responsiveness across various devices using Tailwind CSS.
  - **Solution**: Tailwind CSS's utility classes made it easier to apply responsive styles directly in the HTML. I used a mobile-first approach, testing the site across multiple devices to fine-tune the design for different screen sizes.

- **Challenge**: Customizing Tailwind CSS for specific design needs.
  - **Solution**: Extended Tailwind’s default configuration to add custom colors, spacing, and typography that matched the project’s design requirements.

## Conclusion

TradeRoom is a responsive and user-friendly landing page designed to work seamlessly across all devices. The project demonstrates a strong understanding of React, Tailwind CSS, and responsive web development.
