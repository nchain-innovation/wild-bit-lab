const ENV_CONFIG = {
    ORCHESTRATOR_API_URL: 'http://localhost:9777/',
    WOC_URL: 'http://localhost:8080/',

  };
  if (typeof window !== 'undefined') {
    window.__ENV_CONFIG__ = ENV_CONFIG;
  }