import NewSideBar from "./NewSideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="frc justify-between
  "
    >
      <NewSideBar />
      <div className="w-full h-screen">{children}</div>
    </main>
  );
}
