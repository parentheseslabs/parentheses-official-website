import {create} from 'zustand'

interface DrawerState{
    open:boolean,
    toggleDrawer : ()=>void
    resetDrawer : ()=>void
}

export const useDrawer = create<DrawerState>()((set)=>({
    open:false,
    resetDrawer:()=>set({open:false}),
    toggleDrawer:()=>set((state)=>({open:!state.open}))
}))
