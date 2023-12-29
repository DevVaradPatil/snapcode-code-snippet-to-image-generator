import { useEffect, useRef } from "react";
import useStore from "./store";
import { fonts, themes } from "./options";
import { Resizable } from "re-resizable";
import { cn } from "./lib/utils";
import CodeEditor from "./components/CodeEditor";
import { Card, CardContent } from "./components/ui/Card.jsx";
import ThemeSelect from "./components/controls/ThemeSelect";
import LanguageSelect from "./components/controls/LanguageSelect";
import FontSelect from "./components/controls/FontSelect";
import { FontSizeIcon } from "@radix-ui/react-icons";
import FontSizeInput from "./components/controls/FontSizeInput";
import PaddingSlider from "./components/controls/PaddingSlider";
import BackgroundSwitch from "./components/controls/BackgroundSwitch";
import DarkModeSwitch from "./components/controls/DarkModeSwitch";
import ExportOptions from "./components/controls/ExportOptions";
import WaterMarkSwitch from "./components/controls/WaterMarkSwitch";
import InnerRadiusSlider from "./components/controls/InnerRadiusSlider";
import OuterRadiusSlider from "./components/controls/OuterRadiusSlider";
import AlertDialogDemo from "./components/ui/Alert";

function App() {
  const theme = useStore((state) => state.theme);
  const padding = useStore((state) => state.padding);
  const fontStyle = useStore((state) => state.fontStyle);
  const showBackground = useStore((state) => state.showBackground);
  const outerRadius = useStore((state) => state.outerRadius);

  const editorRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : "",
      autoDetectLanguage: state.autoDetectLanguage === "true",
      darkMode: state.darkMode === "true",
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
      outerRadius: Number(state.outerRadius || 0),
    });
  }, []);

  return (
    <main className="dark min-h-screen flex justify-center items-start pt-16 bg-neutral-900 text-white">
      <AlertDialogDemo/>
      <link
        rel="stylesheet"
        href={themes[theme].theme}
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />

      <Resizable
        enable={{ left: true, right: true }}
        minWidth={padding * 2 + 400}
      >
        <div
          className={cn(
            "overflow-hidden mb-2 transition-all ease-out ",
            showBackground ? themes[theme].background : "ring ring-neutral-800"
          )}
          style={{ padding, borderRadius: outerRadius + 'px' }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
      </Resizable>

      <Card className="fixed bottom-10 py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur">
        <CardContent className={`flex gap-6 p-0`}>
          <div className="flex items-center gap-6 flex-wrap max-w-[850px]">
          <ThemeSelect />
          <LanguageSelect />
          <FontSelect />
          <FontSizeInput />
          <PaddingSlider />
          <InnerRadiusSlider />
          <OuterRadiusSlider />
          <BackgroundSwitch />
          <DarkModeSwitch />
          <WaterMarkSwitch />
          </div>
          <div className="w-px bg-neutral-800" />
          <div className="place-self-center">
            <ExportOptions targetRef={editorRef} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
