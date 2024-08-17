import ProtectedRoute from "../components/protectedroute.js";
import Generate from "../components/generate.js";
import Navbar from '../components/Navbar';

export default function Generate() {
  return (
    <ProtectedRoute>
    <>
    <Navbar />
    <Generate />
    </>
    </ProtectedRoute>
  )
}