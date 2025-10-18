import React, { useState, useRef } from "react";
import { Maximize2, Minimize2, ZoomIn, ZoomOut, Move, Ruler } from "lucide-react";

const shadowMap = {
    none: "none",
    small: "0 2px 6px rgba(0,0,0,0.08)",
    medium: "0 8px 18px rgba(0,0,0,0.12)",
    large: "0 18px 36px rgba(0,0,0,0.18)"
};

export default function PreviewUI({ settings }) {
    const {
        fontFamily, fontWeight, fontSize,
        buttonBg, buttonText, buttonRadius, buttonShadow, buttonAlign,
        galleryAlign, imageSpacing, imageRadius,
        cardRadius, containerPadding, sectionBg,
        strokeColor, strokeWeight, layoutMode, images
    } = settings;

    const [zoom, setZoom] = useState(1);
    const [fullscreen, setFullscreen] = useState(false);
    const [showRuler, setShowRuler] = useState(false);
    const cardRef = useRef(null);

    const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.6));
    const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.6));

    const handleReset = () => {
        setZoom(1);
        setFullscreen(false);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { });
        }
    };

    const handleFullscreen = async () => {
        try {
            if (!fullscreen) {
                await cardRef.current?.requestFullscreen();
                setFullscreen(true);
            } else if (document.fullscreenElement) {
                await document.exitFullscreen();
                setFullscreen(false);
            }
        } catch (err) {
            console.warn("Fullscreen toggle failed:", err);
        }
    };

    const handleRulerToggle = () => setShowRuler((prev) => !prev);

    // styles
    const cardStyle = {
        borderRadius: cardRadius,
        border: `${strokeWeight}px solid ${strokeColor}`,
        overflow: "hidden",
        fontFamily,
        fontWeight,
        fontSize: `${fontSize}px`,
        background: sectionBg,
        position: "relative",
        transform: `scale(${zoom})`,
        transition: "transform 0.25s ease",
        transformOrigin: "center center"
    };

    const contentStyle = { padding: 20 };

    const btnStyle = {
        background: buttonBg,
        color: buttonText,
        borderRadius: `${buttonRadius}px`,
        padding: "10px 18px",
        boxShadow: shadowMap[buttonShadow],
        border: "none",
        display: "inline-block",
        cursor: "pointer",
        fontWeight: 600
    };

    const alignStyle = {
        display: "flex",
        justifyContent:
            buttonAlign === "left"
                ? "flex-start"
                : buttonAlign === "center"
                    ? "center"
                    : "flex-end"
    };

    const galleryStyle = { gap: `${imageSpacing}px` };

    // ✅ floating control panel (moved outside card)
    const controlPanelStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "absolute",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 999
    };

    const controlBtnStyle = {
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.2s ease",
    };

    const rulerStyle = {
        position: "absolute",
        inset: 0,
        border: "1px dashed rgba(0,0,0,0.25)",
        pointerEvents: "none",
        display: showRuler ? "block" : "none"
    };

    return (
        <div style={{ width: "100%", textAlign: "center", position: "relative" }}>
            <h1
                style={{
                    fontFamily,
                    fontWeight: 600,
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}
            >
                🔴 Live Preview
            </h1>

            {/* wrapper for preview and controls */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                {/* Product Card */}
                <div className="productCard" style={cardStyle} ref={cardRef}>
                    <div style={rulerStyle}></div>

                    {layoutMode === "desktop" ? (
                        <div style={{ padding: 0 }}>
                            <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
                                <img
                                    src="/furniture.jpg"
                                    alt="furniture"
                                    style={{
                                        width: "100%",
                                        height: 320,
                                        objectFit: "cover",
                                        borderRadius: `${imageRadius}px`,
                                    }}
                                />
                            </div>
                            <div className="cardContent" style={contentStyle}>
                                <h2 style={{ margin: 0, fontSize: "1.4rem" }}>Modern Wooden Cabinet</h2>
                                <p style={{ color: "#6b7280", marginTop: 8 }}>
                                    Elegant furniture piece crafted with teak wood and modern minimal lines.
                                </p>

                                <div style={{ marginTop: 16 }}>
                                    <div className={`gallery ${galleryAlign}`} style={galleryStyle}>
                                        {images.map((src, idx) => (
                                            <img
                                                key={idx}
                                                src={src}
                                                alt={`g${idx}`}
                                                style={{
                                                    width: 96,
                                                    height: 64,
                                                    borderRadius: imageRadius,
                                                    border: `${strokeWeight}px solid ${strokeColor}`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div style={{ marginTop: 18, ...alignStyle }}>
                                    <button style={btnStyle}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                            <div style={{ flex: "0 0 40%" }}>
                                <img
                                    src={images[0]}
                                    alt="thumb"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: `${imageRadius}px`
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1, padding: 16 }}>
                                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Modern Wooden Cabinet</h3>
                                <p style={{ color: "#6b7280", marginTop: 8 }}>
                                    Minimal cabinet for living room or hallway.
                                </p>
                                <div style={{ marginTop: 12, ...alignStyle }}>
                                    <button style={btnStyle}>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ✅ Controls now visible and not clipped */}
                <div style={controlPanelStyle}>
                    <div style={controlBtnStyle} onClick={handleReset} title="Reset View">
                        <Move size={16} />
                    </div>
                    <div style={controlBtnStyle} onClick={handleRulerToggle} title="Toggle Ruler">
                        <Ruler size={16} />
                    </div>
                    <div style={controlBtnStyle} onClick={handleFullscreen} title="Toggle Fullscreen">
                        {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    </div>
                    <div style={controlBtnStyle} onClick={handleZoomIn} title="Zoom In">
                        <ZoomIn size={16} />
                    </div>
                    <div style={controlBtnStyle} onClick={handleZoomOut} title="Zoom Out">
                        <ZoomOut size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
}

