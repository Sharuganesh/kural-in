export default function ContactFab() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-8 md:bottom-8">
      <a
        href="https://wa.me/919345852826"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-lg text-white shadow-xl shadow-[#25d36633] transition hover:bg-[#1ebe5c] md:h-11 md:w-11"
        aria-label="WhatsApp"
      >
        <span className="inline-flex items-center justify-center text-xl">💬</span>
      </a>
      <a
        href="tel:+919345852826"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0078ff] text-lg text-white shadow-xl shadow-[#0078ff33] transition hover:bg-[#0a6fff] md:h-11 md:w-11"
        aria-label="Call"
      >
        <span className="inline-flex items-center justify-center text-xl">📞</span>
      </a>
    </div>
  );
}
