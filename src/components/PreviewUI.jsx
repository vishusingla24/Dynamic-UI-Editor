import React from "react";

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

    // inline style for product card
    const cardStyle = {
        borderRadius: cardRadius,
        border: `${strokeWeight}px solid ${strokeColor}`,
        overflow: "hidden",
        fontFamily,
        fontWeight,
        fontSize: `${fontSize}px`,
        background: sectionBg
    };

    const contentStyle = {
        padding: 20
    };

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

    // alignment helper
    const alignStyle = {
        display: "flex",
        justifyContent:
            buttonAlign === "left"
                ? "flex-start"
                : buttonAlign === "center"
                    ? "center"
                    : "flex-end"
    };

    // gallery styles
    const galleryStyle = {
        gap: `${imageSpacing}px`
    };

    // ✅ Added Live Preview heading at top
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1
                style={{
                    fontFamily,
                    fontWeight: 600,
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    margin: "0 0 1rem 0",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}
            >
                🔴 Live Preview
            </h1>

            {/* existing product preview layout */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                {layoutMode === "desktop" ? (
                    <div className="productCard" style={cardStyle}>
                        <div style={{ padding: 0 }}>
                            <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
                                {/* main hero image is first image */}
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

                                {/* small gallery */}
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

                                {/* CTA */}
                                <div style={{ marginTop: 18, ...alignStyle }}>
                                    <button style={btnStyle}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* compact layout (different composition) */
                    <div
                        className="productCard"
                        style={{
                            ...cardStyle,
                            display: "flex",
                            flexDirection: "row",
                            gap: 12
                        }}
                    >
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
                            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                                Modern Wooden Cabinet
                            </h3>
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
        </div>
    );
}
