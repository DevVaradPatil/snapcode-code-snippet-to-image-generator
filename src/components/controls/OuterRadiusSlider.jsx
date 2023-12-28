import useStore from "@/store"
import { Slider } from "../ui/Slider"

export default function OuterRadiusSlider() {
  const outerRadius = useStore((state) => state.outerRadius)

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-neutral-400">
        Outer Radius
      </label>
      <Slider
        className="w-44 my-5"
        value={[outerRadius]}
        onValueChange={([outerRadius]) => useStore.setState({ outerRadius })}
        max={32}
        step={2}
      />
    </div>
  )
}