import { create } from "zustand";

export const useAuthStore = create((set) => ({
	account: null,
	accountId: "",
	availableStorage: null,
	logOut: async () => undefined,
	refreshAllowance: async () => undefined,
	requestSignInWithWallet: () => undefined,
	requestSignMessage: () => undefined,
	signedIn: false,
	set: (state) => set((previousState) => ({ ...previousState, ...state })),
	vmNear: null,
}));
