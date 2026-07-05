import "../stories/storybook-preview.css";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: {
        mobile390: {
          name: "Mobile 390",
          styles: { width: "390px", height: "844px" }
        },
        desktop1440: {
          name: "Desktop 1440",
          styles: { width: "1440px", height: "900px" }
        }
      }
    }
  }
};

export default preview;
