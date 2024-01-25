import type { AppProps } from "next/app";

import "@/styles/custom-plugins.css";
import "@/styles/drawer-lib.css";
import "@/styles/tailwind.css";
import "@/styles/global.css";
import "@/styles/scrollbar.css";
import "@/styles/swiper-carousel.css";
import "@/styles/ImgSlick.scss";
import { Provider } from "react-redux";
import { setupStore } from "@/Store/store";
import "@/layouts/MainLayout.scss";
import MainLayout from "@/layouts/MainLayout";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "@/components/common/modal/modal.context";
import ManagedModal from "@/components/common/modal/managed-modal";
import { CartProvider } from "@/contexts/cart/cart.context";
import { UIProvider } from "@/contexts/ui.context";
import ManagedDrawer from "@/components/common/drawer/managed-drawer";
// import { SessionProvider } from "next-auth/react";
// import { useEffect } from "react";
// import { useRefreshTokenMutation } from "@/Store/auth/auth.api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	let store = setupStore();
	let persistor = persistStore(store);
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<CartProvider>
						<UIProvider>
							<ModalProvider>
								{/* <SessionProvider session={session}> */}
								<MainLayout>
									<Component {...pageProps} />
									<ToastContainer />
									<ManagedModal />
									<ManagedDrawer />
								</MainLayout>
							</ModalProvider>
						</UIProvider>
					</CartProvider>
					{/* </SessionProvider> */}
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
