import useStore from "../../store"
import { Slider } from "../ui/Slider"

export default function InnerRadiusSlider() {
  const innerRadius = useStore((state) => state.innerRadius)

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-neutral-400">
        Inner Radius
      </label>
      <Slider
        className="w-44 my-5"
        value={[innerRadius]}
        onValueChange={([innerRadius]) => useStore.setState({ innerRadius })}
        max={32}
        step={2}
      />
    </div>
  )
}