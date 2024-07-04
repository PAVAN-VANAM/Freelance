import App from "@/components/Dashboard/App";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <main className="flex">
        <App />
        {children}
      </main>
    </html>
  );
}
