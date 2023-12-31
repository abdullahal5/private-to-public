import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import Container from './Components/Container/Container';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AuthProvider from './Components/Provider/AuthProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <Container>
          <RouterProvider router={router} />
        </Container>
    </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
