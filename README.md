### **Task: Responsive Design with Media Queries in a React-Vite Project Using Plain CSS**

### **Objective:**
Students will create a responsive React application using Vite and plain CSS media queries to ensure the layout adapts seamlessly across different screen sizes (mobile, tablet, and desktop).

### **Task Overview:**
This task will teach students how to:
1. Apply plain CSS media queries to adjust styles for various screen sizes.
2. Create responsive components such as headers, cards, and navigation menus.
3. Test their application across different device resolutions.

### **Steps and Requirements:**

#### **1. Setup the Project:**
- Create a new React project with Vite:
  ```bash
  npm create vite@latest responsive-design
  cd responsive-design
  npm install
  npm run dev
  ```

#### **2. Build a Basic Layout:**
- Create a simple layout with the following components:
  - **Header:** Includes a title and navigation menu.
  - **Main Content:** A grid of responsive cards.
  - **Footer:** Contains links or a simple copyright text.

#### **3. Style the Components:**
- Use plain CSS to style the components.
- Save your styles in `src/index.css` or a similar file and import it in your `main.jsx` or `App.jsx`.

---

#### **4. Add Media Queries for Responsiveness:**
- Adjust the layout for different screen sizes using media queries:
  - **Mobile (max-width: 768px):**
    - Stack elements vertically.
    - Hide or create a collapsible menu for navigation.
  - **Tablet (min-width: 768px and max-width: 1024px):**
    - Display two cards per row in the grid.
  - **Desktop (min-width: 1024px):**
    - Show three or more cards per row.

#### **5. Components to Create:**
- **Header Component:**
  - Contains a title and navigation links.
  - Navigation menu should stack or hide on smaller screens.

- **Card Component:**
  - Includes an image, title, description, and a button.
  - Adjust the size and layout of the card on different screen sizes.

- **Footer Component:**
  - Displays a single row of text or links.
  - Adjust alignment and spacing for various resolutions.

#### **6. Testing:**
- Use browser developer tools to test responsiveness at:
  - Mobile resolutions (e.g., 375px wide).
  - Tablet resolutions (e.g., 768px wide).
  - Desktop resolutions (e.g., 1024px and above).

### **Submission Requirements:**
1. **Code:** Submit a GitHub repository link containing your project.
2. **Screenshots:** Take screenshots of the app in:
   - Mobile view
   - Tablet view
   - Desktop view
3. **Reflection:** Write a short paragraph on what you learned about responsive design.

### **Expected Outcome:**
By completing this task, students will:
- Learn how to create a responsive web application using plain CSS.
- Understand the role of media queries in adjusting layouts.
- Build a UI that adapts seamlessly across different screen sizes.