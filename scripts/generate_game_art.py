import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math

OUTPUT_DIR = "public/images/games"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def draw_vignette(draw, width, height, color=(10, 15, 30), intensity=0.7):
    # Draw soft edge vignette
    vignette = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    v_draw = ImageDraw.Draw(vignette)
    for i in range(12):
        alpha = int(255 * intensity * ((i + 1) / 12) ** 2)
        v_draw.rectangle([i*10, i*10, width - i*10, height - i*10], outline=(*color, alpha), width=10)
    return vignette

# 1. Hole Rush 3D
def create_hole_rush_3d():
    w, h = 1280, 720
    img = Image.new("RGB", (w, h), (14, 20, 45))
    draw = ImageDraw.Draw(img)
    
    # Perspective Grid Floor
    cx, cy = w // 2, int(h * 0.65)
    floor_color = (25, 40, 80)
    for r in range(150, 700, 35):
        draw.ellipse([cx - r * 1.6, cy - r * 0.7, cx + r * 1.6, cy + r * 0.7], outline=floor_color, width=2)
    for angle in range(0, 360, 20):
        rad = math.radians(angle)
        ex = cx + int(math.cos(rad) * 900)
        ey = cy + int(math.sin(rad) * 450)
        draw.line([(cx, cy), (ex, ey)], fill=(30, 50, 95), width=2)

    # Gravitational Hole at Center
    for i in range(35, 0, -1):
        radius_x = int(i * 9)
        radius_y = int(i * 4.2)
        fill_val = max(5, int(14 * (i / 35)))
        glow_val = min(255, int(220 * (1 - i / 35)))
        color = (max(5, fill_val), max(10, int(glow_val * 0.6)), max(25, glow_val))
        draw.ellipse([cx - radius_x, cy - radius_y, cx + radius_x, cy + radius_y], fill=color)

    # Center deep black void
    draw.ellipse([cx - 140, cy - 65, cx + 140, cy + 65], fill=(2, 4, 10))
    
    # Outer neon accretion ring
    draw.ellipse([cx - 210, cy - 98, cx + 210, cy + 98], outline=(56, 189, 248), width=5)
    draw.ellipse([cx - 215, cy - 101, cx + 215, cy + 101], outline=(14, 165, 233), width=2)

    # Falling 3D geometric cubes/spheres
    cubes = [
        (cx - 320, cy - 180, 50, (236, 72, 153)),   # Magenta cube
        (cx + 280, cy - 160, 60, (250, 204, 21)),   # Gold cube
        (cx - 160, cy - 120, 35, (52, 211, 153)),   # Emerald sphere
        (cx + 180, cy - 80, 42, (168, 85, 247)),    # Purple cube
        (cx - 60, cy - 140, 25, (56, 189, 248)),    # Cyan sphere
        (cx + 80, cy - 150, 30, (244, 63, 94)),     # Rose cube
        (cx - 240, cy + 120, 45, (96, 165, 250)),   # Blue cube
        (cx + 260, cy + 90, 48, (251, 146, 60)),    # Orange cube
    ]
    for x, y, size, col in cubes:
        # Cube face 1
        draw.polygon([(x, y - size), (x + size, y - size//2), (x, y), (x - size, y - size//2)], fill=col)
        # Cube face 2 (darker)
        col_dark1 = tuple(int(c * 0.75) for c in col)
        draw.polygon([(x - size, y - size//2), (x, y), (x, y + size), (x - size, y + size//2)], fill=col_dark1)
        # Cube face 3 (darkest)
        col_dark2 = tuple(int(c * 0.5) for c in col)
        draw.polygon([(x, y), (x + size, y - size//2), (x + size, y + size//2), (x, y + size)], fill=col_dark2)
        # Motion trail toward center
        draw.line([(x, y), (cx, cy)], fill=(col[0], col[1], col[2]), width=1)

    img = img.filter(ImageFilter.SMOOTH)
    img.save(os.path.join(OUTPUT_DIR, "hole-rush-3d.webp"), "WEBP", quality=90)
    print("Created hole-rush-3d.webp")

# 2. Arrow Puzzle
def create_arrow_puzzle():
    w, h = 1280, 720
    img = Image.new("RGB", (w, h), (10, 16, 35))
    draw = ImageDraw.Draw(img)

    # Cyber maze grid
    step = 60
    for x in range(0, w, step):
        draw.line([(x, 0), (x, h)], fill=(18, 28, 55), width=1)
    for y in range(0, h, step):
        draw.line([(0, y), (w, y)], fill=(18, 28, 55), width=1)

    # Maze path lines with neon glow
    path_points = [
        [(180, 180), (420, 180), (420, 360), (660, 360), (660, 240), (960, 240)],
        [(300, 540), (300, 420), (540, 420), (540, 540), (840, 540), (840, 360), (1080, 360)],
        [(180, 300), (300, 300), (300, 120), (780, 120), (780, 300), (1020, 300)],
    ]
    colors = [(245, 158, 11), (139, 92, 246), (14, 165, 233)]
    for path, col in zip(path_points, colors):
        for i in range(len(path) - 1):
            p1, p2 = path[i], path[i+1]
            draw.line([p1, p2], fill=col, width=8)
            # Glowing halos
            draw.line([p1, p2], fill=(col[0], col[1], col[2]), width=3)

    # Stylized glowing arrows along nodes
    def draw_arrow(cx, cy, direction, col):
        r = 28
        # Circle badge
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(15, 23, 42), outline=col, width=3)
        # Arrowhead
        d = direction
        if d == "RIGHT":
            pts = [(cx - 10, cy - 12), (cx + 10, cy), (cx - 10, cy + 12)]
        elif d == "DOWN":
            pts = [(cx - 12, cy - 10), (cx, cy + 10), (cx + 12, cy - 10)]
        elif d == "UP":
            pts = [(cx - 12, cy + 10), (cx, cy - 10), (cx + 12, cy + 10)]
        else: # LEFT
            pts = [(cx + 10, cy - 12), (cx - 10, cy), (cx + 10, cy + 12)]
        draw.polygon(pts, fill=col)

    arrow_nodes = [
        (180, 180, "RIGHT", (245, 158, 11)),
        (420, 180, "DOWN", (245, 158, 11)),
        (420, 360, "RIGHT", (245, 158, 11)),
        (660, 360, "UP", (245, 158, 11)),
        (660, 240, "RIGHT", (245, 158, 11)),
        (960, 240, "RIGHT", (245, 158, 11)),
        (300, 540, "UP", (139, 92, 246)),
        (300, 420, "RIGHT", (139, 92, 246)),
        (540, 420, "DOWN", (139, 92, 246)),
        (840, 540, "UP", (139, 92, 246)),
        (840, 360, "RIGHT", (139, 92, 246)),
        (780, 120, "DOWN", (14, 165, 233)),
    ]
    for x, y, direct, col in arrow_nodes:
        draw_arrow(x, y, direct, col)

    img.save(os.path.join(OUTPUT_DIR, "arrow-puzzle.webp"), "WEBP", quality=90)
    print("Created arrow-puzzle.webp")

# 3. Hexa Puzzle
def create_hexa_puzzle():
    w, h = 1280, 720
    img = Image.new("RGB", (w, h), (12, 24, 48))
    draw = ImageDraw.Draw(img)

    # Isometric Hexagon Grid Cluster
    def draw_hex(cx, cy, r, fill_top, fill_left, fill_right, height_offset=24):
        # Hexagon top points
        top_pts = []
        for i in range(6):
            angle_deg = 60 * i - 30
            rad = math.radians(angle_deg)
            top_pts.append((cx + r * math.cos(rad), (cy - height_offset) + (r * 0.58) * math.sin(rad)))
        draw.polygon(top_pts, fill=fill_top, outline=(255, 255, 255))
        
        # Bottom extruded faces
        p0, p1, p2, p3, p4, p5 = top_pts
        # Left face
        draw.polygon([p2, p3, (p3[0], p3[1] + height_offset), (p2[0], p2[1] + height_offset)], fill=fill_left)
        # Right face
        draw.polygon([p3, p4, (p4[0], p4[1] + height_offset), (p3[0], p3[1] + height_offset)], fill=fill_right)

    # Palette
    color_sets = [
        ((16, 185, 129), (5, 150, 105), (4, 120, 87)),   # Emerald
        ((59, 130, 246), (37, 99, 235), (29, 78, 216)),   # Blue
        ((245, 158, 11), (217, 119, 6), (180, 83, 9)),    # Amber
        ((236, 72, 153), (219, 39, 119), (190, 24, 93)),  # Pink
        ((139, 92, 246), (124, 58, 237), (109, 40, 217)), # Purple
    ]

    r = 65
    dx = r * math.sqrt(3)
    dy = r * 1.5 * 0.58
    origin_x, origin_y = w // 2, h // 2 + 30

    cluster_coords = [
        (0, 0, 0), (1, 0, 0), (-1, 0, 0), (0, 1, 1), (0, -1, 1),
        (1, 1, 2), (-1, -1, 2), (1, -1, 3), (-1, 1, 3),
        (2, 0, 4), (-2, 0, 4), (0, 2, 4), (0, -2, 4)
    ]

    for q, r_idx, c_idx in cluster_coords:
        hx = origin_x + q * (dx * 0.75) + r_idx * 0.5 * (dx * 0.75)
        hy = origin_y + r_idx * (dy * 1.5)
        top, left, right = color_sets[c_idx % len(color_sets)]
        draw_hex(hx, hy, r, top, left, right, height_offset=26)

    # Ambient merge ripples
    for i in range(1, 4):
        draw.ellipse([origin_x - 300*i, origin_y - 160*i, origin_x + 300*i, origin_y + 160*i], 
                     outline=(56, 189, 248), width=2)

    img.save(os.path.join(OUTPUT_DIR, "hexa-puzzle.webp"), "WEBP", quality=90)
    print("Created hexa-puzzle.webp")

# 4. Block Puzzle
def create_block_puzzle():
    w, h = 1280, 720
    img = Image.new("RGB", (w, h), (14, 18, 38))
    draw = ImageDraw.Draw(img)

    # 8x8 Board Matrix in Center
    cell = 64
    board_w = cell * 8
    board_h = cell * 8
    bx = (w - board_w) // 2
    by = (h - board_h) // 2

    # Draw grid background
    draw.rectangle([bx - 12, by - 12, bx + board_w + 12, by + board_h + 12], fill=(20, 28, 55), outline=(45, 60, 105), width=3)
    for i in range(9):
        draw.line([(bx + i * cell, by), (bx + i * cell, by + board_h)], fill=(32, 44, 80), width=2)
        draw.line([(bx, by + i * cell), (bx + board_w, by + i * cell)], fill=(32, 44, 80), width=2)

    # Draw vibrant glowing tetromino pieces
    def draw_block(col_idx, row_idx, color):
        px = bx + col_idx * cell + 4
        py = by + row_idx * cell + 4
        s = cell - 8
        draw.rectangle([px, py, px + s, py + s], fill=color, outline=(255, 255, 255), width=2)
        # Inner gloss
        draw.rectangle([px + 4, py + 4, px + s - 4, py + 12], fill=(255, 255, 255))

    board_state = [
        (1, 1, (239, 68, 68)), (2, 1, (239, 68, 68)), (3, 1, (239, 68, 68)), (3, 2, (239, 68, 68)),
        (5, 2, (59, 130, 246)), (6, 2, (59, 130, 246)), (5, 3, (59, 130, 246)), (6, 3, (59, 130, 246)),
        (1, 4, (234, 179, 8)), (1, 5, (234, 179, 8)), (2, 5, (234, 179, 8)), (3, 5, (234, 179, 8)),
        (4, 5, (168, 85, 247)), (5, 5, (168, 85, 247)), (6, 5, (168, 85, 247)), (5, 6, (168, 85, 247)),
        (1, 7, (34, 197, 94)), (2, 7, (34, 197, 94)), (3, 7, (34, 197, 94)), (4, 7, (34, 197, 94)),
        (5, 7, (34, 197, 94)), (6, 7, (34, 197, 94)), (7, 7, (34, 197, 94))
    ]
    for cx, ry, c in board_state:
        draw_block(cx, ry, c)

    # Laser particle line clear effect on row 7
    draw.line([(bx - 40, by + 7 * cell + cell // 2), (bx + board_w + 40, by + 7 * cell + cell // 2)], fill=(255, 255, 255), width=6)
    draw.line([(bx - 80, by + 7 * cell + cell // 2), (bx + board_w + 80, by + 7 * cell + cell // 2)], fill=(56, 189, 248), width=3)

    img.save(os.path.join(OUTPUT_DIR, "block-puzzle.webp"), "WEBP", quality=90)
    print("Created block-puzzle.webp")

# 5. Shadow Descent (Limbo-inspired)
def create_limbo_inspired():
    w, h = 1280, 720
    img = Image.new("RGB", (w, h), (8, 12, 20))
    draw = ImageDraw.Draw(img)

    # Atmospheric misty gradient
    for y in range(h):
        ratio = y / h
        gray = int(12 + 45 * (1 - ratio))
        draw.line([(0, y), (w, y)], fill=(gray, gray + 4, gray + 12))

    # Giant atmospheric white moon / rim light
    draw.ellipse([w // 2 - 180, 90, w // 2 + 180, 450], fill=(230, 240, 255))
    draw.ellipse([w // 2 - 200, 70, w // 2 + 200, 470], outline=(150, 180, 220), width=4)

    # Dark jagged forest silhouette background
    def draw_ground(base_y, points, fill):
        polygon = [(0, h)] + points + [(w, h)]
        draw.polygon(polygon, fill=fill)

    # Midground terrain
    mg_pts = [
        (0, 480), (180, 430), (320, 470), (520, 410), (740, 460), (960, 420), (1140, 470), (1280, 440)
    ]
    draw_ground(450, mg_pts, (15, 22, 32))

    # Foreground dark silhouette terrain
    fg_pts = [
        (0, 560), (120, 530), (280, 560), (450, 510), (600, 550), (780, 520), (950, 560), (1100, 530), (1280, 570)
    ]
    draw_ground(520, fg_pts, (2, 4, 8))

    # Solitary wanderer figure with glowing white eyes
    char_x, char_y = 450, 490
    draw.rectangle([char_x - 12, char_y - 45, char_x + 12, char_y], fill=(0, 0, 0)) # body
    draw.ellipse([char_x - 15, char_y - 75, char_x + 15, char_y - 45], fill=(0, 0, 0)) # head
    # Glowing white eyes
    draw.ellipse([char_x + 2, char_y - 65, char_x + 8, char_y - 59], fill=(255, 255, 255))

    # Ancient ruined arches / trees silhouette
    trees = [(160, 530, 70), (340, 560, 90), (700, 530, 100), (920, 540, 80), (1180, 540, 110)]
    for tx, ty, th in trees:
        draw.line([(tx, ty), (tx, ty - th * 2.5)], fill=(2, 4, 8), width=10)
        draw.line([(tx, ty - th * 1.5), (tx - 35, ty - th * 2)], fill=(2, 4, 8), width=5)
        draw.line([(tx, ty - th * 1.8), (tx + 40, ty - th * 2.3)], fill=(2, 4, 8), width=5)

    img = img.filter(ImageFilter.SMOOTH_MORE)
    img.save(os.path.join(OUTPUT_DIR, "limbo-inspired.webp"), "WEBP", quality=90)
    print("Created limbo-inspired.webp")

if __name__ == "__main__":
    create_hole_rush_3d()
    create_arrow_puzzle()
    create_hexa_puzzle()
    create_block_puzzle()
    create_limbo_inspired()
    print("All 5 game images generated successfully!")
