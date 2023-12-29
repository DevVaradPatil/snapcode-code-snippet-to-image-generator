import React, { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib/utils"

const AlertDialogDemo = () => {
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setisOpen(true);
      console.log(isOpen);
    }
  }, []);
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setisOpen}>
      <AlertDialog.Trigger asChild>
        <button className="text-violet11 hidden hover:bg-mauve3 shadow-blackA4  h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
          Delete account
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className={
          cn("data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#171717] text-white p-[25px] ")
        }>
          <AlertDialog.Title className="text-[17px] m-0 font-medium">
            For better user experience open this website on a device with larger screen
          </AlertDialog.Title>
          <div className="flex justify-end gap-[25px] mt-3">
            <AlertDialog.Cancel asChild>
              <button className="text-black bg-neutral-100 hover:opacity-70 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Ok, Understood
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default AlertDialogDemo;
