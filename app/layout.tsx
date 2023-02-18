import Header from '@/app/components/header';
import SideBar from '@/app/components/side-bar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <div className="grid grid-cols-12 gap-4 max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <aside className="col-span-3">
            <SideBar />
          </aside>
          <main className="col-span-9 grid grid-cols-1 gap-4">{children}</main>
        </div>
      </body>
    </html>
  );
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('./mocks');
}
