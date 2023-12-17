module.exports = {
  title: "Realtime StableDiffusion",
  icon: "icon.png",
  description: "Demo showcasing ~real-time Latent Consistency Model pipeline with Diffusers and a MJPEG stream server (https://github.com/radames/Real-Time-Latent-Consistency-Model)",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "venv")
    let running = await kernel.running(__dirname, "start.json")
    let installing = await kernel.running(__dirname, "install.json")
    if (installing) {
      return [{ icon: "fa-solid fa-plug", text: "Installing", href: "install.json", params: { fullscreen: true } }]
    } else if (installed) {
      if (running) {
        let session = await kernel.require(__dirname, "session.json")
        if (session && session.url) {
          return [
            { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
            { icon: "fa-solid fa-rocket", text: "Web UI", href: session.url, target: "_blank" },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json", params: { fullscreen: true } }
          ]
        } else {
          return [
            { icon: "fa-solid fa-spin fa-circle-notch", text: "Running" },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json", params: { fullscreen: true } }
          ]
        }
      } else {
        return [
          { icon: "fa-solid fa-power-off", text: "sd-turbo-controlnet", href: "start.json", params: { fullscreen: true, run: true, pipeline: "controlnelSD21Turbo" } },
          { icon: "fa-solid fa-power-off", text: "sdxl-turbo-controlnet", href: "start.json", params: { fullscreen: true, run: true, pipeline: "controlnetSDXLTurbo" } },
          { icon: "fa-solid fa-power-off", text: "sdxl-turbo-img2img", href: "start.json", params: { fullscreen: true, run: true, pipeline: "img2imgSDXLTurbo" } },
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
