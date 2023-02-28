import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import QRcode from "qrcode";
import Image from "next/image";
import download from "../public/img/download icon.svg";

export function Makerbox() {
  const [url, setUrl] = useState("");
  const [color, setcolor] = useState("#000000");
  const [type, setType] = useState("image/jpeg");
  const [qr, setQr] = useState("");
  const [loading, setLoad] = useState(false);

  const getQr = async () => {
    if (!url) {
      toast.error("Digite algo!", {
        style: {
          background: "#00C5F0",
          color: "#fbfbfb",
        },
        iconTheme: {
          primary: "#fbfbfb",
          secondary: "#00C5F0",
        },
      });
      return;
    }

    var opts = {
      type: type,
      width: 400,
      color: {
        dark: color,
      },
    };

    try {
      setLoad(true);
      const response = await QRcode.toDataURL(url, opts);
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
      <Toaster position="top-center" />

      <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-6">
        <div className="flex flex-col justify-center items-center mt-3 gap-4 md:gap-5">
          <h1 className="font-bold text-5xl text-black uppercase ">
            <span className="text-primary">qr</span>
            maker
          </h1>

          <div className="relative">
            <input
              type="text"
              id="inputbox"
              placeholder="https://exemplo.com"
              className="bg-transparent border-2 border-primary rounded-md text-black p-2"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <span className="bg-[#fbfbfb] text-black text-xs font-semibold p-[2px] absolute -top-3 left-3 uppercase">
              url
            </span>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="relative">
              <input
                type="color"
                id="inputboxcolor"
                className="bg-transparent border-2 border-primary rounded-md text-black p-2"
                value={color}
                onChange={({ target }) => setcolor(target.value)}
              />
              <span className="bg-[#fbfbfb] text-black text-xs font-semibold p-[2px] absolute -top-3 left-3 uppercase">
                cor
              </span>
            </div>
            <div className="relative">
              <select
                id="inputbox2"
                className="bg-transparent border-2 border-primary rounded-md text-black p-2"
                value={type}
                onChange={({ target }) => setType(target.value)}
              >
                <option value="image/jpeg" selected>
                  JPEG
                </option>
                <option value="image/png">PNG</option>
                <option value="image/webp">WEBP</option>
              </select>

              <span className="bg-[#fbfbfb] text-black text-xs font-semibold p-[2px] absolute -top-3 left-3 uppercase">
                formato
              </span>
            </div>
          </div>

          <button
            className="bg-primary rounded-md p-1 md:text-lg uppercase"
            id="btnQr"
            onClick={getQr}
            disabled={loading}
          >
            gerar qrcode{" "}
          </button>
        </div>

        <div className="flex gap-2 relative justify-center items-center">
          <div className="bg-transparent border-2 border-primary w-[300px] h-[300px] rounded-md">
            {qr ? (
              <img
                src={qr}
                width={300}
                height={300}
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
      </section>
    </>
  );
}
