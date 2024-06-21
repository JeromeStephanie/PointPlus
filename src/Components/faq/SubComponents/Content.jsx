import React, { useState } from 'react'
import data from './data'

const Content = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className='mt-8'>
      <hr />
      {data.map((item, i) => (
        <div
          key={i}
          className={`font-[400] border-b border-b-gray-300 text-[18px] leading-[27.27px] mb-[20px] text-[#424242] `}
        >
          <div
            onClick={() => toggle(i)}
            className="text-black items-center font-[590] tracking-wide lg:font-[590] flex justify-between p-[10px] cursor-pointer"
          >
            <p
              className={selected === i ? "font-[590] lg:font-[590] text-amber-500" : ""}
            >
              {item.question}
            </p>
            <span className={`px-[10px] text-[20px] ${selected === i ? "font-[590] lg:font-[590] text-amber-500" : ""}`}>
              {selected === i ? "-" : "+"}
            </span>
          </div>
          <div
            className={`content px-[10px] tracking-wide p-[5px] ${selected === i
                ? "faq-content show text-black font-[500]"
                : "faq-content"
              }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
