import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';


// import withAuthenticationAdmin from './service/withAuthenticationAdmin'; 

// Lazy load halaman-halaman
import Footer from "./components/Footer"; 
const Index = lazy(() => import('./pages'));
const User = lazy(() => import('./pages/User/Index'));
const DetailLy = lazy(() => import('./pages/User/DetailLy'));
const Booking = lazy(() => import('./pages/User/Booking'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));

// Komponen utama
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/User" element={<User />} />
          <Route path="/User/DetailLy" element={<DetailLy />} />
          <Route path="/User/Booking" element={<Booking />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />

      </Suspense>
    </Router>
  );
};

// Admin Layout
// const AdminLayout = withAuthenticationAdmin(() => {
//   const [isOpen, setIsOpen] = useState(true); 
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth >= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex min-h-screen transition-all">
//       <NavTes isOpen={isOpen} toggleNav={() => setIsOpen(!isOpen)} />

//      <div
//         className={`transition-all duration-300 flex-1 ${
//           isOpen ? "ml-64" : "ml-0 mx-auto"
//         } md:ml-64 max-w-4xl w-full`}
//       >

//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/WorkStaff" element={<WorkStaff />} />
//             <Route path="/ListUser" element={<ListUser />} />
//             <Route path="/TambahUser" element={<TambahUser />} />
//             <Route path="/Tiket" element={<Tiket />} />
//             <Route path="/TiketPegawai" element={<TiketPegawai />} />
//             <Route path="/TiketPublic" element={<TiketPublic />} />
//             <Route path="/StaffList" element={<StaffList />} />
//             <Route path="/StaffDetail/:id" element={<StaffDetail />} />
//             <Route path="/DataAb" element={<DataAb />} />
//             <Route path="/DataSI" element={<DataSI />} />
//             <Route path="/DetailSI" element={<DetailSI />} />
//             <Route path="/DetailAbPg" element={<DetailAbPg />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </div>
//   );
// });


export default App;
