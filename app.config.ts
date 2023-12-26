export default defineAppConfig({
  ui: {
    primary: "teal",
    gray: "cool",
    icons: { dynamic: true },
  },

  tailwindcss: {
    theme: {
      extend: {
        width: {},
      },
    },
  },
});
