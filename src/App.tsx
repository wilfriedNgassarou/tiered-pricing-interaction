import NumberFlow from "@number-flow/react"
import { motion } from "motion/react"
import { useState } from "react"

function App() {
  const [activePeriod, setActivePeriod] = useState('monthly')
  const [activePlan, setActivePlan] = useState('free')
  
  const plans = [
    { id: 'free', price: 0 },
    { id: 'starter', price: activePeriod == 'monthly' ? 9.99 : 7.49, tag: 'popular' },
    { id: 'pro', price: activePeriod == 'monthly' ? 19.99 : 17.49 }
  ]

  const periods = [ { id: 'monthly' }, { id: 'yearly' }]

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <section className="w-80 md:w-96 flex flex-col gap-3 p-3 rounded-3xl border-2 border-gray-200">
        <div 
          className="w-full h-12 flex font-medium rounded-full bg-gray-200 cursor-default"
        >
          {periods.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePeriod(item.id)} 
              className="w-1/2 h-full flex justify-center items-center relative"
            >
              {activePeriod == item.id && (
                <motion.div 
                  layoutId="period"
                  className="absolute m-1 rounded-full inset-0 bg-white shadow-md" 
                />
              )}
              <span className="relative z-20 capitalize">{item.id}</span>
            </div>
          ))}
        </div>

        {plans.map((item) => (
          <div 
            key={item.id}
            className="relative h-20 rounded-2xl border-2"
          >
            {activePlan == item.id && (
              <motion.div
                layoutId="plan-border" 
                className="absolute -inset-0.5 rounded-2xl border-2 border-black z-20" 
              />
            )}
            <div
              onClick={() => setActivePlan(item.id)} 
              className="h-full px-4 flex items-center justify-between cursor-default"
            >
              <div className="flex flex-col gap-1">
                <h2 className="leading-none font-semibold capitalize">
                  <span>{item.id} </span>
                  {item.tag != null && (
                    <span 
                      className="bg-yellow-200 text-yellow-800 text-sm rounded-lg py-0.5 px-2"
                    >
                      Popular
                    </span>
                  )}
                </h2>
                <div>
                  <span className="font-medium">
                    <NumberFlow 
                      value={item.price}
                      prefix="$" 
                    />
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <div className="w-7 h-7 -mt-6 rounded-full border-2 relative">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activePlan == item.id ? 1 : 0 }}
                  className="absolute -inset-0.5 flex items-center justify-center rounded-full bg-black"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"></path>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
        <button 
          className="bg-black hover:bg-opacity-85 duration-150 text-white font-medium py-3 w-full rounded-full"
        >
          Get Started
        </button>
      </section>
    </section>
  )
}

export default App
