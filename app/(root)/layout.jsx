import NavigationBar from "@/components/shared/Navbar";


export default function RootLayout({ children }) {
  return (
    <>
    <NavigationBar />
      <main>{children}</main>
    </>
  )
}
