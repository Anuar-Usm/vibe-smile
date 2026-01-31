import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Добавляем эту строку
  images: {
    unoptimized: true,   // И эту, чтобы картинки не ломались
  },
};

export default nextConfig;