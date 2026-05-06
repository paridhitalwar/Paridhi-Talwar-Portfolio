import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2 } from "lucide-react";

const GRID = 20;
const CELL = 20;
const WIDTH = GRID * CELL;
const HEIGHT = GRID * CELL;
const INITIAL_SPEED = 200;
const MIN_SPEED = 80;
const SPEED_STEP = 5; // ms faster per food eaten

type Point = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const EasterEggGame = () => {
  const [showGame, setShowGame] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const konamiIndex = useRef(0);
  const hintTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showGame) return;
      if (e.key === KONAMI[konamiIndex.current]) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI.length) {
          setShowGame(true);
          konamiIndex.current = 0;
        }
      } else {
        konamiIndex.current = 0;
      }
    };
    window.addEventListener("keydown", handleKey);

    // Show hint after 30s on page
    hintTimeout.current = setTimeout(() => setShowHint(true), 30000);

    return () => {
      window.removeEventListener("keydown", handleKey);
      if (hintTimeout.current) clearTimeout(hintTimeout.current);
    };
  }, [showGame]);

  return (
    <>
      {/* Subtle hint */}
      <AnimatePresence>
        {showHint && !showGame && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-6 z-[9000] flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-muted-foreground cursor-none"
            onClick={() => { setShowGame(true); setShowHint(false); }}
          >
            <Gamepad2 className="w-3.5 h-3.5 text-primary" />
            <span>🎮 Click to play Snake! (or type ↑↑↓↓←→←→BA)</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGame && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/90 backdrop-blur-md"
          >
            <div className="relative">
              <button
                onClick={() => setShowGame(false)}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors cursor-none"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center mb-4">
                <h3 className="font-display text-2xl font-bold text-gradient">🐍 Snake Game</h3>
                <p className="text-muted-foreground text-xs mt-1">Use arrow keys to play. You found the easter egg!</p>
              </div>
              <SnakeGame />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try { return parseInt(localStorage.getItem("snake-hs") || "0"); } catch { return 0; }
  });
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const snake = useRef<Point[]>([{ x: 10, y: 10 }]);
  const direction = useRef<Direction>("RIGHT");
  const nextDirection = useRef<Direction>("RIGHT");
  const food = useRef<Point>(spawnFood([{ x: 10, y: 10 }]));
  const gameLoop = useRef<ReturnType<typeof setInterval>>();
  const speed = useRef(INITIAL_SPEED);

  function spawnFood(snakeBody: Point[]): Point {
    let pos: Point;
    do {
      pos = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snakeBody.some((s) => s.x === pos.x && s.y === pos.y));
    return pos;
  }

  const resetGame = useCallback(() => {
    snake.current = [{ x: 10, y: 10 }];
    direction.current = "RIGHT";
    nextDirection.current = "RIGHT";
    food.current = spawnFood(snake.current);
    speed.current = INITIAL_SPEED;
    setScore(0);
    setGameOver(false);
    setStarted(true);
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = "hsl(240, 15%, 6%)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Grid
    ctx.strokeStyle = "hsl(240, 10%, 10%)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, HEIGHT);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL); ctx.lineTo(WIDTH, i * CELL);
      ctx.stroke();
    }

    // Food with glow
    const fx = food.current.x * CELL + CELL / 2;
    const fy = food.current.y * CELL + CELL / 2;
    const glow = ctx.createRadialGradient(fx, fy, 2, fx, fy, CELL);
    glow.addColorStop(0, "hsla(340, 82%, 62%, 0.6)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(fx - CELL, fy - CELL, CELL * 2, CELL * 2);
    ctx.fillStyle = "hsl(340, 82%, 62%)";
    ctx.beginPath();
    ctx.arc(fx, fy, CELL / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    snake.current.forEach((segment, i) => {
      const progress = 1 - i / snake.current.length;
      const hue = 280 + progress * 60; // purple to pink
      ctx.fillStyle = `hsl(${hue}, 80%, ${50 + progress * 15}%)`;
      ctx.beginPath();
      ctx.roundRect(
        segment.x * CELL + 1,
        segment.y * CELL + 1,
        CELL - 2,
        CELL - 2,
        4
      );
      ctx.fill();

      // Head glow
      if (i === 0) {
        const hx = segment.x * CELL + CELL / 2;
        const hy = segment.y * CELL + CELL / 2;
        const headGlow = ctx.createRadialGradient(hx, hy, 4, hx, hy, CELL * 1.5);
        headGlow.addColorStop(0, "hsla(340, 82%, 62%, 0.3)");
        headGlow.addColorStop(1, "transparent");
        ctx.fillStyle = headGlow;
        ctx.fillRect(hx - CELL * 1.5, hy - CELL * 1.5, CELL * 3, CELL * 3);
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleKey = (e: KeyboardEvent) => {
      const map: Record<string, Direction> = {
        ArrowUp: "UP", ArrowDown: "DOWN", ArrowLeft: "LEFT", ArrowRight: "RIGHT",
      };
      const nd = map[e.key];
      if (!nd) return;
      e.preventDefault();

      if (!started && !gameOver) { setStarted(true); }
      if (gameOver) { resetGame(); return; }

      const opposites: Record<Direction, Direction> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
      if (nd !== opposites[direction.current]) {
        nextDirection.current = nd;
      }
    };
    window.addEventListener("keydown", handleKey);

    draw(ctx);

    return () => window.removeEventListener("keydown", handleKey);
  }, [draw, gameOver, started, resetGame]);

  useEffect(() => {
    if (!started || gameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = () => {
      direction.current = nextDirection.current;
      const head = { ...snake.current[0] };
      if (direction.current === "UP") head.y--;
      if (direction.current === "DOWN") head.y++;
      if (direction.current === "LEFT") head.x--;
      if (direction.current === "RIGHT") head.x++;

      // Wall collision
      if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
        setGameOver(true);
        clearInterval(gameLoop.current);
        return;
      }
      // Self collision
      if (snake.current.some((s) => s.x === head.x && s.y === head.y)) {
        setGameOver(true);
        clearInterval(gameLoop.current);
        return;
      }

      snake.current.unshift(head);

      if (head.x === food.current.x && head.y === food.current.y) {
        const newScore = score + 10;
        setScore(newScore);
        if (newScore > highScore) {
          setHighScore(newScore);
          try { localStorage.setItem("snake-hs", String(newScore)); } catch {}
        }
        food.current = spawnFood(snake.current);
        // Speed up
        speed.current = Math.max(MIN_SPEED, speed.current - SPEED_STEP);
        // Restart interval with new speed
        if (gameLoop.current) clearInterval(gameLoop.current);
        gameLoop.current = setInterval(tick, speed.current);
      } else {
        snake.current.pop();
      }

      draw(ctx);
    };

    gameLoop.current = setInterval(tick, speed.current);

    return () => { if (gameLoop.current) clearInterval(gameLoop.current); };
  }, [started, gameOver, score, highScore, draw]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex justify-between w-full px-1">
        <span className="text-sm text-muted-foreground font-body">Score: <span className="text-primary font-bold">{score}</span></span>
        <span className="text-sm text-muted-foreground font-body">Best: <span className="text-accent font-bold">{highScore}</span></span>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
        {!started && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <p className="text-foreground font-display font-bold text-lg animate-pulse">Press any arrow key to start</p>
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm gap-2">
            <p className="text-primary font-display font-bold text-2xl">Game Over!</p>
            <p className="text-muted-foreground text-sm">Score: {score}</p>
            <p className="text-muted-foreground text-xs animate-pulse mt-2">Press any arrow key to restart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EasterEggGame;
