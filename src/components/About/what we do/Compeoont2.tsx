export function Component2() {
  return (
    <section
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Image/About/What we do/image-2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay for readability */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
        <h3 className="text-4xl sm:text-5xl font-semibold mb-4">
          Innovative Solutions
        </h3>
        <p className="text-lg sm:text-xl mb-6 max-w-4xl mx-auto">
          We have provided corporates, retails, homes, banks, and hospitality
          institutions with our innovative and modern indoor advertising
          solutions.
        </p>
      </div>
    </section>
  );
}
