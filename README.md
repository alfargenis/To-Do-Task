# To Do Task - Advanced Task Management App

A modern, feature-rich task management application built with React that helps you organize your daily tasks with intelligent features and beautiful UI.

## ✨ Features

### 🎯 Core Task Management

- **Add tasks**: Easily create new tasks with a beautiful modal interface
- **Edit tasks**: Modify existing tasks without deleting and recreating them
- **Complete tasks**: Mark tasks as completed with visual feedback
- **Delete tasks**: Remove tasks you no longer need
- **Search tasks**: Find specific tasks with real-time search functionality

### 📅 Smart Date System

- **Intelligent date display**: Shows relative dates like "Today", "Yesterday", "2 days ago"
- **Automatic formatting**: Converts to absolute dates for older tasks
- **Creation tracking**: Every task automatically gets a creation timestamp

### 🎨 Visual Urgency System

- **Color-coded urgency**: Tasks change color based on their age
- **Progressive urgency levels**:
  - **0-7 days**: Normal (white background)
  - **8-14 days**: Urgent (light pink)
  - **15-21 days**: Very urgent (medium pink)
  - **22-30 days**: Critical (dark pink)
  - **30+ days**: Overdue (red background)
- **Visual indicators**: Color bars on the left side of urgent tasks

### 📊 Progress Tracking

- **Circular progress bar**: Visual representation of completion status
- **Dynamic colors**: Progress bar changes color based on completion rate
- **Real-time updates**: Progress updates instantly as you complete tasks

### 🎨 Modern UI/UX

- **Responsive design**: Works perfectly on desktop, tablet, and mobile
- **Smooth animations**: Beautiful transitions and hover effects
- **Intuitive icons**: Clear visual cues for all actions
- **Consistent styling**: Unified color palette and design language

## 🚀 Screenshots

### Main Interface with All States

![Main Interface](https://github.com/user-attachments/assets/acf31587-7ea1-4ff5-87c8-782fc14a33de)

_Shows the complete application with various task states: normal, urgent, very urgent, critical, and overdue tasks, along with completed tasks and the progress indicator. Notice the color gradient system and edit buttons (🖊️) on each task._

### Task Creation Modal

![Task Creation](https://github.com/user-attachments/assets/1657486e-125f-4d82-ba7d-222e53602bee)

_Beautiful modal interface for creating new tasks with intuitive form design._

### Task List View

![Task List View](https://github.com/user-attachments/assets/028674be-bb3a-4dc2-9e83-e829276891ae)

_Clean task list view showing the date system and task management interface._

### Task Editing Interface

![Task Editing](https://github.com/user-attachments/assets/b8fd3bc7-a03c-433b-b40a-96d65c65644c)

_Dedicated editing modal with save and cancel buttons, allowing users to modify existing tasks without deleting them._

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks and context
- **CSS3** - Custom styling with animations and responsive design
- **LocalStorage** - Client-side data persistence
- **React Icons** - Beautiful icon library
- **React Circular Progressbar** - Progress visualization
- **React Modal** - Modal dialogs for task creation/editing

## 📱 Features in Detail

### Task States & Urgency System

The app automatically categorizes tasks based on their age:

| Age        | Status      | Color       | Description                |
| ---------- | ----------- | ----------- | -------------------------- |
| 0-7 days   | Normal      | White       | Recent tasks, no urgency   |
| 8-14 days  | Urgent      | Light Pink  | Starting to need attention |
| 15-21 days | Very Urgent | Medium Pink | High priority              |
| 22-30 days | Critical    | Dark Pink   | Needs immediate attention  |
| 30+ days   | Overdue     | Red         | Significantly overdue      |

### Smart Date Formatting

- **Recent**: "Today", "Yesterday", "2 days ago"
- **Weekly**: "1 week ago", "2 weeks ago"
- **Monthly**: "3 weeks ago", "1 month ago"
- **Older**: Full date format (e.g., "15 Jan 2024")

### Task Actions

- **Click task**: Toggle completion status
- **Edit icon (🖊️)**: Open edit modal
- **Delete icon (✖️)**: Remove task
- **Hover effects**: Visual feedback for all interactions

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/alfargenis/To-Do-Task.git
   cd To-Do-Task
   ```

2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

- Open http://localhost:3000 to view it in your browser
- The page will reload when you make changes
- You may also see any lint errors in the console

### `npm run build`

Builds the app for production to the build folder.

- Correctly bundles React in production mode
- Optimizes the build for the best performance
- The build is minified and filenames include hashes
- Your app is ready to be deployed!

### `npm run deploy`

Deploys the application using GitHub Pages.

- Automatically builds the application
- Publishes to GitHub Pages
- Make sure you have properly configured the repository

## 🌟 Key Features Explained

### Intelligent Task Management

- **Persistent Storage**: All tasks are saved in your browser's LocalStorage
- **Cross-session**: Tasks persist between browser sessions
- **Device Independent**: Each device has its own task list

### Visual Feedback System

- **Color Coding**: Immediate visual recognition of task urgency
- **Progress Tracking**: Clear visualization of completion status
- **Interactive Elements**: Hover effects and smooth transitions

### User Experience

- **Intuitive Interface**: Easy to use for all skill levels
- **Responsive Design**: Works on all screen sizes
- **Fast Performance**: Optimized for smooth interactions

## 🔧 Technical Architecture

### Component Structure

```
src/
├── App/                    # Main application component
├── TodoContext/           # Global state management
├── Hooks/                 # Custom hooks (useLocalStorage)
├── TodoCounter/           # Progress display
├── TodoSearch/            # Search functionality
├── TodoList/              # Task list container
├── TodoItem/              # Individual task component
├── TodoForm/              # Task creation form
├── TodoEditForm/          # Task editing form
├── TodoDate/              # Date display component
├── CreateTodoButton/      # Add task button
├── Modal/                 # Modal dialogs
├── CircularProgressBar/   # Progress visualization
├── TodoLoading/           # Loading states
├── TodosError/            # Error handling
├── EmptyTodos/            # Empty state
└── utils/                 # Utility functions
```

### State Management

- **React Context**: Global state for tasks and UI state
- **LocalStorage Hook**: Custom hook for data persistence
- **Component State**: Local state for forms and modals

## 🎯 Use Cases

### Personal Task Management

- Daily to-do lists
- Project task tracking
- Habit formation
- Goal setting and monitoring

### Professional Use

- Work task organization
- Meeting preparation
- Deadline tracking
- Priority management

### Educational

- Assignment tracking
- Study planning
- Exam preparation
- Research task management

## 🤝 Contributing

If you want to contribute to this project, please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Icons from React Icons library
- Progress visualization with React Circular Progressbar
- Deployed on GitHub Pages

## 📞 Support

If you have any questions or need support, please:

- Open an issue on GitHub
- Check the existing issues for solutions
- Review the documentation above

---

**Made with ❤️ and ☕ by [Alfargenis](https://github.com/alfargenis)**
