import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { Dashboard } from "./Components/index";

function App() {
  useEffect(() => {
    // List of scripts include
    const scripts = [
      "assets/js/jquery.min.js",
      "assets/js/bootstrap/bootstrap.bundle.min.js",
      "assets/js/icons/feather-icon/feather.min.js",
      "assets/js/icons/feather-icon/feather-icon.js",
      "assets/js/scrollbar/simplebar.min.js",
      "assets/js/scrollbar/custom.js",
      "assets/js/config.js",
      "assets/js/sidebar-menu.js",
      "assets/js/sidebar-pin.js",
      "assets/js/clock.js",
      "assets/js/slick/slick.min.js",
      "assets/js/slick/slick.js",
      "assets/js/header-slick.js",
      // "assets/js/chart/apex-chart/apex-chart.js",
      // "assets/js/chart/apex-chart/stock-prices.js",
      "assets/js/counter/counter-custom.js",
      "assets/js/notify/bootstrap-notify.min.js",
      "assets/js/dashboard/default.js",
      "assets/js/notify/index.js",
      // "assets/js/datatable/datatables/jquery.dataTables.min.js",
      // "assets/js/datatable/datatables/dataTables.js",
      // "assets/js/datatable/datatables/dataTables.select.js",
      // "assets/js/datatable/datatables/select.bootstrap5.js",
      // "assets/js/datatable/datatables/datatable.custom.js",
      "assets/js/typeahead/handlebars.js",
      "assets/js/typeahead/typeahead.bundle.js",
      "assets/js/typeahead/typeahead.custom.js",
      "assets/js/typeahead-search/handlebars.js",
      "assets/js/typeahead-search/typeahead-custom.js",
      "assets/js/script.js",
      "assets/js/script1.js",
      // "assets/js/theme-customizer/customizer.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
