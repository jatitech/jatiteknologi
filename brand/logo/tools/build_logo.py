import sys, os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
font_path, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
f = TTFont(font_path); upm = f["head"].unitsPerEm; cmap = f.getBestCmap(); gs = f.getGlyphSet(); hmtx = f["hmtx"]
CAPU = f["OS/2"].sCapHeight
BLUE, TEAK, INK = "#1D5FD6", "#9C5A22", "#0E1A2B"
def wordmark(text, cap, x0, baseline, track_em=-0.02):
    size = cap / CAPU * upm; s = size / upm; x = x0; pen = SVGPathPen(gs); bp = BoundsPen(gs)
    for ch in text:
        g = cmap[ord(ch)]
        t = (s, 0, 0, -s, x, baseline)
        gs[g].draw(TransformPen(pen, t)); gs[g].draw(TransformPen(bp, t))
        x += hmtx[g][0] * s + track_em * size
    return pen.getCommands(), bp.bounds  # (xmin,ymin,xmax,ymax)
# symbol geometry, origin = top-left of symbol bbox (160 x 192)
def symbol(dx, dy, k=1.0, colours=(BLUE, TEAK, BLUE)):
    def P(x, y): return f"{(x-48)*k+dx:.2f} {(y-28)*k+dy:.2f}"
    r1, r2 = 72*k, 24*k
    bar = f'<path fill="{colours[0]}" d="M{P(48,28)}H{(208-48)*k+dx:.2f}V{(68-28)*k+dy:.2f}H{(48-48)*k+dx:.2f}Z"/>'
    ten = f'<path fill="{colours[1]}" d="M{P(126,64)}H{(146-48)*k+dx:.2f}V{(94-28)*k+dy:.2f}H{(126-48)*k+dx:.2f}Z"/>'
    j = (f'<path fill="{colours[2]}" d="M{P(112,90)}H{(160-48)*k+dx:.2f}V{(148-28)*k+dy:.2f}'
         f'A{r1:.2f} {r1:.2f} 0 0 1 {P(88,220)}H{(64-48)*k+dx:.2f}V{(172-28)*k+dy:.2f}H{(88-48)*k+dx:.2f}'
         f'A{r2:.2f} {r2:.2f} 0 0 0 {P(112,148)}Z"/>')
    return ten + bar + j
def svg(w, h, body, title="Jatiteknologi logo"):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}"><title>{title}</title>{body}</svg>\n'
def write(name, s): open(os.path.join(out, name), "w").write(s); print("wrote", name)
# 1. symbol master (256 canvas, optically raised 4)
write("jatiteknologi-symbol.svg", svg(256, 256, symbol(48, 28)))
# 2. small-size symbol
small = (f'<path fill="{TEAK}" d="M136 72H160V108H136Z"/><path fill="{BLUE}" d="M32 24H224V76H32Z"/>'
         f'<path fill="{BLUE}" d="M120 104H176V148A88 88 0 0 1 88 236H40V180H88A32 32 0 0 0 120 148Z"/>')
write("jatiteknologi-symbol-small.svg", svg(256, 256, small))
# 3. horizontal lockup: symbol 160x192, gap 48 (= 1.2 crossbar), cap 112, cap centred on symbol
cap = 112; base = (192 - cap) / 2 + cap
d, b = wordmark("Jatiteknologi", cap, 160 + 48, base)
W = b[2]; H = max(192, b[3])
write("jatiteknologi-horizontal.svg", svg(W, H, symbol(0, 0) + f'<path fill="{INK}" d="{d}"/>'))
# 4. stacked lockup: wordmark cap 64 centred under symbol, gap 40
cap2 = 64; d2, b2 = wordmark("Jatiteknologi", cap2, 0, 0)
ww = b2[2] - b2[0]; K = 1.4; sx = (ww - 160*K) / 2
base2 = 192*K + 48 + cap2
d2, b2 = wordmark("Jatiteknologi", cap2, -b2[0], base2)
write("jatiteknologi-stacked.svg", svg(ww, b2[3], symbol(sx, 0, K) + f'<path fill="{INK}" d="{d2}"/>'))
# 5. wordmark only
d3, b3 = wordmark("Jatiteknologi", 112, 0, 112)
d3, b3 = wordmark("Jatiteknologi", 112, -b3[0], 112 - b3[1] if b3[1] < 0 else 112)
write("jatiteknologi-wordmark.svg", svg(b3[2], b3[3], f'<path fill="{INK}" d="{d3}"/>'))
print("horizontal", round(W), round(H), "stacked", round(ww), round(b2[3]))
