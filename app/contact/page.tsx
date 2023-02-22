export default function ContactPage() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Contact
      </h2>
      <section className="rounded-lg border border-gray-100 bg-white p-6 lg:col-span-3">
        <form
          action={process.env.FORMSPREE_URI}
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows={8}
              id="message"
              name="message"
              required
            />
          </div>

          <div className="mt-4 sm:space-x-4 space-y-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span className="font-medium"> Send </span>
            </button>
            <input
              type="reset"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto cursor-pointer"
              value="Reset"
            />
          </div>
        </form>
      </section>
    </>
  );
}
