// src/app/page.tsx
export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 fixed w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Onepager</div>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-blue-600 text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Willkommen bei unserer Website</h1>
          <p className="mt-4 text-lg md:text-2xl">Wir bieten die besten Lösungen für Ihr Unternehmen.</p>
          <a href="#services" className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded-full text-lg">
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Unsere Dienstleistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">Beratung</h3>
              <p className="mt-2">Wir bieten Ihnen professionelle Beratung, um Ihre Ziele zu erreichen.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">Entwicklung</h3>
              <p className="mt-2">Unsere Entwicklungsdienste sind auf Ihre Bedürfnisse zugeschnitten.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">Support</h3>
              <p className="mt-2">Wir sind immer für Sie da, um Sie zu unterstützen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Über uns</h2>
          <p className="text-lg">Wir sind ein Team von Experten mit langjähriger Erfahrung in der Branche.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-4">Projekt 1</div>
            <div className="bg-white rounded shadow-md p-4">Projekt 2</div>
            <div className="bg-white rounded shadow-md p-4">Projekt 3</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded mb-4"
            />
            <textarea
              placeholder="Nachricht"
              className="w-full p-3 border rounded mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Senden
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          © 2025 Onepager - Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
