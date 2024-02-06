// TradingViewWidget.jsx

function createWidget() {
  if (document.getElementById("tradingview_49a0e") && "TradingView" in window) {
    new (window as any).TradingView.widget({
      autosize: true,
      symbol: "MEXC:TAOUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_49a0e",
    });
  }
}

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_49a0e" style={{ height: "500px" }} />
    </div>
  );
}
