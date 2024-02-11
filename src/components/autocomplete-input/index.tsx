/// <reference types="google.maps" />

import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

function Autocomplete({
  onSetLocation,
  ...restProps
}: {
  onSetLocation: (address: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const scriptId = "google-maps-script";
        if (!document.getElementById(scriptId)) {
          const script = document.createElement("script");
          script.id = scriptId;
          script.src = `https://maps.googleapis.com/maps/api/js?key=${
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }&lenguaje=es&libraries=places`;
          script.onload = () => {
            createAutocomplete();
          };
          document.head.appendChild(script);
        } else {
          createAutocomplete();
        }
      } else {
        createAutocomplete();
      }
    };

    const createAutocomplete = () => {
      let autoComplete: google.maps.places.Autocomplete;

      if (ref.current) {
        if (!window.google) return;
        autoComplete = new window.google.maps.places.Autocomplete(ref.current, {
          types: ["address"],
          fields: ["formatted_address"],
        });

        autoComplete.addListener("place_changed", () => {
          const { formatted_address } = autoComplete.getPlace();
          onSetLocation(formatted_address ?? "");
        });
      }
    };

    loadGoogleMapsScript();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.google]);

  return <Input type="text" ref={ref} {...restProps} />;
}

export default Autocomplete;
