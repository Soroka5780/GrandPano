const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        Developed by Tomáš Soroka © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
