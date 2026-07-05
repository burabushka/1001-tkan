export default {
  title: "1001 Tkani/Landing",
  parameters: {
    chromatic: {
      viewports: [390, 768, 1440]
    }
  }
};

export const CurrentPage = () => `
  <iframe
    class="site-preview-frame"
    title="1001 Tkani landing page"
    src="/preview/index.html"
  ></iframe>
`;
