import React from "react";
import { SketchPicker } from "react-color";

const shadows = {
    none: "none",
    small: "0 2px 6px rgba(0,0,0,0.08)",
    medium: "0 8px 18px rgba(0,0,0,0.12)",
    large: "0 18px 36px rgba(0,0,0,0.18)"
};

export default function EditorPanel({ settings, setSettings, onReset, onExport }) {

    const update = (key, val) => setSettings({ ...settings, [key]: val });

    return (
        <>
            <h2 style={{ margin: 0, fontWeight: "bold", color: "black" }}>🎛 Customize UI</h2>
            <p className="small">Live visual editor — change styles and preview instantly.</p>
            <div className="hr" />

            <div className="controls">
                {/* Typography */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>Typography</div>
                    <select className="input" value={settings.fontFamily} onChange={e => update("fontFamily", e.target.value)}>
                        <option>Poppins</option>
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>system-ui</option>
                    </select>

                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                        <select className="input" style={{ flex: 1 }} value={settings.fontWeight} onChange={e => update("fontWeight", Number(e.target.value))}>
                            <option value={300}>300</option>
                            <option value={400}>400</option>
                            <option value={500}>500</option>
                            <option value={600}>600</option>
                            <option value={700}>700</option>
                        </select>

                        <input className="input" type="number" min={10} max={60} value={settings.fontSize}
                            onChange={e => update("fontSize", Number(e.target.value))} />
                    </div>
                </div>

                <div className="hr" />

                {/* Button */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>Button</div>
                    <div className="small" style={{ fontWeight: "bold", color: "black" }}>Border Radius</div>
                    <input className="range" type="range" min={0} max={50} value={settings.buttonRadius}
                        onChange={e => update("buttonRadius", Number(e.target.value))} />

                    <div className="row" style={{ marginTop: 8, alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <div className="small" style={{ fontWeight: "bold", color: "black" }}>Alignment</div>
                            <select className="input" value={settings.buttonAlign} onChange={e => update("buttonAlign", e.target.value)}>
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div className="small" style={{ fontWeight: "bold", color: "black" }}>Shadow</div>
                            <select className="input" value={settings.buttonShadow} onChange={e => update("buttonShadow", e.target.value)}>
                                <option value="none">None</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                        <div style={{ flex: 1 }}>
                            <div className="small" style={{ fontWeight: "bold", color: "black" }}>Background</div>
                            <SketchPicker color={settings.buttonBg} onChangeComplete={c => update("buttonBg", c.hex)} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="small" style={{ fontWeight: "bold", color: "black" }}>Text</div>
                            <SketchPicker color={settings.buttonText} onChangeComplete={c => update("buttonText", c.hex)} />
                        </div>
                    </div>
                </div>

                <div className="hr" />

                {/* Gallery / Images */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>Galleries / Images</div>
                    <div className="small" style={{ fontWeight: "bold", color: "black" }}>Gallery Alignment</div>
                    <select className="input" value={settings.galleryAlign} onChange={e => update("galleryAlign", e.target.value)}>
                        <option value="grid-left">Left</option>
                        <option value="grid-center">Center</option>
                        <option value="grid-right">Right</option>
                    </select>

                    <div className="small" style={{ marginTop: 8, fontWeight: "bold", color: "black" }}>Spacing between images ({settings.imageSpacing}px)</div>
                    <input type="range" min={0} max={40} value={settings.imageSpacing} onChange={e => update("imageSpacing", Number(e.target.value))} />

                    <div className="small" style={{ marginTop: 8, fontWeight: "bold", color: "black" }}>Image border radius ({settings.imageRadius}px)</div>
                    <input type="range" min={0} max={40} value={settings.imageRadius} onChange={e => update("imageRadius", Number(e.target.value))} />
                </div>

                <div className="hr" />

                {/* General Layout */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>General Layout</div>

                    <div className="small" style={{ fontWeight: "bold", color: "black" }}>Card Corner Radius ({settings.cardRadius}px)</div>
                    <input type="range" min={0} max={40} value={settings.cardRadius} onChange={e => update("cardRadius", Number(e.target.value))} />

                    <div className="small" style={{ marginTop: 8, fontWeight: "bold", color: "black" }}>Container Padding ({settings.containerPadding}px)</div>
                    <input type="range" min={0} max={60} value={settings.containerPadding} onChange={e => update("containerPadding", Number(e.target.value))} />

                    <div style={{ marginTop: 8 }}>
                        <div className="small" style={{ fontWeight: "bold", color: "black" }}>Section background</div>
                        <SketchPicker color={settings.sectionBg} onChangeComplete={c => update("sectionBg", c.hex)} />
                    </div>
                </div>

                <div className="hr" />

                {/* Stroke / Border */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>Stroke / Border</div>

                    <div className="small" style={{ fontWeight: "bold", color: "black" }}>Stroke Color</div>
                    <SketchPicker color={settings.strokeColor} onChangeComplete={c => update("strokeColor", c.hex)} />

                    <div className="small" style={{ marginTop: 8, fontWeight: "bold", color: "black" }}>Stroke Weight ({settings.strokeWeight}px)</div>
                    <input type="range" min={0} max={6} value={settings.strokeWeight} onChange={e => update("strokeWeight", Number(e.target.value))} />
                </div>

                <div className="hr" />

                {/* Layout switching & misc */}
                <div>
                    <div className="label" style={{ fontWeight: "bold", color: "black" }}>Layout Switching</div>
                    <select className="input" value={settings.layoutMode} onChange={e => update("layoutMode", e.target.value)}>
                        <option value="desktop">Desktop layout</option>
                        <option value="compact">Compact layout</option>
                    </select>
                </div>

                <div className="hr" />

                {/* Export / Reset */}
                <div className="footerButtons">
                    <button className="btn" onClick={onExport}>Export JSON</button>
                    <button className="btn" onClick={onReset}>Reset to Default</button>
                </div>
            </div>
        </>
    );
}
