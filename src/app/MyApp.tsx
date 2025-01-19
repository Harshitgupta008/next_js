"use client"

import { store } from "@/Redux/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface MyProviderProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const MyApp = ({ children }: MyProviderProps) => {

    return <>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    </>
}
export default MyApp;