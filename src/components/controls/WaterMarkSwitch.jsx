import useStore from "@/store"
import { Switch } from "../ui/switch"

export default function WaterMarkSwitch() {
  const showWm = useStore((state) => state.showWaterMark)

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-neutral-400">
        WaterMark
      </label>
      <Switch
        checked={showWm}
        onCheckedChange={(checked) =>
          useStore.setState({ showWaterMark: checked })
        }
        className="my-1.5"
      />
    </div>
  )
}