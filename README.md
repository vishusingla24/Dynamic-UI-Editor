# 🧩 Dynamic UI Editor for Customizable Designs

A **Dynamic UI Editor** built using **React**, allowing users to **customize a furniture-themed UI design** (based on the provided Figma layout) in real-time.  
Users can modify typography, layout, button styles, colors, and image gallery appearance — all through an interactive editor, with an instant live preview.

---

## 🌐 Live Demo

🔗 **Deployed Link:** [https://vishu-dynamic-ui-editor.vercel.app/](https://vishu-dynamic-ui-editor.vercel.app/)  
🖥️ **Localhost Preview:** [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots

### 🎛️ Editor Panel  
This section lets users customize every design property in real time.  
![Editor Panel](public/screenshots/editor-panel.png)

---

### 🧩 Live Preview  
Instantly reflects all design changes made in the editor.  
![Live Preview](public/screenshots/live-preview.png)

---

## 🚀 Project Overview

In real-world UI projects, clients and designers frequently request **on-the-fly design customizations** — such as color updates, font changes, or spacing adjustments — without touching the source code.  

This project simulates that environment by providing a **React-based UI Editor** where all these updates happen dynamically through the browser.

The UI is inspired by a **furniture card layout** that includes:
- A **main hero image**
- **Typography customization**
- **Interactive button styling**
- **Dynamic gallery**
- **Two responsive layouts**: *Desktop* and *Compact view*

---

## ⚙️ Features & Functionalities

### ✨ Typography
- Change **Font Family** (Roboto, Poppins, Inter)
- Adjust **Font Weight** (400–700)
- Set **Font Size** (10–60px)

### 🎨 Button Customization
- Border Radius control  
- Shadow size selection (none / small / medium / large)  
- Button alignment (left / center / right)  
- Button background and text color (HEX/RGB input)

### 🖼️ Gallery / Image Customization
- Gallery alignment (grid-left / grid-center / grid-right)
- Image spacing and border radius
- Live preview of uploaded or linked images

### 🧱 General Layout
- Card corner radius
- Container padding
- Section background color
- Stroke color and stroke width

### 🧭 Layout Switching
- Switch between **Desktop Layout** and **Compact Layout**

### ⚡ Live Preview
- All changes appear **instantly** in the preview area without reloading the page

### 🧾 Output
- Export configuration as JSON for future reuse

### 🛠️ Additional Custom Features
- Zoom In / Zoom Out controls
- Fullscreen toggle
- Ruler toggle (for design alignment)
- Reset / Move control button

---

## 🧩 Component API & Configurable Props

### 🧠 `PreviewUI` Component
Renders the live preview of the furniture UI based on the current settings.

| Prop | Type | Description |
|------|------|-------------|
| `fontFamily` | `string` | Sets the font style for headings and text |
| `fontWeight` | `number` | Controls the thickness of the text |
| `fontSize` | `number` | Adjusts text size in px |
| `buttonBg` | `string` | Background color of the button |
| `buttonText` | `string` | Text color of the button |
| `buttonRadius` | `number` | Border radius for button corners |
| `buttonShadow` | `string` | Type of shadow effect applied |
| `buttonAlign` | `string` | Button alignment (left, center, right) |
| `galleryAlign` | `string` | Gallery image grid alignment |
| `imageSpacing` | `number` | Space between images |
| `imageRadius` | `number` | Image border radius |
| `cardRadius` | `number` | Rounds the product card corners |
| `containerPadding` | `number` | Sets padding within card container |
| `sectionBg` | `string` | Background color for the entire card section |
| `strokeColor` | `string` | Border/stroke color of card and images |
| `strokeWeight` | `number` | Stroke thickness in pixels |
| `layoutMode` | `string` | Determines layout (“desktop” or “compact”) |
| `images` | `array` | List of image URLs for gallery and preview |

---

## 🧰 How the Editor Works

1. The editor panel is rendered using **controlled form inputs** in `EditorPanel.jsx`.
2. Each input updates the `settings` object stored in React state (`useState`).
3. The updated state is passed as props to the `PreviewUI` component.
4. The `PreviewUI` immediately re-renders to reflect every change in **real-time**.
5. All updates happen dynamically — no reload or re-compilation is needed.

---

## 💡 UX & Design Decisions

### 🎯 Simplicity First
The editor layout is built to be **intuitive**, with clearly labeled controls and immediate visual feedback.

### 🌈 Real-Time Feedback
Every design change is instantly visualized using React’s **state-driven rendering** — similar to design tools like Figma or Canva.

### 📱 Responsive Design
Both the **editor** and **preview** adapt across screen sizes (desktop → mobile).

### 🧩 Modular Architecture
Each part of the project is divided into reusable React components:
- `App.js` — Global state handler  
- `EditorPanel.jsx` — Control panel for customization  
- `PreviewUI.jsx` — Real-time preview renderer

### 🧭 Creative Enhancements
- “Live Preview” header for clarity  
- Added **zoom, ruler, and fullscreen controls**  
- Designed **two layout modes** for flexibility

---

## 🧑‍💻 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-github-username>/dynamic-ui-editor.git
cd dynamic-ui-editor
Install dependencies
npm install
Run locally
npm start
Build for production
npm run build
