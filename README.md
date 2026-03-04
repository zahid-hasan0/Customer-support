# Customer Support Zone

A React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved.

## Features & Requirements
*   **Navbar:** Website name/logo, menu items, New Ticket button.
*   **Banner:** Responsive design showing "In Progress Count" and "Resolved Count".
*   **Main Section:** 
    *   Displays 12 hardcoded customer tickets containing `id`, `title`, `description`, `customer`, `priority`, `status`, and `createdAt`.
    *   Tickets arranged in a responsive 2-column grid.
*   **Task Status Section (Right Side):**
    *   Clicking a card adds the ticket to the In Progress task status section and displays a toast alert.
    *   Increases the 'In Progress' count in the banner.
*   **Task Completion Logic:**
    *   Clicking Complete Button removes ticket from Task Status, adds it to Resolved List.
    *   Decreases In Progress count, increases Resolved count.
    *   Removes the item from the Customer Tickets list.
    *   Shows a toast alert.
*   **React-Toastify:** For handling toast notifications across interactions.
*   **Responsive UI:** Fully responsive and styled via TailwindCSS.

---

## React Concepts Questions & Answers

### 1. What is JSX, and why is it used?
**JSX (JavaScript XML)** is a syntax extension for JavaScript recommended by React. It allows us to write HTML-like markup directly inside JavaScript code. It looks like HTML but works inside JavaScript, and under the hood, it is transformed into `React.createElement()` calls by tools like Babel.
*   **Why it is used:** It makes writing UI structures and components easier and more readable. It combines rendering logic with UI logic (events, state handling) seamlessly in one file.

### 2. What is the difference between State and Props?
*   **Props (Properties):** Read-only data passed from a parent component down to a child component. They are immutable within the receiving component and are used to configure or customize elements.
*   **State:** Local, mutable data managed internally by the component itself. When state changes, React re-renders the component. State cannot be accessed by parent components unless explicitly passed up via callback functions.

### 3. What is the useState hook, and how does it work?
The **`useState` hook** is a built-in React Hook that allows you to add local state variables to functional components.
*   **How it works:** It returns an array with two elements: the current state value, and a dispatcher function to update that state.
    ```javascript
    const [count, setCount] = useState(0); 
    // count is the value, setCount is the updater function, 0 is the initial value.
    ```
When you call the updater function (e.g., `setCount(count + 1)`), React schedules a re-render of the component with the new state value.

### 4. How can you share state between components in React?
State can be shared between components through several methods:
1.  **Lifting State Up:** Moving the state to the closest common parent component of the components that need access to it, and passing it down via props.
2.  **Context API:** Built-in method used to pass data deeply through the component tree without manually passing props down at every level (prop drilling). Good for global themes, user sessions, etc.
3.  **State Management Libraries:** External libraries like Redux, Zustand, or Recoil for larger applications where state logic needs to be accessed and updated from many different unrelated parts of the app.

### 5. How is event handling done in React?
Event handling in React is very similar to DOM elements but with some syntactic differences:
*   React events are named using camelCase instead of lowercase (e.g., `onClick` instead of `onclick`).
*   With JSX, you pass a function as the event handler rather than a string.
    ```jsx
    <button onClick={handleClick}>Click Me</button>
    ```
*   React uses **Synthetic Events**, a cross-browser wrapper around the browser's native event system. This ensures that events have consistent properties across different browsers.
