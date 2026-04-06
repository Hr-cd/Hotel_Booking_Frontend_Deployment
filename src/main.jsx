import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthProvider } from './context/UserContext.jsx'
import { CartProvider } from "./context/Cart.jsx";
import { SearchProvider } from "./context/Search.jsx";
import { BookingProvider } from './context/Booking.jsx'

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookingProvider>
        <Elements stripe={stripePromise}>
          <CartProvider>
            <SearchProvider>
              <BrowserRouter>
                <App />
                <ToastContainer/>
              </BrowserRouter>
            </SearchProvider>
          </CartProvider>
        </Elements>
      </BookingProvider>
    </AuthProvider>
  </StrictMode>
)