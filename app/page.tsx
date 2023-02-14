export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('./mocks');
}
