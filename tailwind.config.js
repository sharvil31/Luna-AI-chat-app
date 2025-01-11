/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#096B5A",
          onPrimary: "#FFFFFF",
          primaryContainer: '#A1F2DC',
          onPrimaryContainer: '#00201A',
          background: "#F5FBF7",
          onBackground: "#171D1B",
          onSurfaceVariant: "#3F4945",
          surfaceContainerLow: "#EFF5F1",
          onSurface: "#171D1B",
          outline: "#6F7975",
          surfaceContainer: "#E9EFEC",
          surfaceContainerHigh: '#E3EAE6',
          surfaceContainerHighest: "#DEE4E0",
          inverseSurface: "#2B322F",
          inverseOnSurface: "#ECF2EE",
          errorContainer: "#FFDAD6",
          onErrorContainer: "#410002",
          secondaryContainer: "#CDE8DF",
          onSecondaryContainer: '#07201A',
        },

        dark: {
          primary: "#85D6C1",
          onPrimary: "#00382E",
          primaryContainer: '#005143',
          onPrimaryContainer: '#A1F2DC',
          background: "#0E1513",
          onBackground: "#DEE4E0",
          onSurfaceVariant: "#BFC9C4",
          surfaceContainerLow: "#171D1B",
          onSurface: "#DEE4E0",
          outline: "#89938F",
          surfaceContainer: "#1B211F",
          surfaceContainerHigh: '#252B29',
          surfaceContainerHighest: "#303634",
          inverseSurface: "#DEE4E0",
          inverseOnSurface: "#2B322F",
          secondaryContainer: "#334B45",
          onSecondaryContainer: '#CDE8DF',
        },
      },

      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        emphasized: "cubic-bezier(0.2, 0, 0, 1.0)",
        standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
      },

      boxShadow: {
        elevation1:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",

        elevation2:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)",

        elevation3:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
