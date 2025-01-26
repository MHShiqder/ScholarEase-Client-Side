# Scholar-Ease : 

ScholarEase is a modern web application built with React, crafted to simplify the complex task of scholarship management. Whether it's tracking applications, reviewing deadlines, or providing feedback to applicants, this platform ensures efficiency and ease for both administrators and users. With its user-friendly design, ScholarEase makes managing scholarships less of a hassle and more of a seamless experience.

- **Live Website Link**: [https://scholarease1.netlify.app](https://scholarease1.netlify.app)



## Key Features


### **User Account Management**
- Users can register and log in securely with JWT authentication.
- Profiles display user details, including their role (admin, applicant, etc.).

### **Scholarship Listings**
- Display scholarships fetched from the backend in a well-organized manner.
- Provide search functionality (by university, scholarship name, or degree) with case-insensitive matching.
- Show real-time aggregated scholarship ratings based on user reviews.

### **Scholarship Details**
- Detailed pages for each scholarship include all relevant information (e.g., university, degree, application fee, deadline).
- Display reviews and ratings for the selected scholarship.
- Allow logged-in users to submit reviews or ratings.

### **Apply for Scholarships**
- Users can apply for scholarships directly from the scholarship details page.
- Display a personalized dashboard to track users' applied scholarships.
- Provide options to edit or delete applications.

### **Review Management**
- Logged-in users can leave reviews for scholarships they've applied for.
- Users can edit or delete their reviews from the dashboard.
- Reviews are aggregated to update scholarship ratings in real time.

### **Home Page**
- Showcase the latest scholarships, sorted by fee or posting date.
- Highlight top-rated scholarships and other featured content.

### **Admin Panel**
- Admins can manage users, scholarships, and applications.
- Includes features to:
  - Add, update, or delete scholarships.
  - View and delete user reviews.
  - Track all scholarship applications.

### **Payment Integration**
- Allow users to pay application fees securely using Stripe.
- Display payment status on the user's dashboard.

### **Search and Filter Options**
- Advanced search functionality to locate scholarships easily.
- Filters for degree, university, or application fee range.

### **Responsive and User-Friendly Design**
- The frontend is built with a responsive layout for seamless use across devices.
- Intuitive navigation ensures a smooth user experience.

### **Data Visualization**
- Includes pie charts  (using Recharts) to visualize application statistics, such as the number of applicants per scholarship.

### **Responsive Design**
- Fully responsive across all devices, ensuring a seamless user experience on mobile, tablet, and desktop.

### **Secure API Integration**
- Backend APIs are protected using JWT authentication and built with secure MongoDB Atlas connections to manage data.




## npm-packages
I have used several npm packages, some of them are-

### 1. **@smastrom/react-rating**
- Used for interactive rating components, allowing users to rate or review scholarships easily.

### 2. **@stripe/react-stripe-js** and **@stripe/stripe-js**
- Integrated for handling secure online payments and managing transactions for application or service fees.

### 3. **@tanstack/react-query**
- Manages server state and caching, ensuring efficient and seamless data fetching for applications and user interactions.

### 4. **animate.css**
- Provides predefined animations for enhancing the visual appeal and user experience of the website.

### 5. **axios**
- Simplifies HTTP requests for backend communication, such as fetching scholarship data or submitting applications.

### 6. **lottie-react**
- Enables the use of Lottie animations, adding engaging and visually appealing elements to the interface.

### 7. **react-countup**
- Adds animated number counting for displaying statistics, such as the total number of scholarships or applicants.

### 8. **react-hook-form**
- Simplifies form management with built-in validation and easy handling of user inputs.

### 9. **react-icons**
- Supplies a collection of customizable icons to enrich the UI design.

### 10. **react-responsive-carousel**
- Adds a responsive carousel for showcasing featured scholarships or testimonials.
pages of the application.

### 11. **recharts**
- Provides customizable charts and graphs for data visualization, making statistics more understandable.

### 12. **sweetalert2**
- Creates beautiful and responsive alerts for user feedback, such as success or error messages.

### 13. **swiper**
- Enables interactive sliders for a sleek and modern user experience.




