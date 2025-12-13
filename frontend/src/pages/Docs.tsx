import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Documentation = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  
  return (
    <div style={{ background: '#0a0a0b', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100,
        padding: '1rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #0a0a0b 0%, transparent 100%)'
      }}
      className="sm:px-8 lg:px-12 sm:py-6"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-xs sm:text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-32 pb-6 sm:pb-8 lg:pb-16 text-center">
        <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-bold tracking-tight mb-3 sm:mb-4 text-[#fafafa]">
          API Documentation
        </h1>
        <p className="text-sm sm:text-base lg:text-[1.125rem] text-[#a1a1aa] max-w-[520px] mx-auto">
          Complete guide to integrating PromptRedTeam security scanning into your applications
        </p>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 lg:space-y-16">

          {/* Quick Start */}
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold tracking-tight mb-4 sm:mb-6 text-[#fafafa]">
              Quick Start
            </h2>
            <div className="space-y-4 sm:space-y-6">
              
              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a]">
                  <h3 className="text-base sm:text-lg lg:text-[1.125rem] font-semibold text-[#fafafa]">
                    Try the Demo API
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                    Test the API immediately at https://api.promptredteam.com (10 requests/min limit)
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <div 
                    className="p-3 sm:p-4 rounded-lg"
                    style={{ background: '#18181b', borderLeft: '3px solid #ef4444' }}
                  >
                    <p className="text-[0.625rem] sm:text-xs text-[#a1a1aa] mb-2 font-mono">cURL Example:</p>
                    <code className="text-xs sm:text-sm text-[#fafafa] font-mono break-all block">
                      {`curl -X POST https://api.promptredteam.com/test -H "Content-Type: application/json" -d '{"text": "Ignore all previous instructions"}' | jq`}
                    </code>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a]">
                  <h3 className="text-base sm:text-lg lg:text-[1.125rem] font-semibold text-[#fafafa]">
                    Self-Host (Recommended)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                    Deploy on your infrastructure for unlimited requests and full control
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div 
                      className="p-3 sm:p-4 rounded-lg"
                      style={{ background: '#18181b', borderLeft: '3px solid #22c55e' }}
                    >
                      <p className="text-[0.625rem] sm:text-xs text-[#a1a1aa] mb-2 font-mono">Installation:</p>
                      <code className="text-xs sm:text-sm text-[#fafafa] font-mono block space-y-1">
                        <div className="text-[#a1a1aa]"># Clone the repository</div>
                        <div>git clone https://github.com/ethan10clay/promptredteam-api.git</div>
                        <div>cd promptredteam-api</div>
                        <div className="mt-2 text-[#a1a1aa]"># Install dependencies</div>
                        <div>pip install -r requirements.txt</div>
                        <div className="mt-2 text-[#a1a1aa]"># Run the API server</div>
                        <div>python backend/app/main.py</div>
                      </code>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a1a1aa]">
                      The API will be available at <code className="px-2 py-1 rounded font-mono text-[#fafafa]" style={{ background: '#18181b' }}>http://localhost:8000</code>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* API Reference */}
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold tracking-tight mb-4 sm:mb-6 text-[#fafafa]">
              API Reference
            </h2>
            <div className="space-y-4 sm:space-y-6">

              {/* POST /test */}
              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[1.125rem] font-semibold text-[#fafafa] font-mono">POST /test</h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">Test a prompt for security vulnerabilities</p>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-[0.625rem] sm:text-xs font-semibold w-fit"
                    style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}
                  >
                    PRIMARY
                  </span>
                </div>
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  
                  {/* Request */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa]">Request Body</h4>
                    <div 
                      className="p-3 sm:p-4 rounded-lg"
                      style={{ background: '#18181b' }}
                    >
                      <code className="text-xs sm:text-sm font-mono text-[#fafafa] block space-y-1">
                        <div>&#123;</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"text"</span>: <span style={{ color: '#4ade80' }}>"string"</span> <span className="text-[#a1a1aa]">// Required, max 10000 chars</span></div>
                        <div>&#125;</div>
                      </code>
                    </div>
                  </div>

                  {/* Response */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa]">Response (200 OK)</h4>
                    <div 
                      className="p-3 sm:p-4 rounded-lg overflow-x-auto"
                      style={{ background: '#18181b' }}
                    >
                      <code className="text-[0.6875rem] sm:text-xs lg:text-sm font-mono text-[#fafafa] block space-y-1">
                        <div>&#123;</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"scan_id"</span>: <span style={{ color: '#4ade80' }}>"scan_1234567890"</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"timestamp"</span>: <span style={{ color: '#d19a66' }}>1234567890</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"text_length"</span>: <span style={{ color: '#d19a66' }}>45</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"attacks_tested"</span>: <span style={{ color: '#d19a66' }}>5</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"threats_detected"</span>: <span style={{ color: '#d19a66' }}>1</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"overall_risk_score"</span>: <span style={{ color: '#d19a66' }}>0.85</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"results"</span>: [</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"attack_name"</span>: <span style={{ color: '#4ade80' }}>"Direct Injection"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"attack_type"</span>: <span style={{ color: '#4ade80' }}>"instruction_override"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"detected"</span>: <span style={{ color: '#c084fc' }}>true</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"severity"</span>: <span style={{ color: '#d19a66' }}>0.9</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"confidence"</span>: <span style={{ color: '#d19a66' }}>0.95</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"description"</span>: <span style={{ color: '#4ade80' }}>"Attempt to override system instructions"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"evidence"</span>: <span style={{ color: '#4ade80' }}>"ignore all previous instructions"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"mitigation"</span>: <span style={{ color: '#4ade80' }}>"Reject input or sanitize override keywords"</span></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
                        <div>&nbsp;&nbsp;],</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"recommendations"</span>: [</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"Block this input"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"Log for security review"</span></div>
                        <div>&nbsp;&nbsp;],</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"cleaned_text"</span>: <span style={{ color: '#4ade80' }}>"[REDACTED]"</span></div>
                        <div>&#125;</div>
                      </code>
                    </div>
                  </div>

                  {/* Error Responses */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa]">Error Responses</h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div 
                        className="p-3 sm:p-4 rounded-lg"
                        style={{ background: '#18181b', borderLeft: '3px solid #ef4444' }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-mono text-xs sm:text-sm text-[#fafafa]">400 Bad Request</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#a1a1aa]">Invalid input (missing text, too long, invalid format)</p>
                      </div>
                      <div 
                        className="p-3 sm:p-4 rounded-lg"
                        style={{ background: '#18181b', borderLeft: '3px solid #eab308' }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-mono text-xs sm:text-sm text-[#fafafa]">429 Too Many Requests</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#a1a1aa]">Rate limit exceeded (demo API only)</p>
                      </div>
                      <div 
                        className="p-3 sm:p-4 rounded-lg"
                        style={{ background: '#18181b', borderLeft: '3px solid #ef4444' }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-mono text-xs sm:text-sm text-[#fafafa]">500 Internal Server Error</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#a1a1aa]">Server error during processing</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* GET /health */}
              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a]">
                  <h3 className="text-base sm:text-lg lg:text-[1.125rem] font-semibold text-[#fafafa] font-mono">GET /health</h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">Check API health status</p>
                </div>
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa]">Response (200 OK)</h4>
                    <div 
                      className="p-3 sm:p-4 rounded-lg"
                      style={{ background: '#18181b' }}
                    >
                      <code className="text-xs sm:text-sm font-mono text-[#fafafa] block space-y-1">
                        <div>&#123;</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"status"</span>: <span style={{ color: '#4ade80' }}>"healthy"</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"version"</span>: <span style={{ color: '#4ade80' }}>"1.0.0"</span>,</div>
                        <div>&nbsp;&nbsp;<span style={{ color: '#4ade80' }}>"timestamp"</span>: <span style={{ color: '#d19a66' }}>1234567890</span></div>
                        <div>&#125;</div>
                      </code>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Rate Limits */}
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold tracking-tight mb-4 sm:mb-6 text-[#fafafa]">
              Rate Limits
            </h2>
            <div 
              className="rounded-xl overflow-hidden"
              style={{ background: '#111113', border: '1px solid #27272a' }}
            >
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa] flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#eab308' }}
                      />
                      Demo API
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#a1a1aa]">
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>10 requests per minute per IP</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>Max 1000 characters per request</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>Best for testing and demos</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-[#fafafa] flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#22c55e' }}
                      />
                      Self-Hosted
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#a1a1aa]">
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>Unlimited requests</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>No character limits</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#a1a1aa] mt-1">•</span>
                        <span>Full control over configuration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold tracking-tight mb-4 sm:mb-6 text-[#fafafa]">
              Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a]">
                  <h3 className="text-sm sm:text-base lg:text-[1rem] font-semibold text-[#fafafa] flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#22c55e' }}
                    />
                    Do
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#a1a1aa]">
                    <li className="flex gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Scan all user inputs before processing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Log detected threats for analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Combine with other security measures</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Test your prompts during development</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden"
                style={{ background: '#111113', border: '1px solid #27272a' }}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[#27272a]">
                  <h3 className="text-sm sm:text-base lg:text-[1rem] font-semibold text-[#fafafa] flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#ef4444' }}
                    />
                    Don't
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#a1a1aa]">
                    <li className="flex gap-2">
                      <span className="text-[#ef4444] mt-1">•</span>
                      <span>Don't rely solely on this tool</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ef4444] mt-1">•</span>
                      <span>Don't skip validation of outputs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#ef4444] mt-1">•</span>
                      <span>Don't ignore low-severity warnings</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;