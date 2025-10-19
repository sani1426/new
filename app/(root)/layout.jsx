import Navbar from "@/components/shared/Navbar";


export default function RootLayout({ children }) {
  return (
    <>
    <Navbar />
      <main>{children}</main>
    </>
  )
}
