"""Gera PNGs placeholder (cor sólida/gradiente) sem dependências externas.
Usado apenas para popular /public/images enquanto as fotos reais não chegam
(ver seção 9 do docs/prompt-novo-projeto.md — fotos serão substituídas antes
do lançamento)."""

import struct
import zlib
from pathlib import Path


def _chunk(tag: bytes, data: bytes) -> bytes:
    return (
        struct.pack(">I", len(data))
        + tag
        + data
        + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    )


def write_png(path: Path, width: int, height: int, color_a, color_b):
    """Gera um PNG RGB com gradiente diagonal simples entre color_a e color_b."""
    raw = bytearray()
    for y in range(height):
        raw.append(0)  # sem filtro
        for x in range(width):
            t = ((x / max(width - 1, 1)) + (y / max(height - 1, 1))) / 2
            r = int(color_a[0] + (color_b[0] - color_a[0]) * t)
            g = int(color_a[1] + (color_b[1] - color_a[1]) * t)
            b = int(color_a[2] + (color_b[2] - color_a[2]) * t)
            raw += bytes((r, g, b))

    png = b"\x89PNG\r\n\x1a\n"
    png += _chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0))
    png += _chunk(b"IDAT", zlib.compress(bytes(raw), 9))
    png += _chunk(b"IEND", b"")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(png)


FOREST = (4, 36, 26)
FOREST_LIGHT = (5, 77, 55)
GOLD = (211, 171, 132)
CREAM = (244, 237, 226)

images = [
    ("public/images/dra-leticia.png", 1200, 1500, FOREST, FOREST_LIGHT),
    ("public/images/resultado-preenchimento-labial.png", 900, 900, GOLD, CREAM),
    ("public/images/resultado-harmonizacao-perfil.png", 900, 900, FOREST_LIGHT, GOLD),
    ("public/images/resultado-lipo-papada-antes.png", 900, 900, CREAM, GOLD),
    ("public/images/resultado-lipo-papada-depois.png", 900, 900, GOLD, FOREST_LIGHT),
    ("public/images/resultado-nariz-labios.png", 900, 900, FOREST, GOLD),
    ("public/images/resultado-contorno-mandibular.png", 900, 900, GOLD, FOREST),
    ("public/images/resultado-botox-testa.png", 900, 900, CREAM, FOREST_LIGHT),
    ("public/og-image.png", 1200, 630, FOREST, GOLD),
]

for rel_path, w, h, ca, cb in images:
    write_png(Path(rel_path), w, h, ca, cb)
    print(f"wrote {rel_path} ({w}x{h})")
