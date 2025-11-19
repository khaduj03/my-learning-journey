
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content">
      <div className="container mx-auto px-6 py-6 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Khaduj React Journey — Study, Practice,
          Build
        </p>
      </div>
    </footer>
  );
}
