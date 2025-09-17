

-----

# ✨ React Animated Portfolio Website

A beautiful, animated, and fully responsive personal portfolio website built with React.js. It features a sleek design with light/dark modes, smooth animations, and a carousel to showcase your projects.

-----

## 🚀 Live Demo

Check out the live version of the website here: **[(https://izzys-portfolio.netlify.app)]**
-----

## 📋 Features

This portfolio is packed with modern features to create a stunning first impression:

  - **Modern UI/UX**: Clean, professional design focused on readability and user experience.
  - **Smooth Animations**: Engaging animations powered by **Framer Motion** for a dynamic feel.
  - **Fully Responsive**: Looks great on all devices, from large desktops to small mobile phones.
  - **Light & Dark Mode**: A theme switcher allows users to toggle between light and dark themes.
  - **Interactive Project Carousel**: A touch-friendly carousel built with **React Slick** to display your work.
  - **Component-Based Architecture**: Built with reusable React components for clean and maintainable code.
  - **One-Click CV Download**: A direct link for recruiters and visitors to download your resume.

-----

## 🛠️ Technologies Used

This project is built with a modern frontend stack:

  - **React.js**: For building the user interface.
  - **CSS3**: Custom styling with CSS variables for easy theming.
  - **Framer Motion**: For creating beautiful and performant animations.
  - **React Slick**: For the project carousel.
  - **React Icons**: For including a wide range of popular icons.

-----

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

  - `npm`
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the application:**
    ```sh
    npm start
    ```
    The app will open automatically in your browser at `http://localhost:3000`.

-----

## 🎨 Customization

It's easy to customize this portfolio for your own use\!

1.  **Personal Information**:

      - Open `src/components/Header.js` and `src/components/Contact.js` to update your social media links (LinkedIn, GitHub, etc.), email, and phone number.
      - Change your name in `Header.js`, `Footer.js`, and `About.js`.

2.  **Profile Pictures**:

      - Replace `src/assets/images/profile-picture.png` with your own photo. The circular frames in the Hero and About sections will update automatically.

3.  **Resume/CV**:

      - Place your resume file in `src/assets/resume/` and name it `My_CV.pdf`. If you use a different file name, make sure to update the import and link in `src/components/Hero.js`.

4.  **Projects**:

      - Add your project images to `src/assets/images/`.
      - Open `src/components/Projects.js` and edit the `projectData` array to include your own project titles, descriptions, images, and links.

    <!-- end list -->

    ```javascript
    // Example from src/components/Projects.js
    const projectData = [
        {
            img: project1, // import your image at the top
            title: 'Your Project Title',
            description: 'A brief description of your amazing project.',
            liveLink: 'https://example.com',
            repoLink: 'https://github.com/your-repo',
        },
    ];
    ```

-----

