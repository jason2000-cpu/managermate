import { createAppSlice } from "@/lib/createAppSlice";

const initialState = {
    value: [],
    status: "idle"
}

const loadState = () => {
        if (typeof window !== undefined) {
            try {
                const serializedUser = localStorage.getItem("activeUser");
                if (serializedUser === null) {
                    return initialState
                }
                return JSON.parse(serializedUser)
            } catch(err){
                return initialState
            }
        }
}

export const userSlice = createAppSlice({
    name: "user",
    initialState: loadState(),
    reducers: (create) => ({
        loginDispatch: create.reducer((state, action) => {
            state.value = action.payload;
            console.log("LOGIN DISPATCH:::", action.payload)
            localStorage.setItem("activeUser", JSON.stringify(action.payload))
        }),
        logoutDispatch: create.reducer((state) =>{
            state.value = [];
            localStorage.removeItem("activeUser")
        })
    }),
    selectors: {
        selectUser: (user) => user.value,
        selectStatus: (user) => user.status
    }
})

export const { loginDispatch, logoutDispatch } = userSlice.actions;
export const { selectUser, selectStatus } = userSlice.selectors;
export default userSlice.reducer;