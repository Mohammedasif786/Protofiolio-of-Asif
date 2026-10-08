function Contact() {
  return (
    <div className="flex flex-col items-center justify-center border-2 w-4/4 content-center max-h-3/4 p-4 text-center">
      <h1 className="text-2xl font-bold mb-8">-:Contact Me:-</h1>
      <div className="flex gap-4 items-center mb-12 lg:w-[50%] border-2 rounded-2xl">
        <form className="flex flex-col gap-4 p-4 w-1/2">
          <label htmlFor="name">
            <input
              type="email"
              placeholder="Email@xyz.com"
              className="border-2 p-2 rounded w-62 lg:w-140"
            />
          </label>
          <textarea
            placeholder="Message for Work..."
            className="border-2 h-42 w-62 lg:w-140 rounded p-2"
          ></textarea>
          <div className="w-62 lg:w-140">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 lg:w-64">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
