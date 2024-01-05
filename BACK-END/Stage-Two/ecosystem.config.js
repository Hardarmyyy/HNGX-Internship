module.exports = {
  apps: [
    {
      name: "STAGE-TWO",
      script: "index.js",
      instances: 2, // can lauch many instance in production to enable load balancing
      max_memory_restart: "300M",
    },
  ],
}
