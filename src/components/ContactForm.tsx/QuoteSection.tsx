import FreeQuoteForm from "./FreeQuoteForm";

function QuoteSection() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')", // Ensure the correct path
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <section className="overflow-hidden py-16">
          <div className="flex items-center justify-center">
            <FreeQuoteForm />
          </div>
        </section>
      </div>
    </div>
  );
}
