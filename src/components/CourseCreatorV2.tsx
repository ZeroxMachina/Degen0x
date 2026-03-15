'use client';
import { useState, useCallback } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1", green: "#3fb950",
  blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
  red: "#f85149", cyan: "#06b6d4",
};

type BlockType = "heading" | "text" | "quiz" | "xp" | "code" | "callout" | "video";

interface Block {
  id: string;
  type: BlockType;
  content: string;
  meta?: Record<string, string | number | boolean | string[]>;
}

interface CourseLesson {
  id: string;
  title: string;
  xp: number;
  duration: string;
  blocks: Block[];
}

const BLOCK_ICONS: Record<BlockType, string> = {
  heading: "H1", text: "¶", quiz: "?", xp: "⭐", code: "</>", callout: "💡", video: "▶️",
};

const BLOCK_COLORS: Record<BlockType, string> = {
  heading: S.accent, text: S.text2, quiz: S.orange, xp: S.yellow,
  code: S.green, callout: S.cyan, video: S.purple,
};

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

const STARTER_LESSON: CourseLesson = {
  id: "lesson-1",
  title: "What is a Blockchain?",
  xp: 100,
  duration: "8 min",
  blocks: [
    { id: generateId(), type: "heading", content: "What is a Blockchain?", meta: { level: 1 } },
    { id: generateId(), type: "text", content: "A blockchain is a distributed database that maintains a continuously growing list of records, called blocks, that are linked and secured using cryptography." },
    { id: generateId(), type: "callout", content: "Key insight: No single party controls a blockchain. Thousands of computers worldwide maintain an identical copy.", meta: { variant: "info" } },
    { id: generateId(), type: "xp", content: "Complete this section", meta: { xp: 25, action: "read" } },
    { id: generateId(), type: "quiz", content: "What makes a blockchain different from a regular database?", meta: { options: ["One company controls it", "It is maintained by many computers simultaneously", "It stores only financial data", "It requires a password to read"], correct: 1 } },
  ],
};

export default function CourseCreatorV2() {
  const [lesson, setLesson] = useState<CourseLesson>(STARTER_LESSON);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [dragOver, setDragOver] = useState<string | null>(null);

  const addBlock = useCallback((type: BlockType) => {
    const defaults: Record<BlockType, Partial<Block>> = {
      heading: { content: "New Section Heading", meta: { level: 2 } },
      text: { content: "Write your lesson content here..." },
      quiz: { content: "Question text", meta: { options: ["Option A", "Option B", "Option C", "Option D"], correct: 0 } },
      xp: { content: "Complete this action to earn XP", meta: { xp: 25 } },
      code: { content: "// Your code example here\nconst wallet = new Wallet(privateKey);", meta: { language: "javascript" } },
      callout: { content: "Important tip or warning for the learner.", meta: { variant: "info" } },
      video: { content: "https://www.youtube.com/embed/SSo_EIwHSd4", meta: { caption: "Video caption" } },
    };
    const newBlock: Block = { id: generateId(), type, ...defaults[type] as Omit<Block, 'id' | 'type'> };
    setLesson(prev => ({ ...prev, blocks: [...prev.blocks, newBlock] }));
    setSelectedBlock(newBlock.id);
  }, []);

  const updateBlock = useCallback((id: string, updates: Partial<Block>) => {
    setLesson(prev => ({ ...prev, blocks: prev.blocks.map(b => b.id === id ? { ...b, ...updates } : b) }));
  }, []);

  const deleteBlock = useCallback((id: string) => {
    setLesson(prev => ({ ...prev, blocks: prev.blocks.filter(b => b.id !== id) }));
    setSelectedBlock(null);
  }, []);

  const moveBlock = useCallback((id: string, dir: -1 | 1) => {
    setLesson(prev => {
      const blocks = [...prev.blocks];
      const idx = blocks.findIndex(b => b.id === id);
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= blocks.length) return prev;
      [blocks[idx], blocks[newIdx]] = [blocks[newIdx], blocks[idx]];
      return { ...prev, blocks };
    });
  }, []);

  const selectedBlockData = lesson.blocks.find(b => b.id === selectedBlock);

  return (
    <div style={{ display: "grid", gridTemplateColumns: previewMode ? "1fr" : "240px 1fr 280px", gap: 0, height: "100vh", background: S.bg, color: S.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* LEFT PANEL — Block Palette */}
      {!previewMode && (
        <div style={{ background: S.surface, borderRight: `1px solid ${S.border}`, overflow: "auto" }}>
          <div style={{ padding: "16px", borderBottom: `1px solid ${S.border}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.text2, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Add Block</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {(Object.keys(BLOCK_ICONS) as BlockType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => addBlock(type)}
                  style={{
                    background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8,
                    padding: "10px 8px", cursor: "pointer", color: BLOCK_COLORS[type],
                    fontSize: 11, fontWeight: 600, display: "flex", flexDirection: "column",
                    alignItems: "center", gap: 4, transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{BLOCK_ICONS[type]}</span>
                  <span style={{ textTransform: "capitalize" }}>{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Lesson Meta */}
          <div style={{ padding: "16px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.text2, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Lesson Settings</div>
            <label style={{ display: "block", marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>Title</div>
              <input value={lesson.title} onChange={e => setLesson(p => ({ ...p, title: e.target.value }))}
                style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "7px 10px", color: S.text, fontSize: 12 }} />
            </label>
            <label style={{ display: "block", marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>XP Reward</div>
              <input type="number" value={lesson.xp} onChange={e => setLesson(p => ({ ...p, xp: Number(e.target.value) }))}
                style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "7px 10px", color: S.text, fontSize: 12 }} />
            </label>
            <label style={{ display: "block" }}>
              <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>Duration</div>
              <input value={lesson.duration} onChange={e => setLesson(p => ({ ...p, duration: e.target.value }))}
                style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "7px 10px", color: S.text, fontSize: 12 }} />
            </label>
          </div>
        </div>
      )}

      {/* CENTER — Canvas / Preview */}
      <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Toolbar */}
        <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 800, fontSize: 14 }}>📝 Course Creator</span>
            <span style={{ fontSize: 11, padding: "2px 8px", background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40`, borderRadius: 6, fontWeight: 600 }}>v2</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setPreviewMode(p => !p)} style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${previewMode ? S.accent : S.border}`, background: previewMode ? `${S.accent}20` : S.surface2, color: previewMode ? S.accent : S.text2, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
              {previewMode ? "✏️ Edit" : "👁 Preview"}
            </button>
            <button style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${S.green}40`, background: `${S.green}15`, color: S.green, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
              ✅ Publish
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, overflow: "auto", padding: "24px" }}>
          {previewMode ? (
            /* LIVE PREVIEW MODE */
            <div style={{ maxWidth: 720, margin: "0 auto", background: S.surface, borderRadius: 16, border: `1px solid ${S.border}`, overflow: "hidden" }}>
              <div style={{ padding: "24px 32px", borderBottom: `1px solid ${S.border}` }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, padding: "2px 8px", background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40`, borderRadius: 10, fontWeight: 600 }}>Beginner</span>
                  <span style={{ fontSize: 11, padding: "2px 8px", background: `${S.yellow}20`, color: S.yellow, border: `1px solid ${S.yellow}40`, borderRadius: 10, fontWeight: 600 }}>+{lesson.xp} XP</span>
                  <span style={{ fontSize: 11, padding: "2px 8px", background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40`, borderRadius: 10, fontWeight: 600 }}>⏱ {lesson.duration}</span>
                </div>
                <h1 style={{ fontSize: "1.6rem", fontWeight: 900, margin: 0 }}>{lesson.title}</h1>
              </div>
              <div style={{ padding: "24px 32px" }}>
                {lesson.blocks.map((block) => (
                  <PreviewBlock key={block.id} block={block} />
                ))}
              </div>
            </div>
          ) : (
            /* EDIT MODE */
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <div style={{ background: S.surface, borderRadius: 12, border: `1px solid ${S.border}`, padding: "16px 20px", marginBottom: 16 }}>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{lesson.title}</div>
                <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>{lesson.blocks.length} blocks · +{lesson.xp} XP · {lesson.duration}</div>
              </div>

              {lesson.blocks.map((block, idx) => (
                <div
                  key={block.id}
                  onClick={() => setSelectedBlock(block.id)}
                  style={{
                    background: selectedBlock === block.id ? `${S.accent}08` : S.surface,
                    border: `1px solid ${selectedBlock === block.id ? S.accent : S.border}`,
                    borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: BLOCK_COLORS[block.type], background: `${BLOCK_COLORS[block.type]}15`, padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap", marginTop: 1 }}>
                      {BLOCK_ICONS[block.type]} {block.type}
                    </span>
                    <div style={{ flex: 1, fontSize: 13, color: S.text2, lineHeight: 1.5, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                      {block.content}
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      <button onClick={(e) => { e.stopPropagation(); moveBlock(block.id, -1); }} disabled={idx === 0} style={{ padding: "3px 7px", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 5, color: S.text2, cursor: "pointer", fontSize: 11 }}>↑</button>
                      <button onClick={(e) => { e.stopPropagation(); moveBlock(block.id, 1); }} disabled={idx === lesson.blocks.length - 1} style={{ padding: "3px 7px", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 5, color: S.text2, cursor: "pointer", fontSize: 11 }}>↓</button>
                      <button onClick={(e) => { e.stopPropagation(); deleteBlock(block.id); }} style={{ padding: "3px 7px", background: "#f8514920", border: "1px solid #f8514940", borderRadius: 5, color: "#f85149", cursor: "pointer", fontSize: 11 }}>✕</button>
                    </div>
                  </div>
                </div>
              ))}

              {lesson.blocks.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px", color: S.text2, border: `2px dashed ${S.border}`, borderRadius: 12 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>✏️</div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Start building your lesson</div>
                  <div style={{ fontSize: 13 }}>Click a block type on the left to add it</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL — Block Editor */}
      {!previewMode && (
        <div style={{ background: S.surface, borderLeft: `1px solid ${S.border}`, overflow: "auto" }}>
          {selectedBlockData ? (
            <BlockEditor block={selectedBlockData} onChange={(updates) => updateBlock(selectedBlockData.id, updates)} />
          ) : (
            <div style={{ padding: 24, color: S.text2, fontSize: 13, textAlign: "center", marginTop: 40 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>👆</div>
              <div>Click a block to edit its content</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function BlockEditor({ block, onChange }: { block: Block; onChange: (u: Partial<Block>) => void }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: S.text2, textTransform: "uppercase", marginBottom: 16 }}>
        Edit {block.type} Block
      </div>

      <label style={{ display: "block", marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>Content</div>
        <textarea
          value={block.content}
          onChange={e => onChange({ content: e.target.value })}
          rows={6}
          style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "8px 10px", color: S.text, fontSize: 12, resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
        />
      </label>

      {block.type === "quiz" && block.meta && (
        <>
          <div style={{ fontSize: 11, color: S.text2, marginBottom: 8 }}>Answer Options</div>
          {(block.meta.options as string[]).map((opt, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <input type="radio" checked={block.meta?.correct === i} onChange={() => onChange({ meta: { ...block.meta, correct: i } })} style={{ accentColor: S.accent }} />
              <input
                value={opt}
                onChange={e => {
                  const options = [...(block.meta?.options as string[])];
                  options[i] = e.target.value;
                  onChange({ meta: { ...block.meta, options } });
                }}
                style={{ flex: 1, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 5, padding: "5px 8px", color: S.text, fontSize: 12 }}
              />
            </div>
          ))}
        </>
      )}

      {block.type === "xp" && (
        <label style={{ display: "block" }}>
          <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>XP Amount</div>
          <input type="number" value={(block.meta?.xp as number) || 25}
            onChange={e => onChange({ meta: { ...block.meta, xp: Number(e.target.value) } })}
            style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "7px 10px", color: S.text, fontSize: 12 }} />
        </label>
      )}

      {block.type === "callout" && (
        <label style={{ display: "block" }}>
          <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>Variant</div>
          <select value={(block.meta?.variant as string) || "info"}
            onChange={e => onChange({ meta: { ...block.meta, variant: e.target.value } })}
            style={{ width: "100%", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "7px 10px", color: S.text, fontSize: 12 }}>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="tip">Tip</option>
            <option value="danger">Danger</option>
          </select>
        </label>
      )}
    </div>
  );
}

function PreviewBlock({ block }: { block: Block }) {
  const [answered, setAnswered] = useState<number | null>(null);

  if (block.type === "heading") {
    const level = (block.meta?.level as number) || 2;
    return level === 1
      ? <h1 style={{ fontSize: "1.8rem", fontWeight: 900, margin: "0 0 16px", color: S.text }}>{block.content}</h1>
      : <h2 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "24px 0 12px", color: S.text }}>{block.content}</h2>;
  }
  if (block.type === "text") {
    return <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>{block.content}</p>;
  }
  if (block.type === "callout") {
    const colors: Record<string, string> = { info: S.cyan, warning: S.yellow, tip: S.green, danger: S.red };
    const variant = (block.meta?.variant as string) || "info";
    return (
      <div style={{ background: `${colors[variant]}10`, border: `1px solid ${colors[variant]}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 16 }}>
        <p style={{ color: S.text2, margin: 0, fontSize: 13, lineHeight: 1.7 }}>{block.content}</p>
      </div>
    );
  }
  if (block.type === "code") {
    return (
      <pre style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", fontSize: 12, color: S.green, overflowX: "auto", marginBottom: 16 }}>
        <code>{block.content}</code>
      </pre>
    );
  }
  if (block.type === "xp") {
    return (
      <div style={{ background: `${S.yellow}10`, border: `1px solid ${S.yellow}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: S.text2, fontSize: 13 }}>{block.content}</span>
        <span style={{ fontSize: 11, fontWeight: 800, color: S.yellow, background: `${S.yellow}20`, padding: "4px 10px", borderRadius: 6 }}>+{block.meta?.xp || 25} XP</span>
      </div>
    );
  }
  if (block.type === "quiz") {
    const options = (block.meta?.options as string[]) || [];
    const correct = (block.meta?.correct as number) ?? 0;
    return (
      <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}30`, borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
        <div style={{ fontWeight: 700, color: S.text, marginBottom: 12, fontSize: 14 }}>❓ {block.content}</div>
        <div style={{ display: "grid", gap: 8 }}>
          {options.map((opt, i) => (
            <button key={i} onClick={() => setAnswered(i)}
              style={{
                padding: "10px 14px", borderRadius: 8, border: `1px solid ${answered !== null ? (i === correct ? "#3fb950" : i === answered ? "#f85149" : S.border) : S.border}`,
                background: answered !== null ? (i === correct ? "#3fb95020" : i === answered ? "#f8514920" : S.surface2) : S.surface2,
                color: answered !== null ? (i === correct ? S.green : i === answered ? S.red : S.text2) : S.text2,
                cursor: "pointer", textAlign: "left", fontSize: 13,
              }}>
              {opt}
            </button>
          ))}
        </div>
        {answered !== null && (
          <div style={{ marginTop: 10, fontSize: 12, color: answered === correct ? S.green : S.red, fontWeight: 700 }}>
            {answered === correct ? "✅ Correct! +25 XP" : "❌ Try again"}
          </div>
        )}
      </div>
    );
  }
  if (block.type === "video") {
    return (
      <div style={{ marginBottom: 16 }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${S.border}` }}>
          <iframe src={block.content} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} allowFullScreen />
        </div>
        {block.meta?.caption && <p style={{ fontSize: 12, color: S.text2, marginTop: 8, textAlign: "center" }}>{String(block.meta.caption)}</p>}
      </div>
    );
  }
  return null;
}
