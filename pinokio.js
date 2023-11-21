module.exports = {
  title: "Realtime LCM",
  icon: "icon.png",
  description: "Demo showcasing ~real-time Latent Consistency Model pipeline with Diffusers and a MJPEG stream server (https://github.com/radames/Real-Time-Latent-Consistency-Model)",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "venv")
    if (installed) {
      let running = await kernel.running(__dirname, "start.json")
      if (running) {
        return [
          { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" }
        ]
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "txt2img", href: "start.json", params: { fullscreen: true, run: true, pipeline: "txt2img"} },
          { icon: "fa-solid fa-power-off", text: "img2img", href: "start.json", params: { fullscreen: true, run: true, pipeline: "img2img"} },
          { icon: "fa-solid fa-power-off", text: "controlnet", href: "start.json", params: { fullscreen: true, run: true, pipeline: "controlnet"} },
          { icon: "fa-solid fa-power-off", text: "controlnetLora", href: "start.json", params: { fullscreen: true, run: true, pipeline: "controlnetLoraSD15" } },
          { icon: "fa-solid fa-power-off", text: "controlnetLora SDXL", href: "start.json", params: { fullscreen: true, run: true, pipeline: "controlnetLoraSDXL" } },
          { icon: "fa-solid fa-power-off", text: "txt2imgLora", href: "start.json", params: { fullscreen: true, run: true, pipeline: "txt2imgLora" } },
          { icon: "fa-solid fa-power-off", text: "txt2imgLora SDXL", href: "start.json", params: { fullscreen: true, run: true, pipeline: "txt2imgLoraSDXL" } },
        ]
      }
    } else {
      return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json", params: { run: true, fullscreen: true } }]
    }
  }
}
