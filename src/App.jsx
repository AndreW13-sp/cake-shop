import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import AdminAuth from "./authentication/AdminProtected";
import UserProtected from "./authentication/UserProtected";

import PublicLayout from "./layouts/PublicLayout";
import useAuth from "./store/auth";
import AboutPage from "./views/About";
import BlogPage from "./views/Blog";
import ContactPage from "./views/Contact";
import HomePage from "./views/Home";
import ProductPage from "./views/Product";
import ProductDetail from "./views/ProductDetail";
import CreateProduct from "./views/admin/CreateProduct";
import EditProduct from "./views/admin/EditProduct";
import Admin from "./views/admin/admin";
import Login from "./views/admin/login";
import AdminSignup from "./views/admin/signup";

function App() {
   const { getSession } = useAuth();

   useEffect(() => {
      getSession();
   }, [getSession]);

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <Routes>
            <Route
               path="/"
               element={
                  <PublicLayout>
                     <HomePage />
                  </PublicLayout>
               }
            />

            <Route
               path="/about"
               element={
                  <PublicLayout>
                     <AboutPage />
                  </PublicLayout>
               }
            />

            <Route
               path="/shop"
               element={
                  <PublicLayout>
                     <ProductPage />
                  </PublicLayout>
               }
            />

            <Route
               path="/blogs"
               element={
                  <PublicLayout>
                     <BlogPage />
                  </PublicLayout>
               }
            />

            <Route
               path="/contact"
               element={
                  <UserProtected>
                     <PublicLayout>
                        <ContactPage />
                     </PublicLayout>
                  </UserProtected>
               }
            />

            <Route
               path="/product/:productId"
               element={
                  <UserProtected>
                     <PublicLayout>
                        <ProductDetail />
                     </PublicLayout>
                  </UserProtected>
               }
            />

            <Route
               path="/blog/:blogId"
               element={
                  <UserProtected>
                     <PublicLayout>
                        <BlogPage />
                     </PublicLayout>
                  </UserProtected>
               }
            />

            <Route
               path="/admin"
               element={
                  <AdminAuth>
                     <Admin />
                  </AdminAuth>
               }
            />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route
               path="/admin/create-product"
               element={
                  <AdminAuth>
                     <CreateProduct />
                  </AdminAuth>
               }
            />
            <Route
               path="/admin/edit-product/:productId"
               element={
                  <AdminAuth>
                     <EditProduct />
                  </AdminAuth>
               }
            />
         </Routes>
      </>
   );
}

export default App;
