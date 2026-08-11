'use client'

import { useEffect, useRef } from 'react'

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable WebGL on mobile screens
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) return

    const vsSource = `
      attribute vec2 position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = (position + 1.0) / 2.0;
        v_texCoord.y = 1.0 - v_texCoord.y;
        gl_Position = vec4(position, 0, 1);
      }
    `

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_darkModeTransition;

      void main() {
        vec2 uv = v_texCoord;
        float noise = sin(uv.x * 3.0 + u_time * 0.5) * 0.5 + 0.5;
        noise += sin(uv.y * 4.0 - u_time * 0.3) * 0.5 + 0.5;
        float mouseDist = distance(uv, u_mouse / u_resolution);
        float glow = smoothstep(0.3, 0.0, mouseDist);

        vec3 color1_light = vec3(0.98, 0.97, 1.0);
        vec3 color2_light = vec3(0.93, 0.92, 0.99);
        vec3 accent_light = vec3(0.87, 0.86, 0.96);

        vec3 color1_dark = vec3(0.02, 0.02, 0.03);
        vec3 color2_dark = vec3(0.08, 0.08, 0.1);
        vec3 accent_dark = vec3(0.15, 0.15, 0.18);

        vec3 color1 = mix(color1_light, color1_dark, u_darkModeTransition);
        vec3 color2 = mix(color2_light, color2_dark, u_darkModeTransition);
        vec3 accent = mix(accent_light, accent_dark, u_darkModeTransition);

        vec3 finalColor = mix(color1, color2, noise * 0.5);
        finalColor = mix(finalColor, accent, glow * 0.4);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()!
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vsSource))
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fsSource))
    gl.linkProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const positionLocation = gl.getAttribLocation(program, 'position')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse')
    const darkModeTransitionLocation = gl.getUniformLocation(program, 'u_darkModeTransition')

    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    let currentDarkMode = document.documentElement.classList.contains('dark') ? 1.0 : 0.0

    let animId: number
    const render = (time: number) => {
      const w = window.innerWidth
      const h = window.innerHeight
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }

      const targetDarkMode = document.documentElement.classList.contains('dark') ? 1.0 : 0.0
      currentDarkMode += (targetDarkMode - currentDarkMode) * 0.06 // smooth linear interpolation (LERP)

      gl.useProgram(program)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
      gl.uniform1f(timeLocation, time * 0.001)
      gl.uniform2f(resolutionLocation, w, h)
      gl.uniform2f(mouseLocation, mouseX, h - mouseY)
      gl.uniform1f(darkModeTransitionLocation, currentDarkMode)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animId = requestAnimationFrame(render)
    }
    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="webgl-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
