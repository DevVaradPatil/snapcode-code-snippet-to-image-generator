import {create} from "zustand"
import {persist} from "zustand/middleware"
const useStore = create(
    persist(
      () => ({
        code: "",
        title: "Untitled",
        theme: "hyper",
        darkMode: true,
        showBackground: true,
        language: "plaintext",
        autoDetectLanguage: false,
        fontSize: 18,
        fontStyle: "jetBrainsMono",
        padding: 64,
        showWaterMark: true,
        outerRadius: 6,
        innerRadius: 12,
        sideBarMode: false,
      }),
      {
        name: "user-preferences",
      }
    )
  )

  export default useStore