import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QRcode from "qrcode";
import Image from "next/image";
import download from "../public/img/download icon.svg";

export function Makerbox() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [loading, setLoad] = useState(false);

  const getQr = async () => {
    if (!url) {
      toast.error("Enter some text!", {
        style: {
          background: "#fbfbfb",
          color: "##00C5F0",
        },
        iconTheme: {
          primary: "#00C5F0",
          secondary: "#fbfbfb",
        },
      });
      return;
    }

    try {
      setLoad(true);
      const response = await QRcode.toDataURL(url);
      setQr(response);
      setUrl("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          id="inputbox"
          placeholder="https://example.com"
          className="bg-transparent border-2 border-primary rounded-md text-black p-2"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <button
          className="bg-primary rounded-md p-1 mt-2 md:text-lg"
          onClick={getQr}
          disabled={loading}
        >
          Generate
        </button>
      </div>

      <div className="flex gap-2 relative justify-center items-center mt-6">
        <div className="bg-transparent border-2 border-primary w-52 h-52 rounded-md">
          {qr ? (
            <img
              src={qr}
              width={208}
              height={208}
              alt="qrcode"
              className="rounded-md"
            />
          ) : (
            ""
          )}
        </div>

        {qr ? (
          <a
            href={qr}
            download="QRcode"
            className="bg-primary bottom-0 right-0 rounded-md p-1 absolute"
          >
            <Image
              src={download}
              className=" w-6"
              draggable="false"
              alt="download"
            />
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
